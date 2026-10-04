"use client";
import React, { useState } from "react";
/**
 * @component HyperBannerAlert
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperBannerAlert({ className = "" }: { className?: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs shadow-sm max-w-md ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">✨</span>
        <span className="text-foreground">Over 360+ components available in Registry v0.5.0!</span>
      </div>
      <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground font-mono">
        ✕
      </button>
    </div>
  );
}
export default HyperBannerAlert;
