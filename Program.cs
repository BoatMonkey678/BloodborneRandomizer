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
            Path.Combine(StaticConfig.Assets, StaticConfig.AvailableGunsTxt),
            Path.Combine(StaticConfig.Assets, StaticConfig.InsightToBloodEchoesPricesJson)
        );

        Console.WriteLine("Successfully loaded assets");

        AppConfig appConfig = AppConfig.New();

        Console.WriteLine("Successfully loaded user config");
        
        BND4 gameparam;

        if (appConfig.RemoveChaliceRequirements)
            gameparam = BND4.Read(Path.Combine(StaticConfig.Dist, StaticConfig.Gameparam));
        else
            gameparam = BND4.Read(Path.Combine(StaticConfig.Dist, StaticConfig.GameparamWithoutRitual));

        Dictionary<string, PARAM> paramsToWrite = [];
        
        if (appConfig.RandomizeItems)
        {
            Console.WriteLine("Successfully loaded game files");
            ItemLotRandomizer itemLotRandomizer = new(initialData, appConfig);
            
            ShopLineupRandomizer shopLineupRandomizer = new(
                ShopLineupParam.GetEligibleRowIDs(
                    PARAM.Read(gameparam.Files.First(x => x.Name == StaticConfig.ShopLineupParamInterroot).Bytes)
                )
            );

            var itemLotOutput = itemLotRandomizer.RandomizeItemLots();
            var shopLineupOutput = shopLineupRandomizer.RandomizeShopLineup();
            Console.WriteLine("Randomized items");

            File.WriteAllText(StaticConfig.spoiler, Spoiler.GenerateItemLot(itemLotRandomizer, itemLotOutput));

            Console.WriteLine("Generated spoiler logs");

            paramsToWrite.Add(StaticConfig.ItemLotParamInterroot, ItemLotParam.RegenerateItemLotParamRows(gameparam, itemLotOutput));
            paramsToWrite.Add(StaticConfig.ShopLineupParamInterroot, ShopLineupParam.RegenerateShopLineupParam(gameparam, shopLineupOutput, initialData.InsightToBloodEchoesPrices));
        }

        BND4? engusMsgbnd = null;
        BND4? enggbMsgbnd = null;
        Dictionary<string, FMG>? engusWeaponInfo = null;
        Dictionary<string, FMG>? enggbWeaponInfo = null;

        if (appConfig.ItemRandomizerOptions.RandomStartingWeapons)
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

        Console.WriteLine("Randomization complete. Check output folder for game files and spoiler logs");
    }
}