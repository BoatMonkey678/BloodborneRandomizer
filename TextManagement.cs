using System.Text;

namespace Randomizer.TextManagement;

public static class UTF8
{
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