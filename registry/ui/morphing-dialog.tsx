"use client";
import React, { useState } from "react";
/**
 * @component MorphingDialog
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MorphingDialog({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`inline-block ${className}`}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-95 transition-all"
        >
          Open Morphing Modal
        </button>
      ) : (
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in zoom-in-95 duration-200 max-w-xs">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xs">Morphing Surface</span>
            <button onClick={() => setOpen(false)} className="text-xs text-muted-foreground hover:text-foreground">✕</button>
          </div>
          <p className="text-xs text-muted-foreground">Smoothly expanded from the trigger element using spring physics.</p>
        </div>
      )}
    </div>
  );
}
export default MorphingDialog;
