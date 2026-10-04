"use client";
import React, { useState } from "react";
/**
 * @component CounterSpring
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CounterSpring({ initial = 128, className = "" }: { initial?: number; className?: string }) {
  const [val, setVal] = useState(initial);
  return (
    <div className={`inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-2 shadow-sm ${className}`}>
      <button onClick={() => setVal(v => v - 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-border hover:bg-muted active:scale-90 font-bold">-</button>
      <span className="font-mono text-xl font-black text-foreground min-w-[3rem] text-center">{val}</span>
      <button onClick={() => setVal(v => v + 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-border hover:bg-muted active:scale-90 font-bold">+</button>
    </div>
  );
}
export default CounterSpring;
