---
sidebar_position: 5
sidebar_label: Getting Started
---

# Getting Started

## Installation

To begin using **Final Pool** in your Unity project, follow these steps:

1. Purchase the **Final Pool** asset from the Unity Asset Store.
2. Download and import the asset into your Unity project by navigating to `Window -> Package Manager`.
3. Locate **Final Pool** in the list of imported assets and ensure it is ready to be used in your project.

## Initial Setup

**Final Pool** is designed for ease of use. Once the asset is imported into your project, it requires no additional configuration and is ready for immediate integration. This streamlined setup allows you to quickly start optimizing your game's performance by leveraging the pooling system.

## How to Use Final Pool

### Step 1: Adding the Final Pool Group Component

1. Select a GameObject in your scene that will persist as long as the pool is needed.
2. Add the **Final Pool Group** component to this GameObject. This component will manage the pool during runtime.

### Step 2: Setting Up the Pool

1. Configure the pool by assigning it a name and the **prefab** you intend to pool. 
2. (Optional) Adjust additional settings as needed to customize the pool’s behavior, such as capacity, warm-up size, and thresholds.

### Step 3: Using Final Pool in Scripts

Once the pool is set up, you can easily integrate it into your code:

```csharp
// Declare the pool group field
private FinalPoolGroup _group;

// Retrieve the pool group by name using the GetGroup method
_group = FinalPool.GetGroup("Bullet");

// Obtain a pooled object
var go = _group.Get();

// Return the object to the pool after use
_group.Return(go);
```

This simple and efficient API allows you to seamlessly spawn and reuse GameObjects in your scene, reducing the overhead of repeated instantiation and destruction.