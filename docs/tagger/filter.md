# TaggerFilter Class

The `TaggerFilter` class and `TaggerIdAttribute` are essential components of the Tagger system, providing powerful functionalities for filtering and identifying GameObjects based on tags. These tools enhance how developers can manage and interact with tags within the Unity environment, both through code and the Unity Inspector.

## TaggerFilter Class

`TaggerFilter` allows you to define and apply filters based on tags dynamically. This can be done through the Unity Inspector or programmatically via the C# API, providing flexibility in how tags are managed across different scenarios.

### Key Features of TaggerFilter

- **Include**: Define a set of tags that a GameObject must possess to match the filter. This is used to ensure that only GameObjects with specified tags are considered during queries.
  
  ```csharp
  taggerFilter.Include("Player", "Active"); // GameObject must have both 'Player' and 'Active' tags
  ```

- **Exclude**: Specify tags that the GameObject must not have to pass the filter. This is useful for excluding certain GameObjects from search results based on their tags.
  
  ```csharp
  taggerFilter.Exclude("Enemy"); // GameObject must not have the 'Enemy' tag
  ```

- **Matching**: Check if a GameObject meets the criteria defined by the Include and Exclude settings. This method returns `true` if the GameObject matches all specified conditions.
  
  ```csharp
  bool isMatch = taggerFilter.Matching(gameObject); // Returns true if gameObject matches the filter criteria
  ```
  
  If no tags are specified in the Include or Exclude lists, the `Matching` method will return `true` by default, assuming the GameObject is a match.

### Practical Applications

`TaggerFilter` can be used in numerous ways, such as:
- Filtering GameObjects for specific gameplay mechanics.
- Managing visibility or interactivity of objects based on their tags.
- Implementing complex game logic that requires dynamic object selection.
