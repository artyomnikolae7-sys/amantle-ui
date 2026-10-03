/**
 * @source https://amantle.dev/registry/blocks/navbar-sticky-blur
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/registry/ui/button";

export function NavbarStickyBlur() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs font-black">
              A
            </div>
            <span>AMANTLE UI</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground transition-colors">Компоненты</a>
            <a href="#" className="hover:text-foreground transition-colors">Блоки</a>
            <a href="#" className="hover:text-foreground transition-colors">Шаблоны</a>
            <a href="#" className="hover:text-foreground transition-colors">Документация</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Войти
          </Button>
          <Button size="sm" className="gap-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Composer</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavbarStickyBlur;
