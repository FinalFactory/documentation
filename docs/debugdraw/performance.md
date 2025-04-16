---
sidebar_position: 9
sidebar_label: Performance Showcase
---

# Performance Showcase


## 1. Test Environment

- **Hardware Specifications:**
  - CPU: AMD Ryzen 7 4800HS
  - GPU: GTX 1660 Ti
  - RAM: 24GB

- **Unity Version:**
  - LTS 2022.3.36f1

- **Testing Conditions:**
  - Scene: Included Cannon Sample Scene
  - Target platform: PC
  - Frame Rate Cap: None
  - Physics Settings: default

---

## 2. Test Scenarios

### Test Scenario: Drawing Lines

In this test scenario, we csimply draw many lines on the screen.
The test runs inside the editor in debug mode. Only Scene View window is open and FPS are read via Profiler.



## Performance

| Feature                      | Unity Debug Draw              | Final DebugDraw               |
|------------------------------|-------------------------------|--------------------------------|
| Lines (20k)  | 84fps                       | 140fps                    |
| Lines (50k)  | 55fps                       | 123fps                    |
| Lines (100k)  | 33fps                       | 111fps                    |
| Lines (200k)  | 20fps                       | 95fps                    |
| Lines (500k)  | 9fps                       | 58fps                    |
| Lines (1M)  | --fps                       | 40fps                    |

:::info

Final DebugDraw was performed via a job.

:::


| Feature                      | Final DebugDraw               |
|------------------------------|--------------------------------|
| Text (100)  | 140fps                    |
| Text (200)  | 123fps                    |
| Text (500)  | 111fps                    |
| Text (1000)  | 95fps                    |
| Text (2000)  | 58fps                    |
| Text (3000)  | 36fps                    |
