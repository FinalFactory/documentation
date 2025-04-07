---
sidebar_position: 1
sidebar_label: Intro
---

# Final Debug Draw Documentation

![Final Factory Logo](https://static.wixstatic.com/media/880a29_adf69d1f5217420c946012af55973e12~mv2.png)  ![Final Debug Draw Logo](https://static.wixstatic.com/media/880a29_32d6220e763b4eff8b9a74a4f0f011bb~mv2.png)



[Final Debug Draw](https://finalfactory.de/unity-asset-debug-draw) is a Unity asset designed for efficient drawing of debug lines in various shapes from anywhere, runtime, editor, jobs, burst jobs, multithreaded. This asset allows developers to quickly debug positions, directions, paths, bounding boxes and other values via text.

## Introduction

Final Debug Draw is a powerful Unity asset designed to enhance development workflow by providing efficient and flexible debug visualization tools. In Unity, debugging spatial relationships, paths, and object states often requires temporary visualizations that can be challenging to implement and manage. Final Debug Draw addresses this challenge by offering a comprehensive suite of drawing functions that work seamlessly across runtime, editor, jobs, and burst jobs.

With Final Debug Draw, you can visualize positions, directions, paths, bounding boxes, and text annotations with minimal performance impact. The asset provides a rich set of features including color indexing for efficient color management, support for various drawing primitives, and the ability to draw from any context including multithreaded environments.

Whether you're developing complex gameplay mechanics, AI behaviors, or physics simulations, Final Debug Draw is an invaluable tool that helps you understand and debug your game's spatial relationships and state. This documentation will guide you through the key features and usage of Final Debug Draw, enabling you to get the most out of this versatile debugging solution.

If you need further help, use the various ways to [contact us](#support).

## Key Features
- Efficient Drawing: Draw debug lines, shapes, and text with minimal performance impact
- Color Indexing: Use predefined or custom colors through an efficient integer-based color system
- Multithreaded Support: Draw from jobs, burst jobs, and other multithreaded contexts
- Runtime & Editor Support: Visualize debug information both during gameplay and in the editor
- Rich Primitive Support: Draw lines, boxes, spheres, text, and more
- Persistent Drawings: Option to keep drawings visible across multiple frames

## Concept: Color Index System

In **Final Debug Draw**, colors are managed through an efficient integer-based indexing system. This design ensures that colors can be referenced quickly and consistently throughout your code, while maintaining flexibility for custom colors.

### Why Use Color Indexing?

Consider the case of drawing multiple debug elements with different colors. Instead of passing full Color structs (which require 4 floats), you can use a single integer index. This not only reduces memory usage but also makes it easier to maintain consistent color schemes across your project.

### Color Index Structure

The Color Index system consists of two main parts:

1. **Predefined Colors (0-127)**: A set of 128 fixed colors including common colors like Red, Green, Blue, and various shades of gray. These colors cannot be modified.

2. **Custom Colors (128-255)**: 128 slots for user-defined colors that can be set at runtime. This allows you to create and manage custom color palettes for your specific needs.

### Using Color Indices

You can use color indices in two ways:

1. **Direct Index Usage**: Use the predefined indices directly in your drawing calls:
```csharp
DebugDraw.Line(start, end, new ColorIndex(12)); // Uses predefined Red
```

```csharp
DebugDraw.Line(start, end, ColorIndex.Red); // Uses predefined Red
```

2. **Custom Color Definition**: Define your own colors in the custom range:
```csharp
DebugDraw.SetCustomColor(new ColorIndex(128), new Color(0.6f, 0.2f, 0.8f, 1.0f));
```

This efficient color management system ensures that your debug visualizations are both performant and flexible, allowing you to focus on the debugging task at hand rather than color management.

## Code Documentation

Every class and method is thoroughly documented using XML Documentation to ensure clarity and ease of use for developers.

## Support

If you need help or have any questions, please contact our support at:

- GitHub: [Issues](https://github.com/FinalFactory/FinalDebugDraw/issues)
- Forum: [Discussions](https://github.com/FinalFactory/FinalDebugDraw/discussions)
- Further [Support](./../support)

## License

Released under the <a href="https://unity.com/legal/as-terms" target="_blank">Unity Asset Terms</a>
Copyright © 2025 Final Factory