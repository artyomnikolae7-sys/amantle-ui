"use client";
import React, { useState } from "react";
/**
 * @component FuzzyText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FuzzyText({ text = "AMANTLE KINETIC", className = "" }: { text?: string; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-block font-black tracking-tight text-3xl select-none cursor-pointer transition-all duration-300 ${className}`}
      style={{
        filter: hovered ? "blur(3px)" : "blur(0px)",
        transition: "filter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
export default FuzzyText;
