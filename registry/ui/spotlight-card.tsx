"use client";

import React, { useRef, useState } from "react";

/**
 * @component SpotlightCard
 * @source https://reactbits.dev/components/spotlight-card
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface SpotlightCardProps {
  title?: string;
  description?: string;
  spotlightColor?: string;
  className?: string;
}

export function SpotlightCard({
  title = "Spotlight Illuminator",
  description = "Dynamic radial illumination tracking the user's cursor across interactive cards.",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  className = "",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
          ✦
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default SpotlightCard;
