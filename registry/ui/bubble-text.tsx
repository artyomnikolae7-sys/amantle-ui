"use client";
import React from "react";
/**
 * @component BubbleText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BubbleText({ text = "BUBBLE", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`inline-flex gap-1 text-2xl font-black text-foreground ${className}`}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-200 hover:-translate-y-2 hover:scale-125 cursor-pointer text-primary"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
export default BubbleText;
