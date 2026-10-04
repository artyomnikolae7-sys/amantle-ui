"use client";

import React from "react";

/**
 * @component Marquee
 * @source https://magicui.design/docs/components/marquee
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden p-2 select-none [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around [gap:var(--gap)] ${
            vertical
              ? "flex-col"
              : "flex-row"
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
          style={{
            animation: vertical ? "marquee-vert 20s linear infinite" : "marquee-horiz 25s linear infinite",
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children || (
            <div className="flex items-center gap-4">
              <span className="rounded-lg border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                AMANTLE Kinetic UI
              </span>
              <span className="rounded-lg border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                Next.js 15
              </span>
              <span className="rounded-lg border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                Tailwind v4
              </span>
              <span className="rounded-lg border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground">
                Emil Springs
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
