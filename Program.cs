using BloodborneRandomizer;
using BloodborneRandomizer.Randomizer;
using BloodborneRandomizer.SoulsFiles;

class Program
{
    static void Main(string[] args)
    {
        RandomizerCore randomizer = new(
            Path.Combine(Config.TextAssetsFolder, Config.ItemLotsJson),
            Path.Combine(Config.TextAssetsFolder, Config.AreasJson),
            Path.Combine(Config.TextAssetsFolder, Config.LinkLotsJson)
        );

        var output = randomizer.Main();

        string spoilerOutput = "";
        foreach (var pair in output)
        {
            spoilerOutput += $"{pair.Key}: {randomizer.GetItemLotByID(pair.Value).ItemName}\n";
        }
        File.WriteAllText(Config.SpoilerOutput, spoilerOutput);

        GameparamWriter.WriteGameparam(output);
    }
}