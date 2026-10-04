"use client";

import React, { useState, useEffect } from "react";

/**
 * @component GlitchText
 * @source https://reactbits.dev/text-animations/glitch-text
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface GlitchTextProps {
  text?: string;
  speed?: number;
  className?: string;
}

export function GlitchText({
  text = "SYSTEM_BREACH",
  speed = 1,
  className = "",
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 240);
    }, 2800 / speed);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={`relative inline-block select-none font-mono font-bold tracking-wider ${className}`}>
      <span className="relative z-10 text-foreground">{text}</span>
      {isGlitching && (
        <>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 -translate-x-[2px] translate-y-[1px] text-cyan-500 opacity-80 mix-blend-screen"
            style={{ clipPath: "polygon(0 15%, 100% 15%, 100% 45%, 0 45%)" }}
          >
            {text}
          </span>
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 translate-x-[2px] -translate-y-[1px] text-rose-500 opacity-80 mix-blend-screen"
            style={{ clipPath: "polygon(0 60%, 100% 60%, 100% 85%, 0 85%)" }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}

export default GlitchText;
