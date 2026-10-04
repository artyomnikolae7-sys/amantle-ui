"use client";

import React, { useRef, useState } from "react";

/**
 * @component Crosshair
 * @source https://reactbits.dev/components/crosshair
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface CrosshairProps {
  className?: string;
  color?: string;
}

export function Crosshair({
  className = "",
  color = "rgb(14, 165, 233)",
}: CrosshairProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className={`relative h-56 w-full max-w-md overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-4 select-none ${className}`}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
        <span className="text-xs font-mono font-bold tracking-widest uppercase">Target Area</span>
        <span className="text-[11px] opacity-75">Move cursor inside to engage reticle</span>
      </div>
      {visible && (
        <>
          <div
            className="pointer-events-none absolute left-0 right-0 h-px transition-all duration-75"
            style={{ top: pos.y, backgroundColor: color, opacity: 0.6 }}
          />
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-px transition-all duration-75"
            style={{ left: pos.x, backgroundColor: color, opacity: 0.6 }}
          />
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border border-current transition-all duration-75"
            style={{ left: pos.x, top: pos.y, color, boxShadow: `0 0 10px ${color}` }}
          />
        </>
      )}
    </div>
  );
}

export default Crosshair;
