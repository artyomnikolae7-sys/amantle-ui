/**
 * @source https://ui.aceternity.com/components/bento-grid
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, Activity, ShieldCheck, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoGridInteractiveProps {
  className?: string;
}

export function BentoGridInteractive({ className }: BentoGridInteractiveProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Performance</span>
          <h3 className="text-xl font-bold text-foreground">Мгновенный отклик интерфейса</h3>
          <p className="text-xs text-muted-foreground">Оптимизированные компоненты без просадок FPS с аппаратным ускорением GPU.</p>
        </div>
        <div className="mt-6 h-24 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex items-center px-4">
          <Activity className="h-8 w-8 text-primary" />
          <span className="ml-3 font-mono font-bold text-lg text-foreground">99.98% Latency &lt; 16ms</span>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-emerald-400 font-bold">Security</span>
          <h3 className="text-lg font-bold text-foreground">Enterprise защита</h3>
          <p className="text-xs text-muted-foreground">Строгая типизация TypeScript и нулевой вектор уязвимостей.</p>
        </div>
        <ShieldCheck className="h-12 w-12 text-emerald-500 self-end mt-4" />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 font-bold">Speed</span>
          <h3 className="text-lg font-bold text-foreground">Быстрый старт</h3>
          <p className="text-xs text-muted-foreground">Копируйте и настраивайте компоненты в пару кликов.</p>
        </div>
        <Zap className="h-12 w-12 text-amber-500 self-end mt-4" />
      </div>

      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Ecosystem</span>
          <h3 className="text-xl font-bold text-foreground">Глобальная сеть компонентов</h3>
          <p className="text-xs text-muted-foreground">Сотни готовых блоков и шаблонов страниц для любых потребностей продукта.</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> 150+ Компонентов</span>
          <span className="font-semibold text-primary">Исследовать каталог →</span>
        </div>
      </div>
    </div>
  );
}
