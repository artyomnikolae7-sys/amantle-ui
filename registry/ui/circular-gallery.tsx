"use client";
import React, { useState } from "react";
/**
 * @component CircularGallery
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CircularGallery({ className = "" }: { className?: string }) {
  const [deg, setDeg] = useState(0);
  return (
    <div className={`flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-md ${className}`}>
      <div
        style={{ transform: `rotate(${deg}deg)`, transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" }}
        className="relative h-32 w-32 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center"
      >
        <span className="absolute -top-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">01</span>
        <span className="absolute -bottom-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">03</span>
        <span className="absolute -left-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">04</span>
        <span className="absolute -right-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">02</span>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">⚙️</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setDeg(d => d - 90)} className="rounded-lg border border-border px-2.5 py-1 text-xs hover:bg-muted active:scale-95">⟲ 90°</button>
        <button onClick={() => setDeg(d => d + 90)} className="rounded-lg border border-border px-2.5 py-1 text-xs hover:bg-muted active:scale-95">⟳ 90°</button>
      </div>
    </div>
  );
}
export default CircularGallery;
