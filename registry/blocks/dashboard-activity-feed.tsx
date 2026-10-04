/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Recent activity feed for dashboard
 */

import * as React from "react";
import { GitCommit, UserPlus, CheckCircle2 } from "lucide-react";

export default function DashboardActivityFeed() {
  const events = [
    { icon: GitCommit, title: "Опубликован новый релиз v2.1.0", time: "10 минут назад", user: "Артем С." },
    { icon: UserPlus, title: "Новый участник добавлен в команду", time: "1 час назад", user: "Елена В." },
    { icon: CheckCircle2, title: "Пройден аудит безопасности реестра", time: "3 часа назад", user: "CI Bot" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-foreground">Лента активности</h3>
      <div className="space-y-3">
        {events.map((ev, i) => {
          const Icon = ev.icon;
          return (
            <div key={i} className="flex items-start gap-3 text-xs">
              <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <span className="font-semibold text-foreground block">{ev.title}</span>
                <span className="text-[11px] text-muted-foreground block">{ev.user} • {ev.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
