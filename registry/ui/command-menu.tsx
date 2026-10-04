/**
 * @source https://ui.shadcn.com/docs/components/command
 * @author shadcn / pacocoursey
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Search, Command, ArrowRight, User, Settings, CreditCard, Sparkles, Calculator, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandMenuProps {
  className?: string;
  placeholder?: string;
  isOpen?: boolean;
  onSelect?: (item: string) => void;
}

export function CommandMenu({
  className,
  placeholder = "Введите команду или поиск...",
  isOpen = true,
  onSelect,
}: CommandMenuProps) {
  const [query, setQuery] = React.useState("");

  const groups = [
    {
      heading: "Предложения",
      items: [
        { id: "calendar", label: "Календарь встреч", icon: Calendar, shortcut: "⌘C" },
        { id: "calc", label: "Калькулятор тарифов", icon: Calculator, shortcut: "⌘T" },
        { id: "ai", label: "AI Ассистент", icon: Sparkles, shortcut: "⌘A" },
      ],
    },
    {
      heading: "Настройки",
      items: [
        { id: "profile", label: "Профиль пользователя", icon: User, shortcut: "⌘P" },
        { id: "billing", label: "Биллинг и подписка", icon: CreditCard, shortcut: "⌘B" },
        { id: "settings", label: "Общие параметры", icon: Settings, shortcut: "⌘S" },
      ],
    },
  ];

  const filteredGroups = groups.map((g) => ({
    ...g,
    items: g.items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
  })).filter((g) => g.items.length > 0);

  return (
    <div className={cn("w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden", className)}>
      <div className="flex items-center px-4 border-b border-border bg-muted/20">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground mr-2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
          <Command className="h-3 w-3" /> K
        </kbd>
      </div>

      <div className="max-h-[300px] overflow-y-auto p-2 space-y-3">
        {filteredGroups.length === 0 ? (
          <p className="p-4 text-center text-sm text-muted-foreground">Ничего не найдено.</p>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.heading} className="space-y-1">
              <span className="px-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {group.heading}
              </span>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect?.(item.id)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>{item.label}</span>
                    </div>
                    <kbd className="font-mono text-[10px] text-muted-foreground">{item.shortcut}</kbd>
                  </button>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
