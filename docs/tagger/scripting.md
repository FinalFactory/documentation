---
sidebar_position: 6
sidebar_label: Scripting
---

# Scripting with Tagger

Welcome to the scripting documentation for the Tagger System, your gateway to managing and querying tags on GameObjects in Unity. This document serves as a comprehensive guide to help you leverage the TaggerSystem and related classes effectively.

:::info

Unity's built-in `tag` field and `CompareTag` method are intended for quick, simple tagging of GameObjects, while Final Tagger is designed for more complex scenarios where a GameObject can have multiple tags and belong to organized tag groups. Final Tagger also supports powerful querying capabilities, unlike Unity's single-tag system.

:::

:::danger
**DO NOT USE METHODS OR FIELDS WITH THE 'INTERNAL' PREFIX.** These are intended for internal use and may disrupt the functionality of the system if accessed directly.
:::

## Introduction to TaggerSystem
The `TaggerSystem` class is the main entry point for all tag-related operations in your Unity project. It provides static methods for adding, removing, searching, and managing tags on GameObjects.

### Core Concepts
- **Tags and Groups**: Tags are used to label GameObjects, while groups categorize tags for more organized management. Groups can also be used to perform bulk operations.
- **`TaggerData` Class**: Stores tag and group information, including tag associations and unique identifiers. It is recommended to maintain a single `TaggerData` instance to avoid conflicts. The `TaggerData` class also has more methods than `TaggerSystem` for managing tags themselves, making it suitable for advanced tag management operations.
- **`FinalTagger` Component**: Automatically attached to GameObjects when tags are added, facilitating tag management.
- **`TaggerId` (short as `tagId`)**: A unique `int32` identifier that represents a combination of tags. This identifier allows for efficient searches and comparisons based on precomputed tag collections, optimizing tag-based operations.

## Adding Tags to GameObjects
The `TaggerSystem` provides methods to add tags to GameObjects individually or in bulk. Tags that do not exist will be automatically created and added to the "Ungrouped" group.

### Adding a Single Tag
```csharp
TaggerSystem.AddTag(gameObject, "Player");
```
Adds the tag "Player" to the specified `gameObject`.

### Adding Multiple Tags
```csharp
TaggerSystem.AddTags(gameObject, "Enemy", "Boss");
```
Adds both "Enemy" and "Boss" tags to the `gameObject`. If any of these tags belong to singleton groups, the other tags from that group are automatically removed.

## Removing Tags
Tags can be removed individually or in bulk.

### Removing a Single Tag
```csharp
TaggerSystem.RemoveTag(gameObject, "Player");
```
Removes the "Player" tag from the specified `gameObject`.

### Removing Multiple Tags
```csharp
TaggerSystem.RemoveTag(gameObject, "Enemy", "Boss");
```
Removes the tags "Enemy" and "Boss" from the `gameObject`.

### Removing Tags by Group
```csharp
TaggerSystem.RemoveAllTagsOfGroup(gameObject, "Enemies");
```
Removes all tags from the group named "Enemies" from the `gameObject`.

## Setting Tags
Use `SetTag` or `SetTags` to replace all current tags on a `GameObject` with new ones.

### Setting a Single Tag
```csharp
TaggerSystem.SetTag(gameObject, "Collectible");
```
Replaces all tags on the `gameObject` with the "Collectible" tag.

### Setting Tags from a Group
```csharp
TaggerSystem.SetTagsOfGroup(gameObject, "Collectibles");
```
Replaces all tags on the `gameObject` with the tags from the "Collectibles" group.

## Searching GameObjects by Tag
The `TaggerSystem` includes powerful search functions to find GameObjects based on their tags.

### Finding a GameObject with a Tag
```csharp
GameObject player = TaggerSystem.FindGameObjectWithTag("Player");
```
Finds the first `GameObject` with the tag "Player".

### Finding All GameObjects with a Specific Tag
```csharp
HashSet<GameObject> enemies = TaggerSystem.FindGameObjectsWithTag("Enemy");
```
Finds all GameObjects tagged as "Enemy".

### Searching with Multiple Tags
`TaggerSystem` allows searches with multiple tags using different search modes.

#### Search Modes
- **AND** (`TaggerSearchMode.And`): Returns only GameObjects that have all specified tags.
- **OR** (`TaggerSearchMode.Or`): Returns GameObjects that have at least one of the specified tags.
- **NOT** (`TaggerSearchMode.Not`): Returns GameObjects that do not have any of the specified tags.
- **EXACT** (`TaggerSearchMode.Exact`): Returns GameObjects that have exactly the specified tags and no others.

### Example Usage
```csharp
GameObject[] collectibles = TaggerSystem.FindGameObjectsWithTags(TaggerSearchMode.Or, "Gold", "Silver").ToArray();
```
Finds all GameObjects tagged as "Gold" or "Silver".

## Searching GameObjects by TaggerId
Each combination of tags can be uniquely represented by an `int32` identifier called `taggerId`. This `taggerId` allows for efficient searches and comparisons based on precomputed tag collections.

### Finding a GameObject with a TaggerId
```csharp
GameObject enemy = TaggerSystem.FindGameObjectWithId(taggerId);
```
Finds the first `GameObject` that matches the given `taggerId`.

### Finding All GameObjects with a TaggerId
```csharp
HashSet<GameObject> enemies = TaggerSystem.FindGameObjectsWithId(taggerId);
```
Finds all GameObjects that match the given `taggerId`.

### Example: Converting Tags to TaggerId
To convert a list of tags into a `taggerId`, you can use the `TaggerSystem`:

```csharp
int taggerId = TaggerSystem.GetIdOfTags("Enemy", "Boss");
```
This will generate an `int32` identifier (`taggerId`) that represents the combination of tags "Enemy" and "Boss".

### Example: Converting TaggerId to Tags
To convert a `taggerId` back into the tags it represents, use the following method:

```csharp
HashSet<string> tags = TaggerSystem.GetTagsOfId(taggerId);
```
This will return a set of tags associated with the given `taggerId`.

### Practical Usage
Using `taggerId` can be especially useful when you need to store or compare tag combinations efficiently. Instead of managing multiple string comparisons, you can use the `int32` identifier, which simplifies and optimizes the process.

#### Example: Using TaggerId for Search
```csharp
int collectibleId = TaggerSystem.GetIdOfTags("Collectible", "Gold");
GameObject collectible = TaggerSystem.FindGameObjectWithId(collectibleId);
```
This example converts the tags "Collectible" and "Gold" to a `taggerId` and then finds the first matching `GameObject`.

## Advanced Search with TaggerAdvancedSearch
`TaggerSystem` supports advanced search patterns through the `TaggerAdvancedSearch` class.

### Creating an Advanced Search from Pattern
```csharp
TaggerAdvancedSearch search = TaggerSystem.CreateAdvancedSearchFromPattern("Red & Blue | !Green");
```
Creates a search for GameObjects that have both "Red" and "Blue" tags, but not "Green".

## Managing Tags at Runtime
The `TaggerSystem` class provides access to tag management operations such as adding, removing, or managing tags dynamically.

### Accessing All Tags
```csharp
string[] allTags = TaggerSystem.GetAllTags();
```
Retrieves an array of all tags defined in the project.

## TaggerData Class
The `TaggerData` class is responsible for managing all tags and tag groups within the Tagger system. It stores all tag information, including tag names, groups, colors, and unique identifiers. It also facilitates operations such as adding, deleting, and modifying tags and groups. The `TaggerData` class contains more methods than `TaggerSystem`, making it ideal for advanced tag management needs, such as directly manipulating tag structures or managing groups.

### Core Features of TaggerData
- **Tag Management**: Add, remove, and modify tags, ensuring they are correctly indexed and assigned to appropriate groups.
- **Group Management**: Create, delete, and rename groups, allowing you to organize tags into logical categories.
- **Serialization Support**: The `TaggerData` class supports serialization, making it easy to save and load tag configurations.

### Adding Tags to TaggerData
Tags can be added to the `TaggerData` instance, and optionally assigned to specific groups.

#### Adding a Tag
```csharp
bool added = TaggerSystem.Data.AddTag("Enemy", "Enemies");
```
Adds the tag "Enemy" to the group "Enemies". Returns `true` if the tag was successfully added.

#### Adding Multiple Tags
```csharp
TaggerSystem.Data.AddTags(new[] { "Gold", "Silver" }, "Collectibles");
```
Adds the tags "Gold" and "Silver" to the group "Collectibles".

### Removing Tags from TaggerData
Tags can also be removed from `TaggerData`, which will automatically remove them from any associated GameObjects.

#### Deleting a Tag
```csharp
TaggerSystem.Data.DeleteTag("Boss");
```
Deletes the tag "Boss" from `TaggerData` and removes it from all associated GameObjects.

### Group Management
Groups are used to categorize tags, allowing for better organization and bulk operations.

#### Creating or Getting a Group
```csharp
TaggerGroup enemiesGroup = TaggerSystem.Data.GetOrAddGroup("Enemies");
```
Retrieves the group named "Enemies", or creates it if it does not exist.

#### Renaming a Group
```csharp
TaggerSystem.Data.RenameGroup("Enemies", "Hostiles");
```
Renames the group "Enemies" to "Hostiles".

#### Deleting a Group
```csharp
TaggerSystem.Data.DeleteGroup("Collectibles", deleteTags: false);
```
Deletes the group "Collectibles". If `deleteTags` is `false`, the tags are moved to the "Ungrouped" group.

### Accessing Tag Data
The `TaggerData` class provides methods to retrieve information about tags and groups at runtime.

#### Get All Tags
```csharp
string[] allTags = TaggerSystem.Data.GetAllTags();
```
Retrieves all tags managed by `TaggerData`.

#### Get Tags by Group
```csharp
TaggerGroup collectiblesGroup = TaggerSystem.Data.GetOrAddGroup("Collectibles");
string[] tagsInGroup = collectiblesGroup.GetTags();
```
Retrieves all tags within the "Collectibles" group.

### Setting Tag Colors
Tags can be assigned colors for better visual distinction in the editor.

#### Set Tag Color
```csharp
TaggerSystem.Data.SetColor("Enemy", Color.red);
```
Sets the color of the "Enemy" tag to red.

### Serialization and Versioning
The `TaggerData` class supports serialization to save and load tag configurations, and maintains a version number that increments with each change.

#### Accessing the Version
```csharp
int version = TaggerSystem.Data.Version;
```
Retrieves the current version of the `TaggerData`, which increments with every modification.

## Type-Safe Tags with Auto-Generation
Tagger provides auto-generation of type-safe constants for tags. The generated scripts allow for easy and mistake-free access to tags in your code.

### Example Generated Script
```csharp
public static class Tags
{
    public const string Player = "Player";
    public const string Enemy = "Enemy";
    public const string Collectible = "Collectible";
}
```
### Example Usage
```csharp
GameObject player = TaggerSystem.FindGameObjectWithTag(Tags.Player);
```

Using auto-generated constants helps avoid errors due to mistyped strings and provides better code maintainability.