---
sidebar_position: 7
sidebar_label: Intro
---
# Final Pool Documentation

![Final Factory Logo](https://static.wixstatic.com/media/880a29_adf69d1f5217420c946012af55973e12~mv2.png)  ![Final Pool Logo](https://static.wixstatic.com/media/880a29_32d6220e763b4eff8b9a74a4f0f011bb~mv2.png)



[Final Pool](https://finalfactory.de/unity-asset-pool) is a Unity asset designed for efficient pooling of game objects, providing enhanced management of object creation, reuse, and destruction. This asset allows developers to optimize performance by reducing the overhead associated with frequently instantiating and destroying game objects.

## Introduction

Final Pool is a powerful Unity asset designed to enhance game performance by efficiently managing the lifecycle of game objects through object pooling. In Unity, creating and destroying game objects frequently can lead to significant performance bottlenecks, especially in resource-intensive scenarios like rapid spawning of enemies, projectiles, or other game elements. Final Pool addresses this challenge by allowing developers to reuse game objects instead of creating and destroying them repeatedly.

With Final Pool, you can define and manage pools of objects with precise control over their creation, reuse, and destruction. It provides a comprehensive set of features, including dynamic object management, customizable spawn and despawn behaviors, and advanced memory leak detection. These features ensure that your game maintains optimal performance while reducing the risk of memory leaks and other runtime issues.

Whether you're developing a high-intensity action game, a complex simulation, or any project requiring efficient object management, Final Pool is an invaluable tool that helps you keep your game's performance smooth and responsive. This documentation will guide you through the key features and usage of Final Pool, enabling you to get the most out of this versatile pooling solution.

If you need further help, use the various ways to [contact us](#support).

## Key Features
- Dynamic Object Pooling: Automatically manage active and inactive objects, minimizing the need for runtime instantiation.
- Configurable Object Limits: Set absolute or percentage-based limits for maximum capacity, overflow handling, and total object count.
- Warmup and Initialization: Preload objects to a pool to avoid delays during gameplay.
- Controlled Spawning and Despawning: Use customizable intervals and delays for spawning and despawning objects, optimizing performance based on gameplay needs.
- Leak Detection: Track and identify objects that are not properly returned to the pool, helping to prevent memory leaks and other performance issues.
- Time Scaling Options: Choose between scaled or unscaled time for precise control over object management during game pauses or real-time scenarios.
- Warning and Alert System: Get notifications when pool capacities or limits are reached, allowing for proactive adjustments.

## Code Documentation

Every class and method is thoroughly documented using XML Documentation to ensure clarity and ease of use for developers.

## Support

If you need help or have any questions, please contact our support at:

- GitHub: [Issues](https://github.com/FinalFactory/FinalPool/issues)
- Forum: [Discussions](https://github.com/FinalFactory/FinalPool/discussions)
- Further [Support](./../support)

## License

Released under the <a href="https://unity.com/legal/as-terms" target="_blank">Unity Asset Terms</a>
Copyright © 2024 Final Factory