"use client";

import React, { useState } from "react";

/**
 * @component HoverBorderGradient
 * @source https://ui.aceternity.com/components/hover-border-gradient
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface HoverBorderGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function HoverBorderGradient({
  children = "Hover Kinetic Border",
  className = "",
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
      className={`relative inline-flex items-center justify-center rounded-xl p-[1px] overflow-hidden font-medium text-xs tracking-tight transition-transform duration-150 active:scale-[0.97] ${className}`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hovered ? "opacity-100 animate-spin" : "opacity-40"
        }`}
        style={{
          background: "radial-gradient(circle, #38bdf8 10%, #818cf8 40%, transparent 70%)",
          animationDuration: "3s",
        }}
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center rounded-[11px] bg-card px-5 py-2.5 text-card-foreground shadow-sm">
        {children}
      </span>
    </button>
  );
}

export default HoverBorderGradient;
