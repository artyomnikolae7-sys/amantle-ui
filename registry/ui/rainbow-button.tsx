"use client";

import React from "react";

/**
 * @component RainbowButton
 * @source https://magicui.design/docs/components/rainbow-button
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function RainbowButton({
  children = "Rainbow Kinetic Action",
  className = "",
  ...props
}: RainbowButtonProps) {
  return (
    <button
      {...props}
      className={`group relative inline-flex items-center justify-center rounded-xl p-[2px] font-semibold text-xs tracking-tight transition-transform duration-150 active:scale-[0.97] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div
        className="absolute inset-0 rounded-xl animate-spin opacity-85 transition-opacity group-hover:opacity-100"
        style={{
          background: "conic-gradient(from 0deg, #ff0055, #7a00ff, #00e1ff, #00ff66, #ffea00, #ff0055)",
          animationDuration: "4s",
        }}
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center rounded-[10px] bg-background px-5 py-2.5 text-foreground transition-colors group-hover:bg-background/90">
        {children}
      </span>
    </button>
  );
}

export default RainbowButton;
