/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { TrendingUp, Users, DollarSign, Activity, Calendar, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnalyticsDashboardTemplateProps {
  className?: string;
}

export default function AnalyticsDashboardTemplate({ className }: AnalyticsDashboardTemplateProps) {
  const cards = [
    { title: "Общий доход", val: "$45,231.89", change: "+20.1%", icon: DollarSign },
    { title: "Новые подписки", val: "+2,350", change: "+180.1%", icon: Users },
    { title: "Продажи", val: "+12,234", change: "+19.2%", icon: TrendingUp },
    { title: "Активность сессий", val: "573", change: "+201 за час", icon: Activity },
  ];

  return (
    <div className={cn("max-w-5xl mx-auto w-full p-8 rounded-2xl border border-border bg-card space-y-6 shadow-xl", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-foreground">Аналитика платформы</h2>
          <p className="text-xs text-muted-foreground mt-1">Данные за последние 30 дней</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs font-semibold text-foreground hover:bg-muted">
            <Calendar className="h-3.5 w-3.5" /> Октябрь 2026
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90">
            <Download className="h-3.5 w-3.5" /> Экспорт
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="p-5 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">{c.title}</span>
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-black text-foreground">{c.val}</div>
              <span className="text-[11px] font-bold text-emerald-400">{c.change} к прошлому месяцу</span>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-xl border border-border bg-muted/10 space-y-4">
        <h4 className="text-sm font-bold text-foreground">Динамика выручки по дням</h4>
        <div className="h-40 flex items-end justify-between gap-2 pt-6">
          {[40, 65, 55, 80, 70, 95, 85, 110, 90, 120, 105, 130].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: `${(h / 140) * 100}%` }} className="w-full bg-primary/80 hover:bg-primary rounded-t transition-colors" />
              <span className="text-[9px] font-mono text-muted-foreground">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
