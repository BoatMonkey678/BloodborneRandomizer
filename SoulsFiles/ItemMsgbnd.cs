using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public class ItemMsgbnd
{
    public static void WriteItemMsgbndWithReplacement(BND4 bnd, Dictionary<string, FMG> generatedFMGs, string outPath)
    {
        foreach (var pair in generatedFMGs)
        {
            bnd.Files.First(x => x.Name == pair.Key).Bytes = pair.Value.Write();
        }

        bnd.Write(outPath);
    }
}