/**
 * @source https://ui.aceternity.com/components/sticky-scroll-reveal
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyScrollRevealProps {
  className?: string;
}

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const [activeCard, setActiveCard] = React.useState(0);

  const content = [
    { title: "Совместная разработка", desc: "Синхронизируйте код компонентов в реальном времени между разработчиками и дизайнерами." },
    { title: "Интерактивный Playground", desc: "Мгновенно меняйте пропсы, размеры и цветовые темы прямо в браузере." },
    { title: "AI Composer", desc: "Создавайте новые секции и страницы за считанные минуты благодаря генеративным моделям." },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full p-8 rounded-2xl border border-border bg-card", className)}>
      <div className="space-y-6">
        {content.map((item, idx) => (
          <div
            key={item.title}
            onClick={() => setActiveCard(idx)}
            className={cn(
              "p-5 rounded-xl border transition-[color,background-color,border-color,box-shadow,transform] cursor-pointer",
              activeCard === idx ? "border-primary bg-primary/5 shadow-md" : "border-border/60 hover:border-border"
            )}
          >
            <h4 className={cn("text-base font-bold", activeCard === idx ? "text-primary" : "text-foreground")}>
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="h-64 md:h-auto rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-card border border-border flex items-center justify-center p-6 text-center">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Слайд {activeCard + 1} из 3</span>
          <h3 className="text-xl font-black text-foreground">{content[activeCard].title}</h3>
        </div>
      </div>
    </div>
  );
}
