"use client";
import React from "react";
/**
 * @component AnimatedShinyText
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function AnimatedShinyText({ children = "Introducing AMANTLE UI v0.4.0 ✨", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%] bg-clip-text text-xs font-semibold text-transparent animate-shimmer ${className}`}>
      {children}
    </span>
  );
}
export default AnimatedShinyText;
