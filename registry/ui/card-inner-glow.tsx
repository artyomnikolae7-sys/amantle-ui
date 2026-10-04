/**
 * @source https://amantle.dev/components/card-inner-glow
 * @author AMANTLE UI
 * @license MIT
 * @modified Inner rim lighting effect
 */
"use client";

import * as React from "react";
import { Layers } from "lucide-react";

export function CardInnerGlow({
  title = "Высокоскоростное ядро",
  description = "Архитектура с нулевым оверхедом и аппаратным ускорением.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="relative rounded-3xl p-6 bg-card border border-border shadow-2xl overflow-hidden max-w-sm w-full group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Layers className="w-5 h-5" />
      </div>
      <h4 className="font-bold text-base text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
export default CardInnerGlow;
