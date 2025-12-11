import { a as createComponent, d as renderComponent, F as Fragment, e as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, c as createAstro, k as renderScript, m as maybeRenderHead, _ as __astro_tag_component__, f as createVNode, A as AstroError, l as NoImageMetadata, n as FileGlobNotSupported, o as FileParserNotFound, L as LiveContentConfigError, j as AstroUserError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, p as renderUniqueStylesheet, q as renderScriptElement, t as createHeadAndContent, r as renderSlot, E as ExpectedImage, v as LocalImageUsedWrongly, w as MissingImageDimension, x as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, y as UnsupportedImageConversion, z as toStyleString, B as FailedToFetchRemoteImageDimensions, C as ExpectedImageOptions, D as ExpectedNotESMImage, G as InvalidImageService, H as ImageMissingAlt, J as ExperimentalFontsNotEnabled, K as FontFamilyNotFound, O as defineScriptVars, P as renderHead } from './astro/server_CDqnDASo.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';
import { s as siteData } from './solar_CQMy5G9-.mjs';
import { s as shouldShowCollectionCTA, $ as $$SectionHeader, t as toArray, b as $$ContentBridge, P as PortfolioScreenShowcase, c as PortfolioCarousel, H as Heading, T as TechStackSection, _ as __ASTRO_IMAGE_IMPORT_s0yHl, d as __vite_glob_0_25, e as __vite_glob_0_22, u as useVisibility } from './carousels_CEjWH8KZ.mjs';
import { B as Button, A as Accordion, I as Icon } from './accordion_Dx6odBLx.mjs';
import { F as FeatureCard, I as IconListItem, A as AnimatedBorder } from './feature-cards_CyUAdael.mjs';
import { existsSync, promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import toml from 'smol-toml';
import path from 'node:path';
import '@astrojs/markdown-remark';
import 'github-slugger';
import 'xxhash-wasm';
import * as z from 'zod';
import { z as z$1, ZodIssueCode } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash, joinPaths } from '@astrojs/internal-helpers/path';
import 'common-ancestor-path';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import * as devalue from 'devalue';
import { readdirSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { createElement, createContext, useState, Children, isValidElement, useMemo, useId, useCallback, useEffect, useRef, memo, useTransition, Suspense, lazy } from 'react';
import { L as LazyHamburgerMenu, u as useLazyLoad, a as LazyCookieConsent } from './lazy-utils_DSIzl-PU.mjs';
/* empty css                                 */
/* empty css                                                                              */
/* empty css                                     */
import { u as useScrollInteraction } from './engagement-hooks_CAwsPVxb.mjs';
/* empty css                                                                      */
import { isRemoteAllowed } from '@astrojs/internal-helpers/remote';
import * as mime from 'mrmime';
/* empty css                                                                   */
/* empty css                                                                             */
/* empty css                                   */

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const GTM_ID = "GTM-XXXXXXX";
  const shouldRender = Boolean(GTM_ID !== "");
  return renderTemplate`${shouldRender && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a$4 || (_a$4 = __template$4(['<script type="text/plain" data-consent="targeting"', ">\n      {`\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','${GTM_ID}');\n      `}\n    </script>"], ['<script type="text/plain" data-consent="targeting"', ">\n      {\\`\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','\\${GTM_ID}');\n      \\`}\n    </script>"])), addAttribute(GTM_ID, "data-gtm-id")) })}`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/analytics/GoogleTagManager.astro", void 0);

const $$HeadTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, {})} <!-- <LanguageDetectionScript /> --> <!-- Additional head tags can be added here as needed --> <!-- Example: Google Analytics, Plausible, font preloads, etc. -->`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/HeadTags.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const __ASTRO_IMAGE_IMPORT_18zSQ8 = createSvgComponent({"meta":{"src":"/assets/astro-Dm8K3lV8.svg","width":115,"height":48,"format":"svg"},"attributes":{"fill":"none","width":"115","height":"48"},"children":"<path fill=\"#17191E\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"url(#a)\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"#17191E\" d=\"M.02 30.31s4.02-1.95 8.05-1.95l3.04-9.4c.11-.45.44-.76.82-.76.37 0 .7.31.82.76l3.04 9.4c4.77 0 8.05 1.95 8.05 1.95L17 11.71c-.2-.56-.53-.91-.98-.91H7.83c-.44 0-.76.35-.97.9L.02 30.31Zm42.37-5.97c0 1.64-2.05 2.62-4.88 2.62-1.85 0-2.5-.45-2.5-1.41 0-1 .8-1.49 2.65-1.49 1.67 0 3.09.03 4.73.23v.05Zm.03-2.04a21.37 21.37 0 0 0-4.37-.36c-5.32 0-7.82 1.25-7.82 4.18 0 3.04 1.71 4.2 5.68 4.2 3.35 0 5.63-.84 6.46-2.92h.14c-.03.5-.05 1-.05 1.4 0 1.07.18 1.16 1.06 1.16h4.15a16.9 16.9 0 0 1-.36-4c0-1.67.06-2.93.06-4.62 0-3.45-2.07-5.64-8.56-5.64-2.8 0-5.9.48-8.26 1.19.22.93.54 2.83.7 4.06 2.04-.96 4.95-1.37 7.2-1.37 3.11 0 3.97.71 3.97 2.15v.57Zm11.37 3c-.56.07-1.33.07-2.12.07-.83 0-1.6-.03-2.12-.1l-.02.58c0 2.85 1.87 4.52 8.45 4.52 6.2 0 8.2-1.64 8.2-4.55 0-2.74-1.33-4.09-7.2-4.39-4.58-.2-4.99-.7-4.99-1.28 0-.66.59-1 3.65-1 3.18 0 4.03.43 4.03 1.35v.2a46.13 46.13 0 0 1 4.24.03l.02-.55c0-3.36-2.8-4.46-8.2-4.46-6.08 0-8.13 1.49-8.13 4.39 0 2.6 1.64 4.23 7.48 4.48 4.3.14 4.77.62 4.77 1.28 0 .7-.7 1.03-3.71 1.03-3.47 0-4.35-.48-4.35-1.47v-.13Zm19.82-12.05a17.5 17.5 0 0 1-6.24 3.48c.03.84.03 2.4.03 3.24l1.5.02c-.02 1.63-.04 3.6-.04 4.9 0 3.04 1.6 5.32 6.58 5.32 2.1 0 3.5-.23 5.23-.6a43.77 43.77 0 0 1-.46-4.13c-1.03.34-2.34.53-3.78.53-2 0-2.82-.55-2.82-2.13 0-1.37 0-2.65.03-3.84 2.57.02 5.13.07 6.64.11-.02-1.18.03-2.9.1-4.04-2.2.04-4.65.07-6.68.07l.07-2.93h-.16Zm13.46 6.04a767.33 767.33 0 0 1 .07-3.18H82.6c.07 1.96.07 3.98.07 6.92 0 2.95-.03 4.99-.07 6.93h5.18c-.09-1.37-.11-3.68-.11-5.65 0-3.1 1.26-4 4.12-4 1.33 0 2.28.16 3.1.46.03-1.16.26-3.43.4-4.43-.86-.25-1.81-.41-2.96-.41-2.46-.03-4.26.98-5.1 3.38l-.17-.02Zm22.55 3.65c0 2.5-1.8 3.66-4.64 3.66-2.81 0-4.61-1.1-4.61-3.66s1.82-3.52 4.61-3.52c2.82 0 4.64 1.03 4.64 3.52Zm4.71-.11c0-4.96-3.87-7.18-9.35-7.18-5.5 0-9.23 2.22-9.23 7.18 0 4.94 3.49 7.59 9.21 7.59 5.77 0 9.37-2.65 9.37-7.6Z\" /><defs><linearGradient id=\"a\" x1=\"6.33\" x2=\"19.43\" y1=\"40.8\" y2=\"34.6\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient></defs>"});

function isImageMetadata$1(img) {
  return Boolean(
    img && typeof img === "object" && "width" in img && "height" in img && "src" in img
  );
}
function resolveImageMetadata(img) {
  if (!img) return void 0;
  if (isImageMetadata$1(img)) return img;
  if (typeof img === "object" && "src" in img && img.src && isImageMetadata$1(img.src)) {
    return img.src;
  }
  return void 0;
}
function getImageUrl(img, fallback) {
  if (!img) return fallback;
  if (typeof img === "object" && "src" in img) {
    const src = img.src;
    if (typeof src === "string") {
      return src;
    }
    if (typeof src === "object" && src && "src" in src && typeof src.src === "string") {
      return src.src;
    }
  }
  return fallback;
}
function getImageAlt(img, fallback) {
  if (!img) return fallback;
  if (typeof img === "object" && "alt" in img && typeof img.alt === "string") {
    return img.alt;
  }
  return fallback;
}
const CROPPED_PREVIEW_DEFAULTS = [
  { width: 860, height: 500, format: "avif", quality: 50 },
  { width: 860, height: 500, format: "webp", quality: 70 }
];
async function generateCroppedPreview(metadata, configs = CROPPED_PREVIEW_DEFAULTS) {
  const { getImage } = await Promise.resolve().then(() => _astro_assets);
  const results = await Promise.all(
    configs.map(async (config) => {
      const image = await getImage({
        src: metadata,
        width: config.width,
        height: config.height,
        format: config.format,
        quality: config.quality,
        fit: "cover",
        position: "top"
        // Crop from top - keeps the "above the fold" content
      });
      return { image, config };
    })
  );
  return results;
}

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$H = createAstro("https://https://griffinswebservices.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image,
    author,
    publishDate,
    seo = {},
    siteName = siteData.title
  } = Astro2.props;
  const baseTitle = title || "Page";
  const baseDescription = description || siteData.description;
  const baseImageUrl = getImageUrl(image, __ASTRO_IMAGE_IMPORT_18zSQ8.src);
  const finalMetaTitle = seo?.metaTitle || `${baseTitle} | ${siteData.title}`;
  const finalMetaDescription = seo?.metaDescription || baseDescription;
  const finalOgTitle = seo?.ogTitle || seo?.metaTitle || baseTitle;
  const finalOgDescription = seo?.ogDescription || seo?.metaDescription || baseDescription;
  const finalOgImageUrl = getImageUrl(seo?.ogImage, baseImageUrl);
  const finalOgType = seo?.ogType || "website";
  const finalTwitterTitle = seo?.twitterTitle || seo?.ogTitle || finalOgTitle;
  const finalTwitterDescription = seo?.twitterDescription || seo?.ogDescription || finalOgDescription;
  const finalTwitterImageUrl = getImageUrl(seo?.twitterImage || seo?.ogImage, finalOgImageUrl);
  const finalTwitterCard = seo?.twitterCard || "summary_large_image";
  const finalKeywords = seo?.keywords || ["astro", "static site generator", "web development"];
  const finalCanonicalUrl = seo?.canonicalUrl || `${siteData.url}${Astro2.url.pathname}`;
  const effectiveRobots = seo?.robots || "index, follow";
  const authorName = author || siteData.title;
  const publisherName = siteData.legalName;
  const makeAbsolute = (url) => {
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return `${siteData.url}${url}`;
    return `${siteData.url}/${url}`;
  };
  const absoluteOgImage = makeAbsolute(finalOgImageUrl);
  const absoluteTwitterImage = makeAbsolute(finalTwitterImageUrl);
  const schemaType = !publishDate ? "WebSite" : "Article";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": finalOgTitle,
    "headline": finalOgTitle,
    "description": finalOgDescription,
    "image": absoluteOgImage,
    "url": finalCanonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "url": siteData.url,
      "logo": {
        "@type": "ImageObject",
        "url": makeAbsolute(__ASTRO_IMAGE_IMPORT_18zSQ8.src),
        "width": 60,
        "height": 60
      }
    },
    "author": {
      "@type": publishDate ? "Person" : "Organization",
      "name": authorName
    },
    // Article-specific fields
    ...publishDate && {
      "datePublished": new Date(publishDate).toISOString(),
      "dateModified": new Date(publishDate).toISOString()
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": finalCanonicalUrl
    }
  };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="publisher"', '><meta name="keywords"', '><link rel="canonical"', '><meta name="robots"', '><!-- Open Graph / Facebook / LinkedIn --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:site_name"', ">", '<meta property="article:author"', '><meta property="article:publisher"', '><!-- Twitter Card --><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site"', '><meta name="twitter:creator"', '><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), finalMetaTitle, addAttribute(finalMetaTitle, "content"), addAttribute(finalMetaDescription, "content"), addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalKeywords.join(", "), "content"), addAttribute(finalCanonicalUrl, "href"), addAttribute(effectiveRobots, "content"), addAttribute(finalOgTitle, "content"), addAttribute(finalOgDescription, "content"), addAttribute(absoluteOgImage, "content"), addAttribute(finalOgType, "content"), addAttribute(finalCanonicalUrl, "content"), addAttribute(siteName, "content"), publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(new Date(publishDate).toISOString(), "content")}>`, addAttribute(authorName, "content"), addAttribute(publisherName, "content"), addAttribute(finalTwitterCard, "content"), addAttribute(finalTwitterTitle, "content"), addAttribute(finalTwitterDescription, "content"), addAttribute(absoluteTwitterImage, "content"), addAttribute(publisherName, "content"), addAttribute(authorName, "content"), unescapeHTML(JSON.stringify(structuredData)));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/SEO.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Theme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2([`<!-- Favicons --><link rel="shortcut icon" href="/3dfavicons/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/3dfavicons/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/3dfavicons/favicon-32x32.png"><link rel="apple-touch-icon" sizes="180x180" href="/3dfavicons/apple-touch-icon.png"><link rel="manifest" href="/3dfavicons/site.webmanifest"><link rel="icon" type="image/svg+xml" href="/3dfavicons/favicon.ico"><!-- PWA manifest (uncomment when ready) --><!-- <link rel="manifest" href="favicon.svg" /> --><!-- Color scheme support --><meta name="color-scheme" content="dark light"><meta name="theme-color" content="var(--color-bg)"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Theme detection script (runs before content loads to prevent FOUC) --><script>
  // Minimal blocking script - only set essential theme attributes
  (function() {
    var d = document.documentElement;
    var t = localStorage.getItem('theme');
    t = (t === 'light' || t === 'dark') ? t : 'dark';
    d.setAttribute('data-theme', t);
    d.style.colorScheme = t;
    var a = localStorage.getItem('accent');
    if (a) d.style.setProperty('--color-accent', a);
  })();
<\/script><!-- Deferred theme enhancements (non-blocking) -->`, ""])), renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Theme.astro", void 0);

const $$Astro$G = createAstro("https://https://griffinswebservices.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$F = createAstro("https://https://griffinswebservices.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$BodyTags = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Analytics, tracking scripts, or other body elements can be added here --><!-- Example: Google Analytics, chat widgets, etc. -->${renderComponent($$result, "SpeedInsights", $$Index$1, {})} ${renderComponent($$result, "Analytics", $$Index, {})}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BodyTags.astro", void 0);

const $$Astro$E = createAstro("https://https://griffinswebservices.com");
const $$AccordionVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$AccordionVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    allowMultiple = false,
    collectionUrl,
    collectionTitle,
    id,
    ctaHref,
    ctaText,
    showButtonSection = true,
    heading
  } = Astro2.props;
  const safeItems = toArray(items);
  const fallbackHeading = title ?? collectionTitle;
  const headingSource = heading ?? fallbackHeading;
  const isSegmentedHeading = typeof headingSource === "object" && headingSource !== null;
  const segmentedHeading = isSegmentedHeading ? headingSource : void 0;
  const resolvedHeading = typeof headingSource === "string" ? headingSource : segmentedHeading?.text ?? fallbackHeading;
  const headingPayload = segmentedHeading ?? resolvedHeading;
  const showHeader = Boolean(
    (title ?? collectionTitle ?? "").trim() || headingPayload || description
  );
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class="inner-section"> <div class="flex flex-col lg:flex-row lg:gap-12">  ${showHeader && renderTemplate`<div class="lg:w-1/2 sticky-section lg:self-start"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title ?? collectionTitle, "heading": headingPayload, "description": description, "className": "text-center lg:text-left max-w-3xl lg:max-w-none", "titleClassName": "tracking-[0.25em]", "headingClassName": "h2 mb-4", "descriptionClassName": "large-text text-text/80" })} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="hidden lg:block mt-8"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div>`}  ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`${showHeader ? "lg:w-1/2" : "w-full"} mt-12 lg:mt-0`, "class")}> ${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": safeItems, "bridgeId": id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, { "slot": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Accordion", Accordion, { "items": safeItems.map((item, index) => ({
    slug: item.slug,
    title: item.title || "Untitled",
    description: item.description,
    contentSlotId: `${id}-slot-${index}`
  })), "allowMultiple": allowMultiple, "className": "space-y-4", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/Accordion", "client:component-export": "default" })} ` })} ` })} </div>`} </div>  ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center lg:hidden"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro", void 0);

const $$file$o = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/AccordionVariant.astro";
const $$url$o = undefined;

const __vite_glob_0_0$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AccordionVariant,
  file: $$file$o,
  url: $$url$o
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$D = createAstro("https://https://griffinswebservices.com");
const $$CardRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$CardRenderer;
  const {
    items = [],
    columns = 3,
    className = "",
    getCardClassName,
    getRingDuration,
    featureCardProps = {},
    getFeatureCardProps
  } = Astro2.props;
  const safeItems = Array.isArray(items) ? items : [];
  const columnClasses = {
    1: "grid grid-cols-1 gap-8",
    2: "grid grid-cols-1 md:grid-cols-2 gap-8",
    3: "max-3-secondary",
    4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  };
  const resolveClassName = (item, index) => {
    if (typeof getCardClassName === "function") return getCardClassName(item, index);
    const record = item;
    return [record?.class, record?.className].filter(Boolean).join(" ");
  };
  const resolveRingDuration = (item, index) => {
    if (typeof getRingDuration === "function") return getRingDuration(item, index);
    const record = item;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };
  const resolveFeatureCardProps = (item, index) => {
    const dynamicProps = typeof getFeatureCardProps === "function" ? getFeatureCardProps(item, index) : {};
    return {
      ...featureCardProps,
      ...dynamicProps
    };
  };
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${columnClasses[columns]} list-none ${className}`.trim(), "class")}>${safeItems.map((item, index) => renderTemplate`<li class="h-full">${(() => {
    const mergedProps = resolveFeatureCardProps(item, index);
    const {
      className: overrideClassName,
      ringDuration: overrideRingDuration,
      data: _ignoredData,
      ...restFeatureCardProps
    } = mergedProps ?? {};
    const resolvedClassName = [resolveClassName(item, index), overrideClassName].filter(Boolean).join(" ");
    const resolvedRingDuration = typeof overrideRingDuration === "number" ? overrideRingDuration : resolveRingDuration(item, index);
    return renderTemplate`${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": resolvedRingDuration, "className": resolvedClassName, ...restFeatureCardProps, "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })}`;
  })()}</li>`)}</ul>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/CardRenderer.astro", void 0);

const $$Astro$C = createAstro("https://https://griffinswebservices.com");
const $$BenefitsInlineVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$BenefitsInlineVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    id,
    collectionTitle,
    heading
  } = Astro2.props;
  const safeItems = toArray(items);
  const fallbackHeading = title ?? collectionTitle;
  const headingSource = heading ?? fallbackHeading;
  const isSegmentedHeading = typeof headingSource === "object" && headingSource !== null;
  const segmentedHeading = isSegmentedHeading ? headingSource : void 0;
  const resolvedHeading = typeof headingSource === "string" ? headingSource : segmentedHeading?.text ?? fallbackHeading;
  const headingPayload = segmentedHeading ?? resolvedHeading;
  const showHeader = Boolean(collectionTitle || title || headingPayload || description);
  const featureCardProps = {
    listItemProps: {
      layout: "horizontal",
      alignment: "left",
      className: "gap-5 text-left items-start w-full",
      containerClassName: "text-left space-y-2",
      iconClassName: "icon-large z-10 card-icon-color mr-5 shrink-0"
    }
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section relative ${className}`.trim(), "class")}> <div class="space-y-10"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": collectionTitle ?? title, "heading": headingPayload, "description": description, "className": "text-center", "headingClassName": "h2 mb-4", "descriptionClassName": "text-lg text-muted max-w-2xl mx-auto" })}`} ${safeItems.length > 0 && renderTemplate`${renderComponent($$result, "CardRenderer", $$CardRenderer, { "items": safeItems, "columns": columns, "featureCardProps": featureCardProps })}`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsInlineVariant.astro", void 0);

const $$file$n = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BenefitsInlineVariant.astro";
const $$url$n = undefined;

const __vite_glob_0_1$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BenefitsInlineVariant,
  file: $$file$n,
  url: $$url$n
}, Symbol.toStringTag, { value: 'Module' }));

function getEntryKey(collection, id) {
  return `${collection}:${id}`;
}
function parseEntryKey(key) {
  const [collection, id] = key.split(":");
  return { collection, id };
}
function isCollectionReference(value) {
  return value && typeof value === "object" && "collection" in value && "id" in value;
}

const frontmatter$g = {
  "title": "About Us",
  "description": "We're not another agency. We're your dedicated web team.",
  "heading": {
    "before": "We're not another agency.",
    "text": "We're your dedicated web team."
  },
  "hasPage": true,
  "itemsHasPage": false,
  "redirectFrom": ["/about", "/aboutus"],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 5
  }]
};
function getHeadings$g() {
  return [];
}
function _createMdxContent$g(props) {
  return createVNode($$ContentRenderer, {
    query: query("about-us").orderBy(sortByOrder()),
    variant: "AccordionVariant",
    columns: 1
  });
}
function MDXContent$g(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$g, {
      ...props
    })
  }) : _createMdxContent$g();
}
const url$g = "src/content/about-us/_meta.mdx";
const file$h = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/_meta.mdx";
const Content$g = (props = {}) => MDXContent$g({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$g[Symbol.for('mdx-component')] = true;
Content$g[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$g.layout);
Content$g.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/about-us/_meta.mdx";
__astro_tag_component__(Content$g, 'astro:jsx');

const __vite_glob_0_0$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$g,
  default: Content$g,
  file: file$h,
  frontmatter: frontmatter$g,
  getHeadings: getHeadings$g,
  url: url$g
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$f = {
  "title": "Authors",
  "description": "Meet our writing team",
  "hasPage": true,
  "itemsHasPage": true
};
function getHeadings$f() {
  return [];
}
function _createMdxContent$f(props) {
  return createVNode(Fragment, {});
}
function MDXContent$f(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$f, {
      ...props
    })
  }) : _createMdxContent$f();
}

const url$f = "src/content/authors/_meta.mdx";
const file$g = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/authors/_meta.mdx";
const Content$f = (props = {}) => MDXContent$f({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$f[Symbol.for('mdx-component')] = true;
Content$f[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$f.layout);
Content$f.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/authors/_meta.mdx";
__astro_tag_component__(Content$f, 'astro:jsx');

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$f,
  default: Content$f,
  file: file$g,
  frontmatter: frontmatter$f,
  getHeadings: getHeadings$f,
  url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$e = {
  "title": "Why Choose Us?",
  "description": "Every website we build comes with everything you need to succeed online.",
  "heading": {
    "before": "Every website we build",
    "text": "comes with everything you need",
    "after": "to succeed online."
  },
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$e() {
  return [];
}
function _createMdxContent$e(props) {
  return createVNode(Fragment, {});
}
function MDXContent$e(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$e, {
      ...props
    })
  }) : _createMdxContent$e();
}

const url$e = "src/content/benefits/_meta.mdx";
const file$f = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/_meta.mdx";
const Content$e = (props = {}) => MDXContent$e({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$e[Symbol.for('mdx-component')] = true;
Content$e[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$e.layout);
Content$e.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/benefits/_meta.mdx";
__astro_tag_component__(Content$e, 'astro:jsx');

const __vite_glob_0_2$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$e,
  default: Content$e,
  file: file$f,
  frontmatter: frontmatter$e,
  getHeadings: getHeadings$e,
  url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$B = createAstro("https://https://griffinswebservices.com");
const $$BlogIndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$BlogIndexLayout;
  const {
    Content,
    collectionName,
    collectionMeta,
    seoProps,
    hasContent = false
  } = Astro2.props;
  const { title: pageTitle, description: pageDescription } = seoProps;
  collectionMeta.featuredImage;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> 
Blog Index Layout
 <div class="container mx-auto px-4 pb-16"> ${hasContent && Content ? (
    /* Custom MDX content from _meta.mdx body */
    renderTemplate`${renderComponent($$result2, "Content", Content, {})}`
  ) : (
    /* Default: Grid of collection items */
    renderTemplate`${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query(collectionName), "variant": "CardVariant" })}`
  )} </div> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro", void 0);

const $$file$m = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/collections/BlogIndexLayout.astro";
const $$url$m = undefined;

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogIndexLayout,
  file: $$file$m,
  url: $$url$m
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter$d;
  content.file = file$e;
  content.url = url$d;
  return createVNode($$BlogIndexLayout, {
    file: file$e,
    url: url$d,
    content,
    frontmatter: content,
    headings: getHeadings$d(),
    'server:root': true,
    children
  });
};
const frontmatter$d = {
  "title": "Blog",
  "description": "Latest news and articles from our team",
  "hasPage": true,
  "itemsHasPage": true,
  "layout": "../../layouts/collections/BlogIndexLayout.astro",
  "itemsLayout": "../../layouts/collections/BlogLayout.astro",
  "seo": {
    "metaTitle": "Blog - Latest Articles & Insights - Greastro",
    "metaDescription": "Discover our latest thoughts on web development, design, and technology",
    "ogTitle": "Greastro Blog - Web Development Insights - Stay Updated",
    "ogDescription": "Stay updated with our latest articles on modern web development",
    "twitterCard": "summary_large_image",
    "keywords": ["web development", "astro", "javascript", "design"],
    "robots": "noindex, nofollow, noarchive"
  }
};
function getHeadings$d() {
  return [];
}
function _createMdxContent$d(props) {
  return createVNode(Fragment, {});
}
function MDXContent$d(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$d, {
      ...props
    })
  });
}

const url$d = "src/content/blog/_meta.mdx";
const file$e = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/_meta.mdx";
const Content$d = (props = {}) => MDXContent$d({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$d[Symbol.for('mdx-component')] = true;
Content$d[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$d.layout);
Content$d.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/blog/_meta.mdx";
__astro_tag_component__(Content$d, 'astro:jsx');

const __vite_glob_0_3$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$d,
  default: Content$d,
  file: file$e,
  frontmatter: frontmatter$d,
  getHeadings: getHeadings$d,
  url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$c = {
  "title": "Capabilities",
  "description": "Our technical expertise and service capabilities",
  "heading": {
    "before": "Capabilities that keep your site",
    "text": "fast, secure, and constantly improving.",
    "after": "Tap the talent you need—design, development, SEO, hosting, and support."
  },
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsLayout": "../../layouts/collections/ServicesLayout.astro",
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 3
  }]
};
function getHeadings$c() {
  return [];
}
function _createMdxContent$c(props) {
  return createVNode($$ContentRenderer, {
    query: query("capabilities").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "md"
  });
}
function MDXContent$c(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$c, {
      ...props
    })
  }) : _createMdxContent$c();
}
const url$c = "src/content/capabilities/_meta.mdx";
const file$d = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/_meta.mdx";
const Content$c = (props = {}) => MDXContent$c({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$c[Symbol.for('mdx-component')] = true;
Content$c[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$c.layout);
Content$c.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/capabilities/_meta.mdx";
__astro_tag_component__(Content$c, 'astro:jsx');

const __vite_glob_0_4$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$c,
  default: Content$c,
  file: file$d,
  frontmatter: frontmatter$c,
  getHeadings: getHeadings$c,
  url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$b = {
  "title": "Contact Us",
  "description": "Get in touch with Us",
  "hasPage": true,
  "itemsHasPage": false,
  "redirectFrom": ["/contact", "/contactus"],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 6
  }]
};
function getHeadings$b() {
  return [];
}
function _createMdxContent$b(props) {
  return createVNode($$ContentRenderer, {
    query: query("contact-us"),
    variant: "ContactVariant",
    columns: 2
  });
}
function MDXContent$b(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$b, {
      ...props
    })
  }) : _createMdxContent$b();
}
const url$b = "src/content/contact-us/_meta.mdx";
const file$c = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/contact-us/_meta.mdx";
const Content$b = (props = {}) => MDXContent$b({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$b[Symbol.for('mdx-component')] = true;
Content$b[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$b.layout);
Content$b.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/contact-us/_meta.mdx";
__astro_tag_component__(Content$b, 'astro:jsx');

const __vite_glob_0_5$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$b,
  default: Content$b,
  file: file$c,
  frontmatter: frontmatter$b,
  getHeadings: getHeadings$b,
  url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$a = {
  "title": "FAQs",
  "description": "From timelines and pricing to ongoing support and security — here's everything you need to know before we start building your website.",
  "heading": {
    "before": "Questions?",
    "text": "We've Got Answers."
  },
  "hasPage": true,
  "itemsHasPage": false
};
function getHeadings$a() {
  return [];
}
function _createMdxContent$a(props) {
  return createVNode(Fragment, {});
}
function MDXContent$a(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$a, {
      ...props
    })
  }) : _createMdxContent$a();
}

const url$a = "src/content/faq/_meta.mdx";
const file$b = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/_meta.mdx";
const Content$a = (props = {}) => MDXContent$a({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$a[Symbol.for('mdx-component')] = true;
Content$a[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$a.layout);
Content$a.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/faq/_meta.mdx";
__astro_tag_component__(Content$a, 'astro:jsx');

const __vite_glob_0_6$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$a,
  default: Content$a,
  file: file$b,
  frontmatter: frontmatter$a,
  getHeadings: getHeadings$a,
  url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$9 = {
  "title": "Industries",
  "description": "Specialized web solutions for businesses across all industries",
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 4
  }]
};
function getHeadings$9() {
  return [];
}
function _createMdxContent$9(props) {
  return createVNode($$ContentRenderer, {
    query: query("industries").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "lg"
  });
}
function MDXContent$9(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$9, {
      ...props
    })
  }) : _createMdxContent$9();
}
const url$9 = "src/content/industries/_meta.mdx";
const file$a = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/_meta.mdx";
const Content$9 = (props = {}) => MDXContent$9({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$9[Symbol.for('mdx-component')] = true;
Content$9[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$9.layout);
Content$9.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/industries/_meta.mdx";
__astro_tag_component__(Content$9, 'astro:jsx');

const __vite_glob_0_7$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$9,
  default: Content$9,
  file: file$a,
  frontmatter: frontmatter$9,
  getHeadings: getHeadings$9,
  url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$8 = {
  "title": "Legal Documents",
  "description": "Privacy Policy, Terms of Service, and Cookie Policy",
  "hasPage": false,
  "itemsHasPage": true,
  "itemsRootPath": true,
  "itemsLayout": "@/layouts/collections/LegalLayout.astro",
  "itemsAddToMenu": [{
    "menu": "footer-menu"
  }]
};
function getHeadings$8() {
  return [];
}
function _createMdxContent$8(props) {
  return createVNode(Fragment, {});
}
function MDXContent$8(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$8, {
      ...props
    })
  }) : _createMdxContent$8();
}

const url$8 = "src/content/legal/_meta.mdx";
const file$9 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/_meta.mdx";
const Content$8 = (props = {}) => MDXContent$8({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$8[Symbol.for('mdx-component')] = true;
Content$8[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$8.layout);
Content$8.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/legal/_meta.mdx";
__astro_tag_component__(Content$8, 'astro:jsx');

const __vite_glob_0_8$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$8,
  default: Content$8,
  file: file$9,
  frontmatter: frontmatter$8,
  getHeadings: getHeadings$8,
  url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$7 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$7() {
  return [];
}
function _createMdxContent$7(props) {
  return createVNode(Fragment, {});
}
function MDXContent$7(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$7, {
      ...props
    })
  }) : _createMdxContent$7();
}

const url$7 = "src/content/menu-items/_meta.mdx";
const file$8 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menu-items/_meta.mdx";
const Content$7 = (props = {}) => MDXContent$7({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$7[Symbol.for('mdx-component')] = true;
Content$7[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$7.layout);
Content$7.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menu-items/_meta.mdx";
__astro_tag_component__(Content$7, 'astro:jsx');

const __vite_glob_0_9$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$7,
  default: Content$7,
  file: file$8,
  frontmatter: frontmatter$7,
  getHeadings: getHeadings$7,
  url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$6 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$6() {
  return [];
}
function _createMdxContent$6(props) {
  return createVNode(Fragment, {});
}
function MDXContent$6(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$6, {
      ...props
    })
  }) : _createMdxContent$6();
}

const url$6 = "src/content/menus/_meta.mdx";
const file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menus/_meta.mdx";
const Content$6 = (props = {}) => MDXContent$6({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$6[Symbol.for('mdx-component')] = true;
Content$6[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$6.layout);
Content$6.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/menus/_meta.mdx";
__astro_tag_component__(Content$6, 'astro:jsx');

const __vite_glob_0_10$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$6,
  default: Content$6,
  file: file$7,
  frontmatter: frontmatter$6,
  getHeadings: getHeadings$6,
  url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$5 = {
  "title": "Projects",
  "description": "A curated look at the results-driven sites and campaigns we craft for our partners.",
  "heading": {
    "before": "Dive into",
    "text": "our portfolio",
    "after": "and see how we turn complex ideas into high-performing experiences."
  },
  "hasPage": true,
  "itemsHasPage": false,
  "addToMenu": [{
    "menu": "main-menu"
  }, {
    "menu": "links-menu",
    "order": 2
  }]
};
function getHeadings$5() {
  return [];
}
function _createMdxContent$5(props) {
  return createVNode(Fragment, {});
}
function MDXContent$5(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$5, {
      ...props
    })
  }) : _createMdxContent$5();
}

const url$5 = "src/content/projects/_meta.mdx";
const file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/projects/_meta.mdx";
const Content$5 = (props = {}) => MDXContent$5({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$5[Symbol.for('mdx-component')] = true;
Content$5[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$5.layout);
Content$5.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/projects/_meta.mdx";
__astro_tag_component__(Content$5, 'astro:jsx');

const __vite_glob_0_11$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  default: Content$5,
  file: file$6,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$4 = {
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$4() {
  return [];
}
function _createMdxContent$4(props) {
  return createVNode(Fragment, {});
}
function MDXContent$4(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4();
}

const url$4 = "src/content/social-media/_meta.mdx";
const file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/social-media/_meta.mdx";
const Content$4 = (props = {}) => MDXContent$4({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$4[Symbol.for('mdx-component')] = true;
Content$4[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$4.layout);
Content$4.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/social-media/_meta.mdx";
__astro_tag_component__(Content$4, 'astro:jsx');

const __vite_glob_0_12$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  default: Content$4,
  file: file$5,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$3 = {
  "title": "Solutions",
  "description": "Comprehensive web solutions tailored to your business needs",
  "heading": {
    "before": "Website packages that start with",
    "text": "your business goals",
    "after": "and end with measurable growth."
  },
  "hasPage": true,
  "itemsHasPage": true,
  "itemsRootPath": false,
  "itemsLayout": "../../layouts/collections/ServicesLayout.astro",
  "itemsAddToMenu": [{
    "menu": "main-menu"
  }],
  "addToMenu": [{
    "menu": "main-menu",
    "order": 2
  }]
};
function getHeadings$3() {
  return [];
}
function _createMdxContent$3(props) {
  return createVNode($$ContentRenderer, {
    query: query("solutions").orderBy(sortByOrder()),
    variant: "CardVariant",
    columns: 3,
    gap: "lg"
  });
}
function MDXContent$3(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3();
}
const url$3 = "src/content/solutions/_meta.mdx";
const file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/_meta.mdx";
const Content$3 = (props = {}) => MDXContent$3({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$3[Symbol.for('mdx-component')] = true;
Content$3[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$3.layout);
Content$3.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/solutions/_meta.mdx";
__astro_tag_component__(Content$3, 'astro:jsx');

const __vite_glob_0_13$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  default: Content$3,
  file: file$4,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$2 = {
  "title": "Impact Stats",
  "description": "Marketable numbers that illustrate Griffin's Web Services reliability and focus.",
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$2() {
  return [];
}
function _createMdxContent$2(props) {
  return createVNode(Fragment, {});
}
function MDXContent$2(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2();
}

const url$2 = "src/content/stats/_meta.mdx";
const file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/stats/_meta.mdx";
const Content$2 = (props = {}) => MDXContent$2({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$2[Symbol.for('mdx-component')] = true;
Content$2[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$2.layout);
Content$2.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/stats/_meta.mdx";
__astro_tag_component__(Content$2, 'astro:jsx');

const __vite_glob_0_14$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  default: Content$2,
  file: file$3,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$1 = {
  "title": "Technologies",
  "description": "We've mastered the tools that matter.",
  "hasPage": false,
  "itemsHasPage": false
};
function getHeadings$1() {
  return [];
}
function _createMdxContent$1(props) {
  return createVNode(Fragment, {});
}
function MDXContent$1(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1();
}

const url$1 = "src/content/technologies/_meta.mdx";
const file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/technologies/_meta.mdx";
const Content$1 = (props = {}) => MDXContent$1({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content$1[Symbol.for('mdx-component')] = true;
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);
Content$1.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/technologies/_meta.mdx";
__astro_tag_component__(Content$1, 'astro:jsx');

const __vite_glob_0_15$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  default: Content$1,
  file: file$2,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter = {
  "title": "Testimonials",
  "description": "Real feedback from real clients. See why businesses trust us to deliver websites that work.",
  "heading": {
    "before": "Hear it from",
    "text": "our clients",
    "after": "themselves."
  },
  "hasPage": true,
  "itemsHasPage": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/testimonials/_meta.mdx";
const file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/_meta.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/content/testimonials/_meta.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const __vite_glob_0_16$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file: file$1,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

typeof process !== "undefined" && process.platform === "win32";

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  avis: "avif",
  // avif-sequence
  mif1: "heif",
  msf1: "heif",
  // heif-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected || "avis" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  let result;
  try {
    result = lookup(data);
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  if (!result.height || !result.width || !result.type) {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
  const { width, height, type, orientation } = result;
  const isPortrait = (orientation || 0) >= 5;
  return {
    width: isPortrait ? height : width,
    height: isPortrait ? width : height,
    format: type,
    orientation
  };
}

const entryTypeSchema = z$1.object({
  id: z$1.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z$1.union([
  z$1.array(entryTypeSchema),
  z$1.record(
    z$1.string(),
    z$1.object({
      id: z$1.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z$1.union([
  z$1.object({
    type: z$1.literal("content").optional().default("content"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal("data"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal(CONTENT_LAYER_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.union([
      z$1.function(),
      z$1.object({
        name: z$1.string(),
        load: z$1.function(
          z$1.tuple(
            [
              z$1.object({
                collection: z$1.string(),
                store: z$1.any(),
                meta: z$1.any(),
                logger: z$1.any(),
                config: z$1.any(),
                entryTypes: z$1.any(),
                parseData: z$1.any(),
                renderMarkdown: z$1.any(),
                generateDigest: z$1.function(z$1.tuple([z$1.any()], z$1.string())),
                watcher: z$1.any().optional(),
                refreshContextData: z$1.record(z$1.unknown()).optional()
              })
            ],
            z$1.unknown()
          )
        ),
        schema: z$1.any().optional(),
        render: z$1.function(z$1.tuple([z$1.any()], z$1.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z$1.boolean().optional()
  }),
  z$1.object({
    type: z$1.literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.function()
  })
]);
z$1.object({
  collections: z$1.record(collectionConfigParser)
});
function posixifyPath(filePath) {
  return filePath.split(path.sep).join("/");
}
function posixRelative(from, to) {
  return posixifyPath(path.relative(from, to));
}

function file(fileName, options) {
  if (fileName.includes("*")) {
    throw new AstroError(FileGlobNotSupported);
  }
  let parse = null;
  const ext = fileName.split(".").at(-1);
  if (ext === "json") {
    parse = JSON.parse;
  } else if (ext === "yml" || ext === "yaml") {
    parse = (text) => yaml.load(text, {
      filename: fileName
    });
  } else if (ext === "toml") {
    parse = toml.parse;
  }
  if (parse === null) {
    throw new AstroError({
      ...FileParserNotFound,
      message: FileParserNotFound.message(fileName)
    });
  }
  async function syncData(filePath, { logger, parseData, store, config }) {
    let data;
    try {
      const contents = await promises.readFile(filePath, "utf-8");
      data = parse(contents);
    } catch (error) {
      logger.error(`Error reading data from ${fileName}`);
      logger.debug(error.message);
      return;
    }
    const normalizedFilePath = posixRelative(fileURLToPath(config.root), filePath);
    if (Array.isArray(data)) {
      if (data.length === 0) {
        logger.warn(`No items found in ${fileName}`);
      }
      logger.debug(`Found ${data.length} item array in ${fileName}`);
      store.clear();
      const idList = /* @__PURE__ */ new Set();
      for (const rawItem of data) {
        const id = (rawItem.id ?? rawItem.slug)?.toString();
        if (!id) {
          logger.error(`Item in ${fileName} is missing an id or slug field.`);
          continue;
        }
        if (idList.has(id)) {
          logger.warn(
            `Duplicate id "${id}" found in ${fileName}. Later items with the same id will overwrite earlier ones.`
          );
        }
        idList.add(id);
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else if (typeof data === "object") {
      const entries = Object.entries(data);
      logger.debug(`Found object with ${entries.length} entries in ${fileName}`);
      store.clear();
      for (const [id, rawItem] of entries) {
        if (id === "$schema" && typeof rawItem === "string") {
          continue;
        }
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else {
      logger.error(`Invalid data in ${fileName}. Must be an array or object.`);
    }
  }
  return {
    name: "file-loader",
    load: async (context) => {
      const { config, logger, watcher } = context;
      logger.debug(`Loading data from ${fileName}`);
      const url = new URL(fileName, config.root);
      if (!existsSync(url)) {
        logger.error(`File not found: ${fileName}`);
        return;
      }
      const filePath = fileURLToPath(url);
      await syncData(filePath, context);
      watcher?.add(filePath);
      watcher?.on("change", async (changedPath) => {
        if (changedPath === filePath) {
          logger.info(`Reloading data from ${fileName}`);
          await syncData(filePath, context);
        }
      });
    }
  };
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BfMqstQ3.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_DOMAIN": "https://griffinswebservices.com", "SITE": "https://https://griffinswebservices.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z$1.object({
  tags: z$1.array(z$1.string()).optional(),
  lastModified: z$1.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_D4oZ1zZH.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_D4oZ1zZH.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_D4oZ1zZH.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await Promise.resolve().then(() => _astro_assets);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_BPUAt3R5.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  return function reference(collection) {
    return z$1.union([
      z$1.string(),
      z$1.object({
        id: z$1.string(),
        collection: z$1.string()
      }),
      z$1.object({
        slug: z$1.string(),
        collection: z$1.string()
      })
    ]).transform(
      (lookup, ctx) => {
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const reference = createReference({ lookupMap });

const _astro_content = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  defineCollection,
  getCollection,
  getEntry,
  reference,
  render: renderEntry,
  z
}, Symbol.toStringTag, { value: 'Module' }));

function refSchema(targetCollection) {
  const collections = Array.isArray(targetCollection) ? targetCollection : [targetCollection];
  const singleRef = collections.length === 1 ? reference(collections[0]) : z.union(collections.map((coll) => reference(coll)));
  return z.union([singleRef, z.array(singleRef)]).optional();
}
const BaseMenuFields = {
  parent: refSchema("menu-items"),
  openInNewTab: z.boolean().default(false)
};
const MenuReferenceField = {
  menu: refSchema("menus")
};
const MenuItemFields = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  order: z.number().optional(),
  ...BaseMenuFields,
  menu: refSchema("menus"),
  aliases: z.array(z.string()).optional()
});
const MenuSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional()
});
const HierarchyMode = z.enum([
  "auto",
  // Preserve full content hierarchy
  "flat",
  // Flatten all items to same level
  "manual",
  // Ignore content hierarchy, use explicit parent
  "skip-levels",
  // Include only specific depth levels
  "roots-only",
  // Only root items (depth 0)
  "leaves-only"
  // Only leaf items (no children)
]);
const PlacementStrategy = z.enum([
  "nested",
  // Default: nest under collection/attachTo
  "root-with-hierarchy",
  // Items at menu root, keep their hierarchy
  "root-flat",
  // All items at menu root, no hierarchy
  "sibling"
  // Place alongside attachTo (not under it)
]);
const ParentStrategy = z.enum([
  "auto",
  // Default: use collection name (or attachTo)
  "content",
  // Use item's content parent field
  "custom",
  // Use explicit parent value
  "none"
  // No parent (root level)
]);
const MenuFilterOptions = z.object({
  includeRoots: z.boolean().optional().default(true),
  includeLeaves: z.boolean().optional().default(true),
  includeBranches: z.boolean().optional().default(true),
  minDepth: z.number().optional().default(0),
  maxDepthTotal: z.number().optional(),
  onlyDepths: z.array(z.number()).optional(),
  excludeDepths: z.array(z.number()).optional(),
  tags: z.array(z.string()).optional(),
  excludeTags: z.array(z.string()).optional()
});
const ChildHandlingOptions = z.object({
  includeChildren: z.boolean().optional().default(true),
  maxDepth: z.number().nullable().optional(),
  childPlacement: z.enum(["nested", "flat", "skip"]).optional().default("nested"),
  childFilter: MenuFilterOptions.optional(),
  sortChildren: z.enum(["order", "title", "date", "none"]).optional().default("order"),
  reverseChildren: z.boolean().optional().default(false)
});
const ItemsAddToMenuFields = z.object({
  // Basic Settings
  ...MenuReferenceField,
  ...BaseMenuFields,
  // AUTO-ATTACH: Defaults to collection name
  attachTo: z.union([z.string(), z.boolean()]).optional(),
  // Hierarchy Configuration
  hierarchyMode: HierarchyMode.optional().default("auto"),
  placementStrategy: PlacementStrategy.optional().default("nested"),
  parentStrategy: ParentStrategy.optional().default("auto"),
  respectHierarchy: z.boolean().optional().default(true),
  // Depth Control
  maxDepth: z.number().nullable().optional(),
  minDepth: z.number().optional().default(0),
  includeLevels: z.array(z.number()).optional(),
  excludeLevels: z.array(z.number()).optional(),
  // Child Handling
  children: ChildHandlingOptions.optional(),
  // Filtering
  filter: MenuFilterOptions.optional(),
  // Advanced
  customSort: z.string().optional(),
  groupBy: z.string().optional(),
  metadata: z.record(z.any()).optional()
});
const AddToMenuFields = z.object({
  ...MenuReferenceField,
  ...BaseMenuFields,
  // Basic Overrides
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  // Hierarchy Overrides
  parent: z.string().nullable().optional(),
  ignoreChildren: z.boolean().optional(),
  maxChildDepth: z.number().nullable().optional(),
  // Placement Overrides
  forceRoot: z.boolean().optional(),
  forcePlacement: PlacementStrategy.optional(),
  customHierarchy: z.boolean().optional(),
  // Display Overrides
  order: z.number().optional(),
  // Children Control
  childrenBehavior: z.enum(["auto", "none", "custom"]).optional().default("auto"),
  includeOnlyChildren: z.array(z.string()).optional(),
  excludeChildren: z.array(z.string()).optional(),
  // Metadata
  metadata: z.record(z.any()).optional()
});
const redirectFromSchema = z.union([z.string(), z.array(z.string())]).optional().transform((val) => {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
});
const imageInputSchema = ({ image }) => z.union([
  // Direct Astro image (most common)
  image(),
  // Image object with alt text
  z.object({
    src: image(),
    alt: z.string().optional()
  })
]).optional();
const iconSchema = ({ image }) => z.union([
  z.string(),
  image(),
  z.object({
    type: z.literal("astro-icon"),
    name: z.string()
  }),
  z.object({
    type: z.literal("svg"),
    content: z.string()
  }),
  z.object({
    type: z.literal("emoji"),
    content: z.string()
  }),
  z.object({
    type: z.literal("text"),
    content: z.string()
  })
]);
const headingSchema = z.union([
  z.string().optional(),
  z.object({
    before: z.string().optional(),
    text: z.string().optional(),
    after: z.string().optional()
  })
]);
const seoSchema = ({ image }) => z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: imageInputSchema({ image }).optional(),
  ogType: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: imageInputSchema({ image }).optional(),
  twitterCard: z.enum(["summary", "summary_large_image", "app", "player"]).optional(),
  robots: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  keywords: z.array(z.string()).optional()
}).optional();
const baseSchema = ({ image }) => z.object({
  title: z.string(),
  description: z.string().optional(),
  featuredImage: imageInputSchema({ image }).optional(),
  bannerImage: imageInputSchema({ image }).optional(),
  hasPage: z.boolean().optional(),
  rootPath: z.boolean().optional(),
  icon: iconSchema({ image }).optional(),
  seo: seoSchema({ image }),
  addToMenu: z.array(AddToMenuFields).optional(),
  redirectFrom: redirectFromSchema,
  draft: z.boolean().default(false),
  publishDate: z.union([z.date(), z.string()]).optional().transform((val) => {
    if (!val) return void 0;
    if (val instanceof Date) return val;
    return new Date(val);
  }),
  order: z.number().default(0),
  layout: z.string().optional(),
  // Parent reference for content hierarchy (slug of parent item in same collection)
  parent: z.union([z.string(), z.array(z.string())]).optional(),
  heading: headingSchema.optional()
});
const metaSchema = ({ image }) => z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  heading: headingSchema.optional(),
  hasPage: z.boolean().default(true),
  featuredImage: imageInputSchema({ image }).optional(),
  seo: seoSchema({ image }),
  addToMenu: z.array(AddToMenuFields).optional(),
  redirectFrom: redirectFromSchema,
  itemsHasPage: z.boolean().default(true),
  itemsRootPath: z.boolean().default(false),
  itemsAddToMenu: z.array(ItemsAddToMenuFields).optional(),
  layout: z.string().default("../layouts/collections/CollectionIndexLayout.astro"),
  itemsLayout: z.string().default("../layouts/collections/CollectionLayout.astro")
});

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeWords(str) {
  if (!str) return str;
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
function formatPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  return phone;
}

function parseContentPath(path) {
  const segments = path.split("/");
  const fileName = segments.pop();
  const collection = segments.pop();
  const slug = fileName.replace(/\.(mdx|md|json)$/, "");
  return { collection, slug };
}
function isMetaFile(path) {
  return /_meta\.(mdx|md|json)$/.test(path);
}

class SimpleIdRegistry {
  registry = /* @__PURE__ */ new Map();
  /**
   * Register an ID and get unique version with auto-increment
   * @param baseId - Base ID to register
   * @returns Unique ID (base or base-N)
   */
  getUniqueId(baseId) {
    const count = this.registry.get(baseId) || 0;
    this.registry.set(baseId, count + 1);
    return count === 0 ? baseId : `${baseId}-${count}`;
  }
  /**
   * Check if an ID has been used
   */
  has(baseId) {
    return this.registry.has(baseId);
  }
  /**
   * Get current count for an ID (0 if unused)
   */
  getCount(baseId) {
    return this.registry.get(baseId) || 0;
  }
  /**
   * Clear the registry
   */
  clear() {
    this.registry.clear();
  }
  /**
   * Get total number of unique base IDs tracked
   */
  get size() {
    return this.registry.size;
  }
}
class ScopedIdRegistry {
  registry = /* @__PURE__ */ new Map();
  /**
   * Register an ID in a scope and return its count
   * @param scope - Scope identifier (e.g., page path)
   * @param baseId - Base ID to register
   * @returns Count (0 for first use, 1 for second, 2 for third, etc.)
   */
  register(scope, baseId) {
    if (!this.registry.has(scope)) {
      this.registry.set(scope, /* @__PURE__ */ new Map());
    }
    const scopeRegistry = this.registry.get(scope);
    const count = scopeRegistry.get(baseId) || 0;
    scopeRegistry.set(baseId, count + 1);
    return count;
  }
  /**
   * Get current count for a base ID in a scope (without incrementing)
   */
  getCount(scope, baseId) {
    return this.registry.get(scope)?.get(baseId) || 0;
  }
  /**
   * Check if base ID exists in scope
   */
  has(scope, baseId) {
    return (this.registry.get(scope)?.get(baseId) || 0) > 0;
  }
  /**
   * Clear a specific scope
   */
  clearScope(scope) {
    this.registry.delete(scope);
  }
  /**
   * Clear all scopes
   */
  clear() {
    this.registry.clear();
  }
  /**
   * Get all scopes
   */
  getScopes() {
    return Array.from(this.registry.keys());
  }
  /**
   * Get total number of scopes
   */
  get scopeCount() {
    return this.registry.size;
  }
}

function parseFrontmatterFromString(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const lines = yaml.split("\n");
  return parseYamlObject(lines, 0, 0).value;
}
function parseYamlObject(lines, startIndex, baseIndent) {
  const obj = {};
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      i++;
      continue;
    }
    const indent = line.length - line.trimStart().length;
    if (indent < baseIndent) {
      break;
    }
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) {
      i++;
      continue;
    }
    const key = line.substring(0, colonIndex).trim();
    const valueStart = line.substring(colonIndex + 1).trim();
    if (valueStart) {
      obj[key] = parseYamlValue(valueStart);
      i++;
      continue;
    }
    i++;
    if (i >= lines.length) {
      obj[key] = null;
      break;
    }
    const nextLine = lines[i];
    const nextTrimmed = nextLine.trim();
    const nextIndent = nextLine.length - nextLine.trimStart().length;
    if (nextTrimmed.startsWith("-")) {
      const result = parseYamlArray(lines, i, nextIndent);
      obj[key] = result.value;
      i = result.nextIndex;
      continue;
    }
    if (nextIndent > indent) {
      const result = parseYamlObject(lines, i, nextIndent);
      obj[key] = result.value;
      i = result.nextIndex;
      continue;
    }
    obj[key] = null;
  }
  return { value: obj, nextIndex: i };
}
function parseYamlArray(lines, startIndex, baseIndent) {
  const array = [];
  let i = startIndex;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      i++;
      continue;
    }
    const indent = line.length - line.trimStart().length;
    if (indent < baseIndent) {
      break;
    }
    if (!trimmed.startsWith("-")) {
      break;
    }
    const afterDash = trimmed.substring(1).trim();
    if (afterDash && afterDash.includes(":")) {
      const obj = {};
      const colonIndex = afterDash.indexOf(":");
      const key = afterDash.substring(0, colonIndex).trim();
      const value = afterDash.substring(colonIndex + 1).trim();
      obj[key] = parseYamlValue(value);
      i++;
      while (i < lines.length) {
        const nextLine2 = lines[i];
        const nextTrimmed2 = nextLine2.trim();
        const nextIndent2 = nextLine2.length - nextLine2.trimStart().length;
        if (!nextTrimmed2 || nextTrimmed2.startsWith("#")) {
          i++;
          continue;
        }
        if (nextIndent2 <= baseIndent) {
          break;
        }
        if (nextTrimmed2.startsWith("-")) {
          break;
        }
        if (nextTrimmed2.includes(":")) {
          const propColonIndex = nextTrimmed2.indexOf(":");
          const propKey = nextTrimmed2.substring(0, propColonIndex).trim();
          const propValue = nextTrimmed2.substring(propColonIndex + 1).trim();
          obj[propKey] = parseYamlValue(propValue);
          i++;
        } else {
          break;
        }
      }
      array.push(obj);
      continue;
    }
    if (afterDash) {
      array.push(parseYamlValue(afterDash));
      i++;
      continue;
    }
    i++;
    if (i >= lines.length) {
      array.push(null);
      break;
    }
    const nextLine = lines[i];
    const nextTrimmed = nextLine.trim();
    const nextIndent = nextLine.length - nextLine.trimStart().length;
    if (nextIndent > indent && nextTrimmed && !nextTrimmed.startsWith("-")) {
      const result = parseYamlObject(lines, i, nextIndent);
      array.push(result.value);
      i = result.nextIndex;
      continue;
    }
    if (nextIndent > indent && nextTrimmed.startsWith("-")) {
      const result = parseYamlArray(lines, i, nextIndent);
      array.push(result.value);
      i = result.nextIndex;
      continue;
    }
    array.push(null);
  }
  return { value: array, nextIndex: i };
}
function parseYamlValue(value) {
  const trimmed = value.trim();
  if (trimmed === "null" || trimmed === "~" || trimmed === "") {
    return null;
  }
  if (trimmed === "true" || trimmed === "yes" || trimmed === "on") {
    return true;
  }
  if (trimmed === "false" || trimmed === "no" || trimmed === "off") {
    return false;
  }
  if (/^-?\d+$/.test(trimmed)) {
    return parseInt(trimmed, 10);
  }
  if (/^-?\d+\.\d+$/.test(trimmed)) {
    return parseFloat(trimmed);
  }
  if (trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const content = trimmed.slice(1, -1);
    if (!content.trim()) return [];
    return content.split(",").map((item) => parseYamlValue(item));
  }
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    const content = trimmed.slice(1, -1);
    const obj = {};
    const pairs = content.split(",");
    for (const pair of pairs) {
      const [key, val] = pair.split(":").map((s) => s.trim());
      if (key) obj[key] = parseYamlValue(val || "");
    }
    return obj;
  }
  return trimmed;
}

const getItemData = (entryOrData) => entryOrData?.data ? entryOrData.data : entryOrData;
function isDraft(itemData) {
  return getItemData(itemData)?.draft === true;
}
function getItemProperty(itemData, metaData, itemKey, metaKey, defaultValue) {
  const item = getItemData(itemData);
  if (item?.[itemKey] !== void 0) {
    return item[itemKey];
  }
  if (metaData?.[metaKey] !== void 0) {
    return metaData[metaKey];
  }
  return defaultValue;
}
function shouldItemHavePageData(itemData, metaData, defaultValue = true) {
  if (isDraft(itemData)) return false;
  return getItemProperty(itemData, metaData, "hasPage", "itemsHasPage", defaultValue);
}
function shouldItemUseRootPathData(itemData, metaData, defaultValue = false) {
  return getItemProperty(itemData, metaData, "rootPath", "itemsRootPath", defaultValue);
}
function shouldCollectionHavePageMeta(metaData, defaultValue = true) {
  if (metaData?.hasPage === false) return false;
  return defaultValue;
}
function shouldProcessCollectionData(entries, metaData) {
  if (metaData?.itemsHasPage !== false) {
    return true;
  }
  return entries.some((entry) => {
    const data = getItemData(entry);
    return data?.hasPage === true && !isDraft(data);
  });
}

const MENU_ITEMS_JSON_PATH = "src/content/menu-items/menu-items.json";
const MENUS_COLLECTION = "menus";
const idRegistry$1 = new SimpleIdRegistry();
function resolveParentReference(parent, store) {
  if (!parent) return null;
  const candidates = Array.isArray(parent) ? parent : [parent];
  let fallback = null;
  const matchString = (value) => {
    if (!value) return null;
    if (store.has(value)) return value;
    const normalized = value.toLowerCase();
    const normalizedPath = normalized.startsWith("/") ? normalized.slice(1) : normalized;
    for (const [id, entry] of store.entries()) {
      const idMatch = id.toLowerCase() === normalized;
      const url = entry.data?.url;
      const normalizedUrl = typeof url === "string" ? url.toLowerCase() : null;
      const normalizedUrlPath = normalizedUrl?.startsWith("/") ? normalizedUrl.slice(1) : normalizedUrl;
      if (idMatch) return id;
      if (normalizedUrl && (normalizedUrl === normalized || normalizedUrlPath === normalizedPath)) {
        return id;
      }
    }
    return null;
  };
  for (const candidate of candidates) {
    if (!candidate) continue;
    if (typeof candidate === "object" && !Array.isArray(candidate)) {
      if (candidate.id) return String(candidate.id);
      if (candidate.slug) {
        const resolvedBySlug = matchString(String(candidate.slug));
        if (resolvedBySlug) return resolvedBySlug;
        if (!fallback) fallback = String(candidate.slug);
      }
      if (candidate.url) {
        const resolvedByUrl = matchString(String(candidate.url));
        if (resolvedByUrl) return resolvedByUrl;
        if (!fallback) fallback = String(candidate.url);
      }
    }
    if (typeof candidate === "string") {
      const resolved = matchString(candidate);
      if (resolved) return resolved;
      if (!fallback) fallback = candidate;
    }
  }
  return fallback;
}
function getAncestorChain(parentRef, store) {
  const ancestors = [];
  let current = parentRef;
  const visited = /* @__PURE__ */ new Set();
  while (current) {
    const resolvedId = resolveParentReference(current, store);
    const parentId = resolvedId ?? (typeof current === "string" ? current : current?.id || String(current));
    if (visited.has(parentId)) {
      console.warn(`Circular parent reference detected: ${parentId}`);
      break;
    }
    visited.add(parentId);
    ancestors.push(parentId);
    const parentEntry = store.get(parentId);
    if (!parentEntry?.data?.parent) break;
    current = parentEntry.data.parent;
  }
  return ancestors;
}
function buildSemanticId(baseId, context, store) {
  const parts = [baseId];
  if (context.parent) {
    const ancestors = getAncestorChain(context.parent, store);
    parts.push(...ancestors.reverse());
  }
  if (context.includeMenu && context.menu) {
    const menuId = typeof context.menu === "string" ? context.menu : Array.isArray(context.menu) ? context.menu[0]?.id || String(context.menu[0]) : context.menu.id || String(context.menu);
    parts.push(menuId);
  }
  return parts.join("-");
}
function getUniqueId(semanticId) {
  return idRegistry$1.getUniqueId(semanticId);
}
function normalizeMenuReference(menu) {
  if (!menu) return [];
  const normalizeOne = (m) => typeof m === "string" ? { collection: MENUS_COLLECTION, id: m } : m;
  return Array.isArray(menu) ? menu.map(normalizeOne) : [normalizeOne(menu)];
}
function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getCollectionMetaFromModules(collectionName, modules) {
  const metaPath = Object.keys(modules).find(
    (path) => path.includes(`/${collectionName}/_meta.mdx`)
  );
  if (metaPath) {
    const data = modules[metaPath].frontmatter ?? {};
    return {
      title: data.title ?? capitalize(collectionName),
      description: data.description,
      hasPage: data.hasPage ?? false,
      itemsHasPage: data.itemsHasPage ?? true,
      itemsRootPath: data.itemsRootPath ?? false,
      ...data
    };
  }
  return {
    title: capitalize(collectionName),
    hasPage: false,
    itemsHasPage: true,
    itemsRootPath: false
  };
}
function resolveAllParents(store, maxPasses = 5) {
  let passCount = 0;
  let changesInLastPass = 0;
  do {
    passCount++;
    changesInLastPass = 0;
    const updates = [];
    for (const [id, entry] of store.entries()) {
      const parent = entry.data.parent;
      if (!parent || typeof parent !== "string") continue;
      const resolved = resolveParentReference(parent, store);
      if (resolved && resolved !== parent) {
        updates.push({ id, resolvedParent: resolved });
        changesInLastPass++;
      }
    }
    for (const { id, resolvedParent } of updates) {
      const entry = store.get(id);
      if (entry) {
        store.set({
          id,
          data: { ...entry.data, parent: resolvedParent }
        });
      }
    }
  } while (changesInLastPass > 0 && passCount < maxPasses);
}
function MenuItemsLoader() {
  return {
    name: "menu-items-loader",
    async load(context) {
      const { store, logger } = context;
      idRegistry$1.clear();
      store.clear();
      await file(MENU_ITEMS_JSON_PATH).load(context);
      for (const [id] of store.entries()) {
        idRegistry$1.getUniqueId(id);
      }
      const frontmatterModules = {};
      function walkDir(dir) {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = join(dir, entry.name);
          if (entry.isDirectory()) {
            walkDir(fullPath);
          } else if (entry.isFile() && /\.(mdx?|md)$/.test(entry.name)) {
            try {
              const raw = readFileSync(fullPath, "utf-8");
              const frontmatter = parseFrontmatterFromString(raw);
              const relativePath = relative(process.cwd(), fullPath).replace(/\\/g, "/").replace("src/", "../../");
              frontmatterModules[relativePath] = { frontmatter };
            } catch (error) {
              logger.warn(`Failed to read ${fullPath}: ${error}`);
            }
          }
        }
      }
      walkDir(join(process.cwd(), "src/content"));
      await processCollectionMenus(frontmatterModules, store);
      resolveAllParents(store);
      await processItemMenus(frontmatterModules, store);
      resolveAllParents(store);
      logger.info(`Menu items loader: ${store.keys().length} items loaded`);
    }
  };
}
async function processItemMenus(modules, store) {
  for (const [path, mod] of Object.entries(modules)) {
    if (isMetaFile(path)) continue;
    const data = mod.frontmatter ?? {};
    if (!data.addToMenu) continue;
    const { slug, collection } = parseContentPath(path);
    const configs = ensureArray(data.addToMenu);
    for (let i = 0; i < configs.length; i++) {
      const menuConfig = configs[i];
      const menus = normalizeMenuReference(menuConfig.menu);
      const baseId = menuConfig.id || (configs.length > 1 && !menuConfig.parent ? `${slug}-${i}` : slug);
      const resolvedParent = resolveParentReference(menuConfig.parent, store);
      const semanticId = buildSemanticId(
        baseId,
        { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
        store
      );
      const itemId = getUniqueId(semanticId);
      const meta = getCollectionMetaFromModules(collection, modules);
      const useRootPath = shouldItemUseRootPathData(data, meta);
      const itemUrl = useRootPath ? `/${slug}` : `/${collection}/${slug}`;
      store.set({
        id: itemId,
        data: {
          title: menuConfig.title ?? data.title ?? capitalize(slug),
          description: menuConfig.description ?? data.description,
          url: itemUrl,
          menu: menus,
          parent: resolvedParent,
          openInNewTab: menuConfig.openInNewTab ?? false,
          order: data.order,
          tags: data.tags
        }
      });
    }
  }
}
async function processCollectionMenus(modules, store) {
  const metaModules = Object.entries(modules).filter(([path]) => isMetaFile(path));
  for (const [path, mod] of metaModules) {
    const data = mod.frontmatter ?? {};
    const collection = path.split("/").slice(-2)[0];
    if (!data.addToMenu && !data.itemsAddToMenu) continue;
    const meta = getCollectionMetaFromModules(collection, modules);
    if (data.addToMenu) {
      const configs = ensureArray(data.addToMenu);
      for (let i = 0; i < configs.length; i++) {
        const menuConfig = configs[i];
        const menus = normalizeMenuReference(menuConfig.menu);
        const baseId = menuConfig.id || (configs.length > 1 && !menuConfig.parent ? `${collection}-${i}` : collection);
        const resolvedParent = resolveParentReference(menuConfig.parent, store);
        const semanticId = buildSemanticId(
          baseId,
          { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
          store
        );
        const collectionId = getUniqueId(semanticId);
        const hasPage = meta.hasPage ?? false;
        const itemUrl = hasPage ? `/${collection}` : void 0;
        store.set({
          id: collectionId,
          data: {
            title: menuConfig.title ?? meta.title ?? capitalize(collection),
            description: menuConfig.description ?? meta.description,
            url: itemUrl,
            menu: menus,
            parent: resolvedParent,
            openInNewTab: menuConfig.openInNewTab ?? false,
            order: menuConfig.order
          }
        });
      }
    }
    if (data.itemsAddToMenu) {
      const configs = ensureArray(data.itemsAddToMenu);
      for (const menuConfig of configs) {
        const menus = normalizeMenuReference(menuConfig.menu);
        const attachTo = menuConfig.attachTo === void 0 || menuConfig.attachTo === true ? collection : menuConfig.attachTo;
        for (const [itemPath, itemMod] of Object.entries(modules)) {
          if (!itemPath.includes(`content/${collection}/`)) continue;
          if (isMetaFile(itemPath)) continue;
          const itemData = itemMod.frontmatter ?? {};
          const { slug } = parseContentPath(itemPath);
          const hasRenderablePage = shouldItemHavePageData(itemData, meta);
          const itemUrl = hasRenderablePage ? shouldItemUseRootPathData(itemData, meta) ? `/${slug}` : `/${collection}/${slug}` : void 0;
          let parent = attachTo;
          if (attachTo === collection && !store.has(collection)) {
            parent = null;
          }
          if (itemData.parent && menuConfig.respectHierarchy !== false) {
            parent = itemData.parent;
          }
          const resolvedParent = resolveParentReference(parent, store);
          const baseId = `${collection}-${slug}-auto`;
          const semanticId = buildSemanticId(
            baseId,
            { parent: resolvedParent, menu: menuConfig.menu, includeMenu: false },
            store
          );
          const menuItemId = getUniqueId(semanticId);
          store.set({
            id: menuItemId,
            data: {
              title: itemData.title ?? capitalize(slug),
              description: itemData.description,
              url: itemUrl,
              menu: menus,
              parent: resolvedParent,
              openInNewTab: menuConfig.openInNewTab ?? false,
              order: itemData.order
            }
          });
        }
      }
    }
  }
}

const collections = {
  // ── menus.json ─────────────────────────────────────────
  "menus": defineCollection({
    loader: file("src/content/menus/menus.json"),
    schema: MenuSchema
  }),
  // ── menu-items.json ─────────────────────────────────────
  "menu-items": defineCollection({
    loader: MenuItemsLoader(),
    schema: MenuItemFields
  }),
  "contact-us": defineCollection({
    loader: file("src/content/contact-us/contact-us.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      linkPrefix: z.string().optional()
    })
  }),
  "social-media": defineCollection({
    loader: file("src/content/social-media/socialmedia.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      link: z.string().optional()
    })
  }),
  // ── legal ───────────────────────────────────────────────
  "legal": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      effectiveDate: z.union([z.date(), z.string()]).optional().transform((val) => {
        if (!val) return void 0;
        if (val instanceof Date) return val;
        return new Date(val);
      })
    })
  }),
  "about-us": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  "blog": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      author: refSchema("authors"),
      tags: z.array(z.string()).default([]),
      readingTime: z.number().optional()
    })
  }),
  "authors": defineCollection({
    loader: file("src/content/authors/authors.json"),
    schema: ({ image }) => baseSchema({ image }).extend({
      email: z.string().email().optional(),
      social: z.object({
        twitter: z.string().url().optional(),
        github: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        website: z.string().url().optional()
      }).optional(),
      role: z.string().optional()
    })
  }),
  "testimonials": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      author: z.string(),
      role: z.string(),
      company: z.string().optional(),
      rating: z.number().min(1).max(5).default(5),
      featured: z.boolean().default(false)
    })
  }),
  "projects": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      client: z.string().optional(),
      projectUrl: z.string().url().optional(),
      technologies: z.array(z.string()).default([]),
      category: z.string().optional()
    })
  }),
  "faq": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      category: z.string().optional()
    })
  }),
  // ── solutions ─────────────────────────────────────────────
  "solutions": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      price: z.string().optional(),
      featured: z.boolean().optional(),
      features: z.array(
        z.union([
          z.string(),
          z.object({
            title: z.string(),
            description: z.string().optional()
          })
        ])
      ).default([]),
      benefits: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          icon: z.string().optional()
        })
      ).default([])
    })
  }),
  // ── capabilities ──────────────────────────────────────────
  "capabilities": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      features: z.array(z.string()).default([]),
      solutions: refSchema("solutions")
    })
  }),
  // ── industries ────────────────────────────────────────────
  "industries": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  // ── technologies ──────────────────────────────────────────
  "technologies": defineCollection({
    schema: ({ image }) => baseSchema({ image })
  }),
  // ── stats ──────────────────────────────────────────
  "stats": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      stat: z.string().optional(),
      statValue: z.number().optional(),
      statStart: z.number().optional(),
      statPrefix: z.string().optional(),
      statSuffix: z.string().optional(),
      statAnimate: z.boolean().optional(),
      icon: z.string().optional(),
      highlight: z.boolean().optional()
    })
  }),
  // ── benefits ──────────────────────────────────────────
  "benefits": defineCollection({
    schema: ({ image }) => baseSchema({ image }).extend({
      highlight: z.boolean().optional()
    })
  })
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  collections
}, Symbol.toStringTag, { value: 'Module' }));

function getItemKey(item) {
  if (!item) return "";
  if ("slug" in item && typeof item.slug === "string" && item.slug)
    return item.slug;
  if ("id" in item && typeof item.id === "string" && item.id) return item.id;
  return "";
}

const mdxModules = /* #__PURE__ */ Object.assign({"../../content/about-us/_meta.mdx": __vite_glob_0_0$1,"../../content/authors/_meta.mdx": __vite_glob_0_1,"../../content/benefits/_meta.mdx": __vite_glob_0_2$1,"../../content/blog/_meta.mdx": __vite_glob_0_3$1,"../../content/capabilities/_meta.mdx": __vite_glob_0_4$1,"../../content/contact-us/_meta.mdx": __vite_glob_0_5$1,"../../content/faq/_meta.mdx": __vite_glob_0_6$1,"../../content/industries/_meta.mdx": __vite_glob_0_7$1,"../../content/legal/_meta.mdx": __vite_glob_0_8$1,"../../content/menu-items/_meta.mdx": __vite_glob_0_9$1,"../../content/menus/_meta.mdx": __vite_glob_0_10$1,"../../content/projects/_meta.mdx": __vite_glob_0_11$1,"../../content/social-media/_meta.mdx": __vite_glob_0_12$1,"../../content/solutions/_meta.mdx": __vite_glob_0_13$1,"../../content/stats/_meta.mdx": __vite_glob_0_14$1,"../../content/technologies/_meta.mdx": __vite_glob_0_15$1,"../../content/testimonials/_meta.mdx": __vite_glob_0_16$1


});
function getCollectionMeta(collectionName) {
  const mdxKey = Object.keys(mdxModules).find(
    (k) => k.endsWith(`/${collectionName}/_meta.mdx`)
  );
  const data = mdxKey ? mdxModules[mdxKey].frontmatter ?? {} : {};
  const passthroughImage = () => z.string().optional();
  return metaSchema({ image: passthroughImage }).parse(data);
}

async function prepareEntry(entry, collection, meta) {
  const { shouldItemHavePage, shouldItemUseRootPath } = await Promise.resolve().then(() => index);
  const identifier = getItemKey(entry);
  const data = entry.data;
  const hasExistingUrl = data.url !== void 0;
  const hasPage = shouldItemHavePage(entry, meta);
  let itemUrl;
  if (!hasExistingUrl && hasPage) {
    const useRootPath = shouldItemUseRootPath(entry, meta);
    itemUrl = useRootPath ? `/${identifier}` : `/${collection}/${identifier}`;
  }
  let Content;
  const entryWithRender = entry;
  if (entryWithRender && typeof entryWithRender.render === "function") {
    try {
      const rendered = await entryWithRender.render();
      Content = rendered.Content;
    } catch (error) {
      console.warn(
        `Failed to render content for ${collection}/${identifier}:`,
        error
      );
    }
  }
  let content;
  if ("body" in entry) {
    content = entry.body;
  }
  return {
    ...data,
    slug: identifier,
    ...itemUrl && { url: itemUrl },
    ...Content && { Content },
    ...content && { content }
  };
}
async function prepareCollectionEntries(entries, collection, meta) {
  return Promise.all(
    entries.map((entry) => prepareEntry(entry, collection, meta))
  );
}

function getQueryKey(entry) {
  const key = getItemKey(entry);
  return normalizeId(key);
}
function normalizeId(id) {
  return id.replace(/\.(mdx?|json)$/i, "").trim();
}
async function safeGetEntry(collection, id) {
  try {
    const { getEntry } = await Promise.resolve().then(() => _astro_content);
    return await getEntry(collection, normalizeId(id));
  } catch {
    return void 0;
  }
}

const _graphCache = /* @__PURE__ */ new Map();
function getGraphCacheKey(options = {}) {
  const {
    collections,
    includeIndirect = true,
    maxIndirectDepth = 3
  } = options;
  const collKey = collections ? [...collections].sort().join(",") : "all";
  return [
    collKey,
    `indirect:${includeIndirect}`,
    includeIndirect ? `depth:${maxIndirectDepth}` : "depth:0"
  ].join("|");
}
async function getOrBuildGraph(options) {
  const cacheKey = getGraphCacheKey(options ?? {});
  if (options?.cache !== false) {
    const cached = _graphCache.get(cacheKey);
    if (cached) return cached;
  }
  const graph = await buildRelationshipGraph(options);
  if (options?.cache !== false) {
    _graphCache.set(cacheKey, graph);
  }
  return graph;
}
async function buildRelationshipGraph(options = {}) {
  const { getCollection } = await Promise.resolve().then(() => _astro_content);
  const { extractRelationConfig, normalizeReference, isParentField } = await import('./schema_CObCVgh-.mjs');
  const { collections } = await Promise.resolve().then(() => config);
  const allCollections = Object.keys(collections);
  const {
    collections: requestedCollections = allCollections,
    includeIndirect = true,
    maxIndirectDepth = 3
  } = options;
  const graph = {
    nodes: /* @__PURE__ */ new Map(),
    indexes: {
      byCollection: /* @__PURE__ */ new Map(),
      byParent: /* @__PURE__ */ new Map(),
      byReference: /* @__PURE__ */ new Map()
    },
    collections: requestedCollections,
    totalEntries: 0
  };
  const verbose = options.verbose ?? false;
  if (verbose) console.log("📊 Building relationship graph...");
  await loadAllEntries(graph, requestedCollections, getCollection);
  if (verbose) console.log("🔗 Mapping direct references...");
  await buildDirectReferences(
    graph,
    extractRelationConfig,
    normalizeReference,
    isParentField
  );
  if (verbose) console.log("🌲 Building hierarchy...");
  await buildHierarchy(graph, normalizeReference);
  if (includeIndirect) {
    if (verbose) console.log("🔄 Finding indirect relations...");
    await buildIndirectRelations(graph, maxIndirectDepth);
  }
  if (verbose) {
    console.log(
      `✅ Graph built: ${graph.totalEntries} entries, ${graph.collections.length} collections`
    );
  }
  return graph;
}
async function loadAllEntries(graph, collections, getCollection) {
  for (const collection of collections) {
    const entries = await getCollection(collection);
    const collectionMap = /* @__PURE__ */ new Map();
    const idSet = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const id = getQueryKey(entry);
      const relationMap = {
        entry,
        references: [],
        referencedBy: [],
        parent: void 0,
        parents: [],
        children: [],
        siblings: [],
        ancestors: [],
        descendants: [],
        indirect: [],
        depth: 0,
        hasChildren: false,
        isRoot: true,
        isLeaf: true
      };
      collectionMap.set(id, relationMap);
      idSet.add(id);
      graph.totalEntries++;
    }
    graph.nodes.set(collection, collectionMap);
    graph.indexes.byCollection.set(collection, idSet);
  }
}
async function buildDirectReferences(graph, extractRelationConfig, normalizeReference, isParentField) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const entry = relationMap.entry;
      const data = entry.data;
      const relationConfigs = extractRelationConfig(data);
      for (const config of relationConfigs) {
        if (isParentField(config.field)) continue;
        const refs = normalizeReference(data[config.field]);
        for (const ref of refs) {
          const refId = normalizeId(ref.id);
          relationMap.references.push({
            type: "reference",
            collection: ref.collection,
            id: refId,
            field: config.field
          });
          const targetMap = graph.nodes.get(ref.collection)?.get(refId);
          if (targetMap) {
            targetMap.referencedBy.push({
              type: "referenced-by",
              collection,
              id,
              field: config.field
            });
          }
          const refKey = getEntryKey(ref.collection, refId);
          const entryKey = getEntryKey(collection, id);
          if (!graph.indexes.byReference.has(refKey)) {
            graph.indexes.byReference.set(refKey, /* @__PURE__ */ new Set());
          }
          graph.indexes.byReference.get(refKey).add(entryKey);
        }
      }
    }
  }
}
async function buildHierarchy(graph, normalizeReference) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const data = relationMap.entry.data;
      const parentRefs = normalizeReference(data.parent);
      for (const parentRef of parentRefs) {
        if (parentRef.collection !== collection) continue;
        const parentId = normalizeId(parentRef.id);
        const parentMap = collectionMap.get(parentId);
        if (!parentMap) continue;
        const parentRelation = {
          type: "parent",
          collection,
          id: parentId
        };
        const hasParentAlready = relationMap.parents.some(
          (rel) => rel.collection === parentRelation.collection && rel.id === parentRelation.id
        );
        if (!hasParentAlready) {
          relationMap.parents.push(parentRelation);
        }
        if (!relationMap.parent) {
          relationMap.parent = parentRelation;
          relationMap.isRoot = false;
        }
        parentMap.children.push({
          type: "child",
          collection,
          id
        });
        parentMap.hasChildren = true;
        parentMap.isLeaf = false;
        const parentKey = getEntryKey(collection, parentId);
        if (!graph.indexes.byParent.has(parentKey)) {
          graph.indexes.byParent.set(parentKey, /* @__PURE__ */ new Set());
        }
        graph.indexes.byParent.get(parentKey).add(id);
      }
    }
  }
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      calculateAncestors(relationMap, collectionMap);
      calculateDescendants(relationMap, collectionMap);
      if (relationMap.parents.length > 0) {
        const siblingSet = /* @__PURE__ */ new Map();
        for (const parentRel of relationMap.parents) {
          const parentMap = collectionMap.get(parentRel.id);
          if (!parentMap) continue;
          for (const child of parentMap.children) {
            if (child.id === id) continue;
            const key = `${child.collection}:${child.id}`;
            if (!siblingSet.has(key)) {
              siblingSet.set(key, child);
            }
          }
        }
        relationMap.siblings = Array.from(siblingSet.values());
      }
    }
  }
}
function calculateAncestors(relationMap, collectionMap) {
  const ancestors = [];
  const visited = /* @__PURE__ */ new Set();
  const queue = relationMap.parents.map((rel) => ({ rel, depth: 1 }));
  let minDepth = relationMap.parents.length === 0 ? 0 : Infinity;
  while (queue.length > 0) {
    const { rel, depth } = queue.shift();
    const key = `${rel.collection}:${rel.id}`;
    if (visited.has(key)) continue;
    visited.add(key);
    ancestors.push({
      ...rel,
      type: "ancestor",
      depth
    });
    const parentMap = collectionMap.get(rel.id);
    if (parentMap && parentMap.parents.length > 0) {
      for (const parentRel of parentMap.parents) {
        queue.push({ rel: parentRel, depth: depth + 1 });
      }
    } else {
      minDepth = Math.min(minDepth, depth);
    }
  }
  relationMap.ancestors = ancestors;
  relationMap.depth = minDepth === Infinity ? 0 : minDepth;
  relationMap.isRoot = relationMap.parents.length === 0;
}
function calculateDescendants(relationMap, collectionMap) {
  const descendants = [];
  const visited = /* @__PURE__ */ new Set();
  function traverse(childIds, depth) {
    for (const child of childIds) {
      const key = `${child.collection}:${child.id}`;
      if (visited.has(key)) continue;
      visited.add(key);
      descendants.push({
        ...child,
        type: "descendant",
        depth
      });
      const childMap = collectionMap.get(child.id);
      if (childMap && childMap.children.length > 0) {
        traverse(childMap.children, depth + 1);
      }
    }
  }
  traverse(relationMap.children, 1);
  relationMap.descendants = descendants;
}
async function buildIndirectRelations(graph, maxDepth) {
  for (const [collection, collectionMap] of graph.nodes) {
    for (const [id, relationMap] of collectionMap) {
      const entryKey = getEntryKey(collection, id);
      const visited = /* @__PURE__ */ new Set([entryKey]);
      const indirect = [];
      const queue = [];
      for (const ref of relationMap.references) {
        const refKey = getEntryKey(ref.collection, ref.id);
        queue.push({
          key: refKey,
          path: [collection, ref.collection],
          depth: 1
        });
      }
      while (queue.length > 0) {
        const { key, path, depth } = queue.shift();
        if (depth >= maxDepth) continue;
        if (visited.has(key)) continue;
        visited.add(key);
        const { collection: currentColl, id: currentId } = parseEntryKey(key);
        const currentMap = graph.nodes.get(currentColl)?.get(currentId);
        if (!currentMap) continue;
        if (depth > 1) {
          indirect.push({
            type: "indirect",
            collection: currentColl,
            id: currentId,
            depth,
            path
          });
        }
        for (const ref of currentMap.references) {
          const refKey = getEntryKey(ref.collection, ref.id);
          if (!visited.has(refKey)) {
            queue.push({
              key: refKey,
              path: [...path, ref.collection],
              depth: depth + 1
            });
          }
        }
      }
      relationMap.indirect = indirect;
    }
  }
}
function getRelationMap(graph, collection, id) {
  const cleanId = normalizeId(id);
  return graph.nodes.get(collection)?.get(cleanId);
}

async function getRelations(collection, id, types) {
  const cleanId = normalizeId(id);
  const graph = await getOrBuildGraph();
  let relationMap = getRelationMap(graph, collection, cleanId);
  if (!relationMap) {
    const freshGraph = await getOrBuildGraph({ cache: false });
    relationMap = getRelationMap(freshGraph, collection, cleanId);
  }
  if (!relationMap) {
    const fallbackEntry = await safeGetEntry(collection, cleanId);
    const entry = fallbackEntry ?? { id: cleanId, collection, data: {} };
    return {
      entry,
      references: [],
      referencedBy: [],
      parent: void 0,
      parents: [],
      children: [],
      siblings: [],
      ancestors: [],
      descendants: [],
      indirect: [],
      depth: 0,
      hasChildren: false,
      isRoot: true,
      isLeaf: true
    };
  }
  return relationMap;
}

function whereNoParent(field = "parent") {
  return (entry) => {
    const data = entry.data;
    const parent = data[field];
    if (Array.isArray(parent)) {
      return parent.length === 0;
    }
    return !parent;
  };
}
function applyFilters(entries, filters) {
  const filterArray = Array.isArray(filters) ? filters : [filters];
  return entries.filter((entry) => {
    return filterArray.every((filter) => filter(entry));
  });
}

function sortBy(field, direction = "asc") {
  return (a, b) => {
    const aData = a.data;
    const bData = b.data;
    const aValue = aData[field];
    const bValue = bData[field];
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return direction === "asc" ? 1 : -1;
    if (bValue == null) return direction === "asc" ? -1 : 1;
    let result = 0;
    if (typeof aValue === "string" && typeof bValue === "string") {
      result = aValue.localeCompare(bValue);
    } else if (aValue instanceof Date && bValue instanceof Date) {
      result = aValue.getTime() - bValue.getTime();
    } else {
      result = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }
    return direction === "asc" ? result : -result;
  };
}
function sortByOrder(direction = "asc") {
  return sortBy("order", direction);
}
function sortByMultiple(...sortFns) {
  return (a, b) => {
    for (const sortFn of sortFns) {
      const result = sortFn(a, b);
      if (result !== 0) return result;
    }
    return 0;
  };
}
function createSortFn(config) {
  return sortBy(config.field, config.direction);
}
function applySorting(entries, sort) {
  if (!sort || Array.isArray(sort) && sort.length === 0) {
    return entries;
  }
  if (typeof sort === "function") {
    return [...entries].sort(sort);
  }
  if (Array.isArray(sort)) {
    if (sort.length > 0 && typeof sort[0] === "object" && "field" in sort[0]) {
      const sortFns = sort.map((config) => createSortFn(config));
      return [...entries].sort(sortByMultiple(...sortFns));
    }
    const hasMixed = sort.some((s) => typeof s === "object" && "field" in s);
    if (hasMixed) {
      const sortFns = sort.map(
        (s) => typeof s === "function" ? s : createSortFn(s)
      );
      return [...entries].sort(sortByMultiple(...sortFns));
    }
    return [...entries].sort(sortByMultiple(...sort));
  }
  return entries;
}

class Query {
  _collection;
  _filters = [];
  _sorts = [];
  _limit;
  _offset = 0;
  _includeRelations = false;
  _maxDepth = 3;
  constructor(collection) {
    this._collection = collection;
  }
  /**
   * Set collection(s) to query
   */
  from(collection) {
    this._collection = collection;
    return this;
  }
  /**
   * Add filter condition
   */
  where(filter) {
    this._filters.push(filter);
    return this;
  }
  /**
   * Add multiple filters (AND logic)
   */
  whereAll(...filters) {
    this._filters.push(...filters);
    return this;
  }
  /**
   * Sort results
   */
  orderBy(sort) {
    this._sorts.push(sort);
    return this;
  }
  /**
   * Limit number of results
   */
  limit(limit) {
    this._limit = limit;
    return this;
  }
  /**
   * Skip number of results
   */
  offset(offset) {
    this._offset = offset;
    return this;
  }
  /**
   * Include relation data in results
   */
  withRelations(include = true, maxDepth) {
    this._includeRelations = include;
    if (maxDepth !== void 0) {
      this._maxDepth = maxDepth;
    }
    return this;
  }
  /**
   * Execute query and return results
   */
  async get() {
    const { getCollection } = await Promise.resolve().then(() => _astro_content);
    if (!this._collection) {
      throw new Error("Collection not specified");
    }
    let entries;
    if (Array.isArray(this._collection)) {
      entries = [];
      for (const coll of this._collection) {
        const collEntries = await getCollection(coll);
        entries.push(...collEntries);
      }
    } else {
      entries = await getCollection(this._collection);
    }
    if (this._filters.length > 0) {
      entries = applyFilters(entries, this._filters);
    }
    const total = entries.length;
    if (this._sorts.length > 0) {
      entries = applySorting(entries, this._sorts);
    }
    const start = this._offset;
    const end = this._limit ? start + this._limit : entries.length;
    const paginatedEntries = entries.slice(start, end);
    const result = {
      entries: paginatedEntries,
      total
    };
    if (this._limit) {
      const pageSize = this._limit;
      const page = Math.floor(this._offset / pageSize) + 1;
      result.page = page;
      result.pageSize = pageSize;
      result.hasNext = end < entries.length;
      result.hasPrev = this._offset > 0;
    }
    if (this._includeRelations) {
      result.relations = /* @__PURE__ */ new Map();
      for (const entry of paginatedEntries) {
        const collection = entry.collection;
        const id = entry.id;
        const relations = await getRelations(collection, id);
        result.relations.set(`${collection}:${id}`, relations);
      }
    }
    return result;
  }
  /**
   * Get first result
   */
  async first() {
    const working = this.clone();
    const result = await working.limit(1).get();
    return result.entries[0];
  }
  /**
   * Get all results (no pagination)
   */
  async all() {
    const working = this.clone();
    working._limit = void 0;
    working._offset = 0;
    const result = await working.get();
    return result.entries;
  }
  /**
   * Count results (without fetching)
   */
  async count() {
    const working = this.clone();
    const result = await working.get();
    return result.total;
  }
  /**
   * Get collection name (for introspection)
   */
  getCollectionName() {
    return this._collection ?? null;
  }
  /**
   * Internal helper to clone query state so terminal operations
   * don't mutate the original builder
   */
  clone() {
    const q = new Query(this._collection);
    q._filters = [...this._filters];
    q._sorts = [...this._sorts];
    q._limit = this._limit;
    q._offset = this._offset;
    q._includeRelations = this._includeRelations;
    q._maxDepth = this._maxDepth;
    return q;
  }
}
function query(collection) {
  return new Query(collection);
}
async function find(collection, id) {
  const { getCollection } = await Promise.resolve().then(() => _astro_content);
  const entries = await getCollection(collection);
  return entries.find((e) => e.id === id);
}

const roots = (collection) => query(collection).where(whereNoParent()).orderBy(sortByOrder());
const matchesRef = (fieldValue, targetNormalized) => {
  if (!fieldValue) return false;
  if (Array.isArray(fieldValue)) {
    return fieldValue.some((ref) => {
      const id2 = typeof ref === "string" ? ref : ref?.id || ref?.slug || "";
      return normalizeId(id2) === targetNormalized;
    });
  }
  const id = typeof fieldValue === "string" ? fieldValue : fieldValue?.id || fieldValue?.slug || "";
  return normalizeId(id) === targetNormalized;
};
const related = (collection, field, targetId) => {
  const targetNormalized = normalizeId(targetId);
  return query(collection).where((entry) => matchesRef(entry.data[field], targetNormalized)).orderBy(sortByOrder());
};

const $$Astro$A = createAstro("https://https://griffinswebservices.com");
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { title, url, description, date, tags, author } = Astro2.props;
  let authorData = null;
  if (isCollectionReference(author)) {
    const authorEntry = await find(author.collection, author.id);
    if (authorEntry) {
      authorData = authorEntry.data;
    }
  }
  const authorName = authorData?.title || authorData?.name || "";
  const authorRole = authorData?.role || "";
  const authorInitials = authorData?.initials || (authorName ? authorName.split(" ").map((w) => w[0]).join("").toUpperCase() : "??");
  return renderTemplate`${maybeRenderHead()}<article class="bg-bg rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" data-astro-cid-mo6k6a4v> <div class="p-6" data-astro-cid-mo6k6a4v>  <div class="mb-4" data-astro-cid-mo6k6a4v>  ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-3" data-astro-cid-mo6k6a4v> ${tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded" data-astro-cid-mo6k6a4v> ${tag} </span>`)} </div>`}  <h3 class="text-2xl font-bold mb-2" data-astro-cid-mo6k6a4v> ${url ? renderTemplate`<a${addAttribute(url, "href")} class="text-heading hover:text-primary transition-colors" data-astro-cid-mo6k6a4v> ${title} </a>` : renderTemplate`<span class="text-heading" data-astro-cid-mo6k6a4v>${title}</span>`} </h3>  ${description && renderTemplate`<p class="text-text mb-4 line-clamp-2" data-astro-cid-mo6k6a4v>${description}</p>`}  <div class="flex items-center text-sm text-text gap-4" data-astro-cid-mo6k6a4v> ${date && renderTemplate`<time data-astro-cid-mo6k6a4v>${new Date(date).toLocaleDateString()}</time>`} </div> </div>  ${authorName && renderTemplate`<div class="pt-4 mt-4 border-t border-surface" data-astro-cid-mo6k6a4v> <div class="flex items-center gap-3" data-astro-cid-mo6k6a4v>  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-mo6k6a4v> <span class="text-primary text-sm font-bold" data-astro-cid-mo6k6a4v> ${authorInitials} </span> </div> <div data-astro-cid-mo6k6a4v> <p class="font-medium text-heading" data-astro-cid-mo6k6a4v>${authorName}</p> ${authorRole && renderTemplate`<p class="text-xs text-text" data-astro-cid-mo6k6a4v>${authorRole}</p>`} </div> </div> </div>`} </div> </article> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/ArticleCard.astro", void 0);

const $$Astro$z = createAstro("https://https://griffinswebservices.com");
const $$BlogVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$BlogVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} gap-8 list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "ArticleCard", $$ArticleCard, { ...item })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12 text-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro", void 0);

const $$file$l = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/BlogVariant.astro";
const $$url$l = undefined;

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogVariant,
  file: $$file$l,
  url: $$url$l
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$y = createAstro("https://https://griffinswebservices.com");
const $$CardVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$CardVariant;
  const {
    items = [],
    title,
    description,
    className = "outer-section bg-bg",
    columns = 3,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    card,
    heading: headingValue,
    ctaInlineOnDesktop = false
  } = Astro2.props;
  const safeItems = toArray(items);
  const normalizeCardProps = (overrides) => {
    if (!overrides) return void 0;
    const { listItem, listItemProps, ...rest } = overrides;
    const mergedListItemProps = {
      ...listItemProps ?? {},
      ...listItem ?? {}
    };
    return {
      ...rest,
      ...Object.keys(mergedListItemProps).length > 0 ? { listItemProps: mergedListItemProps } : {}
    };
  };
  const featureCardPropOverrides = normalizeCardProps(card);
  const resolveCardClassName = (item) => {
    if (!item || typeof item !== "object") return "";
    const record = item;
    const classes = [record.class, record.className].filter(
      (value) => typeof value === "string" && value.trim().length > 0
    );
    return classes.join(" ");
  };
  const resolveRingDuration = (item) => {
    if (!item || typeof item !== "object") return 800;
    const record = item;
    return typeof record?.ringDuration === "number" ? record.ringDuration : 800;
  };
  const normalizedHeading = headingValue ?? title;
  const isSegmentedHeading = typeof normalizedHeading === "object" && normalizedHeading !== null;
  const headingString = typeof normalizedHeading === "string" ? normalizedHeading : isSegmentedHeading ? normalizedHeading.text ?? "" : void 0;
  const segmentedHeading = isSegmentedHeading ? normalizedHeading : void 0;
  const resolvedHeading = headingString ?? (segmentedHeading ? segmentedHeading.text : void 0);
  const headingPayload = segmentedHeading ?? resolvedHeading;
  const showHeader = Boolean(title || headingPayload || description);
  const gridMarginClass = showHeader ? "mt-12" : "";
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class="inner-section"> ${showHeader && renderTemplate`<div${addAttribute(
    ctaInlineOnDesktop && showCTA ? "flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between" : "",
    "class"
  )}> <div${addAttribute(ctaInlineOnDesktop && showCTA ? "lg:flex-1" : "heading-padding", "class")}> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingPayload, "description": description, "className": ctaInlineOnDesktop && showCTA ? "text-section lg:text-left" : void 0, "descriptionClassName": ctaInlineOnDesktop && showCTA ? "large-text lg:text-left" : void 0 })} </div> ${ctaInlineOnDesktop && showCTA && renderTemplate`<div class="hidden lg:flex items-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div>`} ${renderComponent($$result, "CardRenderer", $$CardRenderer, { "items": safeItems, "columns": columns, "className": gridMarginClass, "getCardClassName": resolveCardClassName, "getRingDuration": resolveRingDuration, "featureCardProps": featureCardPropOverrides })} ${showCTA && renderTemplate`<div${addAttribute(`buttons-section-center ${ctaInlineOnDesktop ? "lg:hidden" : ""}`.trim(), "class")}> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro", void 0);

const $$file$k = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/CardVariant.astro";
const $$url$k = undefined;

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CardVariant,
  file: $$file$k,
  url: $$url$k
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$x = createAstro("https://https://griffinswebservices.com");
const $$ChecklistVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$ChecklistVariant;
  const {
    items = [],
    title,
    description,
    className = "outer-section bg-bg",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    heading: headingValue
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };
  const normalizedHeading = headingValue ?? title;
  const isSegmentedHeading = typeof normalizedHeading === "object" && normalizedHeading !== null;
  const headingString = typeof normalizedHeading === "string" ? normalizedHeading : isSegmentedHeading ? normalizedHeading.text ?? "" : void 0;
  const segmentedHeading = isSegmentedHeading ? normalizedHeading : void 0;
  const headingPayload = segmentedHeading ?? headingString;
  const showHeader = Boolean(title || headingPayload || description);
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingPayload, "description": description, "className": "text-section" })}`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} gap-5 mt-8 list-none`, "class")}> ${safeItems.map((item) => {
    const itemIcon = item.icon || item.data?.icon || "lu:check";
    return renderTemplate`<li> ${renderComponent($$result, "IconListItem", IconListItem, { "client:visible": true, "data": {
      icon: itemIcon,
      title: item.title,
      description: item.description
    }, "layout": "horizontal", "alignment": "left", "iconClassName": "icon-small card-icon-color", "iconSize": "sm", "titleTag": "span", "titleClassName": "font-medium text-heading", "descriptionClassName": "text-sm text-muted mt-1", "descriptionTag": "span", "className": "gap-4 items-start", "containerClassName": "flex flex-col", "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/IconListItem", "client:component-export": "default" })} </li>`;
  })} </ul>`} ${showCTA && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ChecklistVariant.astro", void 0);

const $$file$j = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ChecklistVariant.astro";
const $$url$j = undefined;

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChecklistVariant,
  file: $$file$j,
  url: $$url$j
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$w = createAstro("https://https://griffinswebservices.com");
const $$ComparisonVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$ComparisonVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    showButtonSection = true,
    heading: headingValue,
    leftTitle = "This is for you if...",
    rightTitle = "This is NOT for you if...",
    leftItems = [],
    rightItems = [],
    ctaHref,
    ctaText
  } = Astro2.props;
  const showHeader = Boolean(title || headingValue || description);
  const safeLeftItems = toArray(leftItems);
  const safeRightItems = toArray(rightItems);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingValue, "description": description })}`} <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">  <div class="rounded-3xl border border-accent/30 bg-accent/5 p-6 lg:p-8"> <div class="flex items-center gap-3 mb-6"> <span class="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent text-xl font-bold">
✓
</span> <h3 class="text-xl font-semibold text-heading">${leftTitle}</h3> </div> ${safeLeftItems.length > 0 && renderTemplate`<ul class="space-y-4"> ${safeLeftItems.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent text-xs font-bold mt-0.5">
✓
</span> <div> ${item.title && renderTemplate`<p class="text-heading font-medium">${item.title}</p>`} ${item.description && renderTemplate`<p class="text-muted text-sm mt-0.5">${item.description}</p>`} </div> </li>`)} </ul>`} </div>  <div class="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 lg:p-8"> <div class="flex items-center gap-3 mb-6"> <span class="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-red-400 text-xl font-bold">
✕
</span> <h3 class="text-xl font-semibold text-heading">${rightTitle}</h3> </div> ${safeRightItems.length > 0 && renderTemplate`<ul class="space-y-4"> ${safeRightItems.map((item) => renderTemplate`<li class="flex items-start gap-3"> <span class="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold mt-0.5">
✕
</span> <div> ${item.title && renderTemplate`<p class="text-heading font-medium">${item.title}</p>`} ${item.description && renderTemplate`<p class="text-muted text-sm mt-0.5">${item.description}</p>`} </div> </li>`)} </ul>`} </div> </div> ${showButtonSection && ctaHref && ctaText && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ComparisonVariant.astro", void 0);

const $$file$i = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ComparisonVariant.astro";
const $$url$i = undefined;

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComparisonVariant,
  file: $$file$i,
  url: $$url$i
}, Symbol.toStringTag, { value: 'Module' }));

function DividerHeading({
  title,
  description,
  tag = "h2",
  showDivider = true,
  className = "",
  headingClassName = "h4 text-heading",
  descriptionClassName = "text-text max-w-3xl",
  dividerClassName = "inline-flex h-1 rounded-full primary-gradient w-20"
}) {
  if (!title && !description) return null;
  const gapClass = showDivider || description ? "gap-3" : "gap-2";
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${gapClass} ${className}`.trim(), children: [
    title && createElement(
      tag,
      { className: headingClassName },
      title
    ),
    showDivider && /* @__PURE__ */ jsx(
      "span",
      {
        className: dividerClassName,
        "aria-hidden": "true"
      }
    ),
    description && /* @__PURE__ */ jsx("p", { className: descriptionClassName, children: description })
  ] });
}

function extractData(item) {
  if (!item) return {};
  if (item.data) return { ...item.data, id: item.id ?? item.data.id };
  return item;
}
function normalizeContactLinks(items) {
  return items.map((item) => {
    const data = extractData(item);
    const id = String(data.id ?? item?.id ?? "contact");
    const rawTitle = String(data.title ?? "");
    const linkPrefix = data.linkPrefix ?? "";
    const tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [];
    const displayTitle = isPhoneContactId(id) ? formatPhoneNumber(rawTitle) : rawTitle;
    const url = data.url ?? (linkPrefix ? `${linkPrefix}${rawTitle}` : void 0);
    return {
      id,
      title: rawTitle,
      displayTitle,
      url,
      linkPrefix,
      tags,
      description: data.description,
      icon: data.icon
    };
  }).filter((link) => !!link.title);
}
const PHONE_CONTACT_IDS = /* @__PURE__ */ new Set(["phone"]);
const isPhoneContactId = (id) => id ? PHONE_CONTACT_IDS.has(id.toLowerCase()) : false;

const $$Astro$v = createAstro("https://https://griffinswebservices.com");
const $$ContactListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ContactListVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    showHeadingDivider = false,
    showHeadingSection = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const contactLinks = normalizeContactLinks(safeItems);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${showHeadingSection && (title || description) && renderTemplate`${renderComponent($$result, "DividerHeading", DividerHeading, { "title": title, "showDivider": showHeadingDivider, "className": "mb-4", "headingClassName": "h4 text-heading" })}`} ${contactLinks.length > 0 && renderTemplate`<ul class="flex flex-col gap-3 list-none"> ${contactLinks.map((link) => {
    const href = link.url;
    const displayValue = link.displayTitle || link.title;
    const supportingText = link.description;
    const iconName = link.icon;
    return renderTemplate`<li class="py-2"${addAttribute(link.id, "data-contact-id")}> ${href ? renderTemplate`<a${addAttribute(href, "href")} class="flex items-center gap-3 group hover:text-primary transition-colors"> <span class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-bg transition-colors"> ${renderComponent($$result, "Icon", Icon, { "icon": iconName, "size": "md", "className": "w-5 h-5" })} </span> <span class="flex flex-col"> <span class="text-heading font-semibold"> ${displayValue} </span> ${supportingText && renderTemplate`<span class="text-sm text-text/70 uppercase tracking-wide"> ${supportingText} </span>`} </span> </a>` : renderTemplate`<div class="flex items-center gap-3"> <span class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result, "Icon", Icon, { "icon": iconName, "size": "md", "className": "w-5 h-5" })} </span> <div class="flex flex-col"> <span class="text-heading font-semibold"> ${displayValue} </span> ${supportingText && renderTemplate`<span class="text-sm text-text/70 uppercase tracking-wide"> ${supportingText} </span>`} </div> </div>`} </li>`;
  })} </ul>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactListVariant.astro", void 0);

const $$file$h = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactListVariant.astro";
const $$url$h = undefined;

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactListVariant,
  file: $$file$h,
  url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$u = createAstro("https://https://griffinswebservices.com");
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { title, linkPrefix, tags, description, icon } = Astro2.props;
  const defaultIcon = tags?.includes("phone") ? "lu:phone" : tags?.includes("email") ? "lu:mail" : "lu:contact";
  const displayIcon = icon || defaultIcon;
  const href = linkPrefix ? `${linkPrefix}${title}` : void 0;
  return renderTemplate`${maybeRenderHead()}<div class="bg-bg rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"> <div class="flex items-start gap-4">  <div class="flex-shrink-0"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> ${renderComponent($$result, "Icon", Icon, { "icon": displayIcon, "size": "md", "className": "text-primary" })} </div> </div>  <div class="flex-1">  ${href ? renderTemplate`<a${addAttribute(href, "href")} class="text-lg font-semibold text-heading hover:text-primary transition-colors block"> ${title} </a>` : renderTemplate`<p class="text-lg font-semibold text-heading">${title}</p>`}  ${description && renderTemplate`<p class="text-text mt-1">${description}</p>`} </div> </div> </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/ContactCard.astro", void 0);

const messageStyles = {
  success: "bg-green-50 text-green-800 border border-green-200",
  error: "bg-red-50 text-red-800 border border-red-200",
  loading: "bg-primary/10 text-primary border border-primary-200"
};
const messageIcons = {
  success: "✓",
  error: "⚠️",
  loading: ""
};
function FormMessage({
  type,
  children,
  onDismiss
}) {
  if (type === "loading") {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-center p-4 mb-4",
        role: "status",
        "aria-live": "polite",
        children: [
          /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-MainDark" }),
          /* @__PURE__ */ jsx("span", { className: "ml-3 text-text", children })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `p-4 rounded-lg mb-4 ${messageStyles[type]}`,
      role: "alert",
      "aria-live": "polite",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0", "aria-hidden": "true", children: messageIcons[type] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children })
        ] }),
        onDismiss && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "flex-shrink-0 ml-4 text-current opacity-50 hover:opacity-100 transition-opacity",
            "aria-label": "Dismiss message",
            children: "✕"
          }
        )
      ] })
    }
  );
}

function SuccessMessage({ children, onDismiss }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "success", onDismiss, children });
}

function ErrorMessage({ children, onDismiss }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "error", onDismiss, children });
}

function LoadingMessage({ children }) {
  return /* @__PURE__ */ jsx(FormMessage, { type: "loading", children });
}

const FormContext = createContext(null);

function FormWrapper({
  children,
  onSubmit,
  successMessage = "Form submitted successfully!",
  errorMessage = "An error occurred. Please try again.",
  loadingMessage = "Submitting your form...",
  resetOnSuccess = false,
  className = "",
  onSuccess,
  onError
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const childrenArray = Children.toArray(children);
  const formSteps = childrenArray.filter(
    (child) => isValidElement(child) && child.type.displayName === "FormStep"
  );
  const isMultiStep = formSteps.length > 0;
  const totalSteps = isMultiStep ? formSteps.length : 1;
  const goToStep = (stepIndex) => {
    if (!isMultiStep) return;
    setCurrentStep((prev) => {
      if (Number.isNaN(stepIndex)) return prev;
      return Math.max(0, Math.min(totalSteps - 1, stepIndex));
    });
  };
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    try {
      setIsSubmitting(true);
      setStatus("submitting");
      setMessage(null);
      const data = {};
      formData.forEach((value, key) => {
        const values = formData.getAll(key);
        if (values.length > 1) {
          data[key] = values;
        } else if (form.querySelector(`[name="${key}"][type="checkbox"]`)) {
          data[key] = value === "on";
        } else {
          data[key] = value;
        }
      });
      await onSubmit(data);
      setStatus("success");
      setMessage(successMessage);
      if (resetOnSuccess) {
        form.reset();
        setCurrentStep(0);
      }
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      const errMsg = err instanceof Error ? err.message : errorMessage;
      setMessage(errMsg);
      onError?.(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };
  const dismissMessage = () => {
    setMessage(null);
    setStatus("idle");
  };
  const renderContent = () => {
    if (isMultiStep) {
      return formSteps[currentStep];
    }
    return children;
  };
  const contextValue = useMemo(
    () => ({
      isMultiStep,
      currentStep,
      totalSteps,
      isFirstStep: currentStep === 0,
      isLastStep: currentStep === totalSteps - 1,
      isSubmitting,
      nextStep,
      previousStep,
      goToStep
    }),
    [currentStep, isSubmitting, isMultiStep, totalSteps]
  );
  return /* @__PURE__ */ jsx(FormContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className, noValidate: false, children: [
    status === "submitting" && /* @__PURE__ */ jsx(LoadingMessage, { children: loadingMessage }),
    status === "success" && message && /* @__PURE__ */ jsx(SuccessMessage, { onDismiss: dismissMessage, children: message }),
    status === "error" && message && /* @__PURE__ */ jsx(ErrorMessage, { onDismiss: dismissMessage, children: message }),
    renderContent(),
    isMultiStep && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-6 pt-6 border-t", children: [
      currentStep > 0 ? /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: previousStep,
          disabled: isSubmitting,
          className: "px-6 py-2 border border-surface rounded-lg text-text hover:bg-text/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Previous"
        }
      ) : /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-text", children: [
        "Step ",
        currentStep + 1,
        " of ",
        totalSteps
      ] }),
      currentStep < totalSteps - 1 ? /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: nextStep,
          disabled: isSubmitting,
          className: "px-6 py-2 bg-primary text-bg rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Next"
        }
      ) : /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: "px-6 py-2 bg-green-600 text-bg rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: isSubmitting ? "Submitting..." : "Submit"
        }
      )
    ] })
  ] }) });
}

function Input({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  inputClassName = "",
  showLabel = true,
  labelHidden = false,
  describedBy,
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  onFocus,
  onBlur,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;
  const handleFocus = useCallback(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: focused,
        duration: borderDuration,
        borderWidth,
        borderRadius,
        color: "var(--color-accent)",
        innerClassName: `!bg-transparent !border-transparent p-0 ${borderRadius}`,
        children: /* @__PURE__ */ jsx(
          "input",
          {
            id,
            name,
            required,
            "aria-required": required || void 0,
            "aria-describedby": describedBy,
            className: `form-field ${inputClassName}`.trim(),
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...inputProps
          }
        )
      }
    )
  ] });
}

function Checkbox({
  name,
  label,
  children,
  required = false,
  containerClassName = "mb-4",
  labelClassName = "flex items-center cursor-pointer",
  checkboxClassName = "w-4 h-4 text-primary border-surface rounded",
  ...checkboxProps
}) {
  const labelContent = children ?? label;
  return /* @__PURE__ */ jsx("div", { className: containerClassName, children: /* @__PURE__ */ jsxs("label", { className: labelClassName, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        id: name,
        name,
        className: checkboxClassName,
        required,
        ...checkboxProps
      }
    ),
    labelContent && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-text", children: [
      labelContent,
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] })
  ] }) });
}

function Textarea({
  name,
  label,
  required = false,
  containerClassName = "space-y-2",
  labelClassName = "block text-sm text-text/80",
  textareaClassName = "resize-none",
  showLabel = true,
  labelHidden = false,
  describedBy,
  rows = 5,
  borderDuration = 900,
  borderWidth = 2,
  borderRadius = "rounded-xl",
  id: idProp,
  onFocus,
  onBlur,
  ...textareaProps
}) {
  const [focused, setFocused] = useState(false);
  const reactId = useId();
  const id = idProp ?? `${name}-${reactId}`;
  const handleFocus = useCallback(
    (event) => {
      setFocused(true);
      onFocus?.(event);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    (event) => {
      setFocused(false);
      onBlur?.(event);
    },
    [onBlur]
  );
  const labelClasses = [
    labelClassName,
    !showLabel || labelHidden ? "sr-only" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: id, className: labelClasses, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "solid",
        triggers: "controlled",
        active: focused,
        duration: borderDuration,
        borderWidth,
        borderRadius,
        color: "var(--color-accent)",
        innerClassName: `!bg-transparent !border-transparent p-0 ${borderRadius}`,
        children: /* @__PURE__ */ jsx(
          "textarea",
          {
            id,
            name,
            rows,
            required,
            "aria-required": required || void 0,
            "aria-describedby": describedBy,
            className: `form-field resize-none ${textareaClassName}`.trim(),
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...textareaProps
          }
        )
      }
    )
  ] });
}

const $$Astro$t = createAstro("https://https://griffinswebservices.com");
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { title, description, className = "" } = Astro2.props;
  const handleSubmit = async (values) => {
    console.log("Contact form submitted:", values);
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`<h2 class="text-3xl font-bold mb-3">${title}</h2>`} ${description && renderTemplate`<p class="text-text mb-8">${description}</p>`} ${renderComponent($$result, "FormWrapper", FormWrapper, { "client:idle": true, "onSubmit": handleSubmit, "successMessage": "Thank you for contacting us! We'll get back to you soon.", "errorMessage": "There was an error submitting your form. Please try again.", "resetOnSuccess": true, "className": "group section-box card-bg outer-card-transition md:mx-5 lg:mx-10 xl:mx-15 flex flex-col relative overflow-hidden", "client:component-hydration": "idle", "client:component-path": "@/components/Form/FormWrapper", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="inner-card-style inner-card-transition inner-card-color" aria-hidden="true"></div> <div class="relative z-10 grid gap-4 md:grid-cols-2"> ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "firstName", "label": "First Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Full Name *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "lastName", "label": "Last Name", "type": "text", "required": true, "minLength": 2, "placeholder": "Last Name *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "email", "label": "Email", "type": "email", "required": true, "placeholder": "Email Address *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "phone", "label": "Phone Number", "type": "tel", "required": true, "pattern": "[0-9]{10,}", "title": "Please enter at least 10 digits", "placeholder": "Phone Number *", "containerClassName": "md:col-span-1", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Input", Input, { "client:idle": true, "name": "company", "label": "Company Name", "type": "text", "placeholder": "Company Name", "containerClassName": "md:col-span-2", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Input", "client:component-export": "default" })} ${renderComponent($$result2, "Textarea", Textarea, { "client:idle": true, "name": "message", "label": "Your Message", "required": true, "minLength": 10, "placeholder": "Tell us about your project, goals, and any specific requirements...", "rows": 5, "containerClassName": "md:col-span-2", "showLabel": false, "client:component-hydration": "idle", "client:component-path": "@/components/Form/inputs/Textarea", "client:component-export": "default" })} </div> ${renderComponent($$result2, "Checkbox", Checkbox, { "name": "privacy", "required": true, "containerClassName": "relative z-10 flex items-center gap-2 md:col-span-2 my-4", "labelClassName": "flex items-start gap-2 text-sm text-text", "checkboxClassName": "h-4 w-4 rounded border-muted/60 accent-primary" }, { "default": ($$result3) => renderTemplate`
I have read and agree to the${" "}<a href="/privacy-policy" target="_blank" rel="noopener noreferrer" class="link-base link-md">
Privacy Policy
</a> ` })} <div class="text-center relative z-10 pt-4"> ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "primary", "type": "submit", "className": "w-full md:w-auto", "client:component-hydration": "load", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`
Submit Form
` })} </div> ` })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Form/forms/ContactForm.astro", void 0);

const $$Astro$s = createAstro("https://https://griffinswebservices.com");
const $$ContactVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$ContactVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 2,
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 w-full ${className}`, "class")}> <div class="flex flex-col-reverse lg:flex-row w-full"> <div class="px-4"> ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`flex flex-col gap-6 list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "ContactCard", $$ContactCard, { ...item })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12 text-left"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "size": "lg", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> <div class="flex flex-col justify-between w-full"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("social-media"), "variant": "SocialMediaVariant", "title": "Follow Us", "size": "lg", "alignment": "center" })} </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro", void 0);

const $$file$g = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ContactVariant.astro";
const $$url$g = undefined;

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactVariant,
  file: $$file$g,
  url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$r = createAstro("https://https://griffinswebservices.com");
const $$GridVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$GridVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 3,
    gap = "md",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8"
  };
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
  };
  const getCardClassName = (item) => [item?.class ?? item?.className ?? "", "h-full"].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`grid ${columnClasses[columns]} ${gapClasses[gap]} list-none`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`)} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro", void 0);

const $$file$f = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/GridVariant.astro";
const $$url$f = undefined;

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GridVariant,
  file: $$file$f,
  url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$q = createAstro("https://https://griffinswebservices.com");
const $$IconListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$IconListVariant;
  const {
    items = [],
    title,
    collectionTitle,
    heading,
    headingTag,
    headingClassName = "text-3xl md:text-4xl lg:text-5xl leading-[1.15em] text-heading",
    description,
    className = "",
    columns = 2,
    gap = "lg",
    id,
    itemLayout = "horizontal",
    slotContainerClassName = ""
  } = Astro2.props;
  const hasSlotContent = Astro2.slots.has("default");
  const safeItems = toArray(items);
  const headingTitle = heading?.title ?? title ?? collectionTitle;
  const headingBefore = heading?.before;
  const headingText = heading?.text;
  const headingAfter = heading?.after;
  const headingDescription = heading?.description ?? description;
  const showHeader = Boolean(
    headingTitle ?? headingDescription ?? headingBefore ?? headingText ?? headingAfter
  );
  const resolveItemUrl = (item) => {
    if (!item || typeof item !== "object") return void 0;
    const candidates = [
      item.url,
      item.href,
      item.link,
      item.route,
      item?.data?.url
    ];
    return candidates.find(
      (value) => typeof value === "string" && value.trim().length > 0
    );
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`.trim(), "class")}> <div class="mx-auto inner-section"> <div${addAttribute(`flex flex-col lg:space-x-15 ${showHeader ? "lg:flex-row lg:items-start" : ""}`.trim(), "class")}> ${showHeader && renderTemplate`<div class="w-full lg:w-1/2 sticky-section lg:self-start"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": headingTitle, "headingBefore": headingBefore, "headingEmphasis": headingText, "headingAfter": headingAfter, "description": headingDescription, "className": "space-y-4 text-left w-full", "headingTag": headingTag, "headingClassName": headingClassName, "descriptionClassName": "large-text leading-relaxed", "titleVisibleRootMargin": 0 })} </div>`} ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`w-full py-6 lg:py-0 ${showHeader ? "lg:w-1/2" : ""}`.trim(), "class")}> <ul${addAttribute(`flex flex-col gap-4 list-none`.trim(), "class")}> ${safeItems.map((item) => {
    const route = resolveItemUrl(item);
    const linkLabel = typeof item?.title === "string" ? item.title : typeof item?.heading === "string" ? item.heading : "Open link";
    const clickableWrapper = (content) => route ? renderTemplate`<a${addAttribute(route, "href")} class="block"${addAttribute(linkLabel, "aria-label")}> ${content} </a>` : content;
    return renderTemplate`<li${addAttribute(`relative h-full rounded-3xl p-6 lg:p-8 flex items-center gap-6 transition-colors duration-300 group/icon-card ${route ? "cursor-pointer hover:bg-bg3 hover:shadow-xl" : ""}`.trim(), "class")}> <div class="flex-1 w-full"> ${clickableWrapper(
      renderTemplate`${renderComponent($$result, "IconListItem", IconListItem, { "data": item, "layout": itemLayout, "alignment": "left", "className": `text-left gap-1 w-full flex items-start ${route ? "group-hover/icon-card:opacity-90 transition-opacity duration-300" : ""}`, "iconClassName": "icon-large card-icon-color mr-4", "iconSize": "xl", "titleTag": "h3", "titleClassName": "text-heading h3 my-4", "descriptionClassName": "text-lg text-text" })}`
    )} </div> ${route ? renderTemplate`${renderComponent($$result, "Button", Button, { "variant": "arrowLink", "href": route, "className": "shrink-0 ml-4 flex items-center justify-center opacity-0 pointer-events-none transition-opacity transition-transform duration-300 group-hover/icon-card:opacity-100 group-hover/icon-card:pointer-events-auto group-hover/icon-card:animate-bounce", "aria-label": `Open ${linkLabel}` })}` : null} </li>`;
  })} </ul> </div>`} </div> ${hasSlotContent && renderTemplate`<div${addAttribute(`mt-8 ${slotContainerClassName}`.trim(), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/IconListVariant.astro", void 0);

const $$file$e = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/IconListVariant.astro";
const $$url$e = undefined;

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IconListVariant,
  file: $$file$e,
  url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$p = createAstro("https://https://griffinswebservices.com");
const $$LinkTreeVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$LinkTreeVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    showIcons = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const isExternalLink = (item) => {
    return item.openInNewTab === true || item.url && item.url.startsWith("http");
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen py-8 sm:py-12 lg:py-16 ${className}`, "class")}> <div class="max-w-[680px] mx-auto px-4 sm:px-8"> ${(title || description) && renderTemplate`<header class="text-center mb-8 sm:mb-12"> ${title && renderTemplate`<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-heading"> ${title} </h1>`} ${description && renderTemplate`<p class="text-base sm:text-lg text-text">${description}</p>`} </header>`} ${safeItems.length > 0 && renderTemplate`<nav class="flex flex-col gap-4" aria-label="Links menu"> ${safeItems.map((item) => {
    const isExternal = isExternalLink(item);
    return renderTemplate`<a${addAttribute(item.url || "#", "href")} class="flex items-center justify-between text-center gap-4 p-5 sm:p-6 min-h-[72px] bg-bg rounded-xl text-heading no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary focus-visible:-translate-y-0.5 focus-visible:shadow-lg focus-visible:border-primary focus-visible:outline-none active:translate-y-0"${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}> ${showIcons && item.icon && renderTemplate`<span class="text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center" aria-hidden="true"> ${item.icon} </span>`} <div class="flex-1 min-w-0"> <h2 class="text-lg font-semibold mb-1 text-heading"> ${item.title} </h2> ${item.description && renderTemplate`<p class="text-sm text-text m-0">${item.description}</p>`} </div> ${isExternal && renderTemplate`<svg class="flex-shrink-0 opacity-50 transition-opacity duration-200 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg>`} </a>`;
  })} </nav>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro", void 0);

const $$file$d = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/LinkTreeVariant.astro";
const $$url$d = undefined;

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LinkTreeVariant,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$o = createAstro("https://https://griffinswebservices.com");
const $$ListVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ListVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    showHeadingDivider = false,
    showHeadingSection = true
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${showHeadingSection && (title || description) && renderTemplate`${renderComponent($$result, "DividerHeading", DividerHeading, { "title": title, "showDivider": showHeadingDivider, "className": "mb-4", "headingClassName": "h4 text-heading" })}`} ${safeItems.length > 0 && renderTemplate`<nav class="flex flex-col gap-2 list-none"> ${safeItems.map((item) => renderTemplate`${renderComponent($$result, "Button", Button, { "client:visible": true, "href": item.url, "className": "text-text", "variant": "link", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${item.title}` })}`)} </nav>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="mt-12"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "variant": "tertiary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> ` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro", void 0);

const $$file$c = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ListVariant.astro";
const $$url$c = undefined;

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ListVariant,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$n = createAstro("https://https://griffinswebservices.com");
const $$MasonryVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$MasonryVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const getCardClassName = (item) => ["break-inside-avoid mb-6", item?.class ?? item?.className ?? ""].filter(Boolean).join(" ");
  const getRingDuration = (item) => typeof item?.ringDuration === "number" ? item.ringDuration : 800;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`py-16 ${className}`, "class")}> ${(title || description) && renderTemplate`<div class="text-center mb-12"> ${title && renderTemplate`<h2 class="text-4xl text-heading font-bold mb-4">${title}</h2>`} ${description && renderTemplate`<p class="text-lg text-text max-w-2xl mx-auto">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 list-none"> ${safeItems.map(
    (item) => item && renderTemplate`<li class="inline-block w-full"> ${renderComponent($$result, "FeatureCard", FeatureCard, { "client:visible": true, "data": item, "ringDuration": getRingDuration(item), "className": getCardClassName(item), "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/FeatureCard", "client:component-export": "default" })} </li>`
  )} </ul>`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro", void 0);

const $$file$b = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MasonryVariant.astro";
const $$url$b = undefined;

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MasonryVariant,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$m = createAstro("https://https://griffinswebservices.com");
const $$MenuDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MenuDropdown;
  const { items = [], level = 1, parentSlug = "menu" } = Astro2.props;
  const dropdownId = `dropdown-${parentSlug}-${level}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(dropdownId, "id")} class="menu-dropdown hidden absolute top-full left-0 mt-0"> ${renderComponent($$result, "MenuList", $$MenuList, { "items": items, "level": level })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/Menu/MenuDropdown.astro", void 0);

function normalizePath(inputPath) {
  let normalized = inputPath.trim();
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

function isActivePath(itemUrl, currentPath) {
  if (!itemUrl) return false;
  const normalizedItem = normalizePath(itemUrl);
  const normalizedCurrent = normalizePath(currentPath);
  return normalizedItem === normalizedCurrent;
}
function hasActiveDescendant(item, currentPath) {
  if (!item.children || item.children.length === 0) return false;
  return item.children.some(
    (child) => isActivePath(child.url, currentPath) || hasActiveDescendant(child, currentPath)
  );
}

const $$Astro$l = createAstro("https://https://griffinswebservices.com");
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const {
    title,
    url,
    slug,
    children = [],
    openInNewTab = false,
    level = 0,
    description,
    icon
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isActive = isActivePath(url, currentPath);
  const hasChildren = children.length > 0;
  const childIsActive = hasChildren ? hasActiveDescendant({ children }, currentPath) : false;
  const isTopLevel = level === 0;
  const linkClasses = isTopLevel ? `
    flex items-center gap-1 px-4 py-2 rounded-md transition-colors font-medium
    ${isActive || childIsActive ? "text-primary bg-primary/10" : "text-text hover:text-primary hover:bg-text/5"}
  ` : `
    flex items-center gap-1 px-4 py-2 text-sm transition-colors whitespace-nowrap
    ${isActive ? "text-primary bg-primary/10 font-medium" : "text-text hover:text-primary hover:bg-text/5"}
  `;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`relative ${hasChildren ? "menu-item" : ""}`, "class")}> <a${addAttribute(url || "#", "href")}${addAttribute(openInNewTab ? "_blank" : void 0, "target")}${addAttribute(openInNewTab ? "noopener noreferrer" : void 0, "rel")}${addAttribute(linkClasses.trim(), "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute(hasChildren ? "menu" : void 0, "aria-haspopup")}${addAttribute(description, "title")}> ${icon && renderTemplate`<span class="icon">${icon}</span>`} <span>${title}</span> ${hasChildren && renderTemplate`<svg class="w-4 h-4 transition-transform menu-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg>`} </a> ${hasChildren && renderTemplate`${renderComponent($$result, "MenuDropdown", $$MenuDropdown, { "items": children, "level": level + 1, "parentSlug": slug })}`} </li>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopComponents/Menu/MenuItem.astro", void 0);

const $$Astro$k = createAstro("https://https://griffinswebservices.com");
const $$MenuList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MenuList;
  const { items = [], level = 0 } = Astro2.props;
  const isTopLevel = level === 0;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(isTopLevel ? "flex items-center gap-2 text-center" : "absolute left-0 top-full min-w-[200px] bg-bg shadow-lg rounded-lg py-2 z-50 border border-surface", "class")}> ${items.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { ...item, "level": level })}`)} </ul>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/LoopTemplates/Menu/MenuList.astro", void 0);

const $$Astro$j = createAstro("https://https://griffinswebservices.com");
const $$StaticHamburgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$StaticHamburgerButton;
  const {
    id = "mobile-menu-toggle",
    className = "",
    ariaLabel = "Open menu"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(id, "id")}${addAttribute(ariaLabel, "aria-label")} aria-expanded="false" aria-haspopup="true"${addAttribute(`group relative h-6 w-7 cursor-pointer flex flex-col justify-between items-start text-text hover:text-heading ${className}`.trim(), "class")} data-astro-cid-5llkidbx> <span class="hamburger-line block h-[0.5px] w-full bg-current transition-all duration-300" data-line="top" data-astro-cid-5llkidbx></span> <span class="hamburger-line block h-[0.5px] w-5 bg-current transition-all duration-300 opacity-100 group-hover:w-full" data-line="middle" data-astro-cid-5llkidbx></span> <span class="hamburger-line block h-[0.5px] w-full bg-current transition-all duration-300" data-line="bottom" data-astro-cid-5llkidbx></span> </button> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Menu/StaticHamburgerButton.astro", void 0);

const normalizeKey = (value) => {
  if (!value || typeof value !== "string") return void 0;
  const trimmed = value.trim();
  if (!trimmed) return void 0;
  return trimmed.replace(/^\/+/, "").replace(/\/+$/, "").toLowerCase();
};
const registerLookupKeys = (node, lookup) => {
  const addKey = (value) => {
    const key = normalizeKey(value);
    if (!key || lookup.has(key)) return;
    lookup.set(key, node);
  };
  const primaryKey = getItemKey(node);
  addKey(primaryKey);
  addKey(node.id);
  addKey(node.slug);
  const slugValue = typeof node.slug === "string" ? node.slug : void 0;
  const slugTail = slugValue && slugValue.includes("/") ? slugValue.split("/").pop() : void 0;
  addKey(slugTail);
  if (slugValue && slugValue.includes("-auto")) {
    const beforeAuto = slugValue.slice(0, slugValue.indexOf("-auto"));
    const dashIndex = beforeAuto.indexOf("-");
    if (dashIndex !== -1) {
      const baseSlug = beforeAuto.slice(dashIndex + 1);
      addKey(baseSlug);
    }
  }
  const urlValue = typeof node.url === "string" ? node.url.split("?")[0] : void 0;
  if (urlValue) {
    addKey(urlValue);
    const pathOnly = urlValue.replace(/^\/+/, "");
    addKey(pathOnly);
    const urlTail = pathOnly.split("/").pop();
    addKey(urlTail);
  }
  if (Array.isArray(node.aliases)) {
    node.aliases.forEach((alias) => {
      addKey(alias);
      if (typeof alias === "string" && alias.includes("/")) {
        addKey(alias.split("/").pop());
      }
    });
  }
};
const resolveParentNode = (parentRef, lookup) => {
  if (!parentRef) return void 0;
  const resolveFromValue = (value) => {
    const key = normalizeKey(value);
    if (!key) return void 0;
    return lookup.get(key);
  };
  if (Array.isArray(parentRef)) {
    for (const candidate of parentRef) {
      const match = resolveParentNode(candidate, lookup);
      if (match) return match;
    }
    return void 0;
  }
  if (typeof parentRef === "object") {
    if (parentRef.children && Array.isArray(parentRef.children)) {
      return parentRef;
    }
    const slugTail = typeof parentRef?.slug === "string" && parentRef.slug.includes("/") ? parentRef.slug.split("/").pop() : void 0;
    const collectionSlug = typeof parentRef?.collection === "string" && typeof parentRef?.slug === "string" ? `${parentRef.collection}/${parentRef.slug}` : void 0;
    return resolveFromValue(parentRef.id) || resolveFromValue(parentRef.slug) || resolveFromValue(slugTail) || resolveFromValue(parentRef.url) || resolveFromValue(collectionSlug);
  }
  return resolveFromValue(parentRef) ?? resolveBySegments(parentRef, lookup);
};
const resolveBySegments = (value, lookup) => {
  if (!lookup) return void 0;
  const normalized = normalizeKey(value);
  if (!normalized) return void 0;
  let current = normalized;
  while (current.length > 0) {
    const match = lookup.get(current);
    if (match) return match;
    const hyphenIndex = current.lastIndexOf("-");
    const slashIndex = current.lastIndexOf("/");
    const cutIndex = Math.max(hyphenIndex, slashIndex);
    if (cutIndex === -1) break;
    current = current.slice(0, cutIndex);
  }
  return lookup.get(current);
};
function buildMenuTree(items) {
  const nodes = items.map((item) => ({ ...item, children: [] }));
  const lookup = /* @__PURE__ */ new Map();
  nodes.forEach((node) => registerLookupKeys(node, lookup));
  const roots = [];
  nodes.forEach((node) => {
    const parentNode = resolveParentNode(node.parent, lookup);
    if (parentNode && parentNode !== node) {
      parentNode.children.push(node);
    } else {
      roots.push(node);
    }
  });
  const sortTree = (tree) => {
    tree.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
    tree.forEach((node) => {
      if (node.children.length > 0) {
        sortTree(node.children);
      }
    });
  };
  sortTree(roots);
  return roots;
}

const $$Astro$i = createAstro("https://https://griffinswebservices.com");
const $$MenuVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MenuVariant;
  const {
    items = [],
    className = "",
    id,
    maxDepth = 3,
    mode = "responsive",
    closeButton = false,
    hamburgerTransform = true
  } = Astro2.props;
  const safeItems = toArray(items);
  const menuTree = buildMenuTree(safeItems);
  const showDesktop = mode === "responsive" || mode === "flat-only";
  const showMobile = mode === "responsive" || mode === "hamburger-only";
  const desktopClasses = mode === "responsive" ? "hidden md:block" : "";
  const mobileClasses = showMobile && mode === "responsive" ? "md:hidden" : "";
  const buttonId = id ? `${id}-menu-toggle` : "mobile-menu-toggle";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`menu-variant ${className}`, "class")}> ${showDesktop && renderTemplate`<nav${addAttribute(`menu-desktop ${desktopClasses}`, "class")} aria-label="Main navigation"> ${renderComponent($$result, "MenuList", $$MenuList, { "items": menuTree, "level": 0 })} </nav>`} ${showMobile && renderTemplate`<div${addAttribute(`menu-mobile ${mobileClasses}`, "class")}>  ${renderComponent($$result, "StaticHamburgerButton", $$StaticHamburgerButton, { "id": buttonId })}  ${renderComponent($$result, "LazyHamburgerMenu", LazyHamburgerMenu, { "client:idle": true, "items": menuTree, "buttonId": buttonId, "closeButton": closeButton, "hamburgerTransform": hamburgerTransform, "client:component-hydration": "idle", "client:component-path": "@/components/LoopTemplates/Menu/HamburgerMenu/Lazy", "client:component-export": "default" })} </div>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro", void 0);

const $$file$a = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/MenuVariant.astro";
const $$url$a = undefined;

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MenuVariant,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro("https://https://griffinswebservices.com");
const $$PainPointsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$PainPointsVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    columns = 1,
    id,
    showButtonSection = true,
    ctaHref,
    ctaText,
    heading: headingValue,
    styleVariant = "warning",
    layout = "list"
  } = Astro2.props;
  const safeItems = toArray(items);
  const showHeader = Boolean(title || headingValue || description);
  const variantStyles = {
    warning: {
      icon: "\u2715",
      iconColor: "text-red-400",
      iconBg: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    muted: {
      icon: "\u2022",
      iconColor: "text-muted",
      iconBg: "bg-muted/10",
      borderColor: "border-muted/20"
    },
    accent: {
      icon: "\u25C6",
      iconColor: "text-accent",
      iconBg: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  };
  const style = variantStyles[styleVariant];
  const layoutClasses = {
    list: "flex flex-col gap-4",
    grid: columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4",
    alternating: "flex flex-col gap-6"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg2 relative ${className}`.trim(), "class")}> <div class="section-color-border"></div> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": headingValue, "description": description })}`} ${safeItems.length > 0 && renderTemplate`<div${addAttribute(`${layoutClasses[layout]} mt-10`, "class")}> ${safeItems.map((item, index) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    const itemTitle = record.title ?? "";
    const itemDescription = record.description ?? "";
    return layout === "alternating" ? renderTemplate`<div${addAttribute(`flex items-start gap-4 p-6 rounded-2xl border ${style.borderColor} bg-bg/50 ${index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`, "class")}> <span${addAttribute(`shrink-0 flex h-10 w-10 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor} text-lg font-bold`, "class")} aria-hidden="true"> ${style.icon} </span> <div class="space-y-1"> ${itemTitle && renderTemplate`<p class="font-semibold text-heading text-lg">${itemTitle}</p>`} ${itemDescription && renderTemplate`<p class="text-muted leading-relaxed">${itemDescription}</p>`} </div> </div>` : renderTemplate`<div class="flex items-start gap-4"> <span${addAttribute(`shrink-0 flex h-8 w-8 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor} text-sm font-bold mt-0.5`, "class")} aria-hidden="true"> ${style.icon} </span> <div class="space-y-1"> ${itemTitle && renderTemplate`<p class="font-medium text-heading">${itemTitle}</p>`} ${itemDescription && renderTemplate`<p class="text-muted text-sm leading-relaxed">${itemDescription}</p>`} </div> </div>`;
  })} </div>`} ${showButtonSection && ctaHref && ctaText && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref, "rightIcon": "lu:arrow-right", "variant": "primary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PainPointsVariant.astro", void 0);

const $$file$9 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PainPointsVariant.astro";
const $$url$9 = undefined;

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PainPointsVariant,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case "fixed":
      return `${width}px`;
    // Image is always the width of the screen
    case "full-width":
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  if (typeof src === "object" && "then" in src) {
    const resource = await src;
    return resource.default ?? resource;
  }
  return src;
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
const baseService = {
  validateOptions(options) {
    if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.widths && options.densities) {
        throw new AstroError(IncompatibleDescriptorOptions);
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
      if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
        throw new AstroError(UnsupportedImageConversion);
      }
    }
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", imageConfig.endpoint.route);
    let url = `${imageEndpoint}?${searchParams}`;
    if (imageConfig.assetQueryParams) {
      const assetQueryString = imageConfig.assetQueryParams.toString();
      if (assetQueryString) {
        url += "&" + assetQueryString;
      }
    }
    return url;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

const PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
  return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
  return url.href.replace(PLACEHOLDER_BASE, "");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp_BUjkzl-A.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.layout ?? "none";
  if (resolvedOptions.priority) {
    resolvedOptions.loading ??= "eager";
    resolvedOptions.decoding ??= "sync";
    resolvedOptions.fetchpriority ??= "high";
    delete resolvedOptions.priority;
  } else {
    resolvedOptions.loading ??= "lazy";
    resolvedOptions.decoding ??= "async";
    resolvedOptions.fetchpriority ??= "auto";
  }
  if (layout !== "none") {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    delete resolvedOptions.densities;
    resolvedOptions.style = addCSSVarsToStyle(
      {
        fit: cssFitValues.includes(resolvedOptions.fit ?? "") && resolvedOptions.fit,
        pos: resolvedOptions.position
      },
      resolvedOptions.style
    );
    resolvedOptions["data-astro-image"] = layout;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesValidatedTransform(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  } else if (imageConfig.assetQueryParams) {
    const imageURLObj = createPlaceholderURL(imageURL);
    imageConfig.assetQueryParams.forEach((value, key) => {
      imageURLObj.searchParams.set(key, value);
    });
    imageURL = stringifyPlaceholderURL(imageURLObj);
    srcSets = srcSets.map((srcSet) => {
      const urlObj = createPlaceholderURL(srcSet.url);
      imageConfig.assetQueryParams.forEach((value, key) => {
        urlObj.searchParams.set(key, value);
      });
      return {
        ...srcSet,
        url: stringifyPlaceholderURL(urlObj)
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$g = createAstro("https://https://griffinswebservices.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Image.astro", void 0);

const $$Astro$f = createAstro("https://https://griffinswebservices.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Picture.astro", void 0);

const fontsMod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Astro$e = createAstro("https://https://griffinswebservices.com");
const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Font;
  const { internalConsumableMap } = fontsMod;
  if (!internalConsumableMap) {
    throw new AstroError(ExperimentalFontsNotEnabled);
  }
  const { cssVariable, preload = false } = Astro2.props;
  const data = internalConsumableMap.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloadData, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/node_modules/astro/components/Font.astro", void 0);

const assetQueryParams = undefined;
							const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
							Object.defineProperty(imageConfig, 'assetQueryParams', {
								value: assetQueryParams,
								enumerable: false,
								configurable: true,
							});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const _astro_assets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Image: $$Image,
  getConfiguredImageService,
  getImage,
  imageConfig,
  inferRemoteSize,
  isLocalService
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://https://griffinswebservices.com");
const $$PortfolioScreenVariant = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PortfolioScreenVariant;
  const {
    items = [],
    className = "",
    id,
    loadingStrategy = "responsive"
  } = Astro2.props;
  const useStaticPreviewMode = loadingStrategy === "static-preview" || loadingStrategy === "responsive";
  const isResponsive = loadingStrategy === "responsive";
  const safeItems = toArray(items);
  if (!safeItems.length) {
    return;
  }
  const IMAGE_WIDTHS = [320, 480, 520, 640, 860];
  const SIZES = "(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) min(calc(100vw - 48px), 896px), 896px";
  const MAX_RENDER_HEIGHT = 3600;
  const FALLBACK_FORMAT = "webp";
  const IMAGE_FORMATS = [
    // AVIF first for maximum compression, with a slightly lower quality target
    { format: "avif", quality: 45 },
    // WebP fallback keeps quality high enough for crisp UI details
    { format: "webp", quality: 65 }
  ];
  const CONTAINER_MAX_WIDTH = 896;
  const CONTAINER_HEIGHT_DESKTOP = 500;
  const HEADER_BAR_HEIGHT = 48;
  const VISIBLE_HEIGHT_DESKTOP = CONTAINER_HEIGHT_DESKTOP - HEADER_BAR_HEIGHT;
  const PREVIEW_WIDTHS = [320, 480, 520, 640, CONTAINER_MAX_WIDTH];
  function calculateVisibleSourceHeight(sourceWidth, sourceHeight, containerWidth, visibleContainerHeight) {
    const scaleFactor = containerWidth / sourceWidth;
    const visibleSourceHeight = Math.ceil(visibleContainerHeight / scaleFactor);
    return Math.min(visibleSourceHeight, sourceHeight);
  }
  const processedItems = await Promise.all(
    safeItems.map(async (item, index) => {
      const primaryImage = item.featuredImage ?? item.bannerImage;
      const metadata = resolveImageMetadata(primaryImage);
      const altText = primaryImage ? getImageAlt(primaryImage, item.title ?? "Project preview") : item.title ?? "Project preview";
      const isFirst = index === 0;
      if (!metadata) {
        return { data: item, mediaEntry: void 0, croppedPreview: void 0 };
      }
      const optimizedByFormat = await Promise.all(
        IMAGE_FORMATS.map(async ({ format, quality }) => {
          const images = await Promise.all(
            IMAGE_WIDTHS.map((width) => {
              const aspectRatio = metadata.height / metadata.width;
              const naturalHeight = Math.round(aspectRatio * width);
              const constrainedHeight = Math.min(naturalHeight, MAX_RENDER_HEIGHT);
              const shouldConstrain = constrainedHeight < naturalHeight;
              const resizeOptions = shouldConstrain ? {
                height: constrainedHeight,
                fit: "cover",
                position: "top"
              } : {};
              return getImage({
                src: metadata,
                width,
                format,
                quality,
                ...resizeOptions
              });
            })
          );
          return { format, images };
        })
      );
      const fallbackFormatEntry = optimizedByFormat.find((entry) => entry.format === FALLBACK_FORMAT) ?? optimizedByFormat[optimizedByFormat.length - 1];
      if (!fallbackFormatEntry) {
        return { data: item, mediaEntry: void 0, croppedPreview: void 0 };
      }
      const fallbackImages = fallbackFormatEntry.images;
      if (!fallbackImages.length) {
        return { data: item, mediaEntry: void 0, croppedPreview: void 0 };
      }
      const fallbackSrcSet = fallbackImages.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", ");
      const defaultImage = fallbackImages[fallbackImages.length - 1];
      const pictureSources = optimizedByFormat.filter((entry) => entry.format !== FALLBACK_FORMAT).map((entry) => ({
        type: `image/${entry.format}`,
        srcSet: entry.images.map((img, i) => `${img.src} ${IMAGE_WIDTHS[i]}w`).join(", "),
        sizes: SIZES
      }));
      let croppedPreview = void 0;
      if (isFirst && useStaticPreviewMode) {
        const visibleSourceHeight = calculateVisibleSourceHeight(
          metadata.width,
          metadata.height,
          CONTAINER_MAX_WIDTH,
          VISIBLE_HEIGHT_DESKTOP
        );
        const paddedSourceHeight = Math.round(visibleSourceHeight * 1.2);
        const previewConfigs = [];
        for (const width of PREVIEW_WIDTHS) {
          const scaledCropHeight = Math.round(paddedSourceHeight * (width / CONTAINER_MAX_WIDTH));
          previewConfigs.push({ width, height: scaledCropHeight, format: "avif", quality: 55 });
          previewConfigs.push({ width, height: scaledCropHeight, format: "webp", quality: 75 });
        }
        const previewResults = await generateCroppedPreview(metadata, previewConfigs);
        const avifResults = previewResults.filter((r) => r.config.format === "avif");
        const webpResults = previewResults.filter((r) => r.config.format === "webp");
        const webpSrcSet = webpResults.map((r) => `${r.image.src} ${r.config.width}w`).join(", ");
        const avifSrcSet = avifResults.map((r) => `${r.image.src} ${r.config.width}w`).join(", ");
        const defaultWebp = webpResults[webpResults.length - 1];
        croppedPreview = {
          src: defaultWebp?.image.src ?? previewResults[0]?.image.src,
          srcSet: webpSrcSet,
          sizes: SIZES,
          width: CONTAINER_MAX_WIDTH,
          height: paddedSourceHeight,
          // Padded height for object-cover to work properly
          alt: altText,
          sources: avifSrcSet ? [{
            type: "image/avif",
            srcSet: avifSrcSet,
            sizes: SIZES
          }] : []
        };
      }
      return {
        data: item,
        mediaEntry: {
          src: defaultImage.src,
          srcSet: fallbackSrcSet,
          sizes: SIZES,
          width: defaultImage.attributes.width,
          height: defaultImage.attributes.height,
          alt: altText,
          loading: "lazy",
          decoding: "async",
          // With static-preview/responsive: first image uses "low" priority since preview handles LCP (on desktop)
          // With client-only: first image uses "auto" like others (no preview competing)
          fetchPriority: isFirst && useStaticPreviewMode ? "low" : "auto",
          sources: pictureSources
        },
        croppedPreview
      };
    })
  );
  const portfolioItems = processedItems.map((entry) => entry.data);
  const showcaseMedia = processedItems.map((entry) => entry.mediaEntry);
  const firstPreview = useStaticPreviewMode ? processedItems[0]?.croppedPreview : void 0;
  const firstItem = portfolioItems[0];
  const hasPreview = useStaticPreviewMode && firstPreview?.src;
  const staticContainerId = hasPreview ? "portfolio-static-first" : void 0;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative overflow-hidden p-6 ${className}`.trim(), "class")}> <div class="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[500px]">  <div${addAttribute(hasPreview ? "absolute inset-0 z-0" : "relative h-full", "class")}> ${renderComponent($$result, "PortfolioScreenShowcase", PortfolioScreenShowcase, { "client:visible": true, "items": portfolioItems, "mediaEntries": showcaseMedia, "className": "w-full mx-auto", "staticContainerId": staticContainerId, "loadingStrategy": loadingStrategy, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/PortfolioScreenShowcase/PortfolioScreenShowcase", "client:component-export": "default" })} </div>  ${hasPreview && renderTemplate`<div id="portfolio-static-first"${addAttribute([
    "absolute inset-0 z-10 overflow-hidden rounded-lg transition-opacity duration-500",
    isResponsive && "hidden lg:block"
  ], "class:list")}> <div class="relative h-full w-full"> <div class="relative h-full bg-bg3"> <div class="flex flex-col gap-3 border-b border-white/10 px-4 py-3 text-white/70 sm:flex-row sm:items-center sm:justify-between"> <div class="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50"> <span class="flex items-center gap-1.5"> <span class="h-3 w-3 rounded-full bg-gray-800"></span> <span class="h-3 w-3 rounded-full bg-gray-800"></span> <span class="h-3 w-3 rounded-full bg-gray-800"></span> </span> </div> </div> <figure class="relative h-full overflow-y-auto overscroll-contain bg-black/40">  <picture>  ${firstPreview.sources?.map((source) => renderTemplate`<source${addAttribute(isResponsive ? "(min-width: 1024px)" : void 0, "media")}${addAttribute(source.srcSet, "srcset")}${addAttribute(source.sizes, "sizes")}${addAttribute(source.type, "type")}>`)}  ${isResponsive && renderTemplate`<source media="(min-width: 1024px)"${addAttribute(firstPreview.srcSet, "srcset")}${addAttribute(firstPreview.sizes, "sizes")} type="image/webp">`}  <img${addAttribute(isResponsive ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : firstPreview.src, "src")}${addAttribute(isResponsive ? void 0 : firstPreview.srcSet, "srcset")}${addAttribute(isResponsive ? void 0 : firstPreview.sizes, "sizes")}${addAttribute(firstPreview.alt || firstItem?.title || "Project preview", "alt")}${addAttribute(firstPreview.width, "width")}${addAttribute(firstPreview.height, "height")} loading="eager" decoding="async"${addAttribute(isResponsive ? "auto" : "high", "fetchpriority")} draggable="false" class="block h-auto min-h-full w-full select-none object-cover object-top"> </picture> </figure> </div> </div> </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioScreenVariant.astro", void 0);

const $$file$8 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioScreenVariant.astro";
const $$url$8 = undefined;

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PortfolioScreenVariant,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://https://griffinswebservices.com");
const $$PortfolioVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PortfolioVariant;
  const {
    items = [],
    title,
    heading: headingValue,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    autoplay = true,
    autoAdvanceDelay = 7e3,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const processedItems = safeItems.map((item, index) => {
    const primaryImage = (typeof item.image === "object" ? item.image : void 0) ?? item.featuredImage ?? item.bannerImage;
    const metadata = resolveImageMetadata(primaryImage);
    const altText = primaryImage ? getImageAlt(primaryImage, item.title ?? "Project preview") : item.title ?? "Project preview";
    return {
      data: {
        ...item,
        ...altText ? { alt: altText } : {}
      },
      media: metadata ? {
        metadata,
        alt: altText,
        key: item.slug ?? item.id ?? `portfolio-${index}`
      } : void 0
    };
  });
  const portfolioItems = processedItems.map((entry) => entry.data);
  const carouselMedia = processedItems.map((entry) => entry.media);
  const sectionTitle = collectionTitle ?? title;
  const fallbackHeading = title ?? collectionTitle;
  const normalizedHeading = headingValue ?? fallbackHeading;
  const isSegmentedHeading = typeof normalizedHeading === "object" && normalizedHeading !== null;
  const headingString = typeof normalizedHeading === "string" ? normalizedHeading : isSegmentedHeading ? normalizedHeading.text ?? "" : void 0;
  const segmentedHeading = isSegmentedHeading ? normalizedHeading : void 0;
  const resolvedHeading = headingString ?? (segmentedHeading ? segmentedHeading.text : void 0);
  const headingPayload = segmentedHeading ?? resolvedHeading;
  const showHeader = Boolean(sectionTitle || headingPayload || description);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-dim-border"></div> <div class=""> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": sectionTitle, "heading": headingPayload, "description": description, "className": "text-center", "headingClassName": "h2 mb-6 heading-padding", "descriptionClassName": "large-text max-w-2xl mx-auto" })}`} ${portfolioItems.length > 0 && renderTemplate`${renderComponent($$result, "PortfolioCarousel", PortfolioCarousel, { "client:visible": true, "items": portfolioItems, "autoplay": autoplay, "autoAdvanceDelay": autoAdvanceDelay, "className": showHeader ? "mt-12" : "", "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/PortfolioCarousel", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${carouselMedia.map(
    (media, index) => media ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "data-portfolio-media": true, "src": media.metadata, "alt": media.alt, "loading": index === 0 ? "eager" : "lazy", "widths": [480, 640, 860, 1024, 1280, 1600], "sizes": "(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 860px", "class": "block w-full h-auto min-h-full select-none object-cover object-top", "draggable": "false" })}` : renderTemplate`<span data-portfolio-placeholder class="hidden"></span>`
  )}` })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, portfolioItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro", void 0);

const $$file$7 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/PortfolioVariant.astro";
const $$url$7 = undefined;

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PortfolioVariant,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const POSTER_SRC = new Proxy({"src":"/assets/GWS-animated-Ba3njFjP.png","width":1454,"height":1426,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/GWS-animated.png");
							return target[name];
						}
					});

const $$Astro$b = createAstro("https://https://griffinswebservices.com");
const $$ProofPointsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ProofPointsVariant;
  const { items = [], className = "", id } = Astro2.props;
  const safeItems = toArray(items);
  const listClass = ["space-y-4", className].filter(Boolean).join(" ");
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<ul${addAttribute(id, "id")}${addAttribute(listClass, "class")}>${safeItems.map((item) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    const rendered = record.title && record.description ? `${record.title} \u2014 ${record.description}` : record.title ?? record.description ?? "";
    return renderTemplate`<li class="flex items-start gap-2 text-base leading-relaxed text-text"><span class="shrink-0">${renderComponent($$result, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "widths": [32], "heights": [32], "sizes": "32px", "class": "w-6 h-6 rounded-full object-contain border border-accent/30 card-bg" })}</span><span class="text-muted text-sm leading-snug block">${rendered}</span></li>`;
  })}</ul>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ProofPointsVariant.astro", void 0);

const $$file$6 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/ProofPointsVariant.astro";
const $$url$6 = undefined;

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProofPointsVariant,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://https://griffinswebservices.com");
const $$QuickFactsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$QuickFactsVariant;
  const {
    items = [],
    className = "",
    columns = 2,
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid grid-cols-1 gap-4",
    2: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
    4: "grid grid-cols-2 md:grid-cols-4 gap-4"
  };
  const baseClass = columnClasses[columns] ?? columnClasses[2];
  const combinedClass = `${baseClass} ${className}`.trim();
  return renderTemplate`${safeItems.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(combinedClass, "class")}>${safeItems.map((item) => {
    const record = item && typeof item === "object" && "data" in item ? item.data ?? item : item ?? {};
    return renderTemplate`<div class="rounded-2xl border card-bg border-accent/25 p-4"><p class="text-xs uppercase tracking-[0.2em] text-muted">${record.title ?? record.label}</p><p class="text-heading text-xl font-semibold mt-2">${record.description ?? record.value}</p></div>`;
  })}</div>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/QuickFactsVariant.astro", void 0);

const $$file$5 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/QuickFactsVariant.astro";
const $$url$5 = undefined;

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuickFactsVariant,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const PADDING_MAP = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3"
};
const ICON_SIZE_MAP = {
  sm: "sm",
  md: "md",
  lg: "lg"
};
function SocialIcon({
  title,
  link,
  icon = "lu:globe",
  size = "md"
}) {
  const wrapperClass = `${PADDING_MAP[size]} rounded-full inline-flex items-center justify-center bg-accent/10 border border-accent/30 text-accent`;
  const iconSize = ICON_SIZE_MAP[size];
  return /* @__PURE__ */ jsx(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: 800,
      borderRadius: "rounded-full",
      borderWidth: 2,
      color: "var(--color-accent)",
      className: "inline-flex transition-all duration-300 hover:-translate-y-1",
      innerClassName: "rounded-full w-full h-full",
      children: link ? /* @__PURE__ */ jsx(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `inline-flex rounded-full ${wrapperClass}`,
          "aria-label": `Visit our ${title}`,
          title,
          children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize, className: "text-current" })
        }
      ) : /* @__PURE__ */ jsx("div", { className: `inline-flex rounded-full ${wrapperClass}`, title, children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize, className: "text-current" }) })
    }
  );
}

const $$Astro$9 = createAstro("https://https://griffinswebservices.com");
const $$SocialMediaVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SocialMediaVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    size = "md",
    layout = "horizontal",
    alignment = "center",
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };
  const layoutClasses = {
    horizontal: "flex-row",
    vertical: "flex-col"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`${className}`, "class")}> ${(title || description) && renderTemplate`<div${addAttribute(`mb-6`, "class")}> ${title && renderTemplate`${renderComponent($$result, "Heading", Heading, { "className": "h4 text-heading text-left font-bold" }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${description && renderTemplate`<p class="text-text">${description}</p>`} </div>`} ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`flex ${layoutClasses[layout]} ${alignmentClasses[alignment]} gap-4 list-none flex-wrap`, "class")}> ${safeItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "SocialIcon", SocialIcon, { ...item, "size": size, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/SocialIcon", "client:component-export": "default" })} </li>`)} </ul>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro", void 0);

const $$file$4 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/SocialMediaVariant.astro";
const $$url$4 = undefined;

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SocialMediaVariant,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const getDecimalPlaces$1 = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  const [, fraction] = value.toString().split(".");
  return fraction ? fraction.length : 0;
};
const formatValue = (value, decimals) => decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
function Counter({
  start = 0,
  end,
  duration = 2e3,
  className = "",
  style,
  decimals,
  onComplete
}) {
  const [displayValue, setDisplayValue] = useState(start);
  const resolvedDecimals = typeof decimals === "number" && !Number.isNaN(decimals) ? Math.max(0, decimals) : Math.max(getDecimalPlaces$1(start), getDecimalPlaces$1(end));
  useEffect(() => {
    let rafId;
    const range = end - start;
    if (range === 0) {
      setDisplayValue(end);
      return void 0;
    }
    const startTime = performance.now();
    const resolvedDuration = duration <= 0 ? 0 : duration;
    const animate = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = resolvedDuration === 0 ? 1 : Math.min(elapsed / resolvedDuration, 1);
      const value = start + range * progress;
      setDisplayValue(value);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [start, end, duration, onComplete]);
  const formattedTarget = formatValue(end, resolvedDecimals);
  const minWidthCh = Math.max(1, formattedTarget.length);
  const baseClasses = ["counter-value", "tabular-nums", className].filter(Boolean).join(" ");
  const mergedStyles = {
    display: "inline-block",
    minWidth: `calc(${minWidthCh}ch)`,
    ...style
  };
  return /* @__PURE__ */ jsx("span", { className: baseClasses, style: mergedStyles, children: formatValue(displayValue, resolvedDecimals) });
}

const resolveField = (records, key) => {
  for (const record of records) {
    if (!record || typeof record !== "object") continue;
    const value = record[key];
    if (value !== void 0 && value !== null) {
      return value;
    }
  }
  return void 0;
};
const toNumericValue = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/,/g, "").trim());
    return Number.isFinite(parsed) ? parsed : void 0;
  }
  return void 0;
};
const getDecimalPlaces = (value) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  const [, decimals] = value.toString().split(".");
  return decimals ? decimals.length : 0;
};
function StatCard({ data, className = "" }) {
  const entry = (data && typeof data === "object" ? data : {}) ?? {};
  const fields = entry.data && typeof entry.data === "object" ? entry.data : void 0;
  const sources = [fields, entry];
  const statValueRaw = resolveField(sources, "statValue");
  const statStartRaw = resolveField(sources, "statStart");
  const statPrefixRaw = resolveField(sources, "statPrefix");
  const statSuffixRaw = resolveField(sources, "statSuffix");
  const statAnimateRaw = resolveField(sources, "statAnimate");
  const titleRaw = resolveField(sources, "title");
  const descriptionRaw = resolveField(sources, "description");
  const title = typeof titleRaw === "string" ? titleRaw : void 0;
  const description = typeof descriptionRaw === "string" ? descriptionRaw : void 0;
  const value = toNumericValue(statValueRaw);
  const startValue = toNumericValue(statStartRaw) ?? 0;
  const prefix = typeof statPrefixRaw === "string" ? statPrefixRaw : "";
  const suffix = typeof statSuffixRaw === "string" ? statSuffixRaw : "";
  const animate = statAnimateRaw !== false;
  const shouldAnimate = animate && typeof value === "number";
  const decimalPlaces = Math.max(
    getDecimalPlaces(value),
    getDecimalPlaces(startValue)
  );
  const formattedStaticValue = value !== void 0 ? decimalPlaces > 0 ? value.toFixed(decimalPlaces) : value.toString() : void 0;
  const fallbackText = value !== void 0 ? `${prefix ?? ""}${formattedStaticValue}${suffix ?? ""}` : title ?? "";
  const cardClasses = [
    "card-bg",
    "rounded-2xl",
    "border",
    "border-accent/15",
    "p-6",
    "text-center",
    "relative",
    "overflow-hidden",
    "outer-card-transition outer-card-hover-transition",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      className: cardClasses,
      borderRadius: "rounded-2xl",
      borderWidth: 2,
      duration: 800,
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-heading text-4xl font-bold", children: shouldAnimate && typeof value === "number" ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-baseline justify-center gap-1", children: [
          prefix && /* @__PURE__ */ jsx("span", { children: prefix }),
          /* @__PURE__ */ jsx(
            Counter,
            {
              start: startValue,
              end: value,
              decimals: decimalPlaces,
              className: "leading-none"
            }
          ),
          suffix && /* @__PURE__ */ jsx("span", { children: suffix })
        ] }) : fallbackText || "—" }),
        title && /* @__PURE__ */ jsx("p", { className: "text-muted text-sm uppercase tracking-[0.35em] mt-2", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "text-muted text-sm leading-relaxed mt-3", children: description })
      ]
    }
  );
}

const $$Astro$8 = createAstro("https://https://griffinswebservices.com");
const $$StatsVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StatsVariant;
  const { items = [], className = "", columns = 4, id } = Astro2.props;
  const safeItems = toArray(items);
  const columnClasses = {
    1: "grid grid-cols-1 gap-4",
    2: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
    4: "grid grid-cols-2 md:grid-cols-4 gap-4"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`space-y-4 ${className}`.trim(), "class")}> ${safeItems.length > 0 && renderTemplate`<ul${addAttribute(`${columnClasses[columns]} list-none`.trim(), "class")}> ${safeItems.map((item) => renderTemplate`<li class="h-full"> ${renderComponent($$result, "StatCard", StatCard, { "client:visible": true, "data": item, "className": "h-full", "client:component-hydration": "visible", "client:component-path": "@/components/LoopComponents/StatCard", "client:component-export": "default" })} </li>`)} </ul>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/StatsVariant.astro", void 0);

const $$file$3 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/StatsVariant.astro";
const $$url$3 = undefined;

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StatsVariant,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://https://griffinswebservices.com");
const $$TechnologiesVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TechnologiesVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    id,
    collectionTitle
  } = Astro2.props;
  const safeItems = toArray(items);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <!-- <div class="section-dim-border"></div> --> ${safeItems.length > 0 && renderTemplate`${renderComponent($$result, "TechStackSection", TechStackSection, { "client:visible": true, "technologies": safeItems, "eyebrow": collectionTitle ?? title, "title": title ?? collectionTitle, "description": description, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/TechStackSection", "client:component-export": "default" })}`} </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro", void 0);

const $$file$2 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TechnologiesVariant.astro";
const $$url$2 = undefined;

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechnologiesVariant,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://https://griffinswebservices.com");
const $$TestimonialCirclesVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TestimonialCirclesVariant;
  const {
    items = [],
    className = "",
    counterStart = 1,
    counterEnd = 100,
    counterDuration = 2e3,
    counterDecimals,
    counterPrefix = "",
    counterSuffix = "+",
    counterLabel = "Happy Clients",
    counterClassName = "text-heading m-0 p-0 text-3xl lg:text-4xl",
    link = "/#testimonials-home",
    id
  } = Astro2.props;
  const safeItems = toArray(items);
  const faces = safeItems.slice(0, 3);
  if (faces.length === 0) {
    return;
  }
  const resolveImage = (face) => {
    const featured = face.featuredImage;
    const metadata = resolveImageMetadata(featured);
    if (metadata) {
      const alt = getImageAlt(featured, face.author ?? "Testimonial");
      return { src: metadata, alt };
    }
    return { src: __ASTRO_IMAGE_IMPORT_s0yHl, alt: face.author ?? "Testimonial" };
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<a", "", "", '> <div class="flex justify-center items-center"> ', ' </div> <div class="flex flex-col items-start"> ', " ", ' </div> </a> <script>\n  (function() {\n    if (window.__testimonialsPulseInitialized) return;\n    window.__testimonialsPulseInitialized = true;\n\n    const initTestimonialsPulse = () => {\n      const circles = document.querySelectorAll(".testimonials .circle");\n      if (!circles.length) return;\n\n      let idx = 0;\n      const pulse = () => {\n        const prev = (idx - 1 + circles.length) % circles.length;\n        circles[prev]?.classList.remove("heartbeat");\n        circles[idx]?.classList.add("heartbeat");\n        idx = (idx + 1) % circles.length;\n      };\n\n      pulse();\n      setInterval(pulse, 1600);\n    };\n\n    if ("requestIdleCallback" in window) {\n      requestIdleCallback(initTestimonialsPulse);\n    } else {\n      window.addEventListener("load", initTestimonialsPulse, { once: true });\n    }\n  })();\n<\/script>'])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(link, "href"), addAttribute(`testimonials flex items-center gap-4 lg:gap-6 px-2 md:px-0 ${className}`.trim(), "class"), faces.map((face) => renderTemplate`<div class="circle -mr-2 lg:-mr-4 first:ml-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center"> ${(() => {
    const resolved = resolveImage(face);
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": resolved.src, "alt": resolved.alt, "widths": [56], "class": "object-cover w-full h-full", "fetchpriority": "high", "loading": "eager" })}`;
  })()} </div>`), renderComponent($$result, "Heading", Heading, { "tagName": "span", "className": counterClassName }, { "default": ($$result2) => renderTemplate` <span class="inline-flex items-baseline gap-1"> ${counterPrefix && renderTemplate`<span>${counterPrefix}</span>`} ${renderComponent($$result2, "Counter", Counter, { "client:visible": true, "start": counterStart, "end": counterEnd, "duration": counterDuration, "decimals": counterDecimals, "className": "leading-none", "client:component-hydration": "visible", "client:component-path": "@/components/Counter", "client:component-export": "default" })} ${counterSuffix && renderTemplate`<span>${counterSuffix}</span>`} </span> ` }), renderComponent($$result, "Heading", Heading, { "tagName": "p", "className": "small-text m-0" }, { "default": ($$result2) => renderTemplate`${counterLabel}` }));
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCirclesVariant.astro";
const $$url$1 = undefined;

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestimonialCirclesVariant,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://https://griffinswebservices.com");
const $$TwoColumnImageVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwoColumnImageVariant;
  const {
    title,
    description,
    heading,
    className = "",
    id,
    imagePosition = "left",
    imagePlaceholder = "\u{1F5BC}\uFE0F",
    imageAlt = "Section image",
    imageSrc,
    stickyImage = true,
    bgClass = "bg-bg2",
    borderClass = "section-color-border",
    contentClassName = "",
    imageClassName = "",
    items = [],
    contentType = "checklist",
    collectionUrl,
    collectionTitle,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const hasSlotContent = Astro2.slots.has("default");
  const hasItems = safeItems.length > 0;
  const showHeader = Boolean(title || heading || description);
  const showCTA = showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl);
  const imageOrderClass = imagePosition === "left" ? "order-2 lg:order-1" : "order-2 lg:order-2";
  const contentOrderClass = imagePosition === "left" ? "order-1 lg:order-2" : "order-1 lg:order-1";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section ${bgClass} relative ${className}`.trim(), "class")}> ${borderClass && renderTemplate`<div${addAttribute(borderClass, "class")}></div>`} <div class="inner-section"> <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">  <div${addAttribute(`lg:flex-1 w-full ${stickyImage ? "sticky-section" : ""} ${imageOrderClass} ${imageClassName}`.trim(), "class")}> <div class="aspect-5/3 rounded-3xl bg-muted/10 border border-muted/20 flex items-center justify-center overflow-hidden"> ${hasSlotContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : imageSrc ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover rounded-3xl">` : renderTemplate`<div class="text-center p-8"> <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"> <span class="text-accent text-2xl">${imagePlaceholder}</span> </div> <p class="text-muted text-sm">${imageAlt}</p> </div>`} </div> </div>  <div${addAttribute(`lg:flex-1 space-y-8 ${contentOrderClass} ${contentClassName}`.trim(), "class")}> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "heading": heading, "description": description, "className": "text-left" })}`}  ${hasItems && contentType === "checklist" && renderTemplate`<ul class="grid grid-cols-1 gap-5 list-none"> ${safeItems.map((item) => {
    const itemTitle = item.data?.title || item.title;
    const itemDescription = item.data?.description || item.description;
    const itemIcon = item.data?.icon || item.icon || "lu:check";
    return renderTemplate`<li> ${renderComponent($$result, "IconListItem", IconListItem, { "data": {
      icon: itemIcon,
      title: itemTitle,
      description: itemDescription
    }, "layout": "horizontal", "alignment": "left", "iconClassName": "icon-small card-icon-color", "iconSize": "sm", "titleTag": "span", "titleClassName": "font-medium text-heading", "descriptionClassName": "text-sm text-muted mt-1", "descriptionTag": "span", "className": "gap-4 items-start", "containerClassName": "flex flex-col" })} </li>`;
  })} </ul>`} ${hasItems && contentType === "text" && renderTemplate`<div class="space-y-4 text-lg text-muted leading-relaxed"> ${safeItems.map((item) => {
    const itemText = item.text || item.data?.description || item.description;
    const Content = item.Content || item.rendered?.Content;
    return Content ? renderTemplate`<div class="[&>p]:text-muted [&>p]:text-lg [&>p]:leading-relaxed [&>strong]:text-heading [&>blockquote]:blockquote-gradient-line [&>blockquote]:italic [&>blockquote]:text-heading [&>blockquote]:font-medium [&>blockquote]:text-xl">${renderComponent($$result, "Content", Content, {})}</div>` : renderTemplate`<p>${unescapeHTML(itemText)}</p>`;
  })} </div>`}  ${showCTA && renderTemplate`<div class="mt-8"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TwoColumnImageVariant.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TwoColumnImageVariant.astro";
const $$url = undefined;

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TwoColumnImageVariant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

async function getVariantComponents() {
  const variants = /* #__PURE__ */ Object.assign({"../AccordionVariant.astro": __vite_glob_0_0$2,"../BenefitsInlineVariant.astro": __vite_glob_0_1$1,"../BlogVariant.astro": __vite_glob_0_2,"../CardVariant.astro": __vite_glob_0_3,"../ChecklistVariant.astro": __vite_glob_0_4,"../ComparisonVariant.astro": __vite_glob_0_5,"../ContactListVariant.astro": __vite_glob_0_6,"../ContactVariant.astro": __vite_glob_0_7,"../GridVariant.astro": __vite_glob_0_8,"../IconListVariant.astro": __vite_glob_0_9,"../LinkTreeVariant.astro": __vite_glob_0_10,"../ListVariant.astro": __vite_glob_0_11,"../MasonryVariant.astro": __vite_glob_0_12,"../MenuVariant.astro": __vite_glob_0_13,"../PainPointsVariant.astro": __vite_glob_0_14,"../PortfolioScreenVariant.astro": __vite_glob_0_15,"../PortfolioVariant.astro": __vite_glob_0_16,"../ProofPointsVariant.astro": __vite_glob_0_17,"../QuickFactsVariant.astro": __vite_glob_0_18,"../SocialMediaVariant.astro": __vite_glob_0_19,"../StatsVariant.astro": __vite_glob_0_20,"../TechnologiesVariant.astro": __vite_glob_0_21,"../TestimonialCarouselVariant.astro": __vite_glob_0_22,"../TestimonialCirclesVariant.astro": __vite_glob_0_23,"../TwoColumnImageVariant.astro": __vite_glob_0_24,"../VideoAccordionVariant.astro": __vite_glob_0_25});
  return Object.entries(variants).reduce((acc, [path, module]) => {
    const fileName = path.split("/").pop()?.replace(".astro", "");
    if (fileName && module && typeof module === "object" && "default" in module) {
      acc[fileName] = module.default;
    }
    return acc;
  }, {});
}

function shouldItemHavePage(item, meta) {
  return shouldItemHavePageData(item.data, meta, true);
}
function shouldItemUseRootPath(item, meta) {
  return shouldItemUseRootPathData(item.data, meta, false);
}
function shouldCollectionHavePage(meta) {
  return shouldCollectionHavePageMeta(meta, true);
}
async function shouldProcessCollection(collectionName) {
  const meta = getCollectionMeta(collectionName);
  if (meta.itemsHasPage !== false) {
    return true;
  }
  const entries = await getCollection(collectionName);
  return shouldProcessCollectionData(entries, meta);
}

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  shouldCollectionHavePage,
  shouldItemHavePage,
  shouldItemUseRootPath,
  shouldProcessCollection
}, Symbol.toStringTag, { value: 'Module' }));

function getQueryCollection(queryObj) {
  const collection = queryObj._collection;
  if (!collection) return null;
  if (Array.isArray(collection)) return null;
  return collection;
}

const idRegistry = new ScopedIdRegistry();
const multiCollectionIds = /* @__PURE__ */ new Set();
let lastPagePath = null;
const pageAccessTimes = /* @__PURE__ */ new Map();
const RESET_THRESHOLD_MS = 100;
function checkAndResetIfNeeded(pagePath) {
  const now = Date.now();
  const lastAccess = pageAccessTimes.get(pagePath) || 0;
  const timeSinceLastAccess = now - lastAccess;
  if (lastPagePath !== null && lastPagePath !== pagePath) {
    idRegistry.clearScope(lastPagePath);
    pageAccessTimes.delete(lastPagePath);
    multiCollectionIds.forEach((key) => {
      if (key.startsWith(`${lastPagePath}:`)) {
        multiCollectionIds.delete(key);
      }
    });
  }
  if (timeSinceLastAccess > RESET_THRESHOLD_MS && idRegistry.has(pagePath, "")) {
    idRegistry.clearScope(pagePath);
    multiCollectionIds.forEach((key) => {
      if (key.startsWith(`${pagePath}:`)) {
        multiCollectionIds.delete(key);
      }
    });
  }
  lastPagePath = pagePath;
  pageAccessTimes.set(pagePath, now);
}
function getPageSlug(pathname) {
  const segments = pathname.replace(/^\/|\/$/g, "").split("/");
  const slug = segments[segments.length - 1] || "home";
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function getCollectionPart(query) {
  if (!query) return null;
  const collection = getQueryCollection(query);
  if (collection) return collection;
  const collections = query._collection;
  if (Array.isArray(collections)) {
    return collections.sort().join("-");
  }
  return null;
}
function isMultiCollection(query) {
  if (!query) return false;
  return getQueryCollection(query) === null;
}
function generateBaseId(collectionPart, pageSlug) {
  return `${collectionPart}-${pageSlug}`;
}
function registerAndGetCounter(pagePath, baseId, isMulti) {
  checkAndResetIfNeeded(pagePath);
  if (isMulti) {
    multiCollectionIds.add(`${pagePath}:${baseId}`);
    return 0;
  }
  return idRegistry.register(pagePath, baseId);
}
function formatFinalId(baseId, counter) {
  return counter === 0 ? baseId : `${baseId}-${counter}`;
}
function generateIdFromAstro(Astro, options = {}) {
  const { query, manualId } = options;
  if (manualId) return manualId;
  const pagePath = Astro.url.pathname;
  const pageSlug = getPageSlug(pagePath);
  const collectionPart = getCollectionPart(query);
  if (!collectionPart) return pageSlug;
  const baseId = generateBaseId(collectionPart, pageSlug);
  const isMulti = isMultiCollection(query);
  const counter = registerAndGetCounter(pagePath, baseId, isMulti);
  return formatFinalId(baseId, counter);
}

const $$Astro$4 = createAstro("https://https://griffinswebservices.com");
const $$ContentRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContentRenderer;
  const variantComponents = await getVariantComponents();
  const {
    query: queryProp,
    // Query object for fetching collection items
    variant = "CardVariant",
    // Which variant to render (defaults to CardVariant)
    title: titleOverride,
    // Manual title override
    description: descriptionOverride,
    // Manual description override
    heading: headingOverride,
    // Manual heading override (supports segmented headings)
    id: manualId,
    // Manual ID override (skips auto-generation)
    ...restProps
    // All other props (passed to variant)
  } = Astro2.props;
  let data;
  if (queryProp) {
    const result = await queryProp.get();
    const queryCollection = getQueryCollection(queryProp);
    if (queryCollection) {
      const meta = getCollectionMeta(queryCollection);
      const preparedItems = await prepareCollectionEntries(
        result.entries,
        queryCollection,
        meta
      );
      const currentPath = Astro2.url.pathname;
      const collectionIndexPath = `/${queryCollection}`;
      const isOnCollectionPage = currentPath === collectionIndexPath || currentPath === `${collectionIndexPath}/`;
      data = {
        items: preparedItems,
        // Use manual override if provided, otherwise use meta title
        // (but not on the collection page itself to avoid redundancy)
        title: titleOverride ?? (isOnCollectionPage ? void 0 : meta.title),
        // Same logic for description
        description: descriptionOverride ?? (isOnCollectionPage ? void 0 : meta.description),
        heading: headingOverride ?? (isOnCollectionPage ? void 0 : meta.heading),
        featuredImage: meta.featuredImage,
        // Only show "View All" link if:
        // 1. Collection has a page (hasPage: true in _meta.mdx)
        // 2. We're not already on the collection page
        collectionUrl: shouldCollectionHavePage(meta) && !isOnCollectionPage ? collectionIndexPath : void 0,
        // Collection title for "View All" button text
        collectionTitle: meta.title || queryCollection.charAt(0).toUpperCase() + queryCollection.slice(1),
        // Spread any additional props (columns, gap, etc.)
        ...restProps
      };
    } else {
      const preparedItems = await Promise.all(
        result.entries.map(async (entry) => {
          const collection = entry.collection;
          const meta = getCollectionMeta(collection);
          return await prepareEntry(entry, collection, meta);
        })
      );
      data = {
        items: preparedItems,
        title: titleOverride,
        description: descriptionOverride,
        heading: headingOverride,
        // No collectionUrl or collectionTitle for multi-collection
        ...restProps
      };
      if (!titleOverride || !descriptionOverride) {
        console.warn(
          `[ContentRenderer] Multi-collection query used without title/description. Please provide these props manually when querying multiple collections.`
        );
      }
    }
  } else {
    data = {
      items: restProps.items ?? [],
      title: titleOverride,
      description: descriptionOverride,
      heading: headingOverride,
      ...restProps
    };
  }
  const items = Array.isArray(data?.items) ? data.items : [];
  if (items.length === 0) {
    return;
  }
  const variantId = generateIdFromAstro(Astro2, {
    query: queryProp,
    manualId
  });
  data.id = variantId;
  const VariantComponent = variantComponents[variant];
  if (!VariantComponent) {
    const availableVariants = Object.keys(variantComponents).join(", ");
    throw new Error(
      `Variant "${variant}" not found. Available variants: ${availableVariants}`
    );
  }
  return renderTemplate`<!-- Render the selected variant with all prepared data and pass through slot content -->${renderComponent($$result, "VariantComponent", VariantComponent, { ...data }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentRenderer.astro", void 0);

const onIdle = (cb) => {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(cb, { timeout: 1e3 });
  } else {
    setTimeout(cb, 0);
  }
};
const getCurrentFrame = (anim) => {
  if (!anim) return 0;
  if (typeof anim.currentFrame === "number") return anim.currentFrame;
  if (typeof anim.currentRawFrame === "number") return anim.currentRawFrame;
  return 0;
};
const SCROLL_TOP_THRESHOLD = 2;
function OptimizedLottie({
  // Animation source (provide one of these)
  animationData = null,
  // Pre-loaded JSON data
  animationUrl = null,
  // URL to JSON file (will fetch at runtime)
  // Display options
  alt = "",
  className = "",
  containerClasses = "relative",
  // Behavior options
  trigger = "load",
  // "auto" | "scroll" | "visible" | "load"
  respectReducedMotion = true,
  rewindToStartOnTop = false,
  // Animation options
  loop = true,
  autoplay = false,
  speed = 1,
  renderer = "svg",
  // "svg" | "canvas" | "html"
  // Performance options
  fadeMs = 180,
  scrollThreshold = 1,
  debounceDelay = 8,
  wheelSensitivity = 1,
  // Fallback content (Astro Image)
  children
}) {
  const containerRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const animationRef = useRef(null);
  const pauseTimeout = useRef(null);
  const lastScrollTime = useRef(0);
  const topResetHandlerRef = useRef(null);
  const resettingToStartRef = useRef(false);
  const wasAtTopRef = useRef(true);
  const [showFallback, setShowFallback] = useState(true);
  const [shouldLoadLottie, setShouldLoadLottie] = useState(false);
  const [pageScrollable, setPageScrollable] = useState(false);
  const cancelTopReset = useCallback(() => {
    const anim = animationRef.current;
    if (anim && topResetHandlerRef.current) {
      anim.removeEventListener("enterFrame", topResetHandlerRef.current);
    }
    topResetHandlerRef.current = null;
    resettingToStartRef.current = false;
  }, []);
  useEffect(() => {
    const check = () => {
      const el = document.documentElement;
      setPageScrollable((el?.scrollHeight || 0) > (window.innerHeight || 0) + 1);
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(check, { timeout: 500 });
    } else {
      setTimeout(check, 100);
    }
  }, []);
  const effectiveTrigger = useMemo(() => {
    if (trigger === "scroll" || trigger === "visible" || trigger === "load") return trigger;
    return pageScrollable ? "scroll" : "load";
  }, [trigger, pageScrollable]);
  const prefersReduced = respectReducedMotion && typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const seenOnce = useVisibility(containerRef, { threshold: 0.1, rootMargin: "0px", once: true });
  const visible = useVisibility(containerRef, { threshold: 0, rootMargin: "0px", once: false });
  useEffect(() => {
    if (prefersReduced) return;
    switch (effectiveTrigger) {
      case "load":
        setShouldLoadLottie(true);
        break;
      case "visible":
        if (visible) setShouldLoadLottie(true);
        break;
    }
  }, [effectiveTrigger, visible, prefersReduced]);
  const handleMovement = useCallback(
    (deltaY) => {
      const anim = animationRef.current;
      const now = Date.now();
      lastScrollTime.current = now;
      if (!anim) return;
      cancelTopReset();
      clearTimeout(pauseTimeout.current);
      if (deltaY > 0) {
        anim.setDirection(1);
        if (anim.isPaused) anim.play();
      } else if (deltaY < 0) {
        anim.setDirection(-1);
        if (anim.isPaused) anim.play();
      }
      pauseTimeout.current = setTimeout(() => {
        if (now === lastScrollTime.current && anim) anim.pause();
      }, 200);
    },
    [cancelTopReset]
  );
  const animateBackToStart = useCallback(() => {
    if (!rewindToStartOnTop) return;
    const anim = animationRef.current;
    if (!anim || resettingToStartRef.current) return;
    const currentFrame = getCurrentFrame(anim);
    if (currentFrame <= 0) {
      anim.goToAndStop(0, true);
      return;
    }
    resettingToStartRef.current = true;
    clearTimeout(pauseTimeout.current);
    const stopAtStart = () => {
      if (getCurrentFrame(anim) <= 0.5) {
        anim.pause();
        anim.goToAndStop(0, true);
        cancelTopReset();
      }
    };
    topResetHandlerRef.current = stopAtStart;
    anim.addEventListener("enterFrame", stopAtStart);
    anim.setDirection(-1);
    anim.play();
  }, [rewindToStartOnTop, cancelTopReset]);
  useScrollInteraction({
    elementRef: null,
    // Use window
    scrollThreshold: 1,
    debounceDelay: 16,
    trustedOnly: true,
    wheelSensitivity: 1,
    // For scroll triggers, this is what loads the Lottie
    onScrollActivity: effectiveTrigger === "scroll" && seenOnce ? ({ dir, delta }) => {
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        const deltaY = dir === "down" ? delta : -delta;
        handleMovement(deltaY);
      }
    } : void 0,
    onWheelActivity: effectiveTrigger === "scroll" && seenOnce ? ({ deltaY }) => {
      if (!shouldLoadLottie) {
        setShouldLoadLottie(true);
      }
      if (animationRef.current) {
        handleMovement(deltaY);
      }
    } : void 0
  });
  useEffect(() => {
    if (!rewindToStartOnTop || effectiveTrigger !== "scroll") return;
    if (typeof window === "undefined") return;
    wasAtTopRef.current = (window.scrollY || 0) <= SCROLL_TOP_THRESHOLD;
    const maybeRewind = () => {
      const pos = window.scrollY || 0;
      const isAtTop = pos <= SCROLL_TOP_THRESHOLD;
      if (!wasAtTopRef.current && isAtTop) {
        animateBackToStart();
      }
      wasAtTopRef.current = isAtTop;
    };
    window.addEventListener("scroll", maybeRewind, { passive: true });
    return () => window.removeEventListener("scroll", maybeRewind);
  }, [rewindToStartOnTop, effectiveTrigger, animateBackToStart]);
  useEffect(() => {
    if (!shouldLoadLottie || !lottieContainerRef.current || animationRef.current) return;
    if (!animationData && !animationUrl) {
      console.warn("OptimizedLottie: No animationData or animationUrl provided");
      return;
    }
    let canceled = false;
    onIdle(async () => {
      if (canceled) return;
      try {
        const { default: lottie } = await import('lottie-web/build/player/lottie_light.js');
        let data = animationData;
        if (!data && animationUrl) {
          const res = await fetch(animationUrl);
          data = await res.json();
        }
        if (canceled || !data) return;
        const anim = lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer,
          loop,
          autoplay,
          animationData: data
        });
        animationRef.current = anim;
        anim.setSpeed(speed);
        if (!autoplay) {
          anim.goToAndStop(0, true);
        }
        const ready = () => {
          if (!autoplay) {
            anim.goToAndStop(0, true);
          }
          requestAnimationFrame(() => setShowFallback(false));
          if (effectiveTrigger === "load" && autoplay) {
            anim.setDirection(1);
            anim.play();
          }
        };
        anim.addEventListener("DOMLoaded", ready);
        anim.addEventListener("data_ready", ready);
        Promise.resolve().then(() => ready());
      } catch (err) {
        console.error("OptimizedLottie: Failed to load animation:", err);
      }
    });
    return () => {
      canceled = true;
      cancelTopReset();
      animationRef.current?.destroy?.();
      animationRef.current = null;
    };
  }, [shouldLoadLottie, effectiveTrigger, animationData, animationUrl, renderer, loop, autoplay, speed, cancelTopReset]);
  useEffect(() => {
    if (effectiveTrigger !== "visible" || !animationRef.current) return;
    if (!showFallback && visible) {
      animationRef.current.setDirection(1);
      animationRef.current.play();
    }
  }, [effectiveTrigger, visible, showFallback]);
  useEffect(() => () => clearTimeout(pauseTimeout.current), []);
  const shouldShowFallback = prefersReduced || showFallback;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      "aria-label": alt,
      className: `${className} ${containerClasses}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              transition: `opacity ${fadeMs}ms ease`,
              opacity: shouldShowFallback ? 1 : 0
            },
            "aria-hidden": !shouldShowFallback,
            children: /* @__PURE__ */ jsx("div", { className: "w-full h-full", children })
          }
        ),
        shouldLoadLottie && /* @__PURE__ */ jsx(
          "div",
          {
            ref: lottieContainerRef,
            className: "absolute inset-0",
            style: { visibility: prefersReduced ? "hidden" : "visible" },
            "aria-hidden": shouldShowFallback
          }
        )
      ]
    }
  );
}

const ANIMATION_URL = new URL("../../Lotties/Animation_logo_small_size.json", import.meta.url);
function LottieLogo({
  alt = "",
  className = "logo-class",
  mediaClasses = "block w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] object-contain",
  trigger = "auto",
  respectReducedMotion = true,
  fadeMs = 180,
  children
}) {
  return /* @__PURE__ */ jsx(
    OptimizedLottie,
    {
      animationUrl: ANIMATION_URL,
      alt,
      className,
      containerClasses: `relative ${mediaClasses}`,
      trigger,
      respectReducedMotion,
      fadeMs,
      rewindToStartOnTop: true,
      loop: true,
      autoplay: false,
      speed: 0.5,
      renderer: "svg",
      scrollThreshold: 1,
      debounceDelay: 8,
      wheelSensitivity: 1,
      children
    }
  );
}

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$TextLogoStatic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextLogoStatic;
  const {
    title = "",
    className = "",
    firstClass = "text-3xl -ml-[0.1rem] leading-wide font-bold",
    restClass = "font-light emphasized-text uppercase text-xs lg:text-sm p-0 m-0 tracking-[0.2em]",
    fadeDuration = 1200,
    animateOutText = false
  } = Astro2.props;
  const words = title.split(" ");
  const firstWord = words[0] || "";
  const restOfTitle = words.slice(1).join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${className} transform transition-opacity transition-transform ease-in-out`, "class")}${addAttribute(`--fade-duration: ${fadeDuration}ms;`, "style")}${addAttribute(animateOutText ? "true" : void 0, "data-scroll-fade")} data-astro-cid-rqc5q4ws> <span${addAttribute(firstClass, "class")} style="line-height: normal;" data-astro-cid-rqc5q4ws> ${firstWord} </span> ${restOfTitle && renderTemplate`<span${addAttribute(restClass, "class")} style="line-height: normal;" data-astro-cid-rqc5q4ws> ${" "}${restOfTitle} </span>`} </div>  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/TextLogoStatic.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/TextLogoStatic.astro", void 0);

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const {
    loading = "eager",
    trigger = "auto",
    textFadeMs = 1200,
    animateOutText = false,
    class: className = "",
    useLottie = true
  } = Astro2.props;
  const shouldUseLottie = useLottie && (trigger === "scroll" || trigger === "visible" || trigger === "load");
  const LOGO_WIDTHS = [45, 80, 90];
  const LOGO_SIZES = "(min-width: 1024px) 45px, 40px";
  const logoClasses = "block w-[43px] h-[43px] lg:w-[45px] lg:h-[45px] object-contain";
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(`flex justify-center items-center gap-1.5 ${className}`, "class")}> ${shouldUseLottie ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${trigger === "scroll" ? renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : "low" })} ` })}` : trigger === "visible" ? renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })} ` })}` : renderTemplate`${renderComponent($$result2, "LottieLogo", LottieLogo, { "alt": "Griffin's Web Services Animated Logo", "loading": loading, "trigger": trigger, "className": "logo-class", "mediaClasses": logoClasses, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/LottieLogo", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })} ` })}`}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": POSTER_SRC, "alt": "Griffin's Web Services Logo", "loading": loading, "decoding": "async", "format": "webp", "widths": LOGO_WIDTHS, "sizes": LOGO_SIZES, "quality": 90, "class": logoClasses, "fetchpriority": loading === "eager" ? "high" : void 0 })}`} <div> ${renderComponent($$result, "TextLogoStatic", $$TextLogoStatic, { "title": siteData.title, "className": "flex flex-col p-0 m-0", "fadeDuration": textFadeMs, "animateOutText": animateOutText })} </div> </a>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/Logo/Logo.astro", void 0);

function CircleCheckbox({
  checked,
  className = "circle-box",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked,
        className: "sr-only peer",
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: `${className} w-9 h-9 rounded-full transition-all flex items-center justify-center relative`,
        children
      }
    )
  ] });
}

function useLocalStorageState(key, initialValue, {
  raw = true,
  validate,
  syncTabs = true,
  serialize = raw ? ((value) => String(value)) : ((value) => JSON.stringify(value)),
  deserialize = raw ? ((value) => value) : ((value) => JSON.parse(value))
} = {}) {
  const initialRef = useRef(initialValue);
  const resolveInitial = useCallback(() => {
    const val = initialRef.current;
    return typeof val === "function" ? val() : val;
  }, []);
  const getInitial = useCallback(() => {
    if (typeof window === "undefined") {
      return resolveInitial();
    }
    try {
      const rawVal = window.localStorage.getItem(key);
      if (rawVal != null) {
        const parsed = deserialize(rawVal);
        if (!validate || validate(parsed)) return parsed;
      }
    } catch {
    }
    return resolveInitial();
  }, [key, deserialize, validate, resolveInitial]);
  const [value, setValue] = useState(getInitial);
  const hasHydratedRef = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      try {
        const rawVal = window.localStorage.getItem(key);
        if (rawVal != null) {
          const parsed = deserialize(rawVal);
          if (!validate || validate(parsed)) {
            if (parsed !== value) {
              setValue(parsed);
            }
            return;
          }
        }
      } catch {
      }
    }
    try {
      if (validate && !validate(value)) return;
      window.localStorage.setItem(key, serialize(value));
    } catch {
    }
  }, [key, value, serialize, validate, deserialize]);
  useEffect(() => {
    if (!syncTabs || typeof window === "undefined") return;
    const onStorage = (e) => {
      if (e.storageArea !== window.localStorage) return;
      if (e.key !== key) return;
      try {
        if (e.newValue == null) return;
        const next = deserialize(e.newValue);
        if (!validate || validate(next)) setValue(next);
      } catch {
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, deserialize, validate, syncTabs]);
  return [value, setValue];
}

function UseMode() {
  const [theme, setTheme] = useLocalStorageState(
    "theme",
    () => "dark",
    {
      raw: true,
      deserialize: (value) => value === "light" ? "light" : "dark"
    }
  );
  const isLight = theme === "light";
  const setIsLight = (value) => setTheme(value ? "light" : "dark");
  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = isLight ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = nextTheme;
    const computed = getComputedStyle(root).getPropertyValue("--color-bg").trim();
    if (computed) {
      let meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "theme-color";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", computed);
    }
  }, [isLight]);
  return [isLight, setIsLight];
}

function DarkLightToggle() {
  const [isLight, setIsLight] = UseMode();
  const maskId = useId();
  const R = 18;
  const ratio = 0.69;
  const rIn = R * ratio;
  const dx = -R * 0.4;
  const dy = R * -0.2;
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
    CircleCheckbox,
    {
      checked: isLight,
      onChange: (event) => setIsLight(event.target.checked),
      "aria-label": "Toggle light mode",
      className: "faded-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--moon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "32 32 36 36",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-4 h-4 sm:w-[14px] sm:h-[14px]",
            children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
                /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "#000" }),
                /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: 18, fill: "#fff" }),
                /* @__PURE__ */ jsx("circle", { cx: 50 + dx, cy: 50 + dy, r: rIn, fill: "#000" })
              ] }) }),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: 18,
                  mask: `url(#${maskId})`,
                  fill: "var(--color-primary)"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "theme-toggle-icon theme-toggle-icon--sun", "aria-hidden": "true", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "13 13 74 74",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "block w-4 h-4 sm:w-[18px] sm:h-[18px]",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "18", fill: "var(--color-primary)" }),
              /* @__PURE__ */ jsxs(
                "g",
                {
                  stroke: "var(--color-primary)",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  children: [
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "15", x2: "50", y2: "25" }),
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "75", x2: "50", y2: "85" }),
                    /* @__PURE__ */ jsx("line", { x1: "15", y1: "50", x2: "25", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "75", y1: "50", x2: "85", y2: "50" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "25.86", x2: "32.32", y2: "32.32" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "67.68", x2: "74.14", y2: "74.14" }),
                    /* @__PURE__ */ jsx("line", { x1: "25.86", y1: "74.14", x2: "32.32", y2: "67.68" }),
                    /* @__PURE__ */ jsx("line", { x1: "67.68", y1: "32.32", x2: "74.14", y2: "25.86" })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}

const ACCENT_COLORS = [
  "var(--main-accent)",
  "var(--color-purple-700)",
  "var(--color-teal-500)",
  "var(--color-emerald-500)",
  "var(--color-lime-500)",
  "var(--color-red-500)",
  "var(--color-pink-500)",
  "var(--color-orange-500)",
  "#722F37"
];

function useAccentColor() {
  const getDefaultAccent = () => ACCENT_COLORS[0];
  const [accent, setAccent] = useLocalStorageState(
    "accent",
    getDefaultAccent,
    {
      raw: true,
      validate: (value) => ACCENT_COLORS.includes(value),
      syncTabs: true
    }
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--color-accent", accent);
  }, [accent]);
  return {
    accent,
    setAccent,
    accents: ACCENT_COLORS
  };
}

function SquareCheckbox({
  color,
  checked,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "inline-block cursor-pointer", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        className: "sr-only peer",
        checked,
        onChange,
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "w-7 h-7 sm:w-8 sm:h-8 block rounded-sm border-2 border-transparent peer-checked:border-primary-light peer-checked:shadow-lg transition-colors",
        style: { backgroundColor: color }
      }
    )
  ] });
}

function AccentPicker() {
  const [open, setOpen] = useState(false);
  const { accent, setAccent, accents } = useAccentColor();
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative inline-flex", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: () => setOpen((value) => !value),
        "aria-label": "Pick accent color",
        className: "faded-bg",
        children: /* @__PURE__ */ jsx("svg", { className: "w-[22px] h-[22px] lg:w-[22px] lg:h-[22px]", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M50 10C50 10 25 35 25 55C25 70.464 37.536 83 50 83C62.464 83 75 70.464 75 55C75 35 50 10 50 10Z",
            fill: "var(--color-accent)"
          }
        ) })
      }
    ),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-full mt-1 lg:mt-2 right-0 sm:left-0 sm:right-auto faded-bg rounded-xl p-2 lg:p-3 flex space-x-2 lg:space-x-3 overflow-x-auto hide-scrollbar shadow-lg z-50 w-max max-w-[calc(100vw-2.5rem)] sm:max-w-none",
        children: accents.map((color) => /* @__PURE__ */ jsx(
          SquareCheckbox,
          {
            color,
            checked: accent === color,
            onChange: () => {
              setAccent(color);
              setOpen(false);
            },
            "aria-label": `Select accent color ${color}`
          },
          color
        ))
      }
    )
  ] });
}

const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "iw", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" }
];
const defaultLanguage = supportedLanguages[0];
function getLanguageByCode(code) {
  return supportedLanguages.find((lang) => lang.code === code);
}

const hasFunctionalConsentFast = () => {
  if (typeof document === "undefined") return false;
  const match = document.cookie.match(/cookie-consent=([^;]*)/);
  if (!match) return false;
  try {
    const consent = JSON.parse(decodeURIComponent(match[1]));
    return consent?.functional === true;
  } catch {
    return false;
  }
};
const CONSENT_MESSAGE = "Please enable functional cookies to use the language switcher. You can manage your preferences in the cookie settings.";
const hasNativeTranslation = () => {
  if (typeof window === "undefined") return false;
  const config = window.getTranslationConfig?.();
  const enabledInConfig = config?.enableNative !== false;
  return enabledInConfig && "Translator" in window;
};
const isGoogleTranslateEnabled = () => {
  if (typeof window === "undefined") return true;
  const config = window.getTranslationConfig?.();
  return config?.enableGoogle !== false;
};
function getStoredLanguage() {
  if (typeof window === "undefined") return defaultLanguage;
  const code = localStorage.getItem("user-language") || defaultLanguage.code;
  return getLanguageByCode(code) || defaultLanguage;
}
function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [ConsentModal, setConsentModal] = useState(null);
  const [hasFunctionalConsent, setHasFunctionalConsent] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    setCurrentLanguage(getStoredLanguage());
    setHasFunctionalConsent(hasFunctionalConsentFast());
  }, []);
  useEffect(() => {
    if (open) {
      setHasFunctionalConsent(hasFunctionalConsentFast());
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setOpen(false);
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorage = (event) => {
      if (event.key !== "user-language") return;
      setCurrentLanguage(
        getLanguageByCode(event.newValue || defaultLanguage.code) || defaultLanguage
      );
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const handleOpenConsentModal = () => {
    if (!ConsentModal) {
      import('./CookiePreferencesModal_CgEIw1Hr.mjs').then((m) => {
        setConsentModal(() => m.default);
        setShowConsentModal(true);
      });
    } else {
      setShowConsentModal(true);
    }
    setOpen(false);
  };
  const handleCloseConsentModal = () => {
    setShowConsentModal(false);
    setHasFunctionalConsent(hasFunctionalConsentFast());
  };
  const handleLanguageChange = (code) => {
    const googleEnabled = isGoogleTranslateEnabled();
    const nativeAvailable = hasNativeTranslation();
    const needsConsent = !nativeAvailable && googleEnabled && !hasFunctionalConsent;
    if (needsConsent && code !== "en") {
      alert(CONSENT_MESSAGE);
      return;
    }
    if (!nativeAvailable && !googleEnabled && code !== "en") {
      alert("Translation is currently disabled.");
      return;
    }
    const nextLanguage = getLanguageByCode(code);
    if (nextLanguage) {
      setCurrentLanguage(nextLanguage);
    }
    if (typeof window !== "undefined" && window.changeLanguage) {
      window.changeLanguage(code);
    }
    setOpen(false);
  };
  const buttonClasses = [
    "faded-bg",
    open ? "ring-2 ring-primary/60" : "",
    "text-primary"
  ].filter(Boolean).join(" ");
  const currentCode = currentLanguage.code?.split("-")[0]?.toUpperCase() || "EN";
  const currentFlag = currentLanguage.flag;
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "relative contents", children: [
    /* @__PURE__ */ jsx(
      CircleCheckbox,
      {
        checked: open,
        onChange: () => setOpen((value) => !value),
        "aria-label": "Choose display language",
        title: hasNativeTranslation() || hasFunctionalConsent || !isGoogleTranslateEnabled() ? "Choose your site language" : "Enable functional cookies to change language",
        className: buttonClasses,
        children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: currentFlag ? /* @__PURE__ */ jsx("span", { className: "text-xl leading-none", "aria-hidden": "true", children: currentFlag }) : /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-xs font-semibold uppercase tracking-wide",
            "aria-hidden": "true",
            children: currentCode
          }
        ) })
      }
    ),
    open && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute top-full left-1/2 z-[60] mt-3 min-w-[220px] -translate-x-1/2 rounded-2xl border card-bg p-3 shadow-2xl backdrop-blur-xl",
        onWheel: (event) => {
          event.stopPropagation();
        },
        onWheelCapture: (event) => event.stopPropagation(),
        children: [
          !hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: handleOpenConsentModal,
              className: "mb-2 rounded-xl border border-yellow-400/40 bg-yellow-500/15 px-3 py-2 text-xs text-text text-left transition hover:border-yellow-400 hover:bg-yellow-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400",
              children: [
                "Enable functional cookies to switch languages.",
                /* @__PURE__ */ jsx("span", { className: "mt-1 block text-[11px] font-semibold uppercase tracking-wide text-primary", children: "Manage consent preferences" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex max-h-64 flex-col overflow-y-auto", children: supportedLanguages.map((language) => {
            const isActive = language.code === currentLanguage.code;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${isActive ? "bg-primary/20 text-primary font-semibold" : "hover:bg-white/5 text-text"} ${!hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent ? "cursor-not-allowed opacity-60" : ""}`,
                onClick: () => handleLanguageChange(language.code),
                disabled: !hasNativeTranslation() && isGoogleTranslateEnabled() && !hasFunctionalConsent,
                children: [
                  language.flag && /* @__PURE__ */ jsx("span", { className: "text-lg", "aria-hidden": "true", children: language.flag }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1 text-left", children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-base leading-tight", children: language.nativeName }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-text/70", children: language.name })
                  ] }),
                  isActive && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-primary",
                      "aria-label": "Currently selected language",
                      children: /* @__PURE__ */ jsx(Icon, { icon: "lucide:check", size: "sm", className: "text-primary" })
                    }
                  )
                ]
              },
              language.code
            );
          }) })
        ]
      }
    ),
    showConsentModal && ConsentModal && /* @__PURE__ */ jsx(
      ConsentModal,
      {
        isOpen: showConsentModal,
        onClose: handleCloseConsentModal
      }
    )
  ] });
}

function ThemeControls({ className = "" }) {
  const ref = useRef(null);
  const [hidden] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: [
        "relative flex items-center gap-1.5",
        "sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
        "transition-opacity duration-300 ease-in-out z-999999",
        hidden ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx(LanguageDropdown, {}),
        /* @__PURE__ */ jsx(DarkLightToggle, {}),
        /* @__PURE__ */ jsx(AccentPicker, {})
      ]
    }
  );
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-[100000]"> <div class="relative flex items-center justify-between head-foot-section py-2 gap-4"> <!-- Logo --> ${renderComponent($$result, "Logo", $$Logo, { "loading": "eager", "trigger": "scroll", "animateOutText": true })} ${renderComponent($$result, "ThemeControls", ThemeControls, { "className": "hidden sm:flex", "client:media": "(min-width: 640px)", "client:component-hydration": "media", "client:component-path": "@/components/ThemeControls/ThemeControls", "client:component-export": "default" })} <div class="flex items-center gap-4"> ${renderComponent($$result, "ThemeControls", ThemeControls, { "className": "sm:hidden", "client:media": "(max-width: 639px)", "client:component-hydration": "media", "client:component-path": "@/components/ThemeControls/ThemeControls", "client:component-export": "default" })} <div class="flex items-center justify-center sm:gap-4"> <!-- Navigation Menu using query --> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("menu-items").where((entry) => {
    const menus = entry.data.menu;
    if (Array.isArray(menus)) {
      return menus.some((m) => m.id === "main-menu");
    }
    return menus?.id === "main-menu";
  }), "variant": "MenuVariant", "mode": "hamburger-only", "className": "header-navigation", "hamburgerTransform": true, "closeButton": false })} </div> </div> </div> </header>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Header.astro", void 0);

const CookiePreferencesModal = lazy(() => import('./CookiePreferencesModal_CgEIw1Hr.mjs'));
function CookiePreferencesButton() {
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleOpenModal = () => {
    startTransition(() => {
      setShowModal(true);
    });
  };
  const handleCloseModal = () => {
    startTransition(() => {
      setShowModal(false);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: handleOpenModal,
        className: "text-text hover:text-surface transition-colors inline-flex items-center gap-2",
        type: "button",
        "aria-label": "Manage cookie preferences",
        disabled: isPending,
        children: [
          "Your Privacy Choices",
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    showModal && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
      CookiePreferencesModal,
      {
        isOpen: showModal,
        onClose: handleCloseModal
      }
    ) })
  ] });
}
const CookiePreferencesButton$1 = memo(CookiePreferencesButton);

const $$ConsentScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/consent/ConsentScript.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/consent/ConsentScript.astro", void 0);

const BUTTON_ID = "accessibility-button";
function AccessibilityButton() {
  const { Component: Modal, isOpen, close } = useLazyLoad(
    () => import('./AccessibilityModal_CiXWSOSP.mjs'),
    { triggerId: BUTTON_ID, toggle: true }
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        id: BUTTON_ID,
        className: "text-text hover:text-surface transition-colors inline-flex items-center gap-2",
        type: "button",
        "aria-label": "Manage reading preferences",
        "aria-expanded": "false",
        children: [
          "Reading Preferences",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                }
              )
            }
          )
        ]
      }
    ),
    Modal && /* @__PURE__ */ jsx(Modal, { isOpen, onClose: close })
  ] });
}
const AccessibilityButton$1 = memo(AccessibilityButton);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$BrowserTranslateScript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BrowserTranslateScript;
  const {
    enableNative = true,
    enableGoogle = true
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", `
(function() {
  var STORAGE_KEY = "user-language";
  var CONSENT_COOKIE = "cookie-consent";

  // Configuration from props
  var CONFIG = {
    enableNative: enableNative,
    enableGoogle: enableGoogle
  };

  var state = {
    currentLanguage: "en",
    translator: null,
    isTranslating: false,
    translationMethod: 'none', // 'native' | 'google' | 'none'
    originalTexts: new WeakMap(),
    translatedNodes: new WeakSet(),
    pendingNodes: new Set(),
    translateTimeout: null,
    observer: null,
    googleInitialized: false,
    googleScriptRequested: false,
    pendingGoogleLanguage: null,
    config: CONFIG,
  };

  window.__browserTranslation = state;

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }

  function setStoredLanguage(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {}
  }

  // Check for functional consent from cookie
  function hasFunctionalConsent() {
    try {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(CONSENT_COOKIE + '=') === 0) {
          var value = decodeURIComponent(cookie.substring(CONSENT_COOKIE.length + 1));
          var consent = JSON.parse(value);
          return consent && consent.functional === true;
        }
      }
    } catch (e) {}
    return false;
  }

  // ============================================
  // Chrome Translator API (Native)
  // ============================================

  function hasTranslatorAPI() {
    // Check if native is enabled via config AND browser supports it
    return CONFIG.enableNative && typeof window !== "undefined" && "Translator" in window;
  }

  async function checkLanguageSupport(targetLang) {
    if (!hasTranslatorAPI() || !window.Translator) return false;

    try {
      var availability = await window.Translator.availability({
        sourceLanguage: "en",
        targetLanguage: targetLang,
      });
      return availability === "available" || availability === "downloadable" || availability === "downloading";
    } catch (e) {
      return false;
    }
  }

  async function createTranslator(targetLang) {
    if (!hasTranslatorAPI() || !window.Translator) return null;

    try {
      var translator = await window.Translator.create({
        sourceLanguage: "en",
        targetLanguage: targetLang,
      });
      return translator;
    } catch (error) {
      return null;
    }
  }

  // ============================================
  // Google Translate SDK (Fallback with consent)
  // ============================================

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function clearCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  function ensureGoogleTranslateScript() {
    // Check if Google Translate is enabled via config
    if (!CONFIG.enableGoogle) return;
    if (state.googleScriptRequested || state.googleInitialized) return;
    if (!hasFunctionalConsent()) return;

    var existing = document.getElementById("google-translate-sdk");
    if (existing) {
      state.googleScriptRequested = true;
      return;
    }

    state.googleScriptRequested = true;

    // Create hidden container for Google Translate
    var el = document.getElementById('google_translate_element');
    if (!el) {
      el = document.createElement('div');
      el.id = 'google_translate_element';
      el.style.display = 'none';
      document.body.appendChild(el);
    }

    var script = document.createElement("script");
    script.id = "google-translate-sdk";
    script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    script.async = true;
    script.onerror = function() { state.googleScriptRequested = false; };
    document.head.appendChild(script);
  }

  window.initializeGoogleTranslate = function() {
    var google = window.google;
    if (!google || !google.translate || !google.translate.TranslateElement) {
      state.googleScriptRequested = false;
      return;
    }

    new google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "", autoDisplay: false },
      "google_translate_element"
    );

    state.googleInitialized = true;
    state.translationMethod = 'google';

    // Apply pending language if any - use retry since combo may not be ready immediately
    var desiredLanguage = state.pendingGoogleLanguage || getStoredLanguage();
    if (desiredLanguage && desiredLanguage !== "en") {
      // Small delay for Google Translate widget to fully initialize its combo element
      setTimeout(function() {
        applyGoogleLanguageWithRetry(desiredLanguage);
      }, 100);
    }
  };

  function applyGoogleLanguage(languageCode, forceApply) {
    var combo = document.querySelector("select.goog-te-combo");
    if (!(combo instanceof HTMLSelectElement)) return false;

    var normalized = languageCode === "en" ? "" : languageCode;

    // Skip if already at target language (unless force apply)
    if (!forceApply && combo.value === normalized) {
      state.pendingGoogleLanguage = null;
      return true;
    }

    // For language-to-language switches (not involving English),
    // Google Translate needs to go back to English first, then to the new language
    var currentComboValue = combo.value;
    if (currentComboValue && currentComboValue !== "" && normalized && normalized !== "") {
      // Currently translated to a language, switching to another language
      // First reset to English
      combo.value = "";
      combo.dispatchEvent(new Event("change"));

      // Then after a short delay, apply the new language
      setTimeout(function() {
        var comboAgain = document.querySelector("select.goog-te-combo");
        if (comboAgain instanceof HTMLSelectElement) {
          comboAgain.value = normalized;
          comboAgain.dispatchEvent(new Event("change"));
        }
      }, 100);
    } else {
      // Simple case: English to language, or language to English
      combo.value = normalized;
      combo.dispatchEvent(new Event("change"));
    }

    if (normalized) {
      document.documentElement.dataset.preferredLanguage = languageCode;
      document.documentElement.lang = languageCode;
    } else {
      document.documentElement.removeAttribute("data-preferred-language");
      document.documentElement.lang = "en";
    }

    state.currentLanguage = languageCode;
    state.pendingGoogleLanguage = null;
    return true;
  }

  // Retry wrapper for applyGoogleLanguage - the combo element may not be ready immediately
  function applyGoogleLanguageWithRetry(languageCode, attempts) {
    attempts = attempts || 0;
    var maxAttempts = 10;
    var delay = 200;

    var success = applyGoogleLanguage(languageCode);
    if (success) return;

    if (attempts < maxAttempts) {
      setTimeout(function() {
        applyGoogleLanguageWithRetry(languageCode, attempts + 1);
      }, delay);
    }
  }

  function persistGoogleCookie(languageCode) {
    if (!hasFunctionalConsent()) {
      if (languageCode === "en") clearCookie("googtrans");
      return;
    }

    if (languageCode === "en") {
      clearCookie("googtrans");
    } else {
      setCookie("googtrans", "/en/" + languageCode, 365);
    }
  }

  // ============================================
  // Native Translation (Chrome/Edge)
  // ============================================

  function shouldTranslateNode(node) {
    var parent = node.parentElement;
    if (!parent) return false;

    var tagName = parent.tagName.toLowerCase();
    // Skip script, style, and form elements
    if (tagName === "script" || tagName === "style" || tagName === "noscript" || tagName === "textarea" || tagName === "input") {
      return false;
    }

    // Skip SVG elements entirely (icons)
    if (parent.closest("svg") || tagName === "svg") {
      return false;
    }

    // Skip elements marked as notranslate
    if (parent.closest(".notranslate, [translate='no']")) {
      return false;
    }

    // Skip screen reader only text (sr-only class) - these are for accessibility
    if (parent.classList && parent.classList.contains("sr-only")) {
      return false;
    }

    // Skip icon containers, tech stack items, and emoji icons
    if (parent.closest("[data-tech-item], [data-icon], .iconify, [aria-hidden='true'], [role='img']")) {
      return false;
    }

    // Skip if parent is a button with only an icon (no meaningful text)
    if (parent.closest("button") && parent.closest("svg, [role='img'], .iconify")) {
      return false;
    }

    var text = node.textContent ? node.textContent.trim() : "";
    if (!text || text.length < 2) {
      return false;
    }

    if (state.translatedNodes.has(node)) {
      return false;
    }

    return true;
  }

  function getTranslatableNodes(root) {
    root = root || document.body;
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          return shouldTranslateNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      }
    );

    var nodes = [];
    var node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    return nodes;
  }

  async function translateNodesNative(nodes) {
    if (!state.translator || nodes.length === 0) return;

    // Translate all nodes in parallel for speed
    await Promise.all(
      nodes.map(async function(node) {
        if (!node.parentElement || state.translatedNodes.has(node)) return;

        var originalText = node.textContent || "";
        if (!originalText.trim()) return;

        if (!state.originalTexts.has(node)) {
          state.originalTexts.set(node, originalText);
        }

        try {
          var translated = await state.translator.translate(originalText);
          if (translated && translated !== originalText && node.parentElement) {
            node.textContent = translated;
            state.translatedNodes.add(node);
          }
        } catch (error) {
          // Individual translation failed, keep original
        }
      })
    );
  }

  // Quick scan to translate any nodes that haven't been translated yet
  // Used for follow-up scans after React hydration
  async function translateUntranslatedNodes() {
    if (state.translationMethod !== 'native') return;
    if (state.currentLanguage === 'en') return;
    if (!state.translator) {
      // Try to recreate translator if missing
      try {
        state.translator = await createTranslator(state.currentLanguage);
      } catch (e) {
        return;
      }
    }
    if (!state.translator) return;

    var allNodes = getTranslatableNodes();
    var untranslatedNodes = allNodes.filter(function(n) {
      return !state.translatedNodes.has(n);
    });

    if (untranslatedNodes.length > 0) {
      await translateNodesNative(untranslatedNodes);
    }
  }

  function schedulePendingTranslation() {
    if (state.translateTimeout) {
      clearTimeout(state.translateTimeout);
    }

    // Quick 50ms debounce - fast response for React hydration
    state.translateTimeout = setTimeout(async function() {
      if (state.pendingNodes.size === 0) return;
      if (state.translationMethod !== 'native') return;
      if (state.currentLanguage === 'en') return;

      var nodes = Array.from(state.pendingNodes);
      state.pendingNodes.clear();

      var validNodes = nodes.filter(function(n) { return n.parentElement && shouldTranslateNode(n); });
      if (validNodes.length === 0) return;

      // If translator doesn't exist or is for wrong language, recreate it
      if (!state.translator) {
        try {
          state.translator = await createTranslator(state.currentLanguage);
        } catch (e) {
          return;
        }
      }

      if (state.translator) {
        await translateNodesNative(validNodes);
      }
    }, 50);
  }

  function setupMutationObserver() {
    if (state.observer) return;

    state.observer = new MutationObserver(function(mutations) {
      if (state.currentLanguage === "en" || state.translationMethod !== 'native') return;

      var hasNewNodes = false;

      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];

        // Handle added nodes (React hydration creates new nodes)
        for (var j = 0; j < mutation.addedNodes.length; j++) {
          var addedNode = mutation.addedNodes[j];
          if (addedNode.nodeType === Node.TEXT_NODE) {
            if (shouldTranslateNode(addedNode)) {
              state.pendingNodes.add(addedNode);
              hasNewNodes = true;
            }
          } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
            // For element nodes, get all translatable text nodes within
            var textNodes = getTranslatableNodes(addedNode);
            for (var k = 0; k < textNodes.length; k++) {
              state.pendingNodes.add(textNodes[k]);
              hasNewNodes = true;
            }
          }
        }

        // Handle text content changes
        if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
          var node = mutation.target;
          if (!state.translatedNodes.has(node) && shouldTranslateNode(node)) {
            state.pendingNodes.add(node);
            hasNewNodes = true;
          }
        }
      }

      if (hasNewNodes && state.pendingNodes.size > 0) {
        schedulePendingTranslation();
      }
    });

    state.observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  function stopMutationObserver() {
    if (state.observer) {
      state.observer.disconnect();
      state.observer = null;
    }
    state.pendingNodes.clear();
    if (state.translateTimeout) {
      clearTimeout(state.translateTimeout);
      state.translateTimeout = null;
    }
  }

  async function translatePageNative(targetLang) {
    state.isTranslating = true;
    document.documentElement.dataset.translating = "true";

    try {
      var isSupported = await checkLanguageSupport(targetLang);
      if (!isSupported) return false;

      var translator = await createTranslator(targetLang);
      if (!translator) return false;

      state.translator = translator;
      state.translationMethod = 'native';
      state.currentLanguage = targetLang;

      var nodes = getTranslatableNodes();
      await translateNodesNative(nodes);

      setupMutationObserver();

      document.documentElement.lang = targetLang;
      document.documentElement.dataset.preferredLanguage = targetLang;

      // Quick follow-up scans for lazy React components (client:visible, client:idle)
      setTimeout(function() { translateUntranslatedNodes(); }, 200);
      setTimeout(function() { translateUntranslatedNodes(); }, 600);
      setTimeout(function() { translateUntranslatedNodes(); }, 1200);

      return true;
    } catch (error) {
      return false;
    } finally {
      state.isTranslating = false;
      delete document.documentElement.dataset.translating;
    }
  }

  function revertNativeTranslations() {
    stopMutationObserver();

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var original = state.originalTexts.get(node);
      if (original !== undefined) {
        node.textContent = original;
        state.originalTexts.delete(node);
      }
    }

    state.translatedNodes = new WeakSet();
    state.translator = null;
  }

  // ============================================
  // Main Translation Logic
  // ============================================

  async function translatePage(targetLang) {
    if (state.isTranslating) return;

    if (targetLang === "en") {
      // Revert to English
      if (state.translationMethod === 'native') {
        revertNativeTranslations();
      } else if (state.translationMethod === 'google' && state.googleInitialized) {
        applyGoogleLanguage("en");
        clearCookie("googtrans");
      }
      state.currentLanguage = "en";
      state.translationMethod = 'none';
      document.documentElement.lang = "en";
      document.documentElement.removeAttribute("data-preferred-language");
      return;
    }

    // If switching to a different language (not from English), revert first
    if (state.currentLanguage !== "en" && state.currentLanguage !== targetLang) {
      if (state.translationMethod === 'native') {
        revertNativeTranslations();
        state.translationMethod = 'none';
      }
      // For Google, we just apply the new language directly - it handles switching
    }

    // Try native Translator API first (Chrome/Edge - no consent needed)
    if (hasTranslatorAPI()) {
      var success = await translatePageNative(targetLang);
      if (success) {
        return;
      }
    }

    // Fall back to Google Translate SDK (requires functional consent)
    if (CONFIG.enableGoogle && hasFunctionalConsent()) {
      state.pendingGoogleLanguage = targetLang;
      state.currentLanguage = targetLang;
      persistGoogleCookie(targetLang);

      if (state.googleInitialized) {
        applyGoogleLanguageWithRetry(targetLang);
      } else {
        ensureGoogleTranslateScript();
      }
    } else if (CONFIG.enableGoogle && !hasFunctionalConsent()) {
      // Google enabled but no consent - dispatch event so UI can prompt user
      window.dispatchEvent(new CustomEvent('translation-needs-consent', {
        detail: { language: targetLang }
      }));
    }
    // If neither native nor Google is available/enabled, translation silently fails
  }

  // Initialize - auto-translate saved preference after page loads
  // Uses requestIdleCallback/setTimeout to avoid blocking initial render
  function init() {
    var savedLang = getStoredLanguage();

    // Skip if English or no saved preference
    if (!savedLang || savedLang === "en") {
      return;
    }

    // For native API - translate after a short delay (non-blocking)
    if (hasTranslatorAPI()) {
      // Use requestIdleCallback if available, otherwise setTimeout
      if ("requestIdleCallback" in window) {
        requestIdleCallback(function() {
          translatePage(savedLang);
        }, { timeout: 2000 });
      } else {
        setTimeout(function() {
          translatePage(savedLang);
        }, 500);
      }
      return;
    }

    // For Google Translate - only if consent is given
    // Load after page is fully rendered to avoid blocking
    if (CONFIG.enableGoogle && hasFunctionalConsent()) {
      // Wait for page to be interactive/complete before loading Google
      if (document.readyState === "complete") {
        // Page already loaded - use idle callback or timeout
        if ("requestIdleCallback" in window) {
          requestIdleCallback(function() {
            translatePage(savedLang);
          }, { timeout: 3000 });
        } else {
          setTimeout(function() {
            translatePage(savedLang);
          }, 1000);
        }
      } else {
        // Wait for load event, then defer further
        window.addEventListener("load", function() {
          setTimeout(function() {
            translatePage(savedLang);
          }, 500);
        });
      }
    }
  }

  // Expose changeLanguage globally
  window.changeLanguage = function(languageCode) {
    var code = languageCode || "en";
    setStoredLanguage(code);

    if (!document.body) {
      document.addEventListener("DOMContentLoaded", function() {
        translatePage(code);
      });
      return;
    }

    translatePage(code);
  };

  // Expose helpers for UI components
  window.translationNeedsConsent = function() {
    // Returns true if translation will need Google (i.e., no native API available/enabled)
    return !hasTranslatorAPI();
  };

  window.getTranslationMethod = function() {
    return state.translationMethod;
  };

  window.getTranslationConfig = function() {
    return CONFIG;
  };

  window.isTranslationAvailable = function() {
    // Returns true if at least one translation method is enabled and available
    var nativeAvailable = CONFIG.enableNative && typeof window !== "undefined" && "Translator" in window;
    var googleAvailable = CONFIG.enableGoogle;
    return nativeAvailable || googleAvailable;
  };

  window.hasFunctionalConsent = hasFunctionalConsent;

  // Listen for consent changes
  window.addEventListener("consent-changed", function() {
    if (!hasFunctionalConsent()) return;
    var preferred = getStoredLanguage();
    if (preferred === "en") return;

    // If we're not using native, try Google now that we have consent
    if (state.translationMethod !== 'native') {
      state.pendingGoogleLanguage = preferred;
      state.currentLanguage = preferred;
      persistGoogleCookie(preferred);
      if (state.googleInitialized) {
        applyGoogleLanguageWithRetry(preferred);
      } else {
        ensureGoogleTranslateScript();
      }
    }
  });

  // Run init after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
})();<\/script> `, '<div id="google_translate_element" style="display: none;" data-astro-cid-u6sger2d></div> '])), defineScriptVars({ enableNative, enableGoogle }), maybeRenderHead());
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/preferences/language/BrowserTranslateScript.astro", void 0);

const $$PreferencesLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ConsentScript", $$ConsentScript, {})}${renderComponent($$result, "BrowserTranslateScript", $$BrowserTranslateScript, { "enableNative": true, "enableGoogle": true })}${renderComponent($$result, "DividerHeading", DividerHeading, { "title": "Preferences", "className": "mb-4" })}${maybeRenderHead()}<div class="flex flex-col justify-center items-start gap-3">  <a href="/privacy-policy#ccpa-rights" class="text-text hover:underline">Do Not Sell My Personal Information</a>  ${renderComponent($$result, "CookiePreferencesButton", CookiePreferencesButton$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/preferences/consent/CookiePreferencesButton", "client:component-export": "default" })} ${renderComponent($$result, "LazyCookieConsentBanner", LazyCookieConsent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/preferences/consent/CookieConsentBanner/Lazy", "client:component-export": "default" })}  ${renderComponent($$result, "AccessibilityButton", AccessibilityButton$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/preferences/accessibility/AccessibilityButton", "client:component-export": "default" })} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/PreferencesLayout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto relative border-t border-accent/10 bg-bg2/60"> <div class="section-color-border"></div> <div class="mx-auto w-full"> <div class="flex flex-wrap gap-10 text-left inner-section sm:text-left justify-between py-20">  <div class="flex flex-col items-start gap-4 lg:w-1/4"> ${renderComponent($$result, "Logo", $$Logo, { "loading": "lazy", "trigger": "scroll", "animateOutText": false })} <p class="text-sm text-text/80 lg:text-base"> ${siteData.description} </p> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("social-media"), "variant": "SocialMediaVariant", "size": "lg", "alignment": "left", "className": "text-bg" })}  ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("contact-us"), "variant": "ContactListVariant", "size": "lg", "alignment": "left", "className": "text-bg", "showButtonSection": false, "showHeadingSection": false })} </div>  <div class="flex flex-col items-start gap-8 text-sm"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("solutions"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })} </div>  <div class="flex flex-col items-start gap-8 text-sm"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("menu-items").where((entry) => {
    const menus = entry.data.menu;
    if (Array.isArray(menus)) {
      return menus.some((m) => m.id === "footer-menu");
    }
    return menus?.id === "footer-menu";
  }).orderBy(sortBy("order", "asc")), "variant": "ListVariant", "title": "Legal Links", "className": "text-bg flex flex-col items-start justify-center", "showHeadingDivider": true })} <div class="flex flex-col items-start gap-2 text-sm"> ${renderComponent($$result, "PreferencesLayout", $$PreferencesLayout, {})} </div> </div>  <div class="flex flex-col items-start gap-8 text-sm">  ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": roots("industries"), "variant": "ListVariant", "showButtonSection": false, "showHeadingDivider": true })} </div> </div> <div class="relative flex flex-col text-center items-center border-t border-accent/10 text-text text-sm sm:flex-row justify-center py-6"> <div class="section-color-border"></div>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteData.legalName}. All rights reserved.
</div> </div> </footer>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/Footer.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { ...seoProps } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preload" href="/fonts/TikTok_Sans/TikTokSans-Latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" fetchpriority="high">${renderComponent($$result, "Theme", $$Theme, {})}<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": seoProps.title, ...seoProps })}${renderComponent($$result, "HeadTags", $$HeadTags, {})}${seoProps.noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}${renderHead()}</head> <body class="antialiased"> ${renderComponent($$result, "Header", $$Header, {})}  ${renderComponent($$result, "BodyTags", $$BodyTags, {})}  ${renderScript($$result, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}  <div id="app" class="min-h-screen flex flex-col">  ${renderSlot($$result, $$slots["default"])}  ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getLanguageByCode as A, __vite_glob_0_0$1 as B, Checkbox as C, __vite_glob_0_1 as D, __vite_glob_0_2$1 as E, FormWrapper as F, __vite_glob_0_3$1 as G, __vite_glob_0_4$1 as H, Input as I, __vite_glob_0_5$1 as J, __vite_glob_0_6$1 as K, __vite_glob_0_7$1 as L, __vite_glob_0_8$1 as M, __vite_glob_0_9$1 as N, __vite_glob_0_10$1 as O, __vite_glob_0_11$1 as P, __vite_glob_0_12$1 as Q, __vite_glob_0_13$1 as R, __vite_glob_0_14$1 as S, Textarea as T, __vite_glob_0_15$1 as U, __vite_glob_0_16$1 as V, __ASTRO_IMAGE_IMPORT_18zSQ8 as _, $$ContentRenderer as a, formatPhoneNumber as b, createSvgComponent as c, shouldProcessCollection as d, getCollection as e, find as f, getCollectionMeta as g, getItemKey as h, shouldItemHavePage as i, shouldItemUseRootPath as j, baseService as k, getImage as l, sortByOrder as m, shouldCollectionHavePage as n, collections as o, parseQuality as p, query as q, roots as r, sortBy as s, isCollectionReference as t, related as u, capitalizeWords as v, getItemProperty as w, __vite_glob_0_0 as x, useLocalStorageState as y, supportedLanguages as z };
