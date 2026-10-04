"use client";

import React from "react";

/**
 * @component WaveText
 * @source https://reactbits.dev/text-animations/wave-text
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface WaveTextProps {
  text?: string;
  className?: string;
}

export function WaveText({
  text = "Fluid Wave Typography",
  className = "",
}: WaveTextProps) {
  const letters = text.split("");

  return (
    <div className={`inline-flex select-none items-center overflow-hidden font-bold tracking-tight text-xl md:text-2xl ${className}`}>
      {letters.map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform hover:-translate-y-2"
          style={{
            animation: `amantel-wave 1.6s ease-in-out infinite`,
            animationDelay: `${i * 0.08}s`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

export default WaveText;
