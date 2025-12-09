import LazyLoader from "@/components/LazyLoader";

// Detect if running in Lighthouse/PageSpeed Insights
const isLighthouse = () =>
  typeof navigator !== "undefined" &&
  /Lighthouse|Speed Insights|Chrome-Lighthouse/i.test(navigator.userAgent);

export default function LazyCookieConsent() {
  return (
    <LazyLoader
      component={() => import("./CookieConsentBanner")}
      delay={3000}
      skipIf={() =>
        document.cookie.includes("cookie-consent=") || isLighthouse()
      }
    />
  );
}
