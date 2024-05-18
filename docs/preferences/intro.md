---
sidebar_position: 1
sidebar_label: Intro
---
# Final Preferences Documentation

![Final Factory Logo](https://static.wixstatic.com/media/880a29_adf69d1f5217420c946012af55973e12~mv2.png)  ![Final Preferencs Logo](https://static.wixstatic.com/media/880a29_cacc0fcbd8634d0ca420b52813621ddb~mv2.png)



[Final Preferences](https://finalfactory.de/unity-asset-preferences) is an advanced Unity asset created by Final Factory, designed to enhance and extend the management of preferences in Unity projects. It builds upon the existing PlayerPrefs and EditorPrefs frameworks, introducing additional functionalities such as ProjectRuntime and ProjectDevelopment scopes, encryption for sensitive data, and a sophisticated editor UI for managing preferences in real-time. This documentation provides detailed guidance on the setup, usage, features, and API of Final Preferences to ensure successful integration and utilization in your Unity projects.

## Introduction

Final Preferences delivers a robust and adaptable system for managing game settings and preferences across various scopes, including runtime and development standalone builds. This asset is particularly beneficial for projects that demand high data integrity and enhanced security, featuring encryption capabilities to protect sensitive information.

If you need further help, use the various ways to [contact us](#support).

## Feature Overview

### Multi-Scope Preference Management

Final Preferences provides a versatile scope management system that accommodates various development and runtime scenarios in Unity. Each scope is uniquely designed with specific use cases, restrictions, and capabilities, enhancing how preferences are managed across different environments and builds. Here’s a detailed look at each available scope and their practical applications within Unity projects.

#### Player Scope

- **Description**: The Player Scope is used for preferences that need to be accessible both during gameplay and within the Unity Editor. These preferences are project-specific, meaning they are unique to each project but do not carry over across different projects or development environments. This scope utilizes Unity's PlayerPrefs as its backend.
- **Usability**: Ideal for storing player-specific settings such as volume levels, game difficulty, and graphical preferences. Preferences in this scope can be read and written during gameplay and while using the editor.
- **Restrictions**: Operates within the standard limitations of PlayerPrefs, with no additional restrictions.
- **Example Usage**: To save player settings that persist across gaming sessions, you can manage settings like volume as shown below:

```csharp
var playerVolume = new PreferenceItemFloat(PrefsScope.Player, "volumeLevel", 0.75f);
```

#### ProjectRuntime Scope

- **Description**: This scope is tailored for settings that need to remain consistent across various instances of the editor and runtime, and are accessible from any computer when shared via source control (using a Scriptable Object Asset). It is designed for project-specific settings that are crucial during development but should not be altered during actual gameplay.
- **Usability**: Settings in this scope can be modified in the editor but are readable in both the editor and during runtime, including in development and release builds.
- **Restrictions**: The settings are read-only during runtime and development builds, which prevents alterations during active gameplay.
- **Example Usage**: For settings that should not change during gameplay, such as API tokens (which can also be encrypted) or constants like points per game level:

```csharp
var spawnRate = new PreferenceItemString(PrefsScope.ProjectRuntime, "BackendGameAPIKey", "ABHEXD");
```

#### ProjectDevelopment Scope

- **Description**: This scope is reserved for settings relevant only during the development phase, ensuring they do not appear or become accessible in production builds. It supports access from any computer via source control, making it project-specific.
- **Usability**: Preferences within this scope are modifiable and readable in the editor and can be read in development builds.
- **Restrictions**: These settings are completely unavailable in production runtime, strictly for development use only.
- **Example**: Utilize this scope for debugging parameters that need adjustment during testing but should remain inaccessible in the final game, like debug display options.
- **Attention**: The `PrefsScope.ProjectDevelopment` is not present in release builds to prevent accidental inclusion of test code; it will trigger a build error. Use conditional compilation like `#if UNITY_EDITOR || DEVELOPMENT_BUILD` to safeguard against such issues.

```csharp
#if UNITY_EDITOR || DEVELOPMENT_BUILD
var debugDisplayEnabled = new PreferenceItemBool(PrefsScope.ProjectDevelopment, "debugDisplay", true);
#endif
```

#### Editor Scope

- **Description**: Tailored for preferences that are specific to a developer’s machine, ideal for configurations within the Unity Editor that should not be shared across environments or projects. This scope uses Unity's EditorPrefs as its backend.
- **Usability**: Preferences are both readable and writable within the editor and are confined to the developer’s computer.
- **Restrictions**: These settings do not impact the game runtime and are exclusively accessible within the editor.
- **Example**: Manage editor-specific settings like layout preferences or plugin configurations unique to a developer's workstation.
- **Attention**: The `PrefsScope.Editor` is available only within the Unity editor.

```csharp

#if UNITY_EDITOR
var preferredLayout = new PreferenceItemString(PrefsScope.Editor, "editorLayout", "Default");
#endif

```




#### Standalone Scope

- **Description**: This scope is used for managing PlayerPrefs in standalone game builds that are run on a developer’s computer, allowing changes from the Unity Editor without needing to alter the game directly.
- **Usability**: Ideal for accessing or debugging PlayerPrefs from built applications, enabling modifications without the need for game rebuilds.
- **Restrictions**: Accessible only within the Unity Editor and not during actual gameplay or other development phases.
- **Example**: Adjust or reset PlayerPrefs settings in your standalone game to test different configurations effortlessly.
- **Attention**: `PrefsScope.Standalone` is operational solely within the Unity editor.

```csharp
#if UNITY_EDITOR
var standalonePlayerCoins = new PreferenceItemFloat(PrefsScope.Standalone, "Coins", 100, true, true);
#endif
```

Each of these scopes enhances the flexibility and control developers have over managing preferences, catering to specific needs and stages of game and application development with Unity.

### Encryption

Encrypting sensitive data is crucial for the security of user preferences. Final Preferences enables the encryption of crucial data such as credentials or personal user information, safeguarding it against unauthorized access and enhancing overall data integrity.

### Powerful Editor UI

Final Preferences comes equipped with a robust editor UI that greatly facilitates the visualization and real-time modification of preferences. This feature is particularly effective for managing both standard and encrypted data seamlessly.

- **Real-Time Visualization**: Adjust and monitor preferences on-the-fly within the Unity Editor, providing immediate feedback and control.
- **Standalone Game Build Support**: Directly view and modify preferences from standalone game builds, streamlining debugging and testing processes without the need to rebuild.



### Preferences Item Framework

The Preferences Item Framework within Final Preferences utilizes a generic `PreferenceItem<T>` class. This framework enhances preference management through typed preference items, incorporating features that promote efficiency and ease of use:

- **Type-Specific Items**: Create and manage preferences with specific data types, ensuring data consistency and type safety.
- **Auto-Sync**: Automatically synchronize preference values between the item and the preferences handler, reducing the need for manual updates.
- **Change Events**: Trigger events when preferences change, enabling responsive and dynamic game behaviors based on user settings.
- **Default Values**: Define default values for each preference, simplifying the initialization process and ensuring a fallback when no user-defined value is present.
- **Watchable**: The Preferences Item includes a key feature that allows each preference item to be easily registered with the player preferences change monitor.

These features make Final Preferences a powerful tool for managing a wide array of settings in Unity projects, ensuring that developers can maintain control over user preferences with high levels of security and flexibility.

### Updating PlayerPrefs Values of Standalone Build in Realtime

Final Preferences enhances the debugging and testing process by allowing real-time updates and monitoring of PlayerPrefs values within standalone builds. This capability is provided through a sophisticated monitoring system that interacts with Unity's PlayerPrefs backend.

#### Real-Time Monitoring and Updates

You can select specific PlayerPrefs keys to monitor. The easiest way is to just call the method `Watch` on a `PreferenceItem<T>` . If the system detects any changes made outside of the game—such as through the editor—it triggers an event. This feature enables developers to easily modify and test different preferences values while the game is running, without the need to stop and restart the game, thus streamlining the debugging process.



#### Using the `Watch` Method

To begin monitoring a PlayerPrefs key, you can utilize the `Watch` method directly on a `PreferenceItem<T>`. This method is designed for ease of use, allowing you to quickly set up monitoring for any preference item.

```csharp
// Example of setting up a watch on a preference item 
var playerVolume = new PreferenceItemFloat(PrefsScope.Player, "volumeLevel", 0.75f); 
playerVolume.Watch();
```

#### Integration and Control

The monitoring system is designed to be non-intrusive and is automatically excluded from release builds to prevent potential performance issues or unintended interactions in the final product. However, if there is a specific need to include this monitoring feature in a release build, Final Preferences provides a setting that allows developers to enable it manually. This flexibility ensures that developers can choose how and when to use this feature based on their specific needs and development stage.

This real-time update capability of PlayerPrefs values in standalone builds is an invaluable tool for developers looking to refine their game's settings dynamically and observe the immediate impacts of different configurations, all while maintaining high performance and security standards in production releases.

## Code Documentation

Every class and method is thoroughly documented using XML Documentation to ensure clarity and ease of use for developers.

## Support

If you need help or have any questions, please contact our support at:

- GitHub: [Issues](https://github.com/FinalFactory/FinalPreferences/issues)
- Forum: [Discussions](https://github.com/FinalFactory/FinalPreferences/discussions)
- Further [Support](./../support)

## License

Released under the <a href="https://unity.com/legal/as-terms" target="_blank">Unity Asset Terms</a>
Copyright © 2024 Final Factory