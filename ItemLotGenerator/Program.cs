using ItemLotGenerator.ItemLot;
using SoulsFormats;

class Program
{
    static void Main(string[] args)
    {
        BND4 bnd = BND4.Read(@".\dist\gameparam.parambnd.dcx");

        Dictionary<string, PARAM> gameparam = bnd.Files.Select(x => Path.GetFileName(x.Name).Replace(".param", "")).
            Zip(bnd.Files.Select(x => PARAM.Read(x.Bytes))).
                ToDictionary(x => x.First, x => x.Second);

        gameparam["ItemLotParam"].ApplyParamdef(PARAMDEF.XmlDeserialize(@".\dist\ItemLotParam.xml"));

        

        // Console.WriteLine(string.Join("\n", gameparam.Keys.Select(x => x)));
    }


}