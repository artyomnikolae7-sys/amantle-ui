"use client";
import React, { useState } from "react";
/**
 * @component OriginPasswordMeter
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginPasswordMeter({ className = "" }: { className?: string }) {
  const [pass, setPass] = useState("");
  const score = Math.min(4, Math.floor(pass.length / 3));

  const colors = ["bg-muted", "bg-rose-500", "bg-amber-500", "bg-blue-500", "bg-emerald-500"];

  return (
    <div className={`space-y-2 w-full max-w-xs ${className}`}>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter strong password..."
        className="w-full px-3 py-2 rounded-xl text-xs border border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <div className="flex gap-1.5 h-1">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`flex-1 rounded-full transition-colors duration-300 ${
              score >= step ? colors[score] : "bg-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground font-mono">
        {score === 4 ? "Excellent security" : score >= 2 ? "Moderate" : "Weak"}
      </p>
    </div>
  );
}
export default OriginPasswordMeter;
