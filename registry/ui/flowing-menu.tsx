"use client";

import React, { useState } from "react";

/**
 * @component FlowingMenu
 * @source https://reactbits.dev/components/flowing-menu
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface FlowingMenuItem {
  text: string;
  image: string;
}

export interface FlowingMenuProps {
  items?: FlowingMenuItem[];
  className?: string;
}

export function FlowingMenu({
  items = [
    { text: "Digital Architecture", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" },
    { text: "Kinetic Motion System", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=80" },
    { text: "Spatial Audio Interface", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" },
    { text: "Autonomous Agent Core", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=80" },
  ],
  className = "",
}: FlowingMenuProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav className={`relative flex w-full max-w-md flex-col divide-y divide-border/40 overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIdx(index)}
          onMouseLeave={() => setHoveredIdx(null)}
          className="group relative flex cursor-pointer items-center justify-between px-6 py-4 transition-colors duration-200 hover:bg-muted/40"
        >
          <span className="text-sm font-semibold tracking-tight text-foreground transition-transform duration-200 group-hover:translate-x-1">
            {item.text}
          </span>
          <span className="text-xs text-muted-foreground opacity-60 group-hover:opacity-100">
            0{index + 1}
          </span>
          {hoveredIdx === index && (
            <div
              className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 z-20 h-16 w-24 overflow-hidden rounded-lg border border-border shadow-xl animate-in fade-in zoom-in-95 duration-200"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <img src={item.image} alt={item.text} className="h-full w-full object-cover" />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default FlowingMenu;
