/**
 * @source https://magicui.design/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComingSoonWaitlistTemplateProps {
  className?: string;
}

export default function ComingSoonWaitlistTemplate({ className }: ComingSoonWaitlistTemplateProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className={cn("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-10 text-center max-w-4xl mx-auto w-full", className)}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-xl space-y-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Ранний доступ v3.0
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
          Будущее дизайн-систем уже близко
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Запишитесь в список раннего доступа, чтобы первыми получить эксклюзивный доступ к AI Composer и 150+ премиальным компонентам.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5" /> Спасибо! Вы успешно добавлены в лист ожидания (#1,429).
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш рабочий email"
              required
              className="flex-1 h-11 px-4 rounded-xl border border-border bg-muted/30 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 shadow transition-opacity flex items-center justify-center gap-1.5"
            >
              Вступить <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground pt-4 border-t border-border">
          <span>👥 1,428 уже в списке</span>
          <span>•</span>
          <span>⚡ Старт через 14 дней</span>
        </div>
      </div>
    </div>
  );
}
