// src/components/AnimatedExamples/GrowthGraph.tsx
import { useState, useEffect } from "react";

export interface GrowthGraphProps {
  className?: string;
}

export default function GrowthGraph({ className = "" }: GrowthGraphProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the line drawing
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = 100 / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
        // Reset after a pause
        setTimeout(() => {
          setProgress(0);
          // Restart animation
          setTimeout(() => {
            current = 0;
            const restartInterval = setInterval(() => {
              current += increment;
              if (current >= 100) {
                setProgress(100);
                clearInterval(restartInterval);
              } else {
                setProgress(current);
              }
            }, duration / steps);
          }, 500);
        }, 3000);
      } else {
        setProgress(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  // Growth curve path - starts low left, curves up to high right
  const width = 280;
  const height = 100;
  const padding = 16;

  // Create a smooth growth curve
  const points = [
    { x: 0, y: 85 },
    { x: 0.15, y: 80 },
    { x: 0.3, y: 70 },
    { x: 0.45, y: 55 },
    { x: 0.6, y: 40 },
    { x: 0.75, y: 25 },
    { x: 0.9, y: 15 },
    { x: 1, y: 8 },
  ];

  // Create SVG path
  const pathData = points
    .map((p, i) => {
      const x = padding + p.x * (width - padding * 2);
      const y = p.y;
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");

  // Calculate total path length for animation
  const pathLength = 400; // Approximate

  return (
    <div className={`bg-text/10 rounded-lg p-4 ${className}`}>
      <svg
        width="100%"
        height={height + 20}
        viewBox={`0 0 ${width} ${height + 20}`}
        className="overflow-visible"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={padding}
            y1={20 + i * 25}
            x2={width - padding}
            y2={20 + i * 25}
            className="stroke-text/10"
            strokeWidth="1"
          />
        ))}

        {/* Growth line with gradient stroke */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-primary-700)" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated growth line */}
        <path
          d={pathData}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength - (pathLength * progress) / 100,
            transition: "stroke-dashoffset 0.05s linear",
          }}
        />

        {/* Dot at the end of the line */}
        {progress > 5 && (
          <circle
            cx={padding + (progress / 100) * (width - padding * 2)}
            cy={85 - (progress / 100) * 77}
            r="5"
            className="fill-primary"
            style={{
              filter: "url(#glow)",
              opacity: progress < 100 ? 1 : 0.8,
            }}
          />
        )}

        {/* Labels */}
        <text
          x={padding}
          y={height + 16}
          className="fill-text/50 text-[10px]"
          fontFamily="system-ui"
        >
          Today
        </text>
        <text
          x={width - padding}
          y={height + 16}
          className="fill-text/50 text-[10px]"
          textAnchor="end"
          fontFamily="system-ui"
        >
          Future
        </text>
      </svg>
    </div>
  );
}
