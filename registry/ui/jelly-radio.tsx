/**
 * @source https://reactbits.dev/micro/jelly-radio
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface JellyRadioOption {
  id: string;
  label: string;
  description?: string;
}

export interface JellyRadioProps {
  options?: JellyRadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  className?: string;
}

export function JellyRadio({
  options = [
    { id: "opt1", label: "Стандартный поток", description: "Оптимизировано для экономии ресурсов" },
    { id: "opt2", label: "Турбо-режим 120 FPS", description: "Плавные пружинные интерполяции" },
    { id: "opt3", label: "Нейро-синтез", description: "Максимальное качество и точность" },
  ],
  value,
  defaultValue = "opt2",
  onValueChange,
  className,
}: JellyRadioProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internalValue;
  const [squashId, setSquashId] = React.useState<string | null>(null);

  const handleSelect = (id: string) => {
    if (selected === id) return;
    setSquashId(id);
    if (value === undefined) {
      setInternalValue(id);
    }
    onValueChange?.(id);
    setTimeout(() => setSquashId(null), 300);
  };

  return (
    <div className={cn("space-y-2 select-none", className)}>
      {options.map((opt) => {
        const isSelected = selected === opt.id;
        const isSquashing = squashId === opt.id;

        return (
          <div
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer",
              isSelected
                ? "border-primary/80 bg-primary/5 shadow-xs"
                : "border-border/60 bg-card hover:border-border hover:bg-muted/30"
            )}
          >
            {/* Jelly Outer Ring */}
            <div
              className={cn(
                "relative w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                isSelected
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-muted-foreground/40",
                isSquashing && "animate-jelly-squash"
              )}
              style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // bouncy spring
              }}
            >
              {/* Inner Dot */}
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full bg-primary transition-all duration-200",
                  isSelected ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-foreground">{opt.label}</span>
              {opt.description && (
                <span className="text-[11px] text-muted-foreground mt-0.5">{opt.description}</span>
              )}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes jelly-squash {
          0% {
            transform: scale(1, 1);
          }
          30% {
            transform: scale(1.3, 0.7);
          }
          60% {
            transform: scale(0.85, 1.15);
          }
          100% {
            transform: scale(1, 1);
          }
        }
        .animate-jelly-squash {
          animation: jelly-squash 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}
export default JellyRadio;
