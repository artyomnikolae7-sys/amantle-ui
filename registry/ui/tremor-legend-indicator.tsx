"use client";
import React, { useState } from "react";
/**
 * @component TremorLegendIndicator
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorLegendIndicator({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string[]>(["ui", "blocks"]);

  const items = [
    { id: "ui", label: "UI Primitives", color: "bg-primary" },
    { id: "blocks", label: "Page Blocks", color: "bg-cyan-400" },
    { id: "templates", label: "Templates", color: "bg-amber-400" },
  ];

  const toggle = (id: string) => {
    setActive((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => {
        const isSelected = active.includes(item.id);
        return (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-center gap-1.5 text-xs transition-opacity ${
              isSelected ? "opacity-100 font-medium text-foreground" : "opacity-40 text-muted-foreground"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${item.color}`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default TremorLegendIndicator;
