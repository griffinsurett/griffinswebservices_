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

  // Engagement hooks - only needed for interactive below-fold components
  if (
    id.includes('hooks/autoplay/') ||
    id.includes('hooks/autoscroll/') ||
    id.includes('hooks/interactions/')
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
