"use client";
import React from "react";
/**
 * @component WavyTextEffect
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function WavyTextEffect({ word = "UNDULATING", className = "" }: { word?: string; className?: string }) {
  return (
    <div className={`inline-flex gap-1 text-xl font-black text-primary ${className}`}>
      {word.split("").map((c, i) => (
        <span key={i} style={{ animation: "bounce 1.6s infinite", animationDelay: `${i * 0.1}s` }}>
          {c}
        </span>
      ))}
    </div>
  );
}
export default WavyTextEffect;
