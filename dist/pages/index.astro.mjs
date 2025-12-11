import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_CDqnDASo.mjs';
import 'piccolore';
import { q as query, a as $$ContentRenderer, l as getImage, $ as $$BaseLayout, r as roots, m as sortByOrder } from '../chunks/BaseLayout_eOc8xt5e.mjs';
import { B as Button } from '../chunks/accordion_Dx6odBLx.mjs';
import { $ as $$SectionHeader } from '../chunks/carousels_CEjWH8KZ.mjs';
import { s as siteData } from '../chunks/solar_CQMy5G9-.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_BUA0KYXZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$FrontPageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontPageHero;
  const defaultDescription = "Hand-crafted websites, automated systems, and ongoing support so you can sell more, grow faster, and stay secure without juggling multiple vendors.";
  const {
    heading,
    description = siteData.description,
    primaryCTA: incomingPrimaryCTA = {
      text: "Book An Intro Call",
      link: "#contact",
      rightIcon: "lu:arrow-right"
    },
    className = "",
    id = "hero"
  } = Astro2.props;
  const primaryCTA = {
    ...incomingPrimaryCTA,
    rightIcon: incomingPrimaryCTA.rightIcon ?? incomingPrimaryCTA.icon ?? "lu:arrow-right"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen bg-bg flex items-center justify-center relative overflow-hidden ${className}`, "class")}> <div class="absolute inset-0 hero-gradient-bg"></div> <div class="relative z-10 min-h-screen inner-section flex"> <div class="min-h-screen mx-auto lg:flex lg:flex-row justify-between items-center lg:gap-12 space-y-8"> <div class="flex-1 flex flex-col gap-2 lg:gap-6 justify-center items-start min-h-screen hero-spacing w-full"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left w-full hero-spacing", "heading": heading, "headingTag": "h1", "headingClassName": "h1", "description": description ?? defaultDescription, "descriptionClassName": "hero-text text-lg leading-relaxed mx-0 lg:mx-auto" })} <div class="flex flex-col lg:flex-row items-center justify-left gap-3 lg:gap-6 w-auto"> ${renderComponent($$result, "Button", Button, { "href": primaryCTA.link, "variant": "primary", "size": "lg", "rightIcon": primaryCTA.rightIcon }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} </div> </div> <div class="flex-1 w-full md:mb-0 mb-20 order-last lg:order-none" data-animate="fade-in" data-animate-once="true"> ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("projects"), "variant": "PortfolioScreenVariant" })} </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/FrontPageHero.astro", void 0);

const SpeedScrollVideo = "/speed-site.mov";

const speedScrollImage = new Proxy({"src":"/assets/speed-scroll-Sg9gvJvW.png","width":1280,"height":704,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/speed-scroll.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/assets/speed-scroll.png");
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const heroHeading = {
    before: "Launch a website that works.",
    text: "Fast, secure, growth-ready.",
    after: ""
  };
  const heroDescription = "We're a US-based web development company creating fast, engaging websites built to grow your business. We handle hosting, maintenance, and security \u2014 and provide full SEO services to help you get found and stay ahead.";
  const speedScrollPoster = await getImage({
    src: speedScrollImage,
    format: "webp",
    width: 1920,
    quality: 80
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "description": siteData.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> <!-- Hero ContentRenderer with static content --> ${renderComponent($$result2, "FrontPageHero", $$FrontPageHero, { "heading": heroHeading, "description": heroDescription, "primaryCTA": {
    text: "Get Started",
    link: "/contact-us"
  } })} ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": roots("capabilities").orderBy(sortByOrder()).limit(6), "variant": "CardVariant", "title": "Website Services", "heading": {
    before: "Websites aren't just something we do.",
    text: "They're our specialty."
  }, "description": "You deserve a lightning-fast, secure, and scalable website that turn your visitors into customers. Every site we build is built to dominate and stand the test of time.", "columns": 3, "gap": "lg", "showButtonSection": false, "className": "pt-35 lg:pt-20" })} <!-- Website Features Two-Column Section --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("benefits").orderBy(sortByOrder()), "variant": "TwoColumnImageVariant", "imagePosition": "left", "imagePlaceholder": "\u{1F680}", "imageAlt": "Website features showcase", "contentType": "checklist" })} <!-- About Us Two-Column Section --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("about-us").orderBy(sortByOrder()), "variant": "TwoColumnImageVariant", "imagePosition": "right", "imagePlaceholder": "\u{1F468}\u200D\u{1F4BB}", "imageAlt": "Griffin Surett - Founder", "contentType": "text", "borderClass": "" }, { "default": async ($$result3) => renderTemplate` <video data-animate="fade-in"${addAttribute(SpeedScrollVideo, "src")}${addAttribute(speedScrollPoster.src, "poster")} muted loop controls playsinline class="block w-full h-full max-w-full object-cover" title="Speed site walkthrough"></video> ` })} <!-- <ContentRenderer query={query("projects")} variant="PortfolioVariant" /> --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("solutions"), "variant": "IconListVariant", "heading": {
    before: "Premium Websites for",
    text: "Any Business,",
    after: "Built for Your Growth"
  }, "title": "Website Services", "description": "We design top-tier websites for businesses in every industry \u2014 from local services to global brands. Every site is custom-built for your goals, lightning-fast, secure, and easy to manage. No templates, no bloat \u2014 just a powerful online presence that looks sharp, performs flawlessly, and grows with you.", "autoAdvanceDelay": 2e3 })} <!-- Testimonials with rating filter --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.rating >= 4), "variant": "TestimonialCarouselVariant" })} <!-- Portfolio with sorting --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("projects").orderBy(sortByOrder("publishDate")), "variant": "PortfolioVariant" })} <!-- Technologies --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("technologies").orderBy(sortByOrder()), "variant": "TechnologiesVariant" })} <!-- Filtered query - still gets meta from authors --> <!-- <ContentRenderer
      query={query("authors").where(whereArrayContains("tags", "featured"))}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- Addon Capabilities - auto-populates from capabilities meta --> <!-- <ContentRenderer
      query={query("capabilities").orderBy(sortByOrder())}
      variant="CardVariant"
      columns={3}
      gap="lg"
    /> --> <!-- FAQ ContentRenderer --> ${renderComponent($$result2, "ContentRenderer", $$ContentRenderer, { "query": query("faq").orderBy(sortByOrder()), "variant": "AccordionVariant", "allowMultiple": false, "title": "FAQs" })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Get Started", "heading": {
    before: "Ready to Transform Your Online Presence into a ",
    text: "High-Performance Growth Engine?"
  }, "description": "Join hundreds of successful businesses who trust Griffin's Web Services. While others juggle dozens of services, we've mastered one: building lightning-fast, secure, and scalable sites that turn visitors into customers." })} <!-- Contact ContentRenderer --> <!-- <ContentRenderer
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
