const contentModules = new Map([
["src/content/legal/cookie-policy.mdx", () => Promise.resolve().then(() => cookiePolicy)],
["src/content/legal/privacy-policy.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.p)],
["src/content/legal/terms-of-service.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.t)],
["src/content/about-us/mission.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.m)],
["src/content/about-us/promise.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.p)],
["src/content/blog/first-post.mdx", () => import('./solar_DEQ7kep_.mjs').then(n => n.f)],
["src/content/about-us/vision.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.v)],
["src/content/testimonials/anthony-gonzales.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.a)],
["src/content/testimonials/arold-norelus.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.a)],
["src/content/testimonials/darius-clark.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.d)],
["src/content/testimonials/kenn-faria.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.k)],
["src/content/testimonials/richard-faria.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.r)],
["src/content/testimonials/tarun-kumar.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.t)],
["src/content/projects/certified-bag-chasers-light.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.c)],
["src/content/projects/farias-demolition.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.f)],
["src/content/projects/pronto-junk-removal.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.p)],
["src/content/projects/roonys-marketing.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.r)],
["src/content/projects/pablos-peak-roofing.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.b)],
["src/content/projects/tok-secret-formula.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.t)],
["src/content/projects/universal-chillers.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.u)],
["src/content/faq/can-you-collaborate-with-our-team.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.a)],
["src/content/faq/can-you-connect-forms-bookings-or-a-crm.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.c)],
["src/content/faq/can-you-help-with-the-words-and-images.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.a)],
["src/content/faq/can-you-redesign-my-current-site.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.b)],
["src/content/faq/do-you-do-seo.mdx", () => import('./solar_DEQ7kep_.mjs').then(n => n.e)],
["src/content/faq/do-you-handle-hosting-and-maintenance.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.d)],
["src/content/faq/do-you-build-online-stores.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.d)],
["src/content/faq/do-you-offer-payment-plans.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.a)],
["src/content/faq/do-you-set-up-google-business-and-social-accounts.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.d)],
["src/content/faq/how-do-revisions-work.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.h)],
["src/content/solutions/blog.mdx", () => Promise.resolve().then(() => blog)],
["src/content/solutions/e-commerce-websites.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.e)],
["src/content/solutions/landing-pages.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.l)],
["src/content/solutions/custom-full-stack-applications.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.b)],
["src/content/solutions/standard-websites.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.s)],
["src/content/solutions/restaurant-websites.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.r)],
["src/content/capabilities/accessibility-compliance.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.d)],
["src/content/capabilities/analytics-conversion-optimization.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.a)],
["src/content/capabilities/back-end-development.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.b)],
["src/content/capabilities/browser-extension-development.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.e)],
["src/content/capabilities/brand-identity-design.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.a)],
["src/content/capabilities/e-commerce-development.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.e)],
["src/content/capabilities/front-end-development.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.f)],
["src/content/capabilities/design-systems.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.d)],
["src/content/capabilities/full-stack-web-development.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.f)],
["src/content/capabilities/managed-website-hosting.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.m)],
["src/content/industries/authors-personal-brands.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.c)],
["src/content/industries/b2b-services.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.b)],
["src/content/industries/bakeries.mdx", () => Promise.resolve().then(() => bakeries)],
["src/content/industries/book-authors.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.a)],
["src/content/industries/boutique-brands.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.b)],
["src/content/industries/bars-lounges.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.c)],
["src/content/industries/branding-agency-partnerships.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.g)],
["src/content/industries/catering-companies.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.c)],
["src/content/industries/cafes-coffee-shops.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.b)],
["src/content/industries/cleaning-services.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.c)],
["src/content/technologies/astro.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.b)],
["src/content/technologies/aws.mdx", () => Promise.resolve().then(() => aws)],
["src/content/technologies/css.mdx", () => Promise.resolve().then(() => css)],
["src/content/technologies/cloudflare.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.d)],
["src/content/technologies/elementor.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.e)],
["src/content/technologies/figma.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.f)],
["src/content/technologies/framer.mdx", () => Promise.resolve().then(() => framer)],
["src/content/technologies/gatsby.mdx", () => Promise.resolve().then(() => gatsby)],
["src/content/technologies/github.mdx", () => Promise.resolve().then(() => github)],
["src/content/technologies/html.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.h)],
["src/content/stats/industries-served.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.i)],
["src/content/stats/projects-launched.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.p)],
["src/content/stats/uptime.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.u)],
["src/content/benefits/better-than-page-builders.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.d)],
["src/content/stats/support-response.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.s)],
["src/content/benefits/fast-performance.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.f)],
["src/content/benefits/business-friendly.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.a)],
["src/content/benefits/full-service-delivery.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.f)],
["src/content/benefits/future-friendly.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.b)],
["src/content/benefits/google-friendly.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.g)],
["src/content/benefits/growth-focused.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.g)],
["src/content/benefits/hands-off-security.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.h)],
["src/content/benefits/honest-pricing.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.h)],
["src/content/benefits/long-term-reliability.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.l)],
["src/content/faq/how-do-we-get-started.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.c)],
["src/content/faq/how-long-does-it-take-to-build-a-website.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.h)],
["src/content/faq/what-do-you-need-from-me.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.w)],
["src/content/faq/what-is-included-in-your-ongoing-support.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.w)],
["src/content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.w)],
["src/content/faq/will-my-site-be-secure.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.w)],
["src/content/faq/will-my-website-be-mobile-friendly.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.w)],
["src/content/capabilities/off-page-seo.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.o)],
["src/content/capabilities/on-page-seo.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.e)],
["src/content/capabilities/performance-optimization.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.p)],
["src/content/capabilities/seo.mdx", () => import('./solar_DEQ7kep_.mjs').then(n => n.j)],
["src/content/capabilities/technical-seo.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.c)],
["src/content/capabilities/technical-support.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.t)],
["src/content/capabilities/ui-design.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.u)],
["src/content/capabilities/uptime-reliability-monitoring.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.u)],
["src/content/capabilities/ux-design.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.a)],
["src/content/capabilities/web-design.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.w)],
["src/content/industries/clothing-apparel.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.e)],
["src/content/industries/coaches.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.c)],
["src/content/industries/consultants.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.c)],
["src/content/industries/course-creators.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.g)],
["src/content/industries/cpas-accountants.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.i)],
["src/content/industries/creative-studio-development-support.mdx", () => import('./creative-studio-development-support_Cln8KS8O.mjs').then(n => n.e)],
["src/content/industries/demolition.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.d)],
["src/content/industries/dropshipping-brands.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.e)],
["src/content/industries/electrical.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.b)],
["src/content/industries/fast-casual.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.f)],
["src/content/technologies/javascript.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.j)],
["src/content/technologies/nodejs.mdx", () => Promise.resolve().then(() => nodejs)],
["src/content/technologies/nextjs.mdx", () => Promise.resolve().then(() => nextjs)],
["src/content/technologies/php.mdx", () => import('./solar_DEQ7kep_.mjs').then(n => n.p)],
["src/content/technologies/react.mdx", () => Promise.resolve().then(() => react)],
["src/content/technologies/python.mdx", () => Promise.resolve().then(() => python)],
["src/content/technologies/shopify.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.g)],
["src/content/technologies/svelte.mdx", () => Promise.resolve().then(() => svelte)],
["src/content/technologies/vercel.mdx", () => Promise.resolve().then(() => vercel)],
["src/content/benefits/professional-trust.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.p)],
["src/content/benefits/responsive-support.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.d)],
["src/content/technologies/webflow.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.w)],
["src/content/capabilities/web-development.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.f)],
["src/content/capabilities/webmaster-services.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.w)],
["src/content/capabilities/website-maintenance-support.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.i)],
["src/content/capabilities/website-migration-services.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.j)],
["src/content/capabilities/website-redesign-modernization.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.k)],
["src/content/industries/fencing-contractors.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.g)],
["src/content/industries/financial-advisors.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.h)],
["src/content/industries/fitness-trainers.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.g)],
["src/content/industries/flooring-installers.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.i)],
["src/content/industries/food-trucks.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.f)],
["src/content/industries/garage-door-repair.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.j)],
["src/content/industries/handmade-products.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.h)],
["src/content/industries/handyman-services.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.i)],
["src/content/industries/health-beauty-products.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.h)],
["src/content/industries/health-wellness-studios.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.e)],
["src/content/technologies/wordpress.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.e)],
["src/content/industries/home-goods.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.h)],
["src/content/industries/home-services.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.i)],
["src/content/industries/hvac.mdx", () => Promise.resolve().then(() => hvac)],
["src/content/industries/influencers.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.m)],
["src/content/industries/insurance-agents.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.j)],
["src/content/industries/juice-smoothie-shops.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.j)],
["src/content/industries/it-service-providers.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.i)],
["src/content/industries/junk-removal.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.j)],
["src/content/industries/landscaping.mdx", () => import('./landscaping_Cj3aIcSw.mjs').then(n => n.n)],
["src/content/industries/lawyers-attorneys.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.l)],
["src/content/industries/local-community-organizations.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.l)],
["src/content/industries/marketing-agencies.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.m)],
["src/content/industries/marketing-professionals.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.f)],
["src/content/industries/medical-practices.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.m)],
["src/content/industries/meal-prep-services.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.k)],
["src/content/industries/more-industries.mdx", () => import('./more-industries_BXYBJmLo.mjs').then(n => n.m)],
["src/content/industries/multi-crew-contractors.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.m)],
["src/content/industries/online-retail.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.k)],
["src/content/industries/nonprofits.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.n)],
["src/content/industries/overflow-development-support.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.o)],
["src/content/industries/painting-contractors.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.p)],
["src/content/industries/personal-portfolios.mdx", () => import('./personal-portfolios_CGnNDl9_.mjs').then(n => n.p)],
["src/content/industries/pest-control.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.p)],
["src/content/industries/plumbing.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.i)],
["src/content/industries/pressure-washing.mdx", () => import('./pressure-washing_CMRqj9Ii.mjs').then(n => n.k)],
["src/content/industries/product-based-businesses.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.g)],
["src/content/industries/real-estate-professionals.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.r)],
["src/content/industries/professional-services.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.g)],
["src/content/industries/restaurants-food-service.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.h)],
["src/content/industries/roofing.mdx", () => Promise.resolve().then(() => roofing)],
["src/content/industries/salons-barbers.mdx", () => import('./salons-barbers_CkLVNSgv.mjs').then(n => n.s)],
["src/content/industries/seo-agency-partnerships.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.s)],
["src/content/industries/social-media-agency-partnerships.mdx", () => import('./social-media-agency-partnerships_Dwpc-Dm_.mjs').then(n => n.s)],
["src/content/industries/sit-down-restaurants.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.s)],
["src/content/industries/solar.mdx", () => import('./solar_DEQ7kep_.mjs').then(n => n.k)],
["src/content/industries/subscription-box-companies.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.i)],
["src/content/industries/speakers.mdx", () => import('./speakers_DtKT0SWc.mjs').then(n => n.j)],
["src/content/industries/supplements-wellness.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.k)],
["src/content/industries/therapists-counselors.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.t)],
["src/content/industries/web-production-support.mdx", () => import('./web-production-support_B3li1xDH.mjs').then(n => n.w)],
["src/content/industries/white-label-development.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.j)],
["src/content/industries/window-door-installation.mdx", () => import('./window-door-installation_C1f0v-53.mjs').then(n => n.k)]]);

async function getMod$f() {
						return import('./cookie-policy_Brwfkpgu.mjs');
					}
					const collectedLinks$f = "@@ASTRO-LINKS@@";
					const collectedStyles$f = "@@ASTRO-STYLES@@";
					const defaultMod$f = { __astroPropagation: true, getMod: getMod$f, collectedLinks: collectedLinks$f, collectedStyles: collectedStyles$f, collectedScripts: [] };

const cookiePolicy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$f
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$e() {
						return import('./blog_BsHebBtM.mjs');
					}
					const collectedLinks$e = "@@ASTRO-LINKS@@";
					const collectedStyles$e = "@@ASTRO-STYLES@@";
					const defaultMod$e = { __astroPropagation: true, getMod: getMod$e, collectedLinks: collectedLinks$e, collectedStyles: collectedStyles$e, collectedScripts: [] };

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$e
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$d() {
						return import('./bakeries_Cz73JOvo.mjs');
					}
					const collectedLinks$d = "@@ASTRO-LINKS@@";
					const collectedStyles$d = "@@ASTRO-STYLES@@";
					const defaultMod$d = { __astroPropagation: true, getMod: getMod$d, collectedLinks: collectedLinks$d, collectedStyles: collectedStyles$d, collectedScripts: [] };

const bakeries = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$d
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$c() {
						return import('./aws_CezyU5Jy.mjs');
					}
					const collectedLinks$c = "@@ASTRO-LINKS@@";
					const collectedStyles$c = "@@ASTRO-STYLES@@";
					const defaultMod$c = { __astroPropagation: true, getMod: getMod$c, collectedLinks: collectedLinks$c, collectedStyles: collectedStyles$c, collectedScripts: [] };

const aws = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$c
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$b() {
						return import('./css_Cd8YE0Tn.mjs');
					}
					const collectedLinks$b = "@@ASTRO-LINKS@@";
					const collectedStyles$b = "@@ASTRO-STYLES@@";
					const defaultMod$b = { __astroPropagation: true, getMod: getMod$b, collectedLinks: collectedLinks$b, collectedStyles: collectedStyles$b, collectedScripts: [] };

const css = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$b
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$a() {
						return import('./framer_D67R7KaY.mjs');
					}
					const collectedLinks$a = "@@ASTRO-LINKS@@";
					const collectedStyles$a = "@@ASTRO-STYLES@@";
					const defaultMod$a = { __astroPropagation: true, getMod: getMod$a, collectedLinks: collectedLinks$a, collectedStyles: collectedStyles$a, collectedScripts: [] };

const framer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$a
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$9() {
						return import('./gatsby_B-BwrO_H.mjs');
					}
					const collectedLinks$9 = "@@ASTRO-LINKS@@";
					const collectedStyles$9 = "@@ASTRO-STYLES@@";
					const defaultMod$9 = { __astroPropagation: true, getMod: getMod$9, collectedLinks: collectedLinks$9, collectedStyles: collectedStyles$9, collectedScripts: [] };

const gatsby = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$9
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$8() {
						return import('./github_DqA9vA6Q.mjs');
					}
					const collectedLinks$8 = "@@ASTRO-LINKS@@";
					const collectedStyles$8 = "@@ASTRO-STYLES@@";
					const defaultMod$8 = { __astroPropagation: true, getMod: getMod$8, collectedLinks: collectedLinks$8, collectedStyles: collectedStyles$8, collectedScripts: [] };

const github = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$8
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$7() {
						return import('./nodejs_Cj53VkbR.mjs');
					}
					const collectedLinks$7 = "@@ASTRO-LINKS@@";
					const collectedStyles$7 = "@@ASTRO-STYLES@@";
					const defaultMod$7 = { __astroPropagation: true, getMod: getMod$7, collectedLinks: collectedLinks$7, collectedStyles: collectedStyles$7, collectedScripts: [] };

const nodejs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$7
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$6() {
						return import('./nextjs_BM7FQUvN.mjs');
					}
					const collectedLinks$6 = "@@ASTRO-LINKS@@";
					const collectedStyles$6 = "@@ASTRO-STYLES@@";
					const defaultMod$6 = { __astroPropagation: true, getMod: getMod$6, collectedLinks: collectedLinks$6, collectedStyles: collectedStyles$6, collectedScripts: [] };

const nextjs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$6
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$5() {
						return import('./react_bA1trV3J.mjs');
					}
					const collectedLinks$5 = "@@ASTRO-LINKS@@";
					const collectedStyles$5 = "@@ASTRO-STYLES@@";
					const defaultMod$5 = { __astroPropagation: true, getMod: getMod$5, collectedLinks: collectedLinks$5, collectedStyles: collectedStyles$5, collectedScripts: [] };

const react = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$5
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$4() {
						return import('./python_B4PgktR6.mjs');
					}
					const collectedLinks$4 = "@@ASTRO-LINKS@@";
					const collectedStyles$4 = "@@ASTRO-STYLES@@";
					const defaultMod$4 = { __astroPropagation: true, getMod: getMod$4, collectedLinks: collectedLinks$4, collectedStyles: collectedStyles$4, collectedScripts: [] };

const python = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$4
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$3() {
						return import('./svelte_D2tSEWPY.mjs');
					}
					const collectedLinks$3 = "@@ASTRO-LINKS@@";
					const collectedStyles$3 = "@@ASTRO-STYLES@@";
					const defaultMod$3 = { __astroPropagation: true, getMod: getMod$3, collectedLinks: collectedLinks$3, collectedStyles: collectedStyles$3, collectedScripts: [] };

const svelte = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$2() {
						return import('./vercel_C_VWu6GI.mjs');
					}
					const collectedLinks$2 = "@@ASTRO-LINKS@@";
					const collectedStyles$2 = "@@ASTRO-STYLES@@";
					const defaultMod$2 = { __astroPropagation: true, getMod: getMod$2, collectedLinks: collectedLinks$2, collectedStyles: collectedStyles$2, collectedScripts: [] };

const vercel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$2
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod$1() {
						return import('./hvac_DCrnayUX.mjs');
					}
					const collectedLinks$1 = "@@ASTRO-LINKS@@";
					const collectedStyles$1 = "@@ASTRO-STYLES@@";
					const defaultMod$1 = { __astroPropagation: true, getMod: getMod$1, collectedLinks: collectedLinks$1, collectedStyles: collectedStyles$1, collectedScripts: [] };

const hvac = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod$1
}, Symbol.toStringTag, { value: 'Module' }));

async function getMod() {
						return import('./roofing_CVn5s2fI.mjs');
					}
					const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

const roofing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: defaultMod
}, Symbol.toStringTag, { value: 'Module' }));

export { contentModules as default };
