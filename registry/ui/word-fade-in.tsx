"use client";
import React from "react";
/**
 * @component WordFadeIn
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function WordFadeIn({ words = "Kinetic user interfaces crafted for production", className = "" }: { words?: string; className?: string }) {
  return (
    <p className={`flex flex-wrap gap-2 text-base font-semibold text-foreground ${className}`}>
      {words.split(" ").map((w, i) => (
        <span
          key={i}
          style={{ animation: "fadeIn 0.4s ease-out forwards", animationDelay: `${i * 0.1}s` }}
          className="inline-block"
        >
          {w}
        </span>
      ))}
    </p>
  );
}
export default WordFadeIn;
