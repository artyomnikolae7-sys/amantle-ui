"use client";

import React, { useRef, useState, useEffect } from "react";

/**
 * @component TextPressure
 * @source https://reactbits.dev/text-animations/text-pressure
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Kowalski Physics)
 */
export interface TextPressureProps {
  text?: string;
  className?: string;
  textColor?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

export function TextPressure({
  text = "AMANTLE",
  className = "",
  textColor = "text-foreground",
  minFontSize = 24,
  maxFontSize = 72,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseDistances, setMouseDistances] = useState<number[]>([]);

  const chars = text.split("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const charElements = containerRef.current.children;
    const distances: number[] = [];

    for (let i = 0; i < charElements.length; i++) {
      const charRect = (charElements[i] as HTMLElement).getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2 - rect.left;
      const charCenterY = charRect.top + charRect.height / 2 - rect.top;
      const dist = Math.hypot(cursorX - charCenterX, cursorY - charCenterY);
      distances.push(dist);
    }
    setMouseDistances(distances);
  };

  const handleMouseLeave = () => {
    setMouseDistances([]);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex select-none items-center justify-center gap-1 py-4 font-black tracking-tighter ${className}`}
    >
      {chars.map((char, index) => {
        const dist = mouseDistances[index] ?? 200;
        // Inverse proximity weight & scale
        const proximity = Math.max(0, 1 - dist / 150);
        const fontWeight = Math.round(300 + proximity * 600);
        const scale = 1 + proximity * 0.25;

        return (
          <span
            key={index}
            style={{
              fontWeight,
              transform: `scale(${scale})`,
              transition: "transform 180ms cubic-bezier(0.23, 1, 0.32, 1), font-weight 180ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            className={`inline-block transition-transform duration-150 motion-reduce:transition-none ${textColor}`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
}

export default TextPressure;
