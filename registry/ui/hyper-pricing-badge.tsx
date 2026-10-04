"use client";
import React from "react";
/**
 * @component HyperPricingBadge
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperPricingBadge({ label = "MOST POPULAR", className = "" }: { label?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20 ${className}`}>
      ★ {label}
    </span>
  );
}
export default HyperPricingBadge;
