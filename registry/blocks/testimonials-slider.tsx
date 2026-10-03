/**
 * @source https://amantle.dev/registry/blocks/testimonials-slider
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/registry/ui/card";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";

export function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Алексей Смирнов",
      role: "Lead Frontend Engineer, FinTech",
      text: "Переход на AMANTLE UI сократил время разработки дизайн-системы с месяцев до пары дней. Интеграция с Cursor через MCP просто волшебна.",
      initials: "АС",
    },
    {
      name: "Елена Власова",
      role: "Head of Product, SaaS Inc.",
      text: "Наличие проверенной атрибуции Provenance в каждом компоненте избавило наш юридический отдел от головной боли с лицензиями.",
      initials: "ЕВ",
    },
    {
      name: "Дмитрий Ковалев",
      role: "CTO, Digital Agency",
      text: "Чистый Tailwind v4 без огромных конфигов и мгновенный переключатель тем. Это именно то, чего не хватало индустрии.",
      initials: "ДК",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Что говорят инженеры</h2>
          <p className="mt-3 text-muted-foreground">Отзывы команд, строящих цифровые продукты на AMANTLE UI</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col justify-between">
              <CardHeader className="pb-2">
                <div className="flex gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </CardHeader>
              <CardContent className="pt-4 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
