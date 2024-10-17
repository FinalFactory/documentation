---
sidebar_position: 20
sidebar_label: Tagger Id Attribute
---
# TaggerIdAttribute

The `TaggerIdAttribute` is a decorator for serialized fields in Unity, enabling those fields to be easily edited within the Inspector. This attribute is specifically designed for working with tags managed by the Tagger system.

### Usage of TaggerIdAttribute

Decorate any serialized field within your MonoBehaviour or ScriptableObject classes to link it with tags. This allows developers to assign tags directly from the Inspector, which can then be used programmatically in your scripts.

```csharp
public class MyGameObject : MonoBehaviour
{
    [TaggerId]
    public int gameObjectTag;
}
```

### Benefits

- **Easy Editing**: Provides a user-friendly way to assign and modify tags directly from the Inspector without needing to dive into code.
- **Integration**: Works seamlessly with `TaggerSystem`, allowing for easy retrieval and manipulation of tagged objects.
- **Flexibility**: Useful for both developers and designers, as it simplifies the process of tagging and using tags within game development workflows.