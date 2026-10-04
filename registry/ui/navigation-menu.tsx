/**
 * @source https://ui.shadcn.com/docs/components/navigation-menu
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronDown, Sparkles, Layers, Box } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavigationMenuProps {
  className?: string;
}

export function NavigationMenu({ className }: NavigationMenuProps) {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <nav className={cn("relative inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm", className)}>
      <div className="relative" onMouseEnter={() => setOpen("components")} onMouseLeave={() => setOpen(null)}>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <span>Компоненты</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>

        {open === "components" && (
          <div className="absolute top-full left-0 mt-2 w-[420px] grid grid-cols-2 gap-2 rounded-xl border border-border bg-popover p-3 shadow-2xl z-50 animate-in motion-reduce:animate-none fade-in-50">
            <a href="#" className="flex flex-col p-2.5 rounded-lg hover:bg-muted transition-colors group">
              <span className="flex items-center gap-1.5 font-bold text-xs text-foreground group-hover:text-primary">
                <Box className="h-3.5 w-3.5" /> UI Primitives
              </span>
              <span className="text-[11px] text-muted-foreground mt-1">Кнопки, карточки, инпуты и переключатели</span>
            </a>
            <a href="#" className="flex flex-col p-2.5 rounded-lg hover:bg-muted transition-colors group">
              <span className="flex items-center gap-1.5 font-bold text-xs text-foreground group-hover:text-primary">
                <Layers className="h-3.5 w-3.5" /> Blocks
              </span>
              <span className="text-[11px] text-muted-foreground mt-1">Hero, Pricing, Bento, Testimonials</span>
            </a>
          </div>
        )}
      </div>

      <a href="#" className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
        Документация
      </a>
      <a href="#" className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
        Цены
      </a>
    </nav>
  );
}
