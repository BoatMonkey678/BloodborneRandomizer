using ItemLotGenerator.ItemLot;
using Newtonsoft.Json;
using SoulsFormats;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        BND4 bnd = BND4.Read(@".\dist\gameparam.parambnd.dcx");

        Dictionary<string, PARAM> gameparam = bnd.Files.Select(x => Path.GetFileName(x.Name).Replace(".param", ""))
            .Zip(bnd.Files.Select(x => PARAM.Read(x.Bytes)))
                .ToDictionary(x => x.First, x => x.Second);

        gameparam["ItemLotParam"].ApplyParamdef(PARAMDEF.XmlDeserialize(@".\dist\ItemLotParam.xml"));

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

        foreach (var file in Directory.GetFiles(@".\dist\map"))
        {
            itemLots.AddRange(GetItemLotsPerMap(Path.GetFileName(file), AreaNamesLookup, gameparam));
        }

        string json = JsonConvert.SerializeObject(itemLots, Formatting.Indented);
        File.WriteAllText(@".\itemLots.json", json);
    }

    static List<ItemLot> GetItemLotsPerMap(string msbName, Dictionary<string, string> AreaNamesLookup, Dictionary<string, PARAM> gameparam)
    {
        string AreaName = AreaNamesLookup[msbName];
        var msb = MSBB.Read($@".\dist\map\{msbName}");
        List<ItemLot> output = [];

        foreach (var treasure in msb.Events.Treasures)
        {
            if (treasure.ItemLot1 == -1)
                continue;

            if (msb.Parts.DummyObjects.Find(x => x.Name == treasure.TreasurePartName) is not null)
                continue;

            if (AreaName == "Cathedral Ward" && treasure.ItemLot1 == 2420320)
                continue;

            if (treasure.ItemLot1 == 2400490 || treasure.ItemLot1 == 3300100 || treasure.ItemLot1 == 2300270)
                continue;

            output.Add(new ItemLot
            {
                ID = treasure.ItemLot1,
                ItemName = GetLotItemName(gameparam, gameparam["ItemLotParam"].Rows.First(x => x.ID == treasure.ItemLot1)),
                LocationName = "",
                Area = AreaName,
                Important = false
            });

            for (int i = treasure.ItemLot1 + 1; i <= treasure.ItemLot1 + 4; i++)
            {
                try
                {
                    var row = gameparam["ItemLotParam"].Rows.First(x => x.ID == i);
                    output.Add(new ItemLot
                    {
                       ID = row.ID,
                       ItemName = GetLotItemName(gameparam, row),
                       LocationName = "",
                       Area = AreaName,
                       Important = false 
                    });
                }
                catch (InvalidOperationException)
                {
                    ;
                }
            }
        }

        return output;
    }

    static string GetLotItemName(Dictionary<string, PARAM> gameparam, PARAM.Row row)
    {
        string output = "";

        ItemLotRow itemLotRow = new(row);

        try
        {
            if (itemLotRow.lotItemCategory == 0)
            {
                output += gameparam["EquipParamWeapon"].Rows.First(x => x.ID == itemLotRow.lotItemId).Name;
            }
            else if (itemLotRow.lotItemCategory == 1)
            {
                output += gameparam["EquipParamProtector"].Rows.First(x => x.ID == itemLotRow.lotItemId).Name;
            }
            else if (itemLotRow.lotItemCategory == 4)
            {
                output += gameparam["EquipParamGoods"].Rows.First(x => x.ID == itemLotRow.lotItemId).Name;

                if (itemLotRow.lotItemNum > 1)
                {
                    output += $" x{itemLotRow.lotItemNum}";
                }
            }
            else if (itemLotRow.lotItemCategory == 8)
            {
                output += "GEM: ";
                output += gameparam["GemGenParam"].Rows.First(x => x.ID == itemLotRow.lotItemId).Name;

                if (itemLotRow.lotItemNum > 1)
                {
                    output += $" x{itemLotRow.lotItemNum}";
                }
            }
            else
            {
                throw new InvalidDataException("Unrecognized lotItemCategory");
            }
        }
        catch (InvalidOperationException)
        {
            Console.WriteLine($"Row {row.ID} contained an nonexistent item");
        }

        return output;
    }

    class ItemLotRow
    {
        public int lotItemId { get; private set; }
        public int lotItemCategory { get; private set; }
        public int lotItemNum { get; private set; }

        public ItemLotRow(PARAM.Row row)
        {
            for (int i = 1; i <= 8; i++)
            {
                if (CheckLotRowByNumber(i, row))
                {
                    GetLotRowByNumber(i, row);
                    break;
                }
            }

            if (lotItemId == 0 || lotItemNum == 0)
            {
                throw new InvalidDataException($"This wasn't a static lot row: {row.ID}");
            }
        }

        private bool CheckLotRowByNumber(int number, PARAM.Row row)
        {
            return ushort.Parse(row.Cells.First(x => x.InternalName == $"lotItemBasePoint0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}")) == 100;
        }

        private void GetLotRowByNumber(int number, PARAM.Row row)
        {
            lotItemId = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemId0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
            lotItemCategory = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemCategory0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
            lotItemNum = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemNum0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
        }
    }
}