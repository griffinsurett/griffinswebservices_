# Scroll Animations Integration

Lightweight vanilla JS system for scroll-triggered animations that works with both Astro and React components.

## Features

- **IntersectionObserver-based**: Efficient scroll detection
- **Lazy video loading**: Automatically loads videos when scrolled into view
- **Framework agnostic**: Works with Astro, React, and vanilla HTML
- **Performance optimized**: Non-blocking, uses requestIdleCallback
- **Accessibility aware**: Respects `prefers-reduced-motion`

## Usage

### In Astro Components

```astro
---
import { animationProps } from "@/integrations/scroll-animations/animationProps";
---

<div {...animationProps("fade-in-up", { once: true, delay: 200 })}>
  Content
</div>
```

### In React Components

```tsx
import { animationProps } from "@/integrations/scroll-animations/animationProps";

export default function MyComponent() {
  return (
    <div {...animationProps("fade-in-up", { once: true, delay: 200 })}>
      Content
    </div>
  );
}
```

### Available Animations

- `fade-in`, `fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`
- `fade-in-scale`, `scale-in`, `pop-in`, `zoom-in`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `color-text-fade`

## Options

```typescript
interface AnimationOptions {
  /** Only animate once (default: true) */
  once?: boolean;
  /** Delay in milliseconds before animation starts */
  delay?: number;
}
```

## Integration Setup

The scroll animations are automatically initialized via `Theme.astro`:

```astro
<script>
  import "@/integrations/scroll-animations";
</script>
```

## How It Works

1. The observer watches for elements with `data-animate` attributes
2. When an element enters the viewport, `data-visible="true"` is added
3. CSS classes handle the actual animation transitions
4. If `data-animate-once="true"`, the observer disconnects after first visibility

## Lazy Video Loading

Videos with `data-video-src` will automatically load when scrolled into view:

```html
<video data-video-src="/path/to/video.mp4" data-video-autoplay="true">
  <source data-video-src="/path/to/video.mp4" type="video/mp4" />
</video>
```
