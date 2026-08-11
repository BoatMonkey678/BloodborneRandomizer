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
            Path.Combine(StaticConfig.Assets, StaticConfig.ItemLotsJson),
            Path.Combine(StaticConfig.Assets, StaticConfig.AreasJson),
            Path.Combine(StaticConfig.Assets, StaticConfig.LinkLotsJson),
            Path.Combine(StaticConfig.Assets, StaticConfig.AvailableWeaponsTxt),
            Path.Combine(StaticConfig.Assets, StaticConfig.AvailableGunsTxt)
        );


        Console.WriteLine("Successfully loaded assets");

        UserConfig userConfig = new(true, "important", "important", "important", "anywhere");

        Console.WriteLine("Successfully loaded user config");

        var gameparam = BND4.Read(Path.Combine(StaticConfig.Dist, StaticConfig.Gameparam));

        Console.WriteLine("Successfully loaded game files");
        
        ItemLotRandomizer itemLotRandomizer = new(
            initialData.AllItems,
            initialData.Areas,
            initialData.LinkLots,
            userConfig.KeyItemsLocation,
            userConfig.BadgeLocation,
            userConfig.RuneLocation,
            userConfig.ToolLocation
        );

        ShopLineupRandomizer shopLineupRandomizer = new(
            ShopLineupParam.GetEligibleRowIDs(
                PARAM.Read(gameparam.Files.First(x => x.Name == StaticConfig.ShopLineupParamInterroot).Bytes)
            )
        );

        var itemLotOutput = itemLotRandomizer.RandomizeItemLots();
        var shopLineupOutput = shopLineupRandomizer.RandomizeShopLineup();

        Console.WriteLine("Randomized items");

        Dictionary<string, PARAM> paramsToWrite = new() {
            { StaticConfig.ItemLotParamInterroot, ItemLotParam.RegenerateItemLotParamRows(gameparam, itemLotOutput) },
            { StaticConfig.ShopLineupParamInterroot, ShopLineupParam.RegenerateShopLineupParam(gameparam, shopLineupOutput) }
        };

        BND4? engusMsgbnd = null;
        BND4? enggbMsgbnd = null;
        Dictionary<string, FMG>? engusWeaponInfo = null;
        Dictionary<string, FMG>? enggbWeaponInfo = null;

        if (userConfig.RandomizeStartingWeapons)
        {
            WeaponRandomizer weaponRandomizer = new(initialData.AvailableWeapons, initialData.AvailableGuns);
            engusMsgbnd = BND4.Read(Path.Combine(StaticConfig.Dist, StaticConfig.EngusItemMsgbnd));
            enggbMsgbnd = BND4.Read(Path.Combine(StaticConfig.Dist, StaticConfig.EngGbItemMsgbnd));

            WeaponFMG engusWeaponFMG = new(engusMsgbnd);
            WeaponFMG enggbWeaponFMG = new(engusMsgbnd);

            var weaponsOutput = weaponRandomizer.RandomizeStartingWeapons();

            engusWeaponInfo = engusWeaponFMG.UpdateFMGs(weaponsOutput, true);
            enggbWeaponInfo = enggbWeaponFMG.UpdateFMGs(weaponsOutput, false);

            paramsToWrite.Add(StaticConfig.EquipParamWeaponInterroot, EquipParamWeapon.RegenerateEquipParamWeapon(gameparam, weaponsOutput));

            Console.WriteLine("Randomized starting weapons");
        }

        Gameparam.WriteGameparamWithReplacement(gameparam, paramsToWrite, Path.Combine(StaticConfig.dvdroot_ps4, StaticConfig.Gameparam));

        if (enggbMsgbnd is not null && engusMsgbnd is not null && engusWeaponInfo is not null && enggbWeaponInfo is not null)
        {
            ItemMsgbnd.WriteItemMsgbndWithReplacement(engusMsgbnd, engusWeaponInfo, Path.Combine(StaticConfig.dvdroot_ps4, StaticConfig.EngusItemMsgbnd));
            ItemMsgbnd.WriteItemMsgbndWithReplacement(enggbMsgbnd, enggbWeaponInfo, Path.Combine(StaticConfig.dvdroot_ps4, StaticConfig.EngGbItemMsgbnd));
        }

        Console.WriteLine("Wrote game files");

        File.WriteAllText(StaticConfig.spoiler, Spoiler.GenerateItemLot(itemLotRandomizer, itemLotOutput));

        Console.WriteLine("Generated spoiler logs");

        Console.WriteLine("Randomization complete. Check output folder for game files and spoiler logs");
    }
}