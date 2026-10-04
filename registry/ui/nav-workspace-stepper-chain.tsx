"use client";
import React, { useState } from "react";
/**
 * @component NavWorkspaceStepperChain
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function NavWorkspaceStepperChain({ className = "" }: { className?: string }) {
  const options = ["Overview","Members","Settings"];
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
export default NavWorkspaceStepperChain;
