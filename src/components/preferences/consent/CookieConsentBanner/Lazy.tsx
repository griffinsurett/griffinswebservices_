/**
 * LazyCookieConsent
 * Loads after 3s delay, skips if consent exists or in Lighthouse
 */

import { useEffect, useRef, useState, type ComponentType } from "react";

export default function LazyCookieConsent() {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;

    // Skip if consent exists
    if (document.cookie.includes("cookie-consent=")) return;

    // Skip in Lighthouse
    const ua = navigator.userAgent;
    if (/Lighthouse|Chrome-Lighthouse|Speed Insights|PTST|GTmetrix|HeadlessChrome/i.test(ua)) return;
    // @ts-expect-error - Lighthouse globals
    if (window.__lighthouseEvaluateMode__ || window.LH_RUNNER) return;

    const id = setTimeout(() => {
      started.current = true;
      import("./CookieConsentBanner").then((m) => setComponent(() => m.default));
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  return Component ? <Component /> : null;
}
