/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IntegrationEcosystemGridProps {
  className?: string;
}

export function IntegrationEcosystemGrid({ className }: IntegrationEcosystemGridProps) {
  const integrations = [
    { name: "GitHub", desc: "Синхронизация коммитов и релизов", connected: true },
    { name: "Figma", desc: "Импорт дизайн-токенов и стилей", connected: true },
    { name: "Slack", desc: "Уведомления об обновлениях в канал", connected: false },
    { name: "Vercel", desc: "Автоматический деплой превью", connected: true },
  ];

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full", className)}>
      {integrations.map((item) => (
        <div key={item.name} className="p-4 rounded-xl border border-border bg-card flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
          <button
            className={cn(
              "h-8 px-3 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors",
              item.connected ? "bg-emerald-500/10 text-emerald-400" : "border border-border bg-muted/40 text-foreground hover:bg-muted"
            )}
          >
            {item.connected ? <><Check className="h-3.5 w-3.5" /> Подключено</> : <><Plus className="h-3.5 w-3.5" /> Добавить</>}
          </button>
        </div>
      ))}
    </div>
  );
}
