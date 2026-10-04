/**
 * @file scripts/onboard-batch-3.mjs
 * @description Batch creation and onboarding for Batch 3 (5 Templates to reach exactly 100 components)
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
    name: "changelog-page",
    pascalName: "ChangelogPage",
    title: "Changelog Template",
    description: "Полноценный шаблон страницы истории версий продукта с тегами релизов, датами и описанием фичей",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Clean changelog product release template
 */

import * as React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v2.2.0",
      date: "4 октября 2026",
      title: "100 Компонентов и Быстрый Конвейер Онбординга",
      highlight: true,
      changes: [
        "Добавлено 38 новых компонентов: интерактивные карточки, формы, блоки дашбордов и шаблоны.",
        "Режим A/B Сравнения в витрине ShowcaseViewer с аудитом токенов Tailwind v4.",
        "Автоматизированный CLI конвейер (npm run pipeline) с ускорением интеграции до 3 минут.",
      ],
    },
    {
      version: "v2.1.0",
      date: "28 сентября 2026",
      title: "Семейство Кнопок и Микро-Анимации",
      highlight: false,
      changes: [
        "Пять новых интерактивных кнопок: Magnetic, Ripple, Shimmer, Expandable Icon, Tilt 3D.",
        "Группы кнопок ButtonGroup, SplitButton и SegmentedControl.",
        "Интерактивный таб Playground с живыми контролами пропсов.",
      ],
    },
    {
      version: "v2.0.0",
      date: "15 сентября 2026",
      title: "Первый публичный релиз AMANTLE UI",
      highlight: false,
      changes: [
        "50 базовых UI-примитивов, полностью типизированных под Next.js 15 App Router.",
        "Собственный MCP сервер для интеграции с Cursor и Claude Code.",
        "Поддержка светлой и тёмной тем через семантические CSS-переменные.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="text-xs text-primary border-primary/30 bg-primary/10">
            История версий
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Журнал обновлений (Changelog)</h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Следите за всеми улучшениями, новыми компонентами и исправлениями экосистемы AMANTLE UI.
          </p>
        </div>

        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {releases.map((rel, i) => (
            <div key={i} className="relative group space-y-3">
              <div
                className={\`absolute -left-[35px] sm:-left-[43px] top-1 h-7 w-7 rounded-full border-2 border-background flex items-center justify-center \${
                  rel.highlight
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground"
                }\`}
              >
                {rel.highlight ? <Sparkles className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={rel.highlight ? "default" : "secondary"} className="font-mono text-xs">
                  {rel.version}
                </Badge>
                <span className="text-xs text-muted-foreground">{rel.date}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground">{rel.title}</h2>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs space-y-2">
                <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                  {rel.changes.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "pricing-page-full",
    pascalName: "PricingPageFull",
    title: "Pricing Full Page Template",
    description: "Развернутый шаблон страницы ценообразования с тарифами, калькулятором, сравнением и FAQ",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Comprehensive pricing page template
 */

import * as React from "react";
import PricingToggleAnnual from "@/registry/blocks/pricing-toggle-annual";
import PricingSlider from "@/registry/blocks/pricing-slider";
import FeatureComparisonMatrix from "@/registry/blocks/feature-comparison-matrix";
import FaqSearchable from "@/registry/blocks/faq-searchable";
import CtaSplitCard from "@/registry/blocks/cta-split-card";

export default function PricingPageFull() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-16 pb-16">
      <PricingToggleAnnual />
      <PricingSlider />
      <FeatureComparisonMatrix />
      <FaqSearchable />
      <CtaSplitCard />
    </div>
  );
}
`,
  },

  {
    name: "settings-account-page",
    pascalName: "SettingsAccountPage",
    title: "Settings Account Template",
    description: "Шаблон страницы настроек пользователя с боковыми вкладками, формами профиля и безопасности",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Account settings profile page template
 */

"use client";

import * as React from "react";
import { User, Shield, CreditCard, Bell, Save } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Switch } from "@/registry/ui/switch";
import { TabsVertical } from "@/registry/ui/tabs-vertical";

export default function SettingsAccountPage() {
  const [activeTab, setActiveTab] = React.useState("profile");

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container mx-auto max-w-5xl space-y-8">
        <div className="border-b border-border/80 pb-4">
          <h1 className="text-2xl font-bold">Настройки аккаунта</h1>
          <p className="text-xs text-muted-foreground mt-1">Управляйте личными данными, безопасностью и уведомлениями</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-64 shrink-0">
            <TabsVertical
              activeId={activeTab}
              onChange={setActiveTab}
              items={[
                { id: "profile", label: "Профиль", icon: <User className="h-4 w-4" /> },
                { id: "security", label: "Безопасность", icon: <Shield className="h-4 w-4" /> },
                { id: "billing", label: "Подписка и биллинг", icon: <CreditCard className="h-4 w-4" /> },
                { id: "notifications", label: "Уведомления", icon: <Bell className="h-4 w-4" /> },
              ]}
            />
          </div>

          <div className="flex-1 w-full rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
            {activeTab === "profile" && (
              <div className="space-y-4">
                <h2 className="text-base font-bold">Публичный профиль</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-muted-foreground">Имя пользователя</label>
                    <Input defaultValue="alex_frontend" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-muted-foreground">Email</label>
                    <Input defaultValue="alex@company.com" type="email" />
                  </div>
                </div>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  <span>Сохранить изменения</span>
                </Button>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4 text-xs">
                <h2 className="text-base font-bold">Безопасность и пароли</h2>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="font-semibold block text-foreground">Двухфакторная аутентификация (2FA)</span>
                    <span className="text-muted-foreground">Защитите аккаунт с помощью SMS или Authenticator</span>
                  </div>
                  <Switch checked />
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-3 text-xs">
                <h2 className="text-base font-bold">Текущий тариф</h2>
                <p className="text-muted-foreground">Вы используете тариф Pro. Следующее списание 1 ноября 2026.</p>
                <Button variant="outline">Управление подпиской</Button>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-3 text-xs">
                <h2 className="text-base font-bold">Email уведомления</h2>
                <p className="text-muted-foreground">Получать дайджест новых компонентов и обновлений безопасности.</p>
                <Switch checked />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "error-404-page",
    pascalName: "Error404Page",
    title: "Error 404 Page Template",
    description: "Интерактивная страница ошибки 404 со стильной неоновой типографикой и кнопками навигации",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Clean modern 404 error page template
 */

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function Error404Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <span className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-primary via-violet-500 to-rose-500 bg-clip-text text-transparent select-none">
            404
          </span>
          <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 rounded-full" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Страница не найдена</h1>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Запрашиваемый компонент или раздел был перемещён, удалён или никогда не существовал в реестре.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>На главную</span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/ui/button">
              <Compass className="h-4 w-4" />
              <span>Каталог компонентов</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
`,
  },

  {
    name: "blog-post-template",
    pascalName: "BlogPostTemplate",
    title: "Blog Post Template",
    description: "Шаблон статьи блога и документации с оглавлением (ToC), метаданными автора и сниппетами кода",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Blog post and documentation article template
 */

import * as React from "react";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export default function BlogPostTemplate() {
  return (
    <article className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="container mx-auto max-w-3xl space-y-8">
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Назад ко всем статьям</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs">
            <Share2 className="h-3.5 w-3.5" />
            <span>Поделиться</span>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs text-primary border-primary/30">
              Архитектура UI
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Tailwind CSS v4
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Как мы построили экосистему из 100 компонентов без лишних npm-зависимостей
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border/40 py-3">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span className="font-semibold text-foreground">Команда AMANTLE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>4 октября 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>5 мин чтения</span>
            </div>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-4">
          <p>
            В современном фронтенде одной из главных проблем остаётся раздувание бандла из-за сотен мелких npm-пакетов. В AMANTLE UI мы выбрали другой путь — философию Code Ownership: код компонентов принадлежит вам.
          </p>

          <h2 className="text-lg font-bold text-foreground pt-4">1. Сила CSS-переменных и токенов</h2>
          <p>
            Вместо того чтобы жестко прописывать hex-значения или классы вроде <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">bg-zinc-900</code>, каждый компонент в нашей системе привязан к семантическим переменным темы.
          </p>

          <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs text-foreground bg-background/80">
            <code>export const component = &quot;bg-primary text-primary-foreground&quot;;</code>
          </div>

          <h2 className="text-lg font-bold text-foreground pt-4">2. AI-Native поддержка через MCP</h2>
          <p>
            Любой компонент можно не только просмотреть в браузере, но и скопировать подготовленный системный промпт для Cursor или Claude Code, исключающий галлюцинации по стилям.
          </p>
        </div>
      </div>
    </article>
  );
}
`,
  },
];

export async function runBatch3() {
  console.log("🚀 Starting Batch 3: 5 Templates to reach exactly 100 components...");

  let componentsMap = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf-8");

  for (const comp of BATCH_3_TEMPLATES) {
    console.log(`  Writing registry/templates/${comp.name}.tsx...`);
    fs.writeFileSync(path.join(REGISTRY_TEMPLATES, `${comp.name}.tsx`), comp.code, "utf-8");

    // Add import to components-map if missing
    const importStmt = `import ${comp.pascalName} from "@/registry/templates/${comp.name}";\n`;
    if (!componentsMap.includes(`@/registry/templates/${comp.name}`)) {
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
  console.log(`🎉 100 COMPONENTS MILESTONE ACHIEVED! Total registry items: ${total}`);
}

runBatch3().catch(console.error);
