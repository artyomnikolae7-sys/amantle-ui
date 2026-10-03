/**
 * @source https://amantle.dev/registry/blocks/pricing-cards-tier
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/ui/card";
import { Badge } from "@/registry/ui/badge";

export function PricingCardsTier() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Для пет-проектов и открытых библиотек",
      features: ["50+ базовых примитивов", "Tailwind CSS v4 токены", "Статический реестр CLI", "MIT Лицензия"],
      popular: false,
      cta: "Начать бесплатно",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Для продуктовых команд и студий",
      features: [
        "Все примитивы и блоки",
        "Интеграция с Cursor/Windsurf (MCP)",
        "Визуальный composer интерфейсов",
        "Приоритетные обновления",
        "Поддержка 5 цветовых палитр",
      ],
      popular: true,
      cta: "Подключить Pro",
      variant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Для корпоративных дизайн-систем",
      features: [
        "Dedicated Registry Server",
        "Кастомные дизайн-токены бренда",
        "Provenance-аудит лицензий",
        "SLA и корпоративная поддержка",
      ],
      popular: false,
      cta: "Связаться с нами",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Тарифные планы</Badge>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-foreground">
            Прозрачные условия для любого масштаба
          </h2>
          <p className="mt-4 text-muted-foreground">
            Выбирайте план, подходящий под текущие задачи вашей команды.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col justify-between ${
                plan.popular ? "border-primary shadow-xl scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Рекомендуем</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.variant}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingCardsTier;
