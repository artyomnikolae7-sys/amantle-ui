"use client";
import React from "react";
/**
 * @component ScrollVelocity
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ScrollVelocity({ text = "KINETIC • VELOCITY • DYNAMICS • ", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`flex w-full overflow-hidden select-none py-2 text-xl font-black tracking-tight text-foreground ${className}`}>
      <div className="flex shrink-0 animate-marquee gap-4">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
export default ScrollVelocity;
