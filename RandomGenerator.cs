using BloodborneRandomizer.NormalFiles;

namespace BloodborneRandomizer;

public static class RandomGenerator
{
    public static Random GenerateRandom(AppConfig appConfig)
    {
        if (appConfig.Seed == -1)
        {
            return new Random();
        }
        else
        {
            return new Random(appConfig.Seed);
        }
    }
}