---
id: debugdraw-limitations
title: Debug Draw Limitations
sidebar_label: Limitations
sidebar_position: 90
---

This page highlights key limitations and differences between Unity's built-in Debug Draw functionality and the custom Final DebugDraw asset.

## Visibility

| Feature                  | Unity Debug Draw                  | Final DebugDraw                 |
|--------------------------|-----------------------------------|----------------------------------|
| Visibility in Scene View | ✅ Supported                      | ✅ Supported                     |
| Visibility in Game View  | ❌ Not Supported                  | ✅ Supported                     |
| Runtime Builds           | ❌ Not Supported                  | ✅ Supported                     |

Unity's built-in debug draw methods (`Debug.DrawLine`, `Debug.DrawRay`) are **only visible within the Scene View** and **do not appear during play mode or in runtime builds**.

Final DebugDraw fully supports visibility **across all views**, including:

- Scene View
- Game View (during play mode)
- Runtime Builds (Standalone, WebGL, Mobile, etc.)

## Calling Context

| Feature                | Unity Debug Draw                  | Final DebugDraw              |
|------------------------|-----------------------------------|-------------------------------|
| Editor Scripts         | ✅ Supported                      | ✅ Supported                  |
| Play Mode Scripts      | ⚠️ Supported (Scene View Only)    | ✅ Supported                  |
| Runtime Builds         | ❌ Not Supported                  | ✅ Supported                  |
| Jobs                   | ⚠️ Limited (10,000 lines/frame)   | ✅ Supported |

## Limits

| Feature                      | Unity Debug Draw              | Final DebugDraw               |
|------------------------------|-------------------------------|--------------------------------|
| Max Lines per frame (Jobs)   | ⚠️ 10,000                        | ✅ 2,000,000                      |
| Max Text Elements per frame  | ❌ Not Supported*                 | ✅ 2,000**                         |
_*Supported via Handle API_
_**Not a hard limit, but a recommended usage limit_

Unity imposes strict limitations on the number of debug draw lines when using jobs, capping at around **10,000 lines per frame**. It also **doesn't support debug drawing of text**.

Final DebugDraw significantly extends these limitations:

- Up to **2 million lines per frame** when using optimized job systems.
- Supports debug drawing of text, with a maximum of **2,000 text elements per frame**.


## Recommendation

For extensive debugging, especially for runtime and builds, Final DebugDraw is highly recommended due to its enhanced visibility, higher performance limits, and additional features.