/**
 * @source https://magicui.design/docs/components/marquee
 * @author Magic UI
 * @license MIT
 * @modified Endless marquee reviews strip
 */

import * as React from "react";
import { Star } from "lucide-react";

export default function TestimonialsMarquee() {
  const reviews = [
    { name: "Артем Смирнов", role: "CTO в FinTech", text: "Перенесли все дашборды на AMANTLE UI за 2 дня. Чистый восторг от Tailwind токенов!" },
    { name: "Анна Мельникова", role: "Product Designer", text: "Режим A/B сравнения токенов сэкономил нам недели дизайн-ревью." },
    { name: "Денис Ковалев", role: "Fullstack Dev", text: "Конвейер импорта компонентов работает как швейцарские часы. Рекомендую!" },
    { name: "Мария Соколова", role: "Frontend Lead", text: "Лучшая реализация кнопок и микро-анимаций, что я видела в React." },
  ];

  return (
    <div className="py-12 overflow-hidden bg-background text-foreground space-y-6">
      <h3 className="text-xl font-bold text-center">Что говорят разработчики</h3>
      <div className="flex gap-4 w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="w-72 rounded-xl border border-border bg-card p-4 shadow-2xs space-y-2 shrink-0"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">«{r.text}»</p>
            <div>
              <span className="text-xs font-bold text-foreground block">{r.name}</span>
              <span className="text-[10px] text-muted-foreground block">{r.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
