/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, MessageSquare, Plus, Send, Settings, User, Bot, Paperclip, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiWorkspaceTemplateProps {
  className?: string;
}

export default function AiWorkspaceTemplate({ className }: AiWorkspaceTemplateProps) {
  const [messages, setMessages] = React.useState([
    { role: "assistant", text: "Здравствуйте! Я AI-ассистент AMANTLE. Чем могу помочь вам сегодня в разработке интерфейсов?" },
  ]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "assistant", text: "Я обработал ваш запрос: \"" + userMsg + "\". Компоненты адаптированы под дизайн-токены Tailwind v4." },
    ]);
  };

  return (
    <div className={cn("flex h-[600px] w-full max-w-5xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-2xl", className)}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-muted/20 p-4 flex flex-col justify-between hidden sm:flex">
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold text-sm text-foreground">AI Workspace</span>
          </div>

          <button className="flex w-full items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors">
            <Plus className="h-4 w-4" /> Новый диалог
          </button>

          <div className="space-y-1">
            <span className="px-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Недавние</span>
            <div className="flex items-center gap-2 rounded-lg bg-muted px-2.5 py-1.5 text-xs text-foreground font-medium">
              <MessageSquare className="h-3.5 w-3.5 text-primary" /> Генерация дашборда
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-muted/50 cursor-pointer">
              <MessageSquare className="h-3.5 w-3.5" /> Рефакторинг кнопок
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-border px-2">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
            U
          </div>
          <span className="text-xs font-medium text-foreground">user@amantledesign.com</span>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col justify-between p-6 bg-card">
        <div className="space-y-4 overflow-y-auto max-h-[460px] pr-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("flex gap-3 text-sm", m.role === "user" ? "justify-end" : "justify-start")}
            >
              {m.role === "assistant" && (
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-md p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed",
                  m.role === "user" ? "bg-primary text-primary-foreground font-medium" : "border border-border bg-muted/30 text-foreground"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Спросите AI ассистента..."
            className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-foreground outline-none"
          />
          <button
            onClick={handleSend}
            className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
