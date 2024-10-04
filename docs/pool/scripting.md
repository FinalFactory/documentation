---
sidebar_position: 6
sidebar_label: Scripting
---
# Scripting

## Getting and Returning Pooled Objects

This section explains how to retrieve and return objects to pools managed by **Final Pool**. 

### Getting a Pooled Object

To retrieve a pooled object, use the `GetObject` method, which identifies the appropriate pool based on the provided prefab and returns an object from that pool. If no pool exists for the prefab, you can opt to automatically create one.

#### Usage

```csharp
GameObject pooledObject = FinalPool.GetObject(prefab, true);
```

- **prefab**: The prefab used to identify the pool.
- **createPoolGroup** (optional): If `true` (default), a new pool group is created if none exists for the prefab.

#### Behavior

1. **Finding the Pool**: 
   - The method searches for a pool group that manages the given prefab. If found, an object is retrieved from the pool using `group.Get()`.

2. **Creating a Pool**: 
   - If no matching pool group is found and `createPoolGroup` is `true`, a new pool group is automatically created for the prefab, with **AutoSize** enabled. If a group with the same name exists, a number is appended to make it unique.
   - The object is then retrieved from the new pool group.

3. **No Pool Found**: 
   - If no pool exists and `createPoolGroup` is `false`, the method logs an error and returns `null`.

#### Example

```csharp
GameObject bulletPrefab = ...;
GameObject bullet = FinalPool.GetObject(bulletPrefab);

if (bullet != null)
{
    // Use the pooled object
    bullet.transform.position = firePoint.position;
    bullet.SetActive(true);
}
else
{
    Debug.LogError("Failed to retrieve a pooled object.");
}
```

#### Performance Considerations

For performance-critical scenarios, it’s better to retrieve objects directly from the pool group using the `Get()` method. This avoids the overhead of searching for the correct pool.

```csharp
// Performance-critical object retrieval
FinalPoolGroup bulletPool = FinalPool.GetGroup("BulletPool");
GameObject bullet = bulletPool.Get();
```

---

### Returning an Object to the Pool

To return an object to its pool, use the `ReturnObject` method. This method will find the correct pool group that manages the object and return it to the pool. 

#### Usage

```csharp
bool success = FinalPool.ReturnObject(gameObject);
```

- **obj**: The GameObject that you want to return to the pool.

#### Behavior

1. **Finding the Pool**: 
   - The method iterates through the available pool groups to find the one that manages the specified object. If found, the object is returned to the pool using `group.Return()`.

2. **No Matching Pool Found**: 
   - If the object is not managed by any pool, an error is logged, and the method returns `false`.

#### Example

```csharp
GameObject bullet = ...;

// Return the bullet to its pool
if (!FinalPool.ReturnObject(bullet))
{
    Debug.LogError("Failed to return the object to its pool.");
}
```

#### Performance Considerations

Just like retrieving objects, returning objects directly to their specific pool group using `Return()` is more efficient for performance-critical situations.

```csharp
// Performance-critical object return
bulletPool.Return(bullet);
```


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
            // Getting the Bullet. This bullet has a script attached that returns the gameobject on hit. So the return logic is not here.
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