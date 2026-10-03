/**
 * @source https://amantle.dev/registry/blocks/integration-logos-cloud
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";

export function IntegrationLogosCloud() {
  const integrations = [
    "Next.js 15",
    "React 19",
    "Tailwind CSS v4",
    "Model Context Protocol",
    "Cursor IDE",
    "Windsurf",
    "Radix UI",
    "TypeScript 5",
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-muted/10">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          Бесшовная совместимость с передовым стеком разработки
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {integrations.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border/60 bg-card/60 px-5 py-2.5 text-sm font-semibold text-foreground/80 shadow-xs hover:border-primary/40 hover:text-primary transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationLogosCloud;
