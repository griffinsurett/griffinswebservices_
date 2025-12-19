import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, d as renderComponent, r as renderSlot, s as spreadAttributes } from '../chunks/astro/server_CDqnDASo.mjs';
import { q as query, a as $$ContentRenderer, n as getImage, $ as $$BaseLayout, t as roots, m as sortByOrder } from '../chunks/BaseLayout_9PbmvCDv.mjs';
import { s as siteData } from '../chunks/speakers_CmPHbaoe.mjs';
import 'piccolore';
import { $ as $$SectionHeader, B as Button, a as animationProps, H as Heading, l as logoImg } from '../chunks/accordion_gDd8BMQn.mjs';
import 'clsx';
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://https://griffinswebservices.com");
const $$ScrollIndicator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ScrollIndicator;
  const { href = "#about-us", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`scroll-indicator absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer no-underline z-20 ${className}`, "class")} aria-label="Scroll down for more content" data-astro-cid-7ivj2o3m> <div class="flex items-center justify-center p-1 border border-text rounded-full shadow-lg transition-all duration-300 ease-in-out" data-astro-cid-7ivj2o3m> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-text transition-all duration-300 w-4 h-4 md:w-5 md:h-5 hover:translate-y-0.5" data-astro-cid-7ivj2o3m> <path d="M12 5v14M19 12l-7 7-7-7" data-astro-cid-7ivj2o3m></path> </svg> </div> </a> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/ScrollIndicator.astro", void 0);

const $$Astro$2 = createAstro("https://https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
  const defaultDescription = "Hand-crafted websites, automated systems, and ongoing support so you can sell more, grow faster, and stay secure without juggling multiple vendors.";
  const {
    heading,
    description = siteData.description,
    primaryCTA = {
      text: "Book An Intro Call",
      link: "#contact",
      rightIcon: "lu:arrow-right"
    },
    className = "",
    id = "hero",
    scrollToSection
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`, "class")} data-astro-cid-ywtey6sq> <div class="relative z-10 min-h-screen inner-section flex items-center" data-astro-cid-ywtey6sq> <div class="mx-auto px-2 lg:px-0 max-w-6xl lg:max-w-7xl w-full py-20 lg:py-0" data-astro-cid-ywtey6sq> <div class="lg:flex lg:flex-row lg:items-center lg:gap-12 space-y-3 lg:space-y-8" data-astro-cid-ywtey6sq> <!-- Left side: Text content --> <div class="flex-1 flex flex-col gap-3 lg:gap-6 justify-center hero-content" data-animate="fade-in-up" data-animate-once="false" data-animate-threshold="0.4" data-animate-root-margin="0px 0px -50% 0px" data-animate-directional="true" data-astro-cid-ywtey6sq> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-left w-full", "heading": heading, "headingTag": "h1", "headingClassName": "text-4xl md:text-5xl", "description": description ?? defaultDescription, "descriptionClassName": "text-lg lg:text-xl leading-relaxed max-w-3xl lg:max-w-none", "data-astro-cid-ywtey6sq": true })} <div class="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-3 lg:gap-6 lg:w-full" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients", "data-astro-cid-ywtey6sq": true })} ${renderComponent($$result, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon, "data-astro-cid-ywtey6sq": true }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </div> <!-- Right side: Portfolio showcase --> <div class="flex-1 w-full hidden lg:block hero-portfolio" data-animate="fade-in" data-animate-once="true" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "responsivity": { show: "lg" }, "clientLoadPlaceholder": false, "optimizeForLCP": true, "data-astro-cid-ywtey6sq": true })} </div> </div> </div> </div> <span class="hero-arrow" data-animate="fade-in" data-animate-once="false" data-astro-cid-ywtey6sq> ${renderComponent($$result, "ScrollIndicator", $$ScrollIndicator, { "href": scrollToSection, "data-astro-cid-ywtey6sq": true })} </span> </section> `;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/FrontPageHero.astro", void 0);

const $$Astro$1 = createAstro("https://https://griffinswebservices.com");
const $$ColorBorderLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ColorBorderLayout;
  const { class: className = "", borderPosition = "top" } = Astro2.props;
  const showTopBorder = borderPosition === "top" || borderPosition === "both";
  const showBottomBorder = borderPosition === "bottom" || borderPosition === "both";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["relative", className], "class:list")}> ${showTopBorder && renderTemplate`<div class="section-color-border"></div>`} ${renderSlot($$result, $$slots["default"])} ${showBottomBorder && renderTemplate`<div class="section-color-border absolute bottom-0 top-auto"></div>`} </div>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/ColorBorderLayout.astro", void 0);

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$BackgroundMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackgroundMedia;
  const { backgroundMedia } = Astro2.props;
  const aboveTheFold = backgroundMedia?.image?.aboveTheFold ?? false;
  const priority = backgroundMedia?.image?.priority ?? aboveTheFold;
  const loading = backgroundMedia?.image?.loading ?? (aboveTheFold ? "eager" : "lazy");
  const qualitySettings = aboveTheFold ? { mobile: 50, tablet: 55, desktop: 60 } : { mobile: 65, tablet: 70, desktop: 75 };
  const customQuality = backgroundMedia?.image?.quality;
  const maxWidth = backgroundMedia?.image?.maxWidth ?? 1920;
  const tabletWidth = Math.min(1024, maxWidth);
  const mobileWidth = Math.min(640, maxWidth);
  let responsiveImages = null;
  if (backgroundMedia?.image?.src) {
    const rawSrc = backgroundMedia.image.src;
    const isAstroImageMetadata = typeof rawSrc === "object" && rawSrc !== null && "width" in rawSrc && "height" in rawSrc && "format" in rawSrc;
    const isAlreadyProcessed = typeof rawSrc === "object" && rawSrc !== null && typeof rawSrc.src === "string" && !isAstroImageMetadata;
    if (isAstroImageMetadata || typeof rawSrc !== "string" && !isAlreadyProcessed) {
      try {
        const [mobile, tablet, desktop] = await Promise.all([
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.mobile,
            width: mobileWidth
          }),
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.tablet,
            width: tabletWidth
          }),
          getImage({
            src: rawSrc,
            format: "webp",
            quality: customQuality ?? qualitySettings.desktop,
            width: maxWidth
          })
        ]);
        responsiveImages = { mobile, tablet, desktop };
      } catch (error) {
        console.error("Failed to optimize background image:", error);
      }
    } else {
      const srcValue = isAlreadyProcessed ? rawSrc.src : rawSrc;
      responsiveImages = {
        mobile: { src: srcValue },
        tablet: { src: srcValue },
        desktop: { src: srcValue }
      };
    }
  }
  return renderTemplate`${backgroundMedia?.video?.src ? renderTemplate`${maybeRenderHead()}<video${addAttribute(`absolute inset-0 z-0 w-full h-full object-cover ${backgroundMedia.video.videoClass || ""}`, "class")}${addAttribute(backgroundMedia.video.autoPlay !== false, "autoplay")}${addAttribute(backgroundMedia.video.muted !== false, "muted")}${addAttribute(backgroundMedia.video.loop !== false, "loop")}${addAttribute(backgroundMedia.video.playsInline !== false, "playsinline")}${addAttribute(backgroundMedia.video.controls || false, "controls")}${addAttribute(backgroundMedia.video.preload || "metadata", "preload")}${addAttribute(responsiveImages?.mobile?.src || "", "poster")} aria-hidden="true"><source${addAttribute(backgroundMedia.video.src, "src")} type="video/mp4">
Your browser does not support the video tag.
</video>` : responsiveImages ? renderTemplate`<picture class="absolute inset-0 z-0"><source media="(max-width: 640px)"${addAttribute(responsiveImages.mobile.src, "srcset")} type="image/webp"><source media="(min-width: 641px) and (max-width: 1024px)"${addAttribute(responsiveImages.tablet.src, "srcset")} type="image/webp"><source media="(min-width: 1025px)"${addAttribute(responsiveImages.desktop.src, "srcset")} type="image/webp"><img${addAttribute(responsiveImages.desktop.src, "src")} alt=""${addAttribute(`w-full h-full object-cover ${backgroundMedia?.image?.imageClass || ""}`, "class")}${addAttribute(loading, "loading")}${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(priority ? "sync" : "async", "decoding")} aria-hidden="true"></picture>` : null}${backgroundMedia?.overlayClass && renderTemplate`<div${addAttribute(`absolute inset-0 z-0 ${backgroundMedia.overlayClass}`, "class")} aria-hidden="true"></div>`}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/components/BackgroundMedia.astro", void 0);

const meoncompImg = new Proxy({"src":"/assets/meoncomp-Clq1KPve.jpg","width":691,"height":518,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/meoncomp.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/meoncomp.jpg");
							return target[name];
						}
					});

const getDecimalPlaces = (value) => {
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
  const resolvedDecimals = typeof decimals === "number" && !Number.isNaN(decimals) ? Math.max(0, decimals) : Math.max(getDecimalPlaces(start), getDecimalPlaces(end));
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

const $$DoubleCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen w-full outer-section"> <div class="inner-section flex flex-wrap gap-6"> <div class="group flex w-full lg:flex-1 flex-col min-h-[400px] rounded-3xl overflow-hidden relative card-bg"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2, rootMargin: "-15% 0px -35% 0px" }))}> <div class="flex flex-col p-6 space-y-2 relative z-10"> <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold"> ${renderComponent($$result, "Counter", Counter, { "end": 100, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Counter", "client:component-export": "default" })}+
</h2> <p class="text-text large-text leading-tight">
Lightning Fast Websites powering up businesses like yours!
</p> </div> <div class="absolute bottom-0 w-full h-110 -mb-42 lg:-mb-52 overflow-hidden z-0"> ${renderComponent($$result, "BackgroundMedia", $$BackgroundMedia, { "backgroundMedia": {
    image: {
      src: logoImg,
      imageClass: "object-contain light:invert",
      aboveTheFold: false,
      quality: 35,
      maxWidth: 450
    }
  } })} </div> </div> <div class="group flex w-full md:flex-1 lg:flex-2 flex-col md:flex-row min-h-[400px] rounded-3xl overflow-hidden card-bg relative"${spreadAttributes(animationProps("fade-in-right", { once: false, threshold: 0.35, rootMargin: "-10% 0px -25% 0px", delay: 300 }))}> <div class="relative flex-1 lg:rounded-br-[250px] overflow-hidden md:w-1/2 lg:mb-5 z-0"> ${renderComponent($$result, "BackgroundMedia", $$BackgroundMedia, { "backgroundMedia": {
    image: {
      src: meoncompImg,
      imageClass: "object-cover",
      aboveTheFold: false,
      quality: 25,
      maxWidth: 600
    }
  } })} <!-- Gradient fade overlay --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--card-bg)] md:opacity-100 opacity-0"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--card-bg)] md:opacity-0 opacity-100"></div> </div> <div class="flex-1 flex flex-col gap-6 justify-center items-end p-6 lg:px-6 relative z-10"> <!-- <div class="inner-section">will be something</div> --> ${renderComponent($$result, "Heading", Heading, { "tagName": "h3", "className": "text-3xl lg:text-4xl lg:text-right text-left", "before": "We're a New Jersey based Web Agency that creates ", "text": "fast, engaging websites.", "textClass": "m-0 p-0 emphasized-text" })} ${renderComponent($$result, "Button", Button, { "href": "/", "variant": "secondary", "size": "lg", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
Learn More
` })} </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/DoubleCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a website that works.",
    text: "Fast, secure, growth-ready.",
    after: ""
  };
  const heroDescription = "We're a New Jersey based Web Agency that creates fast, engaging websites built to grow your business. We handle hosting, maintenance, and security \u2014 and provide full SEO services to help you get found and stay ahead.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> <!-- <GradientLayout> --> <!-- Lightweight text-only hero - zero carousel JS on initial load --> <!-- <TextHero
        heading={heroHeading}
        description={heroDescription}
        primaryCTA={{
          text: "Get Started",
          link: "/contact-us",
        }}
        scrollToSection="#portfolio-showcase"
      /> --> ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  }, "scrollToSection": "#website-services" })} <div class="block md:hidden min-h-screen inner-section"${spreadAttributes(animationProps("fade-in-up", { once: false, threshold: 0.2 }))}> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant", "responsivity": { hide: "md" }, "clientLoadPlaceholder": true })} </div> ${renderComponent($$result2, "DoubleCard", $$DoubleCard, {})} <!-- Under-hero portfolio showcase --> <!-- <PortfolioShowcaseSection /> --> <!-- </GradientLayout> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "id": "website-services", "title": "Website Services", "heading": {
    before: "Websites aren't just something we do.",
    text: "They're our specialty."
  }, "description": "You deserve a lightning-fast, secure, and scalable website that turn your visitors into customers. Every site we build is built to dominate and stand the test of time.", "columns": 3, "gap": "lg", "showButtonSection": false, "className": "pt-35 lg:pt-20" })} <!-- Website Benefits --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("benefits").orderBy(sortByOrder()), "variant": "IconListVariant", "title": "Why Choose Us", "heading": {
    before: "What Makes",
    text: "Our Websites Different"
  } }, { "default": ($$result3) => renderTemplate`   ` })} <!-- About Us Two-Column Section --> <!-- <ContentRenderer
      query={query("about-us").orderBy(sortByOrder())}
      variant="TwoColumnImageVariant"
      imagePosition="right"
      imagePlaceholder="👨‍💻"
      imageAlt="Griffin Surett - Founder"
      contentType="text"
      borderClass=""
      ctaText="Learn More About Us"
    >
    <Video
      src="/speed-site.mov"
      alt="Speed site walkthrough"
      controls
      clientLoadPlaceholder={true}
      wrapperClass="video-shell"
    />
    </ContentRenderer> --> <!-- <ContentRenderer query={query("projects")} variant="PortfolioVariant" /> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "IconListVariant", "heading": {
    before: "Premium Websites for",
    text: "Any Business,",
    after: "Built for Your Growth"
  }, "title": "Website Services", "description": "We design top-tier websites for businesses in every industry \u2014 from local services to global brands. Every site is custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat \u2014 just a powerful online presence that looks sharp, performs flawlessly, and grows with you.", "autoAdvanceDelay": 2e3 })} ${renderComponent($$result2, "ColorBorderLayout", $$ColorBorderLayout, { "borderPosition": "both" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "VideoAccordionVariant", "title": "See Our Solutions In Action", "heading": {
    before: "Explore the work.",
    text: "Watch how each solution performs."
  }, "description": "Dive deeper into the speed, visuals, and UX of every solution with quick video overviews pulled straight from our library.", "className": "pt-16", "autoAdvanceDelay": 3500 })} ` })} <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant" })} <!-- Portfolio with sorting --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects").orderBy(sortByOrder("publishDate")), "variant": "PortfolioVariant" })} <!-- Technologies --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("technologies").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
      query={query("authors").where(whereArrayContains("tags", "featured"))}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- Addon Capabilities - auto-populates from capabilities meta --> <!-- <ContentRenderer
      query={query("capabilities").orderBy(sortByOrder())}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- FAQ ContentRenderer --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("faq").orderBy(sortByOrder()), "variant": "AccordionVariant", "allowMultiple": false, "title": "FAQs" })} <!-- <CTASection
      title="Get Started"
      heading={{
        before: "Ready to Transform Your Online Presence into a ",
        text: "High-Performance Growth Engine?",
      }}
      description="Join hundreds of successful businesses who trust Griffin's Web Services. While others juggle dozens of services, we've mastered one: building lightning-fast, secure, and scalable sites that turn visitors into customers."
    /> --> <!-- Contact ContentRenderer --> <!-- <ContentRenderer
      query={query("contact-us")}
      variant="ContactVariant"
      columns={2}
    /> --> <!-- Blog with limit - auto-populates from blog meta --> <!-- <ContentRenderer
      query={query("blog").limit(2)}
      variant="BlogVariant"
      columns={2}
    /> --> <!-- Multi-collection query - requires manual title/description --> <!-- <ContentRenderer
      query={query(["blog", "projects"]).orderBy(sortByDate()).limit(10)}
      variant="ListVariant"
      title="Recent Updates"
      description="Latest from our blog and portfolio"
    /> --> </main> ` })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/index.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
