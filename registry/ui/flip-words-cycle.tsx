"use client";
import React, { useState, useEffect } from "react";
/**
 * @component FlipWordsCycle
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function FlipWordsCycle({ words = ["dynamic", "kinetic", "autonomous", "modern"], className = "" }: { words?: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className={`font-black text-primary underline underline-offset-4 transition-all duration-300 ${className}`}>
      {words[idx]}
    </span>
  );
}
export default FlipWordsCycle;
