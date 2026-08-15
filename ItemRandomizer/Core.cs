using System.Text.RegularExpressions;
using BloodborneRandomizer.NormalFiles;

namespace BloodborneRandomizer.ItemRandomizer;

public class ItemLotRandomizer
{
    private readonly List<ItemLot> allItemsLookup;
    private readonly List<ItemLot> eligibleItems;
    private readonly AreaTree areaTree;
    private readonly List<ItemLot> availableLocations;
    private readonly Dictionary<int, int> output = [];
    private readonly List<LinkLot> linkLots;
    private readonly List<ItemLot> keyLocations = [];
    private readonly bool randomizeKeys = true,
        randomizeBadges = true,
        randomizeRunes = true,
        randomizeTools = true,
        scaleUpgradeMaterials = false;

    public ItemLotRandomizer(InitialData initialData, AppConfig appConfig)
    {
        scaleUpgradeMaterials = appConfig.ItemRandomizerOptions.ScaleUpgradeMaterials;
        List<ItemLot> allItems = [.. initialData.AllItems];
        eligibleItems = [.. allItems];
        allItems.Sort((a, b) => b.Important.CompareTo(a.Important));
        linkLots = initialData.LinkLots;

        if (initialData.Areas.FindAll(x => x.Initial).Count != 1)
            throw new InvalidDataException($"There should be exactly 1 initial area ({initialData.Areas.FindAll(x => x.Initial).Count} were found)");

        areaTree = new AreaTree(initialData.Areas);

        switch (appConfig.ItemRandomizerOptions.BadgeLocation)
        {
            case ItemRandomizerOptions.ItemLocationTargets.Anywhere:
                break;
            case ItemRandomizerOptions.ItemLocationTargets.DoNotRandomize:
                randomizeBadges = false;
                break;
            case ItemRandomizerOptions.ItemLocationTargets.ImportantLocations:
                foreach (var badge in eligibleItems.FindAll(x => x.Badge))
                {
                    badge.Important = true;
                }
                break;
        }

        switch (appConfig.ItemRandomizerOptions.RuneLocation)
        {
            case ItemRandomizerOptions.ItemLocationTargets.Anywhere:
                break;
            case ItemRandomizerOptions.ItemLocationTargets.DoNotRandomize:
                randomizeRunes = false;
                break;
            case ItemRandomizerOptions.ItemLocationTargets.ImportantLocations:
                foreach (var rune in eligibleItems.FindAll(x => x.Rune))
                {
                    rune.Important = true;
                }
                break;
        }

        switch (appConfig.ItemRandomizerOptions.ToolLocation)
        {
            case ItemRandomizerOptions.ItemLocationTargets.Anywhere:
                break;
            case ItemRandomizerOptions.ItemLocationTargets.DoNotRandomize:
                randomizeTools = false;
                break;
            case ItemRandomizerOptions.ItemLocationTargets.ImportantLocations:
                foreach (var tool in eligibleItems.FindAll(x => x.Tool))
                {
                    tool.Important = true;
                }
                break;
        }

        allItemsLookup = [.. eligibleItems];
        availableLocations = [.. eligibleItems];

        foreach (var loc in availableLocations)
        {
            loc.AssignRequirements(areaTree.GetArea(loc.Area));
        }

        switch (appConfig.ItemRandomizerOptions.KeyItemsLocation)
        {
            case ItemRandomizerOptions.ItemLocationTargets.Anywhere:
                keyLocations = availableLocations;
                break;
            case ItemRandomizerOptions.ItemLocationTargets.DoNotRandomize:
                randomizeKeys = false;
                break;
            case ItemRandomizerOptions.ItemLocationTargets.ImportantLocations:
                var keys = eligibleItems.FindAll(x => x.Important).ToList();
                foreach (var key in keys)
                {
                    if (key.Missable)
                        continue;
                    keyLocations.Add(key);
                    availableLocations.Remove(key);
                }

                var random = RandomGenerator.GenerateRandom(appConfig);

                while (keyLocations.Count < keys.Count)
                {
                    int nextLocationIndex = random.Next(availableLocations.Count);
                    var nextLocation = availableLocations[nextLocationIndex];
                    if (keyLocations.Contains(nextLocation))
                        continue;
                    if (nextLocation.Missable)
                        continue;
                    
                    keyLocations.Add(nextLocation);
                    availableLocations.Remove(nextLocation);
                }

                break;
        }

        if (!randomizeKeys)
        {
            foreach (var item in allItems)
            {
                if (item.Important)
                {
                    output.Add(item.ID, item.ID);
                    availableLocations.RemoveAll(x => x.ID == item.ID);
                    eligibleItems.RemoveAll(x => x.ID == item.ID);
                }
            }
        }

        if (!randomizeBadges)
        {
            foreach (var item in allItems)
            {
                if (item.Badge)
                {
                    output.Add(item.ID, item.ID);
                    availableLocations.RemoveAll(x => x.ID == item.ID);
                    eligibleItems.RemoveAll(x => x.ID == item.ID);
                }
            }
        }

        if (!randomizeRunes)
        {
            foreach (var item in allItems)
            {
                if (item.Rune)
                {
                    if (!randomizeKeys && item.ID == 43020)
                        continue;
                    output.Add(item.ID, item.ID);
                    availableLocations.RemoveAll(x => x.ID == item.ID);
                    eligibleItems.RemoveAll(x => x.ID == item.ID);
                }
            }
        }

        if (!randomizeTools)
        {
            foreach (var item in allItems)
            {
                if (item.Tool)
                {
                    output.Add(item.ID, item.ID);
                    availableLocations.RemoveAll(x => x.ID == item.ID);
                    eligibleItems.RemoveAll(x => x.ID == item.ID);
                }
            }
        }
    }

    public Dictionary<int, int> RandomizeItemLots(AppConfig appConfig)
    {
        RandomizeItems(appConfig);

        foreach (var lot in linkLots)
        {
            foreach(var linked in lot.Linked)
            {
                try
                {
                    output.Add(linked, output[lot.To]);
                }
                catch (KeyNotFoundException)
                {
                    ;
                }
            }
        }
        
        return output;
    }

    public ItemLot GetItemLotByID(int ID)
    {
        return allItemsLookup.First(x => x.ID == ID);
    }

    private void RandomizeItems(AppConfig appConfig)
    {
        var random = RandomGenerator.GenerateRandom(appConfig);;

        while (eligibleItems.Count > 0)
        {
            var nextItem = eligibleItems[0];
            eligibleItems.RemoveAt(0);
            if (nextItem.Important)
            {
                ItemLot targetLocation = PickKeyLocation(random, nextItem);   
                GetKeyItem(allItemsLookup, nextItem).GeneratedRequirements = targetLocation.Requirements;
                AssignItem(output, nextItem, targetLocation);
            }
            else
            {
                int nextLocationIndex = random.Next(availableLocations.Count);
                var nextLocation = availableLocations[nextLocationIndex];
                availableLocations.RemoveAt(nextLocationIndex);
                if (scaleUpgradeMaterials)
                {
                    if (AssignScaledUpgradeMaterials(nextItem, nextLocation))
                    {
                        continue;
                    }
                }
                AssignItem(output, nextItem, nextLocation);
            }
        }
    }

    private bool AssignScaledUpgradeMaterials(ItemLot nextItem, ItemLot nextLocation)
    {
        if (nextItem.ItemName.Contains("Twin Blood Stone Shards"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Mid)
            {
                return true;
            }
        }
        else if (nextItem.ItemName.Contains("Blood Stone Shard"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Early)
            {
                return true;
            }
        }
        else if (nextItem.ItemName.Contains("Blood Stone Chunk"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Late)
            {
                return true;
            }
        }
        else if (nextItem.ItemName.Contains("Blood Rock"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Late)
            {
                return true;
            }
        }
        for (int i = 1; i <= 3; i++)
        {
            if (nextItem.ItemName.Contains($"Coldblood Dew ({i})"))
            {
                if (!areaTree.GetArea(nextLocation.Area).Early)
                {
                    return true;
                }
            }
        }
        for (int i = 4; i <= 5; i++)
        {
            if (nextItem.ItemName.Contains($"Thick Coldblood ({i})"))
            {
                if (!areaTree.GetArea(nextLocation.Area).Early)
                {
                    return true;
                }
            }
        }
        if (nextItem.ItemName.Contains("Thick Coldblood (6)"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Mid)
            {
                return true;
            }
        }
        for (int i = 7; i <= 9; i++)
        {
            if (nextItem.ItemName.Contains($"Frenzied Coldblood ({i})"))
            {
                if (!areaTree.GetArea(nextLocation.Area).Mid)
                {
                    return true;
                }
            }
        }
        if (nextItem.ItemName.Contains("Kin Coldblood (10)"))
        {
            if (!areaTree.GetArea(nextLocation.Area).Mid)
            {
                return true;
            }
        }
        for (int i = 11; i <= 12; i++)
        {
            if (nextItem.ItemName.Contains($"Kin Coldblood ({i})"))
            {
                if (!areaTree.GetArea(nextLocation.Area).Late)
                {
                    return true;
                }
            }
        }
        

        return false;
    }

    private ItemLot PickKeyLocation(Random random, ItemLot item)
    {
        while (true)
        {
            int nextLocationIndex = random.Next(keyLocations.Count);

            ItemLot nextLocation = keyLocations[nextLocationIndex];

            if (nextLocation.Missable)
                continue;

            if (nextLocation.BaseRequires(item.ID))
                continue;

            foreach (var req in nextLocation.Requirements)
            {
                var requiredItem = GetKeyItem(allItemsLookup, req);

                if (requiredItem.GeneratedRequires(item.ID))
                    goto ContinueWhile;
            }

            keyLocations.RemoveAt(nextLocationIndex);

            return nextLocation;

            ContinueWhile:
                continue;
        }
    }

    private static ItemLot GetKeyItem(List<ItemLot> keyItems, ItemLot item)
    {
        return keyItems.FirstOrDefault(x => x == item) ?? throw new InvalidDataException($"All keys list didn't contain key item: {item.ID}");
    }

    private static ItemLot GetKeyItem(List<ItemLot> keyItems, int ID)
    {
        return keyItems.FirstOrDefault(x => x.ID == ID) ?? throw new InvalidDataException($"All keys list didn't contain key item: {ID}");
    }

    private static void AssignItem(Dictionary<int, int> output, ItemLot item, ItemLot location)
    {
        output.Add(location.ID, item.ID);
    }
}
