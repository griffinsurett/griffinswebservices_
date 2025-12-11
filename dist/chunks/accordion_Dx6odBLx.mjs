import { jsx, jsxs } from 'react/jsx-runtime';
import { isValidElement, createElement, useState, useRef, useEffect, forwardRef } from 'react';
import { A as AnimatedBorder, I as IconListItem } from './feature-cards_CyUAdael.mjs';
import { LuPlus, LuPhone, LuMinus, LuMail, LuLinkedin, LuLayers, LuInstagram, LuGlobe, LuGithub, LuContact, LuCode, LuChevronRight, LuCheck, LuArrowUpRight, LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { FaWordpress, FaWarehouse, FaWandMagicSparkles, FaUtensils, FaUsers, FaUniversalAccess, FaUmbrella, FaTruckRampBox, FaTruckFast, FaTruck, FaTrophy, FaTree, FaTemperatureHalf, FaTags, FaStore, FaStethoscope, FaStar, FaSprayCanSparkles, FaSpa, FaSolarPanel, FaShopify, FaShirt, FaShieldHeart, FaShieldHalved, FaShareNodes, FaServer, FaScrewdriverWrench, FaScissors, FaScaleBalanced, FaRoute, FaRocket, FaReact, FaPython, FaPuzzlePiece, FaPlus, FaPlug, FaPhp, FaPersonChalkboard, FaPeopleGroup, FaPenToSquare, FaPenRuler, FaPenNib, FaPalette, FaPaintbrush, FaPaintRoller, FaNodeJs, FaNetworkWired, FaMugHot, FaMobileScreen, FaMicrophone, FaMartiniGlassCitrus, FaMagnifyingGlassChart, FaMagnifyingGlass, FaLocationDot, FaListCheck, FaLightbulb, FaLifeRing, FaLayerGroup, FaLaptop, FaKey, FaJs, FaIdCard, FaHtml5, FaHouseChimneyWindow, FaHouseChimney, FaHouse, FaHeartPulse, FaHeadset, FaHandshake, FaHands, FaHandHoldingHeart, FaHammer, FaGraduationCap, FaGithub, FaGem, FaGears, FaGear, FaFlask, FaFlagUsa, FaFileLines, FaFigma, FaFeatherPointed, FaFeather, FaFaucetDrip, FaExplosion, FaEnvelopeOpenText, FaEnvelopeCircleCheck, FaDumbbell, FaDoorOpen, FaDatabase, FaCubes, FaCss3Alt, FaCrown, FaCouch, FaCoins, FaCode, FaCloudflare, FaClone, FaClockRotateLeft, FaClock, FaChartSimple, FaChartPie, FaChartLine, FaChampagneGlasses, FaCartShopping, FaCartArrowDown, FaCapsules, FaCamera, FaCalendarCheck, FaCalculator, FaCakeCandles, FaBurger, FaBullseye, FaBullhorn, FaBuilding, FaBug, FaBroom, FaBriefcase, FaBrain, FaBoxesStacked, FaBoxOpen, FaBoxArchive, FaBox, FaBorderTopLeft, FaBorderAll, FaBook, FaBolt, FaBlender, FaBellConcierge, FaBagShopping, FaAws, FaAward, FaArrowsUpToLine, FaArrowsUpDownLeftRight, FaArrowsRotate, FaArrowTrendUp } from 'react-icons/fa6';
import { SiWebflow, SiVercel, SiSvelte, SiNextdotjs, SiGatsby, SiFramer, SiFacebook, SiElementor, SiAstro } from 'react-icons/si';

const iconMap = {
  "fa6:arrow-trend-up": FaArrowTrendUp,
  "fa6:arrows-rotate": FaArrowsRotate,
  "fa6:arrows-up-down-left-right": FaArrowsUpDownLeftRight,
  "fa6:arrows-up-to-line": FaArrowsUpToLine,
  "fa6:award": FaAward,
  "fa6:aws": FaAws,
  "fa6:bag-shopping": FaBagShopping,
  "fa6:bell-concierge": FaBellConcierge,
  "fa6:blender": FaBlender,
  "fa6:bolt": FaBolt,
  "fa6:book": FaBook,
  "fa6:border-all": FaBorderAll,
  "fa6:border-top-left": FaBorderTopLeft,
  "fa6:box": FaBox,
  "fa6:box-archive": FaBoxArchive,
  "fa6:box-open": FaBoxOpen,
  "fa6:boxes-stacked": FaBoxesStacked,
  "fa6:brain": FaBrain,
  "fa6:briefcase": FaBriefcase,
  "fa6:broom": FaBroom,
  "fa6:bug": FaBug,
  "fa6:building": FaBuilding,
  "fa6:bullhorn": FaBullhorn,
  "fa6:bullseye": FaBullseye,
  "fa6:burger": FaBurger,
  "fa6:cake-candles": FaCakeCandles,
  "fa6:calculator": FaCalculator,
  "fa6:calendar-check": FaCalendarCheck,
  "fa6:camera": FaCamera,
  "fa6:capsules": FaCapsules,
  "fa6:cart-arrow-down": FaCartArrowDown,
  "fa6:cart-shopping": FaCartShopping,
  "fa6:champagne-glasses": FaChampagneGlasses,
  "fa6:chart-line": FaChartLine,
  "fa6:chart-pie": FaChartPie,
  "fa6:chart-simple": FaChartSimple,
  "fa6:clock": FaClock,
  "fa6:clock-rotate-left": FaClockRotateLeft,
  "fa6:clone": FaClone,
  "fa6:cloudflare": FaCloudflare,
  "fa6:code": FaCode,
  "fa6:coins": FaCoins,
  "fa6:couch": FaCouch,
  "fa6:crown": FaCrown,
  "fa6:css3-alt": FaCss3Alt,
  "fa6:cubes": FaCubes,
  "fa6:database": FaDatabase,
  "fa6:door-open": FaDoorOpen,
  "fa6:dumbbell": FaDumbbell,
  "fa6:envelope-circle-check": FaEnvelopeCircleCheck,
  "fa6:envelope-open-text": FaEnvelopeOpenText,
  "fa6:explosion": FaExplosion,
  "fa6:faucet-drip": FaFaucetDrip,
  "fa6:feather": FaFeather,
  "fa6:feather-pointed": FaFeatherPointed,
  "fa6:figma": FaFigma,
  "fa6:file-lines": FaFileLines,
  "fa6:flag-usa": FaFlagUsa,
  "fa6:flask": FaFlask,
  "fa6:gear": FaGear,
  "fa6:gears": FaGears,
  "fa6:gem": FaGem,
  "fa6:github": FaGithub,
  "fa6:graduation-cap": FaGraduationCap,
  "fa6:hammer": FaHammer,
  "fa6:hand-holding-heart": FaHandHoldingHeart,
  "fa6:hands": FaHands,
  "fa6:handshake": FaHandshake,
  "fa6:headset": FaHeadset,
  "fa6:heart-pulse": FaHeartPulse,
  "fa6:house": FaHouse,
  "fa6:house-chimney": FaHouseChimney,
  "fa6:house-chimney-window": FaHouseChimneyWindow,
  "fa6:html5": FaHtml5,
  "fa6:id-card": FaIdCard,
  "fa6:js": FaJs,
  "fa6:key": FaKey,
  "fa6:laptop": FaLaptop,
  "fa6:layer-group": FaLayerGroup,
  "fa6:life-ring": FaLifeRing,
  "fa6:lightbulb": FaLightbulb,
  "fa6:list-check": FaListCheck,
  "fa6:location-dot": FaLocationDot,
  "fa6:magnifying-glass": FaMagnifyingGlass,
  "fa6:magnifying-glass-chart": FaMagnifyingGlassChart,
  "fa6:martini-glass-citrus": FaMartiniGlassCitrus,
  "fa6:microphone": FaMicrophone,
  "fa6:mobile-screen": FaMobileScreen,
  "fa6:mug-hot": FaMugHot,
  "fa6:network-wired": FaNetworkWired,
  "fa6:node-js": FaNodeJs,
  "fa6:paint-roller": FaPaintRoller,
  "fa6:paintbrush": FaPaintbrush,
  "fa6:palette": FaPalette,
  "fa6:pen-nib": FaPenNib,
  "fa6:pen-ruler": FaPenRuler,
  "fa6:pen-to-square": FaPenToSquare,
  "fa6:people-group": FaPeopleGroup,
  "fa6:person-chalkboard": FaPersonChalkboard,
  "fa6:php": FaPhp,
  "fa6:plug": FaPlug,
  "fa6:plus": FaPlus,
  "fa6:puzzle-piece": FaPuzzlePiece,
  "fa6:python": FaPython,
  "fa6:react": FaReact,
  "fa6:rocket": FaRocket,
  "fa6:route": FaRoute,
  "fa6:scale-balanced": FaScaleBalanced,
  "fa6:scissors": FaScissors,
  "fa6:screwdriver-wrench": FaScrewdriverWrench,
  "fa6:server": FaServer,
  "fa6:share-nodes": FaShareNodes,
  "fa6:shield-halved": FaShieldHalved,
  "fa6:shield-heart": FaShieldHeart,
  "fa6:shirt": FaShirt,
  "fa6:shopify": FaShopify,
  "fa6:solar-panel": FaSolarPanel,
  "fa6:spa": FaSpa,
  "fa6:spray-can-sparkles": FaSprayCanSparkles,
  "fa6:star": FaStar,
  "fa6:stethoscope": FaStethoscope,
  "fa6:store": FaStore,
  "fa6:tags": FaTags,
  "fa6:temperature-half": FaTemperatureHalf,
  "fa6:tree": FaTree,
  "fa6:trophy": FaTrophy,
  "fa6:truck": FaTruck,
  "fa6:truck-fast": FaTruckFast,
  "fa6:truck-ramp-box": FaTruckRampBox,
  "fa6:umbrella": FaUmbrella,
  "fa6:universal-access": FaUniversalAccess,
  "fa6:users": FaUsers,
  "fa6:utensils": FaUtensils,
  "fa6:wand-magic-sparkles": FaWandMagicSparkles,
  "fa6:warehouse": FaWarehouse,
  "fa6:wordpress": FaWordpress,
  "lu:arrow-left": LuArrowLeft,
  "lu:arrow-right": LuArrowRight,
  "lu:arrow-up-right": LuArrowUpRight,
  "lu:check": LuCheck,
  "lu:chevron-right": LuChevronRight,
  "lu:code": LuCode,
  "lu:contact": LuContact,
  "lu:github": LuGithub,
  "lu:globe": LuGlobe,
  "lu:instagram": LuInstagram,
  "lu:layers": LuLayers,
  "lu:linkedin": LuLinkedin,
  "lu:mail": LuMail,
  "lu:minus": LuMinus,
  "lu:phone": LuPhone,
  "lu:plus": LuPlus,
  "si:astro": SiAstro,
  "si:elementor": SiElementor,
  "si:facebook": SiFacebook,
  "si:framer": SiFramer,
  "si:gatsby": SiGatsby,
  "si:nextdotjs": SiNextdotjs,
  "si:svelte": SiSvelte,
  "si:vercel": SiVercel,
  "si:webflow": SiWebflow
};

// src/utils/icons/iconConfig.js
// Shared icon library configuration used by both the generator script and runtime loader.
// Kept in plain ESM so Node (scripts) and TS/JS code can both import it without tooling.

/**
 * Canonical icon library definitions.
 * - `package`: import path for react-icons
 * - `componentPrefix`: prefix used by react-icons exports
 * - `aliases`: accepted prefixes that should resolve to the canonical key
 */
const ICON_LIBRARIES = {
  lu: {
    package: 'react-icons/lu',
    componentPrefix: 'Lu',
    aliases: ['lucide'],
  },
  fi: {
    package: 'react-icons/fi',
    componentPrefix: 'Fi',
    aliases: ['feather'],
  },
  fa: {
    package: 'react-icons/fa',
    componentPrefix: 'Fa',
    aliases: ['font-awesome', 'fas'],
  },
  fa6: {
    package: 'react-icons/fa6',
    componentPrefix: 'Fa',
    aliases: ['fa6-brands', 'fa6-solid'],
  },
  ai: {
    package: 'react-icons/ai',
    componentPrefix: 'Ai',
    aliases: [],
  },
  bi: {
    package: 'react-icons/bi',
    componentPrefix: 'Bi',
    aliases: [],
  },
  si: {
    package: 'react-icons/si',
    componentPrefix: 'Si',
    aliases: ['simple-icons'],
  },
  md: {
    package: 'react-icons/md',
    componentPrefix: 'Md',
    aliases: [],
  },
};

// Build and export alias map and normalizer so both generator and loader can share it
const ICON_ALIAS_MAP = Object.entries(ICON_LIBRARIES).reduce((acc, [canonical, meta]) => {
  acc[canonical] = canonical;
  (meta.aliases || []).forEach((alias) => {
    acc[alias] = canonical;
  });
  return acc;
}, {});

function normalizeLibraryPrefix(prefix) {
  return ICON_ALIAS_MAP[prefix] || prefix;
}

const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function parseIconString(icon) {
  if (icon.includes(":")) {
    const [library, name] = icon.split(":");
    return { library: normalizeLibraryPrefix(library), name };
  }
  return { library: "lu", name: icon };
}
function isEmoji(str) {
  return /[\u{1F300}-\u{1FAD6}]/u.test(str) || str.length <= 2 && !/^[a-zA-Z0-9]+$/.test(str);
}
function isValidIconString(icon) {
  if (!icon || typeof icon !== "string") return false;
  if (isEmoji(icon)) return true;
  return /^([a-z0-9-]+:)?[a-z0-9-]+$/i.test(icon);
}
function getIconComponent(library, iconName) {
  const normalizedLibrary = normalizeLibraryPrefix(library);
  const iconId = `${normalizedLibrary}:${iconName}`;
  const IconComponent = iconMap[iconId];
  if (!IconComponent) {
    console.warn(`Icon not found: ${library}:${iconName}`);
  }
  return IconComponent;
}
function renderEmojiIcon(icon, options) {
  const { size, className = "", color, ariaLabel } = options;
  return createElement("span", {
    className: `inline-flex items-center justify-center ${className}`,
    style: { fontSize: iconSizeMap[size], color },
    role: "img",
    "aria-label": ariaLabel,
    children: icon
  });
}
function renderLibraryIcon(library, iconName, options) {
  const { size, className = "", color, ariaLabel } = options;
  const IconComponent = getIconComponent(library, iconName);
  if (!IconComponent) {
    return null;
  }
  return createElement(IconComponent, {
    size: iconSizeMap[size],
    className,
    color,
    "aria-label": ariaLabel
  });
}
function renderStringIcon(icon, options) {
  if (isEmoji(icon)) {
    return renderEmojiIcon(icon, options);
  }
  if (!isValidIconString(icon)) {
    console.warn(`Invalid icon string: ${icon}`);
    return null;
  }
  const { library, name } = parseIconString(icon);
  return renderLibraryIcon(library, name, options);
}
function renderObjectIcon(icon, options) {
  const { size, className = "", color, ariaLabel } = options;
  const sizeValue = iconSizeMap[size];
  if ("src" in icon) {
    return createElement("img", {
      src: icon.src,
      alt: ariaLabel || "",
      className,
      width: sizeValue,
      height: sizeValue,
      style: { color }
    });
  }
  if ("type" in icon) {
    switch (icon.type) {
      case "svg":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { width: sizeValue, height: sizeValue, color },
          dangerouslySetInnerHTML: { __html: icon.content },
          "aria-label": ariaLabel
        });
      case "emoji":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color },
          role: "img",
          "aria-label": ariaLabel,
          children: icon.content
        });
      case "text":
        return createElement("span", {
          className: `inline-flex items-center justify-center ${className}`,
          style: { fontSize: sizeValue, color },
          children: icon.content
        });
    }
  }
  return null;
}
function renderIcon(icon, options) {
  if (!icon) return null;
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon === "string") {
    return renderStringIcon(icon, options);
  }
  if (typeof icon === "object") {
    return renderObjectIcon(icon, options);
  }
  return null;
}

function Icon({
  icon,
  size = "md",
  className = "",
  color,
  "aria-label": ariaLabel
}) {
  return renderIcon(icon, {
    size,
    className,
    color,
    ariaLabel
  });
}

function AccordionItem({
  id,
  title,
  description,
  className = "",
  children,
  isExpanded,
  onToggle,
  headerClassName = "h5",
  headerSlot,
  showIndicator = true,
  indicatorIcons
}) {
  const expandedIcon = indicatorIcons?.expanded ?? "lucide:minus";
  const collapsedIcon = indicatorIcons?.collapsed ?? "lucide:plus";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group relative ${className}`.trim(),
      "data-accordion-item": true,
      "data-active": isExpanded ? "true" : "false",
      children: /* @__PURE__ */ jsxs(
        AnimatedBorder,
        {
          variant: "progress-b-f",
          triggers: "controlled",
          active: isExpanded,
          borderRadius: "rounded-3xl",
          borderWidth: 2,
          duration: 800,
          className: "transition-all duration-200 overflow-hidden",
          innerClassName: "card-bg",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                id: `${id}-trigger`,
                "aria-expanded": isExpanded,
                "aria-controls": `${id}-content`,
                className: `w-full text-left flex items-center justify-between px-6 py-5 hover:bg-card/60 transition-colors duration-300 cursor-pointer relative z-20 ${headerClassName}`.trim(),
                onClick: onToggle,
                children: [
                  headerSlot ? /* @__PURE__ */ jsx("div", { className: "flex-1", children: headerSlot }) : /* @__PURE__ */ jsx(
                    IconListItem,
                    {
                      data: { title },
                      layout: "horizontal",
                      alignment: "left",
                      className: "gap-4 flex-1",
                      titleTag: "h3",
                      showDescription: false
                    }
                  ),
                  showIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 text-lg font-semibold ${isExpanded ? "bg-primary text-bg" : "bg-primary/20 text-accent"}`,
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx(
                        Icon,
                        {
                          icon: isExpanded ? expandedIcon : collapsedIcon,
                          size: "sm",
                          className: "w-4 h-4"
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: `${id}-content`,
                role: "region",
                "aria-labelledby": `${id}-trigger`,
                className: `overflow-hidden transition-all duration-500 ease-in-out relative z-20 ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-primary/15 mb-4" }),
                  description && /* @__PURE__ */ jsx("p", { className: "text-text/90 leading-relaxed mb-4", children: description }),
                  children
                ] })
              }
            )
          ]
        }
      )
    }
  );
}

function Accordion({
  items,
  allowMultiple = false,
  className = "",
  headerSlot,
  headerClassName = "",
  showIndicator = true,
  indicatorIcons
}) {
  const [expandedItems, setExpandedItems] = useState(/* @__PURE__ */ new Set());
  const panelRefs = useRef(/* @__PURE__ */ new Map());
  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };
  useEffect(() => {
    expandedItems.forEach((itemId) => {
      const panel = panelRefs.current.get(itemId);
      const item = items.find((i, idx) => (i.slug || `item-${idx}`) === itemId);
      if (panel && item?.contentSlotId && panel.children.length === 0) {
        const hiddenContent = document.getElementById(item.contentSlotId);
        if (hiddenContent) {
          const clone = hiddenContent.cloneNode(true);
          clone.style.display = "";
          clone.removeAttribute("id");
          panel.appendChild(clone);
        }
      }
    });
  }, [expandedItems, items]);
  return /* @__PURE__ */ jsx("div", { className: `space-y-2 ${className}`, children: items.map((item, index) => {
    const itemId = item.slug || `item-${index}`;
    return /* @__PURE__ */ jsx(
      AccordionItem,
      {
        id: itemId,
        title: item.title,
        description: item.description,
        isExpanded: expandedItems.has(itemId),
        onToggle: () => toggleItem(itemId),
        headerSlot: headerSlot ? headerSlot({ item, id: itemId, expanded: expandedItems.has(itemId) }) : void 0,
        headerClassName,
        showIndicator,
        indicatorIcons,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref: (el) => {
              if (el) panelRefs.current.set(itemId, el);
            }
          }
        )
      },
      itemId
    );
  }) });
}

function animationProps(animation, options = {}) {
  const { once = true, delay, duration } = options;
  const attrs = {
    "data-animate": animation
  };
  if (once) {
    attrs["data-animate-once"] = "true";
  }
  if (delay !== void 0 || duration !== void 0) {
    const style = {};
    if (delay !== void 0) {
      attrs["data-animate-delay"] = String(delay);
      style["--animation-delay"] = `${delay}ms`;
    }
    if (duration !== void 0) {
      style["--animation-duration"] = `${duration}ms`;
    }
    attrs.style = style;
  }
  return attrs;
}
function staggeredAnimationProps(animation, index, options = {}) {
  const { staggerDelay = 100, delay = 0, ...rest } = options;
  return animationProps(animation, {
    ...rest,
    delay: delay + index * staggerDelay
  });
}

function mapButtonSizeToIconSize(size) {
  return size ?? "md";
}
function renderButtonIcon(icon, size) {
  if (!icon) return null;
  const iconSize = mapButtonSizeToIconSize(size);
  if (isValidElement(icon)) return icon;
  if (typeof icon === "string") return /* @__PURE__ */ jsx(Icon, { icon, size: iconSize });
  return null;
}
const BUTTON_SIZE_CLASSES = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
};
function getButtonBaseClasses(size) {
  const normalizedSize = size ?? "md";
  return [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-semibold",
    "h4",
    "shadow-accent/30",
    "button-style",
    "button-transition",
    "button-hover-transition",
    "focus-visible:outline-none",
    "w-full lg:w-auto",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    BUTTON_SIZE_CLASSES[normalizedSize]
  ].filter(Boolean).join(" ");
}

function PrimaryButton$1({
  leftIcon,
  rightIcon,
  className = "",
  animated = true,
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const baseShell = getButtonBaseClasses(props.size);
  const variantClasses = [
    baseShell,
    "primary-button-transition border-2 border-primary primary-gradient gradient-disappear-on-hover text-bg hover:text-heading"
  ].filter(Boolean).join(" ");
  const buttonContent = /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`.trim(),
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
  const wrapperClasses = [
    "inline-flex",
    fullWidth ? "w-full" : "w-full lg:w-auto",
    buttonWrapperClasses
  ].filter(Boolean).join(" ");
  if (!animated) {
    return /* @__PURE__ */ jsx("span", { className: wrapperClasses, children: buttonContent });
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...animationProps("zoom-in", { once: true }),
      className: wrapperClasses,
      children: buttonContent
    }
  );
}

const BORDER_RADIUS_CLASS = "rounded-full";
const DEFAULT_WRAPPER_CLASSES = "inline-flex primary-button-transition w-full lg:w-auto";
function SecondaryButton({
  leftIcon,
  rightIcon,
  className = "",
  buttonWrapperClasses,
  fullWidth = false,
  ...props
}) {
  const innerButtonClasses = [
    getButtonBaseClasses(props.size),
    "bg-transparent text-heading shadow-none",
    BORDER_RADIUS_CLASS,
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    AnimatedBorder,
    {
      variant: "solid",
      triggers: "always",
      color: "var(--color-accent)",
      borderWidth: 2,
      borderRadius: BORDER_RADIUS_CLASS,
      className: [
        fullWidth ? "inline-flex w-full" : DEFAULT_WRAPPER_CLASSES,
        buttonWrapperClasses,
        "primary-button-transition justify-center items-center"
      ].filter(Boolean).join(" "),
      innerClassName: "p-0 shadow-none border-transparent justify-center items-center bg-transparent",
      children: /* @__PURE__ */ jsx(
        ButtonBase,
        {
          ...props,
          className: innerButtonClasses,
          leftIcon: renderButtonIcon(leftIcon, props.size),
          rightIcon: renderButtonIcon(rightIcon, props.size)
        }
      )
    }
  );
}

function GhostButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-bg/25 text-bg border-0 hover:bg-primary focus:ring-primary";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

function LinkButton({
  leftIcon,
  rightIcon,
  className = "p-0",
  size = "md",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: baseClasses,
      leftIcon: renderButtonIcon(leftIcon, size),
      rightIcon: renderButtonIcon(rightIcon, size),
      size,
      unstyled: true,
      children
    }
  );
}

function PrimaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClasses = "bg-accent text-bg hover:bg-accent-700 focus:ring-accent";
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${variantClasses} ${className}`,
      leftIcon: renderButtonIcon(leftIcon, props.size),
      rightIcon: renderButtonIcon(rightIcon, props.size)
    }
  );
}

function ArrowLinkButton({
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `group flex items-center justify-between gap-4 text-left cursor-pointer ${className}`.trim(),
      unstyled: true,
      children: /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center rounded-full h-10 w-10 bg-accent", children: /* @__PURE__ */ jsx(Icon, { icon: "lu:arrow-right", size: "lg", className: "text-bg p-0" }) })
    }
  );
}

function MenuItemButton({
  leftIcon,
  rightIcon,
  className = "p-0",
  size = "lg",
  children,
  ...props
}) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const baseClasses = `link-base ${sizeClass} ${className}`.trim();
  return /* @__PURE__ */ jsx(
    ButtonBase,
    {
      ...props,
      className: `${baseClasses} font-normal text-4xl transition-all`,
      leftIcon: renderButtonIcon(leftIcon, size),
      rightIcon: renderButtonIcon(rightIcon, size),
      size,
      unstyled: true,
      children
    }
  );
}

const ButtonBase = forwardRef(
  ({
    href,
    className = "",
    buttonWrapperClasses: _buttonWrapperClasses,
    fullWidth: _fullWidth,
    leftIcon,
    rightIcon,
    size = "lg",
    children,
    unstyled = false,
    animated: _animated,
    ...props
  }, ref) => {
    const normalizedSize = size ?? "lg";
    const sizeClass = normalizedSize === "sm" ? "btn-sm" : normalizedSize === "lg" ? "btn-lg" : "btn-md";
    const baseClasses = unstyled ? className.trim() : `btn-base ${sizeClass} ${className}`.trim();
    if (href) {
      const { href: linkHref, ...anchorProps } = props;
      return /* @__PURE__ */ jsxs(
        "a",
        {
          ref,
          href,
          className: baseClasses,
          ...anchorProps,
          children: [
            leftIcon,
            children,
            rightIcon
          ]
        }
      );
    }
    const buttonProps = props;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: baseClasses,
        ...buttonProps,
        children: [
          leftIcon,
          children,
          rightIcon
        ]
      }
    );
  }
);
ButtonBase.displayName = "ButtonBase";
const VARIANT_MAP = {
  primary: PrimaryButton$1,
  secondary: SecondaryButton,
  ghost: GhostButton,
  link: LinkButton,
  menuItemButton: MenuItemButton,
  tertiary: PrimaryButton,
  arrowLink: ArrowLinkButton
};
function Button({
  variant = "primary",
  ...props
}) {
  const VariantComponent = VARIANT_MAP[variant] || PrimaryButton$1;
  return /* @__PURE__ */ jsx(VariantComponent, { ...props });
}

function EnhancedAccordionItem({
  icon,
  title,
  description,
  isActive,
  progress = 0,
  onToggle,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `group relative ${className}`.trim(),
      "data-accordion-item": true,
      "data-active": isActive ? "true" : "false",
      children: /* @__PURE__ */ jsxs(
        AnimatedBorder,
        {
          variant: "progress",
          triggers: "controlled",
          active: isActive,
          controller: progress,
          duration: 300,
          borderRadius: "rounded-3xl",
          borderWidth: 2,
          className: "transition-all duration-200",
          innerClassName: "card-bg",
          children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "link",
                type: "button",
                className: "w-full text-left flex items-center justify-between p-5 hover:bg-card/50 transition-colors duration-300 cursor-pointer relative z-20",
                onClick: onToggle,
                onMouseDown: (event) => event.preventDefault(),
                "aria-expanded": isActive,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    icon && /* @__PURE__ */ jsx("span", { className: "icon-large card-icon-color shrink-0", children: icon.includes(":") ? /* @__PURE__ */ jsx(Icon, { icon, size: "lg", className: "w-6 h-6" }) : /* @__PURE__ */ jsx("span", { className: "text-2xl leading-none", children: icon }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("p", { className: "h4", children: title }) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `
              w-8 h-8 rounded-full flex items-center justify-center
              transition-all duration-[600ms] text-xl font-semibold
              ${isActive ? "bg-primary text-bg" : "bg-primary/15 text-accent group-hover:bg-primary/25"}
            `,
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx("span", { className: "translate-y-[-1px]", children: isActive ? "−" : "+" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `overflow-hidden transition-all duration-500 ease-in-out relative z-20 ${isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-primary/15 mb-4" }),
                  description && /* @__PURE__ */ jsx("p", { className: "text-text/80 leading-relaxed mb-4", children: description }),
                  children
                ] })
              }
            )
          ]
        }
      )
    }
  );
}

export { Accordion as A, Button as B, EnhancedAccordionItem as E, Icon as I, animationProps as a, staggeredAnimationProps as s };
