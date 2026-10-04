"use client";
import React from "react";
/**
 * @component FlipText
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function FlipText({ word = "AMANTLE", className = "" }: { word?: string; className?: string }) {
  return (
    <div className={`inline-flex gap-1 text-2xl font-black text-foreground ${className}`}>
      {word.split("").map((c, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 hover:[transform:rotateX(360deg)] cursor-pointer text-primary"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
export default FlipText;
