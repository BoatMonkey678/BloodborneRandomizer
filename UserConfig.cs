namespace BloodborneRandomizer;

public class UserConfig(bool randomizeWeapons, int keyItemRandomization, int badgeRandomization, int runeRandomization, int toolRandomization)
{
    public bool RandomizeStartingWeapons { get; private set; } = randomizeWeapons;

    public enum ItemLocationTargets { Anywhere, ImportantLocations, DoNotRandomize };

    public ItemLocationTargets KeyItemsLocation = GetLocationType(keyItemRandomization);
    public ItemLocationTargets BadgeLocation = GetLocationType(badgeRandomization);

    public ItemLocationTargets RuneLocation = GetLocationType(runeRandomization);
    public ItemLocationTargets ToolLocation = GetLocationType(toolRandomization);

    public static ItemLocationTargets GetLocationType(int predicate)
    {
        return predicate switch
        {
            1 => ItemLocationTargets.ImportantLocations,
            0 => ItemLocationTargets.DoNotRandomize,
            _ => ItemLocationTargets.Anywhere,
        };
    }
}