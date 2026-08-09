using ItemLotGenerator.ItemLot;
using Newtonsoft.Json;
using SoulsFormats;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {
        BND4 bnd = BND4.Read(@".\dist\gameparam.parambnd.dcx");

        Dictionary<string, PARAM> gameparam = bnd.Files.Select(x => Path.GetFileName(x.Name).Replace(".param", ""))
            .Zip(bnd.Files.Select(x => PARAM.Read(x.Bytes)))
                .ToDictionary(x => x.First, x => x.Second);

        gameparam["ItemLotParam"].ApplyParamdef(PARAMDEF.XmlDeserialize(@".\dist\ItemLotParam.xml"));
        gameparam["NpcParam"].ApplyParamdef(PARAMDEF.XmlDeserialize(@".\dist\NpcParam.xml"));

        Dictionary<string, string> AreaNamesLookup = new()
        {
            {"m21_00_00_00", "Hunter's Dream"},
            {"m21_01_00_00", "Abandoned Old Workshop"},
            {"m22_00_00_00", "Hemwick Charnel Lane"},
            {"m23_00_00_00", "Old Yharnam"},
            {"m24_00_00_00", "Cathedral Ward"},
            {"m24_01_00_00", "Central Yharnam"},
            {"m24_02_00_00", "Upper Cathedral Ward"},
            {"m25_00_00_00", "Forsaken Castle Cainhurst"},
            {"m26_00_00_00", "Nightmare of Mensis"},
            {"m27_00_00_00", "Forbidden Woods"},
            {"m28_00_00_00", "Yahar'gul, Unseen Village"},
            {"m32_00_00_00", "Byrgenwerth"},
            {"m33_00_00_00", "Nightmare Frontier"},
            {"m34_00_00_00", "Hunter's Nightmare"},
            {"m35_00_00_00", "Research Hall"},
            {"m36_00_00_00", "Fishing Hamlet"},
        };
        
        List<ItemLot> itemLots = [];

        foreach (var file in Directory.GetFiles(@".\dist\map"))
        {
            itemLots.AddRange(GetItemLotsMSB(Path.GetFileName(file).Replace(".msb.dcx", ""), AreaNamesLookup, gameparam));
        }

        foreach (var file in Directory.GetFiles(@".\dist\event"))
        {
            itemLots.AddRange(GetItemLotsEmevd(Path.GetFileName(file).Replace(".emevd.dcx.js", ""), AreaNamesLookup, gameparam));
        }

        itemLots.AddRange(GetItemLotsNpcParam(gameparam));

        string json = JsonConvert.SerializeObject(itemLots, Formatting.Indented);
        File.WriteAllText(@".\itemLots.json", json);
    }

    static List<ItemLot> GetItemLotsNpcParam(Dictionary<string, PARAM> gameparam)
    {
        List<ItemLot> output = [];

        List<int> hardcodedIds = new List<int>{6154, 6110, 6090, 6100, 6080, 6071, 6070, 6155, 6140, 6151, 6160, 6300, 6310, 6340, 6350, 6360, 6390, 6395, 6400, 6410, 6420, 6430, 6440, 6450, 6580, 6585, 6620, 11703510};

        foreach (var row in gameparam["NpcParam"].Rows)
        {
            if(hardcodedIds.Contains(row.ID))
            {
                var lot = int.Parse(row.Cells.First(x => x.InternalName == "itemLotId_1").Value.ToString() ?? "");
                output.Add(new ItemLot
                {
                    ID = lot,
                    ItemName = GetLotItemName(gameparam, gameparam["ItemLotParam"].Rows.First(x => x.ID == lot)),
                    LocationName = "",
                    Area = "TBA",
                    Important = false,
                    Missable = false
                });

                for (int i = lot + 1; i <= lot + 4; i++)
                {
                    try
                    {
                        try
                        {
                            if (i - lot == 1 && new List<int>{1500, 1501, 1400}.Contains(int.Parse(gameparam["ItemLotParam"].Rows.First(x => x.ID == i).Cells.First(x => x.InternalName == "lotItemId01").Value.ToString() ?? "")))
                                continue;
                            output.Add(new ItemLot
                            {
                                ID = i,
                                ItemName = GetLotItemName(gameparam, gameparam["ItemLotParam"].Rows.First(x => x.ID == i)),
                                LocationName = "",
                                Area = "TBA",
                                Important = false,
                                Missable = false
                            });
                        }
                        catch (InvalidDataException)
                        {
                            ;
                        }
                    }
                    catch (InvalidOperationException)
                    {
                        ;
                    }
                }
            }
        }

        return output;
    }

    static List<int> GetIDsFromAward(string emevdName)
    {
        List<int> output = [];

        string js = File.ReadAllText($@".\dist\event\{emevdName}.emevd.dcx.js");

        Regex regex = new Regex(@"AwardItemLot\((\d+)\);");

        foreach (Match match in regex.Matches(js))
        {
            output.Add(int.Parse(match.Groups[1].Value));
        }

        return output;
    }

    static List<ItemLot> GetItemLotsEmevd(string emevdName, Dictionary<string, string> AreaNamesLookup, Dictionary<string, PARAM> gameparam)
    {
        string AreaName = AreaNamesLookup[emevdName];

        List<int> awardLots = GetIDsFromAward(emevdName);
        List<ItemLot> output = [];

        foreach (var lot in awardLots)
        {
            if (lot == -1)
                continue;

            if (lot == 14000)
                continue;

            output.Add(new ItemLot
            {
                ID = lot,
                ItemName = GetLotItemName(gameparam, gameparam["ItemLotParam"].Rows.First(x => x.ID == lot)),
                LocationName = "",
                Area = AreaName,
                Important = true,
                Missable = false
            });

            for (int i = lot + 1; i <= lot + 4; i++)
            {
                try
                {
                    var row = gameparam["ItemLotParam"].Rows.First(x => x.ID == i);
                    output.Add(new ItemLot
                    {
                       ID = i,
                       ItemName = GetLotItemName(gameparam, row),
                       LocationName = "",
                       Area = AreaName,
                       Important = false,
                       Missable = false
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

    static List<ItemLot> GetItemLotsMSB(string msbName, Dictionary<string, string> AreaNamesLookup, Dictionary<string, PARAM> gameparam)
    {
        string AreaName = AreaNamesLookup[msbName];
        var msb = MSBB.Read($@".\dist\map\{msbName}.msb.dcx");
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
                Important = false,
                Missable = false
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
                       Important = false,
                       Missable = false
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
            return ushort.Parse(row.Cells.First(x => x.InternalName == $"lotItemBasePoint0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}")) == 100 || ushort.Parse(row.Cells.First(x => x.InternalName == $"lotItemBasePoint0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}")) == 1000;
        }

        private void GetLotRowByNumber(int number, PARAM.Row row)
        {
            lotItemId = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemId0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
            lotItemCategory = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemCategory0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
            lotItemNum = int.Parse(row.Cells.First(x => x.InternalName == $"lotItemNum0{number}").Value.ToString() ?? throw new InvalidDataException($"Unable to parse lotItemID: {row.ID}"));
        }
    }
}