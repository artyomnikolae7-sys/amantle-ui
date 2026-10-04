"use client";
import React, { useState } from "react";
/**
 * @component InteractiveAvatar
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function InteractiveAvatar({
  name = "Elena Rostova",
  role = "Staff Engineer",
  className = "",
}: {
  name?: string;
  role?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`flex items-center gap-3 p-3 rounded-2xl border border-border/60 bg-card/80 transition-all duration-200 hover:shadow-md ${className}`}
    >
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center text-primary-foreground font-bold text-xs ring-2 ring-background">
          ER
        </div>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-semibold text-foreground">{name}</p>
          {active && <span className="text-[10px] text-primary font-mono">PRO</span>}
        </div>
        <p className="text-[11px] text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
export default InteractiveAvatar;
