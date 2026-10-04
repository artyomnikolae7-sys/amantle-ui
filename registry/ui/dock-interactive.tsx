"use client";
import React, { useState } from "react";
/**
 * @component DockInteractive
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function DockInteractive({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const items = ["🔥", "⚡", "✨", "🎯", "🛡️"];
  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card p-1.5 shadow-lg ${className}`}>
      {items.map((it, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all ${
            active === i ? "bg-primary text-primary-foreground scale-110 shadow-xs" : "hover:bg-muted"
          }`}
        >
          {it}
        </button>
      ))}
    </div>
  );
}
export default DockInteractive;
