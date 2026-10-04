/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Pricing table with monthly/annual discount switch
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export default function PricingToggleAnnual() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const tiers = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Для пет-проектов и независимых разработчиков",
      features: ["До 5 проектов", "Базовые компоненты", "Сообщество в Discord"],
      highlight: false,
    },
    {
      name: "Pro",
      priceMonthly: 29,
      priceAnnual: 23,
      description: "Для растущих SaaS и профессиональных команд",
      features: ["Все 100 компонентов", "Визуальный Composer", "MCP AI интеграция", "Приоритетная поддержка"],
      highlight: true,
    },
    {
      name: "Enterprise",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Для корпоративных дизайн-систем и масштабирования",
      features: ["Кастомные токены", "Приватный registry", "SLA 99.9%", "Аудит доступности"],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-6xl text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Прозрачные тарифы под ваши задачи</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Экономьте 20% при оформлении годовой подписки на Pro и Enterprise.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Оплата помесячно
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-muted border border-border p-0.5 transition-colors relative"
          >
            <div
              className={`w-5 h-5 rounded-full bg-primary transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-xs font-semibold ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Оплата за год
          </span>
          <Badge variant="outline" className="text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
            Скидка 20%
          </Badge>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
          {tiers.map((t) => {
            const price = isAnnual ? t.priceAnnual : t.priceMonthly;
            return (
              <div
                key={t.name}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-[color,background-color,border-color,box-shadow,transform] ${
                  t.highlight
                    ? "border-primary bg-card shadow-xl ring-2 ring-primary/20 scale-105"
                    : "border-border bg-card/60 shadow-xs"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                    {t.highlight && <Badge className="text-[10px]">Популярный</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-foreground">${price}</span>
                    <span className="text-xs text-muted-foreground">/ мес</span>
                  </div>
                  <ul className="space-y-2 pt-2 text-xs text-muted-foreground">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Button className="w-full" variant={t.highlight ? "default" : "outline"}>
                    Выбрать {t.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
