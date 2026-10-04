"use client";

import React from "react";

/**
 * @component OrbitingCircles
 * @source https://magicui.design/docs/components/orbiting-circles
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          style={{ width: radius * 2, height: radius * 2 }}
        >
          <circle
            className="stroke-muted-foreground/20 stroke-1"
            cx={radius}
            cy={radius}
            r={radius - 2}
            fill="none"
          />
        </svg>
      )}
      <div
        style={{
          width: radius * 2,
          height: radius * 2,
          animation: `spin ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        className="absolute flex items-center justify-center will-change-transform"
      >
        <div
          style={{
            transform: `translate(${radius - 12}px, 0)`,
          }}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm text-[10px] text-foreground font-bold"
        >
          {children || "🪐"}
        </div>
      </div>
      <div className="h-4 w-4 rounded-full bg-primary/20 ring-4 ring-primary/10" />
    </div>
  );
}

export default OrbitingCircles;
