---
sidebar_position: 5
---

# Manage Groups and Tags

## Context Menu

To efficiently manage your tags and groups within Tagger, use the context menu by right-clicking on any tag or group in your Unity editor. 

### Singleton 

Configure a group as a singleton means that you can only add one tag of this group to an GameObject. All other tags of this group will be removed.

:::note
The singleton rule will only be on add/set tags of a singleton group enforced.
Changing this setting does not automatically check all GameObjects.
:::
### Changing the Color of the Tag

Adjusting the color of tags can be done easily through the context menu or programmatically via scripts. This allows for visual differentiation of tags directly within the Unity editor.

### Moving Tags

Tags can be moved between groups using either the context menu or through scripting, providing flexibility in how you organize tags based on evolving project needs.

### Removing Groups

When you choose to remove a group, you have two options:
- **Delete Its Tags**: Completely remove all tags within the group.
- **Move Tags to Ungrouped**: Retain the tags but classify them as ungrouped, maintaining their utility without specific group categorization.

### Removing Tags

Deleting a tag from the system ensures it is removed from all Prefabs and Scene objects. Once a tag is deleted, re-adding it later will treat it as a new entity, without any historical data association.

## Understanding Tag Naming and Group Organization in Tagger

In Tagger, tags provide a versatile way to categorize and identify GameObjects, but it's important to understand how tag names and groupings interact within the system to effectively use this tool.

### Tag Names Must Be Unique Across Groups

Tag names within Tagger must be unique across all groups. This means you cannot use the same tag name in different groups. For example, you cannot have a tag named "A" in both a "Size" group and a "Level" group. Regardless of the group they are associated with, tags with the same name are treated as identical. This is crucial for ensuring the integrity and functionality of the tagging system:

- **Tag "A" in "Size" and "Level"**: Even though they might be categorized differently in your project organization, both are recognized as "A" by the Tagger system.

### Groups Serve Organizational Purposes Only

Groups are designed to help organize tags within the editor and do not influence how tags are processed by the Tagger system. Their primary purpose is to aid in managing and locating tags more efficiently:

- **Searching with Groups**: While you can search for tags within specific groups for easier management, the system does not differentiate between identical tags in different groups when performing searches.

### Practical Usage

When assigning tags, consider the following to maximize the utility of Tagger:

- **Unique Tag Names**: Ensure each tag has a unique identifier, even if they are meant to represent similar properties in different contexts. For example, instead of naming a tag simply "A" in different groups, consider more descriptive names like "Size.Large" and "Level.High".
- **Grouping Strategy**: Use groups to categorize tags by their context or usage within your project. This can help in quickly navigating and applying relevant tags without impacting the backend functionality of your tagging system.

By understanding and utilizing these guidelines, you can enhance your workflow in Unity with Tagger, making your asset tagging more organized and effective without confusion over tag and group functionality.
