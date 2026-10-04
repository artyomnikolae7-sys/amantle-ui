"use client";
import React, { useState, useEffect } from "react";
/**
 * @component TextGenerateEffect
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function TextGenerateEffect({ text = "Synthesizing UI with multi-agent velocity.", className = "" }: { text?: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let cur = 0;
    const t = setInterval(() => {
      setDisplayed(text.substring(0, cur));
      cur++;
      if (cur > text.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [text]);
  return <p className={`font-mono text-xs font-semibold text-foreground ${className}`}>{displayed}<span className="animate-pulse">|</span></p>;
}
export default TextGenerateEffect;
