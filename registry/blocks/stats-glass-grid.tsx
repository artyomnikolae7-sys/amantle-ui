/**
 * @source https://ui.shadcn.com/docs/components/card
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatsGlassGridProps {
  className?: string;
}

export function StatsGlassGrid({ className }: StatsGlassGridProps) {
  const stats = [
    { title: "Активных разработчиков", value: "48.2k", change: "+24.5%", icon: Users },
    { title: "Загрузок компонентов", value: "1.2M", change: "+38.1%", icon: TrendingUp },
    { title: "GitHub Stars", value: "18.5k", change: "+12.0%", icon: ArrowUpRight },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.title} className="rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold">{s.title}</span>
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-foreground">{s.value}</span>
              <span className="text-xs font-bold text-emerald-400">{s.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
