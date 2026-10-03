/**
 * @source https://amantle.dev/registry/blocks/hero-simple
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/registry/ui/button";

export function HeroSimple() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
          Создавайте веб-интерфейсы с непревзойденной скоростью
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          AMANTLE UI — открытая экосистема компонентов, шаблонов и дизайн-токенов с нативной поддержкой Tailwind CSS v4 и AI/MCP-интеграцией.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            Начать работу <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Документация
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSimple;
