namespace BloodborneRandomizer;

public class UserConfig(bool randomizeWeapons, string keyItemRandomization, string badgeRandomization, string runeRandomization, string toolRandomization)
{
    public bool RandomizeStartingWeapons { get; private set; } = randomizeWeapons;

    public enum ItemLocationTargets { Anywhere, ImportantLocations, DoNotRandomize };

    public ItemLocationTargets KeyItemsLocation = GetLocationType(keyItemRandomization);
    public ItemLocationTargets BadgeLocation = GetLocationType(badgeRandomization);

    public ItemLocationTargets RuneLocation = GetLocationType(runeRandomization);
    public ItemLocationTargets ToolLocation = GetLocationType(toolRandomization);

    public static ItemLocationTargets GetLocationType(string predicate)
    {
        return predicate switch
        {
            "important" => ItemLocationTargets.ImportantLocations,
            "do not" => ItemLocationTargets.DoNotRandomize,
            _ => ItemLocationTargets.Anywhere,
        };
    }
}