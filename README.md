# The Trimmer

After Effects panel for quickly trimming multiple layers to match the timing of a reference layer.

## What it does

**The Trimmer** creates a dockable panel with a single "TRIM!" button that:

1. Takes all your selected layers
2. Uses the **last selected layer** as the reference timing
3. Trims all other selected layers to match the reference layer's in/out points
4. Preserves layer content - only adjusts the timing

Perfect for syncing multiple layers, matching edit cuts, or batch-trimming layers to a specific duration.

## Installation

### As a Dockable Panel (Recommended)
1. Copy `TheTrimmer.jsx` to your **ScriptUI Panels** folder:
   ```
   Windows: C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\ScriptUI Panels\
   macOS: /Applications/Adobe After Effects [version]/Scripts/ScriptUI Panels/
   ```

2. Restart After Effects

3. Access via **Window → TheTrimmer.jsx**

### As a Regular Script
- Place in Scripts folder and run via **File → Scripts → TheTrimmer.jsx**

## Usage

1. **Open a composition**
2. **Select 2 or more layers**
   - The **last layer you select** becomes the reference timing
   - All other selected layers will be trimmed to match it
3. **Click "TRIM!"**
4. **Done!** All layers now have the same in/out points

## Example Workflow

```
✅ Select Layer A (will be trimmed)
✅ Select Layer B (will be trimmed)  
✅ Select Layer C (reference timing) ← Last selected = reference
🔘 Click "TRIM!"
```

**Result:** Layers A and B now have the same in/out points as Layer C

## Features

- **Dockable panel** - stays open while you work
- **Resizable interface** - adapts to your workspace
- **Undo support** - single undo reverts all changes
- **Smart selection** - works with any number of layers
- **Non-destructive** - only adjusts timing, preserves content

## Requirements

- Adobe After Effects (any version with scripting support)
- At least 2 selected layers in an active composition

## Tips

- **Order matters** - the last layer you select sets the timing
- Works great for matching **edit cuts** across multiple layers
- Perfect for **syncing animations** to a specific duration
- Use with **precomps, solids, footage** - any layer type

## License

MIT
