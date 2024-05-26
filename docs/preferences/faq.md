---
sidebar_position: 20
sidebar_label: FAQ
---
# FAQ - Frequently asked questions

## **Q: Full MacOS / Linux Support?**

**A:** Yes, but not for the Editor. Support for MacOS and Linux is currently limited. The Preferences Editor and the Monitor features do not function on MacOS and Linux; however, all other functionalities of Final Preferences operate as expected. [Read more](#limited-editor-support-for-linux-and-macos)
## **Q: How secure is the encrypted data within a game, and what measures can enhance its security?**

**A:** The encryption system used in Final Preferences employs AES (Advanced Encryption Standard), which is a robust and commonly used encryption method. This level of encryption can effectively prevent easy or casual access to sensitive data stored within the game preferences. However, it's important to recognize that no encryption solution on the client side can guarantee 100% security.

We store the encryption key within a ScriptableObject, which makes it more difficult (but not impossible) for unauthorized users to access or modify. Despite these measures, skilled individuals with knowledge in reverse engineering could potentially decrypt the data by extracting game assets and analyzing them to find the encryption key.

To enhance the security of your data further, consider the following additional measures:

1. **Use IL2CPP:** This Unity engine feature converts managed code into C++, which adds an extra layer of security by making it harder to reverse engineer the code compared to traditional Mono scripting backend.

2. **Employ Obfuscators:** Code obfuscation is a technique that makes the source code much harder to read and understand. When the code is obfuscated, it complicates the reverse engineering process, thus increasing the security against tampering and exploitation.

3. **Regular Updates:** Regularly updating the encryption algorithms and the methods used to secure the encryption keys can help in maintaining a higher level of security.

4. **Minimal Sensitive Data:** As a best practice, minimize the amount of sensitive data stored on the client side. Where possible, sensitive information should be managed server-side where higher security measures can be implemented.

For a client-side solution, Final Preferences offers a fairly secure system. The combination of AES encryption, storing keys in a less accessible manner, and the potential addition of IL2CPP and obfuscation techniques provides a reasonable level of resistance to unauthorized access. Nonetheless, it is crucial to maintain awareness that no client-side security measure is uncrackable and should be supplemented with best practices in data handling and security.

## Limited Editor Support for Linux and MacOS

The limited editor support for Linux and MacOS is in place for an undefined period. This limitation specifically affects the Preferences UI Editor, where editing capabilities for PlayerPrefs, EditorPrefs, and Standalone Prefs are unavailable on these platforms. However, ProjectRuntime and ProjectDevelopment preferences function correctly. Additionally, the runtime PlayerPrefs Change Monitor feature does not support Linux and MacOS. 

**It's important to note that while this limitation exists within the editor environment only, all preferences including Prefs, PlayerPrefs, EditorPrefs, ProjectRuntime, and ProjectDevelopment are fully operational on any platform during runtime.**