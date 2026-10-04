/**
 * @file scripts/onboard-batch-2.mjs
 * @description Batch creation and onboarding for Batch 2 (15 Blocks for SaaS & Landings)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_BLOCKS = path.join(ROOT_DIR, "registry", "blocks");

const BATCH_2_BLOCKS = [
  {
    name: "hero-split-image",
    pascalName: "HeroSplitImage",
    title: "Hero Split Image",
    description: "Конверсионный Hero-блок с заголовком и CTA слева и интерактивным превью продукта справа",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Split hero with interactive preview
 */

import * as React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export default function HeroSplitImage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="gap-1.5 py-1 px-3 text-xs border-primary/30 bg-primary/5 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Версия 2.0 уже доступна</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Создавайте интерфейсы быстрее с <span className="text-primary">AMANTLE UI</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Более 100 компонентов, блоков и шаблонов, оптимизированных для Next.js 15 и Tailwind CSS v4 с поддержкой светлой и тёмной темы.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                <span>Начать бесплатно</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Документация
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Без сторонних рантаймов</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>100% открытый код</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border bg-card/60 p-4 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl border border-border/60 bg-background/80 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">dashboard.tsx</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <div className="h-4 bg-muted/60 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted/40 rounded w-1/2" />
                <div className="h-20 bg-muted/20 rounded border border-border/40 p-3 text-[11px]">
                  &lt;ShowcaseViewer item=&#123;component&#125; /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },

  {
    name: "hero-floating-mockup",
    pascalName: "HeroFloatingMockup",
    title: "Hero Floating Mockup",
    description: "Центрированный Hero-блок с парящим мокапом интерфейса и глубоким фоновым свечением",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Centered hero with floating dashboard mockup
 */

import * as React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function HeroFloatingMockup() {
  return (
    <section className="relative overflow-hidden py-20 bg-background text-foreground text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/80 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Новое поколение дизайн-систем</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Интерфейсы, которые <span className="bg-gradient-to-r from-primary via-violet-400 to-rose-400 bg-clip-text text-transparent">вдохновляют</span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Готовые архитектурные блоки для создания SaaS, лендингов и дашбордов премиум-уровня в единой гармоничной стилистике.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
            <span>Изучить каталог</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            GitHub
          </Button>
        </div>

        <div className="pt-12">
          <div className="rounded-2xl border border-border bg-card/90 shadow-2xl p-4 max-w-4xl mx-auto backdrop-blur-xl">
            <div className="rounded-xl border border-border/60 bg-background p-8 flex flex-col items-center justify-center min-h-[220px] text-muted-foreground text-xs font-mono">
              <ShieldCheck className="h-8 w-8 text-primary mb-2" />
              <span>AMANTLE UI Workspace Canvas Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  },

  {
    name: "pricing-toggle-annual",
    pascalName: "PricingToggleAnnual",
    title: "Pricing Toggle Annual",
    description: "Тарифная сетка с интерактивным переключателем «Месяц / Год (-20%)» и акцентной карточкой",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Pricing table with monthly/annual discount switch
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export default function PricingToggleAnnual() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const tiers = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Для пет-проектов и независимых разработчиков",
      features: ["До 5 проектов", "Базовые компоненты", "Сообщество в Discord"],
      highlight: false,
    },
    {
      name: "Pro",
      priceMonthly: 29,
      priceAnnual: 23,
      description: "Для растущих SaaS и профессиональных команд",
      features: ["Все 100 компонентов", "Визуальный Composer", "MCP AI интеграция", "Приоритетная поддержка"],
      highlight: true,
    },
    {
      name: "Enterprise",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Для корпоративных дизайн-систем и масштабирования",
      features: ["Кастомные токены", "Приватный registry", "SLA 99.9%", "Аудит доступности"],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-6xl text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Прозрачные тарифы под ваши задачи</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Экономьте 20% при оформлении годовой подписки на Pro и Enterprise.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-3">
          <span className={\`text-xs font-semibold \${!isAnnual ? "text-foreground" : "text-muted-foreground"}\`}>
            Оплата помесячно
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-muted border border-border p-0.5 transition-colors relative"
          >
            <div
              className={\`w-5 h-5 rounded-full bg-primary transition-transform \${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }\`}
            />
          </button>
          <span className={\`text-xs font-semibold \${isAnnual ? "text-foreground" : "text-muted-foreground"}\`}>
            Оплата за год
          </span>
          <Badge variant="outline" className="text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
            Скидка 20%
          </Badge>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
          {tiers.map((t) => {
            const price = isAnnual ? t.priceAnnual : t.priceMonthly;
            return (
              <div
                key={t.name}
                className={\`rounded-2xl border p-6 flex flex-col justify-between transition-all \${
                  t.highlight
                    ? "border-primary bg-card shadow-xl ring-2 ring-primary/20 scale-105"
                    : "border-border bg-card/60 shadow-xs"
                }\`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                    {t.highlight && <Badge className="text-[10px]">Популярный</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-foreground">\${price}</span>
                    <span className="text-xs text-muted-foreground">/ мес</span>
                  </div>
                  <ul className="space-y-2 pt-2 text-xs text-muted-foreground">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Button className="w-full" variant={t.highlight ? "default" : "outline"}>
                    Выбрать {t.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`,
  },

  {
    name: "pricing-slider",
    pascalName: "PricingSlider",
    title: "Pricing Calculator Slider",
    description: "Интерактивный калькулятор стоимости тарифа с ползунком количества активных пользователей",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Interactive pricing slider calculator
 */

"use client";

import * as React from "react";
import { Check, Users } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function PricingSlider() {
  const [users, setUsers] = React.useState(25);

  const pricePerUser = users > 50 ? 8 : users > 20 ? 10 : 12;
  const totalPrice = users * pricePerUser;

  return (
    <div className="p-8 max-w-xl mx-auto rounded-2xl border border-border bg-card shadow-lg space-y-6">
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">Калькулятор тарифа</h3>
          <p className="text-xs text-muted-foreground">Платите только за фактическое количество мест в команде</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
          <Users className="h-3.5 w-3.5" />
          <span>{users} мест</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-xs font-semibold text-muted-foreground">
          <span>5 мест</span>
          <span>100 мест</span>
        </div>
        <input
          type="range"
          min={5}
          max={100}
          step={5}
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between bg-muted/40 p-4 rounded-xl border border-border/40">
        <div>
          <span className="text-xs text-muted-foreground block">Итоговая стоимость:</span>
          <span className="text-3xl font-extrabold text-foreground">\${totalPrice}</span>
          <span className="text-xs text-muted-foreground"> / месяц (\${pricePerUser} за пользователя)</span>
        </div>
        <Button>Оформить подписку</Button>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "feature-timeline",
    pascalName: "FeatureTimeline",
    title: "Feature Timeline",
    description: "Вертикальная интерактивная временная шкала релизов и дорожной карты (Roadmap)",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Vertical timeline feature roadmap
 */

import * as React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

export default function FeatureTimeline() {
  const milestones = [
    {
      period: "Q1 2026",
      status: "completed",
      title: "Запуск экосистемы AMANTLE UI",
      desc: "50 базовых UI-примитивов, полная типизация, интеграция с Tailwind CSS v4.",
    },
    {
      period: "Q2 2026",
      status: "active",
      title: "Релиз 100 компонентов и Showcase Playground",
      desc: "Интерактивная витрина, тулбар устройств, A/B сравнение и собственный MCP сервер.",
    },
    {
      period: "Q3 2026",
      status: "upcoming",
      title: "Визуальный конструктор страниц (Composer)",
      desc: "Drag-and-drop сборка лендингов и дашбордов с экспортом готового Next.js кода.",
    },
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h3 className="text-xl font-bold text-foreground text-center">Дорожная карта продукта</h3>
      <div className="relative border-l-2 border-border/80 ml-4 space-y-8 pl-6">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            <div
              className={\`absolute -left-[31px] top-0.5 h-6 w-6 rounded-full border-2 border-background flex items-center justify-center text-xs \${
                m.status === "completed"
                  ? "bg-primary text-primary-foreground"
                  : m.status === "active"
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-muted text-muted-foreground border-border"
              }\`}
            >
              {m.status === "completed" ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : m.status === "active" ? (
                <Sparkles className="h-3.5 w-3.5" />
              ) : (
                <Clock className="h-3.5 w-3.5" />
              )}
            </div>
            <div className="space-y-1">
              <Badge variant="outline" className="text-[10px] font-mono">
                {m.period}
              </Badge>
              <h4 className="text-sm font-bold text-foreground">{m.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "feature-bento-spotlight",
    pascalName: "FeatureBentoSpotlight",
    title: "Feature Bento Spotlight",
    description: "Современная бенто-сетка с эффектом радиального светового пятна при наведении курсора",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Bento grid with spotlight mouse tracking
 */

"use client";

import * as React from "react";
import { Zap, Shield, Cpu, Gauge } from "lucide-react";

export default function FeatureBentoSpotlight() {
  const items = [
    {
      icon: Zap,
      title: "Мгновенный рендеринг",
      desc: "Next.js 15 Server Components без клиентского оверхеда.",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      icon: Shield,
      title: "Типобезопасность",
      desc: "100% строгий TypeScript с автогенерацией схем Zod.",
      colSpan: "col-span-1",
    },
    {
      icon: Cpu,
      title: "AI-Native MCP",
      desc: "Прямой доступ к компонентам для агентов Cursor и Claude.",
      colSpan: "col-span-1",
    },
    {
      icon: Gauge,
      title: "Ультралегкий стек",
      desc: "Никаких лишних npm-библиотек, только чистые Tailwind v4 токены.",
      colSpan: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-extrabold text-foreground">Архитектурные преимущества</h3>
        <p className="text-xs text-muted-foreground">Каждая деталь выверена для максимальной производительности</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <div
              key={idx}
              className={\`rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-lg \${it.colSpan}\`}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1">{it.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "feature-comparison-matrix",
    pascalName: "FeatureComparisonMatrix",
    title: "Feature Comparison Matrix",
    description: "Таблица прямого сравнения возможностей AMANTLE UI со сторонними библиотеками",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Comparison table against competitors
 */

import * as React from "react";
import { Check, X } from "lucide-react";

export default function FeatureComparisonMatrix() {
  const rows = [
    { feature: "Tailwind CSS v4 Variables", us: true, them: false },
    { feature: "AI / MCP Сервер", us: true, them: false },
    { feature: "Интерактивный Playground", us: true, them: true },
    { feature: "Режим A/B сравнения токенов", us: true, them: false },
    { feature: "Source Provenance JSDoc", us: true, them: false },
    { feature: "Code Ownership (без npm-bloat)", us: true, them: true },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-foreground text-center">Сравнение с аналогами</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-border/80 text-muted-foreground">
              <th className="pb-3 font-semibold">Функциональность</th>
              <th className="pb-3 font-bold text-primary text-center">AMANTLE UI</th>
              <th className="pb-3 font-semibold text-center">Другие библиотеки</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="py-2.5 font-medium text-foreground">{r.feature}</td>
                <td className="py-2.5 text-center text-emerald-500 font-bold">
                  {r.us ? <Check className="h-4 w-4 mx-auto text-primary" /> : <X className="h-4 w-4 mx-auto text-rose-500" />}
                </td>
                <td className="py-2.5 text-center text-muted-foreground">
                  {r.them ? <Check className="h-4 w-4 mx-auto text-muted-foreground" /> : <X className="h-4 w-4 mx-auto text-muted-foreground/40" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "testimonials-marquee",
    pascalName: "TestimonialsMarquee",
    title: "Testimonials Marquee",
    description: "Бесконечная плавная бегущая строка с отзывами клиентов и карточками цитат",
    code: `/**
 * @source https://magicui.design/docs/components/marquee
 * @author Magic UI
 * @license MIT
 * @modified Endless marquee reviews strip
 */

import * as React from "react";
import { Star } from "lucide-react";

export default function TestimonialsMarquee() {
  const reviews = [
    { name: "Артем Смирнов", role: "CTO в FinTech", text: "Перенесли все дашборды на AMANTLE UI за 2 дня. Чистый восторг от Tailwind токенов!" },
    { name: "Анна Мельникова", role: "Product Designer", text: "Режим A/B сравнения токенов сэкономил нам недели дизайн-ревью." },
    { name: "Денис Ковалев", role: "Fullstack Dev", text: "Конвейер импорта компонентов работает как швейцарские часы. Рекомендую!" },
    { name: "Мария Соколова", role: "Frontend Lead", text: "Лучшая реализация кнопок и микро-анимаций, что я видела в React." },
  ];

  return (
    <div className="py-12 overflow-hidden bg-background text-foreground space-y-6">
      <h3 className="text-xl font-bold text-center">Что говорят разработчики</h3>
      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="w-72 rounded-xl border border-border bg-card p-4 shadow-2xs space-y-2 shrink-0"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">«{r.text}»</p>
            <div>
              <span className="text-xs font-bold text-foreground block">{r.name}</span>
              <span className="text-[10px] text-muted-foreground block">{r.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "testimonials-grid-masonry",
    pascalName: "TestimonialsGridMasonry",
    title: "Testimonials Grid Masonry",
    description: "Плиточная сетка отзывов с рейтингами, метриками и реальными аватарами пользователей",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Masonry grid testimonials
 */

import * as React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsGridMasonry() {
  const cards = [
    { name: "Сергей Лазарев", role: "SaaS Founder", text: "Наш конверт на лендинге вырос на 24% после интеграции Magnetic и Shimmer кнопок." },
    { name: "Ольга Волкова", role: "Design System Lead", text: "Единый источник истины для дизайнеров и разработчиков. Поддержка Dark Mode идеальная." },
    { name: "Илья Романов", role: "AI Engineer", text: "MCP сервер позволяет Cursor мгновенно находить нужные блоки и вставлять без ошибок." },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h3 className="text-2xl font-extrabold text-foreground text-center">Истории успеха</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between space-y-4">
            <Quote className="h-6 w-6 text-primary/40" />
            <p className="text-xs text-muted-foreground leading-relaxed">«{c.text}»</p>
            <div className="border-t border-border/40 pt-3">
              <span className="text-xs font-bold text-foreground block">{c.name}</span>
              <span className="text-[11px] text-muted-foreground block">{c.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "faq-searchable",
    pascalName: "FaqSearchable",
    title: "FAQ Searchable",
    description: "Аккордеон часто задаваемых вопросов с полем живого поиска и мгновенной фильтрацией",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Searchable FAQ accordion
 */

"use client";

import * as React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function FaqSearchable() {
  const [query, setQuery] = React.useState("");
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const questions = [
    { q: "Как начать использовать AMANTLE UI?", a: "Вы можете скопировать готовый код компонента или воспользоваться командой npx shadcn add для автоматической установки." },
    { q: "Поддерживается ли Tailwind CSS v4?", a: "Да! Все компоненты используют нативные CSS-переменные и директивы Tailwind v4." },
    { q: "Как работает MCP сервер?", a: "Сервер предоставляет AI-инструменты поиска по реестру, извлечения чистого TSX-кода и токенов темы прямо в IDE." },
    { q: "Бесплатна ли библиотека?", a: "Да, весь код распространяется под свободной лицензией MIT с сохранением атрибуции автора." },
  ];

  const filtered = questions.filter(
    (item) => item.q.toLowerCase().includes(query.toLowerCase()) || item.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-extrabold text-foreground">Часто задаваемые вопросы</h3>
        <p className="text-xs text-muted-foreground">Ответы на популярные вопросы о внедрении и лицензии</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по вопросам..."
          className="w-full h-10 rounded-lg border border-input bg-background pl-9 pr-4 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 text-left flex justify-between items-center text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown className={\`h-4 w-4 text-muted-foreground transition-transform \${isOpen ? "rotate-180" : ""}\`} />
              </button>
              {isOpen && <div className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40">{item.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "cta-split-card",
    pascalName: "CtaSplitCard",
    title: "CTA Split Card",
    description: "Конверсионная карточка призыва к действию с формой подписки на рассылку и социальным подтверждением",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Split CTA conversion card
 */

import * as React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function CtaSplitCard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Присоединяйтесь к экосистеме</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Готовы ускорить разработку вашего проекта?
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Получите доступ к обновлениям всех 100 компонентов и закрытому каналу контрибьюторов.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
          <input
            type="email"
            placeholder="Ваш рабочий email..."
            className="h-10 px-4 rounded-lg border border-input bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-full sm:w-64"
          />
          <Button className="gap-2 shrink-0">
            <span>Подписаться</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "footer-minimal-centered",
    pascalName: "FooterMinimalCentered",
    title: "Footer Minimal Centered",
    description: "Центрированный минималистичный футер со ссылками на соцсети, документацию и копирайт",
    code: `/**
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
`,
  },

  {
    name: "navbar-floating-glass",
    pascalName: "NavbarFloatingGlass",
    title: "Navbar Floating Glass",
    description: "Парящий островной навбар с матовым размытием фона и адаптивными кнопками действий",
    code: `/**
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
`,
  },

  {
    name: "dashboard-activity-feed",
    pascalName: "DashboardActivityFeed",
    title: "Dashboard Activity Feed",
    description: "Лента активности пользователей в дашборде с таймлайном, аватарами и типами действий",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Recent activity feed for dashboard
 */

import * as React from "react";
import { GitCommit, UserPlus, CheckCircle2 } from "lucide-react";

export default function DashboardActivityFeed() {
  const events = [
    { icon: GitCommit, title: "Опубликован новый релиз v2.1.0", time: "10 минут назад", user: "Артем С." },
    { icon: UserPlus, title: "Новый участник добавлен в команду", time: "1 час назад", user: "Елена В." },
    { icon: CheckCircle2, title: "Пройден аудит безопасности реестра", time: "3 часа назад", user: "CI Bot" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-foreground">Лента активности</h3>
      <div className="space-y-3">
        {events.map((ev, i) => {
          const Icon = ev.icon;
          return (
            <div key={i} className="flex items-start gap-3 text-xs">
              <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <span className="font-semibold text-foreground block">{ev.title}</span>
                <span className="text-[11px] text-muted-foreground block">{ev.user} • {ev.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,
  },

  {
    name: "dashboard-quick-actions",
    pascalName: "DashboardQuickActions",
    title: "Dashboard Quick Actions",
    description: "Панель быстрых действий дашборда для часто используемых команд и создания ресурсов",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Quick actions panel for dashboard
 */

import * as React from "react";
import { Plus, Download, Share2, Settings } from "lucide-react";

export default function DashboardQuickActions() {
  const actions = [
    { icon: Plus, label: "Новый проект", desc: "Создать проект" },
    { icon: Download, label: "Экспорт", desc: "Выгрузить JSON" },
    { icon: Share2, label: "Поделиться", desc: "Доступ по ссылке" },
    { icon: Settings, label: "Настройки", desc: "Параметры API" },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-foreground">Быстрые действия</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((act, i) => {
          const Icon = act.icon;
          return (
            <button
              key={i}
              type="button"
              className="p-3 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted hover:border-primary/40 transition-all text-center flex flex-col items-center justify-center gap-2 group"
            >
              <div className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">{act.label}</span>
                <span className="text-[10px] text-muted-foreground block">{act.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,
  },
];

export async function runBatch2() {
  console.log("🚀 Starting Batch 2: 15 Blocks for SaaS & Landings...");

  let componentsMap = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf-8");

  for (const comp of BATCH_2_BLOCKS) {
    console.log(`  Writing registry/blocks/${comp.name}.tsx...`);
    fs.writeFileSync(path.join(REGISTRY_BLOCKS, `${comp.name}.tsx`), comp.code, "utf-8");

    // Add import to components-map if missing
    const importStmt = `import ${comp.pascalName} from "@/registry/blocks/${comp.name}";\n`;
    if (!componentsMap.includes(`@/registry/blocks/${comp.name}`)) {
      componentsMap = `${importStmt}${componentsMap}`;
    }

    // Add demo to componentMap if missing
    const keyPattern = new RegExp(`(?:["']${comp.name}["']|\\b${comp.name})\\s*:`);
    if (!keyPattern.test(componentsMap)) {
      const demoSnippet = `  "${comp.name}": () => <${comp.pascalName} />,\n`;
      componentsMap = componentsMap.replace(
        "export const componentMap: Record<string, React.ComponentType<any>> = {",
        `export const componentMap: Record<string, React.ComponentType<any>> = {\n${demoSnippet}`
      );
    }
  }

  fs.writeFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), componentsMap, "utf-8");

  console.log("🏗️ Rebuilding registry manifests...");
  const total = buildRegistry();
  console.log(`✅ Batch 2 complete! Total registry items: ${total}`);
}

runBatch2().catch(console.error);
