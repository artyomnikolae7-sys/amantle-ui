/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTierMatrixProps {
  className?: string;
  isAnnual?: boolean;
}

export function PricingTierMatrix({ className, isAnnual = true }: PricingTierMatrixProps) {
  const plans = [
    { name: "Starter", price: isAnnual ? "15" : "19", desc: "Для пет-проектов и стартапов", features: ["До 5 проектов", "50+ UI компонентов", "Базовая поддержка"] },
    { name: "Pro", price: isAnnual ? "39" : "49", popular: true, desc: "Для профессиональных команд", features: ["Неограниченно проектов", "150+ компонентов и блоков", "AI Composer доступ", "Приоритетная поддержка"] },
    { name: "Enterprise", price: isAnnual ? "99" : "119", desc: "Для крупных корпораций", features: ["Custom реестр компонентов", "Dedicated SLA 99.9%", "Кастомные темы оформления", "Онбординг команды"] },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full", className)}>
      {plans.map((p) => (
        <div
          key={p.name}
          className={cn(
            "rounded-2xl border p-6 flex flex-col justify-between transition-[color,background-color,border-color,box-shadow,transform]",
            p.popular ? "border-primary bg-card shadow-2xl relative scale-105" : "border-border bg-card/60"
          )}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-widest">
              Популярный
            </span>
          )}

          <div>
            <h4 className="text-lg font-bold text-foreground">{p.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
            <div className="my-5 flex items-baseline gap-1">
              <span className="text-4xl font-black text-foreground">${p.price}</span>
              <span className="text-xs text-muted-foreground">/ месяц</span>
            </div>

            <ul className="space-y-2.5 text-xs text-foreground pt-4 border-t border-border">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className={cn(
              "mt-6 w-full py-2.5 rounded-xl font-bold text-xs transition-opacity cursor-pointer",
              p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border bg-card hover:bg-muted text-foreground"
            )}
          >
            Выбрать {p.name}
          </button>
        </div>
      ))}
    </div>
  );
}
