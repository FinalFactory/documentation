---
sidebar_position: 6
sidebar_label: Scripting
---

# Scripting with Preferences

## Code Concepts

### Prefs Class

The `Prefs` class is a static class that serves as a gateway to various preference handlers. It provides a method named `Get`, which returns an `IPrefs` instance. This instance acts as the handler for preferences within a specified `PrefsScope`.

### IPrefs Interface

The `IPrefs` interface provides a standardized approach to managing preferences within a particular scope. It ensures that preference operations are sensitive to the encryption state of the entries. A key point of this interface is its handling of duplicate keys: it does not allow a key to exist in both encrypted and non-encrypted forms simultaneously. This ensures integrity and security in the preference management system.

### PlayerPrefsChangeMonitor

The `PlayerPrefsChangeMonitor` is a specialized tool designed to monitor changes to the PlayerPrefs that occur outside the direct interaction of the game. This monitoring is typically active only in development builds, enhancing debugging and development efficiency. However, it can be explicitly enabled in release builds through a specific Project Setting.

This class provides methods `Watch` and `Unwatch` to register and deregister interest in specific keys. When a registered key is modified, the system notifies the relevant components, such as the Preferences Editor Window included with this package. This feature is particularly useful for developers needing real-time updates on preference changes during game development.

## Example Usage

### Using Preference Items

This example demonstrates how to define, access, and save a boolean preference item with encryption enabled. The preference item is created for the Player scope with a default value of `true` and then modified.

```csharp
// Define a new boolean preference item with encryption 
var myBoolPref = new PreferenceItemBool(PrefsScope.Player, "musicEnabled", true, true, encrypt: true);  
// Access and modify the value 
myBoolPref.Value = false;  
// Save the preference
myBoolPref.Save(); // Not necessary if autosave is enabled.
```

### Using Direct Code

Here, we illustrate how to directly retrieve and set a preference value within the Player scope. The methods provided by the `Prefs` class allow for straightforward preference management.

```csharp
// Getting the value
var myValue = Prefs.Get(PrefsScope.Player).GetString("MyValue", "Default Value");
// Setting the value
Prefs.Get(PrefsScope.Player).SetValue("MyValue", myValue);
```

These examples highlight the practical application of preference management within your application, ensuring easy retrieval and modification of user preferences.
