/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Interactive product Changelog timeline feed with version badges, category filters, and release notes
 */

"use client";

import * as React from "react";
import { GitCommit, Sparkles, Bug, Zap, ArrowRight, Calendar, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export interface ChangelogItem {
  version: string;
  date: string;
  type: "major" | "minor" | "patch";
  title: string;
  description: string;
  changes: {
    category: "feature" | "fix" | "perf";
    text: string;
  }[];
}

const defaultChangelog: ChangelogItem[] = [
  {
    version: "v2.5.0",
    date: "4 октября 2026",
    type: "major",
    title: "Пакет глубокой эволюции и интерактивных SVG-графиков",
    description: "Масштабное обновление экосистемы: внедрены тактильные пружинные токены, чистые SVG Bar и Area графики, и интерактивные терминалы.",
    changes: [
      { category: "feature", text: "Добавлены интерактивные графики ChartBarInteractive и ChartAreaGradient с 0 байт лишних зависимостей" },
      { category: "feature", text: "Внедрены токены пружинных кривых --spring-smooth, --spring-snappy и тактильный отклик кнопок :active:scale-[0.97]" },
      { category: "perf", text: "Оптимизация размера бандла и полная поддержка режима prefers-reduced-motion" },
    ],
  },
  {
    version: "v2.4.2",
    date: "28 сентября 2026",
    type: "patch",
    title: "Улучшение доступности и темной темы",
    description: "Исправление контрастности в поповерах и полировка выравнивания в компонентах меню.",
    changes: [
      { category: "fix", text: "Скорректирован z-index всплывающих подсказок в каталоге компонентов" },
      { category: "perf", text: "Улучшена плавность анимаций при переключении глобальной палитры темы" },
    ],
  },
  {
    version: "v2.4.0",
    date: "15 сентября 2026",
    type: "minor",
    title: "150 компонентов золотого фонда и MCP-сервер",
    description: "Достигнут рубеж в 150 компонентов с нативной поддержкой интеграции в AI IDE через Model Context Protocol.",
    changes: [
      { category: "feature", text: "Реализован локальный MCP-сервер с инструментами search_registry и get_component" },
      { category: "feature", text: "Добавлены блоки Bento Grid 3x3, Hero Lamp и ценовые матрицы" },
    ],
  },
];

export interface ChangelogFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ChangelogItem[];
}

export function ChangelogFeed({
  items = defaultChangelog,
  className,
  ...props
}: ChangelogFeedProps) {
  const [filter, setFilter] = React.useState<"all" | "feature" | "fix">("all");

  const getCategoryBadge = (cat: "feature" | "fix" | "perf") => {
    switch (cat) {
      case "feature":
        return (
          <span className="inline-flex items-center gap-1 rounded bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-500">
            <Sparkles className="h-3 w-3" />
            Новинка
          </span>
        );
      case "fix":
        return (
          <span className="inline-flex items-center gap-1 rounded bg-rose-500/10 px-2 py-0.5 text-[11px] font-medium text-rose-500">
            <Bug className="h-3 w-3" />
            Исправление
          </span>
        );
      case "perf":
        return (
          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
            <Zap className="h-3 w-3" />
            Скорость
          </span>
        );
    }
  };

  return (
    <div className={cn("space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm", className)} {...props}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <GitCommit className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold tracking-tight text-foreground">Журнал обновлений (Changelog)</h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">История релизов и улучшений экосистемы AMANTLE UI</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded px-2.5 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              filter === "all" ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Все
          </button>
          <button
            type="button"
            onClick={() => setFilter("feature")}
            className={cn(
              "rounded px-2.5 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              filter === "feature" ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Новинки
          </button>
          <button
            type="button"
            onClick={() => setFilter("fix")}
            className={cn(
              "rounded px-2.5 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              filter === "fix" ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Фиксы
          </button>
        </div>
      </div>

      {/* Timeline Feed */}
      <div className="relative pl-6 space-y-8 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-[2px] before:bg-border">
        {items.map((release) => {
          const filteredChanges = release.changes.filter(
            (c) => filter === "all" || c.category === filter
          );

          if (filter !== "all" && filteredChanges.length === 0) return null;

          return (
            <div key={release.version} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background shadow-xs transition-transform group-hover:scale-125" />

              {/* Release Header */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={release.type === "major" ? "default" : "outline"} className="font-mono text-xs">
                  {release.version}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {release.date}
                </span>
                {release.type === "major" && (
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary text-[10px]">
                    Крупный релиз
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="mt-2 text-base font-bold text-foreground">{release.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{release.description}</p>

              {/* Changes List */}
              <div className="mt-3.5 space-y-2 rounded-lg border border-border/60 bg-muted/20 p-3.5">
                {filteredChanges.map((change, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <div className="pt-0.5">{getCategoryBadge(change.category)}</div>
                    <span className="text-foreground leading-normal">{change.text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
