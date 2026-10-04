"use client";
import React, { useState } from "react";
/**
 * @component HyperFaqCard
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperFaqCard({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`cursor-pointer p-4 rounded-xl border border-border/70 bg-card transition-all max-w-sm select-none ${className}`}
    >
      <div className="flex justify-between items-center">
        <h5 className="text-xs font-semibold text-foreground">Can I use components without heavy dependencies?</h5>
        <span className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▼</span>
      </div>
      {open && (
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed animate-in fade-in duration-200">
          Yes! All AMANTLE UI components are authored with pure CSS animations and zero heavy 3D canvas libraries.
        </p>
      )}
    </div>
  );
}
export default HyperFaqCard;
