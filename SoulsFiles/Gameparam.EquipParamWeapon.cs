using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class EquipParamWeapon
{
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

    public static PARAM RegenerateEquipParamWeapon(BND4 bnd, Dictionary<int, int> shopAssignment)
    {
        var equipParamWeapon = PARAM.Read(bnd.Files.First(x => x.Name == Config.EquipParamWeaponInterroot).Bytes);
        equipParamWeapon.ApplyParamdef(PARAMDEF.XmlDeserialize(Path.Combine(Config.Dist, Config.Paramdef, "EquipParamWeapon.xml")));

        var originalRowValues = CreateRowValueSnapshot(equipParamWeapon);

        foreach (var pair in shopAssignment)
        {
            var row = equipParamWeapon.Rows.FirstOrDefault(x => x.ID == pair.Key) ?? throw new InvalidOperationException($"Missing row {pair.Key}");
            if (!originalRowValues.TryGetValue(pair.Value, out var targetValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Value}");
            }
            if (!originalRowValues.TryGetValue(pair.Key, out var originalValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Key}");
            }

            #pragma warning disable CS8601 // Dereference of a possibly null reference.

            foreach (var cell in row.Cells)
            {
                cell.Value = targetValues[cell.InternalName];
            }

            row.Cells.First(x => x.InternalName == "originEquipWep").Value = originalValues["originEquipWep"];
            row.Cells.First(x => x.InternalName == "properStrength").Value = 0;
            row.Cells.First(x => x.InternalName == "properAgility").Value = 0;
            row.Cells.First(x => x.InternalName == "properMagic").Value = 0;
            row.Cells.First(x => x.InternalName == "properFaith").Value = 0;

            #pragma warning restore CS8601 // Possible null reference assignment.
        }

        foreach (var pair in shopAssignment.ToDictionary(pair => pair.Value, pair => pair.Key))
        {
            var row = equipParamWeapon.Rows.FirstOrDefault(x => x.ID == pair.Key) ?? throw new InvalidOperationException($"Missing row {pair.Key}");
            if (!originalRowValues.TryGetValue(pair.Value, out var targetValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Value}");
            }
            if (!originalRowValues.TryGetValue(pair.Key, out var originalValues))
            {
                throw new InvalidOperationException($"Missing target row {pair.Key}");
            }

            #pragma warning disable CS8601 // Dereference of a possibly null reference.

            foreach (var cell in row.Cells)
            {
                cell.Value = targetValues[cell.InternalName];
            }

            row.Cells.First(x => x.InternalName == "originEquipWep").Value = originalValues["originEquipWep"];

            #pragma warning restore CS8601 // Possible null reference assignment.
        }

        return equipParamWeapon;
    }
}