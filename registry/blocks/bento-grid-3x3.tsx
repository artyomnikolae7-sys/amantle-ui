/**
 * @source https://amantle.dev/registry/blocks/bento-grid-3x3
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Layers, Palette, Cpu, Sparkles, ShieldCheck, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";
import { Badge } from "@/registry/ui/badge";

export function BentoGrid3x3() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Архитектура</Badge>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-foreground">
            Создано для разработчиков новой эры
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Мощная основа для масштабируемых веб-приложений с поддержкой AI и современных стандартов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Large spanning 2 cols */}
          <Card className="md:col-span-2 border-border/80 bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl">Нативная интеграция Model Context Protocol</CardTitle>
              <CardDescription className="text-base">
                AI-ассистенты в Cursor, Windsurf и Claude Desktop могут искать компоненты в каталоге, читать схему токенов и генерировать экраны без выхода из редактора.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-background border border-border p-4 font-mono text-xs text-muted-foreground">
                <span className="text-primary font-bold">mcp tools:</span> search_registry, get_component, list_categories, get_theme_tokens
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-border/80">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Palette className="h-5 w-5" />
              </div>
              <CardTitle>5 цветовых палитр</CardTitle>
              <CardDescription>
                Мгновенное переключение акцентных цветов: Zinc, Slate, Violet, Emerald, Rose на чистых CSS-переменных.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Card 3 */}
          <Card className="border-border/80">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle>Аудит Provenance</CardTitle>
              <CardDescription>
                Каждый файл содержит строгие метаданные авторства, первоисточника и лицензии для комплаенса.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Card 4 - Large spanning 2 cols */}
          <Card className="md:col-span-2 border-border/80 bg-gradient-to-tl from-card to-muted/20">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl">Tailwind CSS v4 & @theme inline</CardTitle>
              <CardDescription className="text-base">
                Никаких раздутых tailwind.config.js. Токены инлайнятся напрямую в CSS с нулевым оверхедом и максимальной производительностью сборки.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">@theme inline</Badge>
                <Badge variant="secondary">CSS Variables</Badge>
                <Badge variant="secondary">OKLCH / HSL</Badge>
                <Badge variant="secondary">Zero Config</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid3x3;
