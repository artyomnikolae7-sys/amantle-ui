/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Floating island glassmorphism navbar
 */

import * as React from "react";
import { Button } from "@/registry/ui/button";

export default function NavbarFloatingGlass() {
  return (
    <div className="p-6 flex justify-center">
      <header className="w-full max-w-4xl rounded-full border border-border/80 bg-background/70 backdrop-blur-xl px-5 py-2.5 shadow-lg flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span>AMANTLE</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Каталог</a>
          <a href="#" className="hover:text-foreground transition-colors">Playground</a>
          <a href="#" className="hover:text-foreground transition-colors">A/B Сравнение</a>
          <a href="#" className="hover:text-foreground transition-colors">MCP Server</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            Войти
          </Button>
          <Button size="sm" className="h-8 text-xs">
            Скачать
          </Button>
        </div>
      </header>
    </div>
  );
}
