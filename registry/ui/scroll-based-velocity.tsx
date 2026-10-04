"use client";
import React from "react";
/**
 * @component ScrollBasedVelocity
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function ScrollBasedVelocity({ defaultVelocity = 5, text = "AUTONOMOUS SYNTHESIS • ", className = "" }: { defaultVelocity?: number; text?: string; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-2 text-xl font-black text-muted-foreground select-none ${className}`}>
      <div className="inline-block animate-marquee">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
export default ScrollBasedVelocity;
