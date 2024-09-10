---
sidebar_position: 12
sidebar_label: Profiling
---
# Pool Profiling

Pool Profiling can be enabled in your project settings by navigating to **Final Factory -> Final Pool**.

### Requirements:
1. **Unity Profiling Enabled:**
   - Ensure that Unity's profiling is enabled by setting the `ENABLE_PROFILING` preprocessor symbol in your project. This is necessary for profiling data to be collected.

2. **Unity Profiling Core API:**
   - You must have the **`com.unity.profiling.core`** package (also known as **Unity Profiling Core API**) installed. This package is required for pool profiling to function. You can install the package through the Unity Package Manager.

For more details on installing and using the Unity Profiling Core API, visit the official documentation:  
[Unity Profiling Core API Documentation](https://docs.unity3d.com/Packages/com.unity.profiling.core@1.0/manual/index.html)

### Using Pool Profiling

#### Setup

To get started, ensure that the **Final Pool Module** is selected in the Unity Profiler.

![Profiler Module](/img/pool/ProfilerModule.png)

#### Pool Profiler Module

The **Pool Profiler** provides historical data about pool usage, allowing you to monitor pool utilization and view summarized statistics across all pools. It helps track how many objects are issued, returned, created, or destroyed, giving you insights into potential performance issues.

- The **graph** visualizes spikes in object creation, destruction, issuance, and returns, along with the total count of active and inactive objects.
- The **table** view provides more detailed information, helping you identify which pool is responsible for performance spikes.

This allows for a clear analysis of how the pool is being utilized and helps in diagnosing potential issues.

![Profiler](/img/pool/Profiler.png)

#### Combine with CPU Module

For deeper performance analysis, combine the **Pool Profiler Module** with Unity's **CPU Profiler Module**. This helps identify why some pool operations, such as object returns or gets, may take longer than expected. The profiler tracks the following:

- **GameObject Active State Changes** (Unity default tracking)
- **Object Allocation**
- **Object Destruction**
- **Event Handling**
- **Interface Callbacks**

This detailed tracking helps pinpoint the source of performance issues, allowing you to optimize the pool’s behavior more effectively.

![Profiler CPU](/img/pool/ProfilerCPU.png)