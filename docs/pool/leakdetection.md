---
sidebar_position: 1
sidebar_label: Intro
---
# Leak Detection

The **Leak Detection** helps identify objects that have not been properly returned to the pool. This feature is particularly useful during debugging to ensure all objects are correctly managed and returned to the pool after use. When enabled, the system will issue warnings and provide a stack trace for objects that were destroyed without being returned.

- **Disabled:** Leak detection is turned off.
- **EditorOnly:** Leak detection works only when the game is run in the Unity Editor.
- **Always:** Leak detection is enabled in both the Editor and in builds.

Leak Detection in Final Pool operates by adding a special component to each GameObject in the pool. This component tracks whether objects are properly returned to the pool after use. If an object is destroyed without being returned, the leak detection system can issue warnings and provide a stack trace to help identify where the object was improperly managed. This feature is especially useful for debugging object lifecycle issues are avoided in your project.

:::tip
Even when leak detection is disabled, you can manually check for leaked objects by calling the `CheckForLeaks()` method. However, without this mode enabled, you will not receive automatic warnings or stack traces.
:::