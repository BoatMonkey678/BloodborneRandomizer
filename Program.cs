using BloodborneRandomizer;
using BloodborneRandomizer.NormalFiles;
using BloodborneRandomizer.ItemRandomizer;
using BloodborneRandomizer.SoulsFiles;
using SoulsFormats;
using BloodborneRandomizer.ShopRandomizer;
using BloodborneRandomizer.StartingWeaponRandomizer;

class Program
{
    static void Main(string[] args)
    {
        InitialData initialData = new(
            Path.Combine(Config.Assets, Config.ItemLotsJson),
            Path.Combine(Config.Assets, Config.AreasJson),
            Path.Combine(Config.Assets, Config.LinkLotsJson),
            Path.Combine(Config.Assets, Config.AvailableWeaponsTxt),
            Path.Combine(Config.Assets, Config.AvailableGunsTxt)
        );

        Console.WriteLine("Successfully loaded assets");

        var gameparam = BND4.Read(Path.Combine(Config.Dist, Config.Gameparam));

        var engusMsgbnd = BND4.Read(Path.Combine(Config.Dist, Config.EngusItemMsgbnd));
        var enggbMsgbnd = BND4.Read(Path.Combine(Config.Dist, Config.EngGbItemMsgbnd));

        WeaponFMG engusWeaponFMG = new(engusMsgbnd);
        WeaponFMG enggbWeaponFMG = new(engusMsgbnd);

        Console.WriteLine("Successfully loaded game files");
        
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

        WeaponRandomizer weaponRandomizer = new(initialData.AvailableWeapons, initialData.AvailableGuns);

        Console.WriteLine("Randomizing items...");

        var itemLotOutput = itemLotRandomizer.RandomizeItemLots();
        var shopLineupOutput = shopLineupRandomizer.RandomizeShopLineup();

        Console.WriteLine("Randomized items");

        Console.WriteLine("Randomizing starting weapons...");

        var weaponsOutput = weaponRandomizer.RandomizeStartingWeapons();

        var engusWeaponNames = engusWeaponFMG.UpdateFMGs(weaponsOutput, true);
        var enggbWeaponNames = enggbWeaponFMG.UpdateFMGs(weaponsOutput, false);

        Console.WriteLine("Randomized starting weapons");

        Console.WriteLine("Writing game files...");

        Dictionary<string, PARAM> paramsToWrite = new() {
            { Config.ItemLotParamInterroot, ItemLotParam.RegenerateItemLotParamRows(gameparam, itemLotOutput) },
            { Config.ShopLineupParamInterroot, ShopLineupParam.RegenerateShopLineupParam(gameparam, shopLineupOutput) },
            { Config.EquipParamWeaponInterroot, EquipParamWeapon.RegenerateEquipParamWeapon(gameparam, weaponsOutput) }
        };

        Gameparam.WriteGameparamWithReplacement(gameparam, paramsToWrite, Path.Combine(Config.dvdroot_ps4, Config.Gameparam));

        ItemMsgbnd.WriteItemMsgbndWithReplacement(engusMsgbnd, engusWeaponNames, Path.Combine(Config.dvdroot_ps4, Config.EngusItemMsgbnd));
        ItemMsgbnd.WriteItemMsgbndWithReplacement(enggbMsgbnd, enggbWeaponNames, Path.Combine(Config.dvdroot_ps4, Config.EngGbItemMsgbnd));

        Console.WriteLine("Wrote game files");

        Console.WriteLine("Generating spoiler logs...");

        File.WriteAllText(Config.spoiler, Spoiler.GenerateItemLot(itemLotRandomizer, itemLotOutput));

        Console.WriteLine("Generated spoiler logs");

        Console.WriteLine("Randomization complete. Check output folder for game files and spoiler logs");
    }
}