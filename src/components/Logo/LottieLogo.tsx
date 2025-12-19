import OptimizedLottie from "@/components/OptimizedLottie";
import type { PropsWithChildren } from "react";

interface LottieLogoProps {
  alt?: string;
  className?: string;
  mediaClasses?: string;
  loading?: "lazy" | "eager";
  trigger?: "auto" | "scroll" | "visible" | "load";
  respectReducedMotion?: boolean;
  fadeMs?: number;
  loop?: boolean;
}

const ANIMATION_URL = "/lotties/Animation_logo_small_size.json";

// Check if reduced motion is preferred (system or user accessibility settings)
function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;

  // Check system preference
  const systemPrefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (systemPrefersReduced) return true;

  // Check user accessibility settings (data attribute set by AccessibilityScript)
  const userPrefersReduced = document.documentElement.getAttribute("data-a11y-motion") === "reduced";
  return userPrefersReduced;
}

export default function LottieLogo({
  alt = "",
  className = "logo-class",
  mediaClasses = "block w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] object-contain",
  trigger = "auto",
  respectReducedMotion = true,
  fadeMs = 180,
  loop = true,
  children,
}: PropsWithChildren<LottieLogoProps>) {
  // If reduced motion is enabled, just render the static fallback - don't load Lottie at all
  if (respectReducedMotion && shouldReduceMotion()) {
    return (
      <div className={`${className} relative ${mediaClasses}`} aria-label={alt}>
        {children}
      </div>
    );
  }

  return (
    <OptimizedLottie
      animationUrl={ANIMATION_URL}
      alt={alt}
      className={className}
      containerClasses={`relative ${mediaClasses}`}
      trigger={trigger}
      respectReducedMotion={respectReducedMotion}
      fadeMs={fadeMs}
      rewindToStartOnTop
      loop={loop}
      autoplay={false}
      speed={0.5}
      renderer="svg"
      scrollThreshold={1}
      debounceDelay={8}
      wheelSensitivity={1}
    >
      {children}
    </OptimizedLottie>
  );
}
