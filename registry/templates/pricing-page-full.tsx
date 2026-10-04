/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Comprehensive pricing page template
 */

import * as React from "react";
import PricingToggleAnnual from "@/registry/blocks/pricing-toggle-annual";
import PricingSlider from "@/registry/blocks/pricing-slider";
import FeatureComparisonMatrix from "@/registry/blocks/feature-comparison-matrix";
import FaqSearchable from "@/registry/blocks/faq-searchable";
import CtaSplitCard from "@/registry/blocks/cta-split-card";

export default function PricingPageFull() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-16 pb-16">
      <PricingToggleAnnual />
      <PricingSlider />
      <FeatureComparisonMatrix />
      <FaqSearchable />
      <CtaSplitCard />
    </div>
  );
}
