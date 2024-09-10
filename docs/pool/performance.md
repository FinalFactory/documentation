---
sidebar_position: 9
sidebar_label: Performance Showcase
---
# Performance Showcase


## 1. Test Environment

- **Hardware Specifications:**
  - CPU: AMD Ryzen 7 4800HS
  - GPU: GTX 1660 Ti
  - RAM: 24GB

- **Unity Version:**
  - LTS 2022.3.36f1

- **Testing Conditions:**
  - Scene: Included Cannon Sample Scene
  - Target platform: PC
  - Frame Rate Cap: None
  - Physics Settings: default

---

## 2. Test Scenarios

### Test Scenario 1: Cannon Firing with Object Pooling

In this test scenario, **108 cannons** continuously fire bullets at a rate of **10 bullets per second**. Upon impact, each bullet generates a dust particle effect. This results in **1,080 bullets** being spawned every second, with corresponding dust particles being created upon each impact. Both the bullets and the dust particles are managed using **object pooling**, ensuring efficient reuse of objects and minimizing performance costs associated with frequent instantiation and destruction of GameObjects.

![alt text](https://static.wixstatic.com/media/880a29_fd8c70489942407cb19f0c45e0a77113~mv2.png)

#### Prefabs

A quick overview of the components of the used and pooled prefabs.

##### Bullet
- Mesh Filter
- Mesh Renderer
- Sphere Collider
- Rigidbody
- Bullet
- Child
  - Trail Renderer

##### Impact
- Particle System

#### Performance Metrics

| Metric                         | Normal Unity Use | Final Pool | Improvement (%) |
|--------------------------------|------------------|------------|-----------------|
| **Average FPS**                | 40fps    | 90fps | 125%    |
| **Garbage Collection**   | 50KB / frame    | 1KB / frame | 4900%    |
| **Process Time (ms)**    | 26ms    | 3ms | 766%    |


---

### Test Scenario 2: Spawning and Destroying 10,000 GameObjects

In this test, a simple script is used to spawn **10,000 GameObjects** and destroy them upon button press. The prefab used is an empty GameObject, specifically selected to highlight the raw performance difference between standard Unity object management and the use of **Final Pool**.

**Note:**
- **Interface Callbacks** and **Leak Detection** are disabled for this test to focus solely on the pooling performance.
  
#### Additional Considerations:
- Further performance improvements can be expected when the Unity Profiler is disabled, and the **Preprocessor Symbol** `ENABLE_PROFILER` is not defined, as this will remove the overhead introduced by performance tracking tools during runtime.

This test provides a baseline or **minimum** performance gain, as the prefab used is completely empty. In real-world scenarios, prefabs often contain multiple components (e.g., scripts, physics, renderers) that require initialization and can significantly increase the processing cost. Therefore, pooling complex prefabs with components will yield even greater performance benefits than demonstrated with this basic example.

#### Performance Metrics

| Metric                         | Instantiate | Final Pool Get | Improvement (%) |
|--------------------------------|------------------|------------|-----------------|
| **Garbage Collection**   | 600KB   | 0KB | inf%    |
| **Process Time (ms)**    | 78ms    | 34ms* | 129%    |

| Metric                         | Destroy | Final Pool Return | Improvement (%) |
|--------------------------------|------------------|------------|-----------------|
| **Garbage Collection**   | 1.1KB   | 0KB | inf%    |
| **Process Time (ms)**    | 25ms    | 24ms* | 4%    |


#### *Note on GameObject Activation Overhead

In this performance test, approximately **10 milliseconds** of overhead is attributed to calling **GameObject.SetActive(bool)** **10,000 times**. This operation occurs when objects are enabled or disabled within the pool, which is a common action during pooling scenarios. While this is a necessary part of object reuse, it is important to consider this activation cost when evaluating overall performance improvements from object pooling.

Reducing the frequency of these calls or optimizing object reuse can further minimize this overhead. 

##### Customizable Object Activation in Final Pool

To address the overhead introduced by frequent **GameObject.SetActive(bool)** calls, **Final Pool** provides an option to disable this default behavior. By disabling automatic activation and deactivation of pooled objects, developers can fully control when and how objects are managed within the pool. 

This customization allows for greater flexibility and performance tuning, but it also means that you, as the developer, must handle object activation and deactivation manually to ensure correct behavior during gameplay. This feature is particularly useful in scenarios where fine-grained control over object states is required to further optimize performance.

---

## 4. Observations and Notes

- **Performance Gains:** The performance improvement is substantial. By using object pooling, we significantly reduce garbage collection activity, and it's more efficient to disable and enable game objects rather than destroy and recreate them. Although some additional work is required, such as resetting the rigidbody state on bullets to prevent physics glitches, the overall benefits are clear.
  
- **Process Time:** This represents the raw time needed to update the scripts in the scene, with all other activities excluded as measured by the Unity Profiler.

---

## 5. Conclusion

### Summary of Results

The performance comparison clearly demonstrates that integrating **Final Pool** into a Unity project provides substantial benefits over the standard Unity game object management approach. In the provided test scenario, the use of **Final Pool** resulted in a significant increase in average frames per second (FPS), reducing the process time for updating scripts, and drastically cutting down garbage collection activity. These improvements highlight the effectiveness of object pooling in optimizing resource usage and maintaining smoother gameplay, particularly in scenarios with frequent object instantiation and destruction.

### Recommendations

Based on the performance metrics and observations from the test scenario, it is highly recommended to utilize **Final Pool** for managing game objects in Unity projects that involve high-frequency spawning and destruction of objects. The reduction in garbage collection and process time not only enhances performance but also reduces the likelihood of frame drops and stuttering, leading to a more stable and responsive gaming experience. For developers looking to optimize their games, integrating **Final Pool** can be a valuable step towards achieving efficient resource management and improved overall performance.