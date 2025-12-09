import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BVIX8Iu0.mjs';
import 'piccolore';
import { k as $$SectionHeader, B as Button, q as query, a as $$ContentRenderer } from './BaseLayout_DL_Xfe7i.mjs';
import { s as siteData } from './creative-studio-development-support_Cln8KS8O.mjs';

const $$Astro = createAstro("https://https://griffinswebservices.com");
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASection;
  const defaultDescription = "Hand-crafted websites, automated systems, and ongoing support so you can sell more, grow faster, and stay secure without juggling multiple vendors.";
  const {
    title,
    heading,
    description = siteData.description,
    primaryCTA = {
      text: "Book An Intro Call",
      link: "#contact"
    },
    className = "",
    id = "hero"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-screen bg-bg flex items-center justify-center relative overflow-hidden ${className}`, "class")}> <div class="absolute inset-0 hero-gradient-bg"></div> <div class="section-color-border"></div> <div class="relative z-10 min-h-screen inner-section flex"> <div class="min-h-screen xl:h-auto inner-section mx-auto flex flex-col justify-center items-center"> <div class="flex flex-col gap-2 lg:gap-4 justify-left items-start lg:justify-center lg:items-center hero-spacing lg:text-center w-full"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "className": "text-left lg:text-center w-full hero-spacing", "title": title, "heading": heading, "headingTag": "h1", "headingClassName": "text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight", "description": description ?? defaultDescription, "descriptionClassName": "hero-text text-lg max-w-3xl leading-relaxed mx-0 lg:mx-auto" })} <div class="flex flex-col lg:flex-row items-center gap-3 lg:gap-6"> ${renderComponent($$result, "Button", Button, { "client:idle": true, "href": primaryCTA.link, "variant": "primary", "size": "lg", "client:component-hydration": "idle", "client:component-path": "@/components/Button/Button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} ${renderComponent($$result, "ContentRenderer", $$ContentRenderer, { "query": query("testimonials").where((entry) => entry.data.featured === true).limit(3), "variant": "TestimonialCirclesVariant", "className": "px-2 md:px-0", "counterStart": 10, "counterEnd": 100, "counterDuration": 1800, "counterSuffix": "+", "counterLabel": "Happy Clients" })} </div> </div> </div> </div> </section>`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/layouts/CTASection.astro", void 0);

export { $$CTASection as $ };
