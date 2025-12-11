import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { CircleCheckbox } from "./checkboxes/CircleCheckbox";

// Get stored language code from localStorage (lightweight)
function getStoredLanguageCode(): string {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("user-language") || "en";
}

// Map common codes to flags (inline to avoid importing language utils)
const FLAG_MAP: Record<string, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  it: "🇮🇹",
  pt: "🇧🇷",
  ja: "🇯🇵",
  ko: "🇰🇷",
  zh: "🇨🇳",
};

// Lazy load the heavy dropdown content
const LanguageDropdownContent = lazy(() => import("./LanguageDropdownContent"));

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentCode, setCurrentCode] = useState("en");
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Read stored language after hydration
  useEffect(() => {
    setCurrentCode(getStoredLanguageCode());
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "user-language") {
        setCurrentCode(event.newValue || "en");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleToggle = () => {
    if (!hasOpened) setHasOpened(true);
    setOpen((v) => !v);
  };

  const currentFlag = FLAG_MAP[currentCode.split("-")[0]] || "🌐";

  return (
    <div ref={containerRef} className="relative contents">
      <CircleCheckbox
        checked={open}
        onChange={handleToggle}
        aria-label="Choose display language"
        title="Choose your site language"
        className={`faded-bg text-primary ${open ? "ring-2 ring-primary/60" : ""}`}
      >
        <div className="flex items-center justify-center">
          <span className="text-xl leading-none" aria-hidden="true">
            {currentFlag}
          </span>
        </div>
      </CircleCheckbox>

      {hasOpened && (
        <Suspense fallback={null}>
          <LanguageDropdownContent
            open={open}
            onClose={() => setOpen(false)}
            onLanguageChange={(code) => setCurrentCode(code)}
          />
        </Suspense>
      )}
    </div>
  );
}
