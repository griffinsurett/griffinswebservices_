// src/components/BarGraph.tsx
import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import Counter from "@/components/Counter";

export interface BarGraphProps {
  /** Label displayed above or beside the bar */
  label: string;
  /** Percentage value (0-100) */
  value: number;
  /** Use primary gradient styling */
  variant?: "primary" | "primary-reverse" | "grey";
  /** Show percentage text */
  showValue?: boolean;
  /** Custom stat text (e.g., "2.5 seconds") shown where percentage was */
  stat?: string;
  /** Numeric value for the stat (will animate from 0) */
  statValue?: number;
  /** Suffix for the stat (e.g., " seconds") */
  statSuffix?: string;
  /** Animation delay in ms */
  delay?: number;
  /** Bar height */
  height?: string;
  /** Additional className */
  className?: string;
  /** Duration of counter animation in ms */
  counterDuration?: number;
}

export default function BarGraph({
  label,
  value,
  variant = "primary",
  showValue = true,
  stat,
  statValue,
  statSuffix = "",
  delay = 0,
  height = "h-10",
  className = "",
  counterDuration = 1000,
}: BarGraphProps) {
  const prefersReducedMotion = useMotionPreference();
  // Track when animation should start (for bar width and counter)
  const [animated, setAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, show final state immediately
    if (prefersReducedMotion) {
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setTimeout(() => setAnimated(true), delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [animated, delay, prefersReducedMotion]);

  const barClass =
    variant === "primary"
      ? "primary-gradient"
      : variant === "primary-reverse"
        ? "bg-linear-to-r from-accent-700 to-accent"
        : "bg-text/30";

  const valueClass =
    variant === "primary" || variant === "primary-reverse"
      ? "text-accent font-bold"
      : "text-text/60";

  // Use instant duration when reduced motion is preferred
  const effectiveDuration = prefersReducedMotion ? 0 : counterDuration;

  return (
    <div ref={barRef} className={`w-full ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm text-text/80">{label}</span>
        {statValue !== undefined ? (
          <span className={`text-lg ${valueClass}`}>
            <Counter
              start={0}
              end={animated ? statValue : 0}
              duration={effectiveDuration}
            />
            {statSuffix}
          </span>
        ) : stat ? (
          <span className={`text-lg ${valueClass}`}>
            {stat}
          </span>
        ) : null}
      </div>
      <div className={`w-full ${height} bg-text/10 rounded-sm overflow-hidden relative`}>
        <div
          className={`h-full rounded-sm ${prefersReducedMotion ? "" : "transition-all duration-1000 ease-out"} ${barClass}`}
          style={{ width: animated ? `${value}%` : "0%" }}
        />
        {showValue && (
          <span className="absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white">
            <Counter
              start={0}
              end={animated ? value : 0}
              duration={effectiveDuration}
            />
            %
          </span>
        )}
      </div>
    </div>
  );
}
