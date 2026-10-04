"use client";
import React from "react";
/**
 * @component BounceText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BounceText({ text = "KINETIC", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`inline-flex gap-1 text-2xl font-black ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{ animation: "bounce 1.5s infinite", animationDelay: `${i * 0.1}s` }}
          className="inline-block text-primary"
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
export default BounceText;
