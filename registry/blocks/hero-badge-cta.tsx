/**
 * @source https://amantle.dev/registry/blocks/hero-badge-cta
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/registry/ui/button";

export function HeroBadgeCta() {
  return (
    <section className="relative py-20 md:py-28 border-b border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <a
          href="#mcp"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors mb-8"
        >
          <Bot className="h-3.5 w-3.5 text-primary" />
          <span>Встроенный MCP-сервер для Cursor и Windsurf</span>
          <ArrowRight className="h-3 w-3" />
        </a>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-foreground">
          Умный композер блоков для AI-агентов и разработчиков
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
          Создавайте и кастомизируйте дизайн-системы с контекстной генерацией кода прямо в вашем AI IDE через стандарт Model Context Protocol.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg">Попробовать в песочнице</Button>
          <Button variant="outline" size="lg">Просмотреть схему MCP</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBadgeCta;
