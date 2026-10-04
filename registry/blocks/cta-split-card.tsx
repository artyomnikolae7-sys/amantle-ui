/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Split CTA conversion card
 */

import * as React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function CtaSplitCard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Присоединяйтесь к экосистеме</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Готовы ускорить разработку вашего проекта?
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Получите доступ к обновлениям всех 100 компонентов и закрытому каналу контрибьюторов.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
          <input
            type="email"
            placeholder="Ваш рабочий email..."
            className="h-10 px-4 rounded-lg border border-input bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-full sm:w-64"
          />
          <Button className="gap-2 shrink-0">
            <span>Подписаться</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
