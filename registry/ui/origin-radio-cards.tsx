"use client";
import React, { useState } from "react";
/**
 * @component OriginRadioCards
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginRadioCards({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState("pro");

  const plans = [
    { id: "starter", name: "Starter", price: "$0", desc: "For hobby developers" },
    { id: "pro", name: "Pro", price: "$29", desc: "For high-scale apps" },
  ];

  return (
    <div className={`grid grid-cols-2 gap-3 max-w-sm ${className}`}>
      {plans.map((p) => {
        const isSel = selected === p.id;
        return (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`cursor-pointer p-4 rounded-xl border text-left transition-all duration-200 active:scale-95 ${
              isSel ? "border-primary bg-primary/5 shadow-sm" : "border-border/60 hover:border-border"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground">{p.name}</span>
              <span className="text-xs font-bold text-primary font-mono">{p.price}</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default OriginRadioCards;
