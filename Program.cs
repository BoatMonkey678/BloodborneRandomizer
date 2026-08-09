using Bloodborne.Files;
using Randomizer.Core;
using SoulsFormats;

class Program
{
    static void Main(string[] args)
    {
        RandomizerCore randomizer = new(@".\Assets\itemLots.json", @".\Assets\areas.json", @".\Assets\linkLots.json");

        var output = randomizer.Main();

        string spoilerOutput = "";
        foreach (var pair in output)
        {
            spoilerOutput += $"{pair.Key}: {randomizer.GetItemLotByID(pair.Value).ItemName}\n";
        }
        File.WriteAllText(@".\output\spoiler.txt", spoilerOutput);

        ParamTester.TestIfRowsExist(@".\dist\param\gameparam\gameparam.parambnd.dcx", output);
        var itemLotParam = FileWriter.RegenerateRows(@".\dist\param\gameparam\gameparam.parambnd.dcx", output);

        var bnd = BND4.Read(@".\dist\param\gameparam\gameparam.parambnd.dcx");
        bnd.Files.First(x => x.Name == @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\ItemLotParam.param").Bytes = itemLotParam.Write();

        bnd.Write(@".\output\dvdroot_ps4\param\gameparam\gameparam.parambnd.dcx");
    }
}