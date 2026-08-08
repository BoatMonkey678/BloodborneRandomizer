namespace Randomizer.Core.Structs;

public class JsonArea
{
    public required string Name { get; set; }
    public required List<int> Requirements { get; set; }
    public required bool Initial = false;
    public List<string> Connections = new();
}

public class Area
{
    public required string Name { get; set; }
    public required List<int> Requirements { get; set; }
    public required bool Initial;

    public Area? Parent { get; set; }
    public List<Area> Connections { get; set; } = new();
}

public class AreaTree
{
    public Area Root { get; private set; }

    private readonly Dictionary<string, Area> _areasByName;

    public AreaTree(List<JsonArea> areas)
    {
        Root = BuildAreaTree(areas);
        _areasByName = BuildAreaIndex(Root);
    }

    public Area GetArea(string name)
    {
        return _areasByName.TryGetValue(name, out var area)
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