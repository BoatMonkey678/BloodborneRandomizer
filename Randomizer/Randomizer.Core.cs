using Newtonsoft.Json;

namespace BloodborneRandomizer.Randomizer;

public class RandomizerCore
{
    private readonly List<ItemLot> allItemsLookup = [];
    private readonly List<ItemLot> allItems = [];
    private readonly AreaTree areaTree;
    private readonly List<ItemLot> availableLocations = [];
    private readonly Dictionary<int, int> output = [];
    private readonly List<LinkLot> linkLots = [];

    public RandomizerCore(List<ItemLot> itemLots, List<JsonArea> jsonAreas, List<LinkLot> linkedLots)
    {
        allItems = [.. itemLots];
        allItems.Sort((a, b) => b.Important.CompareTo(a.Important));
        allItemsLookup = [.. allItems];

        availableLocations = [.. allItems];
        linkLots = linkedLots;

        if (jsonAreas.FindAll(x => x.Initial).Count != 1)
            throw new InvalidDataException($"There should be exactly 1 initial area ({jsonAreas.FindAll(x => x.Initial).Count} were found)");

        areaTree = new AreaTree(jsonAreas);

        foreach (var loc in availableLocations)
        {
            loc.AssignRequirements(areaTree.GetArea(loc.Area));
        }
    }

    public Dictionary<int, int> Main()
    {
        RandomizeItems();

        foreach (var lot in linkLots)
        {
            foreach(var linked in lot.Linked)
            {
                output.Add(linked, output[lot.To]);
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

        while (allItems.Count > 0)
        {
            var nextItem = allItems[0];
            allItems.RemoveAt(0);
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
            int nextLocationIndex = random.Next(availableLocations.Count);

            ItemLot nextLocation = availableLocations[nextLocationIndex];

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

            availableLocations.RemoveAt(nextLocationIndex);

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
