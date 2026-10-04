/**
 * @source https://ui.aceternity.com/components/floating-navbar
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, Layers, Box, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavbarFloatingDockProps {
  className?: string;
}

export function NavbarFloatingDock({ className }: NavbarFloatingDockProps) {
  const links = [
    { label: "Компоненты", icon: Box },
    { label: "Блоки", icon: Layers },
    { label: "Шаблоны", icon: Sparkles },
    { label: "Документация", icon: BookOpen },
  ];

  return (
    <header className={cn("fixed top-4 inset-x-0 mx-auto max-w-fit z-50 flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-card/85 backdrop-blur-xl shadow-2xl", className)}>
      <span className="font-black text-sm text-foreground mr-2">AMANTLE</span>
      <nav className="flex items-center gap-1">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href="#"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{l.label}</span>
            </a>
          );
        })}
      </nav>
      <button className="h-8 px-4 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow hover:opacity-90 transition-opacity ml-2">
        Войти
      </button>
    </header>
  );
}
