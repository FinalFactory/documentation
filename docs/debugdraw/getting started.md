---
sidebar_position: 5
sidebar_label: Getting Started
---

# Getting Started

## Installation

To begin using **Final Debug Draw** in your Unity project, follow these steps:

1. Purchase the **Final Debug Draw** asset from the Unity Asset Store.
2. Download and import the asset into your Unity project by navigating to `Window -> Package Manager`.
3. Locate **Final Debug Draw** in the list of imported assets and ensure it is ready to be used in your project.

## Initial Setup

**Final Debug Draw** is designed for ease of use. Once the asset is imported into your project, it requires no additional configuration and is ready for immediate integration. This streamlined setup allows you to quickly start visualizing debug information in your game by leveraging the drawing system.

## How to Use Final Debug Draw

### Easy Way

```csharp
// Draw a simple line from start to end
DebugDraw.Line(start, end, ColorIndex.Red);

----

// Draw a wireframe sphere
DebugDraw.WireframeSphere(position, 1.0f, ColorIndex.Blue);

----

// Draw an arrow to visualize direction
DebugDraw.Arrow(start, end, ColorIndex.Green);
```

### Advanced Way

This is the better way in terms of performance. Use this in performance critical scenarios.

#### Understanding Color Indices

Final Debug Draw uses an efficient color indexing system:

1. **Predefined Colors (0-127)**: Fixed set of 128 colors including common colors like Red, Green, Blue.
2. **Custom Colors (128-255)**: 128 slots for user-defined colors that can be set at runtime.

```csharp
// Use predefined colors directly
DebugDraw.Line(start, end, ColorIndex.Red);

// Or use the numeric index
DebugDraw.Line(start, end, new ColorIndex(12)); // Red

----

// Define custom colors
DebugDraw.SetCustomColor(new ColorIndex(128), new Color(0.6f, 0.2f, 0.8f, 1.0f));
```

#### Drawing Multiple Shapes

For drawing multiple shapes efficiently:

```csharp
// Create a struct to draw multiple spheres at once
var sphereDrawer = new DebugWireframeSpheres(count: 10, segments: 16, duration: 0f, depthTest: false);

// Draw each sphere
for (int i = 0; i < 10; i++)
{
    var position = new float3(i * 2, 0, 0);
    sphereDrawer.Draw(position, radius: 0.5f, ColorIndex.Green);
}
```

#### Important Note

When using the drawing structs, they must be used within the same frame they are created. The buffer is processed at the end of the frame and becomes invalid afterward.

## Draw from Jobs and Burst Jobs

Final Debug Draw supports drawing from Jobs and Burst-compiled code:

```csharp
[BurstCompile]
private struct DrawJob : IJob
{
    public void Execute()
    {
        // Draw a line from jobs
        DebugDraw.Line(float3.zero, new float3(0, 1, 0), ColorIndex.Red);
        
        // Draw a sphere from jobs
        DebugDraw.WireframeSphere(new float3(2, 0, 0), 0.5f, ColorIndex.Blue);
    }
}

public void RunDrawJob()
{
    var job = new DrawJob();
    job.Schedule().Complete();
}
```

This simple and efficient API allows you to seamlessly visualize debug information in your scene, supporting both editor and runtime visualization from any context including multithreaded environments.
