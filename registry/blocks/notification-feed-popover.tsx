/**
 * @source https://amantle.dev/registry/blocks/notification-feed-popover
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Bell, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/ui/popover";
import { Button } from "@/registry/ui/button";

export function NotificationFeedPopover() {
  const notifications = [
    {
      id: 1,
      title: "Сборка реестра завершена",
      desc: "50 компонентов скомпилированы в public/r/",
      time: "2 мин назад",
      icon: CheckCircle2,
      color: "text-emerald-500",
    },
    {
      id: 2,
      title: "Новый запрос к MCP серверу",
      desc: "Cursor IDE запросил инструменты реестра",
      time: "15 мин назад",
      icon: Info,
      color: "text-primary",
    },
    {
      id: 3,
      title: "Обновление токенов",
      desc: "Палитра Violet активирована по умолчанию",
      time: "1 час назад",
      icon: AlertCircle,
      color: "text-amber-500",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="relative gap-2">
          <Bell className="h-4 w-4" />
          <span>Уведомления</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            3
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="border-b border-border p-3 font-semibold text-sm flex items-center justify-between">
          <span>Уведомления</span>
          <button type="button" className="text-xs text-primary hover:underline">
            Прочитать все
          </button>
        </div>
        <div className="divide-y divide-border/60 max-h-72 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} className="p-3 hover:bg-muted/50 transition-colors flex gap-3 text-left">
                <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${n.color}`} />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-foreground">{n.title}</p>
                  <p className="text-[11px] text-muted-foreground">{n.desc}</p>
                  <p className="text-[10px] text-muted-foreground/70">{n.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default NotificationFeedPopover;
