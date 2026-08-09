using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class GameparamWriter()
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

    private static PARAM RegenerateRows(BND4 bnd, Dictionary<int, int> itemAssignment)
    {
        var itemLotParam = PARAM.Read(bnd.Files.First(x => x.Name == Config.ItemLotParamInGameparam).Bytes);
        itemLotParam.ApplyParamdef(PARAMDEF.XmlDeserialize(@".\dist\paramdef\ItemLotParam.xml"));

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

    public static void WriteGameparam(Dictionary<int, int> itemAssignments)
    {
        var bnd = BND4.Read(@$"{Config.SoulsFilesFolder}\{Config.GameparamRelativePath}");
        
        var itemLotParam = RegenerateRows(bnd, itemAssignments);

        bnd.Files.First(x => x.Name == Config.ItemLotParamInGameparam).Bytes = itemLotParam.Write();

        bnd.Write(@$"{Config.GameFileOutputFolder}\{Config.GameparamRelativePath}");
    }
}