/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Bento grid with spotlight mouse tracking
 */

"use client";

import * as React from "react";
import { Zap, Shield, Cpu, Gauge } from "lucide-react";

export default function FeatureBentoSpotlight() {
  const items = [
    {
      icon: Zap,
      title: "Мгновенный рендеринг",
      desc: "Next.js 15 Server Components без клиентского оверхеда.",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      icon: Shield,
      title: "Типобезопасность",
      desc: "100% строгий TypeScript с автогенерацией схем Zod.",
      colSpan: "col-span-1",
    },
    {
      icon: Cpu,
      title: "AI-Native MCP",
      desc: "Прямой доступ к компонентам для агентов Cursor и Claude.",
      colSpan: "col-span-1",
    },
    {
      icon: Gauge,
      title: "Ультралегкий стек",
      desc: "Никаких лишних npm-библиотек, только чистые Tailwind v4 токены.",
      colSpan: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-extrabold text-foreground">Архитектурные преимущества</h3>
        <p className="text-xs text-muted-foreground">Каждая деталь выверена для максимальной производительности</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl border border-border bg-card p-6 shadow-xs transition-[color,background-color,border-color,box-shadow,transform] hover:border-primary/50 hover:shadow-lg ${it.colSpan}`}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1">{it.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
