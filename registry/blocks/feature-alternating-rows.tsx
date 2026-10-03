/**
 * @source https://amantle.dev/registry/blocks/feature-alternating-rows
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { CheckCircle2, Code2, Paintbrush } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

export function FeatureAlternatingRows() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 space-y-24">
        {/* Row 1 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Архитектура Registry v2</Badge>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Прямой доступ к коду без вендор-лока
            </h3>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Компоненты копируются прямо в каталог `components/` вашего приложения. Вы полностью контролируете стилизацию, доступность и зависимости каждого элемента.
            </p>
            <ul className="mt-6 space-y-3">
              {["Поддержка React 19 и Next.js 15", "Абсолютная независимость от внешних серверов", "Прозрачные JSDoc-заголовки Provenance"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl relative">
            <div className="flex items-center gap-2 border-b border-border pb-4 mb-4 text-xs font-mono text-muted-foreground">
              <Code2 className="h-4 w-4 text-primary" />
              <span>components/ui/button.tsx</span>
            </div>
            <pre className="font-mono text-xs text-muted-foreground overflow-x-auto p-2 bg-muted/40 rounded-lg">
              <code>{`export const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: { default: "bg-primary text-primary-foreground..." },
      size: { default: "h-9 px-4 py-2..." }
    }
  }
);`}</code>
            </pre>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:order-1 order-2">
            <div className="flex items-center gap-2 border-b border-border pb-4 mb-4 text-xs font-mono text-muted-foreground">
              <Paintbrush className="h-4 w-4 text-primary" />
              <span>globals.css (@theme inline)</span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
              {["Zinc", "Slate", "Violet", "Emerald", "Rose"].map((name) => (
                <div key={name} className="p-3 rounded-lg border border-border bg-muted/30">
                  <div className="h-6 w-full rounded bg-primary mb-2 mx-auto" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-2 order-1">
            <Badge variant="secondary" className="mb-4">Дизайн-токены</Badge>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              5 динамических палитр с автосохранением
            </h3>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Переключайте палитру бренда в один клик. Все переменные темы инкапсулированы в стандарте Tailwind v4 и поддерживают как светлый, так и глубокий тёмный режим.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureAlternatingRows;
