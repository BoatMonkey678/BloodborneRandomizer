using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class ShopLineupParam
{
    public static List<int> GetEligibleRowIDs(PARAM shopLineupParam)
    {
        List<int> excludedRows = [.. File.ReadAllText(Path.Combine(StaticConfig.Assets, StaticConfig.ExcludedShopTxt))
            .Split("\n")
            .Select(int.Parse)];
   
        return [.. shopLineupParam.Rows.FindAll(
            x => (x.ID >= 100002 && x.ID <= 101146 && !excludedRows.Contains(x.ID)) || (x.ID >= 200000 && x.ID <= 200093)
        ).Select(x => x.ID)];
    }

    private static Dictionary<int, Dictionary<string, object?>> CreateRowValueSnapshot(PARAM shopLineupParam)
    {
        var snapshot = new Dictionary<int, Dictionary<string, object?>>();

        foreach (var row in shopLineupParam.Rows)
        {
            var cells = new Dictionary<string, object?>(StringComparer.OrdinalIgnoreCase);
            foreach (var cell in row.Cells)
            {
                cells[cell.InternalName] = cell.Value;
            }

            snapshot[row.ID] = cells;
        }

        return snapshot;
    }

    public static PARAM RegenerateShopLineupParam(BND4 bnd, Dictionary<int, int> shopAssignment)
    {
        var shopLineupParam = PARAM.Read(bnd.Files.First(x => x.Name == StaticConfig.ShopLineupParamInterroot).Bytes);
        shopLineupParam.ApplyParamdef(PARAMDEF.XmlDeserialize(Path.Combine(StaticConfig.Dist, StaticConfig.Paramdef, "ShopLineupParam.xml")));

        var originalRowValues = CreateRowValueSnapshot(shopLineupParam);

        var random = new Random();

        foreach (var pair in shopAssignment)
        {
            var row = shopLineupParam.Rows.FirstOrDefault(x => x.ID == pair.Key) ?? throw new InvalidOperationException($"Missing row {pair.Key}");
            if (!originalRowValues.TryGetValue(pair.Value, out var targetValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Value}");
            }

            #pragma warning disable CS8601 // Possible null reference assignment.
            #pragma warning disable CS8602 // Dereference of a possibly null reference.

            var equipID = int.Parse(targetValues["equipId"].ToString() ?? "");
            row.Cells.First(x => x.InternalName == "equipId").Value = targetValues["equipId"];
            row.Cells.First(x => x.InternalName == "mtrlId").Value = targetValues["mtrlId"];
            row.Cells.First(x => x.InternalName == "sellQuantity").Value = targetValues["sellQuantity"];
            row.Cells.First(x => x.InternalName == "equipType").Value = targetValues["equipType"];

            if (int.Parse(row.Cells.First(x => x.InternalName == "shopType").Value.ToString() ?? "") == 0)
                row.Cells.First(x => x.InternalName == "value").Value = random.Next(2, 200) * 10;
            
            #pragma warning restore CS8602 // Dereference of a possibly null reference.
            #pragma warning restore CS8601 // Possible null reference assignment.
        }

        return shopLineupParam;
    }
}