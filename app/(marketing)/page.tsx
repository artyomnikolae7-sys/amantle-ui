import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Terminal, ShieldCheck, Cpu } from "lucide-react";
import { CatalogGrid, CatalogItem } from "@/components/catalog-grid";
import { InteractiveShowcase } from "@/components/interactive-showcase";

export default async function HomePage() {
  let items: CatalogItem[] = [];
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "public", "r", "index.json"), "utf-8");
    items = JSON.parse(raw);
  } catch {
    items = [];
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-primary/30 to-violet-500/20 opacity-30"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10 md:pt-20 md:pb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Экосистема shadcn нового поколения</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
          Твоя дизайн-система. <br />
          <span className="bg-gradient-to-r from-primary via-violet-400 to-rose-400 bg-clip-text text-transparent">
            Владей кодом целиком.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Собственный открытый реестр компонентов, блоков и шаблонов с поддержкой Tailwind v4,
          динамических цветовых палитр и нативной связью с AI через MCP.
        </p>

        {/* CTA Buttons & CLI quick-copy */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity gap-2"
          >
            <span>Исследовать каталог ({items.length > 0 ? items.length : "2,051"} компонентов)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/studio"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-muted transition-colors gap-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AMANTLE Studio</span>
          </Link>

          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-xs font-mono text-foreground shadow-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span>npx amantle-ui add button</span>
          </div>
        </div>

        {/* Key Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">2,051+ компонентов из 10 экосистем</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Примитивы Radix UI, дашборды Tremor, кинетика React Bits, спецэффекты Magic UI & Aceternity и блоки HyperUI в одном каталоге.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Нативный MCP-сервер и CLI</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Прямая интеграция с Cursor, Windsurf и Antigravity через MCP, плюс официальный CLI <code className="text-primary font-mono text-xs">npx amantle-ui add</code>.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">60 FPS Виртуализация и Provenance</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Мгновенный скролл каталога с бинарным поиском видимых строк. Каждый компонент документирует источник, автора и лицензию.
            </p>
          </div>
        </div>
      </section>

      {/* Live Interactive Sandbox Window */}
      <InteractiveShowcase />

      {/* Interactive Catalog Grid with Live Previews & Quick View */}
      <CatalogGrid items={items} />
    </div>
  );
}
