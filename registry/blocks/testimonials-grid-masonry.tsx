/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Masonry grid testimonials
 */

import * as React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsGridMasonry() {
  const cards = [
    { name: "Сергей Лазарев", role: "SaaS Founder", text: "Наш конверт на лендинге вырос на 24% после интеграции Magnetic и Shimmer кнопок." },
    { name: "Ольга Волкова", role: "Design System Lead", text: "Единый источник истины для дизайнеров и разработчиков. Поддержка Dark Mode идеальная." },
    { name: "Илья Романов", role: "AI Engineer", text: "MCP сервер позволяет Cursor мгновенно находить нужные блоки и вставлять без ошибок." },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h3 className="text-2xl font-extrabold text-foreground text-center">Истории успеха</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between space-y-4">
            <Quote className="h-6 w-6 text-primary/40" />
            <p className="text-xs text-muted-foreground leading-relaxed">«{c.text}»</p>
            <div className="border-t border-border/40 pt-3">
              <span className="text-xs font-bold text-foreground block">{c.name}</span>
              <span className="text-[11px] text-muted-foreground block">{c.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
