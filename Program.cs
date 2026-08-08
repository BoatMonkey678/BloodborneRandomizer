using Randomizer.Core;

class Program
{
    static void Main(string[] args)
    {
        RandomizerCore randomizer = new(@".\Assets\itemLots.json", @".\Assets\areas.json");

        var output = randomizer.Main();

        foreach (var pair in output)
        {
            Console.WriteLine($"{randomizer.GetItemLotByID(pair.Key).LocationName}: {randomizer.GetItemLotByID(pair.Value).ItemName}");
        }
    }
}