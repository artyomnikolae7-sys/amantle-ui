/**
 * @source https://amantle.dev/registry/blocks/hero-gradient-glow
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Sparkles, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export function HeroGradientGlow() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <Badge variant="secondary" className="gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-secondary/80 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Next.js 15 + Tailwind CSS v4</span>
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Дизайн-система, где{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">
            код принадлежит вам
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Копируйте исходный код напрямую в проект. Никаких закрытых npm-библиотек. Полный контроль над стилями, разметкой и доступностью.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-6 gap-2 text-base shadow-xl shadow-primary/20">
            Исследовать каталог <ArrowRight className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-4 py-2.5 font-mono text-xs text-foreground">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <span>npx shadcn add @amantle/button</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGradientGlow;
