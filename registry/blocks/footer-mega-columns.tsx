/**
 * @source https://amantle.dev/registry/blocks/footer-mega-columns
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";

export function FooterMegaColumns() {
  const columns = [
    {
      title: "Экосистема",
      links: ["Компоненты UI", "Блоки страниц", "Шаблоны", "Темы оформления", "Шрифты"],
    },
    {
      title: "Разработчикам",
      links: ["Документация", "CLI установка", "MCP Сервер", "GitHub репозиторий", "Релизы"],
    },
    {
      title: "Ресурсы",
      links: ["Архитектура", "Provenance аудит", "Лицензии", "Сообщество", "Блог"],
    },
    {
      title: "Компания",
      links: ["О нас", "Карьера", "Контакты", "Политика конфиденциальности", "Условия"],
    },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold tracking-tight text-foreground">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs font-black">
                A
              </div>
              <span>AMANTLE UI</span>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Открытая дизайн-система нового поколения с принципами Code Ownership и нативной интеграцией с искусственным интеллектом.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} AMANTLE UI Design System. MIT License.</p>
          <p>Разработано с заботой о каждой строке кода.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMegaColumns;
