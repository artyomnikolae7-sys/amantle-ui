"use client";
import React, { useState } from "react";
/**
 * @component OriginCheckboxTree
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginCheckboxTree({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState<string[]>(["ui", "blocks"]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const items = [
    { id: "ui", label: "UI Primitives (140)" },
    { id: "blocks", label: "Page Blocks (119)" },
    { id: "templates", label: "Full Templates (45)" },
  ];

  return (
    <div className={`space-y-2 p-3 rounded-xl border border-border/60 bg-card/60 max-w-xs ${className}`}>
      <p className="text-xs font-semibold text-foreground">Registry Categories</p>
      {items.map((item) => (
        <label key={item.id} className="flex items-center gap-2 cursor-pointer text-xs select-none">
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => toggle(item.id)}
            className="accent-primary h-4 w-4 rounded border-border"
          />
          <span className={selected.includes(item.id) ? "text-foreground font-medium" : "text-muted-foreground"}>
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
}
export default OriginCheckboxTree;
