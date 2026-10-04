/**
 * @source https://tremor.so
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Server, Activity, HardDrive, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardServerMonitoringProps {
  className?: string;
}

export function DashboardServerMonitoring({ className }: DashboardServerMonitoringProps) {
  const metrics = [
    { title: "Загрузка CPU", value: "32%", status: "Норма", icon: Cpu, progress: 32 },
    { title: "Использование RAM", value: "11.4 / 16 GB", status: "71%", icon: HardDrive, progress: 71 },
    { title: "Network Latency", value: "14 ms", status: "Отлично", icon: Activity, progress: 14 },
    { title: "Server Uptime", value: "99.99%", status: "34 дн.", icon: Server, progress: 99 },
  ];

  return (
    <div className={cn("w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 shadow-xl space-y-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground">Мониторинг кластера</h3>
          <p className="text-xs text-muted-foreground">Пул серверов: production-eu-central-1</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none" /> Live
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">{m.title}</span>
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-foreground">{m.value}</span>
                <span className="text-[11px] font-mono text-muted-foreground">{m.status}</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div style={{ width: `${m.progress}%` }} className="h-full bg-primary rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
