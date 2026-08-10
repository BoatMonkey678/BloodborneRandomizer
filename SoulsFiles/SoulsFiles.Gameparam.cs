using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class GameparamManipulator()
{
    private static Dictionary<int, Dictionary<string, object?>> CreateRowValueSnapshot(PARAM itemLotParam)
    {
        var snapshot = new Dictionary<int, Dictionary<string, object?>>();

        foreach (var row in itemLotParam.Rows)
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

    public static PARAM RegenerateItemLotParamRows(BND4 bnd, Dictionary<int, int> itemAssignment)
    {
        var itemLotParam = PARAM.Read(bnd.Files.First(x => x.Name == Config.ItemLotParamInGameparam).Bytes);
        itemLotParam.ApplyParamdef(PARAMDEF.XmlDeserialize(Path.Combine(Config.Dist, Config.ItemLotParamdef)));

        var originalRowValues = CreateRowValueSnapshot(itemLotParam);

        foreach (var pair in itemAssignment)
        {
            var row = itemLotParam.Rows.FirstOrDefault(x => x.ID == pair.Key) ?? throw new InvalidOperationException($"Missing row {pair.Key}");
            if (!originalRowValues.TryGetValue(pair.Value, out var targetValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Value}");
            }

            for (int i = 1; i <= 8; i++)
            {
                var lotItemId = $"lotItemId0{i}";
                var lotItemCategory = $"lotItemCategory0{i}";
                var lotItemBasePoint = $"lotItemBasePoint0{i}";
                var lotItemNum = $"lotItemNum0{i}";

                #pragma warning disable CS8601 // Possible null reference assignment.
                row.Cells.First(x => x.InternalName == lotItemId).Value = targetValues[lotItemId];
                row.Cells.First(x => x.InternalName == lotItemCategory).Value = targetValues[lotItemCategory];
                row.Cells.First(x => x.InternalName == lotItemBasePoint).Value = targetValues[lotItemBasePoint];
                row.Cells.First(x => x.InternalName == lotItemNum).Value = targetValues[lotItemNum];
                #pragma warning restore CS8601 // Possible null reference assignment.
            }
        }

        return itemLotParam;
    }
}

public static class GameparamWriter
{
    public static void WriteGameparamWithReplacement(BND4 bnd, Dictionary<string, PARAM> generatedParam)
    {
        foreach (var pair in generatedParam)
        {
            bnd.Files.First(x => x.Name == pair.Key).Bytes = pair.Value.Write();
        }

        bnd.Write(Path.Combine(Config.dvdroot_ps4, Config.Gameparam));
    }
}