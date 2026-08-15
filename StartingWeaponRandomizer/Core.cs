using BloodborneRandomizer.NormalFiles;

namespace BloodborneRandomizer.StartingWeaponRandomizer;

public class WeaponRandomizer(List<int> weapons, List<int> guns)
{
    // Saw Cleaver, Hunter Axe, Threaded Cane
    private readonly List<int> defaultWeapons = [7000000, 5000000, 22000000];
    // Hunter Pistol, Hunter Blunderbuss
    private readonly List<int> defaultGuns = [14000000, 6000000];
    private readonly List<int> availableWeapons = [.. weapons];
    private readonly List<int> availableGuns = [.. guns];
    private readonly Dictionary<int, int> output = [];

    public Dictionary<int, int> RandomizeStartingWeapons(AppConfig appConfig)
    {
        AssignWeapons(appConfig);

        AddUpgradedWeapons();

        return output;
    }

    private void AssignWeapons(AppConfig appConfig)
    {
        var random = RandomGenerator.GenerateRandom(appConfig);
        foreach (var weapon in defaultWeapons)
        {
            var nextWeaponIndex = random.Next(availableWeapons.Count);
            var nextWeapon = availableWeapons[nextWeaponIndex];
            availableWeapons.RemoveAt(nextWeaponIndex);
            AssignWeapon(weapon, nextWeapon);
        }

        foreach (var gun in defaultGuns)
        {
            var nextGunIndex = random.Next(availableGuns.Count);
            var nextGun = availableGuns[nextGunIndex];
            availableGuns.RemoveAt(nextGunIndex);
            AssignWeapon(gun, nextGun);
        }
    }

    private void AssignWeapon(int location, int weapon)
    {
        output.Add(location, weapon);
    }

    private void AddUpgradedWeapons()
    {
        Dictionary<int, int> ToAdd = [];

        foreach (var pair in output)
        {
            for (int i = 1; i <= 10; i++)
            {
                ToAdd.Add(pair.Key + 100 * i, pair.Value + 100 * i);
            }
        }

        foreach (var pair in ToAdd)
        {
            output.Add(pair.Key, pair.Value);
        }
    }
}