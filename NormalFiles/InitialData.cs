using BloodborneRandomizer.ItemRandomizer;
using Newtonsoft.Json;

namespace BloodborneRandomizer.NormalFiles;

public class InitialData
{
    public List<ItemLot> AllItems { get; private set; }
    public List<LinkLot> LinkLots { get; private set; }
    public List<JsonArea> Areas { get; private set; }
    public List<int> AvailableWeapons { get; private set; }
    public List<int> AvailableGuns { get; private set; }
    public Dictionary<int, int> InsightToBloodEchoesPrices { get; private set; }

    public InitialData(string itemLotsPath, string areasPath, string linkLotsPath, string weaponsPath, string gunsPath, string insightToBloodEchoPath)
    {
        AllItems = JsonConvert.DeserializeObject<List<ItemLot>>(File.ReadAllText(itemLotsPath)) ?? throw new FileLoadException($"Failed to deserialize {itemLotsPath}");
        LinkLots = JsonConvert.DeserializeObject<List<LinkLot>>(File.ReadAllText(linkLotsPath)) ?? throw new FileLoadException($"Failed to deserialize {linkLotsPath}");
        Areas = JsonConvert.DeserializeObject<List<JsonArea>>(File.ReadAllText(areasPath)) ?? throw new FileLoadException($"Failed to deserialize {areasPath}");

        AvailableWeapons = [.. File.ReadAllText(weaponsPath).Split("\n").Select(int.Parse)];

        AvailableGuns = [.. File.ReadAllText(gunsPath).Split("\n").Select(int.Parse)];

        InsightToBloodEchoesPrices = JsonConvert.DeserializeObject<Dictionary<int, int>>(File.ReadAllText(insightToBloodEchoPath)) ?? throw new FileLoadException($"Failed to deserialize {insightToBloodEchoPath}");
    }
}