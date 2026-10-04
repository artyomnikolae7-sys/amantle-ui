"use client";
import React, { useState } from "react";
/**
 * @component FollowPointer
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FollowPointer({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      className={`relative h-40 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm select-none flex items-center justify-center ${className}`}
    >
      <div
        style={{
          background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.2), transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0"
      />
      <span className="relative z-10 text-xs font-semibold text-foreground">Follow Pointer Glow</span>
    </div>
  );
}
export default FollowPointer;
