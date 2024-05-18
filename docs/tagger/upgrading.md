# Upgrading from <=1.7 to >2.0

With the release of version 2.0, Tagger has undergone significant changes to improve its structure and integration. This includes namespace changes and script renaming to better distinguish Tagger scripts from other scripts in your project, especially due to the migration of Tagger to Final Factory. Below are the key changes you need to be aware of when upgrading from version 1.7 or earlier to version 2.0 or later.

## Tagger Script

The main Tagger script has been renamed and moved to a new namespace:

```csharp
Finalfactory.Tagger.FinalTagger
```

##  Other Scripts new Namespace

All other related scripts have been moved to the `Finalfactory.Tagger` namespace. This ensures a clear distinction between Tagger scripts and other scripts within your project.

```csharp
Finalfactory.Tagger
```

## Method Changes

#### Set Tag
The method SetTag for multiple tags is renamed to SetTags