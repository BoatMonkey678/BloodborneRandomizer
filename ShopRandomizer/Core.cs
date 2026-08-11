namespace BloodborneRandomizer.ShopRandomizer;

public class ShopLineupRandomizer(List<int> rows)
{
    private readonly List<int> items = [.. rows], locations = [.. rows];
    private readonly Dictionary<int, int> output = [];

    public Dictionary<int, int> RandomizeShopLineup()
    {
        RandomizeShopEntries();

        AddDuplicateRows();

        return output;
    }

    private void RandomizeShopEntries()
    {
        var random = new Random();

        while (items.Count > 0)
        {
            var nextItem = items[0];
            items.RemoveAt(0);

            int nextLocationIndex = random.Next(locations.Count);
            var nextLocation = locations[nextLocationIndex];
            locations.RemoveAt(nextLocationIndex);

            AssignEntry(nextLocation, nextItem);
        }
    }

    public void AddDuplicateRows()
    {
        Dictionary<int, int> ToAdd = [];

        foreach (var pair in output)
        {
            for (int i = 1; i <= 4; i++)
            {
                ToAdd.Add(pair.Key + 10000 * i, pair.Value);
            }
        }

        foreach (var pair in ToAdd)
        {
            output.Add(pair.Key, pair.Value);
        }
    }

    private void AssignEntry(int location, int item)
    {
        output.Add(location, item);
    }
}