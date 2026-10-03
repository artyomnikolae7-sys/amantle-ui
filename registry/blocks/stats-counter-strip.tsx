/**
 * @source https://amantle.dev/registry/blocks/stats-counter-strip
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";

export function StatsCounterStrip() {
  const stats = [
    { label: "Компонентов и блоков", value: "50+" },
    { label: "Поддерживаемых палитр", value: "5" },
    { label: "Загрузок через CLI", value: "100k+" },
    { label: "Удовлетворенность кодом", value: "99.8%" },
  ];

  return (
    <section className="border-y border-border bg-card/50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl font-extrabold sm:text-5xl text-primary font-mono">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounterStrip;
