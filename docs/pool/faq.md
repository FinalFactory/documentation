---
sidebar_position: 20
sidebar_label: FAQ
---
# FAQ - Frequently Asked Questions

## **Q: How do I increase performance?**

**A:** There are several ways to improve performance when using **Final Pool**. Below are a few tips to optimize pool usage:

### 1. Disable Interface Callbacks if not needed
Interface callbacks incur a small performance cost on every `Get` and `Return` action because the system must iterate through any `IPooledObject` components attached to the GameObject. Disabling this feature when it's not required can result in a noticeable performance improvement.
- **Performance Impact:** Medium

### 2. Disable Leak Detection
Leak detection attaches a small script to all created objects. Disabling this feature removes the slight overhead associated with managing this component. However, only disable it if you are confident that there are no memory leaks in your project.
- **Performance Impact:** Small

### 3. Disable Profiling
Disabling profiling reduces the tracking of pool statistics, which can slightly boost performance by removing the overhead of logging detailed usage data.
- **Performance Impact:** Small

## **Q: My prefab no longer works correctly with pools or behaves strangely. Why?**

**A:** If your prefab includes components like a **Rigidbody** (or any component that maintains persistent state, such as velocity), these states need to be reset when the object is reused. For example, you need to reset the Rigidbody's velocity upon despawn. You can refer to the Bullet Prefab Script in the [Cannon Sample](examples.md) for guidance.

Other persistent states, such as a **Trail Renderer**, may also cause issues when the object is teleported or reused. In such cases, you need to clear the trail when the object is despawned.

Many other components may require similar resets or clearing upon reuse. When despawning a pooled object, consider any state that might persist in memory and ensure it is reset for proper functionality.

Additionally, keep in mind that Unity's **Start** method is only called once, which can affect pooled objects since they are typically enabled and disabled rather than destroyed and recreated. If needed, this behavior can be adjusted by managing the object's active state differently. Refer to [Control GameObject Active State](glossary.md#control-gameobject-active-state) for more details.

## **Q: How do I set a pool to auto-size via the UI?**

**A:** To configure a pool for auto-sizing, disable the following three settings:

- **Max Capacity**
- **Max Capacity Overflow**
- **Max Total Object Count**

Additionally, you can also disable:

- **Spawn Threshold**
- **Despawn Threshold**

By disabling these options, the pool will operate without limits, ensuring no objects are destroyed automatically. The pool will function in near-manual mode. For full manual control, you can further disable **Initial Size** and **Warmup Count**. In this mode, the pool will only create objects when requested and will never destroy any objects, offering complete control over object management.