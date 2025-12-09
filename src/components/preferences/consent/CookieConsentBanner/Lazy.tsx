import LazyLoader, { isSyntheticTest } from "@/components/LazyLoader";

export default function LazyCookieConsent() {
  return (
    <LazyLoader
      component={() => import("./CookieConsentBanner")}
      delay={3000}
      skipIf={() =>
        document.cookie.includes("cookie-consent=") || isSyntheticTest()
      }
    />
  );
}
