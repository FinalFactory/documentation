---
sidebar_position: 5
---

### Pool Groups

The most convenient way to work with a pool group in **Final Pool** is by using the `Final Pool Group` component.

![Final Pool Group Inspector](/img/pool/Inspector.png)

## Inspector Bar
![Inspector Bar](/img/pool/FaulyGroup.png)

The inspector bar provides a quick overview of the pool group's basic status, including inactive / active object counts. It also displays any relevant [Warnings and Errors](#warnings-and-errors) to help you monitor the health and performance of the pool.

## Status

![Pool Status](/img/pool/PoolStatus.png)

The status section provides a quick overview of the pool’s current state. At runtime, it displays both the number of currently **inactive** objects and **active** objects in the pool.

The progress bar represents the pool's current capacity compared to its limits, with values ranging from 0 on the left to the [Max Capacity Overflow](glossary.md#max-overflow-capacity) on the right.

### Blue Bar
The blue bar represents the count of [Inactive Objects](glossary.md#inactive-object) in the pool. The pool can only accept objects as long as the [Inactive Object](glossary.md#inactive-object) count is below the [Max Capacity Overflow](glossary.md#max-overflow-capacity). If the blue bar is full, the pool cannot accept additional objects, and any returned objects will be destroyed immediately.

### Red Bar
The red bar represents the [Max Total Object Count](glossary.md#max-total-object-count). Under normal circumstances, the red bar remains invisible. It only becomes visible if the pool's max capacity is constrained by the total object count, which can occur when there are many active objects.

**Example:**
- Max Capacity: 10
- Max Capacity Overflow: 15
- Max Total Object Count: 20
- Active Objects: 10

In this example, the red bar would appear at 10, indicating that only 10 inactive objects can be stored in the pool due to the `Max Total Object Count` limit.

### Green Marker
The green marker indicates the [Spawn Threshold](glossary.md#spawn-threshold), which triggers the creation of new objects when the inactive object count drops below this point.

### Orange Marker
The orange marker represents the [Despawn Threshold](glossary.md#despawn-threshold), which signals when objects should be removed from the pool if the inactive object count exceeds this limit.

### Blue Marker
The blue marker indicates the [Max Capacity Overflow](glossary.md#max-overflow-capacity) and is visible only if the overflow exceeds 100% of the `Max Capacity`. This provides a visual cue that the pool is operating beyond its intended capacity.

## Warnings and Errors
![Pool Errors](/img/pool/Errors.png)
**Warnings and Errors** will be displayed in the **pool status** and the **title bar** to immediately indicate if there is an issue with the pool's operation. These alerts help you quickly identify and address any errors or potential problems within the pool group.

## Capacity Settings

All capacity settings, such as `Max Capacity`, `Max Capacity Overflow`, `Total Object Count` and others, can be toggled between an **absolute count** and a **percentage** via a toggle button next to each option.

:::note
**Important:** Only one of `Max Capacity` or `Total Object Count` can be set as a percentage. One of them must be an absolute value.
:::

- [**Max Capacity**](glossary.md#max-capacity): The maximum number of inactive objects the pool can store.
- [**Max Capacity Overflow**](glossary.md#max-overflow-capacity): The maximum number of inactive objects the pool can hold, including overflow.
- [**Max Total Object Count**](glossary.md#max-total-object-count): The maximum number of both active and inactive objects the pool can manage.
- [**Initial Size**](glossary.md#initial-size): The number of objects created immediately when the pool is initialized.
- [**Warmup Count**](glossary.md#warmup-count): The number of additional objects to be created gradually after the pool is initialized.
- [**Spawn Threshold**](glossary.md#spawn-threshold): The minimum number of inactive objects to be kept in the pool, below which new objects will be spawned.
- [**Despawn Threshold**](glossary.md#despawn-threshold): The maximum number of inactive objects, beyond which the pool will begin despawning objects.

## Timing Settings

These settings control the timing and frequency of object spawning and despawning in the pool. They help regulate the rate at which objects are created or removed from the pool to prevent performance spikes and ensure smooth operation.

All time-related settings in **Final Pool** can be configured to use one of the following options:

- **Real Time:** Time unaffected by game time scaling.
- **Game Time:** Scaled according to the game's time scale (useful for pausing or slowing the game).
- **Frame Count:** Based on the number of frames, ignoring real-time or scaled time.

This flexibility allows you to fine-tune the behavior of your object pooling system based on the specific timing needs of your game.

- [**Spawn Interval**](glossary.md#spawn-interval): The delay between each object spawn.
- [**Spawn Delay**](glossary.md#spawn-delay): The delay before the first object is spawned after the threshold is exceeded.
- [**Max Spawn Interval**](glossary.md#max-spawn-interval): The minimum time or frame delay between consecutive object spawns to prevent excessive spawning.
- [**Despawn Interval**](glossary.md#despawn-interval): The delay between each object despawn, controlling how quickly the pool reduces its inactive object count.
- [**Despawn Delay**](glossary.md#despawn-delay): The delay before the first object is despawned when the pool exceeds its capacity.

## Advanced Settings

The **Advanced Settings** section allows for fine-tuned control over the behavior of the pool. These settings help manage potential issues such as leaks and provide more control over object lifecycles and warnings.

- [**Leak Detection Mode**](leakdetection.md): Enables warnings for objects not returned to the pool, useful for debugging and managing object lifecycles. Enabling Leak detection comes with a small performance cost.
- [**Enable Interface Callbacks**](glossary.md#interface-callbacks): Allows custom spawn and despawn behavior by implementing the `IPooledObject` interface. Enabling interface callbacks comes with a small performance cost.
- [**Control GameObject Active State**](glossary.md#control-gameobject-active-state): Determines if the pool automatically controls the active/inactive state of objects. Enabling active state control comes with a small performance cost.
- **Enable Max Capacity Warning:** Triggers a warning when the pool reaches its maximum inactive capacity.
- **Enable Max Total Capacity Warning:** Issues a warning when the pool reaches its total object count limit (active + inactive).
- **Enable Max Total Capacity Request Warning:** Warns when an object request is made but the pool cannot provide more objects due to the total capacity limit being reached.

## Additional Settings (Only Available Through Code)

### Enable
This setting allows you to disable the pool from being actively managed. When disabled, the pool will still issue and return objects as usual, but it will no longer create new objects when below the spawn threshold or destroy objects when exceeding the despawn threshold. This provides a way to temporarily pause the pool's automatic management while maintaining object usage.

### Blocking
When **Blocking** is set to `true`, the pool will neither issue new objects nor accept returned objects. This effectively freezes the pool, preventing any interactions with it until the setting is toggled off. This can be useful in scenarios where object usage needs to be temporarily halted.