import LazyLoader from "@/components/LazyLoader";

export default function LazyCookieConsent() {
  return (
    <LazyLoader
      component={() => import("./CookieConsentBanner")}
      delay={2000}
      skipIf={() => document.cookie.includes("cookie-consent=")}
    />
  );
}
