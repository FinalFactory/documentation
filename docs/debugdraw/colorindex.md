---
sidebar_position: 8
sidebar_label: Color Index
---

# Color Index Documentation

The **Color Index** provides an efficient method to reference colors using a single integer value instead of four separate floats typically required for RGBA colors. The Color Index consists of:

- **128 Predefined Static Colors**: Fixed, unchangeable colors with predefined indices.
- **128 User-Defined Colors**: Customizable colors defined by the user, accessible through indices 128–255.

---

## Predefined Static Colors (0–127)

These colors are predefined and immutable. Attempting to modify them will result in an error.

| Index | Color Name        | RGB Value       |
|-------|-------------------|-----------------|
| 0     | Black             | (0, 0, 0)       |
| 1     | DarkSlateGray     | (47, 79, 79)    |
| 2     | DimGray           | (105, 105, 105) |
| 3     | SlateGray         | (112, 128, 144) |
| 4     | LightSlateGray    | (119, 136, 153) |
| 5     | Gray              | (128, 128, 128) |
| 6     | DarkGray          | (169, 169, 169) |
| 7     | Silver            | (192, 192, 192) |
| 8     | LightGray         | (211, 211, 211) |
| 9     | Gainsboro         | (220, 220, 220) |
| 10    | WhiteSmoke        | (245, 245, 245) |
| 11    | White             | (255, 255, 255) |
| 12    | Red               | (255, 0, 0)     |
| 13    | Green             | (0, 255, 0)     |
| 14    | Blue              | (0, 0, 255)     |
| ...   | ...               | ...             |
| 113   | YellowGreen       | (154, 205, 50)  |

*(The complete table is available in the `ColorIndex` struct definition.)*

---

## User-Defined Colors (128–255)

Indices from **128 to 255** are reserved for custom colors defined by users.

### Defining Custom Colors

Use the following static method to define custom colors:

```csharp
public static void SetCustomColor(ColorIndex index, Color color)
```

### Example Usage

```csharp
// Define a custom purple color
DebugDraw.SetCustomColor(new ColorIndex(128), new Color(0.6f, 0.2f, 0.8f, 1.0f));
```

### Error Conditions

- Attempting to set a static color (index < 128) will result in:
  ```
  The color index is reserved for static colors. Static colors are not allowed to be changed. Use at least 128 as index.
  ```

- Attempting to set an index outside the valid range (>= 256) will result in:
  ```
  The color index is out of range. The maximum index is 255.
  ```

---

## Best Practices

- **Use Custom Indices Wisely**: Plan your custom indices to ensure consistent usage across your project.
- **Avoid Index Collisions**: Clearly document and manage custom indices to prevent accidental overwrites.
- **Leverage Documentation**: Regularly update your project's documentation with custom-defined colors to maintain clarity.

---