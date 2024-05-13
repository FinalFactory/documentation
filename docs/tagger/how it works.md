---
sidebar_position: 4
---

# How Tagger Works

Understanding the structure and functionality of Tagger is essential for effectively managing tags within your Unity projects. Here’s a breakdown of how Tagger operates:

## Structure

### Script
Each GameObject is equipped with a Script, known as `FinalTagger`. This script is crucial as it contains a unique identifier - the Identification Number of the tags attached to that particular GameObject.

### Data
Within your project resides a crucial ScriptableObject named `TaggerData`. This object is responsible for storing all the logical connections between IDs and their corresponding tags. It acts as the backbone for tracking and organizing the tags applied throughout your project.

### Useful Information and Limitations
It's important to note that while groups are useful for organizing tags, they don't directly influence the functionality of the Tagger system. **Tag Names Must Be Unique Across Groups**: You cannot use identical tag names in different groups, as they will conflict. For instance, tags labeled as `Size.A` and `Level.A` effectively become just `A` and `A`, regardless of their group prefix. This limitation is crucial for maintaining clarity and avoiding conflicts in tag assignments.

By adhering to these guidelines and understanding the underlying structure of Tagger, you can maximize your efficiency in managing tags and enhance your project workflows.