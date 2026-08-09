namespace BloodborneRandomizer.Randomizer;

public class JsonArea
{
    public required string Name;
    public required List<int> Requirements;
    public required bool Initial = false;
    public List<string> Connections = [];
}

public class Area
{
    public required string Name;
    public required List<int> Requirements;
    public required bool Initial;

    public Area? Parent;
    public List<Area> Connections = [];
}

public class AreaTree
{
    public Area Root { get; private set; }

    private readonly Dictionary<string, Area> areasByName;

    public AreaTree(List<JsonArea> areas)
    {
        Root = BuildAreaTree(areas);
        areasByName = BuildAreaIndex(Root);
    }

    public Area GetArea(string name)
    {
        return areasByName.TryGetValue(name, out var area)
            ? area
            : throw new KeyNotFoundException($"Area '{name}' was not found.");
    }

    private static Area BuildAreaTree(List<JsonArea> jsonAreas)
    {
        var areas = jsonAreas.ToDictionary(
            d => d.Name,
            d => new Area
            {
                Name = d.Name,
                Initial = d.Initial,
                Requirements = d.Requirements
            }
        );

        foreach (var area in jsonAreas)
        {
            var parent = areas[area.Name];

            foreach (var childName in area.Connections)
            {
                if (!areas.TryGetValue(childName, out var child))
                    throw new InvalidOperationException(
                        $"Unknown node '{childName}' referenced by '{area.Name}'");

                parent.Connections.Add(child);
                child.Parent = parent;
                child.Requirements.AddRange(parent.Requirements);
            }
        }

        return areas.Values.Single(n => n.Initial);
    }

    private static Dictionary<string, Area> BuildAreaIndex(Area area)
    {
        var index = new Dictionary<string, Area>(StringComparer.Ordinal);

        Add(area);

        return index;

        void Add(Area node)
        {
            if (!index.TryAdd(node.Name, node))
            {
                throw new InvalidDataException(
                    $"Duplicate area name '{node.Name}'.");
            }

            foreach (var child in node.Connections)
            {
                Add(child);
            }
        }
    }
}