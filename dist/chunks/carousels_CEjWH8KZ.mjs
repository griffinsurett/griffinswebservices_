import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useMemo, useEffect, useRef, useCallback, isValidElement, Children, useLayoutEffect, forwardRef, useImperativeHandle, useId } from 'react';
import { u as useScrollInteraction, a as useEngagementAutoScroll, b as useEngagementAutoplay, c as useSideDragNavigation } from './engagement-hooks_CAwsPVxb.mjs';
import { a as animationProps, s as staggeredAnimationProps, I as Icon, B as Button, E as EnhancedAccordionItem } from './accordion_Dx6odBLx.mjs';
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_CDqnDASo.mjs';
import 'piccolore';
import { A as AnimatedBorder, I as IconListItem } from './feature-cards_CyUAdael.mjs';

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$ContentBridge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentBridge;
  const {
    items = [],
    bridgeId,
    className = ""
  } = Astro2.props;
  const normalizedBridgeId = (typeof bridgeId === "string" ? bridgeId.trim() : bridgeId != null ? String(bridgeId) : "") || "content-bridge";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`content-bridge ${className}`, "class")}${addAttribute(normalizedBridgeId, "data-bridge-id")}>  ${items.map((item, index) => renderTemplate`<div${addAttribute(`${normalizedBridgeId}-slot-${index}`, "id")} style="display: none;"${addAttribute(index, "data-bridge-slot")}>  ${item.Content ? renderTemplate`${renderComponent($$result, "item.Content", item.Content, {})}` : (
    /* Render raw HTML if provided */
    item.content ? renderTemplate`<div>${unescapeHTML(item.content)}</div>` : null
  )} </div>`)}  ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/ContentBridge/ContentBridge.astro", void 0);

function createIntersectionObserver(element, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit
} = {}) {
  let isVisible = false;
  let hasBeenSeen = false;
  let observer = null;
  if (!element || typeof IntersectionObserver === "undefined") {
    return {
      isVisible,
      hasBeenSeen,
      disconnect: () => void 0
    };
  }
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      const inView = entry.isIntersecting;
      isVisible = inView;
      if (inView) {
        if (!hasBeenSeen) hasBeenSeen = true;
        onEnter?.(entry);
        if (once) observer?.disconnect();
      } else {
        onExit?.(entry);
      }
    },
    { threshold, root, rootMargin }
  );
  observer.observe(element);
  return {
    get isVisible() {
      return isVisible;
    },
    get hasBeenSeen() {
      return hasBeenSeen;
    },
    disconnect: () => observer?.disconnect()
  };
}

function normalizeRootMargin(rootMargin) {
  if (typeof rootMargin === "number") {
    return `0px 0px ${rootMargin}px 0px`;
  }
  const trimmed = String(rootMargin ?? "").trim();
  if (/^-?\d+px$/.test(trimmed)) {
    return `0px 0px ${trimmed} 0px`;
  }
  return trimmed || "0px";
}
function useVisibility(ref, {
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  once = false,
  onEnter,
  onExit,
  onForward,
  onBackward,
  pauseDelay = 100,
  restoreAtTopOffset = 100,
  menuCheckboxId
} = {}) {
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);
  const normalizedMargin = useMemo(() => normalizeRootMargin(rootMargin), [rootMargin]);
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;
    const { isVisible, hasBeenSeen, disconnect } = createIntersectionObserver(element, {
      threshold,
      root,
      rootMargin: normalizedMargin,
      once,
      onEnter: (entry) => {
        setVisible(true);
        setSeen(true);
        onEnter?.(entry);
      },
      onExit: (entry) => {
        setVisible(false);
        onExit?.(entry);
      }
    });
    setVisible(isVisible);
    setSeen(hasBeenSeen);
    return disconnect;
  }, [ref, threshold, root, normalizedMargin, once, onEnter, onExit]);
  const wantsDirection = typeof onForward === "function" || typeof onBackward === "function";
  useScrollInteraction({
    elementRef: null,
    scrollThreshold: 5,
    debounceDelay: pauseDelay,
    onScrollActivity: wantsDirection ? ({ dir }) => {
      if (dir === "down") {
        onForward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset <= restoreAtTopOffset) {
        onBackward?.();
      }
    } : void 0
  });
  useEffect(() => {
    if (!menuCheckboxId || !wantsDirection || typeof document === "undefined") return;
    const checkbox = document.getElementById(menuCheckboxId);
    if (!checkbox) return;
    const syncMenu = () => {
      if (checkbox.checked) {
        onBackward?.();
      } else if (typeof window !== "undefined" && window.pageYOffset > restoreAtTopOffset) {
        onForward?.();
      } else {
        onBackward?.();
      }
    };
    checkbox.addEventListener("change", syncMenu);
    syncMenu();
    return () => checkbox.removeEventListener("change", syncMenu);
  }, [menuCheckboxId, onBackward, onForward, restoreAtTopOffset, wantsDirection]);
  return once ? seen : visible;
}

function Heading({
  tagName: Tag = "h2",
  className = "",
  before,
  text,
  after,
  beforeClass = "",
  textClass = "",
  afterClass = "",
  beforeId,
  textId,
  afterId,
  beforeProps,
  textProps,
  afterProps,
  segmented,
  children,
  ...props
}) {
  const tagLevel = typeof Tag === "string" ? Tag.toLowerCase() : "h2";
  const isHeadingTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tagLevel);
  const hasManualHeadingClass = /\bh[1-6]\b/.test(className);
  const finalClassName = hasManualHeadingClass || !isHeadingTag ? className : `${tagLevel} ${className}`.trim();
  const isPropBased = before !== void 0 || text !== void 0 || after !== void 0;
  const hasSegmented = segmented !== void 0 && segmented !== null;
  const mergeProps = (idFromProp, clsFromProp, bag) => {
    const bagSafe = bag ?? {};
    const mergedClass = [clsFromProp, bagSafe.className].filter(Boolean).join(" ");
    return {
      id: idFromProp ?? bagSafe.id,
      ...bagSafe,
      className: mergedClass || void 0
    };
  };
  const TagComponent = Tag;
  return /* @__PURE__ */ jsx(TagComponent, { className: `${finalClassName} capitalize`, ...props, children: hasSegmented ? /* @__PURE__ */ jsxs(Fragment, { children: [
    segmented?.before !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(beforeId, beforeClass, beforeProps), children: `${segmented.before} ` }),
    segmented?.text !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(textId, textClass, textProps), children: `${segmented.text} ` }),
    segmented?.after !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(afterId, afterClass, afterProps), children: segmented.after })
  ] }) : isPropBased ? /* @__PURE__ */ jsxs(Fragment, { children: [
    before !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { ...mergeProps(beforeId, beforeClass, beforeProps), children: before }),
      " "
    ] }),
    text !== void 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { ...mergeProps(textId, textClass, textProps), children: text }),
      " "
    ] }),
    after !== void 0 && /* @__PURE__ */ jsx("span", { ...mergeProps(afterId, afterClass, afterProps), children: after })
  ] }) : children });
}

function BorderTitle({
  children,
  className = "",
  duration = 1200,
  hoverSweep = true,
  pillClassName = "text-sm px-5 py-2.5 tracking-wider",
  visibleRootMargin
}) {
  return /* @__PURE__ */ jsx("div", { className: "inline-block mb-3", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-b-f",
        triggers: "visible",
        duration,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-primary)",
        className: "inline-block",
        innerClassName: `bg-transparent border-transparent ${pillClassName}`,
        visibleRootMargin,
        children: /* @__PURE__ */ jsx(
          Heading,
          {
            tagName: "span",
            className: `uppercase tracking-wider font-semibold text-heading ${className}`,
            children: /* @__PURE__ */ jsx(
              "span",
              {
                "data-animate": "color-text-fade",
                "data-animate-once": "true",
                className: "color-text-fade",
                style: { "--animation-duration": `${duration}ms` },
                children
              }
            )
          }
        )
      }
    ),
    hoverSweep && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsx(
      AnimatedBorder,
      {
        variant: "progress-infinite",
        triggers: "hover",
        duration: 1200,
        borderRadius: "rounded-full",
        borderWidth: 2,
        color: "var(--color-accent)",
        className: "w-full h-full",
        innerClassName: "bg-transparent border-transparent px-0 py-0 pointer-events-none",
        children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Decorative border sweep" })
      }
    ) })
  ] }) });
}

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    title,
    titleClassName = "",
    titlePillClassName,
    titleVisibleRootMargin,
    heading,
    headingBefore,
    headingEmphasis,
    headingAfter,
    headingTag = "h2",
    headingClassName = "h2 mb-6",
    emphasisClassName = "emphasized-text",
    description,
    descriptionClassName = "large-text",
    className = "text-section",
    headerProps = {}
  } = Astro2.props;
  const isHeadingContent = (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const record = value;
    const hasKeys = "before" in record || "text" in record || "after" in record;
    const looksLikeReactElement = "props" in record && "type" in record;
    return hasKeys && !looksLikeReactElement;
  };
  const headingValue = heading;
  const headingContent = isHeadingContent(headingValue) ? headingValue : void 0;
  const hasSegmentedHeading = headingBefore !== void 0 || headingEmphasis !== void 0 || headingAfter !== void 0;
  const hasContentHeading = headingContent !== void 0;
  const hasPlainHeading = !hasContentHeading && headingValue !== void 0 && headingValue !== null;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${title && renderTemplate`${renderComponent($$result, "BorderTitle", BorderTitle, { "client:visible": true, "className": titleClassName, "pillClassName": titlePillClassName, "visibleRootMargin": titleVisibleRootMargin, "client:component-hydration": "visible", "client:component-path": "@/components/BorderTitle", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${title}` })}`} ${hasContentHeading ? renderTemplate`${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, "segmented": headingContent, "textClass": emphasisClassName, ...headerProps })}` : hasSegmentedHeading ? renderTemplate`${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, "before": headingBefore, "text": headingEmphasis, "after": headingAfter, "textClass": emphasisClassName, ...headerProps })}` : hasPlainHeading && renderTemplate`${renderComponent($$result, "Heading", Heading, { "tagName": headingTag, "className": headingClassName, ...headerProps }, { "default": ($$result2) => renderTemplate`${headingValue}` })}`} ${description && renderTemplate`<p${addAttribute(descriptionClassName, "class")}>${description}</p>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/SectionHeader.astro", void 0);

function shouldShowCollectionCTA(collectionUrl, itemCount) {
  return !!(collectionUrl && itemCount && itemCount > 0);
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (value === null || value === void 0) {
    return [];
  }
  return [value];
}

function getAuthorName(author) {
  if (!author) return "";
  if (typeof author === "string") return author;
  if (author.name) return author.name;
  if (author.title) return author.title;
  if (author.id) return author.id;
  return "";
}
function getImageSrc(image) {
  if (!image) return "";
  if (typeof image === "string") {
    if (image.startsWith("@/")) {
      return image.replace("@/", "/src/");
    }
    return image;
  }
  if (image.src) {
    if (typeof image.src === "string") return image.src;
    if (image.src.src) return image.src.src;
    return image.src;
  }
  return "";
}

const AUTO_SCROLL_START_DELAY_MS$1 = 700;
const AUTO_SCROLL_TARGET_DURATION_SEC$1 = 14;
const AUTO_SCROLL_DEFAULT_CYCLE_MS$1 = AUTO_SCROLL_TARGET_DURATION_SEC$1 * 1e3;
const AUTO_SCROLL_MIN_SPEED$1 = 28;
const MIN_SCROLL_DELTA$1 = 4;
const CONTENT_STABLE_WINDOW_MS$1 = 220;
const CONTENT_STABLE_DELTA_PX$1 = 16;
const CONTENT_READY_TIMEOUT_MS = 2200;
const BETWEEN_SLIDE_PAUSE_MS = 450;
const SLIDE_TRANSITION_DURATION_MS = 750;
function useDesktopEagerPreference() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return;
    }
    const matcher = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };
    handleChange(matcher);
    if (typeof matcher.addEventListener === "function") {
      matcher.addEventListener("change", handleChange);
      return () => matcher.removeEventListener("change", handleChange);
    }
    matcher.addListener(handleChange);
    return () => matcher.removeListener(handleChange);
  }, []);
  return isDesktop;
}
function ComputerScreen({
  item,
  mediaEntry,
  totalSlides,
  activeIndex,
  onCycleComplete,
  autoplayEnabled = true,
  isActive,
  shouldUseDesktopEager,
  onImageLoad,
  deferImageRender = false
}) {
  const viewportRef = useRef(null);
  const [mediaReady, setMediaReady] = useState(false);
  const hasCalledOnLoadRef = useRef(false);
  const [contentReady, setContentReady] = useState(false);
  const [scrollDurationMs, setScrollDurationMs] = useState(
    AUTO_SCROLL_DEFAULT_CYCLE_MS$1
  );
  useRef(0);
  const resolveAutoScrollSpeed = useCallback((host) => {
    const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
    if (maxScrollable <= 0) return 0;
    const baseline = maxScrollable / AUTO_SCROLL_TARGET_DURATION_SEC$1;
    if (!Number.isFinite(baseline) || baseline <= 0) {
      return AUTO_SCROLL_MIN_SPEED$1;
    }
    return Math.max(AUTO_SCROLL_MIN_SPEED$1, baseline);
  }, []);
  const measureScrollDuration = useCallback(
    (host) => {
      const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
      if (maxScrollable <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS$1;
      const pxPerSecond = resolveAutoScrollSpeed(host);
      if (pxPerSecond <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS$1;
      const rawDurationMs = Math.round(maxScrollable / pxPerSecond * 1e3);
      if (!Number.isFinite(rawDurationMs) || rawDurationMs <= 0) {
        return AUTO_SCROLL_DEFAULT_CYCLE_MS$1;
      }
      return Math.max(AUTO_SCROLL_DEFAULT_CYCLE_MS$1, rawDurationMs);
    },
    [resolveAutoScrollSpeed]
  );
  const autoScroll = useEngagementAutoScroll({
    ref: viewportRef,
    active: autoplayEnabled && contentReady,
    speed: resolveAutoScrollSpeed,
    loop: false,
    startDelay: AUTO_SCROLL_START_DELAY_MS$1,
    resumeDelay: 600,
    resumeOnUserInput: true,
    threshold: 0.05,
    resetOnInactive: false
  });
  useEffect(() => {
    if (!autoplayEnabled) return;
    autoScroll.resetPosition(0);
    viewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [autoplayEnabled, autoScroll.resetPosition]);
  useEffect(() => {
    if (deferImageRender) {
      setMediaReady(false);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    const imageEl = host.querySelector("picture img") ?? host.querySelector("img");
    if (!imageEl) {
      setMediaReady(false);
      return;
    }
    if (imageEl.complete && imageEl.naturalHeight > 0) {
      setMediaReady(true);
      return;
    }
    setMediaReady(false);
    const handleReady = () => setMediaReady(true);
    imageEl.addEventListener("load", handleReady, { once: true });
    imageEl.addEventListener("error", handleReady, { once: true });
    return () => {
      imageEl.removeEventListener("load", handleReady);
      imageEl.removeEventListener("error", handleReady);
    };
  }, [item, mediaEntry, deferImageRender]);
  useEffect(() => {
    if (mediaReady && onImageLoad && !hasCalledOnLoadRef.current) {
      hasCalledOnLoadRef.current = true;
      onImageLoad();
    }
  }, [mediaReady, onImageLoad]);
  useEffect(() => {
    if (!mediaReady) {
      setContentReady(false);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    let resolved = false;
    let stabilityCleanup = null;
    const hasScrollableContent = () => {
      const max = Math.max(0, host.scrollHeight - host.clientHeight);
      return max > MIN_SCROLL_DELTA$1;
    };
    const markReady = () => {
      if (resolved) return;
      resolved = true;
      stabilityCleanup?.();
      stabilityCleanup = null;
      setContentReady(true);
    };
    const waitForStableContent = () => {
      if (typeof ResizeObserver === "undefined") {
        markReady();
        return;
      }
      let stabilityTimer = null;
      let lastHeight = host.scrollHeight;
      const scheduleReady = () => {
        if (stabilityTimer) return;
        stabilityTimer = window.setTimeout(() => {
          stabilityTimer = null;
          markReady();
        }, CONTENT_STABLE_WINDOW_MS$1);
      };
      const resetReady = () => {
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };
      const observer = new ResizeObserver(() => {
        const nextHeight = host.scrollHeight;
        if (Math.abs(nextHeight - lastHeight) > CONTENT_STABLE_DELTA_PX$1) {
          lastHeight = nextHeight;
          resetReady();
        }
        scheduleReady();
      });
      observer.observe(host);
      scheduleReady();
      stabilityCleanup = () => {
        observer.disconnect();
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };
    };
    if (hasScrollableContent()) {
      waitForStableContent();
    } else if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => {
        if (hasScrollableContent()) {
          observer.disconnect();
          waitForStableContent();
        }
      });
      observer.observe(host);
      stabilityCleanup = () => observer.disconnect();
    } else {
      markReady();
    }
    const timeoutId = window.setTimeout(() => {
      markReady();
    }, CONTENT_READY_TIMEOUT_MS);
    return () => {
      stabilityCleanup?.();
      window.clearTimeout(timeoutId);
    };
  }, [mediaReady]);
  useEffect(() => {
    if (!contentReady || !autoplayEnabled) {
      setScrollDurationMs(AUTO_SCROLL_DEFAULT_CYCLE_MS$1);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    const updateDuration = () => setScrollDurationMs(measureScrollDuration(host));
    updateDuration();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => updateDuration()) : null;
    observer?.observe(host);
    return () => observer?.disconnect();
  }, [contentReady, measureScrollDuration]);
  useEffect(() => {
    if (!contentReady || !autoplayEnabled || totalSlides <= 1 || autoScroll.paused) return;
    const totalDuration = AUTO_SCROLL_START_DELAY_MS$1 + scrollDurationMs + BETWEEN_SLIDE_PAUSE_MS;
    const timer = window.setTimeout(() => onCycleComplete(), totalDuration);
    return () => window.clearTimeout(timer);
  }, [
    autoplayEnabled,
    contentReady,
    onCycleComplete,
    scrollDurationMs,
    totalSlides,
    autoScroll.paused
  ]);
  useEffect(() => {
    return;
  }, [contentReady, isActive]);
  const fallbackSrc = getImageSrc(item.featuredImage) || getImageSrc(item.bannerImage) || getImageSrc(item.image) || "";
  const wantsDesktopEager = Boolean(mediaEntry?.desktopEager && shouldUseDesktopEager);
  const resolvedLoading = wantsDesktopEager ? "eager" : mediaEntry?.loading ?? "lazy";
  const resolvedFetchPriority = wantsDesktopEager ? "high" : mediaEntry?.fetchPriority ?? "low";
  const renderMedia = () => {
    if (deferImageRender) {
      return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-black/40" });
    }
    if (mediaEntry?.sources?.length) {
      return /* @__PURE__ */ jsxs("picture", { children: [
        mediaEntry.sources.map((source, idx) => /* @__PURE__ */ jsx(
          "source",
          {
            srcSet: source.srcSet,
            sizes: source.sizes ?? mediaEntry.sizes,
            type: source.type
          },
          `${item.slug ?? item.id ?? idx}-source-${idx}`
        )),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: mediaEntry.src,
            srcSet: mediaEntry.srcSet,
            sizes: mediaEntry.sizes,
            alt: mediaEntry.alt || item.alt || item.title || "Project preview",
            width: mediaEntry.width,
            height: mediaEntry.height,
            loading: resolvedLoading,
            decoding: mediaEntry.decoding ?? "async",
            fetchPriority: resolvedFetchPriority,
            draggable: false,
            className: "block h-auto min-h-full w-full select-none object-cover object-top"
          }
        )
      ] });
    }
    if (mediaEntry?.src) {
      return /* @__PURE__ */ jsx(
        "img",
        {
          src: mediaEntry.src,
          srcSet: mediaEntry.srcSet,
          sizes: mediaEntry.sizes,
          alt: mediaEntry.alt || item.alt || item.title || "Project preview",
          width: mediaEntry.width,
          height: mediaEntry.height,
          loading: resolvedLoading,
          decoding: mediaEntry.decoding ?? "async",
          fetchPriority: resolvedFetchPriority,
          draggable: false,
          className: "block h-auto min-h-full w-full select-none object-cover object-top"
        }
      );
    }
    if (!fallbackSrc) {
      return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-b from-bg2 via-bg to-bg/80 text-white/30", children: "Preview coming soon" });
    }
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: fallbackSrc,
        alt: item.alt || item.title || "Project preview",
        loading: wantsDesktopEager ? "eager" : "lazy",
        draggable: false,
        className: "block h-auto min-h-full w-full select-none object-cover object-top",
        decoding: "async",
        fetchPriority: wantsDesktopEager ? "high" : "auto"
      }
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "relative h-full w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative h-full bg-bg3", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 border-b border-white/10 px-4 py-3 text-white/70 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-gray-800" }),
      /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-gray-800" }),
      /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-gray-800" })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      "figure",
      {
        ref: viewportRef,
        className: "relative h-full overflow-y-auto overscroll-contain bg-black/40",
        style: { WebkitOverflowScrolling: "touch" },
        children: renderMedia()
      }
    ),
    false
  ] }) });
}
function PortfolioScreenShowcase({
  items = [],
  className = "",
  mediaEntries: mediaEntriesProp = [],
  staticContainerId,
  loadingStrategy = "static-preview"
}) {
  const slides = useMemo(() => Array.isArray(items) ? items : [], [items]);
  const mediaEntries = useMemo(
    () => Array.isArray(mediaEntriesProp) ? mediaEntriesProp : [],
    [mediaEntriesProp]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [transitionStage, setTransitionStage] = useState("idle");
  const transitionTimerRef = useRef(null);
  const transitionFrameRef = useRef(null);
  const preferDesktopEager = useDesktopEagerPreference();
  const isClientOnly = loadingStrategy === "client-only" || loadingStrategy === "responsive" && !preferDesktopEager;
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const hasSwappedRef = useRef(false);
  const [shouldLoadFirstImage, setShouldLoadFirstImage] = useState(false);
  useEffect(() => {
    if (isClientOnly) {
      setFirstImageLoaded(true);
      hasSwappedRef.current = true;
      setShouldLoadFirstImage(true);
    }
  }, [isClientOnly]);
  useEffect(() => {
    if (isClientOnly) {
      setShouldLoadFirstImage(true);
      return;
    }
    if (!staticContainerId) {
      setShouldLoadFirstImage(true);
      return;
    }
    const IDLE_TIMEOUT_MS = 4e3;
    const MIN_DELAY_MS = 1500;
    let cancelled = false;
    const startLoading = () => {
      if (!cancelled) {
        setShouldLoadFirstImage(true);
      }
    };
    const minDelayTimer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(
          startLoading,
          { timeout: IDLE_TIMEOUT_MS - MIN_DELAY_MS }
        );
      } else {
        setTimeout(startLoading, 500);
      }
    }, MIN_DELAY_MS);
    return () => {
      cancelled = true;
      clearTimeout(minDelayTimer);
    };
  }, [staticContainerId, isClientOnly]);
  const handleFirstImageLoad = useCallback(() => {
    if (hasSwappedRef.current) return;
    hasSwappedRef.current = true;
    const staticEl = staticContainerId ? document.getElementById(staticContainerId) : null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (staticEl) {
          staticEl.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => {
            staticEl.style.display = "none";
          }, 500);
        }
        setFirstImageLoaded(true);
      });
    });
  }, [staticContainerId]);
  useEffect(() => {
    if (!slides.length) {
      setActiveIndex(0);
      setPrevIndex(null);
      setTransitionStage("idle");
      return;
    }
    setActiveIndex((prev) => prev >= slides.length ? 0 : prev);
  }, [slides.length]);
  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
      if (transitionFrameRef.current) {
        cancelAnimationFrame(transitionFrameRef.current);
        transitionFrameRef.current = null;
      }
    },
    []
  );
  const startSlideTransition = useCallback(
    (targetIndex) => {
      if (typeof window === "undefined") return;
      setPrevIndex(activeIndex);
      setActiveIndex(targetIndex);
      setTransitionStage("pre");
      if (transitionFrameRef.current) {
        cancelAnimationFrame(transitionFrameRef.current);
        transitionFrameRef.current = null;
      }
      transitionFrameRef.current = requestAnimationFrame(() => {
        transitionFrameRef.current = requestAnimationFrame(() => {
          setTransitionStage("animating");
        });
      });
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
      transitionTimerRef.current = window.setTimeout(() => {
        setTransitionStage("idle");
        setPrevIndex(null);
      }, SLIDE_TRANSITION_DURATION_MS);
    },
    [activeIndex]
  );
  const handleCycleComplete = useCallback(() => {
    if (!slides.length || slides.length <= 1) return;
    if (transitionStage !== "idle") return;
    const nextIndex = (activeIndex + 1) % slides.length;
    startSlideTransition(nextIndex);
  }, [activeIndex, slides.length, startSlideTransition, transitionStage]);
  if (!slides.length) return null;
  const baseTransitionClass = "absolute inset-0 transition-transform transition-opacity duration-[750ms] ease-[cubic-bezier(0.4,0,0.2,1)]";
  return /* @__PURE__ */ jsx("div", { className: `relative h-full ${className}`.trim(), children: /* @__PURE__ */ jsx("div", { className: "relative h-full w-full overflow-hidden rounded-lg", children: slides.map((item, slideIndex) => {
    const isActive = slideIndex === activeIndex;
    const isPrev = slideIndex === prevIndex;
    const isVisible = isActive || isPrev && transitionStage !== "idle";
    const shouldMount = isActive || isPrev && transitionStage !== "idle";
    if (!shouldMount) return null;
    let translateClass = "translate-x-full";
    if (isPrev && transitionStage !== "idle") {
      translateClass = "-translate-x-full";
    } else if (isActive) {
      if (transitionStage === "idle" || prevIndex === null) {
        translateClass = "translate-x-0";
      } else if (transitionStage === "pre") {
        translateClass = "translate-x-full";
      } else {
        translateClass = "translate-x-0";
      }
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: `${baseTransitionClass} shadow-2xl ${translateClass} ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        "aria-hidden": isActive ? "false" : "true",
        children: /* @__PURE__ */ jsx(
          ComputerScreen,
          {
            item,
            mediaEntry: mediaEntries[slideIndex],
            totalSlides: slides.length || 1,
            activeIndex: slideIndex,
            onCycleComplete: handleCycleComplete,
            autoplayEnabled: isActive && transitionStage === "idle" && firstImageLoaded,
            isActive,
            shouldUseDesktopEager: preferDesktopEager,
            onImageLoad: slideIndex === 0 ? handleFirstImageLoad : void 0,
            deferImageRender: slideIndex === 0 && !shouldLoadFirstImage
          }
        )
      },
      item.slug ?? item.id ?? slideIndex
    );
  }) }) });
}

const AUTO_SCROLL_START_DELAY_MS = 1500;
const AUTO_SCROLL_TARGET_DURATION_SEC = 30;
const AUTO_SCROLL_DEFAULT_CYCLE_MS = AUTO_SCROLL_TARGET_DURATION_SEC * 1e3;
const AUTO_SCROLL_MAX_DURATION_MS = AUTO_SCROLL_DEFAULT_CYCLE_MS * 4;
const AUTO_SCROLL_MIN_SPEED = 18;
const AUTO_SCROLL_MAX_SPEED = 60;
const AUTO_SCROLL_READY_TIMEOUT_MS = 3e3;
const MIN_SCROLL_DELTA = 6;
const CONTENT_STABLE_WINDOW_MS = 260;
const CONTENT_STABLE_DELTA_PX = 18;
function PortfolioItemComponent({
  item,
  i,
  activeIndex,
  itemsLength,
  centerW,
  centerH,
  sideW,
  sideH,
  tx,
  onSelect,
  mediaChild
}) {
  const viewportRef = useRef(null);
  const diff = i - activeIndex;
  const [contentReady, setContentReady] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const [scrollDurationMs, setScrollDurationMs] = useState(
    AUTO_SCROLL_DEFAULT_CYCLE_MS
  );
  const position = useMemo(() => {
    if (diff === 0) return "center";
    if (diff === -1 || diff === itemsLength - 1) return "left";
    if (diff === 1 || diff === -(itemsLength - 1)) return "right";
    return "hidden";
  }, [diff, itemsLength]);
  const isActive = position === "center";
  const translateBase = isActive ? "translate(-50%, 0)" : "translate(-50%, -50%)";
  const resolveAutoScrollSpeed = useCallback((host) => {
    const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
    if (maxScrollable <= 0) return 0;
    const baseline = maxScrollable / AUTO_SCROLL_TARGET_DURATION_SEC;
    if (!Number.isFinite(baseline) || baseline <= 0) {
      return AUTO_SCROLL_MIN_SPEED;
    }
    return Math.min(
      AUTO_SCROLL_MAX_SPEED,
      Math.max(AUTO_SCROLL_MIN_SPEED, baseline)
    );
  }, []);
  const measureScrollDuration = useCallback(
    (host) => {
      const maxScrollable = Math.max(0, host.scrollHeight - host.clientHeight);
      if (maxScrollable <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      const pxPerSecond = resolveAutoScrollSpeed(host);
      if (pxPerSecond <= 0) return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      const rawDurationMs = Math.round(maxScrollable / pxPerSecond * 1e3);
      if (!Number.isFinite(rawDurationMs) || rawDurationMs <= 0) {
        return AUTO_SCROLL_DEFAULT_CYCLE_MS;
      }
      return Math.min(
        AUTO_SCROLL_MAX_DURATION_MS,
        Math.max(AUTO_SCROLL_DEFAULT_CYCLE_MS, rawDurationMs)
      );
    },
    [resolveAutoScrollSpeed]
  );
  useEngagementAutoScroll({
    ref: viewportRef,
    active: isActive && contentReady,
    speed: resolveAutoScrollSpeed,
    loop: false,
    startDelay: AUTO_SCROLL_START_DELAY_MS,
    resumeDelay: 900,
    resumeOnUserInput: true,
    threshold: 0.1,
    resetOnInactive: true
  });
  const [progressPct, setProgressPct] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let raf = null;
    const tick = () => {
      const el = viewportRef.current;
      if (el) {
        const max = Math.max(0, el.scrollHeight - el.clientHeight);
        const pct = max > 0 ? el.scrollTop / max * 100 : 0;
        setProgressPct(Math.round(pct));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isActive]);
  useEffect(() => {
    if (!isActive || !mediaReady) {
      setContentReady(false);
      setScrollDurationMs(AUTO_SCROLL_DEFAULT_CYCLE_MS);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    let resolved = false;
    let stabilityCleanup = null;
    const hasScrollableContent = () => {
      const max = Math.max(0, host.scrollHeight - host.clientHeight);
      return max > MIN_SCROLL_DELTA;
    };
    const markReady = () => {
      if (resolved) return;
      resolved = true;
      stabilityCleanup?.();
      stabilityCleanup = null;
      setContentReady(true);
    };
    const waitForStableContent = () => {
      if (typeof ResizeObserver === "undefined") {
        markReady();
        return;
      }
      let stabilityTimer = null;
      let lastHeight = host.scrollHeight;
      const scheduleReady = () => {
        if (stabilityTimer) return;
        stabilityTimer = window.setTimeout(() => {
          stabilityTimer = null;
          markReady();
        }, CONTENT_STABLE_WINDOW_MS);
      };
      const resetReady = () => {
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };
      const observer = new ResizeObserver(() => {
        const nextHeight = host.scrollHeight;
        if (Math.abs(nextHeight - lastHeight) > CONTENT_STABLE_DELTA_PX) {
          lastHeight = nextHeight;
          resetReady();
        }
        scheduleReady();
      });
      observer.observe(host);
      scheduleReady();
      stabilityCleanup = () => {
        observer.disconnect();
        if (stabilityTimer) {
          window.clearTimeout(stabilityTimer);
          stabilityTimer = null;
        }
      };
    };
    let contentObserver = null;
    if (hasScrollableContent()) {
      waitForStableContent();
    } else if (typeof ResizeObserver !== "undefined") {
      contentObserver = new ResizeObserver(() => {
        if (hasScrollableContent()) {
          contentObserver?.disconnect();
          contentObserver = null;
          waitForStableContent();
        }
      });
      contentObserver.observe(host);
    } else {
      markReady();
    }
    const timeoutId = window.setTimeout(() => {
      markReady();
    }, AUTO_SCROLL_READY_TIMEOUT_MS);
    return () => {
      contentObserver?.disconnect();
      stabilityCleanup?.();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isActive, mediaReady]);
  useEffect(() => {
    if (!isActive || !contentReady) {
      setScrollDurationMs(AUTO_SCROLL_DEFAULT_CYCLE_MS);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    const updateDuration = () => {
      setScrollDurationMs(measureScrollDuration(host));
    };
    updateDuration();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => updateDuration()) : null;
    observer?.observe(host);
    return () => observer?.disconnect();
  }, [isActive, contentReady, measureScrollDuration]);
  useEffect(() => {
    if (!isActive || !contentReady || typeof window === "undefined") return;
    const host = viewportRef.current;
    if (!host) return;
    const dispatch = (phase) => {
      host.dispatchEvent(
        new CustomEvent("autoscroll-user", {
          bubbles: true,
          detail: { phase }
        })
      );
    };
    const startTimer = window.setTimeout(() => {
      dispatch("start");
    }, AUTO_SCROLL_START_DELAY_MS);
    const stopTimer = window.setTimeout(() => {
      dispatch("end");
    }, AUTO_SCROLL_START_DELAY_MS + scrollDurationMs);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(stopTimer);
      dispatch("end");
    };
  }, [isActive, contentReady, scrollDurationMs]);
  const slideBase = "absolute left-1/2 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform bg-gray-900";
  let style = {
    width: `${sideW}px`,
    height: `${sideH}px`,
    transform: `${translateBase} scale(0)`,
    zIndex: 10,
    opacity: 0,
    pointerEvents: "none"
  };
  if (isActive) {
    style = {
      width: `${centerW}px`,
      height: `${centerH}px`,
      transform: `${translateBase} scale(1) rotateY(0deg)`,
      zIndex: 30,
      opacity: 1
    };
  } else if (position === "left") {
    style = {
      width: `${sideW}px`,
      height: `${sideH}px`,
      transform: `${translateBase} translateX(-${tx}px) scale(0.9) rotateY(22deg)`,
      zIndex: 20,
      opacity: 0.4
    };
  } else if (position === "right") {
    style = {
      width: `${sideW}px`,
      height: `${sideH}px`,
      transform: `${translateBase} translateX(${tx}px) scale(0.9) rotateY(-22deg)`,
      zIndex: 20,
      opacity: 0.4
    };
  }
  const viewportClassesActive = "w-full h-full bg-gray-900 overflow-y-auto overscroll-auto touch-pan-y m-0 p-0 relative";
  const viewportClassesInactive = "w-full h-full bg-gray-900 overflow-hidden pointer-events-none select-none m-0 p-0 relative";
  const viewportInlineStyle = isActive ? { WebkitOverflowScrolling: "touch", overscrollBehaviorY: "auto" } : void 0;
  const getImageSrcForPosition = () => {
    const fallback = getImageSrc(item.featuredImage) || getImageSrc(item.bannerImage) || getImageSrc(item.image) || "";
    if (item.imageSources) {
      if (isActive && item.imageSources.center) return item.imageSources.center;
      if ((position === "left" || position === "right") && item.imageSources.side)
        return item.imageSources.side;
      if (item.imageSources.mobile) return item.imageSources.mobile;
    }
    return fallback;
  };
  const getImageStyle = () => {
    if (item.dimensions?.aspectRatio && centerH > 0) {
      return {
        objectFit: "cover",
        objectPosition: "center top"
      };
    }
    return {
      objectFit: "cover",
      objectPosition: "center top"
    };
  };
  const imageSrc = getImageSrcForPosition();
  const altText = item.alt || item.title || "Project preview";
  const providedMedia = useMemo(() => {
    if (!mediaChild) return void 0;
    if (!isValidElement(mediaChild)) return mediaChild;
    const props = mediaChild.props;
    if (props?.["data-portfolio-placeholder"]) return void 0;
    return mediaChild;
  }, [mediaChild]);
  useEffect(() => {
    if (!isActive) {
      setMediaReady(false);
      return;
    }
    const host = viewportRef.current;
    if (!host) return;
    const imageEl = host.querySelector("picture img") ?? host.querySelector("img");
    if (!imageEl) {
      setMediaReady(true);
      return;
    }
    const markReady = () => setMediaReady(true);
    if (imageEl.complete && imageEl.naturalHeight > 0) {
      setMediaReady(true);
      return;
    }
    setMediaReady(false);
    imageEl.addEventListener("load", markReady, { once: false });
    imageEl.addEventListener("error", markReady, { once: false });
    return () => {
      imageEl.removeEventListener("load", markReady);
      imageEl.removeEventListener("error", markReady);
    };
  }, [isActive, providedMedia, imageSrc]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${slideBase} ${isActive ? "top-0" : "top-1/2"}`,
      style,
      "data-carousel-item": true,
      "data-index": i,
      "data-active": isActive ? "true" : "false",
      onClick: () => {
        if (!isActive) onSelect(i);
      },
      children: [
        /* @__PURE__ */ jsx(
          "figure",
          {
            ref: viewportRef,
            className: isActive ? viewportClassesActive : viewportClassesInactive,
            style: viewportInlineStyle,
            "aria-hidden": isActive ? "false" : "true",
            tabIndex: isActive ? 0 : -1,
            children: providedMedia ? providedMedia : imageSrc ? /* @__PURE__ */ jsx(
              "img",
              {
                src: imageSrc,
                alt: altText,
                loading: i === 0 ? "eager" : "lazy",
                draggable: false,
                className: "block w-full h-auto min-h-full select-none",
                style: getImageStyle(),
                decoding: "async"
              }
            ) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full bg-gradient-to-b from-bg2 via-bg to-bg/80" })
          }
        ),
        false
      ]
    }
  );
}

const ChevronLeftIcon = ({ className = "" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 320 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" })
  }
);
const ChevronRightIcon = ({ className = "" }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "currentColor",
    viewBox: "0 0 320 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" })
  }
);
const variantClassMap = {
  floating: "absolute z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-heading/10 border border-heading/20 text-text backdrop-blur-sm hover:bg-heading/20 transition hover:border-heading/75",
  inline: "w-10 h-10 md:w-12 md:h-12 rounded-full faded-bg text-text backdrop-blur-sm transition hover:bg-heading/20 hover:border-heading/50"
};
const defaultIconClasses = "mx-auto my-auto w-4.5 h-4.5 md:w-6 md:h-6";
const CarouselArrow = ({
  direction = "left",
  variant = "floating",
  position,
  className = "",
  iconClassName,
  disabled,
  ...props
}) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  const label = direction === "left" ? "Previous" : "Next";
  const variantClass = variant === "custom" ? className : variantClassMap[variant] || `${variant} ${className}`.trim();
  const buttonStyle = position ? {
    left: position.left,
    right: position.right,
    top: position.top ?? "50%",
    transform: position.transform ?? "translate(-50%, -50%)",
    ...position
  } : void 0;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      className: variantClass,
      style: buttonStyle,
      disabled,
      ...props,
      children: /* @__PURE__ */ jsx(Icon, { className: iconClassName || defaultIconClasses })
    }
  );
};
const LeftArrow = (props) => /* @__PURE__ */ jsx(CarouselArrow, { direction: "left", ...props });
const RightArrow = (props) => /* @__PURE__ */ jsx(CarouselArrow, { direction: "right", ...props });

function useCarouselAutoplay({
  containerRef,
  totalItems,
  currentIndex,
  setIndex,
  autoplay = true,
  autoplayTime = 4e3,
  threshold = 0.3,
  resumeDelay = 5e3,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  pauseOnEngage = true,
  engageOnlyOnActiveItem = true,
  activeItemAttr = "data-active"
}) {
  const scopeId = useMemo(
    () => `carousel-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  const inView = useVisibility(containerRef, { threshold });
  const autoplayState = useEngagementAutoplay({
    totalItems,
    currentIndex,
    setIndex,
    autoplayTime,
    resumeDelay,
    resumeTriggers,
    containerSelector: `[data-autoplay-scope="${scopeId}"]`,
    itemSelector: `[data-autoplay-scope="${scopeId}"] [data-carousel-item]`,
    inView: autoplay && inView,
    pauseOnEngage,
    engageOnlyOnActiveItem,
    activeItemAttr
  });
  return {
    scopeId,
    inView,
    ...autoplayState
  };
}

function PortfolioCarousel({
  items = [],
  defaultIndex = 0,
  autoplay = true,
  autoAdvanceDelay = 5e3,
  showArrows = true,
  showDots = true,
  drag = false,
  className = "",
  children
}) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(defaultIndex);
  const [containerW, setContainerW] = useState(0);
  const slides = useMemo(
    () => Array.isArray(items) ? items : [],
    [items]
  );
  const mediaChildren = useMemo(
    () => Children.toArray(children ?? []),
    [children]
  );
  const ready = containerW > 0;
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const element = containerRef.current;
    if (!element) return;
    const update = () => {
      const width = element.getBoundingClientRect().width;
      if (width && width !== containerW) setContainerW(width);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerW]);
  const { scopeId } = useCarouselAutoplay({
    containerRef,
    totalItems: slides.length,
    currentIndex: index,
    setIndex,
    autoplay,
    autoplayTime: autoAdvanceDelay
  });
  const getSizes = () => {
    const width = containerW;
    if (width < 640)
      return { centerW: 280, centerH: 190, sideW: 180, sideH: 120 };
    if (width < 768)
      return { centerW: 340, centerH: 230, sideW: 220, sideH: 150 };
    if (width < 1024)
      return { centerW: 460, centerH: 310, sideW: 290, sideH: 190 };
    if (width < 1280)
      return { centerW: 680, centerH: 450, sideW: 420, sideH: 290 };
    return { centerW: 860, centerH: 540, sideW: 520, sideH: 360 };
  };
  const getTranslateDistance = (sideW2) => {
    const width = containerW;
    const bleed = width >= 1536 ? 72 : width >= 1280 ? 56 : width >= 1024 ? 40 : 20;
    const edgeGutter = -bleed;
    return width / 2 - sideW2 / 2 - edgeGutter;
  };
  const { centerW, centerH, sideW, sideH } = ready ? getSizes() : { centerW: 0, centerH: 0, sideW: 0, sideH: 0 };
  const tx = ready ? getTranslateDistance(sideW) : 0;
  const goToPrevious = () => setIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  const goToNext = () => setIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  const arrowDiameter = containerW >= 768 ? 48 : 40;
  const arrowRadius = arrowDiameter / 2;
  const gap = containerW >= 1024 ? 20 : 16;
  const isLarge = containerW >= 1280;
  const sideOffsetFromCenterSlide = centerW / 2 + arrowRadius + gap;
  const leftCalc = isLarge ? `calc(50% - ${tx}px)` : `calc(50% - ${sideOffsetFromCenterSlide}px)`;
  const rightCalc = isLarge ? `calc(50% + ${tx}px)` : `calc(50% + ${sideOffsetFromCenterSlide}px)`;
  const leftZoneRef = useRef(null);
  const rightZoneRef = useRef(null);
  useSideDragNavigation({
    enabled: ready && drag && slides.length > 1,
    leftElRef: leftZoneRef,
    rightElRef: rightZoneRef,
    onLeft: goToPrevious,
    onRight: goToNext,
    dragThreshold: Math.max(40, Math.round(containerW * 0.05)),
    tapThreshold: 12
  });
  const sideZoneWidth = Math.max(140, Math.min(sideW, 520));
  const baseZoneStyle = (leftPx) => ({
    left: `calc(50% ${leftPx >= 0 ? "+" : "-"} ${Math.abs(leftPx)}px)`,
    transform: "translateX(-50%)",
    width: `${sideZoneWidth}px`,
    top: 0,
    height: "100%"
  });
  const leftZoneOffset = isLarge ? tx : sideOffsetFromCenterSlide;
  const rightZoneOffset = isLarge ? tx : sideOffsetFromCenterSlide;
  if (!slides.length) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      ...animationProps("fade-in", { once: true }),
      "data-carousel-container": true,
      "data-autoplay-scope": scopeId,
      suppressHydrationWarning: true,
      className: `w-full ${className}`.trim(),
      children: ready && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative overflow-visible w-full leading-none",
            style: { height: `${centerH}px` },
            children: [
              slides.map((item, slideIndex) => /* @__PURE__ */ jsx(
                PortfolioItemComponent,
                {
                  item,
                  i: slideIndex,
                  activeIndex: index,
                  itemsLength: slides.length,
                  centerW,
                  centerH,
                  sideW,
                  sideH,
                  tx,
                  onSelect: setIndex,
                  mediaChild: mediaChildren[slideIndex]
                },
                item.slug ?? item.id ?? slideIndex
              )),
              drag && slides.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: leftZoneRef,
                    className: "absolute z-30 cursor-grab touch-pan-x select-none",
                    style: baseZoneStyle(-leftZoneOffset),
                    "aria-hidden": "true",
                    "data-drag-zone": "left"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    ref: rightZoneRef,
                    className: "absolute z-30 cursor-grab touch-pan-x select-none",
                    style: baseZoneStyle(rightZoneOffset),
                    "aria-hidden": "true",
                    "data-drag-zone": "right"
                  }
                )
              ] }),
              showArrows && slides.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  LeftArrow,
                  {
                    onClick: goToPrevious,
                    variant: "floating",
                    position: {
                      left: leftCalc,
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  RightArrow,
                  {
                    onClick: goToNext,
                    variant: "floating",
                    position: {
                      left: rightCalc,
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }
                  }
                )
              ] })
            ]
          }
        ),
        showDots && slides.length > 1 && /* @__PURE__ */ jsx(
          "nav",
          {
            className: "mt-6 flex justify-center gap-3",
            "aria-label": "Carousel Pagination",
            children: slides.map((_, dotIndex) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setIndex(dotIndex),
                className: `w-3 h-3 rounded-full transition-all duration-300 ${dotIndex === index ? "bg-primary scale-[1.30]" : "faded-bg"}`,
                "aria-label": `Go to slide ${dotIndex + 1}`
              },
              dotIndex
            ))
          }
        )
      ] })
    }
  );
}

const SmoothScrollCarousel = forwardRef(function SmoothScrollCarousel2({
  items = [],
  renderItem = () => null,
  children,
  speed = 30,
  duplicateCount = 3,
  autoplay = true,
  pauseOnHover = true,
  pauseOnEngage = true,
  startDelay = 2500,
  gap = 24,
  itemWidth = 120,
  gradientMask = true,
  gradientWidth = { base: 48, md: 80 },
  threshold = 0.3,
  onItemInteraction,
  resumeDelay = 500,
  resumeTriggers = ["scroll", "click-outside", "hover-away"],
  containerSelector,
  itemSelector,
  className = "",
  trackClassName = ""
}, ref) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const scopeId = useMemo(
    () => `smooth-carousel-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  useImperativeHandle(ref, () => ({
    container: containerRef.current,
    track: trackRef.current,
    getCurrentOffset: () => currentOffset,
    setOffset: setCurrentOffset
  }));
  const inView = useVisibility(containerRef, { threshold });
  const childrenArray = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children]
  );
  const usingChildren = childrenArray.length > 0;
  const baseLength = usingChildren ? childrenArray.length : items.length;
  const duplicated = useMemo(() => {
    if (usingChildren) {
      return Array.from(
        { length: duplicateCount },
        (_, dupIdx) => childrenArray.map((node, idx) => ({
          type: "child",
          node,
          originalIndex: idx,
          duplicateIndex: dupIdx
        }))
      ).flat();
    }
    return Array.from(
      { length: duplicateCount },
      (_, dupIdx) => items.map((item, idx) => ({
        type: "item",
        item,
        originalIndex: idx,
        duplicateIndex: dupIdx
      }))
    ).flat();
  }, [childrenArray, duplicateCount, items, usingChildren]);
  const totalWidth = baseLength * itemWidth;
  const {
    engageUser,
    isAutoplayPaused,
    userEngaged,
    isResumeScheduled,
    pause,
    resume
  } = useEngagementAutoplay({
    totalItems: Math.max(baseLength, 1),
    currentIndex: baseLength > 0 ? Math.floor(Math.abs(currentOffset) / itemWidth) % baseLength : 0,
    setIndex: () => {
    },
    autoplayTime: 50,
    resumeDelay,
    resumeTriggers,
    containerSelector: containerSelector || `[data-autoplay-scope="${scopeId}"]`,
    itemSelector: itemSelector || `[data-autoplay-scope="${scopeId}"] [data-smooth-item]`,
    inView: autoplay && inView,
    pauseOnEngage,
    engageOnlyOnActiveItem: false,
    activeItemAttr: "data-active"
  });
  const [canAnimate, setCanAnimate] = useState(false);
  useEffect(() => {
    const eligible = autoplay && inView && !isAutoplayPaused;
    if (!eligible) {
      setCanAnimate(false);
      return;
    }
    const timer = window.setTimeout(() => setCanAnimate(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [autoplay, inView, isAutoplayPaused, startDelay]);
  useEffect(() => {
    if (!canAnimate) return;
    let animationId;
    let lastTime = performance.now();
    const animate = (now) => {
      const dt = (now - lastTime) / 1e3;
      lastTime = now;
      setCurrentOffset((prev) => {
        if (totalWidth <= 0) return prev;
        let next = prev - speed * dt;
        if (Math.abs(next) >= totalWidth) {
          next += totalWidth;
        }
        return next;
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [canAnimate, speed, totalWidth]);
  const hoverResumeTimerRef = useRef(null);
  const clearHoverResume = useCallback(() => {
    if (hoverResumeTimerRef.current) {
      window.clearTimeout(hoverResumeTimerRef.current);
      hoverResumeTimerRef.current = null;
    }
  }, []);
  const scheduleHoverResume = useCallback(() => {
    clearHoverResume();
    hoverResumeTimerRef.current = window.setTimeout(() => {
      resume();
      hoverResumeTimerRef.current = null;
    }, resumeDelay);
  }, [clearHoverResume, resume, resumeDelay]);
  const handleItemInteraction = (payload, index, type) => {
    if (pauseOnEngage) {
      engageUser();
      pause();
    }
    onItemInteraction?.(payload, index, type);
  };
  const handleMouseEnterContainer = () => {
    if (!pauseOnHover) return;
    engageUser();
    pause();
  };
  const handleMouseLeaveContainer = () => {
    if (!pauseOnHover) return;
    scheduleHoverResume();
  };
  useEffect(() => () => clearHoverResume(), [clearHoverResume]);
  const [gradientPx, setGradientPx] = useState(
    () => typeof window === "undefined" ? gradientWidth.base : window.innerWidth >= 768 ? gradientWidth.md : gradientWidth.base
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const listener = () => {
      setGradientPx(
        window.innerWidth >= 768 ? gradientWidth.md : gradientWidth.base
      );
    };
    window.addEventListener("resize", listener, { passive: true });
    return () => window.removeEventListener("resize", listener);
  }, [gradientWidth.base, gradientWidth.md]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      "data-autoplay-scope": scopeId,
      className: `relative w-full overflow-hidden ${className}`.trim(),
      "data-smooth-carousel": true,
      onMouseEnter: handleMouseEnterContainer,
      onMouseLeave: handleMouseLeaveContainer,
      children: [
        gradientMask && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none",
              style: { width: `${gradientPx}px` }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none",
              style: { width: `${gradientPx}px` }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", style: { paddingInline: `${gradientPx}px` }, children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: trackRef,
            className: `flex items-center ${trackClassName}`.trim(),
            style: {
              transform: `translateX(${currentOffset}px)`,
              width: "max-content",
              gap: `${gap}px`
            },
            children: duplicated.map((entry, index) => /* @__PURE__ */ jsx(
              "div",
              {
                "data-smooth-item": true,
                className: "flex-shrink-0",
                onMouseEnter: () => handleItemInteraction(entry, index, "hover"),
                children: entry.type === "child" ? entry.node : renderItem(entry.item, index, {
                  isActive: false,
                  onInteraction: (type) => handleItemInteraction(entry.item, index, type)
                })
              },
              `${entry.originalIndex}-${entry.duplicateIndex}-${index}`
            ))
          }
        ) }),
        process.env.NODE_ENV === "development" && /* @__PURE__ */ jsxs("div", { className: "absolute top-2 right-2 text-xs bg-bg/60 text-text px-3 py-2 rounded pointer-events-none z-50 space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "🎠 Autoplay: ",
            autoplay ? "ON" : "OFF"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "👁️ In View: ",
            inView ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "⏸️ Paused: ",
            isAutoplayPaused ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "👤 Engaged: ",
            userEngaged ? "YES" : "NO"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "⏲️ Resume Scheduled: ",
            isResumeScheduled ? "YES" : "NO"
          ] })
        ] })
      ]
    }
  );
});

function TechStackLabel({
  name,
  index,
  onTechHover,
  onTechLeave,
  showName = false,
  className = "",
  children
}) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const mobileTimeoutRef = useRef(null);
  useEffect(
    () => () => {
      if (mobileTimeoutRef.current) {
        window.clearTimeout(mobileTimeoutRef.current);
      }
    },
    []
  );
  const handleMouseEnter = () => onTechHover?.(name);
  const handleMouseLeave = () => {
    setIsMobileActive(false);
    onTechLeave?.();
  };
  const handleTouch = () => {
    if (mobileTimeoutRef.current) {
      window.clearTimeout(mobileTimeoutRef.current);
    }
    setIsMobileActive(true);
    onTechHover?.(name);
    mobileTimeoutRef.current = window.setTimeout(() => {
      setIsMobileActive(false);
      onTechLeave?.();
    }, 2500);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...staggeredAnimationProps("fade-in", index, { once: true, staggerDelay: 50 }),
      "data-tech-item": true,
      "data-tech-name": name,
      "data-index": index,
      className: `group flex flex-col items-center flex-shrink-0 ${className}`.trim(),
      role: "button",
      tabIndex: 0,
      "aria-label": name,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleMouseEnter,
      onBlur: handleMouseLeave,
      onTouchStart: handleTouch,
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative p-2 transition-all duration-300 group-hover:scale-110 cursor-pointer select-none", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative text-heading transition-opacity duration-300 ${isMobileActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`,
            children
          }
        ) }),
        showName ? /* @__PURE__ */ jsx(
          "div",
          {
            className: `mt-2 text-xs md:text-sm text-muted transition-all duration-300 whitespace-nowrap ${isMobileActive ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"}`,
            children: name
          }
        ) : /* @__PURE__ */ jsx("span", { className: "sr-only", children: name })
      ]
    }
  );
}

function TechStackSection({
  technologies = [],
  className = ""
}) {
  const [hoveredTech, setHoveredTech] = useState(null);
  const techList = useMemo(
    () => technologies.filter((tech) => tech?.title).map((tech) => ({
      name: tech.title ?? "",
      icon: tech.icon ?? "lucide:code"
    })),
    [technologies]
  );
  return /* @__PURE__ */ jsx("div", { className: `inner-section text-center lg:text-left ${className}`.trim(), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block mb-6 leading-tight", children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          tagName: "h2",
          before: "We've mastered ",
          text: "the tools that matter.",
          className: `transition-opacity duration-150 ${hoveredTech ? "opacity-0" : "opacity-100"}`,
          beforeClass: "text-heading block lg:inline",
          textClass: "text-heading block lg:inline"
        }
      ),
      /* @__PURE__ */ jsx(
        Heading,
        {
          tagName: "h2",
          before: "We've mastered ",
          text: hoveredTech ?? "",
          className: `absolute inset-0 pointer-events-none transition-opacity duration-150 ${hoveredTech ? "opacity-100" : "opacity-0"}`,
          beforeClass: "text-heading block lg:inline",
          textClass: "text-accent block lg:inline"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      SmoothScrollCarousel,
      {
        startDelay: 5e3,
        speed: 30,
        gap: 32,
        itemWidth: 120,
        autoplay: true,
        pauseOnHover: true,
        pauseOnEngage: true,
        gradientMask: true,
        gradientWidth: { base: 48, md: 72 },
        className: "relative w-full h-[84px] md:h-[96px]",
        children: techList.map((tech, index) => /* @__PURE__ */ jsx(
          TechStackLabel,
          {
            name: tech.name,
            index,
            onTechHover: setHoveredTech,
            onTechLeave: () => setHoveredTech(null),
            children: /* @__PURE__ */ jsx(Icon, { icon: tech.icon, size: "xl", "aria-label": tech.name })
          },
          `${tech.name}-${index}`
        ))
      }
    )
  ] }) });
}

const __ASTRO_IMAGE_IMPORT_s0yHl = new Proxy({"src":"/assets/placeholder-D97sUwgC.jpg","width":8576,"height":5696,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/placeholder.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/placeholder.jpg");
							return target[name];
						}
					});

function TestimonialCard({
  item,
  className = "",
  ringDuration = 800
}) {
  const quote = item.description ?? "";
  const author = item.author ?? item.title ?? "Happy Client";
  const roleParts = [item.role, item.company].filter(Boolean).join(", ");
  const rating = Math.max(1, Math.min(5, item.rating ?? 5));
  const avatarSrc = getImageSrc(item.featuredImage) || __ASTRO_IMAGE_IMPORT_s0yHl;
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: ringDuration,
      borderRadius: "rounded-3xl",
      borderWidth: 2,
      className: "group text-left outer-card-transition !duration-[900ms] ease-out",
      innerClassName: "h-100 md:h-90 lg:h-80 mx-auto px-10 flex flex-col justify-center items-start relative card-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "inner-card-style inner-card-transition inner-card-color" }),
        /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: { icon: "❝", description: quote ? `“${quote}”` : void 0 },
            layout: "vertical",
            alignment: "left",
            iconClassName: "card-icon-color icon-medium mb-5 z-10 relative",
            descriptionClassName: "text-text text-lg leading-relaxed mb-8 italic relative z-10",
            descriptionTag: "p",
            showTitle: false
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10 w-full", children: [
          /* @__PURE__ */ jsx(
            IconListItem,
            {
              data: {
                image: avatarSrc ? { src: avatarSrc, alt: author } : void 0,
                title: author,
                description: roleParts || void 0
              },
              layout: "horizontal",
              alignment: "left",
              className: "gap-2",
              imageClassName: "w-12 h-12 rounded-full overflow-hidden flex-shrink-0",
              titleClassName: "h4",
              titleTag: "span",
              descriptionClassName: "text-text text-sm",
              descriptionTag: "p",
              showIcon: false,
              showImage: true,
              showTitle: true,
              showDescription: Boolean(roleParts)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-center justify-center items-center", children: Array.from({ length: rating }).map((_, i) => /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5 text-accent fill-current",
              viewBox: "0 0 20 20",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
            },
            `star-${i}`
          )) })
        ] })
      ]
    }
  ) });
}

function TestimonialCarousel({
  items = [],
  slidesPerView = { base: 1, md: 2 },
  gap = 32,
  autoplay = true,
  autoAdvanceDelay = 4500,
  showArrows = false,
  showDots = true,
  drag = false,
  className = ""
}) {
  const containerRef = useRef(null);
  const leftZoneRef = useRef(null);
  const rightZoneRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  const slidesPerViewValue = useMemo(() => {
    const breakpoints = [
      { key: "base", min: 0 },
      { key: "sm", min: 640 },
      { key: "md", min: 768 },
      { key: "lg", min: 1024 },
      { key: "xl", min: 1280 },
      { key: "2xl", min: 1536 }
    ];
    let current = slidesPerView.base ?? 1;
    for (const { key, min } of breakpoints) {
      if (viewportWidth >= min && slidesPerView[key] != null) {
        current = slidesPerView[key];
      }
    }
    return Math.max(1, Number(current) || 1);
  }, [slidesPerView, viewportWidth]);
  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += slidesPerViewValue) {
      result.push(items.slice(i, i + slidesPerViewValue));
    }
    return result.length ? result : [[]];
  }, [items, slidesPerViewValue]);
  const pageCount = pages.length;
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(pageCount - 1);
    }
  }, [pageCount, pageIndex]);
  useCarouselAutoplay({
    containerRef,
    totalItems: pageCount,
    currentIndex: pageIndex,
    setIndex: setPageIndex,
    autoplay,
    autoplayTime: autoAdvanceDelay,
    threshold: 0.3,
    resumeDelay: 5e3,
    resumeTriggers: ["scroll", "click-outside", "hover-away"],
    pauseOnEngage: true,
    engageOnlyOnActiveItem: true,
    activeItemAttr: "data-active"
  });
  const goPrev = () => setPageIndex((prev) => prev === 0 ? pageCount - 1 : prev - 1);
  const goNext = () => setPageIndex((prev) => prev === pageCount - 1 ? 0 : prev + 1);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    if (pageCount <= 1) return;
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 550);
    return () => clearTimeout(timer);
  }, [pageIndex, pageCount]);
  useSideDragNavigation({
    enabled: drag && pageCount > 1,
    leftElRef: leftZoneRef,
    rightElRef: rightZoneRef,
    onLeft: goPrev,
    onRight: goNext,
    dragThreshold: Math.max(40, Math.round(viewportWidth * 0.05)),
    tapThreshold: 12
  });
  const STAGGER_MS = 120;
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative w-full ${className}`.trim(), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative grid items-center gap-x-4 md:gap-x-6 ${showArrows && pageCount > 1 ? "grid-cols-[auto_1fr_auto]" : "grid-cols-1"}`,
        children: [
          showArrows && pageCount > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(LeftArrow, { onClick: goPrev, variant: "inline" }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative z-20 flex transition-transform duration-500 ease-in-out",
                style: {
                  width: `${pageCount * 100}%`,
                  transform: `translateX(-${pageIndex * 100 / pageCount}%)`
                },
                children: pages.map((page, pageIdx) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    "data-carousel-item": true,
                    "data-active": pageIdx === pageIndex ? "true" : "false",
                    className: "shrink-0",
                    style: { width: `${100 / pageCount}%` },
                    children: /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "grid",
                        style: {
                          gridTemplateColumns: `repeat(${slidesPerViewValue}, minmax(0, 1fr))`,
                          gap
                        },
                        children: page.map((testimonial, itemIdx) => /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "min-w-0",
                            ...staggeredAnimationProps("scale-in", pageIdx * slidesPerViewValue + itemIdx, {
                              once: true,
                              staggerDelay: STAGGER_MS
                            }),
                            children: /* @__PURE__ */ jsx(TestimonialCard, { item: testimonial })
                          },
                          `testimonial-${pageIdx}-${itemIdx}`
                        ))
                      }
                    )
                  },
                  `page-${pageIdx}`
                ))
              }
            ),
            transitioning && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-30 pointer-events-auto", "aria-hidden": "true" }),
            drag && pageCount > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: leftZoneRef,
                  className: "absolute top-0 left-0 h-full z-40 cursor-grab touch-pan-x select-none",
                  style: { width: "50%" },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: rightZoneRef,
                  className: "absolute top-0 right-0 h-full z-40 cursor-grab touch-pan-x select-none",
                  style: { width: "50%" },
                  "aria-hidden": "true"
                }
              )
            ] })
          ] }),
          showArrows && pageCount > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(RightArrow, { onClick: goNext, variant: "inline" }) })
        ]
      }
    ),
    showDots && pageCount > 1 && /* @__PURE__ */ jsx("nav", { className: "mt-6 flex justify-center gap-3", "aria-label": "Carousel Pagination", children: Array.from({ length: pageCount }).map((_, dotIdx) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setPageIndex(dotIdx),
        className: `w-3 h-3 rounded-full transition-all duration-300 ${dotIdx === pageIndex ? "bg-primary scale-[1.30]" : "faded-bg"}`,
        "aria-label": `Go to page ${dotIdx + 1}`
      },
      `dot-${dotIdx}`
    )) })
  ] });
}

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$TestimonialCarouselVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialCarouselVariant;
  const {
    items = [],
    title,
    heading,
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
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative overflow-hidden ${className}`.trim(), "class")}> <div class="section-color-border"></div> <div class="inner-section"> ${(title || collectionTitle || description || heading) && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title ?? collectionTitle, "heading": heading ?? title ?? collectionTitle, "description": description, "className": "text-section", "headingClassName": "mb-6", "descriptionClassName": "large-text" })}`} ${safeItems.length > 0 && renderTemplate`${renderComponent($$result, "TestimonialCarousel", TestimonialCarousel, { "client:visible": true, "items": safeItems, "slidesPerView": { base: 1, lg: 2 }, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/TestimonialCarousel", "client:component-export": "default" })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, safeItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCarouselVariant.astro", void 0);

const $$file$1 = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/TestimonialCarouselVariant.astro";
const $$url$1 = undefined;

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestimonialCarouselVariant,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const VideoPlayer = forwardRef(function VideoPlayer2({
  desktop = false,
  className = "",
  wrapperClassName = "",
  overlay,
  autoPlay,
  muted,
  playsInline,
  controls,
  preload,
  ...rest
}, ref) {
  const baseClasses = desktop ? "w-full h-[24rem] object-cover rounded-2xl" : "w-full aspect-video object-cover rounded-2xl";
  const resolvedAutoPlay = autoPlay ?? true;
  const resolvedMuted = muted ?? true;
  const resolvedPlaysInline = playsInline ?? true;
  const resolvedControls = controls ?? desktop;
  const resolvedPreload = preload ?? "metadata";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative rounded-2xl overflow-hidden bg-card/40 ${wrapperClassName}`.trim(),
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            ref,
            className: `${baseClasses} ${className}`.trim(),
            autoPlay: resolvedAutoPlay,
            muted: resolvedMuted,
            playsInline: resolvedPlaysInline,
            controls: resolvedControls,
            preload: resolvedPreload,
            ...rest
          }
        ),
        overlay
      ]
    }
  );
});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_DOMAIN": "https://griffinswebservices.com", "SITE": "https://https://griffinswebservices.com", "SSR": true};
const sanitizeId = (value) => value.replace(/[:]/g, "");
function VideoAccordion({
  items,
  className = "",
  autoAdvanceDelay = 3e3
}) {
  const showDebug = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV })?.DEV || process.env.NODE_ENV !== "production";
  const safeItems = Array.isArray(items) ? items.filter(
    (entry) => !!entry && typeof entry === "object" && !!entry.title
  ) : [];
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const rawId = useId();
  const instanceId = useMemo(() => sanitizeId(rawId), [rawId]);
  const wrapRef = useRef(null);
  const inView = useVisibility(wrapRef, {
    threshold: 0,
    rootMargin: "0px 0px -20% 0px"
  });
  const autoplayTime = useCallback(() => {
    const desktop = desktopVideoRef.current;
    const mobile = mobileVideoRef.current;
    let video = null;
    if (desktop && !desktop.paused && desktop.currentTime > 0) video = desktop;
    else if (mobile && !mobile.paused && mobile.currentTime > 0) video = mobile;
    else if (desktop && desktop.offsetParent !== null) video = desktop;
    else if (mobile && mobile.offsetParent !== null) video = mobile;
    else video = desktop || mobile;
    if (!video || !Number.isFinite(video.duration)) return autoAdvanceDelay;
    const remaining = Math.max(0, (video.duration - video.currentTime) * 1e3);
    return remaining + autoAdvanceDelay;
  }, [autoAdvanceDelay]);
  const {
    engageUser,
    beginGraceWindow,
    isAutoplayPaused,
    isResumeScheduled,
    userEngaged,
    schedule
  } = useEngagementAutoplay({
    totalItems: safeItems.length,
    currentIndex: activeIndex,
    setIndex: (next) => setActiveIndex(next),
    autoplayTime,
    resumeDelay: 5e3,
    containerSelector: `[data-video-accordion="${instanceId}"]`,
    itemSelector: `[data-video-accordion="${instanceId}"] [data-accordion-item]`,
    inView,
    engageOnlyOnActiveItem: true,
    activeItemAttr: "data-active"
  });
  const scheduleRef = useRef(null);
  useEffect(() => {
    scheduleRef.current = schedule;
  }, [schedule]);
  useEffect(() => {
    if (safeItems.length === 0) return;
    if (activeIndex >= safeItems.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeItems.length]);
  const handleSelect = useCallback(
    (index) => {
      setActiveIndex(index);
      setProgress(0);
      engageUser();
      scheduleRef.current?.();
    },
    [engageUser]
  );
  const getActiveVideo = useCallback(() => {
    const desktop = desktopVideoRef.current;
    const mobile = mobileVideoRef.current;
    if (desktop && !desktop.paused && desktop.currentTime > 0) return desktop;
    if (mobile && !mobile.paused && mobile.currentTime > 0) return mobile;
    if (desktop && desktop.offsetParent !== null) return desktop;
    if (mobile && mobile.offsetParent !== null) return mobile;
    return desktop || mobile;
  }, []);
  const handleTimeUpdate = useCallback(() => {
    const video = getActiveVideo();
    if (!video || !video.duration) return;
    setProgress(video.currentTime / video.duration * 100);
    scheduleRef.current?.();
  }, [getActiveVideo]);
  const handleLoadedData = useCallback(() => {
    setProgress(0);
    scheduleRef.current?.();
  }, []);
  const handleEnded = useCallback(() => {
    setProgress(100);
    beginGraceWindow();
  }, [beginGraceWindow]);
  const handleVideoClick = useCallback(() => {
    engageUser();
  }, [engageUser]);
  if (safeItems.length === 0) {
    return null;
  }
  const activeItem = safeItems[Math.min(activeIndex, safeItems.length - 1)];
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: wrapRef,
      ...animationProps("fade-in", { once: true }),
      className: `relative ${className}`.trim(),
      "data-video-accordion": instanceId,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start gap-12 max-2-primary", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "min-w-0 lg:w-1/2 lg:shrink-0 flex flex-col space-y-4",
            "data-accordion-container": true,
            children: safeItems.map((item, index) => {
              const key = item.key || item.title || `item-${index}`;
              return /* @__PURE__ */ jsxs(
                EnhancedAccordionItem,
                {
                  icon: item.icon,
                  title: item.title,
                  description: item.description,
                  isActive: activeIndex === index,
                  progress,
                  onToggle: () => handleSelect(index),
                  children: [
                    activeIndex === index && /* @__PURE__ */ jsx("div", { className: "lg:hidden mt-4", children: /* @__PURE__ */ jsx(
                      VideoPlayer,
                      {
                        ref: (node) => {
                          mobileVideoRef.current = node;
                        },
                        src: item.videoSrc,
                        onTimeUpdate: handleTimeUpdate,
                        onEnded: handleEnded,
                        onLoadedData: handleLoadedData,
                        onClick: handleVideoClick,
                        desktop: false
                      },
                      `mobile-${key}`
                    ) }),
                    item.hasPage && item.url && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "link",
                        href: item.url,
                        rightIcon: "lu:arrow-right",
                        children: [
                          "Explore ",
                          item.title
                        ]
                      }
                    ) })
                  ]
                },
                key
              );
            })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:block lg:w-1/2 min-w-0 sticky-section", children: [
          /* @__PURE__ */ jsx(
            VideoPlayer,
            {
              ref: desktopVideoRef,
              src: activeItem?.videoSrc,
              onTimeUpdate: handleTimeUpdate,
              onEnded: handleEnded,
              onLoadedData: handleLoadedData,
              onClick: handleVideoClick,
              desktop: true,
              wrapperClassName: "shadow-2xl shadow-accent/15 bg-card/40"
            },
            `desktop-${activeItem?.key ?? activeIndex}`
          ),
          showDebug && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-xs text-white/80 bg-zinc-900/70 p-3 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              "⏸️ Autoplay Paused: ",
              isAutoplayPaused ? "✅" : "❌"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "👤 Engaged: ",
              userEngaged ? "✅" : "❌"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "⏲️ Resume Scheduled: ",
              isResumeScheduled ? "✅" : "❌"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "🎪 Active Index: ",
              activeIndex
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "📊 Progress: ",
              Math.round(progress),
              "%"
            ] })
          ] })
        ] })
      ] })
    }
  );
}

const fallbackVideo = "/assets/Black-Microwave-Earrape-C7I0pu6M.mp4";

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$VideoAccordionVariant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoAccordionVariant;
  const {
    items = [],
    title,
    description,
    className = "",
    collectionUrl,
    collectionTitle,
    id,
    autoAdvanceDelay = 3e3,
    showButtonSection = true,
    ctaHref,
    ctaText
  } = Astro2.props;
  const safeItems = toArray(items);
  const solutionEntries = safeItems.filter(
    (item) => item?.parent === "website-solutions"
  );
  const contentItems = solutionEntries.length > 0 ? solutionEntries : safeItems;
  const showHeader = Boolean(title || description);
  const accordionItems = contentItems.map((item, index) => {
    const slug = item?.slug ?? `solution-${index}`;
    const hasPage = item?.hasPage !== false && Boolean(item?.url);
    return {
      key: slug,
      icon: item?.icon,
      title: item?.title,
      description: item?.description ?? item?.summary ?? item?.excerpt,
      slug,
      contentSlotId: `${id}-slot-${index}`,
      videoSrc: item?.videoSrc ?? fallbackVideo,
      hasPage,
      url: hasPage ? item?.url : void 0
    };
  });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`outer-section bg-bg relative ${className}`.trim(), "class")}> <div class="inner-section"> ${showHeader && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": collectionTitle ?? title, "heading": title ?? collectionTitle, "description": description, "className": "text-center max-w-3xl mx-auto", "titleClassName": "tracking-[0.25em]", "descriptionClassName": "large-text text-text/80" })}`} ${accordionItems.length > 0 && renderTemplate`${renderComponent($$result, "ContentBridge", $$ContentBridge, { "items": contentItems, "bridgeId": id }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VideoAccordion", VideoAccordion, { "items": accordionItems, "autoAdvanceDelay": autoAdvanceDelay, "className": showHeader ? "mt-12" : "", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/LoopTemplates/VideoAccordion", "client:component-export": "default" })} ` })}`} ${showButtonSection && shouldShowCollectionCTA(collectionUrl, contentItems.length) && (ctaText || title || collectionTitle) && (ctaHref || collectionUrl) && renderTemplate`<div class="buttons-section-center"> ${renderComponent($$result, "Button", Button, { "client:visible": true, "href": ctaHref ?? collectionUrl, "rightIcon": "lu:arrow-right", "variant": "secondary", "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${ctaText ?? `View All ${(title ?? collectionTitle ?? "").trim()}`}` })} </div>`} </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/VideoAccordionVariant.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ContentRenderer/variants/VideoAccordionVariant.astro";
const $$url = undefined;

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VideoAccordionVariant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionHeader as $, Heading as H, PortfolioScreenShowcase as P, TechStackSection as T, __ASTRO_IMAGE_IMPORT_s0yHl as _, getAuthorName as a, $$ContentBridge as b, PortfolioCarousel as c, __vite_glob_0_25 as d, __vite_glob_0_22 as e, getImageSrc as g, shouldShowCollectionCTA as s, toArray as t, useVisibility as u };
