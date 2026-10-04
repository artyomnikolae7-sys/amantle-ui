"use client";

import React from "react";

/**
 * @component MinimalCard
 * @source https://cult-ui.com/docs/components/minimal-card
 * @author Cult UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface MinimalCardProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
}

export function MinimalCard({
  title = "Spatial Computing Deck",
  description = "A clean Apple-grade translucent glass surface with razor thin border.",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
  className = "",
}: MinimalCardProps) {
  return (
    <div
      className={`group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-3 shadow-lg backdrop-blur-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1 p-1">
        <h3 className="text-sm font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default MinimalCard;
