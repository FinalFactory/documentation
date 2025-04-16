---
sidebar_position: 98
sidebar_label: Asset Versioning
---

# Asset Versioning

## Overview

Our asset versioning system follows a **major.minor** format (e.g., **1.15**). This approach helps you understand the scope of changes between versions and manage updates effectively.

## Version Numbering

- **Major Version** (e.g., the **1** in **1.15**): Indicates significant changes that may affect fundamental functionalities or compatibility.
- **Minor Version** (e.g., the **15** in **1.15**): Represents incremental updates that add or improve features without breaking existing functionality.

## Major Versions

We increment the **major version** when substantial changes occur, such as:

- Complete overhauls or rewrites of the asset.
- Comprehensive UI updates.
- Fundamental changes to core functionalities.
- Modifications that may break or remove old functions.
- Updates that are not direct replacements and may require adjustments in your project.

**Note:** Major updates might introduce breaking changes. It's crucial to review these updates carefully before implementation.

## Minor Versions

The **minor version** increases with updates that:

- Add new features.
- Update existing functionalities.
- Remove features without affecting overall behavior.
- Maintain backward compatibility.
- Ensure that nothing breaks or changes unexpectedly.

These updates are typically safe to implement and should not disrupt your project's current state.

## Update Guidelines

- **Backup Your Project:** Always create a backup before updating, especially when moving to a new major version. This ensures you can restore your project if needed.
- **Read the Change Log:** Review the change log for detailed information about updates. Understanding what's new or changed helps prevent unexpected issues.

By adhering to these guidelines, you can smoothly transition between versions while safeguarding your project's integrity.