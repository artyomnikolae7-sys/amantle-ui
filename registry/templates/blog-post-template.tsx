/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Blog post and documentation article template
 */

import * as React from "react";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export default function BlogPostTemplate() {
  return (
    <article className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="container mx-auto max-w-3xl space-y-8">
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Назад ко всем статьям</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
            <Share2 className="h-3.5 w-3.5" />
            <span>Поделиться</span>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs text-primary border-primary/30">
              Архитектура UI
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Tailwind CSS v4
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Как мы построили экосистему из 100 компонентов без лишних npm-зависимостей
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border/40 py-3">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span className="font-semibold text-foreground">Команда AMANTLE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>4 октября 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>5 мин чтения</span>
            </div>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-4">
          <p>
            В современном фронтенде одной из главных проблем остаётся раздувание бандла из-за сотен мелких npm-пакетов. В AMANTLE UI мы выбрали другой путь — философию Code Ownership: код компонентов принадлежит вам.
          </p>

          <h2 className="text-lg font-bold text-foreground pt-4">1. Сила CSS-переменных и токенов</h2>
          <p>
            Вместо того чтобы жестко прописывать hex-значения или классы вроде <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-zinc-900</code>, каждый компонент в нашей системе привязан к семантическим переменным темы.
          </p>

          <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground bg-background/80">
            <code>export const component = &quot;bg-primary text-primary-foreground&quot;;</code>
          </div>

          <h2 className="text-lg font-bold text-foreground pt-4">2. AI-Native поддержка через MCP</h2>
          <p>
            Любой компонент можно не только просмотреть в браузере, но и скопировать подготовленный системный промпт для Cursor или Claude Code, исключающий галлюцинации по стилям.
          </p>
        </div>
      </div>
    </article>
  );
}
