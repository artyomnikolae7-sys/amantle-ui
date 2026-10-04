/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Clean minimal centered footer
 */

import * as React from "react";

export default function FooterMinimalCentered() {
  return (
    <footer className="border-t border-border/80 bg-background text-foreground py-12 text-center text-xs">
      <div className="container mx-auto px-4 max-w-4xl space-y-4">
        <div className="flex items-center justify-center gap-2 font-extrabold text-sm tracking-tight">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>AMANTLE UI</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Компоненты</a>
          <a href="#" className="hover:text-foreground transition-colors">Блоки</a>
          <a href="#" className="hover:text-foreground transition-colors">Шаблоны</a>
          <a href="#" className="hover:text-foreground transition-colors">Документация</a>
          <a href="#" className="hover:text-foreground transition-colors">Лицензия MIT</a>
        </div>
        <p className="text-muted-foreground/60 text-[11px]">
          © {new Date().getFullYear()} AMANTLE UI. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
