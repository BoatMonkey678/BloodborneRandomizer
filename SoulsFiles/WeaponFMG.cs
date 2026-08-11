using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class WeaponFMG
{
    private readonly FMG weaponNames;
    private readonly FMG weaponDescriptions;

    public WeaponFMG(BND4 msgbnd)
    {
        weaponNames = FMG.Read(msgbnd.Files.First(x => x.Name == Config.EngusFMGWeaponNames).Bytes);
        weaponDescriptions = FMG.Read(msgbnd.Files.First(x => x.Name == Config.EngusFMGWeaponDescriptions).Bytes);
    }

    private Dictionary<int, string> GetOriginalWeaponNames()
    {
        Dictionary<int, string> output = [];

        foreach (var entry in weaponNames.Entries)
        {
            output.Add(entry.ID, entry.Text);
        }

        return output;
    }

    private Dictionary<int, string> GetOriginalWeaponDescriptions()
    {
        Dictionary<int, string> output = [];

        foreach (var entry in weaponDescriptions.Entries)
        {
            output.Add(entry.ID, entry.Text);
        }

        return output;
    }

    public Dictionary<string, FMG> UpdateFMGs(Dictionary<int, int> weaponAssignments, bool engus)
    {
        var originalWeaponNames = GetOriginalWeaponNames();
        var originalWeaponDescriptions = GetOriginalWeaponDescriptions();

        foreach (var pair in weaponAssignments)
        {
            weaponNames.Entries.First(x => x.ID == pair.Key).Text = originalWeaponNames[pair.Value];
            weaponDescriptions.Entries.First(x => x.ID == pair.Key).Text = originalWeaponDescriptions[pair.Value];
        }

        foreach (var pair in weaponAssignments.ToDictionary(pair => pair.Value, pair => pair.Key))
        {
            weaponNames.Entries.First(x => x.ID == pair.Key).Text = originalWeaponNames[pair.Value];
            weaponDescriptions.Entries.First(x => x.ID == pair.Key).Text = originalWeaponDescriptions[pair.Value];
        }

        if (engus)
        {
            return new Dictionary<string, FMG>() {
                {Config.EngusFMGWeaponNames, weaponNames},
                {Config.EngusFMGWeaponDescriptions, weaponDescriptions}
            };
        }
        else
        {
            return new Dictionary<string, FMG>() {
                {Config.EngGbFMGWeaponNames, weaponNames},
                {Config.EngGbFMGWeaponDescriptions, weaponDescriptions}
            };
        }
        
    }
}