namespace BloodborneRandomizer;

public class UserConfig(bool randomizeWeapons, string keyItemRandomization, string badgeRandomization, string runeRandomization)
{
    public bool RandomizeStartingWeapons { get; private set; } = randomizeWeapons;

    public enum ItemLocationTargets { Anywhere, ImportantLocations, DoNotRandomize };

    public ItemLocationTargets KeyItemsLocation = keyItemRandomization switch
    {
        "important" => ItemLocationTargets.ImportantLocations,
        "do not" => ItemLocationTargets.DoNotRandomize,
        _ => ItemLocationTargets.Anywhere,
    }
    ;
    public ItemLocationTargets BadgeLocation = badgeRandomization switch
    {
        "important" => ItemLocationTargets.ImportantLocations,
        "do not" => ItemLocationTargets.DoNotRandomize,
        _ => ItemLocationTargets.Anywhere,
    };

    public ItemLocationTargets RuneLocation = runeRandomization switch
    {
        "important" => ItemLocationTargets.ImportantLocations,
        "do not" => ItemLocationTargets.DoNotRandomize,
        _ => ItemLocationTargets.Anywhere,
    };
}