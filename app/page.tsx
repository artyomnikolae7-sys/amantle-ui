import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Terminal, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export default function HomePage() {
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
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-32 text-center">
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
          <Link
            href="/ui"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity gap-2"
          >
            <span>Перейти к компонентам</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-xs font-mono text-foreground shadow-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span>npx shadcn add https://amantle.dev/r/button.json</span>
          </div>
        </div>

        {/* Key Pillars Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">50+ компонентов «Золотого фонда»</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Отполированные атомарные примитивы Radix UI, готовые продакшн-блоки Hero, Pricing, Bento и полноценные шаблоны страниц.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Нативный MCP-сервер для AI</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Прямая интеграция с Cursor, Claude Code и Antigravity. Агенты сами находят блоки, забирают код и настраивают переменные темы.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Атрибуция и Provenance</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Каждый компонент документирует источник, автора и лицензию (MIT). Никаких рисков нарушения авторских прав.
            </p>
          </div>
        </div>

        {/* Categories preview banner */}
        <div className="mt-16 rounded-2xl border border-border bg-gradient-to-b from-card to-background p-8 text-center">
          <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">Архитектура экосистемы</div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Три уровня структурирования</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted/40 border border-border">
              <div className="font-semibold text-sm text-foreground">UI Primitives</div>
              <div className="text-xs text-muted-foreground mt-1">25+ доступных компонентов</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/40 border border-border">
              <div className="font-semibold text-sm text-foreground">Blocks & Sections</div>
              <div className="text-xs text-muted-foreground mt-1">20+ составных секций</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/40 border border-border">
              <div className="font-semibold text-sm text-foreground">Page Templates</div>
              <div className="text-xs text-muted-foreground mt-1">3 полноценных каркаса</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
