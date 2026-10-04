/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Quick actions panel for dashboard
 */

import * as React from "react";
import { Plus, Download, Share2, Settings } from "lucide-react";

export default function DashboardQuickActions() {
  const actions = [
    { icon: Plus, label: "Новый проект", desc: "Создать проект" },
    { icon: Download, label: "Экспорт", desc: "Выгрузить JSON" },
    { icon: Share2, label: "Поделиться", desc: "Доступ по ссылке" },
    { icon: Settings, label: "Настройки", desc: "Параметры API" },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-foreground">Быстрые действия</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((act, i) => {
          const Icon = act.icon;
          return (
            <button
              key={i}
              type="button"
              className="p-3 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted hover:border-primary/40 transition-[color,background-color,border-color,box-shadow,transform] text-center flex flex-col items-center justify-center gap-2 group"
            >
              <div className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">{act.label}</span>
                <span className="text-[10px] text-muted-foreground block">{act.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
