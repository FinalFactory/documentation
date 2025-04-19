---
sidebar_position: 100
sidebar_label: Changelog
---

# Changelog

## 3.1
- Library 'nucleus' update

## 3.0

:::warning
**BREAKING CHANGE - PLEASE READ** - [See Upgrade Instructions](/docs/tagger/upgrading.md#taggersearchmode)
:::

- Due to a major bug discovered in the search behavior, the functionality of `TaggerSearchMode` has been revised.
  - The behavior of `Mode AND` has been moved to `Mode EXACT`.
  - The behavior of `Mode OR` has been moved to `Mode AND`.
  - The new `Mode OR` now returns all GameObjects that have any of the specified tags. For example, searching for `Green` OR `Red` will return objects with either `Green` or `Red` (or both), not objects that have both tags.
  - The default behavior of the `FindGameObject` methods has changed from `OR` to `AND`.

- Fixed incorrect type in documentation: `TaggerId` requires an `int` instead of a `string`.
- Improved filter documentation.
- Re-added `FindGameObjectWithTag` and `FindGameObjectWithTags` to the `TaggerSystem` class.
- Added `FindGameObjectWithExactId` and `FindGameObjectsWithExactId` to the `TaggerSystem` class.
- Added `FindGameObjectWithId` and `FindGameObjectsWithId` to the `TaggerSystem` class.

## 2.4
- Library 'nucleus' update

## 2.3
- Library 'nucleus' update
- Fixing Bug where the PlayerLoop could get reset to default

## 2.2
- Library 'nucleus' update

## 2.1
- Library 'nucleus' update

## 2.0

### Changed

:::warning
Folder Structure Changed - The Tagger Plugin is now converted to Unity's new Package format. This means you need to DELETE the old folder. [See Upgrade Instructions](/docs/tagger/upgrading.md#project-upgrade)
::: 

:::warning
Namespace Changed - The Tagger Plugin is now migrated to Final Factory.
::: 

### UI Overhaul
- Complete overhaul of the UI for a more intuitive and streamlined experience.

### Method Renaming
- **Add Multiple Tags**: Method renamed from `AddTag` to `AddTags`.
- **Set Multiple Tags**: Method renamed from `SetTag` to `SetTags`.
- **Find GameObject with a Specific Tag**:
  - `FindGameObjectWithTag` renamed to `FindGameObjectWithExactOneTag`.
  - `FindGameObjectsWithTag` renamed to `FindGameObjectsWithExactOneTag`.

### Added

- **Auto-Creation of Non-Existing Tags**: Adding a non-existing tag to a group will now automatically create it in the system.
- **Tag Renaming**: Pressing Enter now completes the renaming of a tag.
- **Singleton Groups**: Groups can now be configured as [Singleton](/docs/tagger/groups#singleton).
- **Enhanced AddTag Method**: 
  - Now accepts the `TaggerGroup` class.
  - Returns a boolean indicating if the tag was added to the system.
- **New Search Mode**: `FindGameObjectsWithTag` now includes a search mode for single tags.
- **Type-Safe Auto-Generated Tags**: Added type-safe, auto-generated tags for use in scripts.


## Fixed

- Deserialization Bug: Fixed a rare bug where the internal array of TagArray had the wrong size after deserialization, causing an index out of range exception.

## 1.7.1

- Due to a bug caused by the Custom GameObject Inspector, I currently had to remove the Custom GameObject Inspector. Please just add the tagger script as a component as usual to every GameObject you need it and use the Component Inspector instead!    
- You can activate the Custom GameObject Inspector by adding the Symbol TAGGER_ENABLE_BUGGY_GAMEOBJECT_INSPECTOR but be aware that you can no longer drag Prefabs into your SceneView and there are maybe other bugs.    

## 1.7

- User-wish added: methods to add/remove/check tags of a group    
- TagArray: Not longer needed to be disposed. Persistent mode added.    
- Documentation Updated    

## 1.6.1

- Fixed: Sometimes, the add tag field is missing.    
- Fixed: Renaming a tag does not trigger the save request.    

## 1.6

- User-wish added: custom property decorator. (TaggerIdAttribute for int fields)    
- User-wish added: custom filter class configurable through the inspector    
- Fixed font color issue with the light theme    
- Documentation expanded    

  

## 1.5.1

- Added Code methods for adding/removing and checking multiple tags on a GameObject at once.    
- Documentation Updated    

  

## 1.5

- REQUIRES the new Unity Editor UI    
- Online Documentation added    
- Added Code methods:    
- TaggerSystem.FindGameObjectWithTag - Returns one GameObject with a specific tag    
- TaggerSystem.FindGameObjectsWithTag - Returns all GameObject with a specific tag    
- TaggerData.GetTagArrayOfTag - Returns a TagArray with a specific tag    
- TaggerData.TagExists - Returns true if the tag exists    
- Minor bug fixes:    
- Rename Button works now    
- Demo scene: Fixed missing prefab bug    

  

## 1.4

- User-wish added: Alphabetical order of tags    
- Added visual feedback when trying to add a new tag that already exists    

  

## 1.3
:::warning
Folder structure adapted
:::    
- Updated to Unity 2019    
- Updated to .Net 4.x    
- Cleanup code with new C# >=7.0 language features    
- Added Assembly-definition-file    
- Fixed UI spacing issue    
- Fixed UI repaint issue    
- Fixed a critical bug that caused the loss of all tags on all GameObjects.    
- Changed to settings provider    
- Fixed critical serialization bug    
- Added renaming of Tags    
- Added renaming of Groups    

  

## 1.2

- Fixing a small bug in editor play mode cause to slow down Tagger    
- Added performance sample    

  

## 1.1

- Fixing bug in the example scene    
- Updated to Unity 2017.3.0   

  

## 1.0

- First release