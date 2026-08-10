using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class ShopLineupParam
{
    private readonly PARAM shopLineupParam;

    public ShopLineupParam(BND4 gameparam)
    {
        shopLineupParam = PARAM.Read(gameparam.Files.First(x => x.Name == Config.ShopLineupParamInterroot).Bytes);
    }

    private List<int> GetEligibleRowIDs()
    {
        List<int> excludedRows = [.. File.ReadAllText(Path.Combine(Config.Assets, Config.ExcludedShopTxt))
            .Split("\n")
            .Select(int.Parse)];
   
        return [.. shopLineupParam.Rows.FindAll(
            x => (x.ID >= 100000 && x.ID <= 101146 && !excludedRows.Contains(x.ID)) || (x.ID >= 200000 && x.ID <= 200093)
        ).Select(x => x.ID)];

    }
}