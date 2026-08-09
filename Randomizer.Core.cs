using Randomizer.Core.Structs;
using Newtonsoft.Json;

namespace Randomizer.Core;

public class RandomizerCore
{
    private readonly List<ItemLot> allItemsLookup = new();
    private readonly List<ItemLot> normalItems = new();
    private readonly Queue<ItemLot> keyItems = new();
    private readonly List<ItemLot> allKeys = new();
    private readonly AreaTree areaTree;
    private readonly List<ItemLot> availableLocations = new();
    private readonly Dictionary<int, int> output = new();

    public RandomizerCore(string itemLotPath, string areasPath)
    {
        List<ItemLot> allItems = JsonConvert.DeserializeObject<List<ItemLot>>(File.ReadAllText(itemLotPath)) ?? throw new FileLoadException($"Failed to deserialize {itemLotPath}");
        List<JsonArea> jsonAreas = JsonConvert.DeserializeObject<List<JsonArea>>(File.ReadAllText(areasPath)) ?? throw new FileLoadException($"Failed to deserialize {areasPath}");
        allItemsLookup = allItems.ToList();
        availableLocations = allItems.ToList();

        if (jsonAreas.FindAll(x => x.Initial).Count != 1)
            throw new InvalidDataException($"There should be exactly 1 initial area ({jsonAreas.FindAll(x => x.Initial).Count} were found)");

        areaTree = new AreaTree(jsonAreas);

        foreach (var item in allItems)
        {
            if (item.Important)
            {
                keyItems.Enqueue(item);
                continue;
            }

            normalItems.Add(item);
        }

        foreach (var loc in availableLocations)
        {
            loc.AssignRequirements(areaTree.GetArea(loc.Area));
        }

        allKeys = keyItems.ToList();
    }

    public Dictionary<int, int> Main()
    {
        RandomizeItems();
        
        return output;
    }

    public ItemLot? GetItemLotByID(int ID)
    {
        return allItemsLookup.Find(x => x.ID == ID);
    }

    private void RandomizeItems()
    {
        var random = new Random();

        while (keyItems.Count > 0)
        {
            var nextItem = keyItems.Dequeue();
            ItemLot targetLocation = PickKeyLocation(random, nextItem);

            GetKeyItem(allKeys, nextItem).GeneratedRequirements = targetLocation.Requirements;

            AssignItem(output, nextItem, targetLocation);
        }

        while (normalItems.Count > 0)
        {
            var nextItem = normalItems[0];
            normalItems.RemoveAt(0);

            int nextLocationIndex = random.Next(availableLocations.Count);
            var nextLocation = availableLocations[nextLocationIndex];
            availableLocations.RemoveAt(nextLocationIndex);

            AssignItem(output, nextItem, nextLocation);
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
                var requiredItem = GetKeyItem(allKeys, req);

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
