/**
 * @source https://magicui.design/docs/components/retro-grid
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroRetroGridProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

export function HeroRetroGrid({
  className,
  heading = "Инженерная экосистема для современных команд",
  subheading = "Скорость сборки дизайн-системы нового уровня. От примитивов до готовых приложений.",
}: HeroRetroGridProps) {
  return (
    <div className={cn("relative flex min-h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-10 text-center", className)}>
      {/* 3D Grid */}
      <div className="absolute inset-0 [perspective:200px] pointer-events-none opacity-30">
        <div className="absolute inset-0 [transform:rotateX(35deg)] bg-[linear-gradient(to_right,#80808012_1px,transparent_0),linear-gradient(to_bottom,#80808012_1px,transparent_0)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-1 font-mono text-xs text-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" /> npx amantle-ui@latest init
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {subheading}
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow hover:opacity-90 transition-opacity">
          Исследовать блоки <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
