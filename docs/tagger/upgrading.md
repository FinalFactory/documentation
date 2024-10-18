---
sidebar_position: 90
sidebar_label: Upgrading
---

# Upgrading



## 2.X -> 3.X

After discovering a bug in the FindGameObject methods of FinalSystem, the hole system has been reworked.
Due of this there are breaking changes.

### TaggerSearchMode

Search Mode Exact was added and the behaviours of the other modes shifted.

- The search behaviour from Mode AND is now moved to Mode EXACT.
- The search behaviour from Mode OR is now moved to Mode AND.
- The search behaviour Mode OR does now return all gameobjects with any of the given tag.

The bug was that on the old Mode OR. If you wanted the tags `Green` OR `Red`, it returend only gameobjects that had `Green` AND `Red` this was wrong. The advanced search pattern was not affected by this.

To upgrade your project you need to change the behaviour mode on all methods that starts with the name "FindGameObject" if you use one.

- OR to AND
- AND to EXACT

## 1.X -> 2.X

With the release of version 2.0, Tagger has undergone significant changes to improve its structure and integration. This includes namespace changes and script renaming to better distinguish Tagger scripts from other scripts in your project, especially due to the migration of Tagger to Final Factory. Below are the key changes you need to be aware of when upgrading from version 1.7 or earlier to version 2.0 or later.

### Project Upgrade

1. Backup your compiler error free project!
2. Delete the folder under `Assets/Plugins/HeiKyu`
3. Import the Final Tagger 2.x from the Asset Store via the Unity Package Manager
4. Confirm that there are no compiling errors.
5. Confirm that there is no data loss. Inspect your Tagger Data Scriptable Object File that your tags are ok.


### Tagger Script

The main Tagger script has been renamed and moved to a new namespace:

```csharp
Finalfactory.Tagger.FinalTagger
```

###  Other Scripts new Namespace

All other related scripts have been moved to the `Finalfactory.Tagger` namespace. This ensures a clear distinction between Tagger scripts and other scripts within your project.

```csharp
Finalfactory.Tagger
```

### Method Changes

#### Add Tag
The method AddTag for multiple tags is renamed to AddTags
#### Set Tag
The method SetTag for multiple tags is renamed to SetTags

#### FindGameObjectWithTag
The method got renamed to FindGameObjectWithExactOneTag to avoid confusion

#### FindGameObjectsWithTag
The method got renamed to FindGameObjectsWithExactOneTag to avoid confusion

