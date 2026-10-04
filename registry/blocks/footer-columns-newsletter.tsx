/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterColumnsNewsletterProps {
  className?: string;
}

export function FooterColumnsNewsletter({ className }: FooterColumnsNewsletterProps) {
  return (
    <footer className={cn("w-full border-t border-border bg-card p-10 max-w-6xl mx-auto space-y-10", className)}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-3">
          <span className="font-black text-lg text-foreground">AMANTLE UI</span>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
            Открытая дизайн-система и реестр компонентов для создания современных SaaS веб-приложений.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <input
              placeholder="Email для рассылки"
              className="h-9 px-3 rounded-lg border border-border bg-muted/30 text-xs text-foreground outline-none focus:border-primary"
            />
            <button className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90">
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <h5 className="font-bold text-foreground">Реестр</h5>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">UI Primitives</a></li>
            <li><a href="#" className="hover:text-foreground">Блоки интерфейса</a></li>
            <li><a href="#" className="hover:text-foreground">Шаблоны страниц</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs">
          <h5 className="font-bold text-foreground">Ресурсы</h5>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Документация</a></li>
            <li><a href="#" className="hover:text-foreground">Figma Kit</a></li>
            <li><a href="#" className="hover:text-foreground">Changelog</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-xs">
          <h5 className="font-bold text-foreground">Компания</h5>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">О проекте</a></li>
            <li><a href="#" className="hover:text-foreground">Политика</a></li>
            <li><a href="#" className="hover:text-foreground">Контакты</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground border-t border-border pt-6 gap-3">
        <span>© 2026 AMANTLE UI. Все права защищены.</span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none" /> Все сервисы работают в штатном режиме
        </span>
      </div>
    </footer>
  );
}
