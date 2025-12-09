import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BVIX8Iu0.mjs';
import 'piccolore';
import { g as getCollectionMeta, u as shouldCollectionHavePage } from '../chunks/BaseLayout_DL_Xfe7i.mjs';
import { d as getCollectionIndexLayoutPath, a as getLayoutComponent, e as buildCollectionSEOProps, c as getPageCollections } from '../chunks/layoutUtils_BvxM53OW.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../renderers.mjs';

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

function getRawMDXContent(collectionName, fileName) {
  try {
    const filePath = join(process.cwd(), "src", "content", collectionName, `${fileName}.mdx`);
    return readFileSync(filePath, "utf-8");
  } catch (error) {
    return null;
  }
}
function hasContentAfterFrontmatter(rawContent) {
  const frontmatterEnd = rawContent.indexOf("---", 4);
  if (frontmatterEnd === -1) return false;
  const contentAfterFrontmatter = rawContent.substring(frontmatterEnd + 3).trim();
  return contentAfterFrontmatter.length > 0;
}
async function getMDXContentIfExists(collectionName, fileName = "_meta") {
  try {
    const rawContent = getRawMDXContent(collectionName, fileName);
    if (!rawContent) {
      return null;
    }
    const hasContent = hasContentAfterFrontmatter(rawContent);
    if (!hasContent) {
      return { Component: null, hasContent: false };
    }
    const mdxModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../content/about-us/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.N),"../content/about-us/mission.mdx": () => import('../chunks/mission_6lmjW_mC.mjs'),"../content/about-us/promise.mdx": () => import('../chunks/promise_D7cWuClw.mjs'),"../content/about-us/vision.mdx": () => import('../chunks/vision_CaRKwD5D.mjs'),"../content/authors/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.O),"../content/benefits/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.P),"../content/benefits/better-than-page-builders.mdx": () => import('../chunks/better-than-page-builders_BkRM3h5t.mjs'),"../content/benefits/business-friendly.mdx": () => import('../chunks/business-friendly_Cq-winn8.mjs'),"../content/benefits/fast-performance.mdx": () => import('../chunks/fast-performance_CubERcYJ.mjs'),"../content/benefits/full-service-delivery.mdx": () => import('../chunks/full-service-delivery_DQJBW9-M.mjs'),"../content/benefits/future-friendly.mdx": () => import('../chunks/future-friendly_CenllKPc.mjs'),"../content/benefits/google-friendly.mdx": () => import('../chunks/google-friendly_B8XgCIHH.mjs'),"../content/benefits/growth-focused.mdx": () => import('../chunks/growth-focused_DPT9MYjP.mjs'),"../content/benefits/hands-off-security.mdx": () => import('../chunks/hands-off-security_BvpW6-Wx.mjs'),"../content/benefits/honest-pricing.mdx": () => import('../chunks/honest-pricing_DCsuUbp-.mjs'),"../content/benefits/long-term-reliability.mdx": () => import('../chunks/long-term-reliability_amtFhYP5.mjs'),"../content/benefits/professional-trust.mdx": () => import('../chunks/professional-trust_B_4LX4--.mjs'),"../content/benefits/responsive-support.mdx": () => import('../chunks/responsive-support_CniK-fAb.mjs'),"../content/blog/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.Q),"../content/blog/first-post.mdx": () => import('../chunks/first-post_CJ0gJFQT.mjs'),"../content/capabilities/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.R),"../content/capabilities/accessibility-compliance.mdx": () => import('../chunks/accessibility-compliance_IRebCiC4.mjs'),"../content/capabilities/analytics-conversion-optimization.mdx": () => import('../chunks/analytics-conversion-optimization_DlVCL0_x.mjs'),"../content/capabilities/back-end-development.mdx": () => import('../chunks/back-end-development_Doxc7_qv.mjs'),"../content/capabilities/brand-identity-design.mdx": () => import('../chunks/brand-identity-design_DIQp6L6P.mjs'),"../content/capabilities/browser-extension-development.mdx": () => import('../chunks/browser-extension-development_CWz796wr.mjs'),"../content/capabilities/design-systems.mdx": () => import('../chunks/design-systems_CruqCu0R.mjs'),"../content/capabilities/e-commerce-development.mdx": () => import('../chunks/e-commerce-development_DN1AUdLv.mjs'),"../content/capabilities/front-end-development.mdx": () => import('../chunks/front-end-development_BPzClvGT.mjs'),"../content/capabilities/full-stack-web-development.mdx": () => import('../chunks/full-stack-web-development_J2UOvSwb.mjs'),"../content/capabilities/managed-website-hosting.mdx": () => import('../chunks/managed-website-hosting_C1W7_P5e.mjs'),"../content/capabilities/off-page-seo.mdx": () => import('../chunks/off-page-seo_Db0E2qjo.mjs'),"../content/capabilities/on-page-seo.mdx": () => import('../chunks/on-page-seo_cmsqE1Qf.mjs'),"../content/capabilities/performance-optimization.mdx": () => import('../chunks/performance-optimization_BgR9RxSd.mjs'),"../content/capabilities/seo.mdx": () => import('../chunks/seo_BWSBOuhK.mjs'),"../content/capabilities/technical-seo.mdx": () => import('../chunks/technical-seo_Dymg0ew7.mjs'),"../content/capabilities/technical-support.mdx": () => import('../chunks/technical-support_Bzl03Ujt.mjs'),"../content/capabilities/ui-design.mdx": () => import('../chunks/ui-design_BjK7Y_Rf.mjs'),"../content/capabilities/uptime-reliability-monitoring.mdx": () => import('../chunks/uptime-reliability-monitoring_CRG7vuJ8.mjs'),"../content/capabilities/ux-design.mdx": () => import('../chunks/ux-design_UZckdPEp.mjs'),"../content/capabilities/web-design.mdx": () => import('../chunks/web-design_CtuHrOiQ.mjs'),"../content/capabilities/web-development.mdx": () => import('../chunks/web-development_CHBCDfwJ.mjs'),"../content/capabilities/webmaster-services.mdx": () => import('../chunks/webmaster-services_Dux3sAwv.mjs'),"../content/capabilities/website-maintenance-support.mdx": () => import('../chunks/website-maintenance-support_CNU2FYjo.mjs'),"../content/capabilities/website-migration-services.mdx": () => import('../chunks/website-migration-services_CNJx6sSf.mjs'),"../content/capabilities/website-redesign-modernization.mdx": () => import('../chunks/website-redesign-modernization_CMnDcBBR.mjs'),"../content/contact-us/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.S),"../content/faq/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.U),"../content/faq/can-you-collaborate-with-our-team.mdx": () => import('../chunks/can-you-collaborate-with-our-team_9JmnQ6fp.mjs'),"../content/faq/can-you-connect-forms-bookings-or-a-crm.mdx": () => import('../chunks/can-you-connect-forms-bookings-or-a-crm_C-ftghwU.mjs'),"../content/faq/can-you-help-with-the-words-and-images.mdx": () => import('../chunks/can-you-help-with-the-words-and-images_Dmenu1ci.mjs'),"../content/faq/can-you-redesign-my-current-site.mdx": () => import('../chunks/can-you-redesign-my-current-site_BsHhDyE3.mjs'),"../content/faq/do-you-build-online-stores.mdx": () => import('../chunks/do-you-build-online-stores_D68stGlj.mjs'),"../content/faq/do-you-do-seo.mdx": () => import('../chunks/do-you-do-seo_Bzk_yqoC.mjs'),"../content/faq/do-you-handle-hosting-and-maintenance.mdx": () => import('../chunks/do-you-handle-hosting-and-maintenance_B90l8IpK.mjs'),"../content/faq/do-you-offer-payment-plans.mdx": () => import('../chunks/do-you-offer-payment-plans_CKDLALpe.mjs'),"../content/faq/do-you-set-up-google-business-and-social-accounts.mdx": () => import('../chunks/do-you-set-up-google-business-and-social-accounts_x7ZHUQNT.mjs'),"../content/faq/how-do-revisions-work.mdx": () => import('../chunks/how-do-revisions-work_Dn1vwMLV.mjs'),"../content/faq/how-do-we-get-started.mdx": () => import('../chunks/how-do-we-get-started_BHcSej15.mjs'),"../content/faq/how-long-does-it-take-to-build-a-website.mdx": () => import('../chunks/how-long-does-it-take-to-build-a-website_CLpGAxh-.mjs'),"../content/faq/what-about-ai-seo-and-chatgpt-visibility.mdx": () => import('../chunks/what-about-ai-seo-and-chatgpt-visibility_uw2Eq_9T.mjs'),"../content/faq/what-do-you-need-from-me.mdx": () => import('../chunks/what-do-you-need-from-me_LHG5EtoC.mjs'),"../content/faq/what-is-included-in-your-ongoing-support.mdx": () => import('../chunks/what-is-included-in-your-ongoing-support_MUQ1tFzl.mjs'),"../content/faq/will-my-site-be-secure.mdx": () => import('../chunks/will-my-site-be-secure_OJZZ2tT2.mjs'),"../content/faq/will-my-website-be-mobile-friendly.mdx": () => import('../chunks/will-my-website-be-mobile-friendly_im6JWU6H.mjs'),"../content/industries/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.V),"../content/industries/authors-personal-brands.mdx": () => import('../chunks/authors-personal-brands_Br0tl2O6.mjs'),"../content/industries/b2b-services.mdx": () => import('../chunks/b2b-services_0iIzMVtK.mjs'),"../content/industries/bakeries.mdx": () => import('../chunks/bakeries_Cz73JOvo.mjs'),"../content/industries/bars-lounges.mdx": () => import('../chunks/bars-lounges_D65xLpbP.mjs'),"../content/industries/book-authors.mdx": () => import('../chunks/book-authors_Ch7ucqcW.mjs'),"../content/industries/boutique-brands.mdx": () => import('../chunks/boutique-brands_B1wRIV__.mjs'),"../content/industries/branding-agency-partnerships.mdx": () => import('../chunks/branding-agency-partnerships_Df3ypIAx.mjs'),"../content/industries/cafes-coffee-shops.mdx": () => import('../chunks/cafes-coffee-shops_BW1PYQ3M.mjs'),"../content/industries/catering-companies.mdx": () => import('../chunks/catering-companies_Cr2HqHFb.mjs'),"../content/industries/cleaning-services.mdx": () => import('../chunks/cleaning-services_D8zYI9AQ.mjs'),"../content/industries/clothing-apparel.mdx": () => import('../chunks/clothing-apparel_D27eNBoU.mjs'),"../content/industries/coaches.mdx": () => import('../chunks/coaches_DVMr2DVr.mjs'),"../content/industries/consultants.mdx": () => import('../chunks/consultants_Dm2oiwu_.mjs'),"../content/industries/course-creators.mdx": () => import('../chunks/course-creators_D043gDY1.mjs'),"../content/industries/cpas-accountants.mdx": () => import('../chunks/cpas-accountants_Bs2MvqLZ.mjs'),"../content/industries/creative-studio-development-support.mdx": () => import('../chunks/creative-studio-development-support_Dq_vuBU0.mjs'),"../content/industries/demolition.mdx": () => import('../chunks/demolition_D9wL5eXQ.mjs'),"../content/industries/dropshipping-brands.mdx": () => import('../chunks/dropshipping-brands_BsOhAHcV.mjs'),"../content/industries/electrical.mdx": () => import('../chunks/electrical_B66yWKxv.mjs'),"../content/industries/fast-casual.mdx": () => import('../chunks/fast-casual_Rk1vHdHI.mjs'),"../content/industries/fencing-contractors.mdx": () => import('../chunks/fencing-contractors_CSYCAlW3.mjs'),"../content/industries/financial-advisors.mdx": () => import('../chunks/financial-advisors_riDz-aNy.mjs'),"../content/industries/fitness-trainers.mdx": () => import('../chunks/fitness-trainers_BpostEtD.mjs'),"../content/industries/flooring-installers.mdx": () => import('../chunks/flooring-installers_ClHc14cU.mjs'),"../content/industries/food-trucks.mdx": () => import('../chunks/food-trucks_7Sgr75eo.mjs'),"../content/industries/garage-door-repair.mdx": () => import('../chunks/garage-door-repair_DgvEo56A.mjs'),"../content/industries/handmade-products.mdx": () => import('../chunks/handmade-products_lTgkHtWl.mjs'),"../content/industries/handyman-services.mdx": () => import('../chunks/handyman-services_DqB91syc.mjs'),"../content/industries/health-beauty-products.mdx": () => import('../chunks/health-beauty-products_Dkfmmmsq.mjs'),"../content/industries/health-wellness-studios.mdx": () => import('../chunks/health-wellness-studios_CGhbLeGE.mjs'),"../content/industries/home-goods.mdx": () => import('../chunks/home-goods_CclpSLBX.mjs'),"../content/industries/home-services.mdx": () => import('../chunks/home-services_CKdqEhFC.mjs'),"../content/industries/hvac.mdx": () => import('../chunks/hvac_DCrnayUX.mjs'),"../content/industries/influencers.mdx": () => import('../chunks/influencers_C4E_f8y_.mjs'),"../content/industries/insurance-agents.mdx": () => import('../chunks/insurance-agents_Cz7FU_M0.mjs'),"../content/industries/it-service-providers.mdx": () => import('../chunks/it-service-providers_z5Rrblwd.mjs'),"../content/industries/juice-smoothie-shops.mdx": () => import('../chunks/juice-smoothie-shops_CeB-qpyv.mjs'),"../content/industries/junk-removal.mdx": () => import('../chunks/junk-removal_BuKO8Lj6.mjs'),"../content/industries/landscaping.mdx": () => import('../chunks/landscaping_D0-4wbpf.mjs'),"../content/industries/lawyers-attorneys.mdx": () => import('../chunks/lawyers-attorneys_BMBrurJe.mjs'),"../content/industries/local-community-organizations.mdx": () => import('../chunks/local-community-organizations_CjEqXiSA.mjs'),"../content/industries/marketing-agencies.mdx": () => import('../chunks/marketing-agencies_ma--eXOA.mjs'),"../content/industries/marketing-professionals.mdx": () => import('../chunks/marketing-professionals_SYgO4b5H.mjs'),"../content/industries/meal-prep-services.mdx": () => import('../chunks/meal-prep-services_8AXwWJvg.mjs'),"../content/industries/medical-practices.mdx": () => import('../chunks/medical-practices_C6HsL5qi.mjs'),"../content/industries/more-industries.mdx": () => import('../chunks/more-industries_DPkQzidA.mjs'),"../content/industries/multi-crew-contractors.mdx": () => import('../chunks/multi-crew-contractors_folRL4Vb.mjs'),"../content/industries/nonprofits.mdx": () => import('../chunks/nonprofits_Dh4KIGrI.mjs'),"../content/industries/online-retail.mdx": () => import('../chunks/online-retail_Aap2zNuC.mjs'),"../content/industries/overflow-development-support.mdx": () => import('../chunks/overflow-development-support_DFNvggir.mjs'),"../content/industries/painting-contractors.mdx": () => import('../chunks/painting-contractors_Dg7Gq1BK.mjs'),"../content/industries/personal-portfolios.mdx": () => import('../chunks/personal-portfolios_CWCRQ26w.mjs'),"../content/industries/pest-control.mdx": () => import('../chunks/pest-control_C3Q1n61z.mjs'),"../content/industries/plumbing.mdx": () => import('../chunks/plumbing_8EhdnJn1.mjs'),"../content/industries/pressure-washing.mdx": () => import('../chunks/pressure-washing_BWMJt4Am.mjs'),"../content/industries/product-based-businesses.mdx": () => import('../chunks/product-based-businesses_CR9kyIb1.mjs'),"../content/industries/professional-services.mdx": () => import('../chunks/professional-services_Chw2otY7.mjs'),"../content/industries/real-estate-professionals.mdx": () => import('../chunks/real-estate-professionals_CcZMzsfj.mjs'),"../content/industries/restaurants-food-service.mdx": () => import('../chunks/restaurants-food-service_KpFxXS6E.mjs'),"../content/industries/roofing.mdx": () => import('../chunks/roofing_CVn5s2fI.mjs'),"../content/industries/salons-barbers.mdx": () => import('../chunks/salons-barbers_Cm6TSqcu.mjs'),"../content/industries/seo-agency-partnerships.mdx": () => import('../chunks/seo-agency-partnerships_QjqZbOuO.mjs'),"../content/industries/sit-down-restaurants.mdx": () => import('../chunks/sit-down-restaurants_Cqn_udnP.mjs'),"../content/industries/social-media-agency-partnerships.mdx": () => import('../chunks/social-media-agency-partnerships_C10w8N4f.mjs'),"../content/industries/solar.mdx": () => import('../chunks/solar_CYkEt5ds.mjs'),"../content/industries/speakers.mdx": () => import('../chunks/speakers_odbdUTVs.mjs'),"../content/industries/subscription-box-companies.mdx": () => import('../chunks/subscription-box-companies_DO0qbRP8.mjs'),"../content/industries/supplements-wellness.mdx": () => import('../chunks/supplements-wellness_jTCBEXJi.mjs'),"../content/industries/therapists-counselors.mdx": () => import('../chunks/therapists-counselors_Cce5faGS.mjs'),"../content/industries/web-production-support.mdx": () => import('../chunks/web-production-support_Dy05cpBd.mjs'),"../content/industries/white-label-development.mdx": () => import('../chunks/white-label-development_BefYhWCm.mjs'),"../content/industries/window-door-installation.mdx": () => import('../chunks/window-door-installation_BhAirpTD.mjs'),"../content/legal/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.W),"../content/legal/cookie-policy.mdx": () => import('../chunks/cookie-policy_Brwfkpgu.mjs'),"../content/legal/privacy-policy.mdx": () => import('../chunks/privacy-policy_B5wps5L_.mjs'),"../content/legal/terms-of-service.mdx": () => import('../chunks/terms-of-service_M5L5UP4Z.mjs'),"../content/menu-items/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.X),"../content/menus/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.Y),"../content/projects/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.Z),"../content/projects/certified-bag-chasers-light.mdx": () => import('../chunks/certified-bag-chasers-light_B8CQtJJw.mjs'),"../content/projects/farias-demolition.mdx": () => import('../chunks/farias-demolition_IdIcxNY4.mjs'),"../content/projects/pablos-peak-roofing.mdx": () => import('../chunks/pablos-peak-roofing_DBnJbhsI.mjs'),"../content/projects/pronto-junk-removal.mdx": () => import('../chunks/pronto-junk-removal_BNcSnIBW.mjs'),"../content/projects/roonys-marketing.mdx": () => import('../chunks/roonys-marketing_DUa2P_os.mjs'),"../content/projects/tok-secret-formula.mdx": () => import('../chunks/tok-secret-formula_j08UtaLJ.mjs'),"../content/projects/universal-chillers.mdx": () => import('../chunks/universal-chillers_Thgc9f08.mjs'),"../content/social-media/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.a0),"../content/solutions/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.a1),"../content/solutions/blog.mdx": () => import('../chunks/blog_BsHebBtM.mjs'),"../content/solutions/custom-full-stack-applications.mdx": () => import('../chunks/custom-full-stack-applications_BpM8g2S5.mjs'),"../content/solutions/e-commerce-websites.mdx": () => import('../chunks/e-commerce-websites_DKVtqcaG.mjs'),"../content/solutions/landing-pages.mdx": () => import('../chunks/landing-pages_CT0Z9431.mjs'),"../content/solutions/restaurant-websites.mdx": () => import('../chunks/restaurant-websites_eAHdg8Xs.mjs'),"../content/solutions/standard-websites.mdx": () => import('../chunks/standard-websites_v6RT-2PL.mjs'),"../content/stats/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.a2),"../content/stats/industries-served.mdx": () => import('../chunks/industries-served_DrXAWxmf.mjs'),"../content/stats/projects-launched.mdx": () => import('../chunks/projects-launched_ZoXQj8Li.mjs'),"../content/stats/support-response.mdx": () => import('../chunks/support-response_6boMYhDm.mjs'),"../content/stats/uptime.mdx": () => import('../chunks/uptime_3gAEofZO.mjs'),"../content/technologies/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.a3),"../content/technologies/astro.mdx": () => import('../chunks/astro_Cw9ogapL.mjs'),"../content/technologies/aws.mdx": () => import('../chunks/aws_CezyU5Jy.mjs'),"../content/technologies/cloudflare.mdx": () => import('../chunks/cloudflare_DIRFJmc2.mjs'),"../content/technologies/css.mdx": () => import('../chunks/css_Cd8YE0Tn.mjs'),"../content/technologies/elementor.mdx": () => import('../chunks/elementor_BbUvVsvr.mjs'),"../content/technologies/figma.mdx": () => import('../chunks/figma_BssUiqrl.mjs'),"../content/technologies/framer.mdx": () => import('../chunks/framer_D67R7KaY.mjs'),"../content/technologies/gatsby.mdx": () => import('../chunks/gatsby_B-BwrO_H.mjs'),"../content/technologies/github.mdx": () => import('../chunks/github_DqA9vA6Q.mjs'),"../content/technologies/html.mdx": () => import('../chunks/html_B-xUwDFD.mjs'),"../content/technologies/javascript.mdx": () => import('../chunks/javascript_eO7162OO.mjs'),"../content/technologies/nextjs.mdx": () => import('../chunks/nextjs_BM7FQUvN.mjs'),"../content/technologies/nodejs.mdx": () => import('../chunks/nodejs_Cj53VkbR.mjs'),"../content/technologies/php.mdx": () => import('../chunks/php_BBUH-ISN.mjs'),"../content/technologies/python.mdx": () => import('../chunks/python_B4PgktR6.mjs'),"../content/technologies/react.mdx": () => import('../chunks/react_bA1trV3J.mjs'),"../content/technologies/shopify.mdx": () => import('../chunks/shopify_ayeWUEG1.mjs'),"../content/technologies/svelte.mdx": () => import('../chunks/svelte_D2tSEWPY.mjs'),"../content/technologies/vercel.mdx": () => import('../chunks/vercel_C_VWu6GI.mjs'),"../content/technologies/webflow.mdx": () => import('../chunks/webflow_Blu3xtHq.mjs'),"../content/technologies/wordpress.mdx": () => import('../chunks/wordpress_DYA3RXif.mjs'),"../content/testimonials/_meta.mdx": () => import('../chunks/BaseLayout_DL_Xfe7i.mjs').then(n => n.a4),"../content/testimonials/anthony-gonzales.mdx": () => import('../chunks/anthony-gonzales_CkI5WYqQ.mjs'),"../content/testimonials/arold-norelus.mdx": () => import('../chunks/arold-norelus_BFV9kx7n.mjs'),"../content/testimonials/darius-clark.mdx": () => import('../chunks/darius-clark_NRF6J4e1.mjs'),"../content/testimonials/kenn-faria.mdx": () => import('../chunks/kenn-faria_CRLjzZ_0.mjs'),"../content/testimonials/richard-faria.mdx": () => import('../chunks/richard-faria_TcWQGPND.mjs'),"../content/testimonials/tarun-kumar.mdx": () => import('../chunks/tarun-kumar_DJ415na3.mjs')})), `../content/${collectionName}/${fileName}.mdx`, 4);
    return {
      Component: mdxModule.default,
      hasContent: true
    };
  } catch (error) {
    console.warn(`Failed to load MDX: ${collectionName}/${fileName}.mdx`, error);
    return null;
  }
}
async function getCollectionMetaMDX(collectionName) {
  return getMDXContentIfExists(collectionName, "_meta");
}

async function generateCollectionIndexPaths() {
  const names = getPageCollections();
  const paths = [];
  for (const coll of names) {
    const meta = getCollectionMeta(coll);
    if (shouldCollectionHavePage(meta)) {
      paths.push({
        params: { collection: coll },
        props: { meta }
      });
    }
  }
  return paths;
}
async function prepareCollectionIndexData(params, props) {
  const { collection } = params;
  const { meta } = props;
  const layoutPath = getCollectionIndexLayoutPath(meta);
  const LayoutComponent = await getLayoutComponent(layoutPath);
  const mdxResult = await getCollectionMetaMDX(collection);
  const Content = mdxResult?.hasContent ? mdxResult.Component : null;
  const hasContent = !!mdxResult?.hasContent;
  const seoProps = buildCollectionSEOProps(meta, collection);
  return {
    LayoutComponent,
    Content,
    collectionName: collection,
    collectionMeta: meta,
    seoProps,
    hasContent
  };
}

const $$Astro = createAstro("https://https://griffinswebservices.com");
async function getStaticPaths() {
  return generateCollectionIndexPaths();
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    LayoutComponent,
    Content,
    collectionName,
    collectionMeta,
    seoProps,
    hasContent
  } = await prepareCollectionIndexData(Astro2.params, Astro2.props);
  return renderTemplate`${renderComponent($$result, "LayoutComponent", LayoutComponent, { "Content": Content, "collectionName": collectionName, "collectionMeta": collectionMeta, "seoProps": seoProps, "hasContent": hasContent, ...collectionMeta })}`;
}, "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[collection]/index.astro", void 0);

const $$file = "/Users/griffinsurett/coding/2025-Website-Projects/griffinswebservices/new/Griffins_Web_Services/src/pages/[collection]/index.astro";
const $$url = "/[collection]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
