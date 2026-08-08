using ItemLotGenerator.ItemLot;
using Newtonsoft.Json;
using SoulsFormats;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        Dictionary<string, string> AreaNamesLookup = new()
        {
            {"m21_00_00_00.msb.dcx", "Hunter's Dream"},
            {"m21_01_00_00.msb.dcx", "Abandoned Old Workshop"},
            {"m22_00_00_00.msb.dcx", "Hemwick Charnel Lane"},
            {"m23_00_00_00.msb.dcx", "Old Yharnam"},
            {"m24_00_00_00.msb.dcx", "Cathedral Ward"},
            {"m24_01_00_00.msb.dcx", "Central Yharnam"},
            {"m24_02_00_00.msb.dcx", "Upper Cathedral Ward"},
            {"m25_00_00_00.msb.dcx", "Forsaken Castle Cainhurst"},
            {"m26_00_00_00.msb.dcx", "Nightmare of Mensis"},
            {"m27_00_00_00.msb.dcx", "Forbidden Woods"},
            {"m28_00_00_00.msb.dcx", "Yahar'gul, Unseen Village"},
            {"m32_00_00_00.msb.dcx", "Byrgenwerth"},
            {"m33_00_00_00.msb.dcx", "Nightmare Frontier"},
            {"m34_00_00_00.msb.dcx", "Hunter's Nightmare"},
            {"m35_00_00_00.msb.dcx", "Research Hall"},
            {"m36_00_00_00.msb.dcx", "Fishing Hamlet"},

        };
        
        List<ItemLot> itemLots = [];

        foreach (var file in Directory.GetFiles(@".\dist"))
        {
            itemLots.AddRange(GetItemLotsPerMap(Path.GetFileName(file), AreaNamesLookup));
        }

        string json = JsonConvert.SerializeObject(itemLots, Formatting.Indented);
        File.WriteAllText(@".\itemLots.json", json);
    }

    static List<ItemLot> GetItemLotsPerMap(string msbName, Dictionary<string, string> AreaNamesLookup)
    {
        string AreaName = AreaNamesLookup[msbName];
        var msb = MSBB.Read($@".\dist\{msbName}");
        List<ItemLot> output = [];

        foreach (var treasure in msb.Events.Treasures)
        {
            if (treasure.ItemLot1 == -1)
                continue;

            if (msb.Parts.DummyObjects.Find(x => x.Name == treasure.TreasurePartName) is not null)
                continue;

            if (AreaName == "Cathedral Ward" && treasure.ItemLot1 == 2420320)
                continue;

            output.Add(new ItemLot
            {
                ID = treasure.ItemLot1,
                ItemName = "",
                LocationName = "",
                LocationInternalName = ToCodePoints(treasure.Name),
                Area = AreaName,
                Important = false
            });
        }

        return output;
    }

    
    static string ToCodePoints(string input)
    {
        var sb = new StringBuilder();

        foreach (var rune in input.EnumerateRunes())
        {
            if (rune.Value <= 0x7F)
                sb.Append((char)rune.Value);
            else
                sb.Append($"{rune.Value:X}");
        }

        return sb.ToString();
    }
}