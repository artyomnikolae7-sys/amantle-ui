"use client";

import React from "react";

/**
 * @component CircularText
 * @source https://reactbits.dev/text-animations/circular-text
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface CircularTextProps {
  text?: string;
  radius?: number;
  spinDuration?: number;
  className?: string;
}

export function CircularText({
  text = "AMANTLE UI • CRAFTED WITH EMIL SPRINGS • ",
  radius = 60,
  spinDuration = 18,
  className = "",
}: CircularTextProps) {
  const characters = text.split("");
  const degStep = 360 / characters.length;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center animate-spin"
        style={{ animationDuration: `${spinDuration}s` }}
      >
        {characters.map((char, index) => {
          const rotate = index * degStep;
          return (
            <span
              key={index}
              className="absolute text-xs font-semibold uppercase tracking-widest text-foreground/80 select-none"
              style={{
                transform: `rotate(${rotate}deg) translate(0, -${radius}px)`,
                transformOrigin: "center center",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      <div className="h-4 w-4 rounded-full bg-primary/20 ring-4 ring-primary/10" />
    </div>
  );
}

export default CircularText;
