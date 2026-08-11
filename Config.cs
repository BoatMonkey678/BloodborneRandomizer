namespace BloodborneRandomizer;

public static class Config
{
    public const string ItemLotParamInterroot = @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\ItemLotParam.param";
    public const string ShopLineupParamInterroot = @"N:\SPRJ\data\INTERROOT_ps4\param\GameParam\64bit\ShopLineupParam.param";
    public const string Paramdef = "paramdef";
    public static string Assets = Path.Combine(Directory.GetCurrentDirectory(), "Assets");
    public static string Dist = Path.Combine(Directory.GetCurrentDirectory(), "dist");
    public const string ItemLotsJson = "itemLots.json";
    public const string ExcludedShopTxt = "excludedShop.txt";
    public const string AreasJson = "areas.json";
    public const string LinkLotsJson = "linkLots.json";
    public static string Gameparam = Path.Combine("param", "gameparam", "gameparam.parambnd.dcx");
    public static string dvdroot_ps4 = Path.Combine(Directory.GetCurrentDirectory(), "output", "dvdroot_ps4");
    public static string spoiler = Path.Combine(Directory.GetCurrentDirectory(), "output", "spoiler.txt");
}