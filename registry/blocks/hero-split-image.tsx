/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Split hero with interactive preview
 */

import * as React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export default function HeroSplitImage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="gap-1.5 py-1 px-3 text-xs border-primary/30 bg-primary/5 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Версия 2.0 уже доступна</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Создавайте интерфейсы быстрее с <span className="text-primary">AMANTLE UI</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Более 100 компонентов, блоков и шаблонов, оптимизированных для Next.js 15 и Tailwind CSS v4 с поддержкой светлой и тёмной темы.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                <span>Начать бесплатно</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Документация
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Без сторонних рантаймов</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>100% открытый код</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border bg-card/60 p-4 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl border border-border/60 bg-background/80 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">dashboard.tsx</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <div className="h-4 bg-muted/60 rounded w-3/4 animate-pulse motion-reduce:animate-none" />
                <div className="h-4 bg-muted/40 rounded w-1/2" />
                <div className="h-20 bg-muted/20 rounded border border-border/40 p-3 text-[11px]">
                  &lt;ShowcaseViewer item=&#123;component&#125; /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
