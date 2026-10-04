/**
 * @source https://ui.shadcn.com/docs
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { BookOpen, Copy, Check, Terminal, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DeveloperDocsTemplateProps {
  className?: string;
}

export default function DeveloperDocsTemplate({ className }: DeveloperDocsTemplateProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex flex-col md:flex-row gap-8 max-w-5xl mx-auto w-full p-8 rounded-2xl border border-border bg-card", className)}>
      {/* Left Nav */}
      <nav className="w-52 space-y-4 shrink-0 hidden md:block border-r border-border pr-6 text-xs">
        <div className="font-bold text-foreground uppercase tracking-wider text-[11px]">Начало работы</div>
        <ul className="space-y-2 text-muted-foreground">
          <li className="font-semibold text-primary">Быстрый старт</li>
          <li className="hover:text-foreground cursor-pointer">Установка</li>
          <li className="hover:text-foreground cursor-pointer">Дизайн-токены</li>
          <li className="hover:text-foreground cursor-pointer">Темизация</li>
        </ul>
        <div className="font-bold text-foreground uppercase tracking-wider text-[11px] pt-2">Компоненты</div>
        <ul className="space-y-2 text-muted-foreground">
          <li className="hover:text-foreground cursor-pointer">Buttons (Кнопки)</li>
          <li className="hover:text-foreground cursor-pointer">Cards (Карточки)</li>
          <li className="hover:text-foreground cursor-pointer">Navigation (Навбар)</li>
        </ul>
      </nav>

      {/* Main Content */}
      <article className="flex-1 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Руководство</span>
          <h1 className="text-3xl font-black text-foreground">Быстрый старт с AMANTLE UI</h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Подключите библиотеку компонентов с чистой архитектурой и полной поддержкой Tailwind v4 за минуту.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-4 font-mono text-xs text-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span>npx amantle-ui@latest add button</span>
          </div>
          <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground">
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground">Использование в коде</h3>
          <p className="text-xs text-muted-foreground">Импортируйте компонент в ваш React/Next.js файл:</p>
          <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground space-y-1">
            <p><span className="text-primary">import</span> &#123; Button &#125; <span className="text-primary">from</span> <span className="text-emerald-400">"@/components/ui/button"</span>;</p>
            <p><span className="text-primary">export default function</span> Page() &#123;</p>
            <p className="pl-4">return &lt;<span className="text-primary">Button</span> variant="primary"&gt;Нажми меня&lt;/<span className="text-primary">Button</span>&gt;;</p>
            <p>&#125;</p>
          </div>
        </div>
      </article>

      {/* Right On this page */}
      <aside className="w-48 shrink-0 hidden lg:block border-l border-border pl-6 space-y-2 text-xs">
        <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">На этой странице</span>
        <ul className="space-y-1.5 text-muted-foreground">
          <li className="text-primary font-medium">Введение</li>
          <li className="hover:text-foreground cursor-pointer">Команда установки</li>
          <li className="hover:text-foreground cursor-pointer">Использование в коде</li>
          <li className="hover:text-foreground cursor-pointer">Пропсы и варианты</li>
        </ul>
      </aside>
    </div>
  );
}
