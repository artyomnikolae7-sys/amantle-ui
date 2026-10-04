"use client";
import React, { useState } from "react";
/**
 * @component NavAnalyticsSegmentedSwitch
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function NavAnalyticsSegmentedSwitch({ className = "" }: { className?: string }) {
  const options = ["1 Hour","24 Hours","7 Days","30 Days"];
  const [active, setActive] = useState(options[0]);

  return (
    <div className={`inline-flex items-center gap-1 p-1 rounded-xl bg-muted/50 border border-border/60 max-w-fit ${className}`}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-150 active:scale-95 ${
            active === opt
              ? "bg-card text-foreground font-semibold shadow-xs border border-border/40"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
export default NavAnalyticsSegmentedSwitch;
