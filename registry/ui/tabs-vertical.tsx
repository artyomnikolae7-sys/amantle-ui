/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Vertical tabs component
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsVerticalProps {
  items: Array<{ id: string; label: string; icon?: React.ReactNode }>;
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabsVertical({ items, activeId, onChange, className }: TabsVerticalProps) {
  const [selected, setSelected] = React.useState(activeId || items[0]?.id);

  return (
    <div className={cn("flex flex-col space-y-1 w-full max-w-[220px]", className)}>
      {items.map((item) => {
        const isActive = (activeId ?? selected) === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelected(item.id);
              onChange?.(item.id);
            }}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors",
              isActive
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
