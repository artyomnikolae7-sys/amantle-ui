"use client";
import React, { useState } from "react";
/**
 * @component HoverSlideTabs
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverSlideTabs({ className = "" }: { className?: string }) {
  const [active, setActive] = useState("Design");
  const tabs = ["Design", "Code", "Motion", "Docs"];

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full border border-border/60 bg-muted/50 max-w-fit ${className}`}>
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            active === t ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
export default HoverSlideTabs;
