"use client";
import React, { useState } from "react";
/**
 * @component AiPromptShelfMatrix
 * @source https://21st.dev
 * @author 21st.dev / Kokonut
 * @license MIT
 */
export function AiPromptShelfMatrix({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`p-3 rounded-xl border border-emerald-500/30 bg-card/90 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">⚡</span>
          <div>
            <div className="text-xs font-bold text-foreground">Quick Directive Shelf</div>
            <div className="text-[10px] text-muted-foreground">One-click prompt prefix suggestions</div>
          </div>
        </div>
        <button
          onClick={() => setActive(!active)}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
            active
              ? "bg-violet-600 text-white shadow-xs"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {active ? "Active ✓" : "Enable"}
        </button>
      </div>
    </div>
  );
}
export default AiPromptShelfMatrix;
