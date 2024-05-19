---
sidebar_position: 100
sidebar_label: Changelog
---

# Changelog

## 2.0

### Changed

:::warning
Folder structure changed - The Tagger Plugin is now converted to unity's new Package format.
::: 

:::warning
Namespace changed - The Tagger Plugin is now migrated to Final Factory.
::: 

- Complete Overhoal of the UI
- Method for adding multiple tags renamed from AddTag to AddTags
- Method for setting multiple tags renamed from SetTag to SetTags
- Renamed FindGameObjectWithTag to FindGameObjectWithExactOneTag
- Renamed FindGameObjectsWithTag to FindGameObjectsWithExactOneTag
- Adding a non existing tag to a group will now automatically create it in the system

### Added

- Enter now completes renaming a Tag
- Groups can now configured as [Singleton](/docs/tagger/groups#singleton)
- AddTag will now also accept the TaggerGroup class
- AddTag returns now a boolean that indicates if the tag was added to the system.
- FindGameObjectsWithTag with Search mode to search for single tags.
## Fixed

- Rare bug where the intenral array of TagArray has the wrong size after deserialization causing index out of range exception
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