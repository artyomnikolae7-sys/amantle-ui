/**
 * @source https://ui.aceternity.com/components/lamp
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroLampProps {
  className?: string;
  badge?: string;
  title?: string;
  description?: string;
}

export function HeroLamp({
  className,
  badge = "Новое поколение веб-интерфейсов",
  title = "Создавайте эстетику света с AMANTLE UI",
  description = "Готовые компоненты, кинетическая типографика и интеллектуальный composer для ваших SaaS продуктов.",
}: HeroLampProps) {
  return (
    <div className={cn("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-card border border-border px-6 py-20 text-center", className)}>
      {/* Lamp cone */}
      <div className="absolute top-0 z-0 h-48 w-[40rem] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-0 z-0 h-32 w-80 -translate-y-1/2 rounded-full bg-primary/40 blur-2xl" />

      <div className="relative z-10 max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" /> {badge}
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text">
          {title}
        </h1>

        <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-lg shadow-primary/25 transition-[color,background-color,border-color,box-shadow,transform]">
            Начать работу <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-6 py-3 rounded-xl border border-border bg-card/60 text-foreground font-semibold text-sm hover:bg-muted transition-colors">
            Документация
          </button>
        </div>
      </div>
    </div>
  );
}
