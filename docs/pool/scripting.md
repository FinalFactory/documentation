---
sidebar_position: 6
sidebar_label: Scripting
---
# Scripting

## Group Managment

In **Final Pool**, pool groups can be managed entirely via scripting, allowing for dynamic creation, management, and destruction of pools at runtime. Below is a breakdown of how to create, access, and manage pool groups using the provided API.

### Creating a Pool Group

To create a new pool group, use the `CreateGroup` method. This method requires a unique group name, a reference to the prefab to be pooled, and an optional set of configuration options.

#### Example:
```csharp
// Define the prefab and options
GameObject bulletPrefab = ...;
FinalPoolGroupOptions options = new FinalPoolGroupOptions
{
    MaxCapacity = PoolCount.Absolute(50), // Set max capacity of the pool
    WarmupCount = PoolCount.Absolute(10), // Preload 10 objects
};

// Create a new pool group for bullets
FinalPoolGroup bulletPool = FinalPool.CreateGroup("BulletPool", bulletPrefab, options);
```

- **groupName**: A unique string name for identifying the pool group.
- **prefab**: The GameObject to be pooled.
- **options**: An optional `FinalPoolGroupOptions` object to configure the pool (e.g., capacity, warmup count).

If a pool group with the given name already exists, the system will log a warning, and no new pool will be created.

### Accessing an Existing Pool Group

Once a pool group is created, it can be accessed anywhere in your code using the `GetGroup` method. This retrieves the pool group by its name.

#### Example:
```csharp
// Access the existing BulletPool group
FinalPoolGroup bulletPool = FinalPool.GetGroup("BulletPool");
```

If the group exists, it will be returned; otherwise, an error is logged.

### Destroying a Pool Group

To destroy a pool group and remove all objects it manages, use the `DestroyGroup` method. This will immediately destroy all objects in the group and remove it from the pool manager.

#### Example:
```csharp
// Destroy the BulletPool group
FinalPool.DestroyGroup("BulletPool");
```

After calling this method, the pool group and all its managed objects are permanently destroyed.

### Returning an Object to the Pool

The recommended approach is to return pooled objects through the pool group itself. However, if the specific pool group is unknown, you can use the `ReturnObject` method to return the object. This method iterates through all pool groups and returns the object to the appropriate group if it is managed by one.

#### Example:
```csharp
// Return an object without knowing the group
GameObject bullet = ...;
FinalPool.ReturnObject(bullet);
```

If the object is not managed by any pool, an error will be logged.

### Update Loop and Pool Management

The pool manager's `Update` method is automatically called each frame to manage the lifecycle of pooled objects. It ensures that:
- Objects exceeding capacity are fast-destroyed when necessary.
- Pool groups that are enabled have their objects updated regularly.

If **profiling** is enabled, the pool will also emit statistics about the number of active and inactive objects, which can be used for performance tracking and analysis.

### Example Workflow

Here is a full example demonstrating how to create, use, and manage a pool group via script:

```csharp
using UnityEngine;

public class PoolManagerExample : MonoBehaviour
{
    private FinalPoolGroup _bulletPool;

    void Start()
    {
        // Create the Bullet pool group
        GameObject bulletPrefab = ...;
        FinalPoolGroupOptions options = new FinalPoolGroupOptions
        {
            MaxCapacity = PoolCount.Absolute(50),
            WarmupCount = PoolCount.Absolute(10),
        };
        
        _bulletPool = FinalPool.CreateGroup("BulletPool", bulletPrefab, options);
    }

    void Update()
    {
        // Example of getting and using a pooled object
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GameObject bullet = _bulletPool.Get();
            bullet.transform.position = transform.position;
            bullet.SetActive(true);
        }
    }

    void OnDisable()
    {
        // Destroy the BulletPool group when no longer needed
        FinalPool.DestroyGroup("BulletPool");
    }
}
```

In this example:
- The pool group for bullets is created on startup.
- Bullets are retrieved from the pool when the space bar is pressed.
- The pool is cleaned up when the object is disabled.


## Interface Callback

You can implement the `IPooledObject` interface, which includes two methods: `OnSpawn` and `OnDespawn`.

:::info
Only scripts attached to the root GameObject will receive these callback calls.
:::

### OnSpawn

`OnSpawn` is triggered when an object is taken from the pool. It provides the pool group that spawns the prefab and any context data you pass when calling the `Get(context)` method. If no context is provided, the context parameter will be `null`.

```csharp
void OnSpawn(FinalPoolGroup group, object context = null)
{
    // Your logic for handling spawn behavior
}
```

### OnDespawn

`OnDespawn` is called when the GameObject is returned to the pool, allowing you to reset the object or prepare it for reuse.

```csharp
void OnDespawn()
{
    // Your logic for handling despawn behavior
}
```