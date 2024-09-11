---
sidebar_position: 10
sidebar_label: Samples
---
# Samples

You can find the samples for **Final Pool** in the Unity Package Manager. Simply navigate to the **Final Pool** section and look under the 'Samples' category to access and explore various sample implementations and configurations.

![Samples](https://static.wixstatic.com/media/880a29_28aea4d5b766446fa1974b8c34a6d00c~mv2.png)  
(*Sample Picture*)

## Cannon Sample

The **Cannon Sample** provides everything you need to understand how **Final Pool** works and how to implement object pooling in your project.

![Cannon Sample](https://static.wixstatic.com/media/880a29_fd8c70489942407cb19f0c45e0a77113~mv2.png)

### How to Use

After importing the sample through the Package Manager, follow these steps:

1. Navigate to `Assets\Samples\Final Pool\1.0.0\Cannons\Scenes`.
2. Open the `SampleScene`.
3. Press **Play** and observe the initial "bad" performance in the Unity Profiler.
4. In the **Hierarchy**, select the **Manager** GameObject.
5. Enable the toggle in the **Sample Manager** to activate pooling.

Now, the scene will use **Final Pool** to optimize object management and improve performance.

### Setup

This sample includes two prefabs:

1. **Simple Prefab:** 
   - This prefab generates dust on impact. 
   - The particle system's **Stop Action** is set to "Disabled".
   - A script is attached to return the object to the pool when it is disabled.

2. **Complex Prefab:** 
   - This prefab also generates dust but has more complex behavior.
   - It includes a script that resets the Rigidbody's state upon despawn, handles collision events, and implements the `IPooledObject` interface to manage custom behavior during object pooling operations. This ensures that the object is properly reset and ready for reuse when returned to the pool.

### Process

In the sample, the cannon continuously spawns and shoots bullets. When a bullet hits an object, it is "destroyed" and spawns a dust particle. The dust particle is then destroyed once the particle system completes.

### Poolify the Process

By enabling the **Pool** setting in the **Sample Manager** located in the scene hierarchy, the bullets and dust particles will be pooled instead of being created and destroyed. This demonstrates how **Final Pool** optimizes object reuse and improves performance in high-frequency object creation scenarios.