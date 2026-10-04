/**
 * @source https://ui.aceternity.com/components/canvas-reveal-effect
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Cpu, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroCanvasRevealProps {
  className?: string;
  title?: string;
}

export function HeroCanvasReveal({ className, title = "Интеллект в каждом пикселе" }: HeroCanvasRevealProps) {
  const cards = [
    { icon: Cpu, title: "AI Генерация", desc: "Синтез UI компонентов по текстовому описанию" },
    { icon: Zap, title: "Zero Runtime", desc: "Чистый CSS и TypeScript без избыточных зависимостей" },
    { icon: Shield, title: "100% Provenance", desc: "Проверенная лицензия и чистая архитектура кода" },
  ];

  return (
    <div className={cn("w-full rounded-2xl border border-border bg-card p-8 sm:p-12 space-y-8", className)}>
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-black text-foreground">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Платформа с открытым исходным кодом для разработки продуктов будущего</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="p-6 rounded-xl border border-border bg-muted/20 hover:border-primary/50 transition-colors space-y-3 group">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-sm text-foreground">{c.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
