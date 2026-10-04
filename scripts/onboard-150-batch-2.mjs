/**
 * @file scripts/onboard-150-batch-2.mjs
 * @description Onboarding Batch 2 (20 Blocks for SaaS, AI, DevTools & Marketing: 126–145)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_BLOCKS = path.join(ROOT_DIR, "registry", "blocks");

const BATCH_2_COMPONENTS = [
  {
    name: "hero-lamp",
    pascalName: "HeroLamp",
    title: "Hero Lamp Effect",
    description: "Hero-блок с неоновым световым куполом (Lamp Effect) и градиентным заголовком",
    code: `/**
 * @source https://ui.aceternity.com/components/lamp
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroLampProps {
  className?: string;
  badge?: string;
  title?: string;
  description?: string;
}

export function HeroLamp({
  className,
  badge = "Новое поколение веб-интерфейсов",
  title = "Создавайте эстетику света с AMANTLE UI",
  description = "Готовые компоненты, кинетическая типографика и интеллектуальный composer для ваших SaaS продуктов.",
}: HeroLampProps) {
  return (
    <div className={cn("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-card border border-border px-6 py-20 text-center", className)}>
      {/* Lamp cone */}
      <div className="absolute top-0 z-0 h-48 w-[40rem] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-0 z-0 h-32 w-80 -translate-y-1/2 rounded-full bg-primary/40 blur-2xl" />

      <div className="relative z-10 max-w-3xl space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" /> {badge}
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text">
          {title}
        </h1>

        <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-lg shadow-primary/25 transition-all">
            Начать работу <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-6 py-3 rounded-xl border border-border bg-card/60 text-foreground font-semibold text-sm hover:bg-muted transition-colors">
            Документация
          </button>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "hero-lamp": (props?: any) => {
    return (
      <div className="p-8">
        <HeroLamp
          badge={props?.badge || "Новое поколение веб-интерфейсов"}
          title={props?.title || "Создавайте эстетику света с AMANTLE UI"}
          description={props?.description || "Готовые компоненты, кинетическая типографика и интеллектуальный composer для ваших SaaS продуктов."}
        />
      </div>
    );
  },`,
    schema: {
      badge: { type: "text", default: "Новое поколение веб-интерфейсов", label: "Бейдж" },
      title: { type: "text", default: "Создавайте эстетику света с AMANTLE UI", label: "Заголовок" },
      description: { type: "text", default: "Готовые компоненты для ваших SaaS продуктов.", label: "Описание" },
    },
  },

  {
    name: "hero-retro-grid",
    pascalName: "HeroRetroGrid",
    title: "Hero Retro Grid",
    description: "Hero-блок с киберпанк 3D-сеткой в перспективе и фоновым градиентом",
    code: `/**
 * @source https://magicui.design/docs/components/retro-grid
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroRetroGridProps {
  className?: string;
  heading?: string;
  subheading?: string;
}

export function HeroRetroGrid({
  className,
  heading = "Инженерная экосистема для современных команд",
  subheading = "Скорость сборки дизайн-системы нового уровня. От примитивов до готовых приложений.",
}: HeroRetroGridProps) {
  return (
    <div className={cn("relative flex min-h-[460px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-10 text-center", className)}>
      {/* 3D Grid */}
      <div className="absolute inset-0 [perspective:200px] pointer-events-none opacity-30">
        <div className="absolute inset-0 [transform:rotateX(35deg)] bg-[linear-gradient(to_right,#80808012_1px,transparent_0),linear-gradient(to_bottom,#80808012_1px,transparent_0)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 max-w-2xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-1 font-mono text-xs text-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" /> npx amantle-ui@latest init
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {subheading}
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow hover:opacity-90 transition-opacity">
          Исследовать блоки <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
`,
    mapCode: `  "hero-retro-grid": (props?: any) => {
    return (
      <div className="p-8">
        <HeroRetroGrid heading={props?.heading} subheading={props?.subheading} />
      </div>
    );
  },`,
    schema: {
      heading: { type: "text", default: "Инженерная экосистема для современных команд", label: "Заголовок" },
      subheading: { type: "text", default: "Скорость сборки дизайн-системы нового уровня.", label: "Подзаголовок" },
    },
  },

  {
    name: "hero-canvas-reveal",
    pascalName: "HeroCanvasReveal",
    title: "Hero Canvas Reveal",
    description: "Интерактивный hero с точечной матричной анимацией и карточками преимуществ",
    code: `/**
 * @source https://ui.aceternity.com/components/canvas-reveal-effect
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Cpu, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroCanvasRevealProps {
  className?: string;
  title?: string;
}

export function HeroCanvasReveal({ className, title = "Интеллект в каждом пикселе" }: HeroCanvasRevealProps) {
  const cards = [
    { icon: Cpu, title: "AI Генерация", desc: "Синтез UI компонентов по текстовому описанию" },
    { icon: Zap, title: "Zero Runtime", desc: "Чистый CSS и TypeScript без избыточных зависимостей" },
    { icon: Shield, title: "100% Provenance", desc: "Проверенная лицензия и чистая архитектура кода" },
  ];

  return (
    <div className={cn("w-full rounded-2xl border border-border bg-card p-8 sm:p-12 space-y-8", className)}>
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-black text-foreground">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Платформа с открытым исходным кодом для разработки продуктов будущего</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="p-6 rounded-xl border border-border bg-muted/20 hover:border-primary/50 transition-colors space-y-3 group">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-sm text-foreground">{c.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,
    mapCode: `  "hero-canvas-reveal": (props?: any) => {
    return (
      <div className="p-8">
        <HeroCanvasReveal title={props?.title} />
      </div>
    );
  },`,
    schema: {
      title: { type: "text", default: "Интеллект в каждом пикселе", label: "Заголовок" },
    },
  },

  {
    name: "ai-chat-prompt",
    pascalName: "AiChatPrompt",
    title: "AI Chat Prompt Input",
    description: "Плавающий инпут чата с AI, быстрым выбором моделей, микрофоном и чипами подсказок",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/textarea
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowUp, Sparkles, Paperclip, Mic, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiChatPromptProps {
  className?: string;
  placeholder?: string;
  modelName?: string;
}

export function AiChatPrompt({
  className,
  placeholder = "Спросите что-нибудь у AMANTLE AI...",
  modelName = "Gemini 2.5 Pro",
}: AiChatPromptProps) {
  const [val, setVal] = React.useState("");
  const chips = ["Сгенерируй Hero блок", "Добавь A/B тест", "Оптимизируй CSS переменные"];

  return (
    <div className={cn("w-full max-w-2xl mx-auto rounded-2xl border border-border bg-card p-4 shadow-2xl space-y-3", className)}>
      <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-2">
        <div className="flex items-center gap-1.5 font-medium text-foreground">
          <Bot className="h-4 w-4 text-primary" />
          <span>{modelName}</span>
        </div>
        <span className="text-[11px] font-mono">Контекст: 128k</span>
      </div>

      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className="w-full resize-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Paperclip className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Mic className="h-4 w-4" />
          </button>
        </div>

        <button
          disabled={!val.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 shadow transition-opacity"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setVal(c)}
            className="flex items-center gap-1 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-primary" /> {c}
          </button>
        ))}
      </div>
    </div>
  );
}
`,
    mapCode: `  "ai-chat-prompt": (props?: any) => {
    return (
      <div className="p-8">
        <AiChatPrompt placeholder={props?.placeholder} modelName={props?.modelName} />
      </div>
    );
  },`,
    schema: {
      placeholder: { type: "text", default: "Спросите что-нибудь у AMANTLE AI...", label: "Плейсхолдер" },
      modelName: { type: "text", default: "Gemini 2.5 Pro", label: "Модель" },
    },
  },

  {
    name: "ai-generation-card",
    pascalName: "AiGenerationCard",
    title: "AI Generation Card",
    description: "Карточка статуса генерации с анимированным шиммером и индикатором выполнения",
    code: `/**
 * @source https://magicui.design/docs/components/animated-beam
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, CheckCircle2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiGenerationCardProps {
  className?: string;
  promptTitle?: string;
  isCompleted?: boolean;
}

export function AiGenerationCard({
  className,
  promptTitle = "Генерация компонента PricingSlider.tsx",
  isCompleted = true,
}: AiGenerationCardProps) {
  return (
    <div className={cn("w-full max-w-lg mx-auto rounded-2xl border border-border bg-card p-6 shadow-xl space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles className="h-4 w-4 animate-spin-around" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">{promptTitle}</h4>
            <span className="text-[11px] text-muted-foreground">Архитектурный конвейер AMANTLE</span>
          </div>
        </div>
        {isCompleted && (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
            <CheckCircle2 className="h-3.5 w-3.5" /> Готово
          </span>
        )}
      </div>

      <div className="rounded-xl border border-border bg-muted/40 p-4 font-mono text-xs text-foreground space-y-1">
        <p className="text-muted-foreground">// Автоматически сгенерированный код:</p>
        <p><span className="text-primary">export function</span> PricingSlider() &#123;</p>
        <p className="pl-4 text-emerald-400">const [plan, setPlan] = useState("pro");</p>
        <p className="pl-4">return &lt;div className="pricing-grid"&gt;...&lt;/div&gt;;</p>
        <p>&#125;</p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted">
          <Copy className="h-3.5 w-3.5" /> Копировать код
        </button>
      </div>
    </div>
  );
}
`,
    mapCode: `  "ai-generation-card": (props?: any) => {
    return (
      <div className="p-8">
        <AiGenerationCard promptTitle={props?.promptTitle} />
      </div>
    );
  },`,
    schema: {
      promptTitle: { type: "text", default: "Генерация компонента PricingSlider.tsx", label: "Задача" },
    },
  },

  {
    name: "ai-code-diff",
    pascalName: "AiCodeDiff",
    title: "AI Code Diff Viewer",
    description: "Блок инлайн-сравнения изменений кода с подсветкой удалённых и добавленных строк",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GitCommit, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiCodeDiffProps {
  className?: string;
  filename?: string;
}

export function AiCodeDiff({ className, filename = "registry/ui/button.tsx" }: AiCodeDiffProps) {
  const diffLines = [
    { type: "normal", line: "import * as React from 'react';" },
    { type: "removed", line: "- const variant = 'default';" },
    { type: "added", line: "+ const variant = props.variant || 'default';" },
    { type: "added", line: "+ const isMagnetic = props.magnetic ?? false;" },
    { type: "normal", line: "return <button className={cn(styles)}>{children}</button>;" },
  ];

  return (
    <div className={cn("w-full max-w-xl mx-auto rounded-xl border border-border bg-card overflow-hidden shadow-lg font-mono text-xs", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/40 border-b border-border">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <GitCommit className="h-4 w-4 text-primary" />
          <span>{filename}</span>
        </div>
        <span className="text-[11px] text-muted-foreground">+2 / -1</span>
      </div>

      <div className="p-2 space-y-0.5">
        {diffLines.map((l, i) => (
          <div
            key={i}
            className={cn(
              "px-3 py-1 rounded",
              l.type === "added" && "bg-emerald-500/10 text-emerald-400 font-medium",
              l.type === "removed" && "bg-destructive/10 text-destructive line-through opacity-80",
              l.type === "normal" && "text-muted-foreground"
            )}
          >
            {l.line}
          </div>
        ))}
      </div>
    </div>
  );
}
`,
    mapCode: `  "ai-code-diff": (props?: any) => {
    return (
      <div className="p-8">
        <AiCodeDiff filename={props?.filename} />
      </div>
    );
  },`,
    schema: {
      filename: { type: "text", default: "registry/ui/button.tsx", label: "Имя файла" },
    },
  },

  {
    name: "bento-grid-interactive",
    pascalName: "BentoGridInteractive",
    title: "Bento Grid Interactive",
    description: "Интерактивная бенто-сетка с живыми виджетами и градиентными бордерами",
    code: `/**
 * @source https://ui.aceternity.com/components/bento-grid
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, Activity, ShieldCheck, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoGridInteractiveProps {
  className?: string;
}

export function BentoGridInteractive({ className }: BentoGridInteractiveProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Performance</span>
          <h3 className="text-xl font-bold text-foreground">Мгновенный отклик интерфейса</h3>
          <p className="text-xs text-muted-foreground">Оптимизированные компоненты без просадок FPS с аппаратным ускорением GPU.</p>
        </div>
        <div className="mt-6 h-24 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex items-center px-4">
          <Activity className="h-8 w-8 text-primary" />
          <span className="ml-3 font-mono font-bold text-lg text-foreground">99.98% Latency &lt; 16ms</span>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-emerald-400 font-bold">Security</span>
          <h3 className="text-lg font-bold text-foreground">Enterprise защита</h3>
          <p className="text-xs text-muted-foreground">Строгая типизация TypeScript и нулевой вектор уязвимостей.</p>
        </div>
        <ShieldCheck className="h-12 w-12 text-emerald-500 self-end mt-4" />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 font-bold">Speed</span>
          <h3 className="text-lg font-bold text-foreground">Быстрый старт</h3>
          <p className="text-xs text-muted-foreground">Копируйте и настраивайте компоненты в пару кликов.</p>
        </div>
        <Zap className="h-12 w-12 text-amber-500 self-end mt-4" />
      </div>

      <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-colors">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Ecosystem</span>
          <h3 className="text-xl font-bold text-foreground">Глобальная сеть компонентов</h3>
          <p className="text-xs text-muted-foreground">Сотни готовых блоков и шаблонов страниц для любых потребностей продукта.</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> 150+ Компонентов</span>
          <span className="font-semibold text-primary">Исследовать каталог →</span>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "bento-grid-interactive": (props?: any) => {
    return (
      <div className="p-8">
        <BentoGridInteractive />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "sticky-scroll-reveal",
    pascalName: "StickyScrollReveal",
    title: "Sticky Scroll Reveal",
    description: "Пошаговый блок преимуществ с фиксацией визуала при скролле контента",
    code: `/**
 * @source https://ui.aceternity.com/components/sticky-scroll-reveal
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyScrollRevealProps {
  className?: string;
}

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const [activeCard, setActiveCard] = React.useState(0);

  const content = [
    { title: "Совместная разработка", desc: "Синхронизируйте код компонентов в реальном времени между разработчиками и дизайнерами." },
    { title: "Интерактивный Playground", desc: "Мгновенно меняйте пропсы, размеры и цветовые темы прямо в браузере." },
    { title: "AI Composer", desc: "Создавайте новые секции и страницы за считанные минуты благодаря генеративным моделям." },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full p-8 rounded-2xl border border-border bg-card", className)}>
      <div className="space-y-6">
        {content.map((item, idx) => (
          <div
            key={item.title}
            onClick={() => setActiveCard(idx)}
            className={cn(
              "p-5 rounded-xl border transition-all cursor-pointer",
              activeCard === idx ? "border-primary bg-primary/5 shadow-md" : "border-border/60 hover:border-border"
            )}
          >
            <h4 className={cn("text-base font-bold", activeCard === idx ? "text-primary" : "text-foreground")}>
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="h-64 md:h-auto rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-card border border-border flex items-center justify-center p-6 text-center">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Слайд {activeCard + 1} из 3</span>
          <h3 className="text-xl font-black text-foreground">{content[activeCard].title}</h3>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "sticky-scroll-reveal": (props?: any) => {
    return (
      <div className="p-8">
        <StickyScrollReveal />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "pricing-tier-matrix",
    pascalName: "PricingTierMatrix",
    title: "Pricing Tier Matrix",
    description: "Развернутая матрица тарифов с акцентным бейджем популярного плана и списком фичей",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTierMatrixProps {
  className?: string;
  isAnnual?: boolean;
}

export function PricingTierMatrix({ className, isAnnual = true }: PricingTierMatrixProps) {
  const plans = [
    { name: "Starter", price: isAnnual ? "15" : "19", desc: "Для пет-проектов и стартапов", features: ["До 5 проектов", "50+ UI компонентов", "Базовая поддержка"] },
    { name: "Pro", price: isAnnual ? "39" : "49", popular: true, desc: "Для профессиональных команд", features: ["Неограниченно проектов", "150+ компонентов и блоков", "AI Composer доступ", "Приоритетная поддержка"] },
    { name: "Enterprise", price: isAnnual ? "99" : "119", desc: "Для крупных корпораций", features: ["Custom реестр компонентов", "Dedicated SLA 99.9%", "Кастомные темы оформления", "Онбординг команды"] },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full", className)}>
      {plans.map((p) => (
        <div
          key={p.name}
          className={cn(
            "rounded-2xl border p-6 flex flex-col justify-between transition-all",
            p.popular ? "border-primary bg-card shadow-2xl relative scale-105" : "border-border bg-card/60"
          )}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold text-primary-foreground uppercase tracking-widest">
              Популярный
            </span>
          )}

          <div>
            <h4 className="text-lg font-bold text-foreground">{p.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
            <div className="my-5 flex items-baseline gap-1">
              <span className="text-4xl font-black text-foreground">\${p.price}</span>
              <span className="text-xs text-muted-foreground">/ месяц</span>
            </div>

            <ul className="space-y-2.5 text-xs text-foreground pt-4 border-t border-border">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className={cn(
              "mt-6 w-full py-2.5 rounded-xl font-bold text-xs transition-opacity cursor-pointer",
              p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border bg-card hover:bg-muted text-foreground"
            )}
          >
            Выбрать {p.name}
          </button>
        </div>
      ))}
    </div>
  );
}
`,
    mapCode: `  "pricing-tier-matrix": (props?: any) => {
    return (
      <div className="p-8">
        <PricingTierMatrix isAnnual={props?.isAnnual !== false} />
      </div>
    );
  },`,
    schema: {
      isAnnual: { type: "boolean", default: true, label: "Годовой тариф" },
    },
  },

  {
    name: "testimonials-infinite-slider",
    pascalName: "TestimonialsInfiniteSlider",
    title: "Testimonials Infinite Slider",
    description: "Две встречные бесконечные бегущие ленты отзывов клиентов с аватарами и цитатами",
    code: `/**
 * @source https://magicui.design/docs/components/marquee
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialsInfiniteSliderProps {
  className?: string;
}

export function TestimonialsInfiniteSlider({ className }: TestimonialsInfiniteSliderProps) {
  const reviews = [
    { name: "Алексей Иванов", role: "CTO, FinTech Lab", text: "AMANTLE UI сэкономил нам недели верстки. Компоненты просто летают!" },
    { name: "Мария Смирнова", role: "Lead Product Designer", text: "Эстетика на уровне мировых лидеров. Токены и тёмная тема сделаны безупречно." },
    { name: "Дмитрий Козлов", role: "Fullstack Dev", text: "Никаких лишних библиотек, чистый TypeScript и Tailwind. Это то, чего не хватало." },
  ];

  return (
    <div className={cn("w-full overflow-hidden space-y-4 py-6", className)}>
      <div className="flex gap-4 animate-[marquee_20s_linear_infinite]">
        {reviews.concat(reviews).map((r, i) => (
          <div key={i} className="w-80 shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm space-y-3">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-foreground leading-relaxed">"{r.text}"</p>
            <div className="border-t border-border pt-2">
              <p className="text-xs font-bold text-foreground">{r.name}</p>
              <p className="text-[10px] text-muted-foreground">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
    mapCode: `  "testimonials-infinite-slider": (props?: any) => {
    return (
      <div className="p-8">
        <TestimonialsInfiniteSlider />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "stats-glass-grid",
    pascalName: "StatsGlassGrid",
    title: "Stats Glass Grid",
    description: "Неоморфичная сетка показателей роста со стеклянным блюром и графиками",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/card
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatsGlassGridProps {
  className?: string;
}

export function StatsGlassGrid({ className }: StatsGlassGridProps) {
  const stats = [
    { title: "Активных разработчиков", value: "48.2k", change: "+24.5%", icon: Users },
    { title: "Загрузок компонентов", value: "1.2M", change: "+38.1%", icon: TrendingUp },
    { title: "GitHub Stars", value: "18.5k", change: "+12.0%", icon: ArrowUpRight },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.title} className="rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-semibold">{s.title}</span>
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-black text-foreground">{s.value}</span>
              <span className="text-xs font-bold text-emerald-400">{s.change}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
`,
    mapCode: `  "stats-glass-grid": (props?: any) => {
    return (
      <div className="p-8">
        <StatsGlassGrid />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "cta-lamp-glow",
    pascalName: "CtaLampGlow",
    title: "CTA Lamp Glow",
    description: "Конверсионный баннер с неоновым световым куполом и инпутом регистрации",
    code: `/**
 * @source https://ui.aceternity.com/components/lamp
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CtaLampGlowProps {
  className?: string;
  title?: string;
}

export function CtaLampGlow({ className, title = "Готовы поднять качество вашего UI?" }: CtaLampGlowProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-border bg-card p-10 sm:p-14 text-center max-w-4xl mx-auto w-full", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black text-foreground">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Присоединяйтесь к тысячам инженеров, создающих быстрые и красивые веб-приложения на AMANTLE UI.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="ваш.email@domain.com"
            className="flex-1 h-11 px-4 rounded-xl border border-border bg-muted/40 text-sm text-foreground outline-none focus:border-primary"
          />
          <button className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer">
            Начать
          </button>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "cta-lamp-glow": (props?: any) => {
    return (
      <div className="p-8">
        <CtaLampGlow title={props?.title} />
      </div>
    );
  },`,
    schema: {
      title: { type: "text", default: "Готовы поднять качество вашего UI?", label: "Заголовок" },
    },
  },

  {
    name: "navbar-floating-dock",
    pascalName: "NavbarFloatingDock",
    title: "Navbar Floating Dock",
    description: "Островной парящий навбар с иконками, логотипом и кнопками действий",
    code: `/**
 * @source https://ui.aceternity.com/components/floating-navbar
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, Layers, Box, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavbarFloatingDockProps {
  className?: string;
}

export function NavbarFloatingDock({ className }: NavbarFloatingDockProps) {
  const links = [
    { label: "Компоненты", icon: Box },
    { label: "Блоки", icon: Layers },
    { label: "Шаблоны", icon: Sparkles },
    { label: "Документация", icon: BookOpen },
  ];

  return (
    <header className={cn("fixed top-4 inset-x-0 mx-auto max-w-fit z-50 flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-card/85 backdrop-blur-xl shadow-2xl", className)}>
      <span className="font-black text-sm text-foreground mr-2">AMANTLE</span>
      <nav className="flex items-center gap-1">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href="#"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{l.label}</span>
            </a>
          );
        })}
      </nav>
      <button className="h-8 px-4 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow hover:opacity-90 transition-opacity ml-2">
        Войти
      </button>
    </header>
  );
}
`,
    mapCode: `  "navbar-floating-dock": (props?: any) => {
    return (
      <div className="relative h-24 p-8 flex justify-center">
        <NavbarFloatingDock className="relative top-0" />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "footer-columns-newsletter",
    pascalName: "FooterColumnsNewsletter",
    title: "Footer Columns with Newsletter",
    description: "4-колоночный футер с формой подписки на обновления и индикатором аптайма",
    code: `/**
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
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Все сервисы работают в штатном режиме
        </span>
      </div>
    </footer>
  );
}
`,
    mapCode: `  "footer-columns-newsletter": (props?: any) => {
    return (
      <div className="p-8">
        <FooterColumnsNewsletter />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "dashboard-server-monitoring",
    pascalName: "DashboardServerMonitoring",
    title: "Server Monitoring Dashboard",
    description: "Панель системного мониторинга серверов (CPU, RAM, Uptime, Latency)",
    code: `/**
 * @source https://tremor.so
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Server, Activity, HardDrive, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardServerMonitoringProps {
  className?: string;
}

export function DashboardServerMonitoring({ className }: DashboardServerMonitoringProps) {
  const metrics = [
    { title: "Загрузка CPU", value: "32%", status: "Норма", icon: Cpu, progress: 32 },
    { title: "Использование RAM", value: "11.4 / 16 GB", status: "71%", icon: HardDrive, progress: 71 },
    { title: "Network Latency", value: "14 ms", status: "Отлично", icon: Activity, progress: 14 },
    { title: "Server Uptime", value: "99.99%", status: "34 дн.", icon: Server, progress: 99 },
  ];

  return (
    <div className={cn("w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 shadow-xl space-y-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground">Мониторинг кластера</h3>
          <p className="text-xs text-muted-foreground">Пул серверов: production-eu-central-1</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" /> Live
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="p-4 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">{m.title}</span>
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold text-foreground">{m.value}</span>
                <span className="text-[11px] font-mono text-muted-foreground">{m.status}</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div style={{ width: \`\${m.progress}%\` }} className="h-full bg-primary rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,
    mapCode: `  "dashboard-server-monitoring": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardServerMonitoring />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "dashboard-kanban-board",
    pascalName: "DashboardKanbanBoard",
    title: "Kanban Board Dashboard",
    description: "Интерактивная канбан-доска статусов задач (To Do, In Progress, Done)",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardKanbanBoardProps {
  className?: string;
}

export function DashboardKanbanBoard({ className }: DashboardKanbanBoardProps) {
  const columns = [
    { title: "К выполнению", count: 3, cards: ["Обновить Tailwind до v4", "Добавить A/B сравнение"] },
    { title: "В работе", count: 2, cards: ["Онбординг 50 новых компонентов", "Синхронизация карты Playground"] },
    { title: "Готово", count: 4, cards: ["Сборка 100 компонентов", "Проверка роутов превью"] },
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full", className)}>
      {columns.map((col) => (
        <div key={col.title} className="rounded-2xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-foreground">{col.title}</h4>
              <span className="h-5 w-5 rounded-full bg-muted flex items-center justify-center font-mono text-[10px] text-muted-foreground">
                {col.count}
              </span>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            {col.cards.map((card, i) => (
              <div key={i} className="p-3 rounded-xl border border-border bg-muted/40 hover:border-primary/50 text-xs font-medium text-foreground transition-colors cursor-pointer shadow-sm">
                {card}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
`,
    mapCode: `  "dashboard-kanban-board": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardKanbanBoard />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "dashboard-table-pagination",
    pascalName: "DashboardTablePagination",
    title: "Table with Pagination Dashboard",
    description: "Таблица данных с фильтрацией статуса, поиском и кнопками навигации",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/table
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardTablePaginationProps {
  className?: string;
}

export function DashboardTablePagination({ className }: DashboardTablePaginationProps) {
  const rows = [
    { id: "INV-001", client: "Acme Corp", amount: "$1,250.00", status: "Оплачено" },
    { id: "INV-002", client: "Starlight SaaS", amount: "$840.00", status: "В обработке" },
    { id: "INV-003", client: "Nexus AI", amount: "$3,100.00", status: "Оплачено" },
  ];

  return (
    <div className={cn("w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-xl", className)}>
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h4 className="text-sm font-bold text-foreground">Счета и транзакции</h4>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-xs">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <input placeholder="Поиск счета..." className="bg-transparent outline-none text-foreground w-28" />
        </div>
      </div>

      <table className="w-full text-left text-xs">
        <thead className="bg-muted/40 text-muted-foreground font-semibold border-b border-border">
          <tr>
            <th className="p-3.5">ID</th>
            <th className="p-3.5">Клиент</th>
            <th className="p-3.5">Сумма</th>
            <th className="p-3.5">Статус</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-muted/20 text-foreground">
              <td className="p-3.5 font-mono text-muted-foreground">{r.id}</td>
              <td className="p-3.5 font-medium">{r.client}</td>
              <td className="p-3.5 font-bold">{r.amount}</td>
              <td className="p-3.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[10px]">
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span>Показано 1-3 из 12 записей</span>
        <div className="flex gap-1">
          <button className="h-7 w-7 rounded border border-border flex items-center justify-center hover:bg-muted"><ChevronLeft className="h-3.5 w-3.5" /></button>
          <button className="h-7 w-7 rounded border border-border flex items-center justify-center hover:bg-muted"><ChevronRight className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "dashboard-table-pagination": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardTablePagination />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "integration-ecosystem-grid",
    pascalName: "IntegrationEcosystemGrid",
    title: "Integration Ecosystem Grid",
    description: "Сетка поддерживаемых внешних экосистем и сервисов с индикатором статуса подключения",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IntegrationEcosystemGridProps {
  className?: string;
}

export function IntegrationEcosystemGrid({ className }: IntegrationEcosystemGridProps) {
  const integrations = [
    { name: "GitHub", desc: "Синхронизация коммитов и релизов", connected: true },
    { name: "Figma", desc: "Импорт дизайн-токенов и стилей", connected: true },
    { name: "Slack", desc: "Уведомления об обновлениях в канал", connected: false },
    { name: "Vercel", desc: "Автоматический деплой превью", connected: true },
  ];

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full", className)}>
      {integrations.map((item) => (
        <div key={item.name} className="p-4 rounded-xl border border-border bg-card flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
          <button
            className={cn(
              "h-8 px-3 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors",
              item.connected ? "bg-emerald-500/10 text-emerald-400" : "border border-border bg-muted/40 text-foreground hover:bg-muted"
            )}
          >
            {item.connected ? <><Check className="h-3.5 w-3.5" /> Подключено</> : <><Plus className="h-3.5 w-3.5" /> Добавить</>}
          </button>
        </div>
      ))}
    </div>
  );
}
`,
    mapCode: `  "integration-ecosystem-grid": (props?: any) => {
    return (
      <div className="p-8">
        <IntegrationEcosystemGrid />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "comparison-slider-image",
    pascalName: "ComparisonSliderImage",
    title: "Image Comparison Slider",
    description: "Интерактивный сплиттер сравнения изображений 'До' и 'После' с ручкой управления",
    code: `/**
 * @source https://ui.aceternity.com/components/compare
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComparisonSliderImageProps {
  className?: string;
  defaultPosition?: number;
}

export function ComparisonSliderImage({ className, defaultPosition = 50 }: ComparisonSliderImageProps) {
  const [position, setPosition] = React.useState(defaultPosition);

  return (
    <div className={cn("relative w-full max-w-lg h-64 rounded-2xl overflow-hidden border border-border bg-card select-none", className)}>
      {/* Before */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center">
        <span className="font-bold text-xl text-white/50">ДО ОПТИМИЗАЦИИ</span>
      </div>

      {/* After with clip path */}
      <div
        style={{ clipPath: \`inset(0 \${100 - position}% 0 0)\` }}
        className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center"
      >
        <span className="font-black text-xl text-white">AMANTLE UI ПОСЛЕ</span>
      </div>

      {/* Slider handle */}
      <div
        style={{ left: \`\${position}%\` }}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
      >
        <div className="h-8 w-8 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
      />
    </div>
  );
}
`,
    mapCode: `  "comparison-slider-image": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ComparisonSliderImage defaultPosition={Number(props?.defaultPosition) || 50} />
      </div>
    );
  },`,
    schema: {
      defaultPosition: { type: "number", default: 50, label: "Позиция (%)" },
    },
  },

  {
    name: "cookie-consent-banner",
    pascalName: "CookieConsentBanner",
    title: "Cookie Consent Banner",
    description: "Плавающее модальное уведомление о файлах cookie с выбором настроек",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CookieConsentBannerProps {
  className?: string;
}

export function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  return (
    <div className={cn("fixed bottom-4 right-4 max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl z-50 space-y-3", className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Cookie className="h-4 w-4" />
          </div>
          <h4 className="text-sm font-bold text-foreground">Мы используем cookies</h4>
        </div>
        <button onClick={() => setClosed(true)} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Для персонализации тем оформления и аналитики витрины компонентов мы сохраняем cookies.
      </p>

      <div className="flex gap-2 pt-1">
        <button
          onClick={() => setClosed(true)}
          className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90"
        >
          Принять все
        </button>
        <button
          onClick={() => setClosed(true)}
          className="px-3 py-2 rounded-xl border border-border bg-muted/30 text-xs font-semibold text-foreground hover:bg-muted"
        >
          Только нужные
        </button>
      </div>
    </div>
  );
}
`,
    mapCode: `  "cookie-consent-banner": (props?: any) => {
    return (
      <div className="relative h-48 p-8 flex items-end justify-center">
        <CookieConsentBanner className="relative bottom-0 right-0 max-w-md w-full" />
      </div>
    );
  },`,
    schema: {},
  },
];

async function run() {
  console.log("=== Onboarding Batch 2: 20 Blocks for SaaS, AI, DevTools & Marketing (126-145) ===");

  // 1. Write component source files
  for (const item of BATCH_2_COMPONENTS) {
    const filePath = path.join(REGISTRY_BLOCKS, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code.trim() + "\n", "utf8");
    console.log(`✅ Written: registry/blocks/${item.name}.tsx`);
  }

  // 2. Update lib/components-map.tsx
  let mapContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf8");
  
  // Add imports
  const importLines = BATCH_2_COMPONENTS.map(
    (c) => `import { ${c.pascalName} } from "@/registry/blocks/${c.name}";`
  ).join("\n");
  
  // Insert imports after "use client";\n\n
  mapContent = mapContent.replace('"use client";\n\n', `"use client";\n\n${importLines}\n`);

  // Insert component mappings before the closing "};"
  const mappings = BATCH_2_COMPONENTS.map((c) => c.mapCode).join("\n");
  const lastIndex = mapContent.lastIndexOf("};");
  if (lastIndex !== -1) {
    mapContent = mapContent.slice(0, lastIndex) + mappings + "\n" + mapContent.slice(lastIndex);
  }
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), mapContent, "utf8");
  console.log("✅ Updated: lib/components-map.tsx");

  // 3. Update lib/playground-schemas.ts
  let schemaContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), "utf8");
  const schemaEntries = BATCH_2_COMPONENTS.map(
    (c) => `  "${c.name}": ${JSON.stringify(c.schema, null, 4)},`
  ).join("\n");
  const lastSchemaIndex = schemaContent.lastIndexOf("};");
  if (lastSchemaIndex !== -1) {
    schemaContent = schemaContent.slice(0, lastSchemaIndex) + schemaEntries + "\n" + schemaContent.slice(lastSchemaIndex);
  }
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), schemaContent, "utf8");
  console.log("✅ Updated: lib/playground-schemas.ts");

  // 4. Rebuild registry manifests
  console.log("🔄 Compiling registry manifests...");
  await buildRegistry();
  console.log("🎉 Batch 2 completed successfully!");
}

run().catch((err) => {
  console.error("Batch 2 error:", err);
  process.exit(1);
});
