"use client";

import React, { useState } from "react";

/**
 * @component InfiniteScroll
 * @source https://reactbits.dev/components/infinite-scroll
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface InfiniteScrollProps {
  items?: string[];
  speed?: number;
  className?: string;
}

export function InfiniteScroll({
  items = [
    "Next.js 15",
    "React 19",
    "Tailwind v4",
    "Emil Kowalski Springs",
    "TypeScript",
    "Framer Kinetics",
    "Accessible WCAG AAA",
  ],
  speed = 25,
  className = "",
}: InfiniteScrollProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative flex w-full max-w-xl overflow-hidden py-4 select-none ${className}`}
    >
      <div
        className="flex gap-4 shrink-0 transition-transform"
        style={{
          animation: `infinite-marquee ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
