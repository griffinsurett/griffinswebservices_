const onRequest = (_, next) => next();

const server = {};

function getCookie(name) {
  if (typeof document === "undefined") return null;
  try {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(";").shift();
      return cookieValue ? decodeURIComponent(cookieValue) : null;
    }
    return null;
  } catch (error) {
    console.error(`Error reading cookie ${name}:`, error);
    return null;
  }
}
function setCookie(name, value, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const {
      expires = 365,
      path = "/",
      sameSite = "Strict",
      secure = true,
      domain
    } = options;
    const expiryDate = /* @__PURE__ */ new Date();
    expiryDate.setTime(expiryDate.getTime() + expires * 24 * 60 * 60 * 1e3);
    const cookieParts = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${expiryDate.toUTCString()}`,
      `path=${path}`,
      `SameSite=${sameSite}`
    ];
    if (secure) {
      cookieParts.push("Secure");
    }
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
  } catch (error) {
    console.error(`Error setting cookie ${name}:`, error);
  }
}
function clearCookie(name, options = {}) {
  if (typeof document === "undefined") return;
  try {
    const { path = "/", domain } = options;
    const cookieParts = [
      `${name}=`,
      "expires=Thu, 01 Jan 1970 00:00:00 UTC",
      `path=${path}`
    ];
    if (domain) {
      cookieParts.push(`domain=${domain}`);
    }
    document.cookie = cookieParts.join("; ");
    if (!domain && typeof window !== "undefined") {
      document.cookie = cookieParts.join("; ") + `; domain=${window.location.hostname}`;
    }
  } catch (error) {
    console.error(`Error deleting cookie ${name}:`, error);
  }
}

function getConsent() {
  if (typeof document === "undefined") return null;
  try {
    const consentCookie = getCookie("cookie-consent");
    if (!consentCookie) return null;
    return JSON.parse(consentCookie);
  } catch (error) {
    console.error("Error parsing consent cookie:", error);
    return null;
  }
}
function hasConsentFor(category) {
  if (typeof document === "undefined") return false;
  if (category === "necessary") return true;
  const consent = getConsent();
  if (!consent) return false;
  return consent[category] === true;
}
function hasDoNotTrack() {
  if (typeof navigator === "undefined") return false;
  const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}
function isTrackingAllowed(category) {
  if (hasDoNotTrack()) {
    console.log("🚫 Do Not Track enabled - tracking disabled");
    return false;
  }
  return hasConsentFor(category);
}
function optOutOfSale() {
  if (typeof document === "undefined") return;
  const consent = {
    necessary: true,
    functional: false,
    performance: false,
    targeting: false,
    timestamp: Date.now()
  };
  setCookie("cookie-consent", JSON.stringify(consent), { expires: 365 });
  window.dispatchEvent(new Event("consent-changed"));
  console.log("🚫 CCPA Opt-Out: All non-essential cookies disabled");
}

async function getMod$4() {
						return import('./first-post_CJ0gJFQT.mjs');
					}
					const collectedLinks$4 = "@@ASTRO-LINKS@@";
					const collectedStyles$4 = "@@ASTRO-STYLES@@";
					const defaultMod$4 = { __astroPropagation: true, getMod: getMod$4, collectedLinks: collectedLinks$4, collectedStyles: collectedStyles$4, collectedScripts: [] };

const firstPost = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod$4
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$3() {
						return import('./do-you-do-seo_Bzk_yqoC.mjs');
					}
					const collectedLinks$3 = "@@ASTRO-LINKS@@";
					const collectedStyles$3 = "@@ASTRO-STYLES@@";
					const defaultMod$3 = { __astroPropagation: true, getMod: getMod$3, collectedLinks: collectedLinks$3, collectedStyles: collectedStyles$3, collectedScripts: [] };

const doYouDoSeo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$2() {
						return import('./seo_BWSBOuhK.mjs');
					}
					const collectedLinks$2 = "@@ASTRO-LINKS@@";
					const collectedStyles$2 = "@@ASTRO-STYLES@@";
					const defaultMod$2 = { __astroPropagation: true, getMod: getMod$2, collectedLinks: collectedLinks$2, collectedStyles: collectedStyles$2, collectedScripts: [] };

const seo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod$2
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$1() {
						return import('./php_BBUH-ISN.mjs');
					}
					const collectedLinks$1 = "@@ASTRO-LINKS@@";
					const collectedStyles$1 = "@@ASTRO-STYLES@@";
					const defaultMod$1 = { __astroPropagation: true, getMod: getMod$1, collectedLinks: collectedLinks$1, collectedStyles: collectedStyles$1, collectedScripts: [] };

const php = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod$1
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod() {
						return import('./solar_CYkEt5ds.mjs');
					}
					const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

const solar = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: defaultMod
}, Symbol.toStringTag, { value: 'Module' }));

export { getConsent as a, onRequest as b, clearCookie as c, server as d, doYouDoSeo as e, firstPost as f, getCookie as g, hasConsentFor as h, isTrackingAllowed as i, seo as j, solar as k, optOutOfSale as o, php as p, setCookie as s };
