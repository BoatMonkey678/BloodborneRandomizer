using SoulsFormats;

namespace BloodborneRandomizer.SoulsFiles;

public static class Gameparam
{
    public static void WriteGameparamWithReplacement(BND4 bnd, Dictionary<string, PARAM> generatedParam, string outPath)
    {
        foreach (var pair in generatedParam)
        {
            bnd.Files.First(x => x.Name == pair.Key).Bytes = pair.Value.Write();
        }

        bnd.Write(outPath);
    }
}