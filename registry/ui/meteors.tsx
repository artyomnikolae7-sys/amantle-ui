/**
 * @source https://ui.aceternity.com/components/meteors
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MeteorsProps {
  className?: string;
  number?: number;
}

export function Meteors({ className, number = 16 }: MeteorsProps) {
  const meteors = new Array(number).fill(true);

  return (
    <div className={cn("relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl", className)}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteors.map((_, el) => (
          <span
            key={"meteor" + el}
            style={{
              top: Math.floor(Math.random() * 80) + "%",
              left: Math.floor(Math.random() * 90) + "%",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (8 - 2) + 2) + "s",
            }}
            className={cn(
              "animate-[meteor_5s_linear_infinite] absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
            )}
          />
        ))}
      </div>

      <div className="relative z-10 space-y-2">
        <span className="text-xs font-mono text-primary font-bold">Space Tech</span>
        <h3 className="text-lg font-bold text-foreground">Метеорный поток</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Фоновая анимация метеоров создаёт эффект космической глубины для карточек фичей и анонсов.
        </p>
      </div>
    </div>
  );
}
