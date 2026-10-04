/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardKanbanBoardProps {
  className?: string;
}

export function DashboardKanbanBoard({ className }: DashboardKanbanBoardProps) {
  const columns = [
    { title: "К выполнению", count: 3, cards: ["Обновить Tailwind до v4", "Добавить A/B сравнение"] },
    { title: "В работе", count: 2, cards: ["Онбординг 50 новых компонентов", "Синхронизация карты Playground"] },
    { title: "Готово", count: 4, cards: ["Сборка 100 компонентов", "Проверка роутов превью"] },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      {columns.map((col) => (
        <div key={col.title} className="rounded-2xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-foreground">{col.title}</h4>
              <span className="h-5 w-5 rounded-full bg-muted flex items-center justify-center font-mono text-[10px] text-muted-foreground">
                {col.count}
              </span>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            {col.cards.map((card, i) => (
              <div key={i} className="p-3 rounded-xl border border-border bg-muted/40 hover:border-primary/50 text-xs font-medium text-foreground transition-colors cursor-pointer shadow-sm">
                {card}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
