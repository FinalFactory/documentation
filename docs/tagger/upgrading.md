---
sidebar_position: 90
sidebar_label: Upgrading
---

# Upgrading

With the release of version 2.0, Tagger has undergone significant changes to improve its structure and integration. This includes namespace changes and script renaming to better distinguish Tagger scripts from other scripts in your project, especially due to the migration of Tagger to Final Factory. Below are the key changes you need to be aware of when upgrading from version 1.7 or earlier to version 2.0 or later.

## Project Upgrade

1. Backup your compiler error free project!
2. Delete the folder under `Assets/Plugins/HeiKyu`
3. Import the Final Tagger 2.x from the Asset Store via the Unity Package Manager
4. Confirm that there are no compiling errors.
5. Confirm that there is no data loss. Inspect your Tagger Data Scriptable Object File that your tags are ok.


## Tagger Script

The main Tagger script has been renamed and moved to a new namespace:

```csharp
Finalfactory.Tagger.FinalTagger
```

##  Other Scripts new Namespace

All other related scripts have been moved to the `Finalfactory.Tagger` namespace. This ensures a clear distinction between Tagger scripts and other scripts within your project.

```csharp
Finalfactory.Tagger
```

## Method Changes

#### Add Tag
The method AddTag for multiple tags is renamed to AddTags
#### Set Tag
The method SetTag for multiple tags is renamed to SetTags

#### FindGameObjectWithTag
The method got renamed to FindGameObjectWithExactOneTag to avoid confusion

#### FindGameObjectsWithTag
The method got renamed to FindGameObjectsWithExactOneTag to avoid confusion

