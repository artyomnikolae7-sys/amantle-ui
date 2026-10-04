/**
 * @file scripts/onboard-150-batch-3.mjs
 * @description Onboarding Batch 3 (5 Templates: 146–150)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_TEMPLATES = path.join(ROOT_DIR, "registry", "templates");

const BATCH_3_TEMPLATES = [
  {
    name: "ai-workspace-template",
    pascalName: "AiWorkspaceTemplate",
    title: "AI Workspace Template",
    description: "Полноэкранное рабочее пространство AI-ассистента с сайдбаром чатов, областью диалога и полосой контекста",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles, MessageSquare, Plus, Send, Settings, User, Bot, Paperclip, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiWorkspaceTemplateProps {
  className?: string;
}

export default function AiWorkspaceTemplate({ className }: AiWorkspaceTemplateProps) {
  const [messages, setMessages] = React.useState([
    { role: "assistant", text: "Здравствуйте! Я AI-ассистент AMANTLE. Чем могу помочь вам сегодня в разработке интерфейсов?" },
  ]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "assistant", text: "Я обработал ваш запрос: \\"" + userMsg + "\\". Компоненты адаптированы под дизайн-токены Tailwind v4." },
    ]);
  };

  return (
    <div className={cn("flex h-[600px] w-full max-w-5xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-2xl", className)}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-muted/20 p-4 flex flex-col justify-between hidden sm:flex">
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold text-sm text-foreground">AI Workspace</span>
          </div>

          <button className="flex w-full items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors">
            <Plus className="h-4 w-4" /> Новый диалог
          </button>

          <div className="space-y-1">
            <span className="px-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Недавние</span>
            <div className="flex items-center gap-2 rounded-lg bg-muted px-2.5 py-1.5 text-xs text-foreground font-medium">
              <MessageSquare className="h-3.5 w-3.5 text-primary" /> Генерация дашборда
            </div>
            <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-muted/50 cursor-pointer">
              <MessageSquare className="h-3.5 w-3.5" /> Рефакторинг кнопок
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-border px-2">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
            U
          </div>
          <span className="text-xs font-medium text-foreground">user@amantledesign.com</span>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col justify-between p-6 bg-card">
        <div className="space-y-4 overflow-y-auto max-h-[460px] pr-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("flex gap-3 text-sm", m.role === "user" ? "justify-end" : "justify-start")}
            >
              {m.role === "assistant" && (
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-md p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed",
                  m.role === "user" ? "bg-primary text-primary-foreground font-medium" : "border border-border bg-muted/30 text-foreground"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-muted/40 p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Спросите AI ассистента..."
            className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-foreground outline-none"
          />
          <button
            onClick={handleSend}
            className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
`,
    mapCode: `  "ai-workspace-template": (props?: any) => {
    return (
      <div className="p-8">
        <AiWorkspaceTemplate />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "developer-docs-template",
    pascalName: "DeveloperDocsTemplate",
    title: "Developer Docs Template",
    description: "Шаблон документации для разработчиков: древовидная навигация, статья и оглавление 'On this page'",
    code: `/**
 * @source https://ui.shadcn.com/docs
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { BookOpen, Copy, Check, Terminal, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DeveloperDocsTemplateProps {
  className?: string;
}

export default function DeveloperDocsTemplate({ className }: DeveloperDocsTemplateProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("flex flex-col md:flex-row gap-8 max-w-5xl mx-auto w-full p-8 rounded-2xl border border-border bg-card", className)}>
      {/* Left Nav */}
      <nav className="w-52 space-y-4 shrink-0 hidden md:block border-r border-border pr-6 text-xs">
        <div className="font-bold text-foreground uppercase tracking-wider text-[11px]">Начало работы</div>
        <ul className="space-y-2 text-muted-foreground">
          <li className="font-semibold text-primary">Быстрый старт</li>
          <li className="hover:text-foreground cursor-pointer">Установка</li>
          <li className="hover:text-foreground cursor-pointer">Дизайн-токены</li>
          <li className="hover:text-foreground cursor-pointer">Темизация</li>
        </ul>
        <div className="font-bold text-foreground uppercase tracking-wider text-[11px] pt-2">Компоненты</div>
        <ul className="space-y-2 text-muted-foreground">
          <li className="hover:text-foreground cursor-pointer">Buttons (Кнопки)</li>
          <li className="hover:text-foreground cursor-pointer">Cards (Карточки)</li>
          <li className="hover:text-foreground cursor-pointer">Navigation (Навбар)</li>
        </ul>
      </nav>

      {/* Main Content */}
      <article className="flex-1 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-primary font-bold">Руководство</span>
          <h1 className="text-3xl font-black text-foreground">Быстрый старт с AMANTLE UI</h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Подключите библиотеку компонентов с чистой архитектурой и полной поддержкой Tailwind v4 за минуту.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-4 font-mono text-xs text-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span>npx amantle-ui@latest add button</span>
          </div>
          <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground">
            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground">Использование в коде</h3>
          <p className="text-xs text-muted-foreground">Импортируйте компонент в ваш React/Next.js файл:</p>
          <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground space-y-1">
            <p><span className="text-primary">import</span> &#123; Button &#125; <span className="text-primary">from</span> <span className="text-emerald-400">"@/components/ui/button"</span>;</p>
            <p><span className="text-primary">export default function</span> Page() &#123;</p>
            <p className="pl-4">return &lt;<span className="text-primary">Button</span> variant="primary"&gt;Нажми меня&lt;/<span className="text-primary">Button</span>&gt;;</p>
            <p>&#125;</p>
          </div>
        </div>
      </article>

      {/* Right On this page */}
      <aside className="w-48 shrink-0 hidden lg:block border-l border-border pl-6 space-y-2 text-xs">
        <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">На этой странице</span>
        <ul className="space-y-1.5 text-muted-foreground">
          <li className="text-primary font-medium">Введение</li>
          <li className="hover:text-foreground cursor-pointer">Команда установки</li>
          <li className="hover:text-foreground cursor-pointer">Использование в коде</li>
          <li className="hover:text-foreground cursor-pointer">Пропсы и варианты</li>
        </ul>
      </aside>
    </div>
  );
}
`,
    mapCode: `  "developer-docs-template": (props?: any) => {
    return (
      <div className="p-8">
        <DeveloperDocsTemplate />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "analytics-dashboard-template",
    pascalName: "AnalyticsDashboardTemplate",
    title: "Analytics Dashboard Template",
    description: "Аналитический дашборд продукта: карточки KPI, график динамики выручки и воронка конверсий",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { TrendingUp, Users, DollarSign, Activity, Calendar, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnalyticsDashboardTemplateProps {
  className?: string;
}

export default function AnalyticsDashboardTemplate({ className }: AnalyticsDashboardTemplateProps) {
  const cards = [
    { title: "Общий доход", val: "$45,231.89", change: "+20.1%", icon: DollarSign },
    { title: "Новые подписки", val: "+2,350", change: "+180.1%", icon: Users },
    { title: "Продажи", val: "+12,234", change: "+19.2%", icon: TrendingUp },
    { title: "Активность сессий", val: "573", change: "+201 за час", icon: Activity },
  ];

  return (
    <div className={cn("max-w-5xl mx-auto w-full p-8 rounded-2xl border border-border bg-card space-y-6 shadow-xl", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-foreground">Аналитика платформы</h2>
          <p className="text-xs text-muted-foreground mt-1">Данные за последние 30 дней</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs font-semibold text-foreground hover:bg-muted">
            <Calendar className="h-3.5 w-3.5" /> Октябрь 2026
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90">
            <Download className="h-3.5 w-3.5" /> Экспорт
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="p-5 rounded-xl border border-border bg-muted/20 space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">{c.title}</span>
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-2xl font-black text-foreground">{c.val}</div>
              <span className="text-[11px] font-bold text-emerald-400">{c.change} к прошлому месяцу</span>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-xl border border-border bg-muted/10 space-y-4">
        <h4 className="text-sm font-bold text-foreground">Динамика выручки по дням</h4>
        <div className="h-40 flex items-end justify-between gap-2 pt-6">
          {[40, 65, 55, 80, 70, 95, 85, 110, 90, 120, 105, 130].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div style={{ height: \`\${(h / 140) * 100}%\` }} className="w-full bg-primary/80 hover:bg-primary rounded-t transition-colors" />
              <span className="text-[9px] font-mono text-muted-foreground">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "analytics-dashboard-template": (props?: any) => {
    return (
      <div className="p-8">
        <AnalyticsDashboardTemplate />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "onboarding-wizard-template",
    pascalName: "OnboardingWizardTemplate",
    title: "Onboarding Wizard Template",
    description: "Многошаговый мастер первоначальной настройки аккаунта, проекта и выбора команды",
    code: `/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OnboardingWizardTemplateProps {
  className?: string;
}

export default function OnboardingWizardTemplate({ className }: OnboardingWizardTemplateProps) {
  const [step, setStep] = React.useState(1);
  const steps = ["Профиль", "Проект", "Команда", "Готово"];

  return (
    <div className={cn("max-w-xl mx-auto w-full p-8 rounded-2xl border border-border bg-card shadow-2xl space-y-8", className)}>
      {/* Progress Bar */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
        {steps.map((s, idx) => {
          const num = idx + 1;
          const isDone = num < step;
          const isCurrent = num === step;
          return (
            <div key={s} className="relative z-10 flex flex-col items-center gap-1 bg-card px-2">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors",
                  isDone ? "bg-emerald-500 text-white" : isCurrent ? "bg-primary text-primary-foreground shadow" : "border border-border bg-muted text-muted-foreground"
                )}
              >
                {isDone ? <Check className="h-4 w-4" /> : num}
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">{s}</span>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="space-y-4 py-4 min-h-[160px]">
        {step === 1 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 1: Ваше имя и роль</h3>
            <input placeholder="Иван Петров" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <input placeholder="Frontend Разработчик" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 2: Название проекта</h3>
            <input placeholder="Amantle SaaS Platform" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <input placeholder="app.amantledesign.com" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Шаг 3: Пригласить коллег</h3>
            <input placeholder="colleague@domain.com" className="w-full h-11 px-4 rounded-xl border border-border bg-muted/30 text-sm text-foreground outline-none" />
            <p className="text-xs text-muted-foreground">Вы можете пропустить этот шаг и пригласить команду позже.</p>
          </div>
        )}
        {step === 4 && (
          <div className="text-center space-y-3 py-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Всё готово к запуску!</h3>
            <p className="text-xs text-muted-foreground">Ваш рабочий проект создан и готов к добавлению компонентов.</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-muted/30 text-xs font-semibold text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Назад
        </button>

        <button
          onClick={() => setStep((s) => Math.min(4, s + 1))}
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
        >
          {step === 4 ? "Перейти в панель" : <>Далее <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
    </div>
  );
}
`,
    mapCode: `  "onboarding-wizard-template": (props?: any) => {
    return (
      <div className="p-8">
        <OnboardingWizardTemplate />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "coming-soon-waitlist-template",
    pascalName: "ComingSoonWaitlistTemplate",
    title: "Coming Soon & Waitlist Template",
    description: "Вирусная страница предзаказа/waitlist с таймером обратного отсчета и счетчиком участников",
    code: `/**
 * @source https://magicui.design/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComingSoonWaitlistTemplateProps {
  className?: string;
}

export default function ComingSoonWaitlistTemplate({ className }: ComingSoonWaitlistTemplateProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className={cn("relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-10 text-center max-w-4xl mx-auto w-full", className)}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-xl space-y-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Ранний доступ v3.0
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
          Будущее дизайн-систем уже близко
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Запишитесь в список раннего доступа, чтобы первыми получить эксклюзивный доступ к AI Composer и 150+ премиальным компонентам.
        </p>

        {submitted ? (
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5" /> Спасибо! Вы успешно добавлены в лист ожидания (#1,429).
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш рабочий email"
              required
              className="flex-1 h-11 px-4 rounded-xl border border-border bg-muted/30 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 shadow transition-opacity flex items-center justify-center gap-1.5"
            >
              Вступить <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground pt-4 border-t border-border">
          <span>👥 1,428 уже в списке</span>
          <span>•</span>
          <span>⚡ Старт через 14 дней</span>
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "coming-soon-waitlist-template": (props?: any) => {
    return (
      <div className="p-8">
        <ComingSoonWaitlistTemplate />
      </div>
    );
  },`,
    schema: {},
  },
];

async function run() {
  console.log("=== Onboarding Batch 3: 5 Templates (146-150) ===");

  // 1. Write component source files
  for (const item of BATCH_3_TEMPLATES) {
    const filePath = path.join(REGISTRY_TEMPLATES, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code.trim() + "\n", "utf8");
    console.log(`✅ Written: registry/templates/${item.name}.tsx`);
  }

  // 2. Update lib/components-map.tsx
  let mapContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf8");
  
  // Add imports
  const importLines = BATCH_3_TEMPLATES.map(
    (c) => `import ${c.pascalName} from "@/registry/templates/${c.name}";`
  ).join("\n");
  
  // Insert imports after "use client";\n\n
  mapContent = mapContent.replace('"use client";\n\n', `"use client";\n\n${importLines}\n`);

  // Insert component mappings before the closing "};"
  const mappings = BATCH_3_TEMPLATES.map((c) => c.mapCode).join("\n");
  const lastIndex = mapContent.lastIndexOf("};");
  if (lastIndex !== -1) {
    mapContent = mapContent.slice(0, lastIndex) + mappings + "\n" + mapContent.slice(lastIndex);
  }
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), mapContent, "utf8");
  console.log("✅ Updated: lib/components-map.tsx");

  // 3. Update lib/playground-schemas.ts
  let schemaContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), "utf8");
  const schemaEntries = BATCH_3_TEMPLATES.map(
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
  console.log("🎉 Batch 3 completed successfully!");
}

run().catch((err) => {
  console.error("Batch 3 error:", err);
  process.exit(1);
});
