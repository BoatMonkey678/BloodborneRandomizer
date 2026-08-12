namespace BloodborneRandomizer.NormalFiles;

public class AppConfig
{
    public required int Seed { get; set; }
    public required bool RandomizeItems { get; set; }
    public required ItemRandomizerOptions ItemRandomizerOptions { get; set; }
}

public class ItemRandomizerOptions
{
    public required int RandomizeKeyItems { get; set; }
    public required int RandomizeBadges { get; set; }
    public required int RandomizeRunes { get; set; }
    public required int RandomizeTools { get; set; }
    public required bool RandomizeStartingWeapons { get; set; }
}