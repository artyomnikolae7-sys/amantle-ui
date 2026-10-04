"use client";
import React, { useRef, useState } from "react";
/**
 * @component SpotlightButton
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function SpotlightButton({ children = "Explore Module", className = "" }: { children?: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className={`relative overflow-hidden rounded-xl border border-border/80 bg-background/80 px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 active:scale-95 hover:border-primary/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, rgba(var(--primary), 0.18), transparent 80%)`,
        }}
      />
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </button>
  );
}
export default SpotlightButton;
