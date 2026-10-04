"use client";
import React from "react";
/**
 * @component HyperBlockPricingCardGlass
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockPricingCardGlass({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-border/60 bg-card/40 backdrop-blur-md shadow-sm"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">💳</span>
        <div>
          <div className="text-sm font-bold text-foreground">SaaS Subscription Tier</div>
          <div className="text-xs text-muted-foreground">Frosted Glass Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockPricingCardGlass;
