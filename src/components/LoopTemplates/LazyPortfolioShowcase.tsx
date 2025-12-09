/**
 * LazyPortfolioShowcase - Deferred loading wrapper for PortfolioScreenShowcase
 *
 * This component delays loading the full carousel until after LCP has been measured.
 * The static preview image handles the initial visual, so we can safely defer
 * loading all the carousel JS until the browser is idle and LCP is captured.
 */

import { lazy, Suspense, useEffect, useState } from "react";

const PortfolioScreenShowcase = lazy(() => import("./PortfolioScreenShowcase"));

interface LazyPortfolioShowcaseProps {
  items: any[];
  mediaEntries?: any[];
  className?: string;
  staticContainerId?: string;
}

export default function LazyPortfolioShowcase(props: LazyPortfolioShowcaseProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Wait for browser idle + minimum 3s delay to ensure LCP is measured
    // before loading any carousel JS
    const minDelay = 3000;

    let timeoutId: ReturnType<typeof setTimeout>;

    if ("requestIdleCallback" in window) {
      // Wait for idle, then add minimum delay
      const idleId = window.requestIdleCallback(
        () => {
          timeoutId = setTimeout(() => setShouldLoad(true), minDelay);
        },
        { timeout: 5000 }
      );

      return () => {
        window.cancelIdleCallback(idleId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    } else {
      // Fallback: just use the delay
      timeoutId = setTimeout(() => setShouldLoad(true), minDelay);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  // Don't render anything until we're ready to load
  if (!shouldLoad) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <PortfolioScreenShowcase {...props} />
    </Suspense>
  );
}
