namespace BloodborneRandomizer;

public static class StaticConfig
{
    public const string ItemLotParamInterroot = @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\ItemLotParam.param";
    public const string ShopLineupParamInterroot = @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\ShopLineupParam.param";
    public const string EquipParamWeaponInterroot = @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\EquipParamWeapon.param";
    public const string EngusFMGWeaponDescriptions = @"N:\SPRJ\data\INTERROOT_ps4\msg\engUS\64bit\武器うんちく.fmg";
    public const string EngGbFMGWeaponDescriptions = @"N:\SPRJ\data\INTERROOT_ps4\msg\engGB\64bit\武器うんちく.fmg";
    public const string EngusFMGWeaponNames = @"N:\SPRJ\data\INTERROOT_ps4\msg\engUS\64bit\武器名.fmg";
    public const string EngGbFMGWeaponNames = @"N:\SPRJ\data\INTERROOT_ps4\msg\engGB\64bit\武器名.fmg";
    public const string Paramdef = "paramdef";
    public static string Assets = Path.Combine(Directory.GetCurrentDirectory(), "Assets");
    public static string Dist = Path.Combine(Directory.GetCurrentDirectory(), "dist");
    public const string ItemLotsJson = "itemLots.json";
    public const string InsightToBloodEchoesPricesJson = "insightToBloodEchoPrices.json";
    public const string ExcludedShopTxt = "excludedShop.txt";
    public const string AvailableWeaponsTxt = "availableWeapons.txt";
    public const string AvailableGunsTxt = "availableGuns.txt";
    public const string AreasJson = "areas.json";
    public const string LinkLotsJson = "linkLots.json";
    public static string Gameparam = Path.Combine("param", "gameparam", "gameparam.parambnd.dcx");
    public static string GameparamWithoutRitual = Path.Combine("param_no_ritual", "gameparam", "gameparam.parambnd.dcx");
    public static string EngusItemMsgbnd = Path.Combine("msg", "engus", "item.msgbnd.dcx");
    public static string EngGbItemMsgbnd = Path.Combine("msg", "enggb", "item.msgbnd.dcx");
    public static string dvdroot_ps4 = Path.Combine(Directory.GetCurrentDirectory(), "output", "dvdroot_ps4");
    public static string spoiler = Path.Combine(Directory.GetCurrentDirectory(), "output", "spoiler.txt");
    public static string appconfig = Path.Combine(Directory.GetCurrentDirectory(), "appconfig.json");
}