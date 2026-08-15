using Newtonsoft.Json;
namespace BloodborneRandomizer.NormalFiles;

public class AppConfig
{
    public required int Seed { get; set; }
    public required bool RandomizeItems { get; set; }
    public required bool RemoveChaliceRequirements { get; set; }
    public required ItemRandomizerOptions ItemRandomizerOptions { get; set; }

    public static AppConfig New()
    {
        return JsonConvert.DeserializeObject<AppConfig>(File.ReadAllText(StaticConfig.appconfig)) ?? throw new Exception("Unable to deserialize appconfig.json");
    }
}

public class ItemRandomizerOptions
{
    public enum ItemLocationTargets { Anywhere, ImportantLocations, DoNotRandomize };
    public ItemLocationTargets KeyItemsLocation;
    public ItemLocationTargets BadgeLocation;

    public ItemLocationTargets RuneLocation;
    public ItemLocationTargets ToolLocation;
    public required bool RandomStartingWeapons { get; set; }
    public required bool ScaleUpgradeMaterials { get; set; }

    [JsonConstructor]
    public ItemRandomizerOptions(
        int RandomizeKeyItems,
        int RandomizeBadges,
        int RandomizeRunes,
        int RandomizeTools,
        bool RandomizeStartingWeapons,
        bool UpgradeMaterialScaling
    )
    {
        KeyItemsLocation = GetLocationType(RandomizeKeyItems);
        BadgeLocation = GetLocationType(RandomizeBadges);
        RuneLocation = GetLocationType(RandomizeRunes);
        ToolLocation = GetLocationType(RandomizeTools);
        RandomStartingWeapons = RandomizeStartingWeapons;
        ScaleUpgradeMaterials = UpgradeMaterialScaling;
    }

    private static ItemLocationTargets GetLocationType(int predicate)
    {
        return predicate switch
        {
            1 => ItemLocationTargets.ImportantLocations,
            0 => ItemLocationTargets.DoNotRandomize,
            _ => ItemLocationTargets.Anywhere,
        };
    }
}