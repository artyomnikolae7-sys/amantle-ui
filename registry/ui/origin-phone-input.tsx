"use client";
import React, { useState } from "react";
/**
 * @component OriginPhoneInput
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginPhoneInput({ className = "" }: { className?: string }) {
  const [phone, setPhone] = useState("");

  return (
    <div className={`flex items-center rounded-xl border border-border/70 bg-background overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary max-w-xs ${className}`}>
      <span className="px-3 py-2 text-xs font-mono bg-muted/60 text-muted-foreground border-r border-border/60 select-none">
        +1 (US)
      </span>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(555) 000-0000"
        className="w-full px-3 py-2 text-xs bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </div>
  );
}
export default OriginPhoneInput;
