"use client";
import React, { useState } from "react";
/**
 * @component ParticleBanner
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function ParticleBanner({ className = "" }: { className?: string }) {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className={`flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-foreground ${className}`}>
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
        <p className="text-xs font-medium">
          New release <span className="font-semibold text-primary">v0.5.0</span> is now deployed.
        </p>
      </div>
      <button
        onClick={() => setClosed(true)}
        className="text-xs text-muted-foreground hover:text-foreground font-mono transition-colors"
      >
        ✕
      </button>
    </div>
  );
}
export default ParticleBanner;
