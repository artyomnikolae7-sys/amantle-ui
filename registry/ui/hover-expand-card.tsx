"use client";

import React, { useState } from "react";

/**
 * @component HoverExpandCard
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface HoverExpandCardProps {
  title?: string;
  badge?: string;
  description?: string;
  className?: string;
}

export function HoverExpandCard({
  title = "Kinetic Reactor",
  badge = "Autonomous",
  description = "Fluid hover state reveal powered by cubic-bezier physics and zero dependencies.",
  className = "",
}: HoverExpandCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex w-full max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase">
          {badge}
        </span>
        <span className={`text-primary transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}>
          →
        </span>
      </div>
      <h3 className="mt-3 text-base font-bold tracking-tight text-foreground">{title}</h3>
      <div
        className={`grid transition-all duration-300 ${
          hovered ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <p className="overflow-hidden text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HoverExpandCard;
