# Scripting for DebugDraw

## Introduction

DebugDraw is a fully script-driven Unity asset, designed to simplify debugging and visualization tasks by providing easy-to-use methods for drawing primitives and directional indicators directly from your scripts. This guide explains the core concepts, focusing on the main types of methods provided by DebugDraw, their naming conventions, parameters, and usage examples.

## Colors

A quick note to the colors. The system does not accept normal unity colors. It uses a special format for performance reason. Refer to [Color Index](colorindex.md) for more details.

## Easy Draw Method Types

There are tons of predefined methods to make an easy use to draw debug stuff.

Inside the class of DebugDraw, methods are categorized primarily into two types:

### Solid and Wireframe Methods

Methods prefixed with either `Solid` or `Wireframe` indicate the style of drawing:

- **Solid**: Methods prefixed with `Solid` render fully-filled primitives.

  ```csharp
  public static void SolidBox(in float3 center, in quaternion rotation, in float3 size, in ColorIndex colorIndex, in float duration = 0f, in bool depthTest = false);
  ```

- **Wireframe**: Methods prefixed with `Wireframe` render primitives in wireframe mode.

  ```csharp
  public static void WireframeSphere(in float2 center, in float radius, in ColorIndex colorIndex, in float duration = 0f, in int segments = 16, in bool depthTest = false, in float zPos = 0f);
  ```

**Parameters:**

- `center`: Position of the primitive in world space.
- `size` or `radius`: Dimensions of the primitive.
- `color`: Color used to render the primitive.

**Usage Example:**

```csharp
// Solid cube at origin
DebugDraw.SolidBox(Vector3.zero, new Vector3(1, 1, 1), Color.red);

// Wireframe sphere at position (2,0,0)
DebugDraw.WireframeSphere(new Vector3(2, 0, 0), 0.5f, Color.blue);
```

### Directional (From-To) Methods

Methods with directional purposes, such as arrows and rays, have clear directional or "from-to" semantics:

- **Arrow Methods**: Render an arrow pointing from a start to an end position.

  ```csharp
  DebugDraw.Arrow(Vector3 from, Vector3 to, Color color, float headSize = 0.25f);
  ```

- **Ray Methods**: Similar to arrows but typically represent infinite or semi-infinite lines.

  ```csharp
  DebugDraw.Ray(Vector3 from, Vector3 direction, Color color, float length = 1f);
  ```

**Parameters:**

- `from`: Starting point of the directional indicator.
- `to` or `direction`: End point or direction vector.
- `color`: Color of the rendered indicator.
- `headSize` (arrow only): Size of the arrowhead.
- `length` (ray only): Length of the ray from the starting point.

**Usage Example:**

```csharp
// Arrow from (0,0,0) to (1,1,1)
DebugDraw.Arrow(Vector3.zero, new Vector3(1, 1, 1), Color.green);

// Ray starting at (1,1,1) pointing upwards
DebugDraw.Ray(new Vector3(1, 1, 1), Vector3.up, Color.yellow, 2f);
```

## Complex Method Explanation

### SolidCone

`SolidCone` is a more complex primitive often used for directional visualization (e.g., viewing angles or field of view).

```csharp
DebugDraw.SolidCone(Vector3 apex, Vector3 direction, float angle, float length, Color color, int segments = 12);
```

**Parameters:**

- `apex`: The tip or starting position of the cone.
- `direction`: The normalized direction in which the cone opens.
- `angle`: Angle in degrees representing the cone's spread.
- `length`: The length or depth of the cone from apex.
- `color`: The color to render the cone.
- `segments`: Optional detail level of the cone (higher means smoother).

**Usage Example:**

```csharp
// Solid cone at (0,1,0), pointing forward, with a 45-degree spread and length of 2 units
DebugDraw.SolidCone(new Vector3(0, 1, 0), Vector3.forward, 45f, 2f, Color.magenta);
```

## Easy Method Explanation

### Line

The simplest DebugDraw method is the line, allowing quick rendering of line segments.

```csharp
DebugDraw.Line(Vector3 start, Vector3 end, Color color);
```

**Parameters:**

- `start`: The line's starting point.
- `end`: The line's ending point.
- `color`: The color of the line.

**Usage Example:**

```csharp
// Line from left to right
DebugDraw.Line(new Vector3(-1, 0, 0), new Vector3(1, 0, 0), Color.white);
```

## Best Practices

- Group multiple draw calls logically to minimize overhead.
- Use different colors to distinguish between various debugging elements clearly.
- Employ directional methods (arrows, cones, rays) to visualize vectors and directions effectively.

With DebugDraw, you can efficiently visualize your game's logic, enhancing debugging clarity and development speed.

## Draw Multiple Shapes at once.

Every easy method uses in the core a draw struct.
For example: 
```csharp
public static void WireframeSphere(in float3 center, in float radius, in ColorIndex colorIndex, in float duration = 0f, in int segments = 16, in bool depthTest = false)        
{
    new DebugWireframeSpheres(1, segments, duration, depthTest).Draw(center, radius, colorIndex);
}
```

This easy draw method creates a new struct, with exactly one sphere to draw.
You need to know how many sphere to draw because when you construct the struct, it will allocate and reserve a place in the rendering buffer for itself. You do not need to dispose the struct it will handle itself.

:::danger

VERY IMPORTAND: You can not create a struct and use it in another frame. This will cause unity to crash because at the end of the frame, the buffer gets processed and is then invalid.

::: 

If you have a long running job, it is saver to use the single draw command.

## Path Drawing

Final Debug Draw provides specialized structs for drawing paths with arrows. These are particularly useful for visualizing movement paths, trajectories, or flow directions.

### DebugDrawPath3D

The `DebugDrawPath3D` struct allows you to create and visualize 3D paths with directional arrows. It's designed for efficient path visualization with minimal memory allocation.

```csharp
// Create a path with arrows every 2 units, maximum 10 arrows
var path = new DebugDrawPath3D(arrowDistance: 2f, arrowCount: 10);

// Update the path with new positions
path.AppendOrUpdate(new float3(x, y, z));

// Draw the path
path.Draw(
    duration: 0f,      // How long the path stays visible
    arrowSize: 3f,     // Size of the arrows
    wireFrame: true,   // Whether to use wireframe or solid arrows
    depthTest: false,  // Whether to respect depth testing
    up: math.up()      // Up direction for arrow orientation
);

// Don't forget to dispose when done
path.Dispose();
```

### Key Features

- **Efficient Memory Usage**: Uses `NativeArray` for optimal performance
- **Configurable Arrow Spacing**: Control how frequently arrows appear
- **Fixed Arrow Count**: Prevents memory fragmentation
- **Wireframe and Solid Options**: Choose between wireframe and solid arrow styles
- **Customizable Appearance**: Control arrow size, color, and orientation

### Usage Example

```csharp
// In a MonoBehaviour
private DebugDrawPath3D _path;

void Start()
{
    _path = new DebugDrawPath3D(2f, 10);
}

void Update()
{
    // Update path with current position
    _path.AppendOrUpdate(transform.position);
    
    // Draw the path
    _path.Draw(
        color: ColorIndex.Green,
        arrowSize: 2f,
        duration: 0.1f
    );
}

void OnDestroy()
{
    _path.Dispose();
}
```

:::note
A 2D version (`DebugDrawPath2D`) is also available for 2D path visualization.
:::

:::important
Always dispose of the path struct when you're done with it to prevent memory leaks.
:::

