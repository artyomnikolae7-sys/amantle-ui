/**
 * @source https://ui.aceternity.com/components/lamp
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CtaLampGlowProps {
  className?: string;
  title?: string;
}

export function CtaLampGlow({ className, title = "Готовы поднять качество вашего UI?" }: CtaLampGlowProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14 text-center max-w-4xl mx-auto w-full", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black text-foreground">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Присоединяйтесь к тысячам инженеров, создающих быстрые и красивые веб-приложения на AMANTLE UI.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="ваш.email@domain.com"
            className="flex-1 h-11 px-4 rounded-xl border border-border bg-muted/40 text-sm text-foreground outline-none focus:border-primary"
          />
          <button className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer">
            Начать
          </button>
        </div>
      </div>
    </div>
  );
}
