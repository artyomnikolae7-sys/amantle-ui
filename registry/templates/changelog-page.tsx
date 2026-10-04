/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Clean changelog product release template
 */

import * as React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v2.2.0",
      date: "4 октября 2026",
      title: "100 Компонентов и Быстрый Конвейер Онбординга",
      highlight: true,
      changes: [
        "Добавлено 38 новых компонентов: интерактивные карточки, формы, блоки дашбордов и шаблоны.",
        "Режим A/B Сравнения в витрине ShowcaseViewer с аудитом токенов Tailwind v4.",
        "Автоматизированный CLI конвейер (npm run pipeline) с ускорением интеграции до 3 минут.",
      ],
    },
    {
      version: "v2.1.0",
      date: "28 сентября 2026",
      title: "Семейство Кнопок и Микро-Анимации",
      highlight: false,
      changes: [
        "Пять новых интерактивных кнопок: Magnetic, Ripple, Shimmer, Expandable Icon, Tilt 3D.",
        "Группы кнопок ButtonGroup, SplitButton и SegmentedControl.",
        "Интерактивный таб Playground с живыми контролами пропсов.",
      ],
    },
    {
      version: "v2.0.0",
      date: "15 сентября 2026",
      title: "Первый публичный релиз AMANTLE UI",
      highlight: false,
      changes: [
        "50 базовых UI-примитивов, полностью типизированных под Next.js 15 App Router.",
        "Собственный MCP сервер для интеграции с Cursor и Claude Code.",
        "Поддержка светлой и тёмной тем через семантические CSS-переменные.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="text-xs text-primary border-primary/30 bg-primary/10">
            История версий
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Журнал обновлений (Changelog)</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Следите за всеми улучшениями, новыми компонентами и исправлениями экосистемы AMANTLE UI.
          </p>
        </div>

        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {releases.map((rel, i) => (
            <div key={i} className="relative group space-y-3">
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1 h-7 w-7 rounded-full border-2 border-background flex items-center justify-center ${
                  rel.highlight
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {rel.highlight ? <Sparkles className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={rel.highlight ? "default" : "secondary"} className="font-mono text-xs">
                  {rel.version}
                </Badge>
                <span className="text-xs text-muted-foreground">{rel.date}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground">{rel.title}</h2>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs space-y-2">
                <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                  {rel.changes.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
