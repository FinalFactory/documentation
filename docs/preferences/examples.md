---
sidebar_position: 10
sidebar_label: Samples
---
# Samples

You can find the samples for Final Preferences in the Unity Package Manager. Simply navigate to the Final Preferences section and look under the 'Samples' category to access and explore various sample implementations and configurations.

![Samples](https://static.wixstatic.com/media/880a29_28aea4d5b766446fa1974b8c34a6d00c~mv2.png)
### Encrypted Money Value

This example demonstrates how to utilize the Final Preferences asset for securely managing and storing player coin totals using encrypted preferences. It shows how to implement and modify encrypted coin values in real time, both through gameplay controls and via the Preferences Editor.

```csharp
private const string Key = "Coins";  
private const int DefaultValue = 100;  
  
public Text Text;  
public Button ButtonEncrypt;  
public Button ButtonDecrypt;  
  
private IPrefs _prefs;  
  
private bool _isEncrypted = true;  
  
// Easy access to the value  
private float Value  
{  
    get => _prefs.GetFloat(_isEncrypted, Key, DefaultValue);  
    set  
    {  
        _prefs.SetFloat(_isEncrypted, Key, value);  
        _prefs.TrySave();  
    }  
}  
  
// Getting the prefs instance  
private void Awake() => _prefs = Prefs.Get(PrefsScope.Player);  
  
private void Start()  
{  
    UpdateText();  
    UpdateButtonState();  
}  
  
private void OnEnable()  
{  
    // Register for changes.  
    _prefs.Changed += UpdateText;  
      
    // Watch for changes in the PlayerPrefs for any changes from the editor.  
    PlayerPrefsChangeMonitor.Watch(Key, _isEncrypted);  
}  
  
private void UpdateText(object sender, ChangePrefsEventArgs args)  
{  
    if (args.Key == Key)  
    {  
        UpdateText();  
    }  
}  
  
private void OnDisable()  
{  
    Prefs.Get(PrefsScope.Player).Changed -= UpdateText;  
    PlayerPrefsChangeMonitor.UnWatch(Key, _isEncrypted);  
}  
  
public void AddMoney()  
{  
    Value += 100;  
    UpdateText();  
}  
  
public void SpendMoney()  
{  
    Value -= 100;  
    UpdateText();  
}  
  
public void Encrypt()  
{  
    //Change the encryption state  
    _prefs.ChangeEncryptionState(Key, true);  
    _isEncrypted = true;  
    UpdateButtonState();  
}  
  
public void Decrypt()  
{  
    //Change the encryption state  
    _prefs.ChangeEncryptionState(Key, false);  
    _isEncrypted = false;  
    UpdateButtonState();  
}  
  
private void UpdateButtonState()  
{  
    ButtonEncrypt.interactable = !_isEncrypted;  
    ButtonDecrypt.interactable = _isEncrypted;  
}  
  
private void UpdateText() => Text.text = $"Coins: {Value}";
```

#### Real-Time Modifications

You can modify the coin values in real-time using the Preferences Editor by selecting the "Player" scope. If you build the scene as a development build, you can also modify these values when running the standalone build by selecting "Standalone" in the Preferences Editor.

### Encrypted Money Value Item

The **Encrypted Money Value Item** functions similarly to the **Encrypted Money Value** example but utilizes the `PreferenceItem<T>` class for a more straightforward and user-friendly approach to managing encrypted data. This method enhances ease of use while maintaining the same functionality.

```csharp
public Text Text;  
public Button ButtonEncrypt;  
public Button ButtonDecrypt;  
  
//Creating a new preference item for convenience access.  
private readonly PreferenceItemInt _moneyItem = new(PrefsScope.Player, "Coins", 100, true, true);  
  
private void Start()  
{  
    UpdateText();  
    UpdateButtonState();  
}  
  
private void OnEnable()  
{  
    //Register for changes and enable watching for changes from the editor.  
    _moneyItem.Changed += UpdateText;  
    _moneyItem.Watch();  
}  
  
private void OnDisable()  
{  
    _moneyItem.UnWatch();  
    _moneyItem.Changed -= UpdateText;  
}  
  
private void UpdateText(object sender, int e) => UpdateText();  
  
public void AddMoney()  
{  
    //Changing the value. This will automatically save the value because we enabled sync.  
    _moneyItem.Value += 100;  
    UpdateText();  
}  
  
public void SpendMoney()  
{  
    //Changing the value. This will automatically save the value because we enabled sync.  
    _moneyItem.Value -= 100;  
    UpdateText();  
}  
  
public void Encrypt()  
{  
    //change the encryption state  
    _moneyItem.IsEncrypted = true;  
    UpdateButtonState();  
}  
  
public void Decrypt()  
{  
    //change the encryption state  
    _moneyItem.IsEncrypted = false;  
    UpdateButtonState();  
}  
  
private void UpdateButtonState()  
{  
    ButtonEncrypt.interactable = !_moneyItem.IsEncrypted;  
    ButtonDecrypt.interactable = _moneyItem.IsEncrypted;  
}  
  
private void UpdateText() => Text.text = $"Coins: {_moneyItem.Value}";
```

Both methods ensure that the modification and management of sensitive data, such as player financial information, are handled securely and efficiently, providing developers with robust tools to enhance gameplay interaction and data security.