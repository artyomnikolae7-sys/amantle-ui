/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OnboardingWizardTemplateProps {
  className?: string;
}

export default function OnboardingWizardTemplate({ className }: OnboardingWizardTemplateProps) {
  const [step, setStep] = React.useState(1);
  const steps = ["Профиль", "Проект", "Команда", "Готово"];

  return (
    <div className={cn("max-w-xl mx-auto w-full p-8 rounded-2xl border border-border bg-card shadow-2xl space-y-8", className)}>
      {/* Progress Bar */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
        {steps.map((s, idx) => {
          const num = idx + 1;
          const isDone = num < step;
          const isCurrent = num === step;
          return (
            <div key={s} className="relative z-10 flex flex-col items-center gap-1 bg-card px-2">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors",
                  isDone ? "bg-emerald-500 text-white" : isCurrent ? "bg-primary text-primary-foreground shadow" : "border border-border bg-muted text-muted-foreground"
                )}
              >
                {isDone ? <Check className="h-4 w-4" /> : num}
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">{s}</span>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="space-y-4 py-4 min-h-[160px]">
        {step === 1 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 1: Ваше имя и роль</h3>
            <input placeholder="Иван Петров" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <input placeholder="Frontend Разработчик" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 2: Название проекта</h3>
            <input placeholder="Amantle SaaS Platform" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <input placeholder="app.amantledesign.com" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 3: Пригласить коллег</h3>
            <input placeholder="colleague@domain.com" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <p className="text-xs text-muted-foreground">Вы можете пропустить этот шаг и пригласить команду позже.</p>
          </div>
        )}
        {step === 4 && (
          <div className="text-center space-y-3 py-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Всё готово к запуску!</h3>
            <p className="text-xs text-muted-foreground">Ваш рабочий проект создан и готов к добавлению компонентов.</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-muted/30 text-xs font-semibold text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Назад
        </button>

        <button
          onClick={() => setStep((s) => Math.min(4, s + 1))}
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
        >
          {step === 4 ? "Перейти в панель" : <>Далее <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
    </div>
  );
}
