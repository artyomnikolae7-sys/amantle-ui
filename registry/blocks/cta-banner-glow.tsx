/**
 * @source https://amantle.dev/registry/blocks/cta-banner-glow
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/registry/ui/button";

export function CtaBannerGlow() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/10 via-background to-background p-8 md:p-16 text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/25 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Готовы трансформировать ваш UI?</span>
            </div>
            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight text-foreground">
              Начните разработку на AMANTLE UI прямо сегодня
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Копируйте компоненты одной командой CLI или подключайте MCP-сервер для мгновенного контекста в вашем любимом редакторе кода.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                Открыть документацию <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Клонировать GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBannerGlow;
