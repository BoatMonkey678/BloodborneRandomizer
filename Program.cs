using BloodborneRandomizer;
using BloodborneRandomizer.NormalFiles;
using BloodborneRandomizer.ItemRandomizer;
using BloodborneRandomizer.SoulsFiles;
using SoulsFormats;
using BloodborneRandomizer.ShopRandomizer;

class Program
{
    static void Main(string[] args)
    {
        InitialData initialData = new(
            Path.Combine(Config.Assets, Config.ItemLotsJson),
            Path.Combine(Config.Assets, Config.AreasJson),
            Path.Combine(Config.Assets, Config.LinkLotsJson)
        );

        var gameparam = BND4.Read(Path.Combine(Config.Dist, Config.Gameparam));

        ItemLotRandomizer itemLotRandomizer = new(
            initialData.AllItems,
            initialData.Areas,
            initialData.LinkLots
        );

        ShopLineupRandomizer shopLineupRandomizer = new(
            ShopLineupParam.GetEligibleRowIDs(
                PARAM.Read(gameparam.Files.First(x => x.Name == Config.ShopLineupParamInterroot).Bytes)
            )
        );

        var itemLotOutput = itemLotRandomizer.RandomizeItemLots();
        var shopLineupOutput = shopLineupRandomizer.RandomizeShopLineup();

        Spoiler.GenerateItemLot(itemLotRandomizer, itemLotOutput);

        Dictionary<string, PARAM> paramsToWrite = new() {
            { Config.ItemLotParamInterroot, ItemLotParam.RegenerateItemLotParamRows(gameparam, itemLotOutput) },
            { Config.ShopLineupParamInterroot, ShopLineupParam.RegenerateShopLineupParam(gameparam, shopLineupOutput) }
        };

        Gameparam.WriteGameparamWithReplacement(gameparam, paramsToWrite, Path.Combine(Config.dvdroot_ps4, Config.Gameparam));
    }
}