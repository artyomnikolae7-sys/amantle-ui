"use client";

import React, { useRef, useState } from "react";

/**
 * @component VariableProximity
 * @source https://reactbits.dev/text-animations/variable-proximity
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface VariableProximityProps {
  label?: string;
  className?: string;
  radius?: number;
}

export function VariableProximity({
  label = "Hover anywhere near this text to expand its presence",
  className = "",
  radius = 120,
}: VariableProximityProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = label.split(" ");
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setCursor(null);

  return (
    <p
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-base leading-relaxed text-muted-foreground select-none ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-200 motion-reduce:transition-none hover:text-foreground"
          style={{
            transform: cursor ? "scale(1.04)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default VariableProximity;
