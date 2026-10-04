/**
 * @source https://magicui.design/docs/components/animated-beam
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, CheckCircle2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiGenerationCardProps {
  className?: string;
  promptTitle?: string;
  isCompleted?: boolean;
}

export function AiGenerationCard({
  className,
  promptTitle = "Генерация компонента PricingSlider.tsx",
  isCompleted = true,
}: AiGenerationCardProps) {
  return (
    <div className={cn("w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 shadow-xl space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles className="h-4 w-4 animate-spin-around motion-reduce:animate-none" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">{promptTitle}</h4>
            <span className="text-[11px] text-muted-foreground">Архитектурный конвейер AMANTLE</span>
          </div>
        </div>
        {isCompleted && (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
            <CheckCircle2 className="h-3.5 w-3.5" /> Готово
          </span>
        )}
      </div>

      <div className="rounded-xl border border-border bg-muted/40 p-4 font-mono text-xs text-foreground space-y-1">
        <p className="text-muted-foreground">// Автоматически сгенерированный код:</p>
        <p><span className="text-primary">export function</span> PricingSlider() &#123;</p>
        <p className="pl-4 text-emerald-400">const [plan, setPlan] = useState("pro");</p>
        <p className="pl-4">return &lt;div className="pricing-grid"&gt;...&lt;/div&gt;;</p>
        <p>&#125;</p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted">
          <Copy className="h-3.5 w-3.5" /> Копировать код
        </button>
      </div>
    </div>
  );
}
