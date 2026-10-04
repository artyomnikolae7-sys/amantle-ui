/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill tabs component
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsPillProps {
  items: Array<{ id: string; label: string }>;
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabsPill({ items, activeId, onChange, className }: TabsPillProps) {
  const [selected, setSelected] = React.useState(activeId || items[0]?.id);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-muted/40 p-1 backdrop-blur-sm", className)}>
      {items.map((item) => {
        const isActive = (activeId ?? selected) === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
