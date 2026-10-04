/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Searchable FAQ accordion
 */

"use client";

import * as React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function FaqSearchable() {
  const [query, setQuery] = React.useState("");
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const questions = [
    { q: "Как начать использовать AMANTLE UI?", a: "Вы можете скопировать готовый код компонента или воспользоваться командой npx shadcn add для автоматической установки." },
    { q: "Поддерживается ли Tailwind CSS v4?", a: "Да! Все компоненты используют нативные CSS-переменные и директивы Tailwind v4." },
    { q: "Как работает MCP сервер?", a: "Сервер предоставляет AI-инструменты поиска по реестру, извлечения чистого TSX-кода и токенов темы прямо в IDE." },
    { q: "Бесплатна ли библиотека?", a: "Да, весь код распространяется под свободной лицензией MIT с сохранением атрибуции автора." },
  ];

  const filtered = questions.filter(
    (item) => item.q.toLowerCase().includes(query.toLowerCase()) || item.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-extrabold text-foreground">Часто задаваемые вопросы</h3>
        <p className="text-xs text-muted-foreground">Ответы на популярные вопросы о внедрении и лицензии</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по вопросам..."
          className="w-full h-10 rounded-lg border border-input bg-background pl-9 pr-4 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 text-left flex justify-between items-center text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
