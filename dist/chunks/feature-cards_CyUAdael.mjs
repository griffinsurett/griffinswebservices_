import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo, useState, useRef, useEffect, useCallback, isValidElement } from 'react';
import { u as useVisibility } from './carousels_CEjWH8KZ.mjs';
import { d as useHoverInteraction } from './engagement-hooks_CAwsPVxb.mjs';
import { I as Icon } from './accordion_Dx6odBLx.mjs';

const normalizePx = (value) => {
  if (typeof value === "number") return `${value}px`;
  return value ?? "0px";
};
const useEngagedByTriggers = ({
  ref,
  triggers = "hover",
  active = false,
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 120,
  visibilityOptions = { threshold: 0.25 }
}) => {
  const list = useMemo(
    () => Array.isArray(triggers) ? triggers : [triggers ?? "hover"],
    [triggers]
  );
  const normalized = useMemo(
    () => list.map((token) => String(token || "").toLowerCase()),
    [list]
  );
  const wantsHover = normalized.includes("hover");
  const wantsVisible = normalized.includes("visible");
  const isAlways = normalized.includes("always");
  const isControlledTrigger = normalized.includes("controlled");
  const [hovered, setHovered] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useHoverInteraction({
    hoverDelay,
    unhoverIntent,
    onHoverStart: () => setHovered(true),
    onHoverEnd: () => setHovered(false)
  });
  const normalizedRootMargin = useMemo(() => {
    if (typeof visibleRootMargin === "number") {
      const n = Math.max(0, visibleRootMargin | 0);
      return `-${n}px 0px -${n}px 0px`;
    }
    if (visibleRootMargin && typeof visibleRootMargin === "object") {
      const top = normalizePx(visibleRootMargin.top);
      const right = normalizePx(visibleRootMargin.right);
      const bottom = normalizePx(visibleRootMargin.bottom);
      const left = normalizePx(visibleRootMargin.left);
      return `${top} ${right} ${bottom} ${left}`;
    }
    return visibleRootMargin || "0px";
  }, [visibleRootMargin]);
  const ioOptions = useMemo(
    () => ({
      ...visibilityOptions,
      threshold: visibilityOptions?.threshold ?? 0.25,
      rootMargin: normalizedRootMargin ?? (visibilityOptions ? visibilityOptions.rootMargin : void 0)
    }),
    [normalizedRootMargin, visibilityOptions]
  );
  const inView = useVisibility(ref, ioOptions);
  const engaged = Boolean(
    isAlways || wantsHover && hovered || isControlledTrigger && !!active || wantsVisible && inView
  );
  const prevRef = useRef(engaged);
  const justEngaged = engaged && !prevRef.current;
  const justDisengaged = !engaged && prevRef.current;
  useEffect(() => {
    prevRef.current = engaged;
  }, [engaged]);
  const onEnter = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseEnter(element);
    },
    [handleMouseEnter, wantsHover]
  );
  const onLeave = useCallback(
    (event) => {
      if (!wantsHover) return;
      const element = event?.currentTarget ?? null;
      handleMouseLeave(element);
    },
    [handleMouseLeave, wantsHover]
  );
  return {
    engaged,
    inView,
    hovered,
    wantsHover,
    wantsVisible,
    isAlways,
    isControlledTrigger,
    justEngaged,
    justDisengaged,
    onEnter,
    onLeave
  };
};

const clampPercent = (value) => {
  const raw = typeof value === "number" ? value : typeof value === "string" ? parseFloat(value) : NaN;
  if (!Number.isFinite(raw)) return 0;
  return Math.max(0, Math.min(100, raw));
};
function AnimatedBorder({
  children,
  variant = "none",
  triggers = "hover",
  active = false,
  controller,
  duration = 2e3,
  fadeOutMs = 220,
  color = "var(--color-accent)",
  borderRadius = "rounded-3xl",
  borderWidth = 2,
  className = "",
  innerClassName = "",
  hoverDelay = 0,
  unhoverIntent,
  visibleRootMargin = 75,
  onMouseEnter,
  onMouseLeave,
  linkProps,
  ...rest
}) {
  const hostRef = useRef(null);
  const { engaged, onEnter, onLeave, isAlways } = useEngagedByTriggers({
    ref: hostRef,
    triggers,
    active,
    hoverDelay,
    unhoverIntent,
    visibleRootMargin
  });
  const forceAlways = useMemo(() => {
    const list = Array.isArray(triggers) ? triggers : [triggers];
    return list.map((trigger) => String(trigger || "").toLowerCase()).includes("always");
  }, [triggers]);
  const engagedFinal = engaged || isAlways || forceAlways;
  const controllerValue = useMemo(() => {
    if (controller == null) return null;
    return clampPercent(controller);
  }, [controller]);
  const controllerProvided = Number.isFinite(controllerValue ?? NaN);
  const latestPercentRef = useRef(controllerProvided ? controllerValue || 0 : 0);
  const [fadingOut, setFadingOut] = useState(false);
  const [freezeAt, setFreezeAt] = useState(null);
  const prevEngagedRef = useRef(engagedFinal);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (variant !== "progress") {
      prevEngagedRef.current = engagedFinal;
      return;
    }
    const prev = prevEngagedRef.current;
    prevEngagedRef.current = engagedFinal;
    if (engagedFinal && !prev) {
      setFadingOut(false);
      setFreezeAt(null);
      return;
    }
    if (!engagedFinal && prev) {
      setFreezeAt(latestPercentRef.current);
      setFadingOut(true);
      const timeout = window.setTimeout(() => {
        setFadingOut(false);
        setFreezeAt(null);
        latestPercentRef.current = 0;
      }, fadeOutMs);
      return () => window.clearTimeout(timeout);
    }
  }, [variant, engagedFinal, fadeOutMs]);
  useEffect(() => {
    if (variant !== "progress") return;
    if (controllerProvided) {
      if (engagedFinal) {
        latestPercentRef.current = controllerValue ?? 0;
      }
      return;
    }
    if (engagedFinal) {
      latestPercentRef.current = 100;
    }
  }, [variant, engagedFinal, controllerProvided, controllerValue]);
  const resolvedPercent = useMemo(() => {
    if (variant === "progress") {
      if (controllerProvided) {
        return controllerValue ?? 0;
      }
      return engagedFinal && mounted ? 100 : 0;
    }
    if (variant === "progress-b-f") {
      return engagedFinal ? 100 : 0;
    }
    return 0;
  }, [variant, controllerProvided, controllerValue, engagedFinal, mounted]);
  const displayPercent = variant === "progress" && !engagedFinal && freezeAt != null ? freezeAt : resolvedPercent;
  const borderWidthValue = typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth;
  const overlayStyle = {
    "--ab-color": color,
    "--ab-border-width": borderWidthValue,
    "--ab-duration": `${duration}ms`,
    "--ab-fade-duration": `${fadeOutMs}ms`
  };
  if (variant === "progress" || variant === "progress-b-f") {
    overlayStyle["--ab-progress"] = `${(displayPercent || 0) * 3.6}deg`;
  }
  if (variant === "progress") {
    overlayStyle.opacity = engagedFinal || fadingOut ? 1 : 0;
  } else if (variant === "solid") {
    overlayStyle.opacity = engagedFinal ? 1 : 0;
    overlayStyle.padding = engagedFinal ? borderWidthValue : "0px";
  } else if (variant === "progress-infinite") {
    overlayStyle.opacity = engagedFinal ? 1 : 0;
    overlayStyle.animationPlayState = engagedFinal ? "running" : "paused";
  }
  const overlayClassNames = [
    "absolute",
    "inset-0",
    borderRadius,
    "pointer-events-none",
    "z-20",
    "animated-border-overlay"
  ];
  if (variant === "solid") {
    overlayClassNames.push("is-solid", "transition-all", "duration-800", "ease-in-out");
  } else if (variant === "progress") {
    overlayClassNames.push("progress");
  } else if (variant === "progress-b-f") {
    overlayClassNames.push("progress-b-f");
  } else if (variant === "progress-infinite") {
    overlayClassNames.push("progress-infinite");
  }
  const mountOverlay = variant !== "none";
  const handleEnter = (event) => {
    onMouseEnter?.(event);
    onEnter(event);
  };
  const handleLeave = (event) => {
    onMouseLeave?.(event);
    onLeave(event);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: hostRef,
      className: `relative ${className}`.trim(),
      onMouseEnter: handleEnter,
      onMouseLeave: handleLeave,
      ...rest,
      children: [
        mountOverlay && /* @__PURE__ */ jsx("div", { className: overlayClassNames.join(" "), style: overlayStyle }),
        linkProps?.href ? /* @__PURE__ */ jsx(
          "a",
          {
            ...linkProps,
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName} ${linkProps.className ?? ""}`.trim(),
            children
          }
        ) : /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative z-10 overflow-hidden ${borderRadius} ${innerClassName}`,
            children
          }
        )
      ]
    }
  );
}

function IconListItem({
  data,
  layout = "vertical",
  alignment = "center",
  className = "",
  containerClassName = "",
  iconClassName = "card-icon-color",
  iconSize = "lg",
  imageClassName = "w-12 h-12 rounded-full object-cover flex-shrink-0",
  imageLoading = "lazy",
  titleClassName = "h4",
  titleTag = "h3",
  descriptionClassName = "text-text text-sm",
  descriptionTag = "p",
  showIcon = true,
  showImage = false,
  showTitle = true,
  showDescription = true
}) {
  const { icon, image, title, description } = data;
  const layouts = {
    vertical: "flex flex-col",
    horizontal: "flex items-center",
    "horizontal-reverse": "flex items-start flex-row-reverse"
  };
  const alignments = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };
  const iconSizeClasses = {
    sm: "icon-small",
    md: "icon-medium",
    lg: "icon-large",
    xl: "icon-large"
  };
  const resolvedIconClassName = [
    iconSizeClasses[iconSize],
    iconClassName
  ].filter(Boolean).join(" ");
  const TitleTagComponent = titleTag;
  const DescriptionTagComponent = descriptionTag;
  const fallbackAlt = typeof title === "string" && title || typeof description === "string" && description || "Icon image";
  const imageContent = (() => {
    if (!showImage || !image) return null;
    const imageSrc = typeof image === "string" ? image : image?.src;
    if (!imageSrc) return null;
    const imageAlt = (typeof image === "string" ? void 0 : image?.alt) || fallbackAlt;
    return /* @__PURE__ */ jsx("div", { className: imageClassName, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: imageAlt,
        className: "w-full h-full object-cover",
        loading: imageLoading
      }
    ) });
  })();
  const titleContent = showTitle && title ? /* @__PURE__ */ jsx(TitleTagComponent, { className: titleClassName, children: title }) : null;
  const descriptionContent = showDescription && description ? /* @__PURE__ */ jsx(DescriptionTagComponent, { className: descriptionClassName, children: description }) : null;
  const iconContent = (() => {
    if (!showIcon || showImage || !icon) return null;
    const isIconConfig = typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && "icon" in icon;
    const isRenderableIcon = typeof icon === "string" || typeof icon === "object" && icon !== null && !Array.isArray(icon) && !isValidElement(icon) && !isIconConfig;
    if (isIconConfig) {
      const { icon: iconName, size, className: customClass = "", color, ariaLabel } = icon;
      return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, children: /* @__PURE__ */ jsx(
        Icon,
        {
          icon: iconName,
          size: size ?? iconSize,
          className: customClass,
          color,
          "aria-label": ariaLabel
        }
      ) });
    }
    if (isRenderableIcon) {
      return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, children: /* @__PURE__ */ jsx(Icon, { icon, size: iconSize }) });
    }
    return /* @__PURE__ */ jsx("div", { className: `shrink-0 ${resolvedIconClassName}`, children: icon });
  })();
  return /* @__PURE__ */ jsxs("div", { className: `${layouts[layout]} ${alignments[alignment]} ${className}`.trim(), children: [
    imageContent,
    iconContent,
    layout.includes("horizontal") ? /* @__PURE__ */ jsxs("div", { className: containerClassName, children: [
      titleContent,
      descriptionContent
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      titleContent,
      descriptionContent
    ] })
  ] });
}

const ICON_KEYS = ["icon", "Icon", "iconName"];
const TITLE_KEYS = ["title", "name", "heading", "label"];
const DESCRIPTION_KEYS = ["description", "summary", "excerpt", "body", "content"];
const IMAGE_KEYS = ["image", "img", "media"];
const URL_KEYS = ["url", "href", "link"];
const isRecord = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const hasContent = (value) => {
  if (value === void 0 || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};
const collectDataSources = (input, seen = /* @__PURE__ */ new Set()) => {
  if (!isRecord(input) || seen.has(input)) return [];
  seen.add(input);
  const record = input;
  const nestedSources = collectDataSources(record.data, seen);
  return [...nestedSources, record];
};
const pickValue = (sources, keys) => {
  for (const source of sources) {
    for (const key of keys) {
      const value = source[key];
      if (hasContent(value)) return value;
    }
  }
  return void 0;
};
const createOverrideSource = ({
  icon,
  title,
  description
}) => {
  const overrides = {};
  if (hasContent(icon)) overrides.icon = icon;
  if (hasContent(title)) overrides.title = title;
  if (hasContent(description)) overrides.description = description;
  return Object.keys(overrides).length > 0 ? overrides : void 0;
};
const normalizeFeatureCardData = (sources) => {
  const icon = pickValue(sources, ICON_KEYS);
  const title = pickValue(sources, TITLE_KEYS);
  const description = pickValue(sources, DESCRIPTION_KEYS);
  const image = pickValue(sources, IMAGE_KEYS);
  const urlValue = pickValue(sources, URL_KEYS);
  const url = typeof urlValue === "string" && urlValue.trim().length > 0 ? urlValue : void 0;
  const normalized = {};
  if (icon !== void 0) normalized.icon = icon;
  if (image !== void 0) normalized.image = image;
  if (title !== void 0) normalized.title = title;
  if (description !== void 0) normalized.description = description;
  return {
    content: normalized,
    ...url ? { url } : {}
  };
};
const EMPTY_PAYLOAD = { content: {} };
function FeatureCard({
  data,
  icon,
  title,
  description,
  className = "",
  ringDuration = 800,
  listItemProps
}) {
  const overrideSource = createOverrideSource({ icon, title, description });
  const dataSources = [
    ...overrideSource ? [overrideSource] : [],
    ...collectDataSources(data)
  ];
  const { content: resolvedData, url } = dataSources.length > 0 ? normalizeFeatureCardData(dataSources) : EMPTY_PAYLOAD;
  const {
    layout,
    alignment,
    iconClassName,
    iconSize,
    titleClassName,
    titleTag,
    descriptionClassName,
    descriptionTag,
    ...restListItemProps
  } = listItemProps ?? {};
  const resolvedLayout = layout ?? "vertical";
  const resolvedAlignment = alignment ?? (resolvedLayout.includes("horizontal") ? "left" : "center");
  const defaultIconClassName = resolvedLayout.includes("horizontal") ? "icon-large z-10 card-icon-color mx-auto" : "icon-large z-10 mb-5 card-icon-color mx-auto";
  const listItemConfig = {
    layout: resolvedLayout,
    alignment: resolvedAlignment,
    iconClassName: iconClassName ?? defaultIconClassName,
    iconSize: iconSize ?? "xl",
    titleClassName: titleClassName ?? "h3 mb-3 relative z-10",
    titleTag: titleTag ?? "h3",
    descriptionClassName: descriptionClassName ?? "text-text leading-relaxed relative z-10",
    descriptionTag: descriptionTag ?? "p",
    ...restListItemProps
  };
  const innerCardClass = resolvedLayout.includes("horizontal") ? "lg:h-55 w-full px-8 py-6 relative flex flex-col justify-center items-center card-bg" : "h-90 mx-auto px-10 flex flex-col justify-center items-center relative card-bg";
  const wrapperTextClass = resolvedLayout.includes("horizontal") ? "text-left" : "text-center";
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsxs(
    AnimatedBorder,
    {
      variant: "progress-b-f",
      triggers: "hover",
      duration: ringDuration,
      borderRadius: "rounded-3xl",
      borderWidth: 2,
      className: `group ${wrapperTextClass} outer-card-transition outer-card-hover-transition !duration-[900ms] ease-out`,
      innerClassName: innerCardClass,
      linkProps: url ? { href: url } : void 0,
      children: [
        /* @__PURE__ */ jsx("div", { className: "inner-card-style inner-card-transition inner-card-color" }),
        /* @__PURE__ */ jsx(
          IconListItem,
          {
            data: resolvedData,
            ...listItemConfig
          }
        )
      ]
    }
  ) });
}

export { AnimatedBorder as A, FeatureCard as F, IconListItem as I };
