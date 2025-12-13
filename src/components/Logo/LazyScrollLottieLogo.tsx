import { useState, useEffect, type PropsWithChildren } from "react";
import type LottieLogo from "./LottieLogo";

interface LazyScrollLottieLogoProps {
  alt?: string;
  className?: string;
  mediaClasses?: string;
  loading?: "lazy" | "eager";
  trigger?: "auto" | "scroll" | "visible" | "load";
  loop?: boolean;
}

/**
 * Lightweight wrapper that only detects first scroll to trigger loading.
 * Does NOT animate - just loads the full LottieLogo which handles all scroll animation.
 * This avoids loading the entire Lottie infrastructure on initial page load.
 */
export default function LazyScrollLottieLogo({
  alt,
  className,
  mediaClasses,
  loading,
  trigger,
  loop,
  children,
}: PropsWithChildren<LazyScrollLottieLogoProps>) {
  const [LottieComponent, setLottieComponent] = useState<typeof LottieLogo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let scrollHandled = false;

    // Minimal scroll detector - fires once, then removes itself
    const handleFirstScroll = () => {
      if (scrollHandled) return;
      scrollHandled = true;

      // Remove listener immediately after first detection
      window.removeEventListener("scroll", handleFirstScroll, { passive: true } as any);
      window.removeEventListener("wheel", handleFirstScroll, { passive: true } as any);

      // Mark as loading to prevent flicker during import
      setIsLoading(true);

      // Load the full LottieLogo component
      // Use direct setTimeout instead of requestIdleCallback for faster response
      const loadLottie = () => {
        import("./LottieLogo").then((mod) => {
          // Wait one more frame to ensure React has processed the import
          requestAnimationFrame(() => {
            setLottieComponent(() => mod.default);
            setIsLoading(false);
          });
        });
      };

      // If browser is idle, load immediately; otherwise use short timeout
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadLottie, { timeout: 500 });
      } else {
        setTimeout(loadLottie, 50);
      }
    };

    // Listen for both scroll and wheel events to catch any scroll intent
    window.addEventListener("scroll", handleFirstScroll, { passive: true } as any);
    window.addEventListener("wheel", handleFirstScroll, { passive: true } as any);

    return () => {
      window.removeEventListener("scroll", handleFirstScroll, { passive: true } as any);
      window.removeEventListener("wheel", handleFirstScroll, { passive: true } as any);
    };
  }, []);

  // Keep showing fallback while loading or if component hasn't loaded yet
  // This prevents flicker when user scrolls before import completes
  if (!LottieComponent || isLoading) {
    return (
      <div className={`${className} relative ${mediaClasses}`} aria-label={alt}>
        {children}
      </div>
    );
  }

  // Once loaded, render LottieLogo - OptimizedLottie handles the fade internally
  // We pass the same children (SVG) which OptimizedLottie will show until Lottie loads
  return (
    <LottieComponent
      alt={alt}
      className={className}
      mediaClasses={mediaClasses}
      loading={loading}
      trigger={trigger}
      loop={loop}
    >
      {children}
    </LottieComponent>
  );
}
