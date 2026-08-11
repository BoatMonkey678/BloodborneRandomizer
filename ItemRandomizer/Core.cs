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
    private readonly bool randomizeKeys = true, randomizeBadges = true, randomizeRunes = true, randomizeTools = true;

    public ItemLotRandomizer(
        List<ItemLot> itemLots,
        List<JsonArea> jsonAreas,
        List<LinkLot> linkedLots,
        UserConfig.ItemLocationTargets keyItemLocationTarget,
        UserConfig.ItemLocationTargets badgeLocationTarget,
        UserConfig.ItemLocationTargets runeLocationTarget,
        UserConfig.ItemLocationTargets toolLocationTarget
    )
    {
        List<ItemLot> allItems = [.. itemLots];
        eligibleItems = [.. allItems];
        allItems.Sort((a, b) => b.Important.CompareTo(a.Important));
        linkLots = linkedLots;

        if (jsonAreas.FindAll(x => x.Initial).Count != 1)
            throw new InvalidDataException($"There should be exactly 1 initial area ({jsonAreas.FindAll(x => x.Initial).Count} were found)");

        areaTree = new AreaTree(jsonAreas);

        switch (badgeLocationTarget)
        {
            case UserConfig.ItemLocationTargets.Anywhere:
                break;
            case UserConfig.ItemLocationTargets.DoNotRandomize:
                randomizeBadges = false;
                break;
            case UserConfig.ItemLocationTargets.ImportantLocations:
                foreach (var badge in eligibleItems.FindAll(x => x.Badge))
                {
                    badge.Important = true;
                }
                break;
        }

        switch (runeLocationTarget)
        {
            case UserConfig.ItemLocationTargets.Anywhere:
                break;
            case UserConfig.ItemLocationTargets.DoNotRandomize:
                randomizeRunes = false;
                break;
            case UserConfig.ItemLocationTargets.ImportantLocations:
                foreach (var rune in eligibleItems.FindAll(x => x.Rune))
                {
                    rune.Important = true;
                }
                break;
        }

        switch (toolLocationTarget)
        {
            case UserConfig.ItemLocationTargets.Anywhere:
                break;
            case UserConfig.ItemLocationTargets.DoNotRandomize:
                randomizeTools = false;
                break;
            case UserConfig.ItemLocationTargets.ImportantLocations:
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

        switch (keyItemLocationTarget)
        {
            case UserConfig.ItemLocationTargets.Anywhere:
                keyLocations = availableLocations;
                break;
            case UserConfig.ItemLocationTargets.DoNotRandomize:
                randomizeKeys = false;
                break;
            case UserConfig.ItemLocationTargets.ImportantLocations:
                var keys = eligibleItems.FindAll(x => x.Important).ToList();
                foreach (var key in keys)
                {
                    if (key.Missable)
                        continue;
                    keyLocations.Add(key);
                    availableLocations.Remove(key);
                }

                var random = new Random();

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

    public Dictionary<int, int> RandomizeItemLots()
    {
        RandomizeItems();

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

    private void RandomizeItems()
    {
        var random = new Random();

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

                AssignItem(output, nextItem, nextLocation);
            }
        }
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
