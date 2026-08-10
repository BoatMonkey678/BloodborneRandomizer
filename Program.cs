using BloodborneRandomizer;
using BloodborneRandomizer.NormalFiles;
using BloodborneRandomizer.Randomizer;
using BloodborneRandomizer.SoulsFiles;
using SoulsFormats;

class Program
{
    static void Main(string[] args)
    {
        InitialData initialData = new(
            Path.Combine(Config.Assets, Config.ItemLotsJson),
            Path.Combine(Config.Assets, Config.AreasJson),
            Path.Combine(Config.Assets, Config.LinkLotsJson)
        );

        RandomizerCore randomizer = new(
            initialData.AllItems,
            initialData.Areas,
            initialData.LinkLots
        );

        var output = randomizer.Main();

        Spoiler.Generate(randomizer, output);

        var bnd = BND4.Read(Path.Combine(Config.Dist, Config.Gameparam));

        Dictionary<string, PARAM> paramsToWrite = new(){{
            Config.ItemLotParamInGameparam, GameparamManipulator.RegenerateItemLotParamRows(bnd, output)
        }};

        GameparamWriter.WriteGameparamWithReplacement(bnd, paramsToWrite);
    }
}