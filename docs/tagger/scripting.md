---
sidebar_position: 6
sidebar_label: Scripting
---

# Scripting with Tagger

## Introduction

Welcome to the scripting documentation for Tagger. Before diving in, please take note of an important guideline:

:::danger
**DO NOT USE METHODS OR FIELDS WITH THE 'INTERNAL' PREFIX.**  
:::

The source code of Tagger is thoroughly documented to aid your development. Should you find any part of it unclear, don't hesitate to reach out for clarification.

## Accessing Tagger Functionality

Tagger functionality is primarily accessed through the `TaggerSystem` static class, which serves as the gateway to managing and querying tags within your projects.

### Key Components

- **`TaggerSystem` Class**: This is the central hub for all tag-related operations. Use this class to search for and manage tags on GameObjects.
- **`TaggerData` Class**: This class stores all your tag information, including tags, groups, colors, and IDs. While it's possible to have multiple `TaggerData` instances, it is generally not recommended due to potential ID conflicts that could arise when identifying prefabs. Misaligned `TaggerData` can lead to incorrect tag associations, affecting search outcomes and system reliability.
- **`ITaggerDataLoader` Interface**: For more advanced use cases where you need to load or save `TaggerData` dynamically, you can implement this interface. The default loader, `TaggerDataLoaderDefault`, is designed only for loading data created during editor time and does not support runtime save operations.

If you choose to create a custom data loader by implementing `ITaggerDataLoader`, ensure to set up `TaggerSystem.DataLoader` accordingly. Remember, this setup must be done during editor time to ensure compatibility with any runtime save and load systems you plan to use.

For further guidance on running and testing your scripts during editor time, refer to Unity's official documentation:

[Running Editor Code on Launch](https://docs.unity3d.com/Manual/RunningEditorCodeOnLaunch.html)

## Auto-Generation

Tagger provides a convenient feature for the auto-generation of type-safe tags, making it easier to manage and use tags within your Unity project. This feature is designed to create a script with constants for each tag and arrays for groups, facilitating both static and dynamic access to tags.

## Static Access

By default, the auto-generation feature is enabled. This means Tagger will automatically generate a script containing your tags as constant fields, along with arrays for tags grouped together. This allows you to reference tags safely and efficiently within your code.

### Example

Suppose you have tags defined in your project. The auto-generated script might look something like this:

```csharp
public static class Tags
{
    public const string Player = "Player";
    public const string Enemy = "Enemy";
    public const string Collectible = "Collectible";

    public static readonly string[] All = { Player, Enemy, Collectible };
}
```

You can then use these constants in your code to ensure type safety and avoid errors due to mistyped strings.

### Usage

```csharp
void ExampleUsage()
{
    GameObject player = TaggerSystem.FindGameObjectWithTag(Tags.Player);
    GameObject[] enemies = TaggerSystem.FindGameObjectsWithTags(TaggerSearchMode.Or, Tags.Enemy);
}
```

## Dynamic Access

For more flexible and dynamic access to tags and groups, you can use the `TaggerData` class, which is accessible through `TaggerSystem.Data`. This class provides several useful functions to retrieve and manage tags at runtime.

### Functions

- **Get All Groups**

    Retrieve all tag groups, optionally ordered alphabetically.

    ```csharp
    public TaggerGroup[] GetAllGroups(bool orderAlphabetical = false)
    ```

    **Example Usage:**

    ```csharp
    TaggerGroup[] groups = TaggerSystem.Data.GetAllGroups(orderAlphabetical: true);
    foreach (var group in groups)
    {
        Debug.Log(group.Name);
    }
    ```

- **Get Tags in a Group**

    Each `TaggerGroup` instance has additional helpful functions, such as retrieving all tags within nthe group.

    ```csharp
    public string[] GetTags()
    ```

   **Example Usage:**

    ```csharp
    TaggerGroup gameplayGroup = TaggerSystem.Data.GetAllGroups().FirstOrDefault(group => group.Name == "GameplayTags");
    if (gameplayGroup != null)
    {
        string[] tags = gameplayGroup.GetTags();
        foreach (string tag in tags)
        {
            Debug.Log(tag);
        }
    }
    ```

## Tag Functions

Tagger provides a comprehensive suite of functions that can be utilized on any GameObject within your Unity projects. These functions allow you to add, get, check, remove, and set tags dynamically, enhancing your ability to organize and manage game elements effectively. Here's a detailed look at each function and how to use them:

### Adding Tags

You can add new tags to GameObjects either individually or as a group. This is useful for categorizing game elements at runtime based on their behavior, appearance, or other criteria.

- **Add a Single Tag**
  ```csharp
  void AddTag(string tag)
  ```

- **Add Multiple Tags**
  ```csharp
  void AddTag(params string[] tags) // Available from v1.5.1
  ```

- **Add Tags from a Group**
  ```csharp
  void AddTagsOfGroup(this GameObject gameObject, string group) // Introduced in v1.7
  void AddTagsOfGroup(this GameObject gameObject, TaggerGroup group) // Introduced in v1.7
  ```

ä## Getting Tags

Retrieve all tags associated with a GameObject, which allows for inspection and decision-making processes based on the tags applied.

- **Get All Tags**
  ```csharp
  HashSet<string> GetTags(this GameObject gameObject)
  ```

### Checking Tag Presence

Determine the presence of one or more tags on a GameObject, enabling conditional logic and gameplay adjustments.

- **Check for a Single Tag**
  ```csharp
  bool HasTag(string tag)
  ```

- **Check for Multiple Specific Tags**
  ```csharp
  bool HasTag(params string[] tags) // Added in v1.5.1
  ```

- **Check if All Tags from a Group are Present**
  ```csharp
  bool HasTagsOfGroup(this GameObject gameObject, string group) // New in v1.7
  bool HasTagsOfGroup(this GameObject gameObject, TaggerGroup group) // New in v1.7
  ```

### Checking for Any Tags

Verify if any tag from a given set or group is present on a GameObject.

- **Check for Any Tags**
  ```csharp
  bool HasAnyTag(params string[] tag) // Added in v1.5.1
  ```

- **Check if Any Tags from a Group are Present**
  ```csharp
  bool HasAnyTagsOfGroup(this GameObject gameObject, string group) // New in v1.7
  bool HasAnyTagsOfGroup(this GameObject gameObject, TaggerGroup group) // New in v1.7
  ```

### Removing Tags

Remove one or more tags from a GameObject, which is useful for dynamically changing the properties or behaviors of game elements.

- **Remove a Single Tag**
  ```csharp
  void RemoveTag(string tag)
  ```

- **Remove Multiple Tags**
  ```csharp
  void RemoveTag(params string[] tags) // Added in v1.5.1
  ```

- **Remove All Tags from a Group**
  ```csharp
  void RemoveAllTagsOfGroup(this GameObject gameObject, string group) // New in v1.7
  void RemoveAllTagsOfGroup(this GameObject gameObject, TaggerGroup group) // New in v1.7
  ```

### Setting Tags

Replace the existing tags on a GameObject with new ones. This is particularly useful for re-categorizing GameObjects under new criteria.

- **Set New Single or Multiple Tags**
  ```csharp
  void SetTag(string tag)
  void SetTag(params string[] tags) // New in v1.5.1
  ```

- **Replace Existing Tags with Those of a Group**
  ```csharp
  void SetTagsOfGroup(this GameObject gameObject, string group) // New in v1.7
  void SetTagsOfGroup(this GameObject gameObject, TaggerGroup group) // New in v1.7
  ```

These tagging functions provide robust flexibility and control over how GameObjects are classified and managed within your Unity projects, allowing for complex and dynamic game design and development.


## Search Functions in Tagger

Tagger simplifies the process of finding GameObjects based on tags through a variety of search methods available in the `TaggerSystem` static class. These methods cater to different search needs, whether you're looking for GameObjects that meet all specified tag criteria, any, or none. Below is an overview of the available methods and how to effectively use them for searching tagged GameObjects in Unity.

### Simple Search Methods

- **Find a GameObject by a Single Tag**
  ```csharp
  GameObject FindGameObjectWithTag(string tag)
  ```
  This method returns the first GameObject that matches the specified tag.

- **Find All GameObjects with a Specific Tag**
  ```csharp
  HashSet<GameObject> FindGameObjectsWithTag(string tag)
  ```
  This returns a set of all GameObjects that have the specified tag.

- **Find GameObjects Matching a Combination of Tags**
  ```csharp
  HashSet<GameObject> FindGameObjectsWithTags(TaggerSearchMode mode, params string[] tags)
  ```
  This method allows for flexible searches based on multiple tags, with behavior defined by the search mode used.

### Search Modes

The behavior of `FindGameObjectsWithTags` can be controlled by specifying a `TaggerSearchMode`, which adjusts how tags are evaluated against GameObjects. The available modes are:

- **And**
  - **Behavior**: Only returns GameObjects that include every specified tag.
  - **Example**: `FindGameObjectsWithTags(TaggerSearchMode.And, "Blue", "Big", "Cube")`
    - Returns GameObjects that are tagged with Blue, Big, and Cube all at once.

- **Or**
  - **Behavior**: Returns GameObjects that have at least one of the specified tags.
  - **Example**: `FindGameObjectsWithTags(TaggerSearchMode.Or, "Blue", "Big", "Cube")`
    - Returns GameObjects that are tagged with either Blue, Big, Cube, or any combination of these tags.

- **Not**
  - **Behavior**: Returns GameObjects that do not have any of the specified tags.
  - **Example**: `FindGameObjectsWithTags(TaggerSearchMode.Not, "Blue", "Big", "Cube")`
    - Returns GameObjects that do not have the tags Blue, Big, or Cube.

These search functions and modes provide you with powerful tools to query your scene for GameObjects based on tagging criteria, enabling dynamic gameplay scripting, scene management, and behavior customization based on tags. Whether you need to gather all enemies, all collectibles, or exclude specific objects from a process, these search capabilities are designed to make it straightforward and efficient.


## String Search in Tagger

The string search functionality provided by Tagger offers an intuitive way to perform complex searches using a simple string pattern. This method is particularly useful when you need to construct dynamic searches based on user input or other runtime data. The `TaggerAdvancedSearch` class automates the creation of these search patterns, allowing you to specify the conditions under which GameObjects are retrieved.

### How String Search Works

To utilize string search, you input a string that describes how tags are to be combined using logical operators. This input is then converted into a TaggerAdvancedSearch object which handles the actual search process. This method simplifies the syntax typically required for setting up advanced search criteria.

#### Rules for Constructing Search Strings

When creating a search string, you must adhere to the following rules:

1. **Start and End with a Tag**: Your pattern must begin and end with a tag to ensure a valid and executable search query.
2. **Use Commas to Separate Tags**: Separate multiple tags within the same logical condition using commas.
3. **Operators Between Tags**: Specify the relationship between different tags or groups of tags using logical operators (`&` for AND, `|` for OR).
4. **Invisible Brackets**: Each new operator introduces an implicit grouping. This means the search logic will group conditions based on the order of operations, similar to how parentheses are used in mathematics and programming.

#### Examples of Valid Patterns

- **Single Condition**: 
  - `Red & Blue`
  - This searches for GameObjects that have both the `Red` and `Blue` tags.

- **Multiple Conditions**:
  - `Red & Blue | Cube`
  - This searches for GameObjects that either have both the `Red` and `Blue` tags or have the `Cube` tag.

#### Using Brackets for Clarity

Although the logic system in Tagger ignores brackets, you can include them in your string for better readability, especially when constructing complex queries:

- `(Red & (Blue | Cube))`
- While Tagger ignores the brackets, this notation helps clarify that you are looking for GameObjects tagged with `Red` and either `Blue` or `Cube`.

### Implementing String Search

To implement a string search in your script, you would typically call a method from the Tagger system that accepts a string pattern. Here’s a conceptual example of how such a method might be called:

```csharp
var searchResults = TaggerSystem.PerformStringSearch("Red & Blue | Cube");
```

This function would parse the string, construct the necessary `TaggerAdvancedSearch` object, and execute the search, returning a collection of GameObjects that meet the specified criteria.


## Advanced Search with Tagger

The `TaggerAdvancedSearch` class enables you to perform complex, custom searches through a programmable interface that manages tag-based queries on GameObjects. This advanced feature allows for sophisticated querying capabilities, adapting to a range of use cases in your Unity projects.

### Overview

**`TaggerAdvancedSearch`** has a limitation where each search instance can only have one child search, affecting how nested logical operations can be structured. This section clarifies this limitation and guides you on how to effectively structure your searches.

#### Understanding Limitations and Logical Structuring

Given the restriction to one child search per instance, certain complex nested searches require careful planning:

- **Example Scenario**: You want to structure a query as `A & (B | C) & D`. Directly representing this logic isn't feasible due to the single child limitation.
- **Workaround**: You should restructure it to `A & D & (B | C)` using bracketing to define operations priorities clearly.

Here are more examples of logical structuring:
- **Straightforward Logic**: `A & B & C`
- **Nested Logic**: `A | (B & C)`

### Step-by-Step Guide to Using TaggerAdvancedSearch

#### Step 1: Create Classes

You can initiate your search by creating instances of `TaggerAdvancedSearch` for each tag or logical group you plan to query.

```csharp
// Creating individual search objects
TaggerAdvancedSearch red = new TaggerAdvancedSearch();
TaggerAdvancedSearch small = new TaggerAdvancedSearch();
TaggerAdvancedSearch large = new TaggerAdvancedSearch();
TaggerAdvancedSearch blue = new TaggerAdvancedSearch();

// Setting tags
red.SetTags("Red");
small.SetTags("Small");
large.SetTags("Large");
blue.SetTags("Blue");
```

Alternatively, you can start with a single class and incrementally build your query:

```csharp
// Starting with a single search object
TaggerAdvancedSearch search = new TaggerAdvancedSearch();
search.SetTags("Red");  // Set initial tag
```

In the constructor of `TaggerAdvancedSearch`, you can specify whether the first tag is included or excluded from the search.

#### Step 2: Setup Search Logic

Build up your search logic using method chaining to combine the searches:

```csharp
// Using method chaining to structure complex logic
red.And(small.Or(large.And(blue)));
```

Or using a single class approach:

```csharp
// Building logic with a single search instance
search.And("Small").Or("Large").And("Blue");
```

If the logic changes or you manipulate the tag database, call `void Research()` to refresh the internal state of the search:

```csharp
// Refresh the search state
search.Research();
```

This function optimizes processing by only recalculating the search when necessary.

#### Step 3: Execute the Search

Once your search logic is set, execute the search to retrieve matched GameObjects:

```csharp
// Executing the search
HashSet<GameObject> matchedGameObjects = search.MatchedGameObjects();
```

This method performs the search using optimized dictionary accesses and list accumulations, ensuring high performance. Each call retrieves the current set of GameObjects registered in the `TaggerManager` that match the search criteria.

