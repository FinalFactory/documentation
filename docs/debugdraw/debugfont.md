---
sidebar_position: 6
sidebar_label: Debug Font
---

# Debug Font Settings

Final Debug Draw allows you to customize the font used for debug text through a settings file located in the Resources folder. The system uses TextMeshPro (TMP) for text rendering, requiring specific material configurations.

## Location

The debug font settings file is located at:
```
Assets/Resources/FinalDebugDrawSettings.asset
```

## Project Settings

In the Final Debug Draw project settings, you can select your preferred default font:

- Roboto
- Source Code Pro
- Custom

Selecting "Custom" prevents the system from overriding your materials in the FinalDebugDrawSettings.

## TMP Material Requirements

The debug text system requires specific TMP materials for different text types:

### Billboard Text
For fields labeled as "billboard", use these shaders from the package:
- `TextMeshPro/Mobile/Distance Field Billboard`
- `TextMeshPro/Mobile/Distance Field Billboard Overlay`

### Regular Text
For standard text fields, use these shaders from TMP:
- `TextMeshPro/Mobile/Distance Field`
- `TextMeshPro/Mobile/Distance Field Overlay`

## Configuration

You can modify the following font properties:

- Font Family
- Font Size
- Font Style (Normal, Bold, Italic)
- Font Color
- Background Color
- Padding
- TMP Material (with appropriate shader)

## Usage

1. Locate the `FinalDebugDrawSettings.asset` file in your Resources folder
2. Select the file in the Unity Editor
3. Configure the appropriate TMP materials with the required shaders
4. Modify the font properties in the Inspector window
5. Changes will take effect immediately in both editor and runtime

## Example

```csharp
// Draw text with the configured font
DebugDraw.Text(position, "Hello World", ColorIndex.White);
```

## Best Practices

- Use a monospace font for better alignment of debug text
- Keep font size reasonable for readability
- Consider using a contrasting background color for better visibility
- Test font settings in both editor and runtime to ensure consistency
- Always use the correct shader for billboard vs regular text
- Select "Custom" in project settings if you want to maintain your own material configurations 