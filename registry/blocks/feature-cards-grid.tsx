/**
 * @source https://amantle.dev/registry/blocks/feature-cards-grid
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Terminal, Shield, Zap, Sparkles, Layout, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";

export function FeatureCardsGrid() {
  const features = [
    {
      icon: Terminal,
      title: "Команда shadcn CLI",
      description: "Установка любого компонента одной строкой в терминале без лишних зависимостей.",
    },
    {
      icon: Zap,
      title: "Мгновенная скорость",
      description: "Оптимизировано для React Server Components и Next.js App Router.",
    },
    {
      icon: Shield,
      title: "Code Ownership",
      description: "Полное владение исходным кодом. Изменяйте стили и логику как угодно.",
    },
    {
      icon: Layout,
      title: "50+ Готовых компонентов",
      description: "От базовых кнопок до сложных аналитических дашбордов и лендингов.",
    },
    {
      icon: Sparkles,
      title: "AI Composer",
      description: "Генерируйте экраны с помощью контекстно-заряженных промптов и MCP-инструментов.",
    },
    {
      icon: Globe,
      title: "Открытый исходный код",
      description: "Распространяется по лицензии MIT. Свободно используйте в коммерческих проектах.",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-foreground">
            Ключевые преимущества AMANTLE UI
          </h2>
          <p className="mt-3 text-muted-foreground">
            Всё, что нужно для создания современных интерфейсов мирового уровня
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <Card key={feat.title} className="transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feat.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCardsGrid;
