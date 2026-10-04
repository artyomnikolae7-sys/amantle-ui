"use client";
import React, { useState } from "react";
/**
 * @component StudioThemeSwatchPill
 * @source https://shadcnstudio.dev
 * @author Shadcn Studio Team
 * @license MIT
 */
export function StudioThemeSwatchPill({
  className = "",
}: {
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleAction = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`p-3.5 rounded-xl transition-all ${"border border-border bg-card rounded-full"} ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🎨</span>
          <div>
            <div className="text-xs font-bold text-foreground">Token Palette Editor</div>
            <div className="text-[10px] text-muted-foreground">Rounded Capsule Mode</div>
          </div>
        </div>
        <button
          onClick={handleAction}
          className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[11px] font-semibold hover:bg-secondary/80 active:scale-95 transition-all"
        >
          {copied ? "Done ✓" : "Inspect"}
        </button>
      </div>
    </div>
  );
}
export default StudioThemeSwatchPill;
