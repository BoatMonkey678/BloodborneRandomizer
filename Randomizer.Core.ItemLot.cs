using Newtonsoft.Json;

namespace Randomizer.Core.Structs;

public class ItemLot
{
    public required int ID;
    public required string ItemName;
    public required string LocationName;
    public required string Area;
    public required bool Important;
    public required bool Missable;
    [JsonProperty]
    private List<int> AdditionalRequirements = new();
    public List<int> Requirements = new();
    public List<int> GeneratedRequirements = new();

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