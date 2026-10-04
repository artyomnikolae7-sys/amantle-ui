/**
 * @source https://ui.shadcn.com/docs/components/textarea
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowUp, Sparkles, Paperclip, Mic, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiChatPromptProps {
  className?: string;
  placeholder?: string;
  modelName?: string;
}

export function AiChatPrompt({
  className,
  placeholder = "Спросите что-нибудь у AMANTLE AI...",
  modelName = "Gemini 2.5 Pro",
}: AiChatPromptProps) {
  const [val, setVal] = React.useState("");
  const chips = ["Сгенерируй Hero блок", "Добавь A/B тест", "Оптимизируй CSS переменные"];

  return (
    <div className={cn("w-full max-w-2xl mx-auto rounded-2xl border border-border bg-card p-4 shadow-2xl space-y-3", className)}>
      <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-2">
        <div className="flex items-center gap-1.5 font-medium text-foreground">
          <Bot className="h-4 w-4 text-primary" />
          <span>{modelName}</span>
        </div>
        <span className="text-[11px] font-mono">Контекст: 128k</span>
      </div>

      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className="w-full resize-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Paperclip className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Mic className="h-4 w-4" />
          </button>
        </div>

        <button
          disabled={!val.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 shadow transition-opacity"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setVal(c)}
            className="flex items-center gap-1 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-primary" /> {c}
          </button>
        ))}
      </div>
    </div>
  );
}
