# Using client:firstInteraction Directive

## Example: PortfolioScreenVariant Component

The new `client:firstInteraction` directive is now available! Here's how to use it:

### Before (using client:visible or client:media)

```astro
<!-- Loads when component becomes visible in viewport -->
<PortfolioScreenShowcase client:visible {...showcaseProps} />

<!-- Loads based on media query -->
<PortfolioScreenShowcase client:media="(min-width: 768px)" {...showcaseProps} />
```

### After (using client:firstInteraction)

```astro
<!-- Loads on first user interaction (scroll, click, touch, or keyboard) -->
<PortfolioScreenShowcase client:firstInteraction {...showcaseProps} />

<!-- Only load on scroll past 100px -->
<PortfolioScreenShowcase
  client:firstInteraction={{
    threshold: 100,
    includeClick: false,
    includeTouch: false
  }}
  {...showcaseProps}
/>

<!-- Only load on click or touch (not scroll) -->
<PortfolioScreenShowcase
  client:firstInteraction={{
    includeScroll: false,
    includeKeys: false
  }}
  {...showcaseProps}
/>
```

## Benefits

1. **Faster Initial Load**: Component JavaScript only loads when user interacts
2. **Better UX**: Responds immediately to user intent
3. **Flexible**: Combine different interaction types or isolate specific ones
4. **Performance**: Reduces initial bundle size for below-the-fold content

## When to Use

- ✅ Below-the-fold carousels and sliders
- ✅ Interactive widgets that aren't critical on page load
- ✅ Components that benefit from eager loading on interaction
- ✅ Heavy components with SSR placeholders

## When NOT to Use

- ❌ Above-the-fold critical content
- ❌ Components needed for core functionality immediately
- ❌ Navigation or header components (use `client:load` instead)

## Integration with Existing Code

The directive is already registered in your Astro config and ready to use!

No additional setup required - just start using `client:firstInteraction` in your components.
