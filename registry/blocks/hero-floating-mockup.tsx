/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Centered hero with floating dashboard mockup
 */

import * as React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function HeroFloatingMockup() {
  return (
    <section className="relative overflow-hidden py-20 bg-background text-foreground text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/80 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Новое поколение дизайн-систем</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Интерфейсы, которые <span className="bg-gradient-to-r from-primary via-violet-400 to-rose-400 bg-clip-text text-transparent">вдохновляют</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Готовые архитектурные блоки для создания SaaS, лендингов и дашбордов премиум-уровня в единой гармоничной стилистике.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
            <span>Изучить каталог</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            GitHub
          </Button>
        </div>

        <div className="pt-12">
          <div className="rounded-2xl border border-border bg-card/90 shadow-2xl p-4 max-w-4xl mx-auto backdrop-blur-xl">
            <div className="rounded-xl border border-border/60 bg-background p-8 flex flex-col items-center justify-center min-h-[220px] text-muted-foreground text-xs font-mono">
              <ShieldCheck className="h-8 w-8 text-primary mb-2" />
              <span>AMANTLE UI Workspace Canvas Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
