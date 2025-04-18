---
sidebar_position: 80
sidebar_label: FAQ
---


# FAQ - Frequently Asked Questions

## **Q: Unity crashes, i think it is Final Debug Draw?**

**A:** If you use batch drawing via the struct, that the struct must be created in the same frame as the drawing command. For testing you can change to the easy method and execute single draw commands.

## Why is my debug text not visible in HDRP?

If you're using HDRP and your debug text is not visible, it's likely because you're using an overlay font material. TextMeshPro (TMP) does not support overlay font rendering in HDRP. This is a fundamental limitation of TMP, not specific to Final DebugDraw. See [Limitations](limitations.md) for more details.

