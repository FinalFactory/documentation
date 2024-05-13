---
sidebar_position: 3
---

# Getting Started

## Installation

To begin using Final Tagger in your Unity project, follow these steps:

1. Purchase and download the Final Tagger asset from the Unity Asset Store.
2. Import the asset into your Unity project by navigating to `Window -> Package Manager`.

## Initial Setup

Final Tagger is designed for ease of use and does not require additional setup after importing into your project. It is ready to use immediately, enabling you to start enhancing your tag management system right away.

This streamlined approach ensures that developers can integrate Final Tagger quickly and efficiently, focusing on leveraging its features to improve the tagging of your game objects.

## How to use

To get started with the Tagger system and enhance your GameObject management, follow these steps:

1. **Add the Final Tagger Component**
  ![[img1.png]]
2. **Add Groups and Tags**: With the Tagger component active, you can now begin adding groups and tags. Click on the "+". Select the tags you want to apply to your GameObject by clicking on them. Only tags that have not yet been added will be displayed for selection. You can also create new ones.
    
4. **Tagging in Action**: After adding the desired tags, they are now associated with your GameObject. This process is also applicable to prefabs, allowing you to manage and tag prefabs effectively.
    
5. **Finding Tagged GameObjects**: To locate your tagged GameObjects within the scene or project, use the `TaggerSystem.FindGameObjectsWithTags` method. Specify the search mode (`TaggerSearchMode`) and the tags you're interested in. The method returns a `HashSet<GameObject>` containing all matching GameObjects.
    
6. **Advanced Searches**: For more complex tagging queries, utilize the `TaggerAdvancedSearch` class. This allows for detailed and specific search conditions beyond the basic tag matching.
    

By integrating these steps into your workflow, you can significantly improve how you manage and interact with GameObjects in your Unity projects.