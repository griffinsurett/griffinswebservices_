import { useRef, useState, useEffect, type ComponentType } from "react";
import DarkLightToggle from "./DarkLightToggle";
import AccentPicker from "./AccentPicker";

interface ThemeControlsProps {
  className?: string;
}

export default function ThemeControls({ className = "" }: ThemeControlsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hidden] = useState(false);

  // Lazy load LanguageDropdown - not needed immediately
  const [LanguageDropdown, setLanguageDropdown] = useState<ComponentType | null>(null);

  useEffect(() => {
    // Load after a short delay to prioritize theme controls
    const id = setTimeout(() => {
      import("./LanguageDropdown").then((m) => setLanguageDropdown(() => m.default));
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "relative flex items-center gap-1.5",
        "sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
        "transition-opacity duration-300 ease-in-out z-999999",
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {LanguageDropdown && <LanguageDropdown />}
      <DarkLightToggle />
      <AccentPicker />
    </div>
  );
}
