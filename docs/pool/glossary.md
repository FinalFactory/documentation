---
sidebar_position: 19
sidebar_label: Glossary
---
# Pool Glossary

## Max Capacity

This setting defines the maximum number of **inactive** objects that can be stored in the pool. If more objects are returned to the pool than allowed by the `Max Capacity`, they will be **fast destroyed**, as long as the **Max Overflow Capacity** is set higher than the `Max Capacity`. Fast destruction gradually removes objects until the pool returns to normal capacity.

## Max Overflow Capacity

This setting defines the maximum number of **inactive** objects that the pool can hold, including any overflow beyond the `Max Capacity`. Objects returned beyond this limit are **immediately destroyed**. This ensures that the pool does not consume excessive memory when too many objects are created.

## Max Total Object Count

This setting defines the maximum number of **total objects** (both active and inactive) that can be managed by the pool. Once this limit is reached, the pool will no longer create new objects, preventing object creation beyond the pool's defined capacity.

## Inactive Object

An **Inactive Object** is a GameObject currently not in use by the game and stored in the pool, ready to be reused. These objects are kept inactive to avoid the overhead of creating and destroying GameObjects repeatedly.

## Active Object

An **Active Object** is a GameObject that is managed by the pool but is currently in use by the game. While the object is active, the pool does not interfere with its behavior until it is returned to the pool.

## Warmup Count

The **Warmup Count** defines the number of objects to create when the pool is first initialized. These objects are spawned gradually over time, based on the defined spawn rate and interval, and are added on top of the initial pool size to prepare the pool for potential usage peaks.

## Initial Size

The **Initial Size** specifies the number of objects to create immediately when the pool is first initialized. These objects are created all at once, without considering spawn rates or intervals, providing a starting pool of objects ready for immediate use.

## Spawn Interval

The **Spawn Interval** defines the delay between each object spawn. This can be set either as a number of frames or a time interval. It controls how frequently new objects are created when needed by the pool.

## Spawn Delay

The **Spawn Delay** specifies the initial delay before the first object is spawned after a request. This can be configured as a number of frames or a time interval. The delay is triggered each time the pool exceeds its threshold, ensuring that objects are not created immediately after the need arises.

## Max Spawn Interval

The **Max Spawn Interval** sets the minimum time or frame delay between consecutive object spawns. This prevents objects from being spawned too quickly. If objects are requested from the pool faster than this interval allows and no inactive objects are available, the pool will return `null` instead of spawning a new object.

## Despawn Interval

The **Despawn Interval** defines the delay between each object removal from the pool. This can be set as a number of frames or a time interval, controlling how often objects are despawned when the pool exceeds its capacity.

## Despawn Delay

The **Despawn Delay** specifies the delay before the first object is removed from the pool. This delay is triggered when the pool exceeds its threshold, ensuring that objects are not immediately despawned.

## Spawn Threshold

The **Spawn Threshold** sets the minimum number of inactive objects that should be kept in the pool. If the number of inactive objects falls below this threshold, the pool will gradually create more objects using the spawn delay and interval settings.

## Despawn Threshold

The **Despawn Threshold** defines the maximum number of inactive objects that the pool should retain. If the pool exceeds this limit, objects will be removed gradually over time, using the despawn delay and interval settings to control the rate of removal.

## Fast Destroy

**Fast Destroy** refers to a process where, if the pool exceeds its capacity, one object will be destroyed per frame until the pool's size returns to normal. All pools in the system share this frame-based destruction limit. If multiple pools require fast destruction, they are processed in order, with one pool being handled completely before moving on to the next. This ensures that pool sizes are gradually reduced without overwhelming the system.

## Interface Callbacks

With **Interface Callbacks**, your script can implement spawn and despawn behavior by using the `IPooledObject` interface. When this feature is enabled in the pool group, you can create custom logic that is executed every time an object is spawned or despawned from the pool, allowing greater control over object lifecycle management.

## Control GameObject Active State

This setting determines whether the pool should manage the **active state** of the GameObject when it is returned to or taken from the pool. If this option is disabled, the pool will not automatically change the GameObject’s active state, allowing you to manage the active/inactive state manually. This can be useful in cases where the GameObject's activation should be handled elsewhere in your game logic.