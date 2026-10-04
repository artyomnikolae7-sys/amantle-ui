"use client";
import React, { useState } from "react";
/**
 * @component EvervaultCardCipher
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function EvervaultCardCipher({ className = "" }: { className?: string }) {
  const [randomStr, setRandomStr] = useState("01101001 01101110");
  return (
    <div
      onMouseMove={() => setRandomStr(Math.random().toString(36).substring(2, 10))}
      className={`relative flex h-40 w-60 flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-4 shadow-md font-mono select-none ${className}`}
    >
      <span className="text-[10px] text-muted-foreground opacity-50">{randomStr}</span>
      <span className="mt-2 text-sm font-black text-primary">ENCRYPTED_VAULT</span>
    </div>
  );
}
export default EvervaultCardCipher;
