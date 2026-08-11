using Newtonsoft.Json;

namespace BloodborneRandomizer.ItemRandomizer;

public class ItemLot
{
    public required int ID;
    public required string ItemName;
    public required string LocationName;
    public required string Area;
    public required bool Important;
    public required bool Badge;
    public required bool Rune;
    public required bool Missable;
    [JsonProperty]
    private List<int> AdditionalRequirements = [];
    public List<int> Requirements = [];
    public List<int> GeneratedRequirements = [];

    public void AssignRequirements(Area area)
    {
        Requirements.AddRange(area.Requirements);
        Requirements.AddRange(AdditionalRequirements);
    }

    public bool BaseRequires(int ID)
    {
        return Requirements.Contains(ID);
    }

    public bool GeneratedRequires(int ID)
    {
        return GeneratedRequirements.Contains(ID);
    }

}