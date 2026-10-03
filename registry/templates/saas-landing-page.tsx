/**
 * @source https://amantle.dev/registry/templates/saas-landing-page
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { NavbarStickyBlur } from "@/registry/blocks/navbar-sticky-blur";
import { HeroGradientGlow } from "@/registry/blocks/hero-gradient-glow";
import { IntegrationLogosCloud } from "@/registry/blocks/integration-logos-cloud";
import { BentoGrid3x3 } from "@/registry/blocks/bento-grid-3x3";
import { FeatureAlternatingRows } from "@/registry/blocks/feature-alternating-rows";
import { PricingCardsTier } from "@/registry/blocks/pricing-cards-tier";
import { TestimonialsSlider } from "@/registry/blocks/testimonials-slider";
import { FaqAccordion } from "@/registry/blocks/faq-accordion";
import { CtaBannerGlow } from "@/registry/blocks/cta-banner-glow";
import { FooterMegaColumns } from "@/registry/blocks/footer-mega-columns";

export function SaasLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarStickyBlur />
      <main>
        <HeroGradientGlow />
        <IntegrationLogosCloud />
        <BentoGrid3x3 />
        <FeatureAlternatingRows />
        <PricingCardsTier />
        <TestimonialsSlider />
        <FaqAccordion />
        <CtaBannerGlow />
      </main>
      <FooterMegaColumns />
    </div>
  );
}

export default SaasLandingPage;
