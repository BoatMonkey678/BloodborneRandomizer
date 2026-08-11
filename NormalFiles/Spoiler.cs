using BloodborneRandomizer.ItemRandomizer;

namespace BloodborneRandomizer.NormalFiles;

public static class Spoiler
{
    public static string GenerateItemLot(ItemLotRandomizer randomizer, Dictionary<int, int> output)
    {
        string spoilerOutput = "";
        foreach (var pair in output)
        {
            spoilerOutput += $"{pair.Key}: {randomizer.GetItemLotByID(pair.Value).ItemName}\n";
        }
        // File.WriteAllText(Config.spoiler, spoilerOutput);
        return spoilerOutput;
    }
}