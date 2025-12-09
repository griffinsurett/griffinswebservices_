/**
 * LazyLoader - Reusable deferred loading wrapper for React components
 *
 * Delays loading components until after LCP has been measured by:
 * 1. Waiting for browser idle (requestIdleCallback)
 * 2. Adding a configurable delay
 * 3. Using React.lazy() for code splitting
 *
 * Usage:
 * <LazyLoader
 *   component={() => import("./MyComponent")}
 *   props={{ someProp: "value" }}
 *   delay={2000}
 *   skipIf={() => someCondition}
 * />
 */

import { lazy, Suspense, useEffect, useState, useMemo, type ComponentType } from "react";

interface LazyLoaderProps<P extends object> {
  /** Dynamic import function for the component */
  component: () => Promise<{ default: ComponentType<P> }>;
  /** Props to pass to the lazy-loaded component */
  props?: P;
  /** Delay in ms after idle before loading (default: 2000) */
  delay?: number;
  /** Idle callback timeout in ms (default: 4000) */
  idleTimeout?: number;
  /** Optional function to skip loading entirely (e.g., if user already consented) */
  skipIf?: () => boolean;
  /** Fallback to show while loading (default: null) */
  fallback?: React.ReactNode;
}

export default function LazyLoader<P extends object>({
  component,
  props = {} as P,
  delay = 2000,
  idleTimeout = 4000,
  skipIf,
  fallback = null,
}: LazyLoaderProps<P>) {
  const [shouldLoad, setShouldLoad] = useState(false);

  // Memoize the lazy component to prevent re-creating on each render
  const LazyComponent = useMemo(() => lazy(component), [component]);

  useEffect(() => {
    // Check skip condition
    if (skipIf?.()) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => {
          timeoutId = setTimeout(() => setShouldLoad(true), delay);
        },
        { timeout: idleTimeout }
      );

      return () => {
        window.cancelIdleCallback(idleId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    } else {
      // Fallback for browsers without requestIdleCallback
      timeoutId = setTimeout(() => setShouldLoad(true), delay);
      return () => clearTimeout(timeoutId);
    }
  }, [delay, idleTimeout, skipIf]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
