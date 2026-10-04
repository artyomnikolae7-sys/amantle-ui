"use client";
import React, { useState } from "react";
/**
 * @component FluidTabs
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function FluidTabs({ className = "" }: { className?: string }) {
  const tabs = ["Overview", "Integrations", "Activity", "Settings"];
  const [active, setActive] = useState("Overview");

  return (
    <div className={`flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/50 max-w-fit ${className}`}>
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 active:scale-95 ${
              isActive ? "bg-background text-foreground shadow-sm font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
export default FluidTabs;
