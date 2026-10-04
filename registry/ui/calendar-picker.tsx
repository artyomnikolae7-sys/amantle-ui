/**
 * @source https://ui.shadcn.com/docs/components/calendar
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CalendarPickerProps {
  className?: string;
  selectedDay?: number;
}

export function CalendarPicker({ className, selectedDay = 15 }: CalendarPickerProps) {
  const [selected, setSelected] = React.useState(selectedDay);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className={cn("w-72 rounded-xl border border-border bg-card p-4 shadow-xl", className)}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-foreground">Октябрь 2026</h4>
        <div className="flex gap-1">
          <button className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground mb-2">
        {weekDays.map((d) => (
          <div key={d} className="h-6 flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((d) => {
          const isSelected = d === selected;
          return (
            <button
              key={d}
              onClick={() => setSelected(d)}
              className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center font-medium transition-colors cursor-pointer",
                isSelected ? "bg-primary text-primary-foreground font-bold shadow" : "text-foreground hover:bg-muted"
              )}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
