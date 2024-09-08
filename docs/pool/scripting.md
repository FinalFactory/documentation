---
sidebar_position: 6
sidebar_label: Scripting
---
# Scripting

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