/**
 * @source https://magicui.design/docs/components/marquee
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialsInfiniteSliderProps {
  className?: string;
}

export function TestimonialsInfiniteSlider({ className }: TestimonialsInfiniteSliderProps) {
  const reviews = [
    { name: "Алексей Иванов", role: "CTO, FinTech Lab", text: "AMANTLE UI сэкономил нам недели верстки. Компоненты просто летают!" },
    { name: "Мария Смирнова", role: "Lead Product Designer", text: "Эстетика на уровне мировых лидеров. Токены и тёмная тема сделаны безупречно." },
    { name: "Дмитрий Козлов", role: "Fullstack Dev", text: "Никаких лишних библиотек, чистый TypeScript и Tailwind. Это то, чего не хватало." },
  ];

  return (
    <div className={cn("w-full overflow-hidden space-y-4 py-6", className)}>
      <div className="flex gap-4 animate-[marquee_20s_linear_infinite]">
        {reviews.concat(reviews).map((r, i) => (
          <div key={i} className="w-80 shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-foreground leading-relaxed">"{r.text}"</p>
            <div className="border-t border-border pt-2">
              <p className="text-xs font-bold text-foreground">{r.name}</p>
              <p className="text-[10px] text-muted-foreground">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
