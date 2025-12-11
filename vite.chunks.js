// vite.chunks.js

export function manualChunks(id) {
  // Core React runtime (kept small and shared)
  if (
    id.includes('node_modules/react') ||
    id.includes('node_modules/react-dom') ||
    id.includes('node_modules/scheduler')
  ) {
    return 'react-core';
  }

  // Visibility/scroll hooks used by header LottieLogo - must be separate from
  // engagement-hooks to avoid pulling in carousels on initial load
  // IMPORTANT: This rule must come BEFORE engagement-hooks
  if (
    id.includes('hooks/interactions/useScrollInteraction') ||
    id.includes('hooks/animations/useVisibility') ||
    id.includes('hooks/interactions/utils')
  ) {
    return 'visibility-hooks';
  }

  // Theme controls - split into separate chunks for each island
  // Shared deps (CircleCheckbox, SquareCheckbox) go to theme-shared
  if (id.includes('ThemeControls/checkboxes/')) {
    return 'theme-shared';
  }
  if (id.includes('ThemeControls/DarkLightToggle')) {
    return 'theme-toggle';
  }
  if (id.includes('ThemeControls/AccentPicker')) {
    return 'theme-accent';
  }
  if (id.includes('ThemeControls/LanguageDropdown')) {
    return 'theme-language';
  }

  // Bundle useLazyLoad and localStorage utils together with their consumers
  // This eliminates dependency chains for lazy-loaded components
  if (
    id.includes('hooks/useLazyLoad') ||
    id.includes('utils/storage') ||
    (id.includes('/Lazy') && id.includes('components'))
  ) {
    return 'lazy-utils';
  }

  // Below-fold heavy components - keep these separate so they're only loaded
  // when scrolled into view (via client:visible)
  // These are NOT in the initial viewport and should be deferred
  if (
    id.includes('LoopComponents/FeatureCard') ||
    id.includes('LoopComponents/IconListItem') ||
    id.includes('AnimatedBorder/')
  ) {
    return 'feature-cards';
  }

  // Carousels and heavy interactive sections - loaded on scroll
  if (
    id.includes('TestimonialCarousel') ||
    id.includes('PortfolioCarousel') ||
    id.includes('PortfolioScreenShowcase') ||
    id.includes('TechStackSection') ||
    id.includes('VideoAccordion')
  ) {
    return 'carousels';
  }

  // Accordion component - below fold FAQ section
  if (
    id.includes('LoopTemplates/Accordion') ||
    id.includes('LoopComponents/AccordionItem') ||
    id.includes('LoopComponents/EnhancedAccordionItem')
  ) {
    return 'accordion';
  }

  // Engagement hooks - carousel/autoplay/drag interactions (below-fold only)
  // Note: useScrollInteraction is excluded (handled by visibility-hooks above)
  if (
    id.includes('hooks/autoplay/') ||
    id.includes('hooks/autoscroll/') ||
    id.includes('hooks/interactions/useSideDragNavigation') ||
    id.includes('hooks/interactions/useEngagement')
  ) {
    return 'engagement-hooks';
  }
}

export function assetFileNames(assetInfo) {
  if (assetInfo.name?.endsWith('.css')) {
    if (assetInfo.name.includes('global') || assetInfo.name.includes('base')) {
      return 'assets/critical-[hash][extname]';
    }
    return 'assets/styles-[hash][extname]';
  }
  return 'assets/[name]-[hash][extname]';
}
