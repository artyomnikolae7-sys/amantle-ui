> Exported with **GPTAha Free**. [Remove watermark & unlock unlimited exports →](https://www.gptaha.com/pricing?utm_source=export_watermark)

# Экосистема shadcn/ui

**User:**

Хочу shadncn разобрать на нем куча всего сделано компоненты дизайны блоки и прочее
Как я понимаю он платный, а как вообще сделать свою такую же экосистему

---

**Assistant:**

Да. И здесь есть важное уточнение: **сам официальный shadcn/ui не является просто платной библиотекой компонентов**. Его базовая идея — open-source компоненты, которые ты **копируешь в свой проект и владеешь кодом**. Платными являются отдельные коммерческие экосистемы вокруг shadcn — например каталоги premium blocks/templates. citeturn0search0turn0search6

А самое интересное для тебя: **механику такой экосистемы можно сделать самостоятельно**. Более того, сам shadcn сейчас официально предоставляет механизм **Custom Registry** именно для этого. citeturn0search1turn0search2

### Что на самом деле представляет собой «экосистема shadcn»

Если убрать красивый сайт, там несколько разных уровней:

```text
                    ТВОЯ ЭКОСИСТЕМА
                           │
             ┌─────────────┴─────────────┐
             │                           │
        DESIGN SYSTEM               CONTENT SYSTEM
             │                           │
       ┌─────┴─────┐             ┌──────┴──────┐
       │           │             │             │
   Components    Tokens        Blocks        Templates
       │           │             │             │
   Button       Colors       Hero           Landing
   Input        Radius       Pricing        Dashboard
   Dialog       Spacing      Features       Portfolio
   Table        Typography   FAQ            SaaS
       │
       └──────────────┬──────────────────────┐
                      │                      │
                  Registry               Website
                      │                      │
                 JSON catalog          поиск/фильтры
                      │                      │
                      └──────────┬───────────┘
                                 │
                              CLI / MCP
                                 │
                                 ▼
                         Установка в проект
```

То есть **компонент — это только один слой**.

Именно это я бы предложил тебе исследовать, если ты хочешь построить **свою систему уровня shadcn**, а не просто «сделать коллекцию красивых React-компонентов».

---

# 1. Самая важная вещь — Registry

У shadcn есть официальная концепция:

> **Code Registry — распределение кода между проектами.**

Registry может распространять не только UI-компоненты, но и:

- components;
- hooks;
- utilities;
- pages;
- design tokens;
- themes;
- configs;
- documentation;
- templates;
- workflows;
- AI prompts;
- rules;
- MCP-related files.

Это прямо предусмотрено текущей архитектурой registry. citeturn0search2turn0search13

Например:

```text
my-registry/

registry/
│
├── ui/
│   ├── button/
│   ├── input/
│   ├── dialog/
│   └── data-table/
│
├── blocks/
│   ├── hero/
│   ├── pricing/
│   ├── dashboard/
│   └── contact/
│
├── templates/
│   ├── portfolio/
│   ├── saas/
│   └── admin/
│
├── themes/
│   ├── dark/
│   ├── corporate/
│   └── brutalist/
│
├── hooks/
├── lib/
├── prompts/
└── rules/
```

И всё это можно описать через `registry.json`.

---

# 2. Причём тебе даже не нужно писать собственный CLI

Вот это особенно интересно.

Можно сделать:

```bash
npx shadcn add @myregistry/button
```

или:

```bash
npx shadcn add @myregistry/dashboard
```

Registry сообщает CLI:

```json
{
  "name": "dashboard",
  "type": "registry:block",
  "files": [
    {
      "path": "dashboard.tsx",
      "type": "registry:component"
    }
  ],
  "registryDependencies": [
    "button",
    "card",
    "table"
  ],
  "dependencies": [
    "recharts"
  ]
}
```

CLI сам понимает:

```text
dashboard
    │
    ├── button
    ├── card
    ├── table
    ├── recharts
    │
    └── dashboard.tsx
```

и собирает всё в пользовательский проект.

Это официально поддерживаемая архитектура. citeturn0search4turn0search9

---

# 3. Но я бы не делал просто «свой shadcn»

Вот здесь начинается гораздо более интересная часть.

Ты как раз недавно разбирал **21st.dev → components → blocks → templates → interfaces**.

Я бы объединил эти исследования.

Не:

> «Я сделаю 500 компонентов».

А:

> **Я сделаю систему, из которой компоненты можно комбинировать в интерфейсы и законченные продукты.**

Например:

```text
FOUNDATION
│
├── Colors
├── Typography
├── Spacing
├── Radius
├── Shadows
├── Icons
└── Motion
       │
       ▼
PRIMITIVES
│
├── Button
├── Input
├── Select
├── Checkbox
├── Card
├── Badge
└── Dialog
       │
       ▼
COMPOUNDS
│
├── SearchBar
├── FilterBar
├── DataTable
├── Form
├── Navigation
├── CommandMenu
└── FileUploader
       │
       ▼
PATTERNS
│
├── Authentication
├── Dashboard
├── CRUD
├── Analytics
├── Settings
├── Checkout
└── Documentation
       │
       ▼
BLOCKS
│
├── Hero
├── Pricing
├── Features
├── Testimonials
├── FAQ
├── Contact
└── Footer
       │
       ▼
PAGES
│
├── Landing
├── SaaS
├── Portfolio
├── Admin
├── Dashboard
└── Documentation
       │
       ▼
TEMPLATES
```

Вот **это уже экосистема**.

---

# 4. И можно сделать даже свою «21st.dev»

Например, сайт:

```text
my-ui.dev
```

Главная:

```text
┌──────────────────────────────────────────────┐
│ MY UI                         Components ... │
├──────────────────────────────────────────────┤
│                                              │
│ Build interfaces faster                     │
│                                              │
│ [Search components...]                       │
│                                              │
│ Components  Blocks  Templates  Themes       │
│                                              │
└──────────────────────────────────────────────┘
```

Пользователь открывает:

### Components

```text
Button
Input
Card
Table
Dialog
Tabs
Calendar
...
```

### Blocks

```text
Hero
Pricing
Dashboard
Login
Features
Testimonials
FAQ
...
```

### Templates

```text
SaaS
Portfolio
Agency
Admin
Dashboard
Documentation
...
```

### Themes

```text
Minimal
Corporate
Brutalist
Dark
Editorial
Glass
...
```

И у каждого элемента:

```text
Preview

┌────────────────────────────┐
│                            │
│     красивый компонент     │
│                            │
└────────────────────────────┘

React
Tailwind
TypeScript

[Copy] [Add to project]
```

---

# 5. А вот здесь появляется коммерческая модель

Именно так сейчас работают коммерческие проекты вокруг shadcn.

Например, существуют каталоги, где бесплатный слой даёт доступ к части блоков, а Pro открывает premium blocks, designer tooling, MCP и т. д. citeturn0search16

Но тебе **не обязательно делать подписку**.

Можно построить:

### Free

```text
100 components
30 blocks
5 templates
3 themes
```

### Pro

```text
500 components
200 blocks
50 templates
100 sections
advanced animations
premium themes
```

### Team

```text
private registry
team components
organization templates
private blocks
```

### Enterprise

```text
private registry
SSO
access control
versioning
internal design system
```

---

# 6. Причём Registry может быть приватным

Это тоже официально предусмотрено.

Registry может требовать authentication, а namespace может обращаться к защищённому endpoint. citeturn0search11

Например:

```text
@company
    │
    ▼
https://ui.company.com/r/{name}.json
    │
    ├── authentication
    ├── permissions
    └── private components
```

И тогда компания может иметь:

```bash
npx shadcn add @company/internal-dashboard
```

Это уже не просто библиотека.

Это **внутренний UI distribution system**.

---

# 7. А можно вообще сделать свою технологическую платформу

Например:

```text
                 MY DESIGN PLATFORM
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    Registry          Website           CLI
        │                │                │
        │          catalog/search        │
        │          preview               │
        │          documentation         │
        │                │                │
        └────────────────┼────────────────┘
                         │
                       MCP
                         │
                         ▼
                    AI agents
```

Тогда AI может сказать:

> Мне нужен dashboard с sidebar, data table, filters и analytics cards.

И получить:

```text
@my-ui/dashboard
@my-ui/data-table
@my-ui/filter-bar
@my-ui/analytics-card
```

Причём сам shadcn package предоставляет программные API для работы с registry — получение, разрешение и установку registry items. citeturn0search14

---

# 8. И вот тут твоя идея становится особенно интересной

Я бы пошёл ещё дальше.

Ты сейчас смотришь на:

**21st.dev**

и:

**shadcn**

как на сайты с готовыми компонентами.

Но правильнее смотреть на них как на **разные уровни одной системы**.

### Уровень 1 — Design

```text
Typography
Colors
Spacing
Grid
Motion
Radius
```

↓

### Уровень 2 — Components

```text
Button
Card
Input
Table
Dialog
```

↓

### Уровень 3 — Patterns

```text
Login form
Search
Filters
Data table
Navigation
```

↓

### Уровень 4 — Blocks

```text
Hero
Pricing
Dashboard section
Feature section
```

↓

### Уровень 5 — Interfaces

```text
SaaS Dashboard
CRM
Admin panel
Portfolio
E-commerce
```

↓

### Уровень 6 — Products

```text
SaaS starter
Admin starter
Portfolio starter
```

↓

### Уровень 7 — Distribution

```text
Website
CLI
Registry
MCP
GitHub
API
```

И **вот эта последняя часть — то, что превращает набор компонентов в экосистему**.

---

# 9. Причём технически первый MVP довольно небольшой

Не надо сразу строить огромный сервис.

Я бы сделал:

```text
my-ui/
│
├── registry.json
│
├── registry/
│   ├── ui/
│   ├── blocks/
│   └── templates/
│
├── public/
│   └── r/
│
├── app/
│   ├── components/
│   ├── blocks/
│   ├── templates/
│   └── docs/
│
└── package.json
```

Создаёшь компонент:

```text
registry/ui/animated-card/
    animated-card.tsx
```

Добавляешь его в registry.

Запускаешь:

```bash
pnpm dlx shadcn@latest build
```

И получаешь JSON registry items. citeturn0search1turn0search9

После этого любой проект может подключить твой registry.

---

# 10. А потом уже сделать настоящий каталог

Например:

```text
MY UI

Components
  ├── Forms
  ├── Navigation
  ├── Data Display
  ├── Feedback
  └── Layout

Blocks
  ├── Marketing
  ├── Dashboard
  ├── Authentication
  ├── Commerce
  └── Application

Templates
  ├── SaaS
  ├── Portfolio
  ├── Admin
  └── Documentation

Themes
  ├── Minimal
  ├── Dark
  ├── Editorial
  └── Brutalist
```

И поверх этого:

```text
[ Preview ]

[ Code ]

[ Copy ]

[ Add to project ]

[ Open in v0 ]

[ Open in Figma ]

[ Ask AI ]
```

---

## И самое важное

**Не нужно копировать shadcn.**

Нужно понять его архитектурный принцип:

> **компонент → описываемый registry item → зависимости → автоматическая установка → каталог → композиция → экосистема.**

Сам shadcn уже специально позволяет сторонним разработчикам создавать собственные registry; более того, registry может быть GitHub-репозиторием без отдельного registry-сервера. citeturn0search5

Поэтому технически ты можешь сделать:

```text
                 YOUR UI ECOSYSTEM

                     DESIGN TOKENS
                          │
                          ▼
                    COMPONENTS
                          │
                          ▼
                     PATTERNS
                          │
                          ▼
                       BLOCKS
                          │
                          ▼
                     TEMPLATES
                          │
                          ▼
                       PAGES
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
           SITE          CLI          MCP
             │            │            │
             └────────────┼────────────┘
                          ▼
                       REGISTRY
                          │
                          ▼
                    USER PROJECT
```

**И я думаю, что тебе сейчас полезнее не начинать писать код, а сначала разобрать саму архитектуру shadcn + 21st.dev.**

Причём можно сделать это очень системно: **взять shadcn, 21st.dev Community, Blocks, Templates, Registry, CLI и MCP и разложить всю экосистему на сущности, связи, форматы данных, уровни компонентов и механизм сборки интерфейса.** После этого уже спроектировать **свою архитектуру**, включая структуру GitHub-репозитория, `registry.json`, naming, категории, зависимости, preview-сайт и способ добавления компонентов через CLI.

Это будет значительно полезнее, чем просто копировать внешний вид shadcn.

---

**User:**

Есть сайт shoogle.Dev там  по сути браузер с компонентами, как бы взять все оттуда что есть и разные репозитории и затем сделать так чтобы можно было создавать блоки и компоненты копируя то что есть на этих сайтах, возможно ли это сделать? 
И сколько будет разрабатываться один компонент🤔

---

**Assistant:**

Да. И после того как я посмотрел, что сейчас представляет собой **urlShoogle.devhttps://shoogle.dev/**, идея стала гораздо понятнее: Shoogle — это фактически **поисковик/браузер по shadcn-компонентам, блокам и шаблонам из разных registry**, а не единая библиотека компонентов. citeturn0search9turn0search10

И **технически можно построить гораздо более мощную систему поверх этой идеи**.

Но есть важное различие:

> **«забрать всё с сайтов» — технически возможно не всегда и юридически нельзя автоматически считать всё разрешённым к копированию.**

Если речь идёт об open-source GitHub-репозиториях с разрешающими лицензиями — можно индексировать и импортировать их код с соблюдением лицензии и атрибуции. Для закрытых/premium компонентов нужно отдельно смотреть лицензию и условия использования.

---

# Что я бы сделал вместо простого клона Shoogle

Представь:

```text
                     COMPONENT HUB
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
    SEARCH             REGISTRIES           BUILDER
       │                   │                   │
       ▼                   ▼                   ▼
  Components          shadcn/ui             Compose
  Blocks              21st.dev              Edit
  Templates            Magic UI              Combine
  Animations           Aceternity            Generate
  Patterns             Cult UI               Save
       │                ...                  │
       └───────────────────┼───────────────────┘
                           │
                           ▼
                    YOUR COMPONENT
                           │
                    ┌──────┴──────┐
                    ▼             ▼
                  BLOCK         TEMPLATE
                    │             │
                    └──────┬──────┘
                           ▼
                    YOUR REGISTRY
```

То есть **Shoogle становится источником/индексом**, а твой сервис — **средой сборки**.

---

# 1. Самая интересная часть — собрать много registry

У shadcn уже есть официальная система registry.

Причём сейчас официальный каталог содержит **сотни community registries** — в текущем каталоге отображается 392 registry. citeturn0search10

Например условно:

```text
@shadcn
@magicui
@aceternity
@21st
@cult-ui
@some-other-registry
...
```

А registry может содержать:

```text
components
blocks
templates
themes
hooks
utilities
pages
```

Причём GitHub-репозиторий теперь вообще можно превратить в shadcn registry, просто добавив `registry.json`. citeturn0search2turn0search5

---

# 2. Поэтому первый этап можно автоматизировать

Тебе не нужно руками заходить:

```text
сайт 1
  ↓
найти компоненты

сайт 2
  ↓
найти компоненты

сайт 3
  ↓
найти компоненты
```

Можно построить:

```text
Registry Collector
        │
        ├── shadcn directory
        ├── GitHub
        ├── public registries
        ├── 21st.dev
        ├── другие каталоги
        │
        ▼
     Parser
        │
        ▼
    Normalizer
        │
        ▼
    Component DB
```

Например база:

```text
components
────────────────────────────
id
name
title
description
category
type
source
repository
author
license
registry
dependencies
registryDependencies
preview
code
version
tags
```

---

# 3. И тогда появляется твой собственный браузер

Например:

```text
┌─────────────────────────────────────────────────────┐
│ 🔍 Search components...                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Components   Blocks   Templates   Animations        │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [ Card ]        [ Dashboard ]     [ Hero ]         │
│                                                     │
│  [ Table ]       [ Pricing ]       [ Login ]        │
│                                                     │
│  [ Chart ]       [ Navbar ]        [ Gallery ]      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Но отличие от Shoogle:

### ты можешь нажать

**"Add to Builder"**

и компонент попадёт в твою рабочую область.

---

# 4. Вот тут начинается действительно интересная часть

Допустим, ты нашёл:

```text
Sidebar
```

из одного registry.

Потом:

```text
Data Table
```

из другого.

Потом:

```text
Chart
```

из третьего.

Потом:

```text
Filter
```

из четвёртого.

Ты нажимаешь:

```text
+ Add
```

и получаешь:

```text
                 MY DASHBOARD

┌────────────┐ ┌──────────────────────────────┐
│            │ │ Revenue       Users    ...  │
│ Sidebar    │ ├──────────────────────────────┤
│            │ │                              │
│ Dashboard  │ │       Chart                 │
│ Analytics  │ │                              │
│ Users      │ └──────────────────────────────┘
│ Settings   │
│            │ ┌──────────────────────────────┐
└────────────┘ │          Data Table          │
               └──────────────────────────────┘
```

И всё это **реальный React/Tailwind код**, а не просто картинка.

---

# 5. Затем «Create Block»

Вот этого в обычном каталоге уже нет.

Ты выбираешь несколько компонентов:

```text
Sidebar
+
Header
+
Stats Cards
+
Chart
+
Data Table
```

и нажимаешь:

**Create Block**

Система создаёт:

```text
registry/
└── dashboard/
    ├── dashboard.tsx
    ├── dashboard-header.tsx
    ├── stats.tsx
    └── data-table.tsx

registry.json
```

И блок становится **твоим registry item**.

Это очень хорошо ложится на существующую модель shadcn: `registry:block` может содержать несколько файлов, зависимости и зависимости от других registry items. citeturn0search3turn0search8

---

# 6. Ещё интереснее — Component Composer

Я бы сделал центральную функцию примерно такой:

```text
              COMPONENT COMPOSER

┌──────────────────────────────────────────────┐
│ Search                                       │
│ [ dashboard                         🔍 ]     │
├──────────────────────────────────────────────┤
│                                              │
│              CANVAS                         │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │ Sidebar                              │   │
│   │                                      │   │
│   │   Dashboard                          │   │
│   │   Analytics                           │   │
│   │   Users                               │   │
│   │                                      │   │
│   └──────────────────────────────────────┘   │
│                                              │
├──────────────────────────────────────────────┤
│ [Add component] [Save Block] [Export]        │
└──────────────────────────────────────────────┘
```

А справа:

```text
PROPERTIES

Width
[ 100% ]

Padding
[ 24px ]

Radius
[ 12px ]

Background
[ #fff ]

Animation
[ Fade ]
```

То есть получается **мини-Figma + shadcn registry + component marketplace**.

---

# 7. А можно дать AI доступ к этому

И вот здесь система становится очень сильной.

Например:

> Собери dashboard для строительной компании.

AI смотрит:

```text
AVAILABLE COMPONENTS

Sidebar
DataTable
Chart
StatCard
Filter
Calendar
FileUpload
```

и собирает:

```text
Construction Dashboard
│
├── Sidebar
├── Header
├── Object selector
├── Project statistics
├── Progress chart
├── Document table
├── Filter
└── Activity feed
```

А затем:

**Export**

↓

```text
React
TypeScript
Tailwind
shadcn
```

или:

```bash
npx shadcn add @myregistry/construction-dashboard
```

Shadcn как раз сейчас официально ориентирован на AI: его registry доступен AI через Skills/MCP, а API позволяет программно получать и разрешать registry items. citeturn0search11turn0search12

---

# 8. Теперь про твой вопрос: сколько делать один компонент?

Вот здесь очень сильно зависит от того, **что считать компонентом**.

Я бы разделил так:

| Уровень | Пример | Время |
|---|---|---:|
| Primitive | Button | 15–60 мин |
| Simple UI | Badge | 15–45 мин |
| Interactive | Dropdown | 1–3 ч |
| Complex | DataTable | 3–8 ч |
| Advanced | Date Picker | 4–10 ч |
| Animated | complex motion component | 2–8 ч |
| Compound | Search + Filter | 3–10 ч |
| Block | Login | 2–6 ч |
| Complex block | Dashboard | 1–3 дня |
| Template | полноценный SaaS | 3–10+ дней |

Но есть нюанс.

**Если ты не разрабатываешь компонент с нуля, а импортируешь существующий open-source компонент**, время совершенно другое.

Например:

```text
найти
 ↓
проверить license
 ↓
загрузить
 ↓
распарсить registry
 ↓
проверить dependencies
 ↓
нормализовать
 ↓
preview
 ↓
добавить metadata
```

Хорошо автоматизированный pipeline может сделать это **за секунды/минуты**.

---

# 9. Поэтому я бы вообще не ставил задачу «сделать 1000 компонентов»

Это плохая экономика.

Лучше:

```text
1000 найденных
        ↓
       700
   нормально работают
        ↓
       500
   нормализованы
        ↓
       300
   имеют preview
        ↓
       100
   качественно классифицированы
        ↓
       30
   составных систем
```

А потом:

```text
30 systems
      ↓
100 blocks
      ↓
300 variants
```

И фактически у тебя получается огромное количество комбинаций.

---

# 10. И самое интересное — компонент можно не «делать», а генерировать

Например у тебя есть:

```text
Button
Card
Input
Select
Table
Dialog
Tabs
Sidebar
Chart
```

Из них можно создавать:

```text
Login
Register
Checkout
Dashboard
Settings
CRM
Analytics
Admin
Portfolio
SaaS
```

То есть:

**10–50 primitives → сотни compound components → тысячи blocks.**

И это намного масштабируемее.

---

# 11. Я бы архитектуру твоего проекта сделал примерно такой

```text
                    COMPONENT OS
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       SOURCES         ENGINE          OUTPUT
          │              │              │
          │              │              │
      Registries       Parser          Registry
      GitHub           Normalizer      Blocks
      Websites         Composer        Templates
      APIs             Validator       Projects
          │              │              │
          └──────────────┼──────────────┘
                         │
                      DATABASE
                         │
                 ┌───────┴────────┐
                 │                │
              Browser          Builder
                 │                │
                 └───────┬────────┘
                         │
                         ▼
                        AI
```

---

# 12. И я бы добавил ещё один принцип

Каждый объект должен иметь **source provenance**.

Например:

```json
{
  "name": "animated-card",
  "source": {
    "type": "github",
    "repository": "author/repository",
    "url": "...",
    "license": "MIT",
    "author": "..."
  },
  "original": true,
  "modified": false
}
```

Если ты модифицировал:

```json
{
  "original": false,
  "derivedFrom": "author/repository/animated-card",
  "changes": [
    "changed colors",
    "added responsive behavior",
    "changed animation"
  ]
}
```

Это очень важно, если система будет агрегировать **чужие репозитории**.

---

## А теперь самое важное по твоей задумке

Я бы **не начинал с разработки сайта вообще**.

У тебя сначала должна появиться такая цепочка:

```text
ШАГ 1
Собрать 20–50 registry
        ↓
ШАГ 2
Научиться автоматически получать их metadata
        ↓
ШАГ 3
Разобрать структуру registry
        ↓
ШАГ 4
Единая БД компонентов
        ↓
ШАГ 5
Поиск
        ↓
ШАГ 6
Preview
        ↓
ШАГ 7
"Add to collection"
        ↓
ШАГ 8
Composer
        ↓
ШАГ 9
Create Block
        ↓
ШАГ 10
Export registry
        ↓
ШАГ 11
AI/MCP
```

Причём **пункты 1–4 уже можно начать делать практически без разработки сложного frontend**.

А потом получится очень мощная вещь:

> **не библиотека компонентов, а поисковая система + агрегатор registry + визуальный composer + генератор собственных blocks + собственный registry.**

И это принципиально отличается от простого клона Shoogle.

**Следующим шагом я бы сделал именно техническое исследование Shoogle:** откуда он получает данные, какие registry индексирует, как устроен поиск, что можно получить напрямую из shadcn Registry API/GitHub, какие данные можно автоматически извлекать, а какие придётся рендерить/парсить. После этого можно будет довольно точно оценить **MVP по срокам: например, 3–7 дней / 2–4 недели / 1–3 месяца**, а не гадать.

---

**User:**

Все буду делать через ии, поэтому собери информацию с документаций сначала исходный код shadncn с чего все начинается проведи глубокий анализ и затем ещё 50 сайтов по одному прочитай документацию от самых крупных до небольших проектов, react, tailwind, и прочие тоже нужны, а еще интесно canvas ui.dev

---

**Assistant:**

Сделаю это как исследование архитектуры, а не как список ссылок: сначала разберу shadcn/ui от исходного репозитория и Registry/CLI, затем сопоставлю с экосистемами React, Tailwind, Canvas/UI, component registries, builders и AI-инструментами. Для каждого проекта буду отделять **что можно переиспользовать, что нужно реализовать самому и какие лицензии/ограничения действуют**.

---

**Assistant:**

Уже виден ключевой вывод: shadcn — не «набор UI», а **протокол доставки исходного кода**. В актуальном `shadcn` package отдельно экспортируются registry/schema/MCP/preset-слои, а CLI лишь оркестрирует команды `add/search/view/build/mcp/registry`; это почти готовый фундамент для твоего агрегатора. 

---

**Assistant:**

Отдельно проверил Canvas UI: это как раз очень близкий к твоей задумке пример. Он не публикует обычный npm-пакет как основной способ распространения, а отдаёт исходники через shadcn-compatible registry; у него есть MCP, несколько фреймворков и автоматическая сборка registry из исходников. 

Это важный референс для будущей архитектуры: **один source → нормализованные компоненты → registry → сайт-документация → AI/MCP → установка исходников**.

---

**Assistant:**

Да. Я бы зафиксировал это исследование как **первый архитектурный слой будущей системы**, потому что после просмотра исходников shadcn и связанных экосистем картина существенно отличается от первоначальной идеи «собрать много компонентов».

Главный вывод:

> **Тебе не нужен собственный аналог библиотеки shadcn. Тебе нужен слой над множеством registry: индексатор → нормализатор → поиск → preview → composer → генератор собственных blocks → registry → AI/MCP.**

Ниже — результат первого глубокого прохода.

---

# 1. С чего на самом деле начинается shadcn

Официальный репозиторий — это monorepo:

```text
ui/
├── apps/
│   └── v4/
│       ├── app/
│       ├── components/
│       ├── content/
│       └── registry/
│
├── packages/
│   └── shadcn/
│       └── src/
│           ├── commands/
│           ├── registry/
│           ├── schema/
│           ├── mcp/
│           ├── utils/
│           └── ...
│
├── templates/
└── scripts/
```

Корневой `package.json` использует workspace `apps/*` и `packages/*`, а сборка организована через Turborepo. В самом репозитории сайт находится в `apps/v4`, а CLI/SDK — в `packages/shadcn`. citeturn6search4turn8search3

То есть:

```text
                    shadcn/ui
                       │
             ┌─────────┴─────────┐
             │                   │
          WEBSITE              ENGINE
             │                   │
          Next.js              CLI
          Docs                 Registry
          Preview              Schema
          Registry             MCP
                                API
```

Это уже очень близко к тому, что ты хочешь построить.

---

# 2. Самый нижний слой — CLI

Точка входа:

```text
packages/shadcn/src/index.ts
```

Там практически сразу видно архитектуру:

```text
init
apply
add
diff
docs
view
search
migrate
eject
info
build
mcp
preset
registry
```

То есть CLI — это **оркестратор**, а не место, где хранится UI. citeturn8search0

Особенно важны:

```text
add
search
view
docs
build
registry
mcp
```

Для твоей системы это практически готовая концептуальная карта.

---

# 3. Затем Registry Engine

Вот это самое важное.

В `packages/shadcn/src/registry/api.ts` есть отдельные слои:

```text
address
builder
config
constants
context
errors
fetcher
github
resolver
utils
schema
```

А публичный API экспортирует операции вроде:

```text
getRegistries()
searchRegistries()
getRegistryItems()
resolveRegistryItems()
```

То есть shadcn уже фактически имеет:

```text
Registry
    │
    ├── discover
    ├── fetch
    ├── parse
    ├── validate
    ├── search
    ├── resolve
    └── install
```

citeturn8search2

И вот **это ядро твоего проекта**.

---

# 4. Registry — это не просто JSON со списком компонентов

Например официальный registry shadcn содержит:

```json
{
  "name": "accordion",
  "type": "registry:ui",
  "dependencies": [
    "@radix-ui/react-accordion"
  ],
  "files": [
    {
      "path": "registry/new-york-v4/ui/accordion.tsx",
      "type": "registry:ui"
    }
  ]
}
```

А registry может содержать:

```text
registry:ui
registry:component
registry:block
registry:example
registry:hook
registry:lib
registry:theme
registry:style
registry:font
registry:base
...
```

Официальный `registry.json` shadcn уже содержит тысячи строк декларативного описания таких элементов. citeturn6search1turn6search14

И это принципиально.

---

# 5. Один item описывает не только код

Модель примерно такая:

```text
Component
│
├── name
├── type
├── title
├── description
├── dependencies
├── devDependencies
├── registryDependencies
├── files
├── css
├── cssVars
├── docs
├── categories
└── ...
```

То есть:

```text
                  COMPONENT
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
     CODE          DEPENDENCIES     STYLE
       │              │              │
     files        npm packages     cssVars
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                 INSTALLABLE
```

Именно поэтому registry можно использовать как **машинно-читаемый каталог**, а не просто как GitHub-папку.

---

# 6. Самая сильная возможность — зависимости между registry

Например:

```text
dashboard
│
├── @shadcn/card
├── @v0/chart
├── @acme/data-table
└── @lib/data-fetcher
```

CLI разрешает зависимости между разными registry автоматически. citeturn1search14

Получается граф:

```text
Dashboard
│
├── Card
│
├── Chart
│   └── Recharts
│
├── DataTable
│   ├── Table
│   └── Checkbox
│
└── Filter
```

Это уже не каталог.

Это **dependency graph UI**.

И я считаю, что именно его тебе стоит положить в основу будущего Composer.

---

# 7. GitHub теперь тоже является Registry

Это особенно важно для твоей задумки.

С июня 2026 года публичный GitHub repository можно сделать shadcn registry, просто добавив `registry.json`.

То есть:

```text
GitHub repository
       │
       ▼
registry.json
       │
       ▼
shadcn CLI
```

Причём сервер registry для этого не нужен. citeturn1search8turn0search0

И shadcn умеет обращаться непосредственно к:

```text
owner/repo/item
```

Для стабильности CLI разрешает branch/tag/ref к commit SHA и затем читает всё из одного snapshot репозитория. citeturn8search4

---

# 8. Вот здесь твоя идея начинает работать

Ты хочешь:

> взять shadcn + Shoogle + 21st + другие репозитории.

Теперь технически схема выглядит так:

```text
                   SOURCES
                      │
       ┌──────────────┼──────────────┐
       │              │              │
    Registry        GitHub         Website
       │              │              │
       └──────────────┼──────────────┘
                      ▼
                INGESTION ENGINE
                      │
               ┌──────┴──────┐
               ▼             ▼
            Parser       License
               │           Check
               └─────┬───────┘
                     ▼
                NORMALIZER
                     │
                     ▼
                COMPONENT DB
```

И уже **после этого** появляется Shoogle-подобный интерфейс.

---

# 9. Я просмотрел экосистему не только вокруг shadcn

Для исследования я взял следующие группы.

## Foundation

| Проект | Что изучать |
|---|---|
| React | component model |
| TypeScript | типовая модель |
| Tailwind | CSS generation |
| Next.js | application architecture |
| Vite | build/plugin architecture |
| pnpm | workspace/monorepo |
| Turborepo | orchestration |
| npm | package registry |
| GitHub API | source ingestion |

React сейчас разделяет reference на Hooks, Components, APIs и Server Components/directives; это важно для определения того, что твой агрегатор должен считать «компонентом». citeturn0search2

Tailwind v4, в свою очередь, сканирует исходники как текст и генерирует CSS только для обнаруженных utility-классов; для внешних библиотек предусмотрен `@source`. Это будет критично для твоего preview/normalization pipeline. citeturn4search0

---

# 10. Component foundations

Здесь особенно интересны:

### Radix

Headless primitives:

```text
Dialog
Popover
Select
Accordion
Tooltip
...
```

Основной принцип:

> поведение + accessibility, но не дизайн.

Radix прямо позиционируется как low-level слой для design systems. citeturn0search6

### Base UI

Ещё более интересный вариант.

Base UI:

```text
unstyled
accessible
composable
```

и не привязан к конкретной системе стилизации. citeturn4search5turn4search13

### React Aria

Очень важен для accessibility и state behavior.

React Aria предоставляет как готовые components, так и hooks, причём их можно комбинировать. citeturn0search9

И shadcn уже сделал React Aria **третьим официальным base layer** наряду с Radix и Base UI. citeturn4search3

### Ark UI

Интересен как headless foundation с несколькими framework bindings. citeturn0search8

### Headless UI

Интересен противоположной моделью:

```text
Headless + Tailwind
```

citeturn0search11

---

# 11. А потом я посмотрел системы более высокого уровня

### Chakra UI

Очень интересная модель:

```text
component
    ↓
recipe
    ↓
variants
    ↓
compoundVariants
```

То есть component styling становится декларативным объектом. citeturn0search13

Это полезно для твоего Composer.

---

### HeroUI

Уже имеет Theme Builder:

```text
colors
radius
fonts
...
↓
CSS
```

и строится на Tailwind v4 + React Aria. citeturn3search3turn3search16

---

### Park UI

Для твоей задачи **очень важный референс**.

Park UI прямо называет себя:

> component system + code distribution platform.

Он отдаёт **source code**, а не только npm dependency, использует Ark UI и делает систему AI-ready. citeturn3search6

Это почти прямой родственник твоей идеи.

---

### Kibo UI

Тоже чрезвычайно релевантен.

Это:

```text
shadcn
   +
custom registry
   +
complex components
```

Причём туда входят таблицы, file dropzones, AI chat primitives и другие функциональные компоненты. citeturn3search4turn3search15

---

# 12. Затем — визуальные/creative libraries

Исследуемая группа:

```text
Aceternity
Magic UI
21st.dev
Cult UI
Origin UI
React Bits
Tremor
Kibo UI
```

Aceternity уже поддерживает:

```bash
npx shadcn add @aceternity/component
```

а также поиск, list, view и MCP. citeturn3search0

Cult UI — ещё более показательный пример: это **не npm package**, а shadcn registry; код копируется в проект и использует существующие theme tokens. citeturn7search3

---

# 13. И вот очень интересный паттерн: AI documentation

Cult UI сейчас публикует:

```text
/llms.txt
/llms-full.txt
/docs/xxx.md
/r/registry.json
/r/{name}.json
```

То есть одна система одновременно обслуживает:

```text
human
   ↓
website

developer
   ↓
CLI

AI
   ↓
llms.txt / MCP
```

citeturn7search9

Mantine делает похожую вещь: документация генерируется в AI-friendly формате, есть `llms.txt`/`llms-full.txt` и MCP. citeturn0search12

Это для твоего проекта **очень важный архитектурный принцип**.

---

# 14. Canvas UI — особенно интересный референс

Ты отдельно спросил про него.

И да — **его обязательно стоит включить в исследование**.

Canvas UI:

```text
source components
        │
        ▼
shared engine
        │
 ┌──────┼─────────┐
 ▼      ▼         ▼
React  Vue      Svelte
 ▼
shadcn registry
 ▼
website
 ▼
MCP
```

Каждый компонент имеет:

```text
React
Solid
Preact
Vue
Svelte
Vanilla TS
```

и WebGL/WebGPU варианты. citeturn2search0turn2search1

Причём структура репозитория очень показательна:

```text
src/lib/
    component/
        Component.tsx
        Component.solid.tsx
        Component.vue
        Component.svelte
        Component.preact.tsx
        ComponentVanilla.ts
```

А:

```text
scripts/build-registry.mts
```

автоматически генерирует shadcn-compatible registry из `src/lib`. citeturn2search9

Это практически готовый reference implementation для концепции:

> **source → adapters → registry**

---

# 15. Есть ещё два совершенно других класса систем

## Canvas / visual editors

Я изучал/включил в карту:

```text
tldraw
Konva
Fabric.js
PixiJS
React Flow
React Three Fiber
Three.js
Canvas UI
```

tldraw особенно интересен как полноценный React canvas SDK: после установки ты получаешь готовый single-user canvas с drawing, text, images/video, zoom, pan, copy/paste, undo/redo. citeturn3search5

Konva интересен scene graph:

```text
Stage
 ├── Layer
 │    ├── Group
 │    │    ├── Rect
 │    │    └── Text
 │    └── ...
```

и React bindings. citeturn3search1turn3search12

Это пригодится, если твой Composer должен стать настоящим визуальным редактором.

---

# 16. Второй класс — Visual Website Builders

Я включил:

```text
Builder.io
Plasmic
GrapesJS
Craft.js
Puck
```

Потому что они отвечают на другой вопрос:

> **Как хранить интерфейс как дерево, которое пользователь может визуально редактировать?**

Это принципиально отличается от shadcn.

Shadcn:

```text
code → files
```

Visual builder:

```text
JSON tree
   ↓
renderer
   ↓
React
```

Тебе, скорее всего, потребуется **гибрид**.

---

# 17. Какой гибрид я теперь вижу

```text
                    COMPONENT OS
                         │
               ┌─────────┴─────────┐
               │                   │
          SOURCE LAYER         DESIGN LAYER
               │                   │
        GitHub / Registry       Tokens
        Website / npm           Themes
        Local files             Variants
               │                   │
               └─────────┬─────────┘
                         ▼
                    NORMALIZED
                    COMPONENT
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
           CODE        METADATA    PREVIEW
             │           │           │
             └───────────┼───────────┘
                         ▼
                    COMPONENT DB
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
            SEARCH     BUILDER     AI
              │          │          │
              ▼          ▼          ▼
           Browser     Canvas      MCP
              │          │          │
              └──────────┼──────────┘
                         ▼
                       BLOCK
                         │
                         ▼
                      TEMPLATE
                         │
                         ▼
                     REGISTRY
```

Вот это уже я считаю правильной архитектурой.

---

# 18. Почему нельзя просто скачать все 50 сайтов

Здесь появляется важная техническая граница.

Есть минимум четыре типа источников.

### A. Native Registry

```text
@shadcn
@aceternity
@cult-ui
@canvas-ui
...
```

Идеально.

Можно получить:

```text
metadata
files
dependencies
registryDependencies
```

---

### B. GitHub registry

```text
owner/repo
```

Тоже отлично.

Можно определить:

```text
registry.json
```

и читать source snapshot. citeturn8search4

---

### C. GitHub repository без registry

Тут уже нужен:

```text
repo crawler
    ↓
package.json
    ↓
src/
    ↓
components/
    ↓
README
    ↓
examples
    ↓
license
```

И **AI здесь действительно может сильно помочь**.

---

### D. Обычный сайт

Например:

```text
<section>
  <div class="...">
```

Тут нужно:

```text
crawler
HTML parser
code extractor
framework detector
Tailwind detector
license/provenance
dependency inference
```

И нельзя просто считать любой найденный HTML «компонентом».

---

# 19. Поэтому я бы ввёл Source Adapter

Это очень важное решение.

```text
sources/
│
├── shadcn/
├── github/
├── npm/
├── website/
├── 21st/
├── magic-ui/
├── aceternity/
├── canvas-ui/
└── ...
```

Каждый adapter приводит источник к единому формату:

```typescript
interface NormalizedComponent {
  id: string
  name: string
  title: string

  source: {
    provider: string
    repository?: string
    url: string
    license?: string
    author?: string
  }

  type:
    | "primitive"
    | "component"
    | "pattern"
    | "block"
    | "template"

  frameworks: string[]
  styling: string[]

  files: File[]
  dependencies: Dependency[]

  tags: string[]
  examples: Example[]

  preview?: Preview
}
```

И вот **это уже твой собственный стандарт**.

---

# 20. Отдельно про лицензии

Это будет одним из главных модулей системы.

Например:

```text
MIT
Apache-2.0
BSD
ISC
GPL
Commercial
Commons Clause
Unknown
```

Canvas UI — хороший пример того, почему нельзя делать простое `license = open source`.

У него MIT + Commons Clause: использовать в своих проектах можно, но запрещено перепродавать саму библиотеку/компоненты как товар. citeturn2search1

Следовательно:

```text
IMPORT
  ↓
LICENSE ANALYSIS
  ↓
┌───────────────┬──────────────┐
│ CAN AGGREGATE │ CAN REDISTRIBUTE
│               │
│ yes           │ depends
└───────────────┴──────────────┘
```

А для твоей платформы это должно быть автоматизировано.

---

# 21. 50+ проектов я бы разделил на такую карту

### Foundation

1. React  
2. TypeScript  
3. Tailwind CSS  
4. Next.js  
5. Vite  
6. pnpm  
7. Turborepo  
8. npm  

### Accessibility / primitives

9. Radix  
10. Base UI  
11. React Aria  
12. Ark UI  
13. Headless UI  
14. WAI-ARIA APG  

### Design systems

15. shadcn/ui  
16. Chakra UI  
17. Mantine  
18. MUI  
19. Ant Design  
20. HeroUI  
21. Park UI  
22. Kibo UI  

### Component / block ecosystems

23. Aceternity UI  
24. Magic UI  
25. 21st.dev  
26. Shoogle  
27. Cult UI  
28. Origin UI  
29. React Bits  
30. Tremor  
31. DaisyUI  
32. Flowbite  
33. Preline  
34. HyperUI  
35. Float UI  
36. TailGrids  
37. Meraki UI  
38. TW Components  

### Animation / graphics

39. Motion  
40. React Flow  
41. tldraw  
42. Konva  
43. Fabric.js  
44. PixiJS  
45. Three.js  
46. React Three Fiber  
47. Canvas UI  

### Visual builders

48. Builder.io  
49. Plasmic  
50. GrapesJS  
51. Craft.js  
52. Puck  

### Editors / AI

53. Plate  
54. Lexical  
55. Tiptap  
56. Novel  
57. Vercel AI SDK  
58. OpenAI Apps SDK  
59. MCP  

### Infrastructure

60. GitHub API  
61. Storybook  
62. Vitest  
63. Playwright  
64. Testing Library  
65. ESLint  
66. Prettier  
67. Zod  

Это уже **не 50 случайных сайтов**, а карта технологий, из которых складывается твоя система.

---

# 22. Что особенно важно: shadcn уже начал двигаться именно в эту сторону

В 2026 архитектура shadcn стала существенно шире старого:

```text
copy Button
```

Сейчас:

```text
CLI
Registry
Schemas
Presets
MCP
Skills
Multiple bases
GitHub registries
AI docs
```

Например `shadcn docs` уже умеет отдавать документацию/API для конкретного компонента, а `shadcn info` — информацию о текущем проекте для AI agent. citeturn4search6turn4search8

Registry может распространять:

```text
components
hooks
utilities
pages
design tokens
config
docs
rules
workflows
templates
MCP files
```

а не только React UI. citeturn8search4

---

# 23. MCP здесь не «дополнительная фича»

Это уже часть архитектуры.

У shadcn MCP есть инструменты:

```text
get_project_registries

list_items_in_registries

search_items_in_registries

view_items_in_registries

get_item_examples_from_registries

get_add_command_for_items
```

citeturn8search5

То есть AI может:

```text
USER
 ↓
"Найди красивый pricing block"
 ↓
MCP
 ↓
search registries
 ↓
10 результатов
 ↓
AI анализирует
 ↓
view component
 ↓
dependencies
 ↓
install
```

Именно так я бы строил и твою систему.

---

# 24. Что я считаю центральным объектом твоего проекта

Не Component.

А:

# `RegistryItem`

Потому что:

```text
Component
Block
Template
Theme
Hook
Icon
Font
Page
Workflow
Rule
Prompt
```

всё можно представить как **resource**.

Например:

```text
Resource
│
├── identity
├── source
├── license
├── files
├── dependencies
├── registryDependencies
├── metadata
├── preview
├── docs
├── examples
├── variants
└── relations
```

И тогда:

```text
Component
Block
Template
```

становятся просто:

```text
type
```

---

# 25. А Composer должен работать не с HTML

Это важный архитектурный момент.

Не стоит хранить:

```html
<div class="flex ...">
```

как основную модель.

Нужен:

```json
{
  "type": "block",
  "children": [
    {
      "type": "component",
      "ref": "@shadcn/card"
    },
    {
      "type": "component",
      "ref": "@tremor/chart"
    }
  ]
}
```

То есть:

```text
COMPONENT GRAPH
```

А потом:

```text
GRAPH
 ↓
RESOLVER
 ↓
DEPENDENCIES
 ↓
SOURCE FILES
 ↓
REACT
```

Вот тогда можно делать:

```text
drag
drop
replace
variant
theme
responsive
compose
export
```

---

# 26. И тогда AI становится не генератором кода, а оператором системы

Вместо:

> «ChatGPT, напиши мне dashboard».

Получается:

```text
AI
 │
 ├── Search
 │
 ├── Inspect
 │
 ├── Compare
 │
 ├── Compose
 │
 ├── Modify
 │
 ├── Validate
 │
 └── Export
```

Например:

> Найди 3 варианта dashboard sidebar, использующих Base UI или Radix, сравни зависимости и выбери вариант с наименьшим dependency footprint.

AI получает реальные registry metadata.

Это **намного надёжнее**, чем заставлять LLM придумывать компоненты с нуля.

---

# 27. А Canvas UI показывает ещё один очень хороший принцип

У него:

```text
ONE SOURCE
    │
    ▼
shared engine
    │
    ├── React
    ├── Vue
    ├── Svelte
    ├── Solid
    ├── Preact
    └── Vanilla
```

И registry строится автоматически.

Это можно обобщить:

```text
SOURCE COMPONENT
       │
       ▼
   ADAPTERS
       │
 ┌─────┼─────┐
 ▼     ▼     ▼
React Vue  Svelte
       │
       ▼
    Registry
```

Поэтому в перспективе твой агрегатор может понимать:

```text
React component
Vue component
Svelte component
Web Component
HTML/Tailwind snippet
```

и не смешивать их.

---

# 28. Что я бы НЕ делал

Не надо делать:

```text
❌ скачать весь интернет
❌ скопировать весь GitHub
❌ AI переписать всё в React
❌ хранить 100 000 файлов без provenance
❌ сразу делать Figma clone
❌ сразу делать полноценный visual editor
```

Это быстро превращается в мусорную свалку.

---

# 29. Правильный pipeline

Я теперь вижу его так:

```text
                 SOURCE DISCOVERY
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    Registry         GitHub         Website
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  INGESTION
                       │
                       ▼
                  LICENSE CHECK
                       │
                       ▼
                  CODE ANALYSIS
                       │
                       ▼
                 NORMALIZATION
                       │
                       ▼
               COMPONENT GRAPH
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          SEARCH              PREVIEW
             │                   │
             └─────────┬─────────┘
                       ▼
                    COMPOSER
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          Component   Block    Template
             │         │         │
             └─────────┼─────────┘
                       ▼
                 YOUR REGISTRY
                       │
              ┌────────┴────────┐
              ▼                 ▼
             CLI               MCP
              │                 │
              └────────┬────────┘
                       ▼
                       AI
```

---

# 30. И вот где я бы изменил первоначальную оценку

Ты раньше спрашивал:

> сколько делать один компонент?

Для **твоей системы** это уже неправильная единица измерения.

Нужно считать:

### Import

```text
Registry → normalized item

секунды / минуты
```

### Adapt

```text
чужой source
→ исправление
→ dependency normalization
→ preview
→ metadata

10–60 минут AI-assisted
```

### Create primitive

```text
Button / Input / Badge
```

обычно десятки минут.

### Create complex component

```text
DataTable
Editor
DatePicker
Kanban
```

часы.

### Create block

```text
Dashboard
Pricing
Hero
CRM section
```

несколько часов–день.

### Create template

```text
полный SaaS
```

несколько дней.

**Но после создания ingestion/composer pipeline AI сможет большую часть этой работы выполнять автоматически.**

---

# 31. Самое важное, что я вынес из исследования

Я бы теперь не называл проект:

> «своя библиотека компонентов».

Это слишком узко.

Ближе:

> **UI Component Intelligence Platform**

или условно:

> **UI Registry Aggregator + Composer**

Потому что система должна знать:

```text
ГДЕ компонент?
      ↓
ЧТО он делает?
      ↓
КАКОЙ у него код?
      ↓
КАКАЯ лицензия?
      ↓
КАКИЕ dependencies?
      ↓
С ЧЕМ он совместим?
      ↓
КАК его установить?
      ↓
КАКИЕ есть variants?
      ↓
КАК его использовать?
      ↓
КАК его соединить с другими?
      ↓
КАК превратить это в Block?
```

И **shadcn уже даёт нам огромную часть протокола для нижнего уровня**. Его registry API, schema, dependency resolver, GitHub source, CLI и MCP можно не изобретать заново — поверх них строится твой intelligence/discovery/composition слой. citeturn8search2turn8search4turn8search5

---

## Что я предлагаю сделать следующим этапом

Теперь я бы **не переходил сразу к написанию кода**.

Следующее исследование нужно сделать намного глубже и уже технически:

### `01 — SHADCN INTERNALS`

Разобрать буквально по исходникам:

```text
packages/shadcn/src/
├── commands/
│   ├── add
│   ├── search
│   ├── view
│   ├── build
│   ├── registry
│   └── mcp
│
├── registry/
│   ├── address
│   ├── api
│   ├── builder
│   ├── config
│   ├── context
│   ├── fetcher
│   ├── github
│   ├── resolver
│   └── search
│
├── schema/
└── mcp/
```

И восстановить **полный execution flow**:

```text
npx shadcn add @foo/bar
          ↓
parse address
          ↓
resolve registry
          ↓
fetch catalog
          ↓
search item
          ↓
validate schema
          ↓
resolve dependency tree
          ↓
fetch files
          ↓
transform imports
          ↓
install dependencies
          ↓
write files
          ↓
format
```

Уже сейчас исходники подтверждают, что именно такая декомпозиция существует: `api.ts` связывает address → builder → fetcher → GitHub → resolver → schema, а MCP поверх этого вызывает `searchRegistries`/`getRegistryItems`. citeturn8search2turn8search5

### `02 — REGISTRY PROTOCOL`

Полностью разобрать:

```text
registry.json
registry-item.json
components.json
presets
namespaces
dynamic search
GitHub registries
authentication
MCP
```

### `03 — 50+ ECOSYSTEMS`

Для каждого сделать одинаковый паспорт:

```text
SOURCE
├── repository
├── license
├── framework
├── styling
├── registry format
├── component format
├── metadata
├── dependencies
├── examples
├── preview
├── API
├── CLI
├── MCP
├── AI docs
└── what we can legally/technically ingest
```

### `04 — СОБСТВЕННЫЙ ПРОТОКОЛ`

И уже после этого спроектировать:

```text
UI Registry Protocol v1
```

который будет совместим с shadcn, но дополнительно будет хранить **source provenance, license, preview, screenshots, variants, semantic tags, component graph, compatibility и generated blocks**.

Это уже будет не копия shadcn. Это будет **надстройка над всей экосистемой** — и именно такой вариант, на мой взгляд, соответствует твоей исходной идее.

---

**User:**

Окей я хочу запустить парсеров и crawler  по всем этим сайтам чтобы выгрузить все данные ссылки код, и сами компоненты, но большинство будет просто без кода, я не понимаю в этом вообще ничего, но мне кажется что должно Работа следующим образом так что я установил грубо говоря какую-то одну систему shadcnui да например я вообще далеко от всего этого вообще не шарю я просто тупо пользуюсь нейрон Кой которая все за меня дела соответственно я просто хочу чтобы я мог сначала все спросить не рукой все коды все тексты и так далее все вот эти компоненты и конечно же я хочу их повторить чтоб потом они могли у меня использоваться полностью то есть на сайте есть Preview да и там всё как бы можно потыкать но самого кода нету открытого поэтому я вообще не понимаю как это все работает и эту думаю как это для себя полностью все спа сеть все данные со всех этих сайтов Саарсить browser ui например этим обычно пользуюсь через какое-то время когда он все пройдёт проползет все это заскриншоть или ещё я не знаю что нужно сделать потом Аля какая-то волшебная какой-то волшебная прото по типу собери мне вот это вот я скину вот этот чат который мы с тобой общались типа настрой архитектуру сам всё там сделай короче и просто потом в будущем я хочу чтобы просто какой-нибудь одной командой можно было заставить не руку просто собираюсь быстро интерфейсы детальные проработанные качественные прям как у этих компонентов просто я в основе HTML запрашиваю потому что он просто быстро делается я могу его открыть а вот вот эти вот я не понимаю как они открываются то есть если темы индекс просто тыкаешь оно открывается в браузере а тут другая какая-то система я вообще не разбираюсь не хочу этого вникать хочу просто взять чтобы оно все само запустилось настроилась и в идеале чтоб оно в интернете как-то было но наверное можно в GitHub запустить это всё то есть Pages вот эти вот ну и естественно чтобы никто не мог видеть наверно весь чистый кот хотят неважно в целом ну типа я просто хочу для себя создавать эти более какие-то вот то есть чисто визуальный сайт то есть там никаких аккаунтов я не знаю привязок оплаты вроде как не планируется но было прикольно конечно они об этом вообще не забираясь и заморачиваться пока не хочется с этим хотя хочется ну как будто бы это очень сложно и непонятно хотя вроде все делать негромко но я всё равно не понимаю что она делает

---

**Assistant:**

Да. Теперь я понимаю задачу точнее. Ты **не хочешь становиться frontend-разработчиком** и разбираться в React, Tailwind, npm, Vite, registry и т. д. Ты хочешь один раз дать ИИ задачу:

> «Настрой мне машину, которая сама собирает UI-экосистему, индексирует компоненты, умеет показывать их, вытаскивать исходники там, где это разрешено, а потом по моему текстовому запросу собирает из них готовый интерфейс».

Это вполне реалистично. Но есть одно принципиальное изменение: **не надо пытаться “вытащить код из каждого сайта”**. Нужно построить несколько способов получения исходника.

---

# 1. Что ты на самом деле хочешь получить

В конечном итоге у тебя должно быть что-то вроде:

```text
                    ТЫ
                     │
                     │
       "Сделай сайт-портфолио
        инженера ПТО"
                     │
                     ▼
                 AI AGENT
                     │
          ┌──────────┼──────────┐
          │          │          │
       SEARCH     COMPOSE    GENERATE
          │          │          │
          ▼          ▼          ▼
      Components   Blocks     Code
          │          │          │
          └──────────┼──────────┘
                     ▼
                 PROJECT
                     │
                     ▼
              Открыть браузер
```

И ты **не думаешь**:

> «А это React? А это Next? А где JSX? А что такое Tailwind?»

Ты говоришь:

> «Сделай мне dashboard в стиле этого примера, используй вот этот sidebar, вот эту таблицу и такую же анимацию».

AI всё делает.

---

# 2. И здесь есть очень хорошая новость

Тебе **не обязательно самому хранить весь исходный код**.

Например, официальный shadcn уже умеет программно:

```text
найти registry
       ↓
получить item
       ↓
разрешить dependencies
       ↓
получить файлы
       ↓
установить компонент
```

У него есть программный API для `getRegistryItems`, `resolveRegistryItems`, `addRegistryItems` и т. д. citeturn0search2

А registry item содержит не только название:

```text
name
type
description
files
dependencies
registryDependencies
css
cssVars
...
```

citeturn0search20

То есть **для shadcn-compatible источников задача уже почти решена**.

---

# 3. Shoogle — очень хороший пример того, что ты хочешь

Сейчас Shoogle индексирует огромное количество shadcn registry и показывает:

```text
Components
Blocks
Templates
AI elements
Marketing
Charts
Commerce
...
```

citeturn0search0

А его каталог registry сейчас показывает сотни registry. citeturn0search6

Но тебе нужен следующий уровень.

Shoogle:

```text
найти → посмотреть → установить
```

Ты хочешь:

```text
найти
 ↓
посмотреть
 ↓
потыкать
 ↓
забрать metadata
 ↓
забрать source, если доступен
 ↓
понять зависимости
 ↓
сохранить локально
 ↓
собрать свой вариант
 ↓
создать Block
 ↓
сохранить в свою библиотеку
 ↓
AI потом использует его автоматически
```

---

# 4. Самое важное: есть четыре разных случая

Вот здесь у тебя была главная путаница.

## Случай №1 — есть Registry

Например:

```text
@shadcn/button
@aceternity/...
@cult-ui/...
@canvas-ui/...
```

Тогда:

```text
registry JSON
      ↓
source files
      ↓
dependencies
      ↓
component
```

**Это идеальный вариант.**

Можно автоматически получить исходники.

---

# 5. Случай №2 — есть GitHub

Например:

```text
github.com/author/project
```

Если репозиторий открытый и лицензия разрешает использование:

```text
GitHub
 ↓
clone
 ↓
README
 ↓
package.json
 ↓
src
 ↓
components
 ↓
examples
 ↓
license
```

И опять получаем полноценный source.

Более того, shadcn сейчас официально позволяет превратить public GitHub repository в registry через `registry.json`. citeturn0search12

---

# 6. Случай №3 — сайт показывает Preview + Source

Это вообще замечательно.

Например:

```text
Preview

┌──────────────────────────┐
│       COMPONENT          │
│                          │
│       [ Button ]         │
│                          │
└──────────────────────────┘

[Source]
```

Тогда crawler получает:

```text
HTML
CSS
JS
source code
metadata
```

---

# 7. Случай №4 — есть только Preview

Вот это как раз то, о чём ты говоришь:

> «Я вижу компонент, могу тыкать, но кода нет».

И вот здесь **невозможно гарантированно восстановить оригинальный React/TypeScript код**.

Например браузер получил:

```html
<div class="...">
    <button>...</button>
</div>
```

Ты можешь получить:

```text
DOM
CSS
JS behavior
images
fonts
network requests
```

Но невозможно гарантированно сказать:

> «Вот исходный `Button.tsx`, который написал автор».

Потому что браузер уже получил **результат сборки**.

---

# 8. Но это не означает, что компонент потерян

Вот здесь начинается самое интересное.

Можно сделать:

```text
PREVIEW
   ↓
Browser automation
   ↓
DOM
   +
CSS
   +
computed styles
   +
screenshots
   +
interaction states
   +
network
   +
accessibility tree
   ↓
COMPONENT SPEC
   ↓
AI
   ↓
NEW IMPLEMENTATION
```

То есть мы не «крадём оригинальный код».

Мы говорим:

> **«Изучи поведение и внешний вид и реализуй эквивалентный компонент с нуля».**

---

# 9. Например crawler открывает компонент

Playwright может сделать:

```text
Open page
 ↓
Screenshot
 ↓
DOM snapshot
 ↓
Computed styles
 ↓
Click button
 ↓
Screenshot
 ↓
Click dropdown
 ↓
Screenshot
 ↓
Hover
 ↓
Screenshot
 ↓
Mobile viewport
 ↓
Screenshot
```

И получить:

```text
states/
├── default.png
├── hover.png
├── focus.png
├── active.png
├── open.png
├── mobile.png
└── dark.png
```

Плюс:

```text
component.json
```

например:

```json
{
  "name": "pricing-card",
  "states": [
    "default",
    "hover"
  ],
  "responsive": true,
  "darkMode": true,
  "interactive": true
}
```

И дальше AI может восстановить реализацию.

---

# 10. То есть твой crawler должен быть не просто crawler

Не:

```text
URL → HTML
```

А:

# UI Crawler

```text
URL
 │
 ├── metadata
 │
 ├── source detection
 │
 ├── license
 │
 ├── framework detection
 │
 ├── DOM
 │
 ├── CSS
 │
 ├── JS
 │
 ├── accessibility tree
 │
 ├── screenshots
 │
 ├── interaction states
 │
 ├── responsive states
 │
 └── source / registry
          │
          ▼
      UI RECORD
```

---

# 11. И я бы вообще не заставлял crawler сразу писать React

Это очень важный момент.

Сначала он должен создать **универсальный промежуточный формат**.

Например:

```text
data/
└── components/
    └── pricing-card/
        ├── metadata.json
        ├── source/
        ├── screenshots/
        ├── dom/
        ├── styles/
        ├── interactions/
        ├── dependencies.json
        ├── license.json
        └── provenance.json
```

И только потом:

```text
UI RECORD
     ↓
AI ADAPTER
     ↓
React + Tailwind
```

Или:

```text
UI RECORD
     ↓
Vue
```

или:

```text
UI RECORD
     ↓
HTML
```

---

# 12. Вот это решает твою проблему с HTML

Ты говоришь:

> «HTML я понимаю — открыл файл и посмотрел».

И это действительно удобно.

Поэтому я бы сделал **две формы результата**.

### Preview

```text
component.html
```

Открываешь:

```text
file:///...
```

и видишь его.

### Production

```text
component.tsx
```

для React/shadcn-проектов.

Получается:

```text
             COMPONENT
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
     HTML                 React
        │                   │
     preview              app
```

---

# 13. Но есть ещё более удобная вещь

Тебе вообще не обязательно каждый раз запускать React.

Можно сделать:

```text
preview-server
```

и открыть:

```text
http://localhost:4173
```

Там будет твой собственный каталог:

```text
MY UI LIBRARY

Search...

Components
Blocks
Templates

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Button  │ │ Card    │ │ Table   │
│ Preview │ │ Preview │ │ Preview │
└─────────┘ └─────────┘ └─────────┘
```

Ты нажимаешь компонент.

Открывается его playground.

---

# 14. И всё это может быть полностью автоматическим

Ты запускаешь буквально:

```bash
ui start
```

А дальше система:

```text
проверяет environment
        ↓
запускает database
        ↓
запускает crawler
        ↓
обновляет registry
        ↓
строит previews
        ↓
запускает UI catalog
        ↓
запускает MCP
```

И ты видишь:

```text
http://localhost:3000
```

---

# 15. А потом:

```bash
ui ask "сделай мне dashboard"
```

И AI:

```text
SEARCH
 ↓
выбирает components
 ↓
смотрит dependencies
 ↓
собирает block
 ↓
создаёт project
 ↓
запускает dev server
 ↓
открывает browser
```

Ты просто получаешь:

```text
http://localhost:3001
```

---

# 16. Можно сделать даже одну команду

Например:

```bash
ui build "портфолио инженера ПТО"
```

И система:

```text
1. Search library
2. Select design language
3. Select components
4. Compose layout
5. Generate code
6. Install dependencies
7. Run tests
8. Start browser
```

А если тебе понравился конкретный сайт:

```bash
ui learn https://example.com/component
```

Получаем:

```text
crawl
 ↓
inspect
 ↓
snapshot
 ↓
understand
 ↓
reimplement
 ↓
validate
 ↓
save
```

---

# 17. Вот где AI реально нужен

Ты говоришь:

> «Я всё буду делать через ИИ».

Это здесь даже преимущество.

Тебе не нужно лично писать:

```text
crawler.py
registry-parser.ts
component-resolver.ts
preview-builder.ts
```

Но **нужно один раз заставить AI правильно создать архитектуру**.

После этого:

```text
ты
 ↓
команда
 ↓
AI agent
 ↓
инструменты
```

---

# 18. Я бы сделал специальный AI Agent

Например:

```text
.ui-agent/
```

Внутри:

```text
.ui-agent/
├── skills/
│   ├── crawl-site/
│   ├── import-registry/
│   ├── inspect-component/
│   ├── reconstruct-component/
│   ├── compose-block/
│   ├── create-template/
│   ├── validate-ui/
│   └── publish-registry/
│
├── rules/
│   ├── licenses.md
│   ├── component-quality.md
│   ├── naming.md
│   └── architecture.md
│
└── config.yaml
```

Ты потом говоришь AI:

> «Добавь мне компоненты из Canvas UI».

Agent сам:

```text
исследует
 ↓
находит registry
 ↓
загружает
 ↓
проверяет license
 ↓
импортирует
 ↓
строит preview
 ↓
индексирует
```

---

# 19. Причём Canvas UI здесь очень хороший тестовый источник

У него как раз есть registry и source architecture.

Поэтому можно начать не с 50 сайтов.

Сначала:

```text
shadcn
+
Canvas UI
+
один-два других registry
```

И проверить весь pipeline.

Если получилось:

```text
SOURCE
 ↓
IMPORT
 ↓
NORMALIZE
 ↓
PREVIEW
 ↓
SEARCH
 ↓
COMPOSE
 ↓
EXPORT
```

тогда подключать остальные 50 источников уже будет вопросом **написания adapters**, а не перестройки всей системы.

---

# 20. И Shoogle можно использовать как discovery layer

Это вообще очень полезно.

Сейчас его каталог показывает сотни registry и десятки тысяч элементов. citeturn0search1

Причём там уже есть:

```text
/items.json
/directory.json
/openapi.json
/r/...
```

для machine-readable доступа. citeturn0search1

То есть первый crawler даже не обязан ползать по 400 сайтам.

Можно:

```text
Shoogle / registry.directory
          ↓
получить список registry
          ↓
для каждого registry
          ↓
найти официальный source
          ↓
получить registry.json
          ↓
получить components
```

Это **намного быстрее и надёжнее**.

---

# 21. Причём есть ещё один прекрасный пример

На Shoogle есть registry, где структура уже примерно такая:

```text
registry/
├── components/
├── blocks/
├── examples/
├── manifest
├── generated/
└── public/r/
```

И preview генерируется автоматически.

То есть это уже практически reference architecture для твоей системы. citeturn0search14

---

# 22. А собственный Registry потом будет очень простым

Допустим AI создал:

```text
construction-dashboard
```

Система делает:

```text
my-registry/
│
├── registry.json
│
├── registry/
│   └── construction-dashboard/
│       ├── dashboard.tsx
│       ├── sidebar.tsx
│       └── stats.tsx
│
└── public/
    └── r/
        ├── registry.json
        └── construction-dashboard.json
```

`shadcn build` как раз предназначен для генерации этих `public/r/*.json`. citeturn0search4

---

# 23. Потом твой AI сможет использовать собственную библиотеку

Например:

```text
"Сделай сайт из моих компонентов"
```

AI сначала смотрит:

```text
MY LIBRARY
├── 327 components
├── 84 blocks
├── 16 templates
└── 12 themes
```

и только если ничего подходящего нет:

```text
EXTERNAL REGISTRIES
```

---

# 24. И вот это уже очень похоже на «волшебную кнопку»

Ты:

```text
ui create
```

AI:

```text
Что создаём?
```

Ты:

> Сайт-портфолио инженера ПТО. Темный интерфейс, много данных, интерактивная карта объектов, кейсы автоматизации, современный industrial SaaS style.

AI:

```text
Searching local library...

✓ Dashboard shell
✓ Sidebar
✓ Data table
✓ Timeline
✓ Metrics cards
✓ Map container
✓ Case-study block
✓ Command menu
✓ Dialog
✓ Tabs

Building...
```

Через некоторое время:

```text
✓ Project created
✓ Dependencies installed
✓ Typecheck passed
✓ Build passed

Open:
http://localhost:3000
```

Вот **это** я бы считал целью проекта.

---

# 25. Теперь про GitHub Pages

Здесь я бы **не делал основную систему на GitHub Pages**.

GitHub Pages хорош для:

```text
catalog
documentation
public previews
```

Но плохо подходит как:

```text
crawler
database
AI agent
dynamic backend
private source storage
```

И есть ещё принципиальный момент: если репозиторий private на GitHub Free, опубликованный Pages-сайт будет автоматически снят с публикации. citeturn0search5

Поэтому:

### Локально

```text
Crawler
Database
Source
AI
MCP
Composer
```

### GitHub

```text
private repository
↓
backup
↓
version control
```

### Pages

```text
только если потом захочешь
публичный каталог
```

---

# 26. Если хочется, чтобы «оно было в интернете»

Я бы сделал иначе:

```text
                    INTERNET
                        │
                  ┌─────┴─────┐
                  │           │
               Website      API
                  │           │
                  └─────┬─────┘
                        │
                    PRIVATE
                    BACKEND
                        │
              ┌─────────┼─────────┐
              │         │         │
            DB        Source      AI
```

А для личного использования:

```text
VPN / authentication
```

То есть ты заходишь с телефона/ПК, а никто другой не видит библиотеку.

---

# 27. Но я бы сейчас вообще не заморачивался с аккаунтами

Ты правильно говоришь:

> «не хочу пока заморачиваться».

На первой версии:

```text
❌ accounts
❌ payments
❌ subscriptions
❌ teams
❌ public marketplace
❌ social features
```

Только:

```text
✓ local
✓ private
✓ crawler
✓ registry
✓ search
✓ preview
✓ AI
✓ composer
✓ export
```

---

# 28. И ещё один важный момент — «скриншотить всё»

Я бы **не делал скриншот главным источником данных**.

Скриншот нужен как:

```text
visual reference
```

А основной набор:

```text
source
+
metadata
+
DOM
+
CSS
+
interaction states
+
screenshot
```

То есть:

```text
SOURCE ─────────────┐
                    │
DOM ────────────────┤
                    ├──> COMPONENT RECORD
CSS ────────────────┤
                    │
INTERACTIONS ───────┤
                    │
SCREENSHOTS ────────┘
```

---

# 29. Что делать с компонентом, у которого вообще нет source

Вот здесь AI может сделать:

```text
Preview
   ↓
Playwright
   ↓
DOM + CSS + screenshots
   ↓
AI
   ↓
React implementation
   ↓
Browser
   ↓
visual comparison
   ↓
difference
   ↓
AI fixes
   ↓
repeat
```

Это уже **visual reverse-engineering loop**.

Например:

```text
original.png
     │
     │ comparison
     ▼
generated.png
     │
     ▼
AI:
"spacing отличается,
border radius 4px,
font weight неверный"
     │
     ▼
patch
     │
     ▼
render again
```

И так несколько итераций.

Это намного ближе к твоей цели, чем простой scraping.

---

# 30. Но это должен быть отдельный режим

Я бы сделал три режима импорта:

```text
IMPORT
│
├── REGISTRY
│     └── максимально точный source
│
├── GITHUB
│     └── source + metadata
│
└── VISUAL
      └── browser → AI reconstruction
```

И в базе прямо хранить:

```text
source_type:
    registry
    github
    website-source
    reconstructed
```

Тогда ты всегда понимаешь происхождение компонента.

---

# 31. И очень важно не смешивать оригинал и реконструкцию

Например:

```text
Aceternity / original
```

и:

```text
Aceternity-inspired / reconstructed
```

должны быть разными сущностями.

Это полезно и технически, и с точки зрения лицензий/атрибуции.

---

# 32. Что я предлагаю сделать практически

Не пытаться сразу:

> «запусти crawler на 50 сайтов».

Это почти гарантированно создаст огромную помойку.

Сначала делаем **MVP на 3 источниках**:

```text
1. shadcn/ui
2. Canvas UI
3. один большой community registry
```

Pipeline:

```text
SOURCE
 ↓
DISCOVER
 ↓
IMPORT
 ↓
LICENSE
 ↓
NORMALIZE
 ↓
DATABASE
 ↓
PREVIEW
 ↓
SEARCH
 ↓
AI
 ↓
EXPORT
```

И только когда он работает:

```text
+ 10
+ 20
+ 50
+ 100 registries
```

---

# 33. Тебе при этом вообще не нужно понимать код

Вот это принципиально.

Твоя роль:

```text
              ТЫ
               │
        естественный язык
               │
               ▼
            AI AGENT
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
    Crawler  Registry  Builder
       │       │        │
       └───────┼────────┘
               ▼
             DATA
               │
               ▼
            PROJECT
```

Ты не обязан знать, что такое:

```text
React
JSX
TSX
npm
pnpm
Vite
Next.js
Tailwind
MCP
```

Но **AI должен знать**.

---

# 34. Поэтому следующий документ, который нам реально нужен

Не ещё один обзор сайтов.

А полноценное **ТЗ для AI Agent**, примерно:

# `UI-Ecosystem OS v0.1`

```text
GOAL

Создать локальную/private систему, которая:

1. обнаруживает UI registries;
2. индексирует их;
3. получает source;
4. определяет license;
5. делает browser preview;
6. сохраняет screenshots;
7. анализирует components;
8. позволяет искать;
9. позволяет AI собирать blocks;
10. позволяет сохранять собственные blocks;
11. экспортирует их как shadcn registry;
12. предоставляет MCP;
13. запускает проекты одной командой.
```

А дальше:

```text
ARCHITECTURE
DATABASE
FOLDER STRUCTURE
CRAWLER
REGISTRY ENGINE
BROWSER ENGINE
AI AGENT
MCP
COMPOSER
PREVIEW SERVER
LICENSE ENGINE
GITHUB
DEPLOYMENT
SECURITY
```

И уже **AI сам будет писать этот проект поэтапно**.

---

## Самое главное

Твоя идея **реализуема**, причём гораздо проще, чем тебе сейчас кажется, потому что ты не начинаешь с нуля.

У тебя уже есть:

**shadcn Registry** → протокол распространения исходников. citeturn0search7  
**Shoogle / registry.directory** → discovery огромного количества registry. citeturn0search1  
**GitHub registries** → источник исходного кода. citeturn0search12  
**Playwright** → браузерное исследование preview.  
**Canvas UI** → хороший пример source → registry → preview.  
**MCP** → интерфейс между твоей библиотекой и AI.  
**shadcn API** → программный механизм получения/разрешения/установки компонентов. citeturn0search2

Поэтому твоя «волшебная система» в конечном счёте может выглядеть для тебя буквально так:

```text
┌──────────────────────────────────────────┐
│              MY UI BRAIN                 │
│                                          │
│ 🔎 Search UI...                          │
│                                          │
│ Components   Blocks   Templates   Sites  │
│                                          │
│ ┌────────┐ ┌────────┐ ┌────────┐        │
│ │ Button │ │Dashboard│ │ Pricing│        │
│ │        │ │        │ │        │        │
│ └────────┘ └────────┘ └────────┘        │
│                                          │
│              [ BUILD ]                   │
└──────────────────────────────────────────┘
```

А снаружи тебе вообще достаточно будет:

```bash
ui create "сделай современный сайт-портфолио инженера ПТО"
```

или:

```bash
ui learn https://some-site.com/component
```

или:

```bash
ui import @some-registry
```

или:

```bash
ui crawl https://some-site.com
```

А дальше **агент сам делает всю грязную работу**.

И именно поэтому я бы следующим сообщением уже составил **не просто ТЗ, а готовый master-prompt/план для Cursor/Claude Code/Codex**, который создаст эту систему по этапам: какие папки создать, какие агенты/skills сделать, какие библиотеки поставить, как устроить crawler, БД, Playwright, shadcn Registry, визуальную реконструкцию, MCP и одну команду `ui`. Это позволит тебе буквально отдать этот документ ИИ и начать сборку.

---

**User:**

Просто когда я скриншотами, вот я просил нейронку, просто, типа, никакие библиотеки не скачивал, ничего, просто нейронку попросил, типа, сделай в точности так, как вот на скриншотах. И даже, по-моему, видео снимал, то есть полностью написал, типа, полностью повтори тоже там поведение кнопок и так далее. То по итогу всё равно получалась полная лажа, дизайн вообще не тот. Ну, это я делал в Джемини. То вот там зачастую всегда шрифтов никаких нету, иконки автоматически никакие нормальные не подключаются, типа Lucid. Потом выравнивание там идёт просто по кривой, там все элементы, если они разворачиваются, они в итоге не адаптируются. Короче, вообще максимально всё фигово. И, типа, какая-то, видимо, должна быть инструкция или прям код вот этого системы дизайна для компонентов, всяких элементов и так далее, чтобы, типа, всегда адаптированный был интерфейс и не надо было никогда что-то перепроверять. То есть уже, по сути, вот есть готовые уже варианты, как там всё это делать. И, типа, в общем вот так.

---

**Assistant:**

Да. Здесь проблема не в том, что Gemini «плохо видит скриншот». Ты пытаешься заставить модель **восстановить полноценную дизайн-систему из визуального результата**, а одного скриншота или даже видео для этого недостаточно.

И вот это как раз очень хорошо объясняет, **зачем тебе нужна вся система, которую мы обсуждали**.

### Что сейчас происходит

Когда ты говоришь нейронке:

> «Сделай точно как на этом скриншоте»

она примерно должна сама догадаться:

- какой шрифт;
- какие font-weight;
- размеры текста;
- line-height;
- letter-spacing;
- сетка;
- максимальная ширина контейнера;
- spacing scale;
- размеры компонентов;
- border-radius;
- цвета;
- тени;
- breakpoints;
- поведение flex/grid;
- состояния hover/focus/active/disabled;
- раскрытие элементов;
- анимации;
- какие иконки используются;
- какие иконки имеют какой размер;
- как ведёт себя интерфейс на 768 / 1024 / 1440 px;
- что происходит при длинном тексте;
- что происходит при отсутствии данных;
- что происходит при раскрытии карточки;
- какие компоненты являются общими;
- какие компоненты вложены друг в друга.

То есть из картинки ей приходится **галлюцинировать скрытые правила системы**.

Поэтому получается:

> визуально похоже на первый взгляд → при ближайшем рассмотрении разваливается.

---

# А тебе нужен другой подход

Не:

```text
СКРИНШОТ
   ↓
AI
   ↓
HTML
```

а:

```text
ИСТОЧНИК / ГОТОВЫЙ КОМПОНЕНТ
          ↓
   DESIGN SYSTEM
          ↓
   COMPONENT MODEL
          ↓
 RESPONSIVE RULES
          ↓
INTERACTION MODEL
          ↓
      AI COMPOSER
          ↓
       INTERFACE
          ↓
      AUTOMATED QA
```

И вот **Design System + Component Model + Automated QA** — это три вещи, которых не хватает обычной генерации по скриншоту.

---

# Причём тебе вообще не нужно самому придумывать эту систему

Самое важное.

Ты правильно говоришь:

> «Уже есть готовые варианты, как всё это делать».

Да.

Нам не надо изобретать собственную философию UI с нуля.

Нужно собрать **мета-систему поверх уже существующих систем**.

Например:

### База компонентов

- shadcn/ui
- Radix
- Base UI
- React Aria
- Ark UI

### Готовые визуальные системы

- 21st.dev
- Magic UI
- Aceternity
- Origin UI
- Kibo UI
- Park UI
- Cult UI
- Canvas UI
- Tremor

### Иконки

Например:

- Lucide
- Tabler
- Phosphor
- Hugeicons

### Typography

Не просто:

```css
font-family: Arial;
```

а система:

```text
font family
font scale
font weight
line height
letter spacing
heading hierarchy
body hierarchy
numeric typography
```

### Layout

Не:

```css
margin-left: 37px;
```

а:

```text
container
grid
spacing scale
alignment rules
breakpoints
min/max widths
content density
```

### Responsive

Не:

```text
"сделай адаптивным"
```

а конкретные правила:

```text
mobile
tablet
desktop
wide desktop

navigation:
desktop → horizontal
tablet → compressed
mobile → drawer

grid:
4 → 2 → 1

sidebar:
visible → collapsible → drawer
```

---

# И самое интересное — это можно сделать машинно

Например, если мы импортируем компонент из хорошего источника, система должна хранить не только:

```text
Button.tsx
```

а примерно:

```text
Button
│
├── anatomy
│   ├── icon
│   ├── label
│   └── loading indicator
│
├── variants
│   ├── default
│   ├── secondary
│   ├── destructive
│   ├── outline
│   └── ghost
│
├── sizes
│   ├── sm
│   ├── md
│   └── lg
│
├── states
│   ├── default
│   ├── hover
│   ├── active
│   ├── focus
│   ├── disabled
│   └── loading
│
├── responsive
│
├── accessibility
│
├── dependencies
│
├── typography
│
├── spacing
│
├── icon rules
│
└── visual rules
```

И тогда AI не нужно каждый раз изобретать кнопку.

Он получает:

> «Мне нужна primary action button»

и достаёт **известный, проверенный объект**.

---

# То же самое должно быть для каждого компонента

Например:

```text
DataTable
Modal
Dialog
Dropdown
Select
Tabs
Accordion
Sidebar
Navbar
Card
Form
Input
DatePicker
Command Menu
Tooltip
Toast
Chart
Pagination
File Upload
Kanban
Dashboard
Pricing
Hero
Footer
```

Но ещё выше должны существовать **паттерны**.

Например:

```text
Authentication
Dashboard
Settings
Analytics
E-commerce
Portfolio
Documentation
Admin panel
CRM
Landing page
SaaS
AI application
```

То есть AI должен мыслить не:

> «Как мне нарисовать этот экран?»

а:

> «Какой UI-паттерн здесь используется и из каких проверенных компонентов он должен состоять?»

---

# А скриншоты тогда становятся не источником истины

Это принципиальное изменение.

Скриншот:

```text
REFERENCE
```

а не:

```text
SOURCE OF TRUTH
```

Например, ты показываешь:

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["modern SaaS dashboard UI design","modern admin dashboard responsive UI","modern settings page UI design"],"num_per_query":1}

Система должна извлечь из него:

```text
Page
 ├── Sidebar
 ├── Header
 ├── Breadcrumbs
 ├── Page heading
 ├── Action group
 ├── Filter bar
 ├── Data table
 └── Pagination
```

А дальше:

```text
Sidebar       → existing component
Header        → existing component
Filter        → existing component
DataTable     → existing component
Pagination    → existing component
```

И только если нужного компонента **нет в библиотеке**, AI создаёт новый.

---

# И вот здесь появляется ещё одна очень важная часть

Ты сказал:

> «чтобы всегда адаптированный был интерфейс и не надо было никогда что-то перепроверять»

Вот это невозможно гарантировать просто хорошим промптом.

Но можно сделать гораздо лучше:

## AI не должен иметь право считать интерфейс готовым, пока он его не проверил.

Например:

```text
GENERATE
   ↓
BUILD
   ↓
TYPECHECK
   ↓
LINT
   ↓
OPEN BROWSER
   ↓
1440px screenshot
   ↓
1024px screenshot
   ↓
768px screenshot
   ↓
390px screenshot
   ↓
INTERACTION TEST
   ↓
VISUAL COMPARISON
   ↓
ACCESSIBILITY CHECK
   ↓
OVERFLOW CHECK
   ↓
FAIL?
 ┌─┴─┐
YES  NO
 ↓    ↓
FIX  DONE
 ↓
RETEST
```

То есть **Playwright должен стать частью генератора**, а не отдельной штукой для разработчиков.

---

# Например, AI создал карточку

Система автоматически проверяет:

```text
✓ no horizontal overflow
✓ text does not overlap
✓ buttons fit
✓ icons exist
✓ icon size consistent
✓ typography valid
✓ spacing valid
✓ mobile layout valid
✓ tablet layout valid
✓ desktop layout valid
✓ hover state works
✓ keyboard focus works
✓ expandable state works
```

Если на 390 px:

```text
CARD WIDTH = 358px
CONTENT WIDTH = 370px
```

система получает:

```text
FAIL: horizontal overflow
```

AI автоматически исправляет.

---

# И ещё одна вещь, которую ты заметил правильно

Ты говоришь:

> «шрифтов никаких нету, иконки автоматически никакие нормальные не подключаются»

Это потому что обычный AI часто генерирует:

```tsx
<i className="...">
```

или вообще:

```text
[icon]
```

вместо того чтобы иметь **разрешённый каталог ресурсов**.

В нашей системе это должно быть запрещено.

Например:

```text
ICON POLICY

Lucide
  ↓
search
  ↓
Icon = Settings
  ↓
size = 16
stroke = default
```

Если подходящей иконки нет:

```text
DO NOT INVENT SVG
DO NOT USE EMOJI
DO NOT USE RANDOM ICON
```

Аналогично со шрифтами.

---

# Поэтому я бы немного изменил архитектуру нашего проекта

Раньше мы говорили:

```text
Registry
↓
Components
↓
Composer
```

Теперь я бы сделал:

```text
                 ┌─────────────────────┐
                 │   SOURCE ECOSYSTEM  │
                 │                     │
                 │ shadcn              │
                 │ 21st                │
                 │ Canvas UI           │
                 │ Magic UI            │
                 │ Aceternity          │
                 │ Origin              │
                 │ GitHub              │
                 │ etc.                │
                 └──────────┬──────────┘
                            ↓
                    INGESTION ENGINE
                            ↓
                 ┌─────────────────────┐
                 │   UI KNOWLEDGE DB   │
                 │                     │
                 │ components          │
                 │ blocks              │
                 │ templates           │
                 │ dependencies        │
                 │ design tokens       │
                 │ typography          │
                 │ icons               │
                 │ responsive rules    │
                 │ interactions        │
                 │ accessibility       │
                 │ licenses            │
                 │ provenance          │
                 └──────────┬──────────┘
                            ↓
                  COMPONENT GRAPH
                            ↓
                 ┌─────────────────────┐
                 │   AI UI COMPOSER    │
                 │                     │
                 │ search              │
                 │ select              │
                 │ compose             │
                 │ modify              │
                 │ generate            │
                 └──────────┬──────────┘
                            ↓
                      CODE GENERATOR
                            ↓
                     BROWSER RUNTIME
                            ↓
                   AUTOMATED QA LOOP
                            │
                    ┌───────┴───────┐
                    ↓               ↓
                 PASS              FAIL
                    ↓               ↓
                  DONE ←────────── FIX
```

Вот **это уже совершенно другой уровень**, чем «нейронка сделала сайт по скриншоту».

---

## И я бы добавил ещё один слой — Design Intelligence

Это фактически **мозг всей системы**.

Он хранит правила вроде:

```text
DESIGN SYSTEM

Typography
Spacing
Grid
Container
Color
Radius
Shadow
Elevation
Iconography
Motion
Breakpoints
Density
Accessibility
Component anatomy
Component states
Responsive behavior
```

Причём эти правила можно не придумывать вручную.

Мы можем **исследовать существующие дизайн-системы и компоненты**, вытащить из них закономерности и сформировать собственную нормализованную модель.

И именно поэтому твоя идея с исследованием **21st.dev → Canvas UI → shadcn registries → другие экосистемы** становится гораздо важнее.

Мы фактически исследуем не просто:

> «где скачать красивые компоненты»

а:

> **«как профессиональные UI-системы кодируют правила, из которых эти компоненты собираются»**.

И это уже то, что действительно способно решить твою проблему с Gemini.

**То есть я бы сейчас не переходил сразу к написанию кода. Следующий этап — исследовать именно внутреннюю структуру компонентов и дизайн-систем: anatomy → tokens → variants → states → responsive → composition → validation.** После этого можно сформировать для твоего проекта единый `UI Design Intelligence Specification`, который AI будет использовать как обязательный контракт при любой генерации.

---

**User:**

Да, всё вот это сделай сейчас, исследуй всё, что ты там написал, да. Короче, продолжай рыть в этом направлении, постоянно углубляясь, углубляясь и углубляясь.

---

**Assistant:**

Да. Я углублю исследование именно до уровня **правил, токенов, anatomy, состояний, responsive/composition и автоматической валидации**, а не просто каталога красивых компонентов. Затем сведу это в единую модель, которую можно будет превратить в спецификацию для нашего генератора.

---

**Assistant:**

Уже виден важный результат: профессиональные системы действительно разделяют **визуальные решения** и **поведение компонентов**. Например, shadcn в 2026 году отдельно добавил структурированные Composition Trees именно потому, что агенты лучше собирают интерфейс, когда знают допустимую иерархию компонента. 

---

**Assistant:**

Да. Я продолжил именно в эту сторону и теперь картина стала существенно яснее.

Главный вывод: **тебе нужен не “генератор интерфейсов по скриншоту” и даже не просто “агрегатор компонентов”. Тебе нужен движок, который знает, как устроен хороший UI, из каких атомарных правил он собирается, какие состояния допустимы, как компоненты компонуются, как они ведут себя в разных размерах и как автоматически доказать, что результат не развалился.**

Ниже — уже не первоначальная идея, а результат углубления исследования.

---

# 1. Самое важное открытие

Я раньше формулировал систему примерно так:

```text
компоненты
    ↓
блоки
    ↓
шаблоны
    ↓
AI
```

Этого **недостаточно**.

Профессиональные дизайн-системы устроены значительно глубже.

Фактически:

```text
DESIGN LANGUAGE
       ↓
DESIGN TOKENS
       ↓
PRIMITIVES
       ↓
COMPONENT ANATOMY
       ↓
VARIANTS
       ↓
STATES
       ↓
BEHAVIOR
       ↓
COMPOSITION
       ↓
PATTERNS
       ↓
BLOCKS
       ↓
PAGES
       ↓
PRODUCT
```

И ещё параллельно:

```text
ACCESSIBILITY
RESPONSIVENESS
MOTION
CONTENT
VALIDATION
TESTING
```

Именно этого слоя не хватает Gemini, когда ему просто дают скриншот.

---

# 2. Что реально представляет собой современный компонент

Возьмём условную кнопку.

Наивная модель:

```tsx
<Button>Save</Button>
```

Для нашей системы это должно быть примерно:

```text
BUTTON
│
├── identity
│
├── anatomy
│   ├── root
│   ├── icon
│   ├── label
│   └── loading indicator
│
├── semantic role
│   └── button
│
├── variants
│   ├── primary
│   ├── secondary
│   ├── outline
│   ├── ghost
│   └── destructive
│
├── sizes
│   ├── xs
│   ├── sm
│   ├── md
│   ├── lg
│   └── xl
│
├── states
│   ├── default
│   ├── hover
│   ├── focus
│   ├── pressed
│   ├── disabled
│   ├── loading
│   └── pending
│
├── content
│   ├── text
│   ├── leading icon
│   └── trailing icon
│
├── interaction
│   ├── mouse
│   ├── touch
│   └── keyboard
│
├── accessibility
│
├── typography
│
├── spacing
│
├── radius
│
├── iconography
│
├── motion
│
├── responsive behavior
│
└── composition rules
```

И это не теория.

Например, React Spectrum уже описывает кнопку через `variant`, `size`, `isDisabled`, `isPending`, причём pending-состояние имеет отдельное поведение: кнопка остаётся фокусируемой, но блокирует обычные действия и сообщает состояние screen reader. citeturn2search5

Base UI также предоставляет компоненты, у которых визуальное состояние доступно как структурированные state-данные вроде `data-disabled`, `data-invalid`, `data-focused`, `data-filled` и т. д. citeturn2search10

То есть:

> **состояние компонента — часть модели компонента, а не случайный CSS, который AI придумывает в процессе.**

---

# 3. Anatomy — одна из самых важных вещей

Вот это особенно важно для AI.

shadcn прямо добавил в документацию Composition Trees:

```text
Card
├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   └── CardAction
├── CardContent
└── CardFooter
```

Причина прямо сформулирована командой shadcn: агенты надёжнее собирают компоненты, когда видят правильную структуру, потому что уменьшается количество отсутствующих wrapper'ов, неправильной иерархии и ошибочных комбинаций. citeturn0search8

Это **огромная подсказка для нашей системы**.

Мы должны хранить не только:

```text
Card.tsx
```

а:

```json
{
  "component": "Card",

  "anatomy": {
    "root": "Card",
    "slots": [
      "header",
      "content",
      "footer"
    ]
  },

  "composition": {
    "allowed": [
      "CardHeader",
      "CardContent",
      "CardFooter"
    ]
  }
}
```

И AI должен получать это до генерации.

---

# 4. Slot architecture

Ещё глубже.

Некоторые компоненты — не один DOM-элемент.

Например:

```text
Checkbox
│
├── root
├── control
└── label
```

И у каждого слота могут быть собственные правила.

Chakra прямо выделяет для этого `slot recipes`: можно определить slots, базовые стили каждого слота, variants и compound variants. citeturn0search5

Получается:

```text
COMPONENT
     │
     ├── SLOT 1
     ├── SLOT 2
     ├── SLOT 3
     └── SLOT 4
```

А стили:

```text
component.variant
        ↓
slot.variant
        ↓
compound variant
```

Это намного точнее, чем:

```text
<Card className="..." />
```

---

# 5. Variants — это отдельная система

Chakra очень показателен здесь.

Recipe содержит:

```text
base
variants
compoundVariants
defaultVariants
```

Например:

```text
Button

variant:
  solid
  outline
  ghost

size:
  sm
  md
  lg
```

И дальше:

```text
size=sm + variant=outline
```

может иметь отдельное правило.

Это называется `compound variant`. citeturn0search0turn0search4

Поэтому наша модель должна понимать:

```text
variant ≠ state
```

Это принципиально.

### Variant

Что это за визуальная разновидность?

```text
primary
secondary
destructive
```

### State

Что сейчас происходит?

```text
hover
pressed
focused
disabled
loading
error
selected
expanded
```

### Context

Где находится компонент?

```text
inside toolbar
inside dialog
inside sidebar
inside table
inside mobile navigation
```

### Responsive condition

Сколько ему доступно пространства?

```text
mobile
tablet
desktop

или ещё лучше:

container width
```

---

# 6. Responsive — ещё глубже, чем mobile/tablet/desktop

Это одна из главных причин, почему у тебя всё разваливалось.

Обычный AI пишет:

```css
@media (max-width: 768px) {
   ...
}
```

и считает задачу решённой.

Но современный подход уже идёт дальше.

Tailwind прямо поддерживает **container queries**:

```text
component
    ↓
смотрит не на размер всего экрана
    ↓
а на доступное пространство родителя
```

Например:

```text
Card внутри большой страницы
       ↓
ширина 600px
       ↓
горизонтальный layout

Card внутри sidebar
       ↓
ширина 280px
       ↓
вертикальный layout
```

Tailwind документирует container queries именно как способ сделать компоненты переносимыми и реагирующими на фактический размер контейнера, а не viewport. citeturn1search8

### Поэтому наша система должна различать:

```text
VIEWPORT RESPONSIVENESS
```

и

```text
COMPONENT RESPONSIVENESS
```

Это огромная разница.

---

# 7. Design Tokens — фактически ДНК интерфейса

Вот здесь я считаю, что мы нашли фундамент всей системы.

W3C Design Tokens Community Group в 2025 году выпустила стабильную спецификацию формата design tokens для обмена дизайн-решениями между инструментами. Это не стандарт W3C, но стабильная спецификация Community Group. citeturn1search7turn1search9

Идея:

```text
color
spacing
typography
radius
shadow
duration
easing
size
border
```

становятся не разбросанными значениями, а **именованными сущностями**.

Например:

```text
color.text.primary
color.text.secondary

color.surface.default
color.surface.elevated

color.border.default
color.border.focus

space.1
space.2
space.3
space.4

radius.sm
radius.md
radius.lg

font.body
font.heading
font.label
```

---

# 8. И здесь Atlassian показывает очень интересную вещь

Их токены — не просто:

```text
blue = #...
```

У них есть семантические токены:

```text
color.icon.selected
color.icon.brand
color.icon.danger

color.interaction.hovered
color.interaction.pressed

color.skeleton
color.blanket

elevation.surface
elevation.surface.overlay

motion.duration.short
motion.duration.xshort

radius.xsmall
radius.small
radius.medium
radius.large
```

Также отдельно описаны typography, weights, font families, spacing и motion. citeturn2search0

Вот это очень близко к тому, **что должен понимать наш AI**.

Не:

> «поставь серый #666».

А:

> «это secondary text».

Тогда тема может измениться, а семантика останется.

---

# 9. Поэтому в нашей системе нужны два уровня токенов

### Primitive tokens

```text
blue.500
gray.700
spacing.4
radius.2
```

### Semantic tokens

```text
text.primary
text.secondary

surface.default
surface.elevated

border.default
border.focus

action.primary
action.primary.hover

status.success
status.warning
status.error
```

И:

```text
semantic
    ↓
primitive
```

Это позволит менять тему целиком.

---

# 10. Более того — AI нельзя разрешать писать случайные значения

Например:

```css
margin: 13px;
```

если система имеет:

```text
space.1
space.2
space.3
space.4
```

AI должен использовать токен.

Chakra даже имеет режим `strictTokens`, при котором использование значения, отсутствующего в теме, приводит к TypeScript error. citeturn0search9

Это очень сильная идея для нашего проекта.

Мы можем ввести:

```text
TOKEN POLICY

❌ arbitrary color
❌ arbitrary spacing
❌ arbitrary radius
❌ arbitrary typography
❌ arbitrary shadow

если существует подходящий design token.
```

---

# 11. Typography — отдельный объект

Твоя проблема со шрифтами решается именно так.

Не:

```text
font-family: Inter
```

в случайном месте.

А:

```text
TYPOGRAPHY SYSTEM

font.family.heading
font.family.body
font.family.mono

display
h1
h2
h3
h4

body.large
body
body.small

label
caption
code
metric
```

И отдельно:

```text
weight
line-height
letter-spacing
```

Atlassian, например, уже имеет отдельные токены для heading/body/metric/code, font family и weight. citeturn2search0

То есть мы можем сделать:

```text
Typography Resolver
```

который гарантирует:

```text
используется существующий font
↓
font loaded
↓
font-weight существует
↓
fallback задан
↓
layout проверен
```

---

# 12. Иконки должны стать частью Design System

Тут я полностью согласен с твоим наблюдением.

AI нельзя оставлять свободу:

```text
"ну какая-нибудь иконка сохранения"
```

Нужна:

```text
ICON REGISTRY
```

Например:

```text
lucide
tabler
phosphor
...
```

И метаданные:

```text
icon.name
icon.library
icon.size
icon.stroke
icon.semantic role
```

Например:

```text
save
→ lucide/save
→ 16px
→ stroke 2
```

И политика:

```text
❌ emoji
❌ случайный SVG
❌ Unicode symbol
❌ самодельная иконка

если существует registry icon.
```

---

# 13. Behavior — ещё один отдельный слой

Вот здесь Gemini особенно часто проваливается.

Например, Accordion.

Это не:

```text
div
+
onClick
```

WAI-ARIA определяет для disclosure конкретное поведение:

```text
Enter
Space
```

переключают состояние, а кнопка должна синхронизировать `aria-expanded` и при необходимости `aria-controls`. citeturn1search2

Для Accordion тоже существуют определённые правила клавиатурного взаимодействия. citeturn1search6

Combobox ещё сложнее: стрелки, Escape, Enter, focus management, popup, active descendant и т. д. citeturn1search0

Поэтому:

```text
COMPONENT
```

должен иметь:

```text
BEHAVIOR CONTRACT
```

---

# 14. Например, Dialog

Наш AI должен знать:

```text
Dialog
│
├── trigger
├── overlay
├── content
│   ├── title
│   ├── description
│   └── actions
│
├── open state
├── close state
├── focus trap
├── escape behavior
├── focus restoration
├── keyboard behavior
└── mobile behavior
```

Это уже не «красивое окно».

Это **машинно описанный UI pattern**.

---

# 15. Composition — второй фундамент

Radix и Base UI показывают ещё одну важную идею.

Компонент не должен быть закрытым монолитом.

Radix использует composable parts и `asChild`; Base UI использует `render`, позволяя заменять DOM-элемент и вкладывать компоненты друг в друга. citeturn0search7turn2search1

То есть:

```text
Tooltip
    ↓
Button
    ↓
Link
```

может быть валидной композицией.

Наш AI должен иметь граф:

```text
COMPONENT GRAPH
```

и знать:

```text
allowed child
forbidden child
required child
optional child
slot
replacement
```

---

# 16. Таким образом, компонент у нас становится не файлом

Это очень важный переход.

Сейчас большинство систем мыслят:

```text
Button.tsx
```

Мы должны мыслить:

```text
UIComponent
```

который содержит:

```text
┌─────────────────────────────┐
│ IDENTITY                    │
├─────────────────────────────┤
│ SOURCE                      │
│ LICENSE                     │
│ PROVENANCE                  │
├─────────────────────────────┤
│ ANATOMY                     │
│ SLOTS                       │
│ COMPOSITION                 │
├─────────────────────────────┤
│ VARIANTS                    │
│ STATES                      │
│ COMPOUND STATES             │
├─────────────────────────────┤
│ TOKENS                      │
│ TYPOGRAPHY                  │
│ ICONS                       │
├─────────────────────────────┤
│ BEHAVIOR                    │
│ ACCESSIBILITY               │
│ KEYBOARD                    │
├─────────────────────────────┤
│ RESPONSIVE                  │
│ CONTAINER RULES             │
├─────────────────────────────┤
│ MOTION                      │
├─────────────────────────────┤
│ EXAMPLES                    │
│ SCREENSHOTS                 │
│ TESTS                       │
└─────────────────────────────┘
```

Вот это уже **настоящий объект для AI**.

---

# 17. А 21st показывает, насколько огромным уже стал этот ecosystem

Текущий каталог 21st, например, показывает сотни registry и десятки категорий: design systems, marketing UI, dashboards, AI blocks, forms, motion, charts, icons, ecommerce, auth, maps, editors, etc. citeturn3search0

Причём там уже есть очень разные архитектурные подходы:

- Radix;
- React Aria;
- Base UI;
- shadcn;
- Motion;
- Canvas;
- AI-specific components;
- charts;
- forms;
- editors;
- dashboards.

Это означает, что наша идея **агрегировать не просто компоненты, а знания об их устройстве** — практически правильный уровень абстракции.

21st сам сейчас позиционирует себя именно как registry/community catalog, где компоненты, шаблоны и темы готовы для использования AI-агентами. citeturn3search2turn3search3

---

# 18. Canvas UI подтверждает ещё одну нашу идею

Canvas UI уже позволяет использовать свою registry через shadcn MCP, чтобы AI мог:

```text
list components
↓
read metadata
↓
add component
```

не просто искать HTML на странице. citeturn3search1

То есть наш будущий AI должен работать примерно так же:

```text
USER
 ↓
AI
 ↓
UI KNOWLEDGE SEARCH
 ↓
COMPONENT GRAPH
 ↓
REGISTRY
 ↓
COMPOSER
```

А не:

```text
USER
 ↓
LLM
 ↓
"я сейчас сам напишу React"
```

---

# 19. Теперь самое важное: Design System Intelligence

Я бы теперь официально выделил отдельный слой:

```text
UI DESIGN INTELLIGENCE
```

Он должен состоять минимум из:

```text
01. TOKENS
02. TYPOGRAPHY
03. ICONOGRAPHY
04. SPACING
05. GRID
06. LAYOUT
07. BREAKPOINTS
08. CONTAINER QUERIES
09. COMPONENT ANATOMY
10. VARIANTS
11. STATES
12. COMPOSITION
13. BEHAVIOR
14. ACCESSIBILITY
15. MOTION
16. CONTENT RULES
17. RESPONSIVE RULES
18. PATTERNS
19. BLOCKS
20. PAGE ARCHITECTURE
21. VALIDATION
```

И это становится **контрактом для AI**.

---

# 20. И вот здесь мы можем решить твою главную проблему

AI получает запрос:

> «Сделай современный dashboard».

Он **не должен сразу писать код**.

Он должен пройти:

```text
REQUEST
 ↓
INTENT ANALYSIS
 ↓
PAGE TYPE
 ↓
DESIGN LANGUAGE
 ↓
TOKEN SET
 ↓
COMPONENT SEARCH
 ↓
PATTERN SEARCH
 ↓
COMPOSITION GRAPH
 ↓
RESPONSIVE PLAN
 ↓
BEHAVIOR PLAN
 ↓
CODE
```

Например:

```text
Dashboard
│
├── AppShell
│   ├── Sidebar
│   └── Header
│
├── PageHeader
│
├── FilterBar
│
├── KPIGrid
│   ├── MetricCard
│   ├── MetricCard
│   ├── MetricCard
│   └── MetricCard
│
├── ChartSection
│
└── DataTable
```

После чего система разрешает генерацию.

---

# 21. Но даже это ещё не решает всё

Потому что AI может правильно выбрать компоненты и всё равно плохо их собрать.

Поэтому появляется:

# UI Validation Engine

И это, на мой взгляд, **одна из самых важных частей всей будущей системы**.

---

# 22. Validation должен проверять не только код

### Structural

```text
✓ valid component hierarchy
✓ required slots present
✓ no invalid nesting
✓ dependencies resolved
```

### Design

```text
✓ token usage
✓ typography
✓ spacing
✓ radius
✓ colors
✓ shadows
✓ icon system
```

### Responsive

```text
✓ 320
✓ 375
✓ 390
✓ 430
✓ 768
✓ 1024
✓ 1280
✓ 1440
✓ 1920
```

### Layout

```text
✓ overflow
✓ clipping
✓ overlap
✓ content collision
✓ min-width
✓ max-width
```

### Behavior

```text
✓ click
✓ keyboard
✓ open
✓ close
✓ expand
✓ collapse
✓ loading
✓ error
✓ empty
```

### Accessibility

```text
✓ labels
✓ roles
✓ aria
✓ focus
✓ keyboard
✓ contrast
```

### Visual

```text
✓ screenshot
✓ baseline
✓ diff
```

---

# 23. И здесь уже есть готовая инфраструктура

Storybook поддерживает render tests, interaction tests, accessibility tests и visual testing; его interaction testing позволяет реально симулировать клики, ввод и другие действия в браузере. citeturn1search1turn1search3

Playwright умеет делать визуальные snapshot comparisons через `toHaveScreenshot()`. citeturn1search12

А WAI-ARIA APG даёт эталонные patterns для поведения интерактивных элементов. citeturn1search5

То есть нам опять не надо изобретать велосипед.

---

# 24. Тогда твоя система сможет делать то, чего Gemini сейчас не делает

Допустим, AI создал интерфейс.

Он открывает браузер.

### 390 px

```text
❌ Table overflows by 47px
❌ Toolbar buttons wrap incorrectly
❌ Sidebar still visible
```

AI получает feedback.

Исправляет.

---

### 768 px

```text
❌ KPI cards have inconsistent height
❌ chart label collision
```

Исправляет.

---

### 1440 px

```text
✓ layout
✓ typography
✓ spacing
✓ interactions
```

---

### Keyboard

```text
Tab
Tab
Enter
Escape
ArrowDown
ArrowUp
```

Проверяет.

---

### Visual diff

```text
REFERENCE
      ↓
ACTUAL
      ↓
DIFF
```

Если отклонение выше установленного порога:

```text
FAIL
```

AI возвращается на исправление.

---

# 25. Поэтому скриншот + видео всё-таки будут нужны

Но уже **не как единственный источник**.

Если мы хотим восстановить чужой preview-only компонент:

```text
SCREENSHOT
+
VIDEO
+
DOM
+
COMPUTED CSS
+
ACCESSIBILITY TREE
+
INTERACTION TRACE
+
RESPONSIVE STATES
```

получаем:

```text
OBSERVATION MODEL
```

и уже из неё AI строит:

```text
INDEPENDENT IMPLEMENTATION
```

А затем:

```text
render
↓
screenshot
↓
compare
↓
fix
↓
render
↓
compare
```

Это уже совсем другой процесс.

---

# 26. И вот теперь становится понятно, почему простая генерация по скриншоту проваливается

Условно:

### Gemini:

```text
Image
 ↓
Vision model
 ↓
guess CSS
 ↓
generate code
```

### Наша система:

```text
Reference
   ↓
Observation
   ↓
Design-system inference
   ↓
Component retrieval
   ↓
Anatomy
   ↓
Tokens
   ↓
Variants
   ↓
States
   ↓
Behavior
   ↓
Responsive model
   ↓
Composition graph
   ↓
Code
   ↓
Browser
   ↓
Automated tests
   ↓
Visual comparison
   ↓
AI correction
   ↓
FINAL
```

Разница принципиальная.

---

# 27. Ещё одна очень важная вещь: система должна учиться на существующих системах

Не нужно говорить:

> «Давайте сами придумаем дизайн-систему».

Мы должны провести **reverse engineering существующих design systems**.

Я бы исследовал как минимум:

### Foundation

- W3C Design Tokens
- Material
- Fluent
- Carbon
- Spectrum
- Atlassian
- Primer
- Polaris

### Headless / behavior

- Radix
- Base UI
- React Aria
- Ark UI

### Source registries

- shadcn
- 21st
- Canvas UI
- Park UI
- Kibo
- Magic UI
- Aceternity
- Origin UI
- Cult UI
- Animate UI
- Motion Primitives
- Tailark
- UI Layouts
- и далее весь каталог

21st уже показывает, что в экосистеме существуют сотни таких registries, поэтому это вполне можно превратить в систематический corpus для исследования. citeturn3search0

---

# 28. Но исследовать нужно не «сайт целиком»

Для каждого источника мы должны задавать одну и ту же матрицу:

| Слой | Что извлекаем |
|---|---|
| Foundation | базовые правила |
| Tokens | цвета, spacing, type, radius |
| Typography | scale, weights, line-height |
| Icons | library, sizes, semantics |
| Anatomy | части компонента |
| Variants | визуальные варианты |
| States | интерактивные состояния |
| Behavior | действия |
| Composition | допустимая структура |
| Responsive | breakpoints/container |
| Motion | duration/easing |
| Accessibility | ARIA/keyboard |
| Content | ограничения текста |
| Dependencies | библиотеки |
| Source | код |
| License | права |
| Examples | реальные применения |
| Tests | способы проверки |

Тогда мы сможем **сравнивать системы между собой**, а не просто собирать ссылки.

---

# 29. И в результате появится наша собственная нормализованная модель

Например:

```ts
UIComponent {
  identity

  source
  provenance
  license

  anatomy
  slots
  composition

  tokens

  variants
  compoundVariants

  states

  behavior
  keyboard
  accessibility

  responsive
  containerRules

  typography
  iconography

  motion

  dependencies
  registryDependencies

  examples
  previews

  tests
  visualBaselines
}
```

А для Design System:

```ts
UIDesignSystem {
  tokens
  typography
  spacing
  grid
  breakpoints
  containers
  radii
  shadows
  motion
  icons

  components
  patterns
  templates

  accessibilityRules
  responsiveRules
  compositionRules
}
```

---

# 30. А выше всего будет UI Knowledge Graph

Вот это уже, пожалуй, следующий уровень.

```text
Button
 ↓
uses
 ↓
Typography/Button

Button
 ↓
uses
 ↓
Icon/16

Button
 ↓
hasVariant
 ↓
Primary

Primary
 ↓
uses
 ↓
color.action.primary

Button
 ↓
hasState
 ↓
Loading

Loading
 ↓
uses
 ↓
Spinner
```

А:

```text
Dashboard
```

связан с:

```text
Dashboard
 ├── AppShell
 ├── Sidebar
 ├── Header
 ├── PageHeader
 ├── KPI
 ├── Chart
 ├── Table
 └── Pagination
```

И AI сможет искать **по смыслу**, а не только по названию.

---

# 31. Тогда можно реализовать настоящий UI Search

Ты пишешь:

> «Мне нужен плотный dashboard для строительной аналитики, много таблиц, KPI, графики, тёмная тема, sidebar, мобильная версия».

Поиск не должен искать:

```text
dashboard
```

Он должен искать признаки:

```text
domain:
  analytics

density:
  high

layout:
  app-shell

navigation:
  sidebar

data:
  tables
  metrics
  charts

theme:
  dark

responsive:
  required

interaction:
  filters
  expandable rows
```

И находить соответствующие компоненты.

---

# 32. Более того — AI должен иметь понятие Quality Score, но не в виде «красивый/некрасивый»

Не:

```text
component quality = 94/100
```

а набор измеримых признаков:

```text
SOURCE QUALITY
LICENSE QUALITY
ACCESSIBILITY COVERAGE
RESPONSIVE COVERAGE
TEST COVERAGE
STATE COVERAGE
COMPOSITION COVERAGE
DOCUMENTATION QUALITY
VISUAL COMPLETENESS
DEPENDENCY HEALTH
```

То есть:

```text
Button A
✓ 8 states
✓ 5 variants
✓ keyboard
✓ accessibility
✓ responsive
✓ visual tests

Button B
✓ 3 states
✗ loading
✗ keyboard docs
? responsive
```

И AI понимает, какой компонент надёжнее использовать **по фактам**, а не по субъективной оценке дизайна.

---

# 33. Что в итоге должно храниться у каждого компонента

Я бы зафиксировал следующую конечную структуру:

```text
component/
│
├── source/
│
├── metadata.json
│
├── design/
│   ├── tokens.json
│   ├── typography.json
│   ├── anatomy.json
│   ├── variants.json
│   ├── states.json
│   ├── responsive.json
│   ├── composition.json
│   └── motion.json
│
├── behavior/
│   ├── interactions.json
│   ├── keyboard.json
│   └── accessibility.json
│
├── dependencies/
│
├── previews/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
│
├── examples/
│
├── tests/
│   ├── interaction/
│   ├── accessibility/
│   └── visual/
│
└── provenance/
    ├── source.json
    └── license.json
```

Это уже практически **атомарная единица UI knowledge base**.

---

# 34. И вот что я бы теперь сделал с твоим проектом

Я бы больше **вообще не называл его Component Library**.

Это слишком узко.

Рабочее название:

# UI Intelligence Engine

или:

# UI Knowledge & Composition Engine

А уже внутри:

```text
UI Registry
UI Knowledge Base
Design System Engine
Component Graph
Composer
Renderer
Validator
Crawler
MCP
CLI
```

---

# 35. Полная архитектура теперь выглядит так

```text
                         USER
                          │
                          ▼
                  NATURAL LANGUAGE
                          │
                          ▼
                  ┌───────────────┐
                  │  UI AGENT     │
                  └───────┬───────┘
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        SEARCH         DESIGN        RULES
        ENGINE         ENGINE        ENGINE
             │            │            │
             └────────────┼────────────┘
                          ▼
                 COMPONENT GRAPH
                          │
                          ▼
                 COMPOSITION ENGINE
                          │
                          ▼
                   CODE GENERATOR
                          │
                          ▼
                   BROWSER RUNTIME
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
           VISUAL      INTERACTION   A11Y
            TEST          TEST        TEST
              │           │           │
              └───────────┼───────────┘
                          ▼
                     QA ENGINE
                          │
                     PASS / FAIL
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
               DONE              REPAIR
                                   │
                                   └──────→ AI
```

А с другой стороны:

```text
                 SOURCE ECOSYSTEM
                        │
       ┌────────────────┼────────────────┐
       ▼                ▼                ▼
   REGISTRIES         GITHUB          WEBSITES
       │                │                │
       └────────────────┼────────────────┘
                        ▼
                   INGESTION
                        │
                        ▼
                NORMALIZATION
                        │
                        ▼
                 KNOWLEDGE BASE
```

---

# 36. И самое главное для твоего первоначального вопроса

Ты хотел:

> «Чтобы я больше никогда не перепроверял руками».

Я бы только немного переформулировал технически:

**не пытаться добиться от AI абсолютной безошибочности, а сделать так, чтобы AI не имел права объявить результат готовым без автоматической проверки.**

Это намного реалистичнее и сильнее.

То есть:

```text
AI GENERATED
```

не означает:

```text
DONE
```

А:

```text
AI GENERATED
 ↓
BUILD
 ↓
STRUCTURAL VALIDATION
 ↓
TOKEN VALIDATION
 ↓
RESPONSIVE VALIDATION
 ↓
INTERACTION VALIDATION
 ↓
ACCESSIBILITY VALIDATION
 ↓
VISUAL VALIDATION
 ↓
PASS
 ↓
DONE
```

---

## Что я считаю установленным после этого этапа

У нас уже достаточно оснований сформировать **ядро спецификации**, а не продолжать бесконечно собирать сайты в список.

### Наши фундаментальные принципы:

1. **Registry ≠ component library.**
2. **Component ≠ source file.**
3. **Screenshot ≠ source of truth.**
4. **Design tokens являются фундаментом визуальной консистентности.**
5. **Anatomy и composition должны быть машинно описаны.**
6. **Variant, state, context и responsive condition — разные сущности.**
7. **Behavior должен быть отдельным контрактом.**
8. **Accessibility является частью компонента, а не постобработкой.**
9. **Responsive должен учитывать container behavior, а не только viewport.**
10. **Иконки, шрифты и assets должны проходить через controlled registries.**
11. **AI должен собирать UI из известных primitives/patterns, а не каждый раз изобретать их.**
12. **Visual reference используется для inference и validation, а не как единственный источник кода.**
13. **Каждая генерация должна проходить browser-based QA.**
14. **Неудачный результат автоматически возвращается AI на repair loop.**
15. **Источники, лицензии и provenance хранятся вместе с компонентом.**
16. **Система должна быть registry-agnostic: shadcn — протокол/один из источников, а не вся система.**
17. **MCP становится интерфейсом между UI Knowledge Base и AI coding agents.** Canvas UI уже демонстрирует такой сценарий с shadcn MCP. citeturn3search1
18. **Наш собственный формат должен быть богаче обычного registry.json.** Сам shadcn registry отлично решает distribution of code, но наша задача шире: knowledge + composition + behavior + validation. shadcn прямо описывает registry как систему распространения кода, компонентов, hooks, pages, config и rules. citeturn0search12

---

### Следующий уровень исследования

Теперь я бы пошёл **ещё глубже, уже не по сайтам, а по конкретным компонентам**.

Например, взять один и тот же `Button`, `Dialog`, `Select`, `Table`, `Sidebar`, `Card`, `Form` из:

**shadcn → Radix → Base UI → React Aria → Chakra → Material → Atlassian → Spectrum → Primer → 21st/community registries**

и сделать **помесячное/покомпонентное вскрытие**:

```text
ANATOMY
↓
DOM
↓
TOKENS
↓
VARIANTS
↓
STATES
↓
BEHAVIOR
↓
ARIA
↓
KEYBOARD
↓
RESPONSIVE
↓
MOTION
↓
COMPOSITION
↓
TESTS
↓
AI INSTRUCTIONS
```

После этого мы сможем вывести не просто рекомендации, а **наш собственный `UI Design Intelligence Specification v1.0`** — фактически технический стандарт, по которому будущая система будет понимать, что такое «правильно сделанный интерфейс». Это уже будет фундамент для последующего master prompt и автоматической сборки самого движка.

---

**User:**

Вот. Сейчас я вот, наверное, думаю над тем, чтобы как бы сделать так, чтобы, грубо говоря, запустить ИИшку, да, там какой-нибудь Gemini 3.8, на какой-нибудь типа на high поставить, к примеру, да. Или у меня вот есть возможность купить именно токены, и там можно использовать любые нейросети от Astra 6 до Opus и так далее. Вот. И просто попросить их делать всю эту работу и делать таким образом, чтобы он постоянно... Ну, как бы сначала нужно, понятное дело, всю настроить систему, чтобы она хорошо работала, отлаженно, да. Ну, я думаю, всякие скиллы, навыки и так далее — это тоже нужно, и их можно спокойно найти на том же SkillSH.gu, кажется, как-то так это называется. Там разные фронтенд-скиллы, UI-скиллы, не знаю, React-скиллы, то есть разные скиллы на разные случаи для разработчиков и так далее. Вот. Просто тоже оттуда всё это постоянно брать, брать, брать и постоянно обрабатывать, перерабатывать. И как бы после того как, например, окей, всё там, вся система настроится и всё такое, все компоненты и так далее, у меня будет понятие логика и так далее, как это всё генерировать, создавать. Создам буду такие инструкции, да, скиллы, наверное, может, какие-то свои или пайплайны, чтобы понимать, как интерфейсы строятся, да, то есть какие-то дизайнерские сайты, типа 21st, там искать хорошие дизайны, смотреть всё это, как бы нарабатывать такую визуальную базу. Потом, например... например, что? Какие-то отладки по типу, типа нейронка сама будет прорабатывать отдельным там параллельным агентам, отдавать задачу по типу: изучи вот этот вот скриншот. Там, например, он сделает 5–6 скриншотов сайта какого-нибудь и максимально будет его сначала повторить, потом, например, во второй этап он начнёт его улучшать, дополняя элементами, да, всё это будет круто и классно, и он будет как бы апгрейдиться. Возможно, даже это будет ещё лучше выглядеть. Потом, например...

---

**Assistant:**

Да, это уже можно превратить в **самообучающийся UI R&D pipeline**, но я бы жёстко разделил «обучение системы», «сбор визуальной базы», «генерацию» и «контроль качества». Иначе агенты начнут бесконечно переписывать хороший результат без измеримого улучшения.

---

**Assistant:**

Да. И после этого поиска я бы **ещё сильнее изменил концепцию**.

Ты описываешь не просто «ИИ, который пишет сайты». Ты описываешь систему, где **несколько ИИ-агентов постоянно работают над одной UI-базой знаний**, а сама база постепенно становится лучше.

И это уже вполне совпадает с тем, куда реально движется ecosystem. `skills.sh` сейчас позиционируется именно как открытая экосистема переиспользуемых навыков для AI-агентов; там отдельно существуют категории Design & UI, Frontend/React, Agent Workflow, Testing и т. д. citeturn0search6turn0search1

Причём уже сейчас там есть очень близкие к твоей идее навыки: `frontend-design`, `web-design-guidelines`, `vercel-composition-patterns`, `extract-design-system`, `critique`, `polish`, `ui-ux-pro-max` и другие. citeturn0search0

---

# 1. Я бы сделал не одного «суперагента»

Это самое главное.

Не надо давать одному Opus/Astra/Gemini задачу:

> «Построй всю систему, изучай дизайн, исправляй, улучшай».

Он будет смешивать роли.

Нужен **AI UI Lab**.

Условно:

```text
                    ORCHESTRATOR
                         │
        ┌────────────────┼─────────────────┐
        │                │                 │
        ▼                ▼                 ▼
   RESEARCHER       DESIGNER          ENGINEER
        │                │                 │
        ▼                ▼                 ▼
   ANALYZER          COMPOSER          CODER
        │                │                 │
        └────────────────┼─────────────────┘
                         ▼
                    QA AGENTS
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           VISUAL       A11Y      BEHAVIOR
              │          │          │
              └──────────┼──────────┘
                         ▼
                    CRITIC AGENT
                         │
                         ▼
                  REPAIR AGENT
                         │
                         └────→ повтор
```

---

# 2. Причём у каждого агента должна быть своя специализация

## `research-agent`

Изучает:

- 21st.dev;
- shadcn;
- Canvas UI;
- registries;
- GitHub;
- design systems;
- skills.sh;
- документацию;
- реальные интерфейсы.

Но **не пишет финальный код**.

Его задача:

> найти знания.

---

## `design-system-agent`

Берёт найденный материал и превращает его в:

```text
tokens
typography
spacing
colors
radius
shadows
motion
component anatomy
variants
states
responsive rules
```

То есть:

```text
RAW KNOWLEDGE
       ↓
STRUCTURED KNOWLEDGE
```

---

## `component-agent`

Изучает конкретные компоненты:

```text
Button
Card
Dialog
Table
Sidebar
Select
Form
Tabs
```

и строит их спецификацию.

---

## `visual-agent`

Отвечает исключительно за визуальную сторону:

```text
composition
hierarchy
spacing
typography
alignment
density
color
motion
```

---

## `implementation-agent`

Пишет код.

Но **не имеет права самостоятельно придумывать дизайн-систему**.

Он получает готовый контракт:

```text
USE:
DesignSystem X
Button Y
Card Z
Typography A
Spacing B
Icon Set C
```

---

## `qa-agent`

Проверяет.

---

## `critic-agent`

Не чинит.

Он должен сказать:

```text
PROBLEM
CAUSE
EVIDENCE
SEVERITY
RECOMMENDED FIX
```

Это важно, потому что иначе AI будет сам себя убеждать:

> «Ну вроде нормально».

---

## `repair-agent`

Получает конкретные дефекты:

```text
1. Card overflows at 390px.
2. Heading line-height inconsistent.
3. Button icon is 4px too large.
4. Sidebar transition causes layout shift.
```

и исправляет только их.

---

# 3. А вот твоя идея с постоянным «брать, брать, брать» — правильная

Но я бы сделал **Skill Ingestion Pipeline**.

`skills.sh` не должен просто быть местом, откуда ты вручную устанавливаешь навыки.

Система может периодически:

```text
skills.sh
    ↓
discover
    ↓
filter
    ↓
inspect
    ↓
security/license/provenance
    ↓
compare with existing skills
    ↓
extract useful rules
    ↓
merge
    ↓
test
    ↓
promote
```

Причём сейчас `skills.sh` уже позволяет искать skills по отдельным доменам и поддерживает агентов вроде Claude Code, Cursor, Codex и Gemini. citeturn0search6turn0search20

---

# 4. Но очень важное правило

**Не надо устанавливать 500 skills одновременно.**

Это будет мусор.

Нужно иметь:

```text
SKILL CATALOG
```

а в рабочий контекст загружать только необходимые.

Например:

### Для создания UI

```text
frontend-design
web-design-guidelines
vercel-composition-patterns
```

### Для анализа существующего UI

```text
extract-design-system
critique
```

### Для финальной полировки

```text
polish
typography-audit
motion
```

### Для тестирования

```text
playwright
testing
```

`skills.sh` прямо разделяет Design & UI, Frontend/React, Agent Workflow и Testing, что хорошо ложится на такую модель. citeturn0search1

---

# 5. И здесь появилась очень сильная идея

Не просто:

```text
Skill
```

а:

```text
Skill → Capability
```

Например:

```text
frontend-design
```

даёт:

```text
capabilities:
  aesthetic_direction
  typography
  layout
  visual_hierarchy
```

А:

```text
web-design-guidelines
```

даёт:

```text
capabilities:
  spacing
  typography
  interaction
  accessibility
```

А:

```text
extract-design-system
```

даёт:

```text
capabilities:
  token_extraction
  component_pattern_extraction
```

Таким образом AI может сам решить:

> «Для этой задачи мне нужны capabilities X, Y, Z».

---

# 6. И skills должны превращаться в нашу собственную Knowledge Base

То есть не:

```text
скачали skill
```

а:

```text
skill
 ↓
parse
 ↓
understand
 ↓
normalize
 ↓
extract principles
 ↓
store
```

Например, из нескольких skills обнаружилось:

```text
spacing should use consistent scale
```

Другой skill говорит:

```text
avoid arbitrary spacing
```

Третий:

```text
use tokens
```

Система объединяет:

```text
RULE-023
Spacing must use design tokens where available.
```

И хранит:

```text
sources:
  skill A
  skill B
  skill C

confidence:
  high
```

---

# 7. А если два источника противоречат?

Вот здесь нужен **Knowledge Conflict Resolver**.

Например:

```text
Source A:
8px spacing system

Source B:
4px spacing system
```

Не надо выбирать случайно.

Храним:

```text
Rule A
Rule B
context
```

И:

```text
default design system = X
```

А пользовательский проект может использовать Y.

---

# 8. И вот тут возникает понятие «Design Genome»

Я бы реально ввёл такую концепцию.

Каждый хороший интерфейс раскладывается на:

```text
DESIGN GENOME
│
├── typography
├── color
├── spacing
├── layout
├── radius
├── elevation
├── iconography
├── motion
├── density
├── component style
├── composition
└── interaction
```

Например, сайт A:

```text
minimal
dense
neutral
8px grid
medium radius
subtle shadow
Lucide
fast motion
```

Сайт B:

```text
editorial
airy
high contrast
12px grid
large radius
no shadow
custom icons
slow motion
```

AI может сказать:

> «Возьми structural genome A, visual genome B».

Это гораздо интереснее, чем просто копирование сайта.

---

# 9. И вот тогда появляется твоя идея «сначала повторить, потом улучшить»

Да.

Но это надо оформить как **две разные фазы**.

## Phase A — Reconstruction

Цель:

> максимально точно воспроизвести reference.

Никаких улучшений.

```text
REFERENCE
   ↓
OBSERVE
   ↓
IMPLEMENT
   ↓
COMPARE
   ↓
FIX
   ↓
COMPARE
   ↓
MATCH
```

---

# 10. Phase B — Evolution

Только после достижения baseline:

```text
BASELINE = 94%
```

запускается:

```text
IMPROVEMENT AGENT
```

Он получает:

```text
reference
+
current implementation
+
design knowledge
```

и предлагает:

```text
improvement candidates
```

Например:

```text
1. Better mobile navigation
2. Better typography hierarchy
3. Improved table density
4. Better empty state
5. Better keyboard behavior
6. Better responsive composition
```

---

# 11. И здесь очень важно не дать AI испортить оригинал

Нужны версии:

```text
reference-v0
reconstruction-v1
improved-v2
improved-v3
```

И метрики:

```text
visual similarity
accessibility
responsive coverage
interaction coverage
design consistency
performance
```

Если:

```text
v3
visual = +3%
a11y = +10%
responsive = +8%
```

→ принимаем.

Если:

```text
visual = -4%
```

→ откатываем.

---

# 12. Это уже превращается в Evolution Loop

```text
                REFERENCE
                    │
                    ▼
              RECONSTRUCTOR
                    │
                    ▼
                 BASELINE
                    │
                    ▼
              CRITIC AGENTS
                    │
                    ▼
              IMPROVEMENT IDEAS
                    │
                    ▼
              IMPLEMENTATION
                    │
                    ▼
                  TEST
                    │
              ┌─────┴─────┐
              ▼           ▼
           BETTER        WORSE
              │           │
              ▼           ▼
            KEEP        REVERT
              │
              └────→ NEXT ITERATION
```

Вот это уже действительно **саморазвивающаяся лаборатория**.

---

# 13. Причём 21st уже фактически движется в эту сторону

У них прямо есть идея:

> components you've already shipped become components the agent reaches for first.

То есть вместо того, чтобы агент каждый раз генерировал UI заново, агент должен использовать уже существующую библиотеку. 21st прямо связывает это с уменьшением drift: одинаковые spacing, focus states, toast styling и т. д. citeturn0search18

Это **ровно твоя проблема с Gemini**.

---

# 14. И shadcn уже имеет механизм, через который мы можем это реализовать

shadcn MCP позволяет AI:

```text
browse registry
search
install
```

через естественный язык. Registry должен предоставлять структурированные descriptions и dependencies; также можно описывать `registryDependencies`. citeturn0search9turn0search14

То есть наш проект может сделать:

```text
OUR REGISTRY
     ↓
OUR MCP
     ↓
AI
```

и AI сможет спрашивать:

> Найди мне существующий компонент для X.

А не писать новый.

---

# 15. Я бы добавил ещё один агент — Librarian

Это недостающий элемент.

Он следит за библиотекой.

Например:

```text
Librarian
```

каждую неделю/по команде:

```text
find new registries
find new skills
find updated components
find better implementations
find duplicated components
find obsolete dependencies
find conflicting design rules
find broken components
```

И выдаёт:

```text
UI LIBRARY UPDATE

+ 37 components
+ 8 skills
+ 4 design systems
+ 12 patterns

3 duplicates detected

2 components outdated

5 components failed visual tests
```

---

# 16. Но я бы не разрешал ему автоматически всё принимать

У него должна быть система:

```text
DISCOVERED
    ↓
ANALYZED
    ↓
CANDIDATE
    ↓
VALIDATED
    ↓
PROMOTED
```

То есть новый компонент сначала:

```text
candidate/
```

а после тестирования:

```text
library/
```

---

# 17. Получается две библиотеки

### Raw Library

Всё найденное:

```text
21st
Canvas
shadcn
GitHub
skills
web
```

### Curated Library

Только проверенное:

```text
approved components
approved patterns
approved skills
approved rules
```

И AI в production-генерации **по умолчанию использует Curated Library**.

Это очень важно.

Иначе один плохой компонент из интернета начнёт размножаться по всей системе.

---

# 18. А для твоего случая я бы ещё сделал «Design Sandbox»

Это отдельная среда:

```text
sandbox/
```

куда AI может экспериментально:

```text
clone
modify
combine
animate
redesign
break
test
```

И только после проверки:

```text
sandbox
   ↓
evaluation
   ↓
approved
   ↓
library
```

---

# 19. Теперь про модели

Я бы **не привязывал архитектуру к Gemini/Claude/какой-то одной модели вообще**.

Модель должна быть сменным исполнителем.

Например:

```text
                    ORCHESTRATOR
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       MODEL A        MODEL B        MODEL C
       reasoning      visual         coding
```

А для конкретной задачи:

```text
visual critique → strongest vision model
architecture → strongest reasoning model
coding → strongest coding model
fast repair → cheaper model
```

И если завтра появляется модель лучше:

```text
MODEL D
```

мы просто подключаем её.

---

# 20. Более того — можно сделать модельный routing

Например:

```text
TASK
 ↓
classifier
 ↓
complexity
 ↓
cost
 ↓
required capabilities
```

И:

```text
simple CSS fix
→ cheap/fast model

complex architecture
→ strongest reasoning model

visual reconstruction
→ vision model

final polish
→ design-specialized model
```

Это намного рациональнее, чем постоянно гонять самую дорогую модель.

---

# 21. И вот где твои «токены» могут стать интересными

Если у тебя есть доступ к нескольким сильным моделям, можно использовать их **как конкурирующие экспертные мнения**.

Например:

```text
Reference
   │
   ├── Agent A → reconstruction
   ├── Agent B → reconstruction
   └── Agent C → reconstruction
             ↓
        Evaluator
             ↓
        Best aspects
             ↓
        Synthesis
```

Но опять же — не голосованием:

> «модель A сказала красивее».

А через measurable criteria:

```text
visual similarity
layout stability
responsive
accessibility
interaction
token compliance
```

---

# 22. И даже твоя идея «5–6 скриншотов» правильная, но я бы сделал больше

Не просто:

```text
5 screenshots
```

а **Reference Matrix**:

```text
DESKTOP
1440×900

DESKTOP
1920×1080

TABLET
1024×1366

TABLET
768×1024

MOBILE
430×932

MOBILE
390×844

MOBILE
375×812
```

И дополнительно:

```text
default
hover
focus
open
expanded
loading
empty
error
```

Получается уже не 6 изображений, а **матрица состояний**.

---

# 23. А видео превращается в Interaction Trace

Например:

```text
00:00
page loaded

00:03
hover navigation

00:05
click menu

00:06
drawer opens

00:08
click filter

00:09
dropdown opens

00:12
select option

00:13
table updates
```

Мы можем превратить это в:

```json
{
  "scenario": "filter",
  "steps": [
    "open_filter",
    "select_option",
    "apply",
    "verify_table_update"
  ]
}
```

И потом **автоматически воспроизвести через Playwright**.

Вот здесь видео становится действительно полезным.

---

# 24. И ещё один очень сильный момент

Ты сказал:

> «потом он начнёт его улучшать, дополняя элементами».

Я бы сделал:

### Reconstruction Agent

**Не имеет права улучшать.**

### Design Critic

**Не имеет права кодировать.**

### Improvement Agent

**Не имеет права менять baseline.**

### Evaluator

**Не имеет права писать код.**

### Orchestrator

**Решает, какую работу запускать.**

Это разделение ролей сильно снижает самоподтверждение AI.

---

# 25. В результате у тебя получается практически AI Design Studio

```text
┌─────────────────────────────────────────────┐
│                 UI LAB                      │
│                                             │
│  SOURCES                                    │
│  ├── 21st                                   │
│  ├── shadcn                                 │
│  ├── Canvas                                 │
│  ├── GitHub                                 │
│  ├── skills.sh                              │
│  └── websites                               │
│                                             │
│  KNOWLEDGE                                  │
│  ├── Design Systems                         │
│  ├── Tokens                                 │
│  ├── Components                             │
│  ├── Patterns                               │
│  ├── Behaviors                              │
│  └── Rules                                  │
│                                             │
│  AGENTS                                     │
│  ├── Researcher                             │
│  ├── Librarian                              │
│  ├── Designer                               │
│  ├── Engineer                               │
│  ├── Reconstructor                          │
│  ├── Critic                                 │
│  ├── QA                                     │
│  └── Repair                                 │
│                                             │
│  SANDBOX                                    │
│  ├── experiments                            │
│  ├── reconstructions                        │
│  └── improvements                           │
│                                             │
│  CURATED LIBRARY                            │
│  ├── components                             │
│  ├── blocks                                 │
│  ├── patterns                               │
│  ├── templates                              │
│  └── design systems                         │
│                                             │
│  VALIDATION                                 │
│  ├── visual                                 │
│  ├── responsive                             │
│  ├── interaction                            │
│  ├── accessibility                          │
│  └── code                                   │
└─────────────────────────────────────────────┘
```

---

# 26. И пользовательский интерфейс для тебя может быть вообще элементарным

Тебе не нужно знать React.

Ты пишешь:

> **Сделай мне сайт-портфолио инженера ПТО.**

AI:

```text
UNDERSTANDING REQUEST...

Purpose:
Recruitment portfolio

Audience:
HR / construction manager

Style:
Professional / technical / modern

Required:
Desktop + mobile

Searching curated library...
✓ 34 candidates

Selecting:
✓ AppShell
✓ Navigation
✓ Hero
✓ Metrics
✓ Case Studies
✓ Timeline
✓ Skills
✓ Footer
```

Потом:

```text
BUILDING...
```

Потом:

```text
VISUAL QA

Desktop     ✓
Tablet      ✓
Mobile      ✗

Issue:
case-study card overflow at 390px

Repairing...
```

Потом:

```text
FINAL QA

Visual       ✓
Responsive   ✓
Interaction  ✓
A11y         ✓
Build        ✓

READY
```

Вот **это** уже тот уровень автоматизации, который ты изначально хотел.

---

# 27. Но я бы добавил ещё одну вещь — «memory of taste»

Со временем система должна запоминать:

```text
ARTEMIY UI PREFERENCES
```

Не как абстрактное:

> «Артемий любит красивые сайты».

А как machine-readable constraints:

```text
preferred:
  typography: clean
  density: medium
  radius: moderate
  motion: subtle
  icons: lucide/tabler
  layout: structured
  whitespace: moderate
  cards: restrained
  gradients: limited
```

И отдельно:

```text
avoid:
  excessive gradients
  random glassmorphism
  huge rounded cards
  emoji icons
  generic AI landing pages
```

Тогда после 50 итераций AI начинает лучше понимать именно твой визуальный вкус.

---

# 28. И вот здесь я бы уже начал строить систему

Не с сайта.

Не с crawler.

Не с 50 registries.

А с **UI Lab Core**.

### Этап 1

```text
Agent Runtime
+
Skills Manager
+
Knowledge Base
+
Component Registry
+
Playwright
+
Visual QA
```

### Этап 2

```text
shadcn
21st
Canvas
GitHub
```

### Этап 3

```text
Design System Extraction
Component Intelligence
Composition Graph
```

### Этап 4

```text
Reconstruction Agent
```

### Этап 5

```text
Improvement Agent
```

### Этап 6

```text
Autonomous Researcher
```

### Этап 7

```text
Continuous Evolution
```

---

## И самое интересное

Мы уже нашли на `skills.sh` **ровно те строительные блоки, которые нужны для первой версии**: дизайн, извлечение дизайн-систем, композицию React, критику, polish, accessibility и agent workflows. citeturn0search0turn0search11

Причём там есть очень показательная идея: `extract-design-system` предназначен именно для извлечения tokens/components/patterns из существующего codebase, а `critique` и `polish` — для отдельных итераций анализа и визуального улучшения. citeturn0search0

Это практически совпадает с тем pipeline, который ты сейчас описал.

**Следующий шаг я бы уже делал практически инженерным:** не продолжать пока просто перечислять инструменты, а провести **аудит самого `skills.sh` по нашей архитектуре** — найти и разобрать лучшие skills для каждой роли (`researcher / frontend / design-system / composition / visual QA / Playwright / accessibility / critique / polish / agent orchestration`), посмотреть их реальные `SKILL.md`, зависимости и способы комбинирования, после чего собрать из них **первый `UI-Lab Skill Stack`**. Затем поверх него уже проектировать наши собственные skills, которые будут связывать всё это в единый автономный цикл.

---

**User:**

Соответственно, мне сейчас нужно что-то ещё об этом всём поговорить. Расскажи мне, да, о чём-нибудь, что бы ты предложил, какие у тебя есть решения. Соответственно, я хочу запустить долгую какую-то работу, прям поставить, да, как бы. Я понимаю, что это займёт очень много времени: сама информация, загрузка всех скиллов, загрузка разных библиотек, да, там React, Tailwind и так далее и так далее, разных, куча всего. Ну, в общем, суть-то такая же, как и у вот этих компонентов, что все они, я так понимаю, в формате TSX, все работают, плюс-минус, наверное. Не очень понял, как это работает. В общем, чтобы это была вот такая вот система. По сути, я так понимаю, что это можно не только веб-интерфейс, но и обычные программы, приложения создавать. Но вот одно дело дизайн, да, и всё такое. Ну окей, логика самих кнопочек и так далее, допустим. Но как же быть с логикой, с математикой там какой-нибудь, я не знаю, какие-то суперсложные калькуляционные расчёты. Но это мне очень сейчас пока не нужно. Сейчас моя самая главная цель — создать вот эти вот все штуки и поставить агентов. Соответственно, вот оптимизировать всю эту работу, все эти процессы, чтобы всё это загружалось, оптимизировалось, не было мусора, бардака какого-то. То есть нужна какая-то вот такая архитектура, все-все-все, вот того, что мы проговорили, огромная какая-то супернереальная архитектура, причём такая, чтобы я понимал, как устроена она, а не разбирался потом.

---

**Assistant:**

Да. Я бы сейчас **не начинал с установки React, Tailwind, 500 skills и 200 библиотек**. Это как раз самый быстрый способ получить тот самый бардак, которого ты хочешь избежать.

Тебе нужна не «огромная папка с инструментами», а **операционная система для AI-разработки интерфейсов**.

И я бы строил её так, чтобы тебе вообще не требовалось знать, что внутри происходит.

---

# 1. Сначала важное уточнение: TSX — это не «формат всех компонентов»

Ты правильно уловил, но здесь есть важный нюанс.

Например:

```tsx
<Button>
  Сохранить
</Button>
```

TSX — это по сути JavaScript/TypeScript с JSX-синтаксисом.

Компонент может выглядеть так:

```tsx
export function Button() {
  return <button>...</button>
}
```

Но внутри него может быть:

```text
React
  ↓
TypeScript
  ↓
CSS / Tailwind
  ↓
Radix / Base UI
  ↓
Lucide
  ↓
browser
```

А рядом могут находиться:

```text
Button.tsx
Button.test.tsx
Button.stories.tsx
button.css
tokens.css
package.json
```

Поэтому **TSX — только один слой**.

---

# 2. И это очень важно для твоей большой системы

Ты фактически хочешь построить:

> **AI Software Factory**

Она должна уметь создавать не только сайты.

Например:

```text
             AI SOFTWARE FACTORY
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
      WEB         DESKTOP        MOBILE
       │             │             │
    React          Tauri        React Native
    Next.js        Electron     Expo
       │             │             │
       └─────────────┼─────────────┘
                     ▼
                UI SYSTEM
                     │
              ┌──────┴──────┐
              ▼             ▼
             UI           LOGIC
              │             │
       components       algorithms
       layouts          calculations
       forms            validation
       animation        data processing
```

И вот здесь появляется ответ на твой вопрос про сложную математику.

---

# 3. UI и логика должны быть разделены

Например, ты делаешь строительный калькулятор.

Интерфейс:

```text
┌────────────────────────────┐
│ Расчёт объёма бетона       │
│                            │
│ Длина [ 7200 ]             │
│ Ширина [ 6000 ]            │
│ Высота [ 200 ]             │
│                            │
│       [ РАССЧИТАТЬ ]       │
│                            │
│ Объём: 8.64 м³             │
└────────────────────────────┘
```

Это **UI**.

Но:

```text
volume = length × width × height
```

это **domain logic**.

А если потом будет:

- расчёт нагрузок;
- армирование;
- коэффициенты;
- нормативные ограничения;
- подбор сечений;
- проверка условий;

это уже **отдельный computational engine**.

---

# 4. И AI может создавать оба слоя

Например:

```text
apps/
  concrete-calculator/
```

внутри:

```text
ui/
  CalculatorForm.tsx
  ResultCard.tsx
  ParameterInput.tsx

domain/
  calculateVolume.ts
  calculateLoad.ts
  validateInput.ts

tests/
  calculateVolume.test.ts
  calculateLoad.test.ts

design/
  tokens.ts
```

То есть:

```text
UI
≠
математика
```

Это принципиально.

И тогда твоя будущая система может создавать:

> «Сделай красивый интерфейс калькулятора»

не вмешиваясь в математическую модель.

А потом:

> «Подключи расчёт по такой-то формуле»

и отдельный агент занимается domain logic.

---

# 5. Поэтому я бы вообще разделил нашу систему на 5 миров

Это будет основой архитектуры.

```text
┌─────────────────────────────────────────┐
│              AI FACTORY                 │
├─────────────────────────────────────────┤
│                                         │
│  1. KNOWLEDGE                           │
│     знания                              │
│                                         │
│  2. DESIGN                              │
│     UI / UX                             │
│                                         │
│  3. ENGINEERING                         │
│     код                                 │
│                                         │
│  4. VALIDATION                          │
│     проверки                            │
│                                         │
│  5. ORCHESTRATION                       │
│     управление агентами                 │
│                                         │
└─────────────────────────────────────────┘
```

И **ни один из этих слоёв не должен превращаться в помойку**.

---

# 6. Я бы сделал такую структуру проекта

Например:

```text
AI-LAB/
│
├── CORE/
│   ├── orchestrator/
│   ├── agents/
│   ├── workflows/
│   ├── policies/
│   └── config/
│
├── KNOWLEDGE/
│   ├── skills/
│   ├── design-systems/
│   ├── components/
│   ├── patterns/
│   ├── documentation/
│   └── rules/
│
├── REGISTRY/
│   ├── shadcn/
│   ├── github/
│   ├── 21st/
│   ├── canvas/
│   └── community/
│
├── DESIGN/
│   ├── tokens/
│   ├── typography/
│   ├── icons/
│   ├── motion/
│   └── composition/
│
├── LAB/
│   ├── experiments/
│   ├── reconstructions/
│   ├── redesigns/
│   └── benchmarks/
│
├── PROJECTS/
│   ├── website/
│   ├── dashboard/
│   ├── calculator/
│   └── applications/
│
├── VALIDATION/
│   ├── visual/
│   ├── accessibility/
│   ├── interaction/
│   ├── responsive/
│   └── code/
│
├── ARTIFACTS/
│   ├── screenshots/
│   ├── reports/
│   ├── datasets/
│   └── builds/
│
└── SYSTEM/
    ├── database/
    ├── cache/
    ├── logs/
    └── backups/
```

И это не означает, что ты будешь руками ходить по этим папкам.

**Это внутренности машины.**

---

# 7. Тебе нужен один вход

Например:

```text
ui
```

И дальше:

```text
ui create
ui research
ui learn
ui import
ui inspect
ui reconstruct
ui improve
ui test
ui validate
ui update
ui doctor
```

Но тебе в большинстве случаев достаточно:

```text
ui create "сделай современный dashboard..."
```

А система сама решает:

```text
какие skills
какие components
какие libraries
какую модель
каких агентов
какие tests
```

---

# 8. Ещё важнее: не устанавливать всё глобально

Вот здесь я бы особенно настоял.

Не надо:

```text
npm install
    ↓
1000 пакетов
```

в твою основную систему.

Нужно понятие:

# Environment

Например:

```text
ENVIRONMENTS/

web-react/
desktop/
mobile/
data/
construction/
```

---

# 9. Web environment

```text
web-react
│
├── React
├── TypeScript
├── Tailwind
├── shadcn
├── Radix/Base UI
├── Lucide
├── Playwright
└── Testing
```

---

# 10. Desktop environment

Например:

```text
desktop
│
├── React
├── TypeScript
├── Tauri
└── UI system
```

А если понадобится:

```text
Electron
```

можно добавить.

---

# 11. Mobile environment

```text
mobile
│
├── React Native
├── Expo
└── UI system
```

---

# 12. И тогда ты не обязан вообще знать, что используется

Ты говоришь:

> «Создай приложение для Windows для расчёта материалов».

Orchestrator определяет:

```text
TARGET = desktop
```

и запускает соответствующий environment.

Ты говоришь:

> «Сделай сайт».

```text
TARGET = web
```

Ты говоришь:

> «Сделай приложение для телефона».

```text
TARGET = mobile
```

---

# 13. А дизайн-система при этом остаётся общей

Вот это очень мощно.

Например:

```text
Design Intelligence
        │
 ┌──────┼───────┐
 ▼      ▼       ▼
 Web  Desktop  Mobile
```

И везде могут быть:

```text
Button
Card
Dialog
Input
Table
Navigation
```

но реализация разная.

---

# 14. Поэтому Component Knowledge должен быть абстрактным

Например:

```text
Button
```

имеет:

```text
semantic:
  action

states:
  default
  hover
  pressed
  disabled
  loading

variants:
  primary
  secondary
  destructive

accessibility:
  keyboard
  focus

design:
  typography
  spacing
  radius
```

А дальше:

```text
WEB → React implementation
DESKTOP → Tauri/React implementation
MOBILE → React Native implementation
```

Это уже действительно масштабируемая система.

---

# 15. Теперь про твою идею «пусть работает очень долго»

Я считаю, что это **правильный подход**, но нужно поменять представление.

Не:

> «Запустил агента на 48 часов и пусть делает что-нибудь».

А:

# Continuous Research Pipeline

Например:

```text
RESEARCH QUEUE
```

с тысячами задач.

---

# 16. Очередь исследований

Например:

```text
001 изучить Button
002 изучить Dialog
003 изучить Table
004 изучить Sidebar
005 изучить 21st registry
006 изучить Canvas UI
007 изучить Material tokens
008 изучить Spectrum
009 изучить Radix
010 изучить Base UI
...
```

А Orchestrator постепенно выполняет их.

---

# 17. Каждая задача имеет lifecycle

```text
DISCOVERED
     ↓
QUEUED
     ↓
RESEARCHING
     ↓
EXTRACTING
     ↓
NORMALIZING
     ↓
VALIDATING
     ↓
APPROVED
     ↓
INDEXED
```

Если проблема:

```text
FAILED
 ↓
RETRY
```

Если источник плохой:

```text
REJECTED
```

---

# 18. Вот это очень важно — система должна уметь говорить «не знаю»

Например, AI нашёл компонент.

```text
Source:
unknown

License:
unknown

Implementation:
minified

Behavior:
partially observed
```

Он **не должен добавлять его в Curated Library**.

Статус:

```text
UNVERIFIED
```

---

# 19. А потом появляется Knowledge Promotion

```text
RAW
 ↓
ANALYZED
 ↓
VERIFIED
 ↓
CURATED
 ↓
PRODUCTION
```

Это как Git для знаний.

---

# 20. Я бы даже сделал Git-подобную систему для UI Knowledge

Например:

```text
Button v1
Button v2
Button v3
```

И:

```text
DesignSystem A
DesignSystem B
```

Можно делать:

```text
branch
experiment
merge
rollback
```

То есть AI может экспериментировать, но **не разрушает основную систему**.

---

# 21. И вот здесь появляется твоя «супернереальная архитектура»

Я бы сделал примерно 8 уровней.

```text
LEVEL 0
INFRASTRUCTURE

LEVEL 1
AI RUNTIME

LEVEL 2
KNOWLEDGE

LEVEL 3
DESIGN INTELLIGENCE

LEVEL 4
COMPONENT / REGISTRY

LEVEL 5
COMPOSITION

LEVEL 6
GENERATION

LEVEL 7
VALIDATION

LEVEL 8
CONTINUOUS EVOLUTION
```

---

# 22. LEVEL 0 — Infrastructure

Это то, что тебе вообще не нужно трогать.

```text
Node.js
Python
Git
Docker
SQLite/Postgres
filesystem
Playwright
browser
```

AI сам устанавливает.

---

# 23. LEVEL 1 — AI Runtime

Здесь:

```text
models
providers
routing
context
memory
agents
skills
MCP
tools
```

Например:

```text
Model Router
    │
    ├── strong reasoning model
    ├── visual model
    ├── coding model
    └── fast model
```

---

# 24. LEVEL 2 — Knowledge

Здесь:

```text
skills
documentation
design systems
components
patterns
examples
rules
```

---

# 25. LEVEL 3 — Design Intelligence

Здесь:

```text
tokens
typography
colors
spacing
layout
grid
responsive
motion
icons
composition
accessibility
```

---

# 26. LEVEL 4 — Registry

Здесь:

```text
shadcn
21st
Canvas
GitHub
npm
community
internal
```

---

# 27. LEVEL 5 — Composition

Вот здесь AI отвечает:

> Что из чего собрать?

Например:

```text
Dashboard
│
├── AppShell
│
├── Sidebar
│
├── Header
│
├── Metrics
│
├── Chart
│
└── DataTable
```

---

# 28. LEVEL 6 — Generation

Здесь появляется:

```text
TSX
CSS
Tailwind
TypeScript
assets
configuration
tests
```

---

# 29. LEVEL 7 — Validation

Здесь:

```text
build
typecheck
lint
unit tests
browser tests
visual tests
responsive
accessibility
performance
```

---

# 30. LEVEL 8 — Evolution

Самый интересный.

```text
Research
 ↓
Discover
 ↓
Experiment
 ↓
Evaluate
 ↓
Improve
 ↓
Promote
```

И система постепенно становится лучше.

---

# 31. А теперь представь, что ты даёшь ей сайт

Например:

```text
ui learn https://some-site.com
```

Запускается:

```text
Research Agent
```

Он обнаруживает:

```text
Framework
React

Styling
Tailwind

Icons
Lucide

Components
...
```

Затем:

```text
Design Agent
```

извлекает:

```text
tokens
typography
spacing
```

Затем:

```text
Component Agent
```

разбирает:

```text
Button
Card
Navigation
Table
```

Затем:

```text
Reconstruction Agent
```

делает локальную копию для анализа.

Затем:

```text
QA Agent
```

проверяет её.

И только потом:

```text
Knowledge Base
```

получает новые знания.

---

# 32. Но здесь есть важная граница

Если это чужой коммерческий сайт или закрытая библиотека, система не должна просто:

> «скачать всё и положить к себе».

Нужно разделять:

```text
OBSERVED
```

и

```text
REUSABLE SOURCE
```

Например:

```text
screenshot
DOM
behavior
```

могут быть наблюдением для анализа, если это допустимо условиями использования.

А исходный код:

```text
source code
```

может храниться/использоваться в зависимости от лицензии и прав.

Поэтому у каждого объекта:

```text
provenance
license
source_url
derived_from
redistribution_allowed
```

Это особенно важно, когда библиотека начинает становиться большой.

---

# 33. А теперь про «огромное количество библиотек»

Тоже не надо всё устанавливать.

Нужно:

# Capability Registry

Например:

```text
CAPABILITY

charts
```

и система знает:

```text
Tremor
Recharts
ECharts
Nivo
Visx
```

Но конкретный проект устанавливает только то, что ему нужно.

---

# 34. То есть библиотека становится не установленной программой, а ресурсом

Например:

```text
Library Catalog

React
TypeScript
Tailwind
shadcn
Radix
Base UI
Lucide
Motion
Recharts
Playwright
...
```

Для каждой:

```text
version
license
purpose
compatibility
dependencies
documentation
quality
known issues
```

А когда проекту понадобится:

```text
charts
```

AI выбирает подходящий вариант и добавляет его **в environment конкретного проекта**.

---

# 35. Поэтому не получится огромная помойка `node_modules`

Даже если внутри конкретного проекта будет много зависимостей, это будет локальный dependency graph проекта.

А AI Lab сама будет оставаться относительно чистой.

---

# 36. Я бы даже разделил:

```text
AI-LAB
```

и:

```text
PROJECTS
```

Например:

```text
AI-LAB/
```

— твоя фабрика.

А:

```text
PROJECTS/
  pto-portfolio/
  calculator/
  dashboard/
  application-x/
```

— продукты, которые фабрика создаёт.

---

# 37. И фабрика не должна ломаться из-за проекта

Это критически важно.

Если:

```text
pto-portfolio
```

использует:

```text
Tailwind 4
```

а:

```text
old-app
```

использует:

```text
Tailwind 3
```

они не должны конфликтовать.

---

# 38. Поэтому я бы использовал isolated environments

Концептуально:

```text
PROJECT A
 ├── package.json
 ├── node_modules
 └── source

PROJECT B
 ├── package.json
 ├── node_modules
 └── source
```

А:

```text
AI-LAB
```

имеет свои зависимости.

---

# 39. И вот тогда можно действительно дать системе месяцы работы

Она будет заниматься:

```text
nightly research
```

или:

```text
weekly update
```

или:

```text
on-demand research
```

Например:

> «Исследуй новые UI skills и registries».

Она:

```text
find
 ↓
filter
 ↓
analyze
 ↓
deduplicate
 ↓
test
 ↓
promote
```

---

# 40. Но я бы сделал ещё один механизм — Budget

Чтобы агенты не жрали токены бесконечно.

Каждая задача:

```text
budget:
  tokens
  time
  iterations
  models
```

Например:

```text
Reconstruct component

max iterations: 8
max visual iterations: 5
max cost: X
```

Если не получается:

```text
FAILED / NEEDS REVIEW
```

а не бесконечный цикл.

---

# 41. И ещё — Evidence

Это очень важная штука.

Каждое знание должно иметь доказательство.

Например:

```text
RULE:
Button minimum touch target = X

EVIDENCE:
source A
source B
source C
```

Или:

```text
COMPONENT:
Dialog

EVIDENCE:
source code
documentation
browser behavior
tests
```

Тогда AI не будет постепенно превращать систему в сборник собственных галлюцинаций.

---

# 42. В результате твоя база будет выглядеть примерно так

```text
Knowledge Object
│
├── content
├── source
├── evidence
├── provenance
├── confidence
├── version
├── dependencies
├── relations
├── tests
└── status
```

---

# 43. А тебе вообще не нужно понимать всё это

Это тоже важный момент.

Ты хочешь:

> «чтобы я понимал, как устроена она, а не разбирался потом».

Поэтому интерфейс самой системы я бы сделал **трёхуровневым**.

### Level 1 — Ты

```text
Создай
Исследуй
Улучши
Повтори
Покажи
Запусти
```

### Level 2 — AI Report

```text
Что сделано
Что найдено
Что изменилось
Что проверено
Что не удалось
```

### Level 3 — Technical Core

```text
agents
skills
packages
Docker
Playwright
MCP
database
```

Ты туда не лезешь, если не нужно.

---

# 44. И вот какой интерфейс я бы сделал для тебя

Например:

```text
╭──────────────────────────────────────────╮
│ UI LAB                                   │
├──────────────────────────────────────────┤
│                                          │
│  Что сделать?                            │
│                                          │
│  > Создай современный dashboard          │
│    для анализа объектов строительства    │
│                                          │
│                  [ Создать ]              │
│                                          │
├──────────────────────────────────────────┤
│ SYSTEM STATUS                            │
│                                          │
│ Components       12 483                  │
│ Design systems       87                  │
│ Skills               342                │
│ Patterns            2 184                │
│ Validated             78%                │
│                                          │
│ Agents                8 / 8              │
│ Browser                ✓                 │
│ Registry               ✓                 │
│ QA                     ✓                 │
╰──────────────────────────────────────────╯
```

И отдельно:

```text
Research
Library
Projects
Experiments
Agents
System
```

---

# 45. А я бы ещё сделал кнопку

# `Improve System`

Она запускает:

```text
find weaknesses
        ↓
find missing skills
        ↓
find missing components
        ↓
find outdated dependencies
        ↓
find failed tests
        ↓
research solutions
        ↓
run experiments
        ↓
validate
        ↓
apply safe improvements
```

Это практически и есть твоя идея:

> «пусть она постоянно берёт, перерабатывает, улучшает».

---

# 46. И ещё одна очень важная мысль

Не надо пытаться **обучить модель**.

То есть мы не будем сейчас делать:

```text
fine-tuning
training
```

Нам это практически не нужно.

Мы будем создавать:

```text
EXTERNALIZED INTELLIGENCE
```

То есть интеллект системы хранится в:

```text
skills
rules
knowledge
components
examples
tests
design systems
graphs
memory
```

а модель является **рассуждающим процессором**, который умеет этим пользоваться.

Это гораздо проще обновлять.

---

# 47. В итоге получится примерно такая машина

```text
                    YOU
                     │
                     ▼
              NATURAL LANGUAGE
                     │
                     ▼
              ┌─────────────┐
              │ ORCHESTRATOR│
              └──────┬──────┘
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   KNOWLEDGE       DESIGN       ENGINEERING
       │             │             │
       └─────────────┼─────────────┘
                     ▼
                  AGENTS
                     │
                     ▼
                 PROJECT
                     │
                     ▼
                  BROWSER
                     │
                     ▼
                    QA
                     │
              ┌──────┴──────┐
              ▼             ▼
            PASS           FAIL
              │             │
              ▼             ▼
             DONE          REPAIR
                            │
                            └───────┐
                                    ▼
                                  TEST
                                    │
                                    ▼
                                   DONE

                 PARALLEL SYSTEM
                       │
                       ▼
                 RESEARCH LAB
                       │
              ┌────────┼────────┐
              ▼        ▼        ▼
            SKILLS  REGISTRIES  DESIGN
              │        │        │
              └────────┼────────┘
                       ▼
                  KNOWLEDGE
                       │
                       ▼
                  CURATED DB
```

---

## И вот что я бы предложил сделать конкретно сейчас

**Не запускать пока строительство этой огромной системы вслепую.**

Сначала надо сделать один документ:

# `UI-LAB ARCHITECTURE SPECIFICATION v0.1`

Причём это должен быть не обычный текстовый план, а **контракт для будущего AI-строителя**.

В нём мы зафиксируем:

1. **какие существуют уровни системы;**
2. **какие агенты существуют;**
3. **какие у каждого права и запреты;**
4. **как подключаются модели;**
5. **как подключаются skills;**
6. **как skills проверяются и обновляются;**
7. **как устроена Knowledge Base;**
8. **как устроен Registry;**
9. **как хранится Component Intelligence;**
10. **как устроена Design Intelligence;**
11. **как создаются проекты;**
12. **как изолируются зависимости;**
13. **как работает Playwright;**
14. **как работает visual reconstruction;**
15. **как работает improvement loop;**
16. **как работает QA;**
17. **как система откатывает плохие изменения;**
18. **как работает долгий автономный research;**
19. **как устроены budgets и остановка агентов;**
20. **как система логирует абсолютно всё;**
21. **какие данные можно принимать из внешних источников;**
22. **какие данные нельзя автоматически продвигать в production;**
23. **как устроены версии знаний;**
24. **как AI понимает, что компонент качественный;**
25. **как пользователь одной командой запускает всю эту машину.**

И после этого уже можно дать **одному сильному coding agent** этот документ и сказать примерно:

> «Построй эту систему. Сначала установи инфраструктуру, затем реализуй ядро, затем запусти диагностику, затем самостоятельно подключи необходимые инструменты, затем проведи тестовый цикл на трёх UI-источниках. Не создавай следующую подсистему, пока предыдущая не прошла acceptance tests».

Это уже тот случай, когда имеет смысл потратить много токенов на действительно сильную модель и дать ей **не один огромный промпт “сделай мне AI UI factory”**, а инженерную спецификацию + автономный цикл.

И главное: **мы сейчас уже достаточно далеко продвинулись, чтобы эту спецификацию писать.** Дальше я бы перестал расширять список технологий ради списка и начал превращать всё исследованное нами — shadcn, 21st, Canvas, design tokens, Radix/Base UI/React Aria, skills.sh, Playwright, visual QA, agents, registries — в конкретные контракты и связи между подсистемами. Именно это превратит идею в архитектуру, которую потом можно отдать AI и сказать: **«построй и поддерживай это, а мне показывай только результаты и проблемы».**

---

**User:**

Теперь посмотри, что ты мне написал, да, найди какие-то... проведи, знаешь, процесс, так скажем, брифинг или что-то подобное. То есть один человек, он за всю идею, другой против и как бы один разработчик, и второй разработчик, и третий лицо — это уже главный разработчик, который как бы слушает, и они приходят к консенсусу и общаются таким образом, обговаривая всё по-detailно. Можно сейчас как-то план наметить примерно, чтобы это был очень долгий разговор, споры, предложение своих идей и так далее. То есть что-то, что можно как бы найти какую-то брешь, может быть, в том, что мы сейчас тут наговорили. Ну пусть это будет приблизительно, допустим, да, разбор там каких-нибудь 25–30 разделов, условно, да, и по каждому из этих разделов пусть будет двухэтапный спор, разговор и как бы по каждому вывод. Соответственно, ты сейчас запустишь первый этап, он пройдёт сразу в два этапа по первому разделу. Потом, когда закончишь, потом я напишу ещё раз, только уже второй, следующий этап. Ты, соответственно, проводишь по второму разделу два этапа и так далее.

---

**Assistant:**

Да. Здесь полезнее не просто «обсудить архитектуру», а устроить **архитектурный совет с правом отклонять уже придуманные нами решения**. Я сначала зафиксирую регламент, затем проведу раздел №1 в двух раундах и вынесу решение главного архитектора.

---

**Assistant:**

Предлагаю именно такой формат. Причём важный момент: **задача участников не доказать, что первоначальная идея хорошая, а попытаться её сломать**. Если архитектура выдерживает критику — она остаётся. Если нет — мы меняем её до начала реализации.

## Регламент нашего архитектурного совета

Будут три условных участника:

**Архитектор А — PRO**  
Отстаивает текущую концепцию. Его задача — показать, зачем решение нужно, какие проблемы оно закрывает и почему оно может масштабироваться.

**Архитектор B — CONTRA**  
Атакует решение. Ищет:
- лишнюю сложность;
- скрытые зависимости;
- места, где AI начнёт галлюцинировать;
- потенциальные тупики;
- проблемы стоимости;
- проблемы поддержки;
- юридические/лицензионные риски;
- архитектурные противоречия;
- места, где мы строим «космолёт ради кнопки».

**Главный архитектор / Lead Developer**  
Не выбирает сторону заранее. Слушает спор, задаёт контрольные вопросы, фиксирует противоречия и в конце принимает архитектурное решение:

> **оставить / изменить / отложить / удалить / исследовать дополнительно.**

---

# Карта всего большого разбора

Я бы разбил нашу архитектуру примерно на **30 разделов**.

| № | Раздел | Главный вопрос |
|---|---|---|
| 01 | **Границы системы** | Что именно мы вообще строим? |
| 02 | Цель и конечный результат | Что система должна уметь через год? |
| 03 | Архитектурные принципы | Какие правила нельзя нарушать? |
| 04 | AI-агенты | Сколько их нужно и зачем разделять? |
| 05 | Orchestrator | Кто управляет агентами? |
| 06 | Model Router | Как выбирать модель под задачу? |
| 07 | Skills | Что такое Skill и как его подключать? |
| 08 | Skill Lifecycle | Как исследовать, проверять и обновлять Skills? |
| 09 | Knowledge Base | Где хранится знание системы? |
| 10 | Evidence / Provenance | Как система понимает, чему можно доверять? |
| 11 | Registry | Что такое наш собственный Registry? |
| 12 | Источники | shadcn / 21st / GitHub / Canvas / сайты и т.д. |
| 13 | License & Legal | Что мы имеем право хранить и использовать? |
| 14 | Component Intelligence | Как система понимает компонент? |
| 15 | Design Intelligence | Как система понимает дизайн? |
| 16 | Design Genome | Как описывать визуальный язык? |
| 17 | Component Graph | Как компоненты связаны между собой? |
| 18 | Composition Engine | Как собирать интерфейсы? |
| 19 | Project Factory | Как создаётся новый проект? |
| 20 | Dependency Isolation | Как избежать dependency hell? |
| 21 | Visual Reverse Engineering | Как воспроизводить чужой интерфейс? |
| 22 | Browser / Playwright | Как система видит и тестирует сайты? |
| 23 | Reconstruction Pipeline | Как проходит реконструкция? |
| 24 | Improvement Pipeline | Как система улучшает интерфейс? |
| 25 | QA | Как доказать, что интерфейс хороший? |
| 26 | Evaluation | Как сравнивать две реализации? |
| 27 | Autonomous Research | Как система работает часами/днями? |
| 28 | Versioning / Rollback | Как отменять плохие решения? |
| 29 | Security / Permissions | Что AI разрешено делать? |
| 30 | **Final Architecture** | Что реально строим в v1? |

И вот здесь появляется важная вещь:

**после 30-го раздела мы не обязаны получить исходную архитектуру.**

Вполне возможно, что после споров она станет гораздо проще.

---

# РАЗДЕЛ №1
# ГРАНИЦЫ СИСТЕМЫ

## Исходная гипотеза

Сейчас мы фактически описывали систему как:

> **AI Software Factory / UI Intelligence Lab**

которая умеет:

```text
исследовать
↓
находить компоненты
↓
изучать дизайн
↓
изучать Skills
↓
собирать знания
↓
понимать компоненты
↓
создавать интерфейсы
↓
воспроизводить интерфейсы
↓
улучшать их
↓
тестировать
↓
создавать проекты
↓
поддерживать проекты
↓
самостоятельно исследовать новые технологии
```

И вот это первое место, где я уже вижу потенциальную брешь.

**Мы слишком быстро назвали всё это одной системой.**

Поэтому сейчас специально будем ломать эту концепцию.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор А — PRO

Я бы защищал текущую идею следующим образом.

Нам не нужен просто:

> «генератор React-интерфейсов».

Таких инструментов уже достаточно.

Наша проблема гораздо шире.

Мы хотим, чтобы AI не каждый раз начинал с чистого листа:

```text
"Сделай красивый dashboard"
```

и потом самостоятельно выдумывал:

- шрифты;
- spacing;
- карточки;
- кнопки;
- иконки;
- таблицы;
- состояния;
- responsive;
- архитектуру;
- библиотеки.

Вместо этого система должна иметь накопленную инфраструктуру:

```text
KNOWLEDGE
    +
COMPONENTS
    +
DESIGN SYSTEMS
    +
SKILLS
    +
EXAMPLES
    +
TESTS
    +
BROWSER
    +
AGENTS
```

И тогда запрос:

```text
Создай dashboard для ПТО
```

превращается не в:

```text
LLM → код
```

а в:

```text
USER
 ↓
ORCHESTRATOR
 ↓
RESEARCH
 ↓
DESIGN SYSTEM
 ↓
COMPONENT SELECTION
 ↓
COMPOSITION
 ↓
IMPLEMENTATION
 ↓
BROWSER
 ↓
VISUAL QA
 ↓
REPAIR
 ↓
FINAL PROJECT
```

Это уже не библиотека компонентов.

Это действительно **production environment для AI-разработки**.

---

## Архитектор B — CONTRA

Нет.

Именно здесь начинается архитектурная ошибка.

Мы смешали **три разных продукта**.

### Продукт №1

Knowledge / Research System:

```text
skills
components
registries
design systems
documentation
examples
```

### Продукт №2

UI Generation System:

```text
prompt
↓
design
↓
composition
↓
code
```

### Продукт №3

Software Engineering System:

```text
project
↓
code
↓
tests
↓
build
↓
deployment
↓
maintenance
```

И мы называем их одним:

> AI Software Factory.

Это очень опасно.

Потому что в результате пользователь хочет:

> «Создай мне кнопку»

а система потенциально поднимает:

```text
Orchestrator
Researcher
Skill system
Knowledge Base
Registry
Component Graph
Design Genome
Model Router
Playwright
Visual QA
Project Factory
Versioning
```

Это архитектурный overengineering.

---

## Архитектор А

Но система не обязана использовать всё.

Мы как раз и предлагаем Orchestrator.

Например:

```text
ui create button
```

может пройти только:

```text
Component Registry
      ↓
Composition
      ↓
Implementation
      ↓
Test
```

А:

```text
ui reconstruct https://example.com
```

уже:

```text
Browser
 ↓
Research
 ↓
Visual Analysis
 ↓
Reconstruction
 ↓
QA
```

То есть архитектура большая, но workflow маленький.

---

## Архитектор B

Тогда возникает второй вопрос:

**зачем вообще объединять всё в один runtime?**

Можно построить:

```text
AI-LAB
```

как платформу знаний.

А проекты пусть используют её как внешний сервис.

Например:

```text
AI-LAB
│
├── Knowledge
├── Registry
├── Skills
├── Design Systems
└── Agents
       ↓
     API
       ↓
PROJECT A
PROJECT B
PROJECT C
```

Это гораздо чище.

---

# Главный архитектор

Стоп.

Здесь уже обнаружилась первая серьёзная проблема.

Мы пока обсуждали **функции**, но не определили **границу продукта**.

Поэтому главный вопрос раздела №1:

> **AI-LAB — это приложение, библиотека, платформа, агентная система или фабрика проектов?**

---

# ЭТАП 2 — КОНТРАТАКА И РАЗБОР

Теперь главный архитектор специально заставляет обоих уточнить позицию.

---

## Вопрос №1

### Что является главным продуктом?

### PRO:

AI Software Factory.

Потому что конечная ценность не в базе компонентов.

Она в способности:

> получить задачу → исследовать → создать работающий продукт.

---

### CONTRA:

Нет.

Это конечный **слой использования**.

Фундаментальный продукт:

> **AI Development Knowledge & Capability Platform.**

То есть система, которая предоставляет AI:

```text
knowledge
skills
components
design systems
tools
browser
testing
provenance
```

А уже поверх неё может существовать:

```text
UI Factory
Web Factory
Desktop Factory
Mobile Factory
Data Factory
Construction Software Factory
```

---

### Главный архитектор:

Это сильное замечание.

Потому что пользователь уже говорил о будущем:

- UI;
- desktop;
- mobile;
- расчётные программы;
- инженерные приложения;
- автоматизация.

Если назвать фундамент:

> UI Factory

мы сами себя ограничим.

---

# Вопрос №2

## Должна ли система быть UI-центричной?

### PRO:

На первом этапе — да.

Потому что именно UI сейчас является исследуемой областью:

```text
21st
shadcn
Canvas
registries
skills
design systems
Playwright
visual reconstruction
```

---

### CONTRA:

UI должен быть **первым доменом**, но не архитектурным ограничением.

Нельзя сделать:

```text
UI-LAB
    ↓
всё остальное потом
```

Нужно:

```text
AI CORE
│
├── UI DOMAIN
├── WEB DOMAIN
├── DESKTOP DOMAIN
├── MOBILE DOMAIN
├── DATA DOMAIN
└── ENGINEERING DOMAIN
```

При этом UI — первый реализованный домен.

---

### Главный архитектор:

Принимаю второй вариант.

Но с поправкой:

**не строим сейчас универсальную платформу для всего.**

Это была бы ещё одна ошибка.

Фиксируем:

> Архитектура должна позволять расширение за пределы UI, но первая реализация оптимизируется под UI/software interface development.

---

# Вопрос №3

## А нужен ли вообще отдельный Knowledge Base?

### PRO:

Да.

Потому что иначе каждый новый AI-сеанс снова будет:

```text
искать
читать
понимать
забывать
повторять
```

Нам нужен накопительный слой:

```text
Knowledge
```

---

### CONTRA:

Но «Knowledge Base» — слишком размытое понятие.

Если туда начать складывать:

```text
README
статьи
skills
компоненты
screenshots
код
промты
правила
решения
логи
```

через полгода получится цифровая помойка.

AI начнёт находить пять противоречащих друг другу правил и считать каждое истинным.

---

### PRO:

Поэтому и нужна provenance:

```text
source
version
confidence
evidence
license
status
```

---

### CONTRA:

Этого недостаточно.

Нужна **иерархия доверия**.

Например:

```text
RAW
 ↓
OBSERVED
 ↓
ANALYZED
 ↓
VERIFIED
 ↓
CURATED
 ↓
PRODUCTION
```

AI не должен использовать RAW как production knowledge.

---

### Главный архитектор:

Это принимается.

И это важнее, чем казалось.

Получаем принцип:

> **Knowledge Base — не склад информации. Это система управления знаниями с жизненным циклом объектов.**

---

# Вопрос №4

## Должна ли система сама себя улучшать?

### PRO:

Да.

Это одна из главных идей.

Она должна:

```text
исследовать новые Skills
найти новые Registry
обнаружить новые компоненты
найти ошибки
сравнить реализации
обновить знания
```

---

### CONTRA:

Не в первой версии.

Автономное самоулучшение — огромный источник неконтролируемого поведения.

Представим:

```text
Librarian
 ↓
нашёл новый Skill
 ↓
AI решил, что он лучше
 ↓
обновил правило
 ↓
новое правило изменило генерацию
 ↓
генератор создал другую архитектуру
 ↓
тесты случайно прошли
```

И через месяц мы уже не знаем, почему система работает именно так.

---

### PRO:

Тогда:

```text
research
≠
promotion
```

Исследовать автоматически можно.

Продвигать изменение в production — только после проверки.

---

### Главный архитектор:

Именно.

Фиксируем:

```text
AUTONOMOUS DISCOVERY
        ↓
      REVIEW
        ↓
    VALIDATION
        ↓
     PROMOTION
```

А не:

```text
AUTONOMOUS DISCOVERY
        ↓
PRODUCTION
```

---

# Вопрос №5

## А нужен ли вообще такой огромный набор агентов?

### PRO:

Да, потому что роли конфликтуют.

Например:

```text
Designer
```

хочет визуально изменить интерфейс.

А:

```text
Engineer
```

думает о maintainability.

А:

```text
QA
```

видит accessibility проблему.

А:

```text
License Agent
```

может обнаружить проблему с происхождением компонента.

Один AI не всегда должен сам себе давать все оценки.

---

### CONTRA:

Но 12 агентов могут превратиться в театр:

```text
Agent 1 сказал...
Agent 2 ответил...
Agent 3 согласился...
Agent 4 исправил...
Agent 5 перепроверил...
```

и потратить огромное количество токенов на обсуждение.

Лучше иметь:

```text
few strong roles
+
tools
+
explicit workflow
```

а не армию AI-персонажей.

---

### Главный архитектор:

Это критически важно.

Пока мы **не принимаем архитектуру из 15–20 постоянно работающих агентов**.

Вместо этого:

```text
AGENT RUNTIME
      ↓
ROLE
      ↓
TASK
      ↓
TOOLS
      ↓
POLICY
```

То есть агент — это не обязательно отдельная программа.

Это может быть:

> одна модель + конкретная роль + набор разрешённых инструментов + конкретная задача.

---

# Первый важный пересмотр архитектуры

После этого первого раздела первоначальная схема:

```text
AI-LAB
 ├── 20 агентов
 ├── Knowledge
 ├── Registry
 ├── Design
 ├── Browser
 ├── Projects
 └── Everything
```

уже недостаточно точна.

Новая гипотеза выглядит так:

```text
                    ┌─────────────────────┐
                    │      AI CORE        │
                    │                     │
                    │ Orchestration       │
                    │ Model Routing       │
                    │ Policies            │
                    │ Tasks               │
                    │ Evidence            │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        KNOWLEDGE          CAPABILITIES      TOOLS
              │                │                │
        ┌─────┼─────┐     ┌────┼────┐      Browser
        │     │     │     │    │    │      Git
      Skills Components Design  Code  QA    Files
      Docs   Patterns  Systems
              │
              ▼
        ┌──────────────┐
        │ DOMAIN LAYER │
        ├──────────────┤
        │ UI           │
        │ Web          │
        │ Desktop      │
        │ Mobile       │
        │ Engineering  │
        └──────┬───────┘
               │
               ▼
          PROJECT FACTORY
               │
        ┌──────┼───────┐
        ▼      ▼       ▼
      Web    Desktop  Mobile
```

---

# Решение главного архитектора по разделу №1

## 1. Что строим?

Не просто Component Library.

Не просто UI Generator.

Не просто Agent Framework.

Рабочее определение:

> **AI Development Platform с первым специализированным доменом UI Engineering.**

Рабочее имя пока можно оставить:

> **AI-LAB**

---

## 2. Что НЕ делаем?

Не строим сразу:

- универсальную систему для любых программ;
- автономного AI, который сам меняет архитектуру;
- огромную армию специализированных агентов;
- единую глобальную environment со всеми npm-пакетами;
- гигантскую базу «всего подряд».

---

## 3. Что строим в первую очередь?

Первый production-домен:

```text
UI / Web Development
```

с возможностью позже подключать:

```text
Desktop
Mobile
Data
Engineering
Calculations
```

---

## 4. Главный принцип

Очень важное решение:

> **AI-LAB не должен знать всё. Он должен уметь находить, проверять, структурировать и применять знания.**

Это принципиально отличается от попытки «запихнуть в AI всю документацию интернета».

---

## 5. Knowledge Base

Не:

```text
knowledge/
   куча файлов
```

а:

```text
SOURCE
   ↓
RAW
   ↓
ANALYZED
   ↓
VERIFIED
   ↓
CURATED
   ↓
PRODUCTION
```

с:

```text
provenance
evidence
version
license
dependencies
confidence
tests
```

---

## 6. Агенты

Не фиксированный зоопарк:

```text
Agent1
Agent2
Agent3
...
Agent20
```

а:

```text
MODEL
 +
ROLE
 +
TOOLS
 +
POLICY
 +
TASK
```

Это оставляет возможность менять количество агентов без перелома архитектуры.

---

# Что мы обнаружили уже на первом разделе

И вот это, на мой взгляд, самое ценное в этом формате.

В нашей исходной концепции была потенциальная **брешь №1**:

> Мы слишком рано начали проектировать внутренние механизмы, не определив границу системы.

Из-за этого мы начали обсуждать:

- Registry;
- Skills;
- Agents;
- Playwright;
- Design Genome;
- Component Graph;
- Knowledge Base;
- Model Router;

как будто уже точно знаем, **какой продукт строим**.

Теперь это исправлено.

---

# Зафиксированный результат раздела №1

```text
AI-LAB
│
├── AI CORE
│   ├── Orchestration
│   ├── Model Routing
│   ├── Policies
│   ├── Tasks
│   └── Evidence
│
├── KNOWLEDGE
│   ├── Skills
│   ├── Components
│   ├── Design Systems
│   ├── Patterns
│   └── Documentation
│
├── CAPABILITIES
│   ├── UI
│   ├── Web
│   ├── Testing
│   ├── Browser
│   └── Code
│
├── TOOLS
│   ├── Git
│   ├── Playwright
│   ├── Files
│   ├── CLI
│   └── MCP
│
├── DOMAIN: UI
│   ├── Design Intelligence
│   ├── Component Intelligence
│   ├── Composition
│   ├── Reconstruction
│   └── Visual QA
│
└── PROJECT FACTORY
```

И только **после этого** мы можем начинать спорить о том, как конкретно устроены агенты, Registry, Skills и т.д.

Следующим сообщением, когда ты напишешь **«раздел 2»**, я не буду просто продолжать список. Мы проведём **такой же двухраундовый архитектурный спор по разделу №2 — «Цель и конечный результат системы»**, причём участники будут специально атаковать решения, принятые здесь: например, стоит ли вообще делать AI-LAB долгоживущей платформой, нужен ли нам конечный «Project Factory» и не пытаемся ли мы снова построить слишком много.

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу №2. Здесь специально будем атаковать уже принятое определение: возможно, мы всё ещё формулируем цель слишком широко и пытаемся построить платформу вместо конкретной полезной машины.

---

**Assistant:**

# Раздел №2 — ЦЕЛЬ И КОНЕЧНЫЙ РЕЗУЛЬТАТ

Здесь я хочу сделать спор жёстче, чем в первом разделе.

В разделе №1 мы решили:

> **AI-LAB — это AI Development Platform, а UI/Web — первый домен.**

Но это пока **описание устройства**, а не цель.

И это принципиальная разница.

Современные концепции software factory тоже обычно определяют factory не как набор технологий, а как повторяемый производственный контур: задача → контекст → выполнение → проверка → результат → обратная связь. citeturn0search0turn0search5

При этом исследования 2026 года показывают важную проблему: качество агентной разработки сильно зависит не только от модели, но и от harness, окружения, инструментов и feedback loop. citeturn0academia29turn0academia28

Поэтому сейчас главный вопрос:

> **Что именно AI-LAB должен производить и каким образом мы поймём, что он действительно достиг цели?**

---

# ЭТАП 1 — СПОР

## Архитектор А — PRO

Я бы сформулировал цель так:

> **AI-LAB должен превращать человеческое намерение в работающий программный продукт, используя накопленные знания, компоненты, инструменты, Skills, агентов и автоматизированную проверку.**

Например, пользователь говорит:

> «Мне нужен интерфейс для учёта исполнительной документации по объектам строительства».

Система должна не просто написать несколько `.tsx` файлов.

Она должна:

```text
USER INTENT
      ↓
понимание задачи
      ↓
исследование
      ↓
выбор архитектуры
      ↓
выбор компонентов
      ↓
выбор design system
      ↓
создание проекта
      ↓
реализация
      ↓
тестирование
      ↓
визуальная проверка
      ↓
исправления
      ↓
готовый проект
```

А затем сохранить полученный опыт.

То есть следующий похожий проект будет создаваться лучше.

Именно это превращает AI из:

> «генератора кода»

в:

> **инженерную производственную систему.**

---

# Архитектор B — CONTRA

Формулировка слишком большая.

«Превращать человеческое намерение в работающий программный продукт» — это практически обещание:

> «мы строим автономного разработчика».

А мы пока даже не доказали, что система способна стабильно создать хороший dashboard.

Более того, современные исследования реальной агентной разработки показывают, что даже сложные модели испытывают проблемы на полноценных инженерных задачах, где требуется работать с окружением, зависимостями, сервисами и end-to-end проверками. citeturn0search3

Поэтому цель должна быть не:

> «создавать любое ПО».

А:

> **систематически повышать качество и надёжность AI-разработки.**

А производство продукта — уже следствие.

---

## PRO

Но если мы так сузим цель, мы можем построить прекрасную исследовательскую систему, которая ничего не производит.

Получится:

```text
исследовали 21st
исследовали shadcn
исследовали Skills
создали Knowledge Base
создали Registry
изучили Design Systems
```

И всё.

Пользователь:

> «Хорошо. А приложение где?»

---

## CONTRA

Это справедливо.

Но есть другая крайность.

Можно сделать:

```text
prompt
 ↓
agent
 ↓
code
```

и назвать это AI Software Factory.

Но тогда вся наша сложная инфраструктура окажется декоративной.

Поэтому цель должна состоять из **двух уровней**:

### Уровень A — способность

Система должна накапливать:

```text
knowledge
skills
patterns
components
design systems
tools
evaluation
```

### Уровень B — результат

Она должна использовать их для:

```text
projects
features
interfaces
applications
```

---

# Главный архитектор

Здесь уже появляется более точная конструкция.

Не:

> AI-LAB = генератор программ.

И не:

> AI-LAB = база знаний.

А:

> **AI-LAB = система, которая превращает накопленные инженерные знания и инструменты в воспроизводимый процесс создания и улучшения программных продуктов.**

Но это всё ещё слишком абстрактно.

Поэтому идём дальше.

---

# Вопрос №1: что является единицей производства?

Предположим, пользователь говорит:

> «Сделай мне страницу dashboard».

Что производит фабрика?

### Вариант PRO

Она производит:

```text
Project
```

То есть полноценный проект.

---

### CONTRA

Слишком крупная единица.

Нужно иметь несколько уровней:

```text
TASK
 ↓
CHANGE
 ↓
FEATURE
 ↓
BLOCK
 ↓
COMPONENT
 ↓
PROJECT
```

Например:

```text
Создай таблицу
```

не должно запускать создание нового проекта.

А:

```text
Создай систему управления исполнительной документацией
```

может.

---

### Главный архитектор

Согласен.

Фиксируем:

> **AI-LAB не имеет единственной производственной единицы.**

Минимальная единица:

```text
Task
```

А результатом может быть:

```text
Component
Block
Page
Feature
Project
Research Artifact
Knowledge Artifact
```

Это важное изменение.

---

# Вопрос №2: должна ли система всегда писать код?

### PRO

В конечном счёте — да.

Иначе это исследовательская система.

---

### CONTRA

Нет.

Это очень опасное ограничение.

Например:

> «Изучи 50 современных таблиц и определи, какие паттерны pagination сейчас наиболее распространены».

Результат:

```text
research report
```

Код не нужен.

Другой запрос:

> «Проанализируй этот сайт».

Результат:

```text
design system
component inventory
interaction map
```

Опять код необязателен.

Третий:

> «Найди слабое место нашего UI».

Результат:

```text
critique
```

Поэтому:

> **код — один из типов результата, а не обязательный результат каждого workflow.**

---

### Главный архитектор

Принимается.

Это очень полезное разделение.

```text
                    AI-LAB
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
   KNOWLEDGE        ARTIFACT          SOFTWARE
   ARTIFACT         ARTIFACT          ARTIFACT
```

---

# Вопрос №3: а что значит «хороший результат»?

Здесь появляется гораздо более серьёзная брешь.

Предположим, AI создал приложение.

Оно:

- запускается;
- собирается;
- TypeScript не ругается;
- тесты проходят.

Можно считать работу законченной?

### PRO

Нет.

Особенно для UI.

Потому что может быть:

```text
build ✓
tests ✓
lint ✓
```

но визуально:

```text
❌ плохая типографика
❌ неправильные интервалы
❌ кривые responsive states
❌ неправильные иконки
❌ плохая иерархия
❌ неработающий hover
❌ плохая density
```

Это как раз та проблема, которую мы уже обнаруживали с генерацией интерфейсов по скриншотам.

---

### CONTRA

Согласен, но visual similarity тоже недостаточна.

Можно идеально повторить плохой интерфейс.

Например:

```text
Visual fidelity = 95%
```

но:

```text
Accessibility = 40%
```

или:

```text
Maintainability = poor
```

Поэтому «качество» должно быть многомерным.

---

### Главный архитектор

Фиксируем.

У нас появляется **Quality Vector**:

```text
QUALITY
│
├── Functional
├── Visual
├── Responsive
├── Accessibility
├── Interaction
├── Code Quality
├── Maintainability
├── Performance
├── Security
└── Provenance
```

И очень важно:

**не превращаем это сейчас в один магический score 0–100.**

Почему?

Потому что:

```text
Visual 95
A11y 50
Code 90
```

не означает автоматически:

> «система на 78% хорошая».

Разные типы качества имеют разные критерии.

---

# Вопрос №4: должна ли система сама решать, что результат достаточно хорош?

### PRO

В идеале — да.

Она должна иметь Quality Gates:

```text
BUILD
 ↓
TEST
 ↓
VISUAL QA
 ↓
A11Y
 ↓
RESPONSIVE
 ↓
CODE REVIEW
 ↓
RELEASE
```

Если что-то не прошло:

```text
REPAIR
 ↓
TEST AGAIN
```

---

### CONTRA

Но здесь возникает опасность **самопроверки**.

Один AI:

```text
создал код
```

а потом:

```text
сам сказал, что код хороший
```

Это не независимая проверка.

---

### PRO

Поэтому разные этапы должны иметь разные контексты.

Например:

```text
Implementation Agent
       ↓
       CODE
       ↓
Independent QA
```

QA не должен просто читать объяснение автора.

Он должен открыть реальный проект.

---

### CONTRA

И лучше вообще оценивать результат через наблюдаемые артефакты:

```text
screenshots
DOM
test results
browser traces
build logs
accessibility tree
performance data
```

а не через:

> «AI считает, что всё хорошо».

---

### Главный архитектор

Это принимается как фундаментальный принцип.

> **AI-LAB должен оценивать результат по evidence, а не по самооценке агента.**

---

# Вопрос №5: зачем системе вообще становиться «умнее» со временем?

Это ключевой вопрос.

### PRO

Потому что именно здесь возникает долгосрочная ценность.

Сегодня:

```text
UI task #1
```

система получила опыт.

Завтра:

```text
UI task #20
```

она уже знает:

```text
какие компоненты работают
какие библиотеки ломались
какие design patterns были успешны
какие Skills полезны
какие подходы провалились
```

Через год:

```text
AI-LAB
```

должен быть существенно сильнее, чем в первый день.

---

### CONTRA

Но здесь есть опасность.

**Опыт ≠ истина.**

Если система один раз сделала хороший dashboard с определённой библиотекой, нельзя автоматически заключить:

> «Эта библиотека лучшая».

Иначе получаем reinforcement of accidental choices.

---

### PRO

Поэтому сохраняем не:

```text
"используй библиотеку X"
```

а:

```text
Observation
Context
Result
Evidence
Confidence
```

Например:

```text
Experiment #183

Task:
data dashboard

Candidate:
Library X

Result:
build ✓
visual ✓
a11y ✓
performance △

Context:
React + desktop + dense tables

Conclusion:
good candidate for dense data tables
```

---

### Главный архитектор

Это сильное решение.

AI-LAB должен накапливать **опыт экспериментов**, а не просто набор догм.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь я специально заставлю обоих участников атаковать саму концепцию.

---

## CONTRA: главная атака

Я считаю, что мы всё ещё совершаем ошибку.

Мы говорим:

> «Система должна становиться лучше».

Но **лучше относительно чего?**

Если нет эталона, система может бесконечно менять себя.

Например:

```text
Version 1
```

работала нормально.

Потом:

```text
Version 2
```

стала красивее.

Потом:

```text
Version 3
```

стала современнее.

Потом:

```text
Version 4
```

стала более «AI-native».

Но мы не можем доказать, что:

```text
V4 > V1
```

---

## PRO

Тогда нужны benchmarks.

Например:

```text
Benchmark UI-001
Benchmark UI-002
Benchmark Dashboard-001
Benchmark Form-001
Benchmark Table-001
```

И каждый новый runtime должен прогоняться через них.

---

## CONTRA

Да.

И это меняет саму цель.

AI-LAB должен не просто:

> создавать приложения.

Он должен:

> **создавать приложения в контролируемом, измеримом процессе.**

---

# Главный архитектор

Это, пожалуй, главное решение второго раздела.

Мы получаем формулу:

```text
                 INTENT
                    ↓
              AI-LAB ENGINE
                    ↓
              ARTIFACT
                    ↓
                 PROOF
                    ↓
               EVALUATION
                    ↓
              ACCEPT / REPAIR
                    ↓
                RESULT
                    ↓
                LEARNING
```

То есть центральным объектом системы становится не **AI-agent**.

И даже не **component**.

А:

# **Task → Artifact → Evidence → Evaluation**

---

# Теперь атакуем слово «Factory»

## CONTRA

Я бы вообще убрал слово Factory из технического названия.

Потому что оно создаёт неправильную ментальную модель:

```text
INPUT
 ↓
FACTORY
 ↓
SOFTWARE
```

А наша система занимается ещё:

- исследованием;
- обучением;
- анализом;
- реконструкцией;
- экспериментами;
- каталогизацией;
- оценкой.

Это скорее:

> **AI Engineering Platform / AI Development Lab**

---

## PRO

Но Factory полезна как верхнеуровневая концепция.

Потому что она показывает:

```text
repeatability
standardization
quality gates
automation
feedback
```

И это соответствует современному пониманию software factory как управляемого процесса, а не просто набора агентов. citeturn0search0

---

## Главный архитектор

Разделяем:

### Внутреннее название:

**AI-LAB**

### Архитектурная концепция:

**AI Development Platform**

### Производственный контур:

**Software Factory**

То есть:

```text
AI-LAB
│
└── AI Development Platform
        │
        ├── Research
        ├── Knowledge
        ├── Capabilities
        ├── Evaluation
        │
        └── Software Factory
                │
                ├── UI
                ├── Web
                └── future domains
```

Это намного точнее.

---

# Теперь самый неприятный вопрос

## А если вообще ничего не строить?

### CONTRA

Это обязательный вопрос.

Допустим, мы можем использовать уже существующие:

- Claude Code;
- Codex;
- Gemini;
- Cursor;
- GitHub;
- shadcn;
- Playwright;
- существующие registries;
- существующие MCP;
- существующие Skills.

Зачем человеку самостоятельно строить ещё один огромный слой?

---

## PRO

Потому что существующие инструменты решают отдельные задачи.

Нам нужен слой, который знает:

```text
какие skills существуют
какие registries существуют
какие компоненты есть
какие design systems есть
что уже проверено
что работало
что сломалось
какие источники доверенные
какие компоненты совместимы
какой workflow использовать
```

И главное:

> этот слой должен принадлежать пользователю и быть переносимым между моделями.

---

## CONTRA

Вот это уже гораздо более сильный аргумент.

Не:

> «мы сделаем конкурента Cursor».

А:

> **«мы строим собственный инженерный слой поверх постоянно меняющегося рынка AI-инструментов».**

---

# РЕШЕНИЕ ГЛАВНОГО АРХИТЕКТОРА

## Цель AI-LAB v0.1

Формулируем так:

> **AI-LAB — это персональная AI Development Platform, которая превращает инженерную задачу в проверяемый программный артефакт, используя накопленные знания, Skills, компоненты, инструменты и модели, а затем сохраняет результаты экспериментов и проверок для последующего использования.**

Это пока наша **рабочая формулировка**, не финальная конституция.

---

# Что AI-LAB должен уметь в конечном итоге

Не просто:

```text
CREATE
```

А четыре фундаментальных режима.

### 1. RESEARCH

```text
найди
изучи
сравни
извлеки
структурируй
```

### 2. BUILD

```text
создай
собери
реализуй
интегрируй
```

### 3. VERIFY

```text
запусти
протестируй
сравни
проверь
найди дефекты
```

### 4. LEARN

```text
сохрани опыт
обнови знания
зафиксируй эксперимент
обнови capability
```

Получается:

```text
             ┌───────────┐
             │  RESEARCH │
             └─────┬─────┘
                   ↓
             ┌───────────┐
             │   BUILD   │
             └─────┬─────┘
                   ↓
             ┌───────────┐
             │  VERIFY   │
             └─────┬─────┘
                   ↓
             ┌───────────┐
             │   LEARN   │
             └─────┬─────┘
                   │
                   └──────────→ RESEARCH
```

И вот это уже действительно **замкнутый цикл**.

---

# Но мы НЕ принимаем пока

Следующие вещи оставляем открытыми:

### ❓ 1. Нужна ли полноценная Project Factory?

Пока — вероятно да, но её реальный масштаб ещё не определён.

### ❓ 2. Нужна ли автономность 24/7?

Не решено.

### ❓ 3. Как именно измерять качество?

Пока определили категории, но не методику.

### ❓ 4. Как система учится на опыте?

Есть идея Evidence/Experiments, но механизм ещё не проектировали.

### ❓ 5. Что должно находиться локально, а что во внешних сервисах?

Открытый вопрос.

### ❓ 6. Какова минимальная полезная версия?

**Это особенно важно.**

Пока мы всё ещё склонны думать слишком масштабно.

---

# Итог раздела №2

Главная найденная брешь:

> **Мы первоначально определяли AI-LAB через его внутренние механизмы — агенты, Registry, Skills, Knowledge Base, Playwright и т.д. — вместо определения через производимый результат и доказательство его качества.**

После спора центр архитектуры меняется:

```text
БЫЛО

AI
 ↓
AGENTS
 ↓
TOOLS
 ↓
COMPONENTS
 ↓
CODE
```

становится:

```text
                    USER INTENT
                         ↓
                       TASK
                         ↓
                  AI-LAB ENGINE
                         ↓
                     ARTIFACT
                         ↓
                      EVIDENCE
                         ↓
                    EVALUATION
                    ↙         ↘
                REPAIR       ACCEPT
                    ↘         ↙
                      RESULT
                         ↓
                     LEARNING
                         ↓
                  KNOWLEDGE BASE
```

И это очень существенное изменение.

**Главный объект архитектуры теперь — не агент.  
Не компонент.  
Не модель.  
Не Registry.**

А:

> **управляемый жизненный цикл инженерной задачи от намерения до проверенного результата.**

Это также объясняет, зачем нам вообще может понадобиться сложная система: её ценность не в том, что она «умеет вызвать Claude/Gemini», а в том, что она создаёт воспроизводимый контур **задача → выполнение → доказательство → оценка → исправление → накопление опыта**. Такой подход соответствует и текущим архитектурам software factory, где вокруг агента строятся контекст, инструменты, проверки и трассируемый результат. citeturn0search0turn0search11

**Раздел №2 закрыт предварительно.**

Следующий — **№3 «Архитектурные принципы»**. Там спор будет ещё более фундаментальным: участники попробуют определить, **какие правила мы вообще запрещаем нарушать**, даже если в конкретном случае AI предлагает более быстрое или удобное решение.

---

**User:**

Далее

---

**Assistant:**

Теперь раздел №3. Здесь будем спорить уже не о функциях, а о «законах физики» системы: что должно оставаться неизменным, даже если через полгода модели, библиотеки и инструменты полностью поменяются.

---

**Assistant:**

# Раздел №3 — АРХИТЕКТУРНЫЕ ПРИНЦИПЫ

После первых двух разделов у нас уже есть две опорные точки:

**Раздел 1:** AI-LAB — не просто UI-библиотека и не один AI-агент, а персональная AI Development Platform.

**Раздел 2:** основной цикл:

```text
Intent
  ↓
Task
  ↓
Artifact
  ↓
Evidence
  ↓
Evaluation
  ↓
Repair / Accept
  ↓
Result
  ↓
Learning
```

Теперь возникает вопрос:

> **Какие правила не должна нарушать эта система, даже если это кажется удобнее, дешевле или быстрее?**

Именно здесь обычно закладывается фундаментальная архитектурная ошибка: правила формулируют слишком общо — «модульность», «масштабируемость», «чистый код» — а потом они никак не влияют на реальные решения.

Поэтому проведём два раунда.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор А — PRO

Я предлагаю сразу зафиксировать 10 принципов.

### P1. AI не должен быть источником истины

AI генерирует гипотезы и решения.

Истиной должны считаться проверяемые артефакты:

```text
documentation
source code
tests
browser output
build result
observations
experiment results
```

---

### P2. Всё важное должно иметь происхождение

Для знания:

```text
откуда взялось?
когда?
какая версия?
какой источник?
можно ли использовать?
проверялось ли?
```

Для компонента:

```text
original source
license
version
derived/reconstructed
modifications
```

---

### P3. Research ≠ Production

Исследование не должно автоматически менять рабочую систему.

```text
DISCOVERED
    ↓
ANALYZED
    ↓
VALIDATED
    ↓
CURATED
    ↓
PRODUCTION
```

---

### P4. Проект не должен зависеть от AI-LAB

AI-LAB может создавать проект.

Но после создания проект должен оставаться нормальным программным проектом.

Если AI-LAB выключить:

```text
PROJECT
```

должен продолжать:

```text
build
test
run
develop
```

---

### P5. Проекты изолированы

Каждый проект:

```text
dependencies
config
runtime
tests
assets
```

имеет собственное окружение.

Не должно быть:

```text
GLOBAL NODE ENVIRONMENT
```

в котором установлено всё подряд.

---

### P6. AI работает через инструменты, а не через магию

Вместо:

> «AI знает, как выглядит сайт»

ему предоставляем:

```text
browser
DOM
screenshots
computed styles
accessibility tree
source
tests
filesystem
git
```

---

### P7. Система должна уметь сказать «не знаю»

Если:

```text
evidence insufficient
```

нельзя превращать предположение в факт.

---

### P8. Любое автоматическое изменение должно быть обратимо

```text
change
 ↓
version
 ↓
test
 ↓
promote
```

Есть rollback.

---

### P9. У сложных операций должен быть budget

Например:

```text
max tokens
max iterations
max browser actions
max time
max cost
```

Чтобы:

```text
agent
 ↓
repair
 ↓
repair
 ↓
repair
 ↓
...
```

не превратился в бесконечный цикл.

---

### P10. Простота интерфейса пользователя не означает простоту ядра

Пользователь должен иметь возможность написать:

```text
ui create dashboard
```

но внутри может существовать сложная orchestration system.

---

# Архитектор B — CONTRA

Список хороший.

И слишком безопасный.

Проблема в том, что многие пункты являются **реализационными решениями**, а не фундаментальными принципами.

Например:

> «AI должен работать через инструменты».

Почему?

Возможно, через пять лет модель сможет напрямую выполнять значительную часть операций без нашего tool layer.

Если мы сделаем это принципом, сами себя ограничим.

---

## PRO

Но без tools мы теряем контроль.

---

## CONTRA

Тогда настоящий принцип:

> **критические действия должны быть наблюдаемыми и контролируемыми.**

А способ реализации может меняться.

Сегодня:

```text
Tool
```

завтра:

```text
Model-native capability
```

послезавтра:

```text
specialized runtime
```

Принцип остаётся.

---

# Главный архитектор

Это первая важная коррекция.

Нам необходимо разделить:

### Архитектурный принцип

и

### Техническую реализацию принципа.

Например:

```text
ПРИНЦИП:
наблюдаемость действий

РЕАЛИЗАЦИЯ v1:
tool calls + logs + traces
```

Это позволяет через два года заменить технологию, не переписывая философию системы.

---

# Следующая атака

## CONTRA

Я вообще предлагаю сократить список.

Нам нужны не 20 принципов.

Нужны примерно **7 фундаментальных законов**.

Потому что если принципами объявить всё:

```text
versioning
rollback
budget
license
provenance
modularity
observability
security
...
```

через год любой инженер сможет оправдать решение фразой:

> «Это соответствует одному из наших принципов».

И принципы перестанут быть ограничителями.

---

## PRO

Тогда можно сделать иерархию.

```text
FOUNDATIONAL PRINCIPLES
        ↓
ARCHITECTURAL RULES
        ↓
ENGINEERING POLICIES
        ↓
IMPLEMENTATION
```

Например:

```text
FOUNDATIONAL
"Нельзя терять контроль над системой"

        ↓

ARCHITECTURAL
"Изменения должны быть трассируемыми"

        ↓

POLICY
"Production changes требуют evidence"

        ↓

IMPLEMENTATION
Git + database + logs
```

---

## Главный архитектор

Это принимается.

И становится одним из ключевых решений раздела №3.

---

# ЭТАП 2 — РАЗБОР ФУНДАМЕНТАЛЬНЫХ ПРИНЦИПОВ

Теперь каждому участнику разрешено атаковать каждый принцип.

---

# ПРИНЦИП №1

# «AI НЕ ЯВЛЯЕТСЯ ИСТОЧНИКОМ ИСТИНЫ»

## PRO

Это должно быть железным правилом.

AI может сказать:

> «Используй библиотеку X».

Но система должна понимать:

```text
это AI recommendation
```

а не:

```text
fact
```

Если документация говорит другое:

```text
AI ≠ authority
```

---

## CONTRA

Согласен, но есть тонкость.

Иногда AI может делать вывод, которого нет напрямую в документации.

Например:

```text
Документация A
+
Документация B
+
код
+
эксперимент
```

AI делает инженерный вывод.

Нельзя запрещать использовать выводы модели.

---

## Главный архитектор

Тогда правило формулируем точнее:

> **AI-generated claims должны иметь статус, отличный от verified evidence.**

Например:

```text
FACT
OBSERVATION
INFERENCE
HYPOTHESIS
RECOMMENDATION
```

Это намного сильнее, чем просто «AI не доверять».

---

# ПРИНЦИП №2

# «ВСЁ ВАЖНОЕ ИМЕЕТ PROVENANCE»

## CONTRA

Это может превратить систему в бюрократию.

Представим:

```text
margin: 16px
```

Нам что, хранить происхождение каждого CSS-значения?

---

## PRO

Нет.

Provenance нужна на уровне **значимых объектов и решений**.

Например:

```text
Design Token Set
Component
Skill
Rule
Research Finding
Architecture Decision
External Source
```

Не обязательно:

```text
div padding="16px"
```

---

## Главный архитектор

Правило:

> **Provenance должна быть пропорциональна значимости объекта.**

То есть:

```text
атомарное значение
    ↓
минимальная metadata

архитектурное решение
    ↓
полная provenance
```

---

# ПРИНЦИП №3

# «RESEARCH ≠ PRODUCTION»

Здесь оба согласны.

Но появляется вопрос.

### CONTRA

А что если система нашла очевидное исправление:

```text
broken dependency
```

Почему она не может автоматически исправить?

---

### PRO

Потому что изменение может иметь побочные эффекты.

---

### CONTRA

Тогда система станет слишком медленной.

Если каждое:

```text
npm patch update
```

требует человеческого согласования, автономность теряется.

---

### Главный архитектор

Значит, нужен не бинарный:

```text
AUTO / HUMAN
```

а **уровень риска**.

Например:

```text
RISK 0
безопасная операция
→ automatic

RISK 1
локальное изменение
→ automatic + tests

RISK 2
изменение проекта
→ automatic + full validation

RISK 3
изменение production knowledge
→ approval

RISK 4
изменение system architecture
→ explicit approval
```

Это значительно лучше.

---

# ПРИНЦИП №4

# «PROJECT НЕ ДОЛЖЕН ЗАВИСЕТЬ ОТ AI-LAB»

## PRO

Это один из самых важных принципов.

Если мы создали приложение:

```text
AI-LAB
```

а потом AI-LAB исчез:

```text
```

приложение должно продолжать работать.

---

## CONTRA

Но некоторые проекты могут использовать AI-LAB runtime.

Например:

```text
adaptive UI
AI-driven analytics
dynamic component registry
```

Тогда runtime dependency будет нормальной.

---

## Главный архитектор

Тогда формулировка:

> **AI-LAB не должен создавать неявные зависимости.**

Если проект зависит от AI-LAB:

```text
dependency must be explicit
```

Например:

```text
project
  ↓
ai-lab-sdk
```

это допустимо.

Но:

```text
project
  ↓
магически требует локальную папку AI-LAB
```

не допускается.

---

# ПРИНЦИП №5

# «ИЗОЛЯЦИЯ ПРОЕКТОВ»

Здесь спор почти отсутствует.

Но CONTRA добавляет:

Нельзя изолировать вообще всё.

Нам понадобится:

```text
shared cache
shared registry
shared package mirror
shared knowledge
shared browser infrastructure
```

---

### Главный архитектор

Правильнее:

> **Shared infrastructure допустима. Shared mutable state — контролируемая.**

Например:

```text
COMMON
│
├── Registry
├── Cache
├── Knowledge
└── Tools
```

Проекты:

```text
PROJECT A
PROJECT B
PROJECT C
```

не должны случайно изменять друг друга.

---

# ПРИНЦИП №6

# «НАБЛЮДАЕМОСТЬ»

Это новый кандидат на фундаментальный принцип.

## PRO

Каждое существенное действие AI-LAB должно быть объяснимо:

```text
кто
что
почему
какие данные использовал
какие инструменты вызвал
что изменил
какой результат получил
```

---

## CONTRA

«Объяснимо» опасно.

Мы не можем требовать от модели раскрытия её внутреннего chain-of-thought.

Нам нужны **execution traces**, а не скрытые рассуждения.

---

## Главный архитектор

Очень важное уточнение.

Не:

> «покажи мысли модели».

А:

```text
TASK
INPUTS
SOURCES
TOOLS USED
ACTIONS
ARTIFACT CHANGES
TESTS
RESULTS
DECISION
```

То есть:

> **операционная трассируемость, а не внутренние рассуждения модели.**

---

# ПРИНЦИП №7

# «ОБРАТИМОСТЬ»

## PRO

Любое существенное изменение:

```text
version
commit
snapshot
artifact
```

должно позволять:

```text
rollback
```

---

## CONTRA

Не всё нужно версионировать одинаково.

Например:

```text
cache
temporary screenshot
browser trace
```

не должны иметь тот же lifecycle, что:

```text
production component
architecture rule
knowledge object
```

---

### Главный архитектор

Следовательно:

> **Все значимые состояния должны быть восстановимыми; не каждый технический файл обязан быть immutable artifact.**

---

# ПРИНЦИП №8

# «СИСТЕМА ДОЛЖНА УМЕТЬ СКАЗАТЬ НЕ ЗНАЮ»

Здесь возникает неожиданно важная проблема.

## CONTRA

Это невозможно гарантировать одним prompt.

Модель может уверенно ошибиться.

---

## PRO

Тогда «не знаю» должно быть системным состоянием:

```text
UNKNOWN
```

а не просто текстом модели.

Например:

```text
Knowledge status:
UNKNOWN

Reason:
insufficient evidence

Required:
2 independent sources
or
runtime experiment
```

---

### Главный архитектор

Да.

Это очень сильный принцип:

> **неподтверждённость должна быть допустимым состоянием системы.**

Система не обязана иметь ответ.

Она обязана корректно представлять отсутствие достаточных доказательств.

---

# ПРИНЦИП №9

# «BUDGET»

## CONTRA

Я бы вообще не делал budget фундаментальным принципом.

Это техническая политика.

---

## PRO

Но без него автономные агенты опасны:

```text
loop
loop
loop
loop
```

---

### Главный архитектор

Согласен с CONTRA относительно уровня.

Сам принцип:

> **Любой автономный процесс должен иметь ограничение ресурсов и условие остановки.**

А конкретно:

```text
tokens
time
cost
iterations
browser actions
```

— это уже policy.

---

# И теперь главный спор.

# НУЖНА ЛИ МОДУЛЬНОСТЬ?

Все архитекторы обычно автоматически отвечают:

> Да.

Но CONTRA специально возражает.

---

## CONTRA

Модульность часто становится самоцелью.

Мы можем получить:

```text id="2d1m8p"
agent-core
agent-runtime
agent-interface
agent-tools
agent-orchestrator
agent-registry
agent-memory
agent-policy
```

для задачи, которая могла решаться тремя файлами.

---

## PRO

Но без модульности система развалится по мере роста.

---

## CONTRA

Поэтому нужен другой принцип:

> **модульность появляется там, где существует независимая причина для изменения.**

Не:

> «давайте разделим».

А:

> «этот модуль имеет собственный lifecycle, responsibility или dependency boundary».

---

## Главный архитектор

Это оставляем.

Очень полезный принцип:

> **Не максимальная модульность, а управляемая связность.**

---

# ФИНАЛЬНАЯ СХЕМА ПРИНЦИПОВ

После двух раундов из первоначальных десяти технических правил получается более чистая система.

## Уровень I — ФУНДАМЕНТАЛЬНЫЕ ПРИНЦИПЫ

### 1. Evidence over assertion

```text
утверждение ≠ доказательство
```

AI не является источником истины.

---

### 2. Traceability

Значимые решения должны иметь:

```text
source
context
action
result
```

---

### 3. Explicitness

Скрытые зависимости запрещены.

```text
dependency
permission
risk
configuration
```

должны быть явными.

---

### 4. Reversibility

Значимые изменения должны быть восстановимы.

---

### 5. Isolation

Проекты и mutable state не должны случайно влиять друг на друга.

---

### 6. Uncertainty

```text
UNKNOWN
```

является нормальным состоянием.

---

### 7. Controlled autonomy

Автономность разрешена только в пределах:

```text
permission
risk
budget
stop condition
```

---

# Уровень II — АРХИТЕКТУРНЫЕ ПРАВИЛА

Из них уже выводятся:

```text
Research ≠ Production

Shared Infrastructure ≠ Shared Mutable State

AI recommendation ≠ Verified Fact

Tool ≠ Architecture Principle

Agent ≠ Independent Software Service

Project ≠ AI-LAB

Knowledge ≠ File Dump
```

---

# Уровень III — IMPLEMENTATION POLICIES

А уже здесь появятся:

```text
Git
Docker
Playwright
SQLite/Postgres
MCP
npm
pnpm
TypeScript
Python
logs
snapshots
CI
```

И вот здесь очень важное решение:

> **конкретные технологии не являются частью архитектурной религии AI-LAB.**

Если завтра появится инструмент лучше Playwright — мы можем заменить его.

Если появится другая модель — мы можем заменить её.

Если появится другая база — мы можем заменить её.

Фундамент должен остаться.

---

# Главная найденная брешь №3

Изначально мы говорили:

> «Давайте построим модульную, масштабируемую, автономную систему с агентами, Registry, Knowledge Base, Model Router и т.д.»

Проблема:

**это описание конструкции, а не ограничений.**

После спора получилась гораздо более сильная модель:

```text
             PRINCIPLES
                  │
                  ▼
            ARCHITECTURE
                  │
                  ▼
              POLICIES
                  │
                  ▼
          IMPLEMENTATION
```

А не:

```text
TECHNOLOGIES
     ↓
TRY TO FIND
PRINCIPLES AFTERWARDS
```

---

# Решение главного архитектора по разделу №3

На текущий момент **7 фундаментальных принципов AI-LAB**:

```text
┌──────────────────────────────────────────────┐
│              AI-LAB PRINCIPLES              │
├──────────────────────────────────────────────┤
│ 1. Evidence over assertion                   │
│ 2. Traceability                              │
│ 3. Explicitness                              │
│ 4. Reversibility                             │
│ 5. Isolation                                 │
│ 6. Explicit uncertainty                      │
│ 7. Controlled autonomy                       │
└──────────────────────────────────────────────┘
```

И ещё одно решение, которое я считаю особенно важным:

> **Если будущая функция AI-LAB нарушает один из этих принципов, мы сначала пересматриваем функцию, а не автоматически ослабляем принцип.**

Но это пока **решение v0.1**, а не незыблемая догма. В последующих разделах мы можем обнаружить, что какой-то принцип сформулирован неправильно.

---

Следующий будет **раздел №4 — AI-АГЕНТЫ**.

И там уже будет намного интереснее: мы специально попробуем **разнести в пух и прах нашу прежнюю идею Researcher / Designer / Engineer / Critic / QA / Repair / Librarian и т.д.** и выяснить, действительно ли нам нужны отдельные агенты, или мы снова создаём красивую, но бесполезную армию AI.

---

**User:**

Далее

---

**Assistant:**

Переходим к №4. Здесь я специально не буду защищать нашу прежнюю «команду из агентов»: сначала попробуем доказать, что она вообще нужна, а затем соберём минимальную модель, которая действительно масштабируется.

---

**Assistant:**

# Раздел №4 — AI-АГЕНТЫ

Здесь мы подходим к одному из самых спорных мест всей архитектуры.

До этого мы довольно легко нарисовали:

```text
ORCHESTRATOR
 ├── RESEARCHER
 ├── DESIGNER
 ├── ENGINEER
 ├── RECONSTRUCTOR
 ├── CRITIC
 ├── QA
 ├── REPAIR
 ├── LIBRARIAN
 └── ...
```

Выглядит логично.

Но теперь возникает неприятный вопрос:

> **А не придумали ли мы просто красивую команду виртуальных сотрудников, которая на практике будет медленной, дорогой и сложнее одного сильного агента?**

И это не теоретическая проблема. Современные работы по agentic software engineering всё чаще рассматривают не только «способности модели», а всю связку **model + harness + environment + tools + verification**. В частности, свежая работа *AI Harness Engineering* прямо выделяет task specification, context selection, tools, memory, state, observability, verification и permissions как отдельные обязанности runtime. citeturn0academia0

Поэтому сейчас попробуем полностью пересобрать наше представление об агентах.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор А — PRO

Я всё-таки защищаю разделение ролей.

Представим задачу:

> «Воспроизведи интерфейс этого сайта и сделай его лучше».

Один AI должен одновременно:

```text
исследовать сайт
понимать дизайн
найти компоненты
понять responsive
изучить interaction
написать код
запустить приложение
сравнить screenshots
найти ошибки
исправить ошибки
проверить accessibility
```

Это огромный контекст.

Поэтому логично разделить:

```text
Researcher
    ↓
Designer
    ↓
Engineer
    ↓
QA
    ↓
Repair
```

Каждый получает более узкую задачу.

---

# Архитектор B — CONTRA

Это классическая ловушка.

Мы предполагаем:

> узкая роль = лучший результат.

Но это не всегда так.

Разделение приводит к потере контекста.

Например:

### Researcher

исследовал:

```text
spacing: 12 / 16 / 24
font: Inter
radius: 8
```

Передал это Designer.

### Designer

решил:

```text
spacing scale = 4 / 8 / 16 / 24 / 32
```

Передал Engineer.

### Engineer

увидел:

```text
компонент X
```

и заменил его другой библиотекой.

### QA

потом говорит:

> «Почему визуально не похоже?»

Мы получили **telephone game**.

Каждый агент интерпретирует результат предыдущего.

---

## PRO

Но можно передавать структурированный контекст.

Например:

```json id="2s5t0x"
{
  "typography": {},
  "spacing": {},
  "colors": {},
  "components": {},
  "states": {},
  "responsive": {}
}
```

---

## CONTRA

Да.

Но тогда возникает следующий вопрос:

> зачем вообще несколько LLM, если один сильный агент может работать с этим же структурированным контекстом?

---

# Главный архитектор

Очень хороший удар.

Нам нельзя исходить из предположения:

> **«много агентов = лучше».**

Пока это не доказано экспериментом.

---

# Вопрос №1

## Что такое агент?

### PRO

Агент:

> AI, который получает задачу, использует инструменты, наблюдает результат и продолжает работу до достижения цели.

---

### CONTRA

Слишком размыто.

По этой формулировке агентом становится:

```text
LLM + terminal
```

и:

```text
LLM + browser
```

и:

```text
LLM + GitHub
```

и даже обычный coding assistant.

Нам нужно отделить:

```text
MODEL
```

от:

```text
AGENT RUNTIME
```

---

### Главный архитектор

Да.

Это уже фундаментальное решение.

```text id="8w0hni"
MODEL
  ↓
REASONING
  ↓
AGENT RUNTIME
  ↓
TOOLS
  ↓
ENVIRONMENT
  ↓
OBSERVATION
  ↓
MODEL
```

Агент — не модель.

Агент — **исполняемый цикл взаимодействия модели с окружением**.

И это хорошо согласуется с современным направлением agent-harness исследований: способность агента рассматривается как свойство всей системы, а не только foundation model. citeturn0academia0turn0academia3

---

# Вопрос №2

## Значит ли это, что нам нужны разные агенты?

### PRO

Да.

Потому что разные задачи требуют разных:

```text
tools
permissions
context
models
budgets
evaluation
```

Например:

```text
Research Agent
```

может иметь:

```text
web
docs
search
```

но не иметь:

```text
write_project
deploy
```

А:

```text
Implementation Agent
```

наоборот.

---

### CONTRA

Вот это уже значительно сильнее.

Получается, мы разделяем агентов не потому, что:

> «один умный, второй дизайнер, третий программист».

А потому что у них **разные operational boundaries**.

---

# Главный архитектор

Именно.

Это меняет нашу архитектуру.

Не:

```text
AGENT = PERSONALITY
```

а:

```text
AGENT = ROLE + CONTEXT + TOOLS + PERMISSIONS + POLICY + TASK
```

---

# Вопрос №3

## Нужен ли отдельный Designer Agent?

### PRO

Для нашей задачи — вероятно да.

Он должен анализировать:

```text
typography
layout
spacing
color
density
components
states
responsive
motion
```

и выдавать Design Contract.

---

### CONTRA

Но почему он должен быть отдельным постоянным агентом?

Это может быть просто:

```text
TASK TYPE:
DESIGN_ANALYSIS
```

исполняемая текущим runtime.

---

### PRO

То есть:

```text
Agent
```

становится не объектом архитектуры, а:

```text
execution mode
```

?

---

### Главный архитектор

Скорее так:

```text
AGENT DEFINITION
```

существует как конфигурация:

```yaml id="zj3c5v"
role: design-analysis
model: visual-capable-model
tools:
  - browser
  - screenshot
  - image-analysis
permissions:
  - read
  - research
output:
  - design-contract
```

Но runtime может создать его только тогда, когда это требуется.

---

# Важный вывод

**Агенты не должны быть постоянно живущими сущностями.**

Это не:

```text
10 виртуальных сотрудников,
которые сидят в офисе 24/7
```

А:

```text
TASK
 ↓
SELECT ROLE
 ↓
SELECT MODEL
 ↓
SELECT CONTEXT
 ↓
SELECT TOOLS
 ↓
EXECUTE
```

---

# Вопрос №4

## А нужен ли Orchestrator?

### PRO

Да.

Кто-то должен решить:

```text
какую задачу выполнить
каким агентом
какой моделью
в каком порядке
какие tools разрешить
когда остановиться
```

---

### CONTRA

Но если Orchestrator сам является LLM, появляется проблема:

```text
LLM
 ↓
решает
какому LLM
 ↓
поручить
задачу
```

Мы добавляем ещё один уровень неопределённости.

---

### PRO

Можно сделать deterministic orchestration.

Например:

```text
if task.type == "reconstruct":
    research
    design_analysis
    implementation
    visual_qa
    repair
```

---

### CONTRA

Но тогда система негибкая.

---

### Главный архитектор

Ответ:

> **Orchestrator должен быть гибридным.**

```text id="zqg3pf"
DETERMINISTIC CORE
        +
AI PLANNING
```

Deterministic часть отвечает за:

```text
permissions
budgets
state
gates
transitions
rollback
```

AI может решать:

```text
как лучше выполнить задачу
какие capabilities выбрать
какие исследования нужны
```

Но AI не должен сам себе выдавать неограниченные полномочия.

---

# Вопрос №5

## Нужно ли нескольким агентам спорить между собой?

### PRO

Иногда — да.

Например:

```text
Candidate A
Candidate B
Candidate C
```

потом:

```text
Evaluator
```

сравнивает их.

Это особенно полезно для дизайна.

Можно попросить три модели сделать разные версии dashboard.

---

### CONTRA

Но нельзя делать:

```text
Agent A:
"Я считаю A лучше."

Agent B:
"Нет, B лучше."

Agent C:
"A и B хорошие."

```

И потом спрашивать:

> «Кто победил?»

Это псевдоконсensus.

---

### PRO

Согласен.

Нужны измеряемые критерии.

---

### Главный архитектор

Именно.

Если несколько агентов используются, они должны производить:

```text
candidate
evidence
metrics
failure list
```

а не просто мнения.

Например:

```text id="x2i2o5"
Candidate A
Visual fidelity: ...
A11y: ...
Responsive: ...
Build: ...
Performance: ...

Candidate B
...
```

Затем Evaluator.

Не:

```text
AI votes
```

а:

```text
evidence → evaluation
```

Это согласуется с современными evaluation-подходами, где benchmark, harness и environment разделяются, а траектории агента анализируются отдельно. citeturn0academia2

---

# ЭТАП 2 — ЛОМАЕМ ПРЕЖНЮЮ АРХИТЕКТУРУ

Теперь CONTRA получает право атаковать нашу старую схему.

---

# Старая схема

```text id="olxqk7"
ORCHESTRATOR
│
├── RESEARCHER
├── DESIGNER
├── ENGINEER
├── RECONSTRUCTOR
├── CRITIC
├── QA
├── REPAIR
├── LIBRARIAN
└── MODEL ROUTER
```

## CONTRA:

Я считаю эту схему неправильной.

Не потому что роли плохие.

А потому что мы смешали три разных уровня.

---

## Уровень 1 — CAPABILITY

Что система умеет:

```text id="6kvv4v"
Research
Browser
Code
Visual Analysis
Testing
Git
Search
Registry
```

---

## Уровень 2 — ROLE

Как capability используется:

```text id="5m3pax"
Research Analyst
Designer
Engineer
QA
Librarian
```

---

## Уровень 3 — WORKFLOW

Когда и зачем:

```text id="x0r7qm"
Research
 ↓
Design
 ↓
Build
 ↓
Verify
 ↓
Repair
```

---

### Главный архитектор

Это одно из самых важных решений всего раздела.

Мы не должны смешивать:

```text
что AI умеет
```

с:

```text
какую роль сейчас выполняет
```

и:

```text
какой workflow выполняется
```

---

# Новая архитектура

```text id="0v8gkz"
                    AI-LAB
                       │
                 ORCHESTRATOR
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      WORKFLOW      WORKFLOW     WORKFLOW
     Research       Build       Reconstruct
          │            │            │
          ▼            ▼            ▼
        TASK         TASK         TASK
          │
          ▼
        ROLE
          │
    ┌─────┼─────┐
    ▼     ▼     ▼
 MODEL  TOOLS  CONTEXT
    │     │     │
    └─────┼─────┘
          ▼
      ENVIRONMENT
          │
          ▼
       ARTIFACT
          │
          ▼
       EVIDENCE
```

---

# Теперь разбираем конкретные роли

## RESEARCHER

Оставляем?

### PRO:

Да.

---

### CONTRA:

Не как постоянного агента.

Оставляем:

```text
capability: research
role: research-analyst
```

---

### Решение:

**Оставить как роль.**

---

# DESIGNER

### PRO:

Нужен для:

```text
Design System
Design Genome
visual analysis
composition
```

### CONTRA:

Но часть задач Designer и Visual Critic пересекается.

### Решение:

На текущем этапе:

```text
DESIGN ANALYST
```

и:

```text
VISUAL EVALUATOR
```

разделяются.

Причина:

первый создаёт **описание дизайна**, второй оценивает **результат относительно требования**.

---

# ENGINEER

Здесь спор минимальный.

Но важное ограничение:

> Engineer не должен самостоятельно определять критерии качества, которые затем сам же проверяет.

То есть:

```text
ENGINEER
   ↓
CODE

QA
   ↓
EVIDENCE
```

---

# RECONSTRUCTOR

Очень важная роль.

Оставляем отдельный workflow:

```text
REFERENCE
 ↓
OBSERVATION
 ↓
RECONSTRUCTION
```

Потому что реконструкция и redesign — разные задачи.

Это мы уже зафиксировали раньше и теперь подтверждаем.

---

# CRITIC

### CONTRA:

Не нужен как самостоятельный обязательный этап.

Critique должен быть capability:

```text
analyze defects
```

который может использовать:

- visual evaluator;
- accessibility evaluator;
- code evaluator.

### Решение:

**Critic — не самостоятельный глобальный агент.**

Это режим анализа.

---

# QA

Оставляем.

Но не как:

> «AI посмотрел код и сказал OK».

QA должен работать с реальным environment:

```text
build
browser
tests
screenshots
accessibility
interaction
performance
```

Исследования IDE-agent evaluation также идут именно в сторону выполнения задач в инструментальном окружении, а не оценки одного сгенерированного ответа. citeturn0academia1

---

# REPAIR

### PRO:

Нужен.

### CONTRA:

Repair не должен иметь свободу:

> «делай что хочешь, пока тесты не зелёные».

Иначе:

```text
Bug
 ↓
Repair
 ↓
new bug
 ↓
Repair
 ↓
architecture degradation
```

---

### Главный архитектор:

Repair должен получать **Failure Contract**:

```json id="w4g4kt"
{
  "failure": "button misaligned",
  "evidence": "...",
  "scope": "Header.tsx",
  "severity": "medium",
  "allowed_changes": [
    "spacing",
    "layout"
  ],
  "forbidden_changes": [
    "design-system",
    "dependencies"
  ]
}
```

То есть:

> **Repair Agent не ищет себе работу. Он устраняет конкретный доказанный дефект.**

Это существенно ограничивает entropy.

---

# LIBRARIAN

Очень интересный случай.

### PRO:

Он должен:

```text
find new registries
find new skills
detect updates
remove obsolete items
```

### CONTRA:

Это вообще не agent.

Это:

```text
scheduled workflows
+
research tasks
+
validation
```

---

### Главный архитектор:

Согласен.

Название:

> Librarian

можно оставить как **workflow**, но не как обязательного постоянно существующего агента.

---

# И наконец — MODEL ROUTER

Здесь тоже была ошибка.

Мы ранее поставили его рядом с агентами:

```text
Researcher
Designer
Engineer
Model Router
```

Но это разные уровни.

Model Router:

```text
INFRASTRUCTURE
```

а не:

```text
ROLE
```

Он отвечает:

```text
task
 ↓
requirements
 ↓
available models
 ↓
cost / latency / capability
 ↓
model selection
```

---

# ФИНАЛЬНАЯ МОДЕЛЬ АГЕНТОВ

Получается:

```text id="h8f1x0"
                    ORCHESTRATOR
                         │
                         ▼
                      WORKFLOW
                         │
                         ▼
                        TASK
                         │
                  ┌──────┴──────┐
                  ▼             ▼
                ROLE         CAPABILITIES
                  │             │
                  └──────┬──────┘
                         ▼
                   MODEL ROUTER
                         │
                         ▼
                       MODEL
                         │
                  ┌──────┼──────┐
                  ▼      ▼      ▼
                TOOLS CONTEXT POLICY
                  │      │      │
                  └──────┼──────┘
                         ▼
                    ENVIRONMENT
                         │
                         ▼
                      ARTIFACT
                         │
                         ▼
                      EVIDENCE
```

---

# Ключевой вывод раздела №4

Мы начали раздел с:

> **«Нам нужно много специализированных AI-агентов».**

Закончили:

> **«Нам нужен управляемый Agent Runtime, который динамически создаёт исполнителей под задачи».**

Это очень большая разница.

---

# Что теперь является агентом?

Рабочая модель:

```text id="2h0k4z"
AGENT INSTANCE =
    MODEL
  + ROLE
  + CONTEXT
  + TOOLS
  + PERMISSIONS
  + POLICY
  + TASK
  + BUDGET
```

И после выполнения:

```text id="wq9g1h"
AGENT INSTANCE
       ↓
ARTIFACT
       +
EVIDENCE
       +
TRACE
       +
RESULT
```

А сам экземпляр можно уничтожить.

---

# Что остаётся постоянным?

Не агенты.

Постоянными являются:

```text id="g4j5qn"
WORKFLOWS
ROLES
CAPABILITIES
TOOLS
POLICIES
KNOWLEDGE
MODELS
EVALUATORS
```

Это намного устойчивее.

---

# Главная найденная брешь №4

Мы первоначально проектировали **организацию AI как организацию людей**:

```text
исследователь
дизайнер
программист
критик
тестировщик
ремонтник
библиотекарь
```

Но для AI это необязательно правильная архитектура.

Более правильная аналогия:

> **не офис из виртуальных сотрудников, а операционная система выполнения инженерных задач.**

Она создаёт нужного исполнителя под конкретную задачу.

---

# Решение главного архитектора

Фиксируем:

### НЕ ДЕЛАЕМ

```text
20 постоянно живущих агентов
```

### ДЕЛАЕМ

```text
Agent Runtime
```

который умеет:

```text
выбрать workflow
      ↓
разбить task
      ↓
выбрать role
      ↓
выбрать capabilities
      ↓
выбрать model
      ↓
выдать permissions
      ↓
дать tools
      ↓
выполнить
      ↓
собрать evidence
      ↓
передать результат следующему этапу
```

И ещё один принцип:

> **Multi-agent используется не потому, что «несколько AI умнее одного», а только если разделение ролей даёт измеримое преимущество: независимость оценки, разные инструменты/права, разные контексты, параллельность или снижение риска.**

Это оставляет нам возможность на конкретной задаче обнаружить, что **один сильный агент лучше пяти**.

И это как раз то, что нам нужно выяснять экспериментами, а не предполагать заранее.

---

## Промежуточная архитектура после 4 разделов

```text id="4y9s7c"
                         USER
                          │
                          ▼
                    ┌───────────┐
                    │   TASK    │
                    └─────┬─────┘
                          ▼
                    ORCHESTRATOR
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
             WORKFLOW          POLICIES
                 │
                 ▼
                TASK
                 │
                 ▼
                ROLE
                 │
          ┌──────┼──────┐
          ▼      ▼      ▼
       MODEL   TOOLS  CONTEXT
          │      │      │
          └──────┼──────┘
                 ▼
            ENVIRONMENT
                 │
                 ▼
              ARTIFACT
                 │
                 ▼
              EVIDENCE
                 │
                 ▼
             EVALUATION
                 │
          ┌──────┴──────┐
          ▼             ▼
        REPAIR        ACCEPT
          │             │
          └──────┬──────┘
                 ▼
              RESULT
                 │
                 ▼
             LEARNING
```

Это уже начинает выглядеть не как «набор AI-агентов», а как **реальный runtime для AI-разработки**.

**Раздел №4 закрыт предварительно.**

Следующий — **№5: ORCHESTRATOR**. И там будет ещё более неприятный вопрос: **кто вообще имеет право принимать решения внутри этой системы — детерминированный код, AI-планировщик или комбинация обоих?** Именно там мы можем обнаружить, что наш Orchestrator в текущем виде слишком умный, слишком тупой или вообще спроектирован не на том уровне.

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 5 — **оркестратор**. Здесь нужно проверить главное противоречие предыдущего решения: система должна быть управляемой, но не превратиться в один гигантский «мозг», через который проходит вообще всё.

---

**Assistant:**

# Раздел 5. ORCHESTRATOR — кто управляет всей системой?

**Главный вопрос:** если AI-LAB получает задачу `ui create ...`, кто решает, какие действия допустимы, какие агенты запускаются, когда остановиться, что считать ошибкой и когда можно менять систему?

Предыдущий раздел дал важное правило: **агент — временный runtime, а не постоянный сотрудник**. Теперь нужно понять, что находится над этими runtime.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА сильный Orchestrator

> Нам нужен центральный Orchestrator. Иначе через год получим не AI-LAB, а набор агентов, которые самостоятельно вызывают друг друга, модели и инструменты.

Его задача:

```text
USER
 ↓
TASK
 ↓
ORCHESTRATOR
 ├─ определить workflow
 ├─ определить budget
 ├─ выбрать capabilities
 ├─ запустить agents
 ├─ контролировать permissions
 ├─ сохранить state
 ├─ проверить результат
 └─ решить: continue / repair / stop
```

Он не обязан сам писать код или анализировать дизайн.

Он должен **управлять жизненным циклом работы**.

Например:

```text
ui reconstruct website X
```

Orchestrator создаёт:

```text
Task #1842

Goal:
  reconstruct website X

Workflow:
  visual-reconstruction

Stages:
  1. inspect
  2. collect evidence
  3. analyze design
  4. implement
  5. render
  6. compare
  7. repair
  8. validate
```

После этого запускаются необходимые runtime:

```text
Design Analyst
        ↓
Implementation Agent
        ↓
Visual Evaluator
        ↓
Repair Agent
```

А не наоборот.

Современные orchestration-подходы действительно всё чаще отделяют состояние workflow, durable execution, human-in-the-loop и persistence от собственно LLM-рассуждения. Например, LangGraph прямо позиционирует orchestration runtime как слой для stateful/long-running agents, persistence и смешивания deterministic и agentic steps. citeturn0search0turn0search7

---

# Архитектор B — ПРОТИВ

> Именно так и рождаются god objects.

Если Orchestrator знает:

- все workflows;
- всех агентов;
- все модели;
- все skills;
- все инструменты;
- все разрешения;
- все типы проектов;
- все правила;
- все ошибки;

через некоторое время получится:

```text
             ORCHESTRATOR
        /        |        \
     agents   models    tools
       |         |         |
    skills    memory     Git
       |         |         |
   browser    registry   Docker
```

И любое изменение системы потребует изменения Orchestrator.

Это архитектурная ловушка.

Кроме того, есть ещё одна проблема.

### Кто планирует?

Допустим пользователь говорит:

> Сделай dashboard для строительного проекта с ВОР, КС-2, графиками и импортом Excel.

Нельзя заранее жёстко прописать:

```text
1 → 2 → 3 → 4 → 5
```

Потому что AI может обнаружить:

```text
нужен новый компонент
↓
нужен новый registry
↓
нужно исследование
↓
нужен другой chart library
```

То есть workflow должен быть **динамическим**.

Если всё сделать deterministic:

> система станет слишком тупой.

Если всё отдать LLM:

> система станет непредсказуемой.

---

# Главный архитектор вмешивается

Здесь обнаруживается фундаментальный вопрос.

**Нужно перестать называть всё это одним словом Orchestrator.**

На самом деле есть минимум три разных задачи.

### 1. CONTROL

Кто имеет право что-то сделать?

### 2. PLANNING

Как лучше решить задачу?

### 3. EXECUTION

Кто непосредственно выполняет действие?

Если смешать их, действительно получится god object.

Поэтому:

```text
                AI-LAB
                  │
       ┌──────────┴──────────┐
       │                     │
 CONTROL PLANE          EXECUTION PLANE
       │                     │
       │                Agent Runtime
       │                     │
       │              Tools / Browser / Code
       │
       └──── AI PLANNER
```

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

## Архитектор A атакует

> Хорошо. Тогда Orchestrator — это Control Plane.

Но возникает следующий вопрос.

Допустим Planner говорит:

```json
{
  "action": "install_dependency",
  "package": "some-package"
}
```

Кто проверяет?

Planner?

Нет.

Сам агент?

Тоже нет.

Потому что тогда AI сам определяет границы собственных полномочий.

Нужен внешний enforcement:

```text
AI PLAN
   ↓
POLICY CHECK
   ↓
ALLOWED?
 ┌──┴──┐
YES    NO
 ↓      ↓
EXEC   BLOCK
```

Именно такой принцип используется в современных control-plane подходах: модель может предложить действие, но проверка разрешений должна находиться вне модели. citeturn0search2turn0search11

---

## Архитектор B отвечает

Согласен.

Но тогда Control Plane должен быть **максимально тупым и надёжным**.

Это принципиально.

Он не должен решать:

> Какой UX лучше?

> Какую кнопку поставить?

> Какой компонент выбрать?

> Какой chart library красивее?

Это работа AI.

Control Plane должен решать:

> Можно ли?

> На каком этапе мы находимся?

> Что произошло?

> Что разрешено следующим шагом?

> Есть ли budget?

> Есть ли checkpoint?

> Нужно ли approval?

> Что делать после failure?

То есть:

```text
AI = intelligence

ORCHESTRATOR = control

TOOLS = execution

EVALUATOR = evidence
```

---

# Главный архитектор

И вот здесь архитектура становится существенно чище.

## Новый принцип

> **Orchestrator не должен быть самым умным компонентом системы. Он должен быть самым контролируемым.**

Это очень важное изменение.

---

# Тогда как выглядит реальный процесс?

Допустим:

```text
ui create
"Dashboard строительного проекта"
```

### Шаг 1. Task Normalizer

Превращает человеческую команду:

```text
"сделай dashboard..."
```

в структурированную задачу:

```json
{
  "type": "create_interface",
  "domain": "construction",
  "target": "web",
  "requirements": [
    "dashboard",
    "project data",
    "charts",
    "tables"
  ]
}
```

---

### Шаг 2. Orchestrator

Создаёт execution:

```text
TASK-000421
```

и устанавливает:

```text
state = PLANNING
budget = ...
risk = R1
permissions = ...
```

---

### Шаг 3. AI Planner

Теперь AI получает задачу и предлагает:

```text
PLAN

1. research existing dashboard patterns
2. inspect registry
3. select components
4. build prototype
5. render
6. evaluate
7. repair
8. validate
```

Но Planner **не может просто выполнить любой план**.

---

### Шаг 4. Policy Gate

Orchestrator проверяет:

```text
action:
  registry.search

risk:
  R0

allowed:
  YES
```

Следующее:

```text
action:
  install dependency

risk:
  R1

allowed:
  YES
  if package is approved
```

Следующее:

```text
action:
  modify AI-LAB architecture

risk:
  R4

allowed:
  HUMAN APPROVAL
```

---

### Шаг 5. Agent Runtime

Только после этого создаётся конкретный runtime:

```text
MODEL
+
ROLE
+
CONTEXT
+
TOOLS
+
POLICY
+
TASK
+
BUDGET
```

Например:

```text
Agent #8921

role:
  Design Analyst

model:
  Visual-capable model

tools:
  browser
  screenshot
  registry
  knowledge-base

permissions:
  read-only
```

Он завершил работу → runtime уничтожается.

---

# А что происходит при ошибке?

Допустим Visual Evaluator обнаружил:

```text
Header:
  vertical alignment = incorrect

Evidence:
  screenshot comparison

Scope:
  Header.tsx

Severity:
  medium
```

Orchestrator **не говорит**:

> Исправь header.

Он создаёт следующий task:

```json
{
  "type": "repair",
  "scope": ["Header.tsx"],
  "failure": "vertical alignment",
  "evidence": "...",
  "allowed_changes": [
    "spacing",
    "layout"
  ],
  "forbidden_changes": [
    "dependencies",
    "design tokens"
  ]
}
```

После чего создаёт Repair Agent.

---

# А если AI зациклится?

Вот здесь появляется критически важная функция Orchestrator.

```text
iteration 1
 ↓
FAIL
 ↓
repair
 ↓
FAIL
 ↓
repair
 ↓
FAIL
```

Система должна сказать:

```text
MAX_ITERATIONS_REACHED
```

и остановиться.

Не:

```text
repair
repair
repair
repair
repair
...
```

---

# Поэтому у задачи появляется State Machine

Не просто:

```text
running
```

а:

```text
CREATED
   ↓
PLANNING
   ↓
EXECUTING
   ↓
EVALUATING
   ↓
 ┌─┴──────┐
PASS     FAIL
 ↓         ↓
DONE     REPAIR
           ↓
        EXECUTING
```

Дополнительные состояния:

```text
WAITING_APPROVAL
BLOCKED
PAUSED
FAILED
CANCELLED
COMPLETED
```

Такой подход особенно важен для долгих процессов. Современные orchestration-системы используют checkpoint/state persistence именно для возможности остановить workflow, пережить сбой и продолжить с сохранённого состояния. citeturn0search1turn0search8

---

# Ещё одна важная находка

Нам нужен не только **Task State**.

Нужен **Event Log**.

Например:

```text
TASK_CREATED
PLAN_CREATED
PLAN_APPROVED
AGENT_STARTED
TOOL_CALLED
TOOL_RESULT
ARTIFACT_CHANGED
TEST_STARTED
TEST_FAILED
REPAIR_STARTED
CHECKPOINT_CREATED
TASK_COMPLETED
```

Тогда можно восстановить историю:

```text
Что произошло?
Почему?
Каким агентом?
Какой моделью?
Каким инструментом?
Какие файлы изменились?
Какие тесты прошли?
Где произошёл failure?
```

Это не chain-of-thought.

Мы не сохраняем внутренние скрытые рассуждения модели.

Мы сохраняем **операционную историю системы**.

---

# Теперь главный удар по нашей старой архитектуре

Раньше мы рисовали:

```text
USER
 ↓
ORCHESTRATOR
 ↓
WORKFLOW
 ↓
AGENT
```

Этого недостаточно.

Теперь правильнее:

```text
                         USER
                          │
                          ▼
                    TASK NORMALIZER
                          │
                          ▼
                 ┌─────────────────┐
                 │  CONTROL PLANE  │
                 │                 │
                 │ state           │
                 │ policy          │
                 │ permissions     │
                 │ budget          │
                 │ checkpoints     │
                 │ lifecycle       │
                 │ audit           │
                 └────────┬────────┘
                          │
                          ▼
                    AI PLANNER
                          │
                     proposed plan
                          │
                          ▼
                    POLICY GATE
                          │
                          ▼
                  AGENT RUNTIME
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
            MODEL       TOOLS     ENVIRONMENT
              │           │           │
              └───────────┼───────────┘
                          ▼
                       ARTIFACT
                          │
                          ▼
                      EVALUATOR
                       │     │
                    PASS     FAIL
                      │       │
                      ▼       ▼
                    DONE    REPAIR
                              │
                              └──────→ CONTROL PLANE
```

---

# Но есть ещё один вопрос

## А нужен ли вообще отдельный Orchestrator в v1?

Архитектор B снова атакует:

> Мы сейчас можем построить систему из 15 сервисов ради того, чтобы создать кнопку `ui create`.

И это будет очередная ошибка.

Для первой версии **не нужен распределённый enterprise control plane**.

Нужен локальный runtime:

```text
AI-LAB
│
├── orchestrator
├── planner
├── agent-runtime
├── policy
├── state
├── event-log
└── workers
```

Один процесс или несколько локальных процессов — техническая деталь.

Архитектурные интерфейсы должны быть разделены **логически**, а не обязательно разнесены по Docker-контейнерам и микросервисам.

Это соответствует нашей предыдущей установке:

> **модульность ≠ максимальное количество сервисов.**

---

# Решение главного архитектора

### 1. Orchestrator остаётся.

Но его роль изменена.

Он **не главный AI**.

Он **Control Plane**.

### 2. Planner отделяется.

AI Planner:

- анализирует задачу;
- предлагает workflow;
- выбирает capabilities;
- предлагает следующий action;
- может replanning.

Но:

**Planner не имеет права самовольно выполнять действия.**

### 3. Policy находится вне AI.

```text
Planner
   ↓
Policy
   ↓
Execution
```

AI не может повысить собственные права.

### 4. State должен быть persistent.

Каждая длительная задача имеет:

```text
task_id
state
checkpoint
events
artifacts
budget
permissions
result
```

### 5. Orchestrator должен поддерживать pause/resume.

Например:

```text
WAITING_APPROVAL
```

Пользователь ушёл на два дня.

Потом:

```text
ui resume TASK-000421
```

и задача продолжается.

Это уже реальная основа для нашей идеи **долгосрочного автономного AI-LAB**. Подобные durable/resumable execution и interrupts уже являются стандартными возможностями современных orchestration runtimes. citeturn0search0turn0search3

### 6. Execution и Control разделяются.

```text
CONTROL PLANE
    │
    ├── state
    ├── policy
    ├── budget
    ├── permissions
    ├── lifecycle
    └── audit
             │
             ▼
EXECUTION PLANE
    │
    ├── agents
    ├── models
    ├── tools
    ├── browser
    ├── code
    └── environment
```

---

# Главная найденная брешь №5

**Мы раньше называли Orchestrator просто «центральным управляющим AI».**

Это слишком грубая модель.

Новая формулировка:

> **Orchestrator — это не супер-агент и не мозг системы. Это контролирующий runtime, который управляет состоянием, разрешениями, бюджетами, переходами и жизненным циклом AI-задач, тогда как AI Planner отвечает за интеллектуальное планирование внутри разрешённых границ.**

И это даёт нам очень важное разделение:

```text
                 INTELLIGENCE
                      │
                  AI PLANNER
                      │
                      ▼
                ┌───────────┐
                │   POLICY  │ ← authority
                └─────┬─────┘
                      │
                      ▼
                ORCHESTRATOR ← control
                      │
                      ▼
                AGENT RUNTIME ← execution
                      │
                      ▼
                 ENVIRONMENT
                      │
                      ▼
                   EVIDENCE
                      │
                      ▼
                 EVALUATION
```

### Текущее состояние архитектуры после 5 разделов

```text
AI-LAB
│
├── CONTROL PLANE
│   ├── Orchestrator
│   ├── State
│   ├── Policy
│   ├── Permissions
│   ├── Budget
│   ├── Checkpoints
│   └── Event Log
│
├── INTELLIGENCE PLANE
│   ├── Planner
│   ├── Model Router
│   ├── Skills
│   └── Knowledge
│
├── EXECUTION PLANE
│   ├── Agent Runtime
│   ├── Tools
│   ├── Browser
│   ├── Code
│   └── Environments
│
├── EVALUATION
│   ├── Functional
│   ├── Visual
│   ├── Accessibility
│   ├── Responsive
│   └── Performance
│
└── LEARNING
    ├── Evidence
    ├── Experiments
    ├── Promotion
    └── Knowledge Updates
```

**Следующий раздел — 6. Model Router:** здесь нужно сломать ещё одну потенциально опасную идею — что достаточно подключить несколько моделей и автоматически выбирать «самую умную». Нам нужно определить, **как AI-LAB решает, какую модель дать конкретной задаче, когда запускать несколько моделей и когда это вообще не оправдано.**

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 6 — **Model Router**. Здесь проверим, действительно ли нам нужен «роутер моделей», или мы снова создаём лишний слой; отдельно разберём стоимость, качество, визуальные задачи и конкурирующие модели.

---

**Assistant:**

# Раздел 6. MODEL ROUTER

Теперь у нас есть Control Plane и Planner. Следующий вопрос:

> **Как AI-LAB решает, какую модель использовать для конкретного действия?**

Наивный вариант:

```text
сложная задача → самая мощная модель
простая задача → дешёвая модель
```

Для нашей системы этого недостаточно.

Современные исследования по routing действительно рассматривают выбор модели как отдельную системную задачу: модели имеют разные профили качества, стоимости и задержки, а выбор может происходить не только для целого запроса, но и для отдельных шагов агентной траектории. citeturn0academia0turn0academia1

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА Model Router

Нельзя привязывать AI-LAB к одной модели.

У нас потенциально будут:

```text
OpenAI
Anthropic
Google
xAI
DeepSeek
локальные модели
```

И разные модели будут иметь разные сильные стороны.

Например, условно:

| Задача | Требование |
|---|---|
| классификация | быстро + дёшево |
| поиск | быстро |
| извлечение данных | структурированный output |
| анализ архитектуры | reasoning |
| генерация кода | coding |
| visual analysis | vision |
| screenshot comparison | vision |
| сложный debugging | reasoning + coding |
| финальный review | сильная модель |
| массовая индексация | дешёвая модель |

Поэтому архитектура должна позволять:

```text
Task
 ↓
Router
 ↓
Model
```

А не:

```text
AI-LAB
 ↓
одна модель навсегда
```

---

## Архитектор B — ПРОТИВ

Проблема в слове **Router**.

Если мы сделаем:

```text
Router:
  GPT?
  Claude?
  Gemini?
  DeepSeek?
```

то кто определяет, какая модель лучше?

Сам Router?

Тогда появляется ещё одна AI-модель, которую тоже надо оценивать.

Получаем:

```text
Model Router
      ↓
Model A
Model B
Model C
Model D
```

А затем:

> А почему Router выбрал B?

Если нет benchmark-данных, это просто ещё один LLM, который **угадывает**.

Кроме того, модель может быть великолепной на benchmark, но плохо работать именно в нашем workflow.

Например:

```text
Model A
кодирование: отлично
visual analysis: средне

Model B
кодирование: хорошо
visual analysis: отлично

Model C
кодирование: отлично
structured output: плохо
```

Поэтому нам недостаточно общего рейтинга моделей.

---

# Главный архитектор

Согласен.

Нам нужен не **Model Selector**, а **Model Capability System**.

Модель должна описываться не как:

```text
GPT-XXX = 95/100
```

а как профиль возможностей.

Например:

```json id="2s8y4a"
{
  "model": "MODEL-X",

  "capabilities": {
    "reasoning": 0.94,
    "coding": 0.91,
    "vision": 0.88,
    "ui_analysis": 0.93,
    "structured_output": 0.97,
    "long_context": 0.91
  },

  "operational": {
    "latency": "...",
    "cost": "...",
    "context": "...",
    "availability": "..."
  }
}
```

Но даже это недостаточно.

Потому что цифры должны откуда-то взяться.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

## Архитектор A

Значит, AI-LAB должен **сам тестировать модели**.

Создаём:

```text id="4f8k2z"
MODEL BENCHMARK
```

И запускаем одинаковые задачи:

```text
Task #1
reconstruct navbar

Task #2
analyze screenshot

Task #3
write component

Task #4
debug React error

Task #5
extract design tokens

Task #6
find accessibility issue
```

Получаем:

```text
MODEL A
visual:      92
coding:      88
reasoning:   91

MODEL B
visual:      97
coding:      84
reasoning:   93

MODEL C
visual:      82
coding:      95
reasoning:   89
```

Тогда Router уже работает не на рекламе производителя, а на **собственных данных AI-LAB**.

---

## Архитектор B

Да, но здесь появляется ещё более важная проблема.

### Benchmark ≠ реальная задача.

Допустим:

```text
Model A
benchmark = 95
```

Но в нашем reconstruction workflow она делает:

```text
wrong font
wrong spacing
wrong responsive behaviour
```

А Model B с benchmark 91 делает интерфейс значительно ближе к reference.

Значит:

> Router должен учиться на **результатах наших реальных задач**.

---

# Главный архитектор

Именно.

Значит появляется очень важная сущность:

## Model Performance History

Не:

```text
Model → score
```

а:

```text
Model
 ↓
Capability
 ↓
Task Type
 ↓
Environment
 ↓
Result
 ↓
Evidence
```

Например:

```text
Gemini
 └── visual reconstruction
      └── dashboard
           └── React + Tailwind
                ├── visual similarity: 0.91
                ├── responsive: 0.96
                ├── interaction: 0.88
                └── cost: ...
```

Другой запуск:

```text
Claude
 └── visual reconstruction
      └── dashboard
           └── React + Tailwind
                ├── visual similarity: 0.95
                ├── responsive: 0.93
                ├── interaction: 0.91
                └── cost: ...
```

Теперь Router получает **контекстную информацию**, а не абстрактный рейтинг.

---

# Но есть ещё более серьёзная проблема

## Нужно ли выбирать одну модель?

Архитектор A:

> Да. Иначе система будет слишком дорогой.

Архитектор B:

> Нет. Для важных задач нужно несколько независимых моделей.

Главный архитектор:

**Оба правы — в разных режимах.**

---

# Поэтому вводим четыре режима routing

## MODE 1 — SINGLE

Обычная задача:

```text
Task
 ↓
Router
 ↓
Model A
```

Например:

```text
extract metadata
```

Нет смысла запускать пять моделей.

---

# MODE 2 — ESCALATION

Сначала дешёвая модель.

Если результат недостаточно хороший:

```text
Cheap Model
     ↓
Evaluation
     ↓
FAIL
     ↓
Stronger Model
     ↓
Evaluation
```

Например:

```text
Model Small
    ↓
confidence = insufficient
    ↓
Model Medium
```

А если опять плохо:

```text
Model Large
```

Получается:

```text
SMALL
 ↓ fail
MEDIUM
 ↓ fail
FRONTIER
```

Это гораздо рациональнее, чем всегда использовать frontier-модель.

Исследования routing показывают именно такую общую проблему: при многошаговых агентных workflow разные шаги могут требовать существенно разного уровня модели, поэтому routing на уровне отдельных шагов потенциально даёт большой выигрыш относительно постоянного использования frontier-модели. citeturn0academia1

---

# MODE 3 — PARALLEL

Для критической задачи:

```text
             TASK
          /    |    \
         ↓     ↓     ↓
      Model A Model B Model C
          \     |     /
           EVALUATOR
                ↓
             RESULT
```

Но здесь есть принципиальное правило:

> **Мы не голосуем моделями.**

Не:

```text
A говорит 90
B говорит 95
C говорит 92

→ победил B
```

А:

```text
A → artifact + evidence
B → artifact + evidence
C → artifact + evidence

             ↓

        independent
        evaluator

             ↓

      measured result
```

То есть оцениваются **результаты**, а не мнения моделей.

---

# MODE 4 — SPECIALIST

Некоторые задачи могут сразу маршрутизироваться в специализированную capability.

Например:

```text
Screenshot
 ↓
Vision-capable model
```

или:

```text
Huge codebase
 ↓
Long-context model
```

или:

```text
complex debugging
 ↓
reasoning + coding model
```

---

# И тут появляется новая архитектурная проблема

Допустим Router знает:

```text
visual = Gemini
coding = Claude
reasoning = GPT
cheap extraction = Local Model
```

Но через три месяца ситуация изменится.

Модели обновятся.

Появится новая модель.

Цены изменятся.

У одной модели ухудшится API.

У другой улучшится vision.

Значит Router нельзя программировать так:

```ts
if (task === "visual")
    return "gemini";
```

Это быстро станет мусором.

---

# Решение

Router должен работать через **Model Registry**.

```text
MODEL REGISTRY
│
├── model identity
├── provider
├── version
├── capabilities
├── context
├── cost
├── latency
├── availability
├── constraints
├── benchmark results
├── real task results
└── known failures
```

Например:

```text
MODEL-017
provider: ...
version: ...
```

И отдельно:

```text
CAPABILITY PROFILE
```

---

# Но самое интересное — Router должен учитывать не только модель

Вот здесь мы нашли ещё одну потенциальную брешь.

Раньше мы представляли:

```text
TASK → MODEL
```

Это слишком примитивно.

Реально:

```text
TASK
 ↓
TASK PROFILE
 ↓
MODEL ROUTING
```

Task Profile:

```json id="9g1q1b"
{
  "domain": "ui",
  "task": "visual_reconstruction",

  "requirements": {
    "vision": true,
    "coding": true,
    "reasoning": true,
    "long_context": true
  },

  "risk": "R2",

  "budget": {
    "max_cost": "...",
    "max_time": "..."
  },

  "quality_target": {
    "visual": 0.95,
    "responsive": 0.90
  }
}
```

Router теперь знает, **что требуется задаче**.

---

# И только после этого:

```text id="k3f7pp"
TASK PROFILE
      ↓
CANDIDATE MODELS
      ↓
FILTER
      ↓
POLICY
      ↓
ROUTING STRATEGY
      ↓
MODEL(S)
```

---

# Архитектор B задаёт неприятный вопрос

> А что если Router ошибся?

Это неизбежно.

Поэтому Router тоже должен быть **оцениваемым компонентом**.

Мы сохраняем:

```text id="z7k5h0"
routing decision

chosen model:
  Model A

reason:
  visual + coding

result:
  failed

better candidate:
  Model B
```

Через некоторое время получаем:

```text
Router History
```

И можем обнаруживать:

```text
Router repeatedly chooses Model A
for visual reconstruction
but Model B produces better outcomes.
```

Это уже материал для улучшения самого Router.

---

# Получается интересный цикл

```text id="8cuwj7"
TASK
 ↓
ROUTER
 ↓
MODEL
 ↓
RESULT
 ↓
EVALUATION
 ↓
MODEL PERFORMANCE DATA
 ↓
ROUTER IMPROVEMENT
```

И AI-LAB постепенно учится **не в весах модели**, а на уровне инфраструктуры.

Это хорошо совпадает с нашей предыдущей концепцией:

> сначала не обучаем собственную модель — создаём внешний слой интеллекта вокруг существующих моделей.

---

# Ещё один важный принцип

## Router не должен оптимизировать только цену

Потому что тогда он начнёт выбирать дешёвую модель даже там, где ошибка стоит дорого.

И не должен оптимизировать только качество.

Потому что тогда на каждую мелочь будет запускаться самая дорогая модель.

Нужна функция полезности:

```text
UTILITY =
    QUALITY
    × SUCCESS_PROBABILITY
    − COST
    − LATENCY
    − RISK
```

Но **формулу не нужно жёстко фиксировать сейчас**.

Лучше сделать policy:

```text
ROUTING POLICY

quality_min:
  0.90

cost_limit:
  ...

latency_limit:
  ...

risk:
  ...

preferred:
  ...

fallback:
  ...
```

---

# Для нашего AI-LAB я бы ввёл ещё один уровень

## Model Classes

Не привязываться к брендам.

```text
FRONTIER_REASONING
FRONTIER_CODING
VISION
FAST_GENERAL
CHEAP_GENERAL
LOCAL_GENERAL
EMBEDDING
SPECIALIST
```

А конкретные модели уже являются реализациями capability.

Например:

```text
VISION
├── Model A
├── Model B
└── Model C
```

Тогда архитектура AI-LAB не зависит от конкретного производителя.

---

# И ещё одна критическая вещь

## Model Router не должен маршрутизировать всё.

Некоторые действия вообще не требуют LLM.

Например:

```text
JSON validation
        ↓
deterministic code
```

Не нужно:

```text
JSON
 ↓
LLM
 ↓
"valid"
```

То же самое:

```text
file exists?
package installed?
git status?
build passed?
image dimensions?
DOM selector exists?
```

Это должен делать обычный код.

---

# Поэтому появляется приоритет

```text
1. DETERMINISTIC
       ↓
2. SPECIALIZED TOOL
       ↓
3. CHEAP MODEL
       ↓
4. CAPABLE MODEL
       ↓
5. FRONTIER MODEL
       ↓
6. MULTI-MODEL
```

То есть:

> **AI-LAB должен использовать AI только там, где AI действительно нужен.**

Это очень важный принцип для всей будущей архитектуры.

---

# Решение главного архитектора

## Model Router оставляем.

Но это **не сервис выбора “лучшей модели”**.

Это:

> **Policy-driven routing layer, который выбирает способ выполнения конкретного шага на основании требований задачи, capability моделей, исторических результатов, стоимости, задержки, риска и доступного бюджета.**

---

## Новая схема

```text id="4f6n5p"
                     TASK
                       │
                       ▼
                 TASK PROFILE
                       │
                       ▼
               ┌──────────────┐
               │ MODEL ROUTER │
               └──────┬───────┘
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       SINGLE     ESCALATION   PARALLEL
          │           │           │
          └───────────┼───────────┘
                      ▼
                 MODEL REGISTRY
                      │
                      ▼
                MODEL INSTANCE
                      │
                      ▼
                   RESULT
                      │
                      ▼
                 EVALUATOR
                      │
                      ▼
             PERFORMANCE DATA
                      │
                      └──────→ ROUTER
```

---

# Model Registry

```text id="2y5a6g"
MODEL REGISTRY
│
├── Identity
├── Provider
├── Version
│
├── Capabilities
│   ├── reasoning
│   ├── coding
│   ├── vision
│   ├── long-context
│   └── structured-output
│
├── Operational
│   ├── cost
│   ├── latency
│   ├── limits
│   └── availability
│
├── Benchmarks
│
├── Real Task Results
│
├── Known Failures
│
└── Routing Policies
```

---

# Четыре режима

```text id="c2f5dj"
SINGLE
    обычная задача

ESCALATION
    сначала дешёвая → затем сильнее

PARALLEL
    несколько независимых кандидатов

SPECIALIST
    задача требует конкретной capability
```

---

# Главная найденная брешь №6

Мы первоначально думали:

> **Model Router = выбрать самую подходящую модель.**

Это слишком просто.

Правильная модель:

> **Model Router выбирает не модель, а стратегию выполнения шага.**

Иногда оптимальным решением будет:

```text
обычный код
```

иногда:

```text
маленькая модель
```

иногда:

```text
сильная модель
```

а иногда:

```text
3 модели → независимые кандидаты → evaluator
```

И самое важное — **выбор должен проверяться реальным результатом**, иначе Router превращается в ещё один источник субъективных предположений.

### Состояние архитектуры после 6 разделов

```text id="e6t2qz"
CONTROL
  Orchestrator
      │
      ▼
INTELLIGENCE
  Planner
      │
      ▼
ROUTING
  Model Router
      │
      ├── Model Registry
      ├── Capability Profiles
      ├── Routing Policies
      └── Performance History
      │
      ▼
EXECUTION
  Agent Runtime
      │
      ▼
ENVIRONMENT
      │
      ▼
EVIDENCE
      │
      ▼
EVALUATION
      │
      └──→ Learning
```

**Следующий раздел 7 — Skills.** Там нас ждёт, вероятно, ещё более фундаментальная проблема: сейчас мы говорим «Skill», «Knowledge», «Capability», «Rule», «Prompt», «Design System» почти как взаимозаменяемые вещи. Нужно провести жёсткую границу между ними, иначе будущая система действительно превратится в свалку из тысяч найденных `SKILL.md`.

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 7 — **Skills**. Здесь нужно не просто решить, где хранить `SKILL.md`, а определить, что вообще является Skill, чем он отличается от знания, правила, capability и workflow, и как AI-LAB будет ими пользоваться.

---

**Assistant:**

# Раздел 7. SKILLS — что такое Skill на самом деле?

Здесь особенно важно не ошибиться в терминологии.

Сейчас экосистема уже использует `SKILL.md` как практический формат упаковки специализированных знаний и процедур. Agent Skills описывает Skill как директорию с `SKILL.md` и, при необходимости, `scripts/`, `references/`, `assets/`, причём загрузка происходит постепенно: сначала краткое описание, затем полная инструкция только при срабатывании соответствующего Skill. citeturn0search0

Но для нашего AI-LAB возникает вопрос:

> **Должен ли Skill быть основной единицей интеллекта системы?**

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА Skills как основной механизм расширения

Нам нужен стандартный способ сказать AI:

> «Ты умеешь делать X определённым способом».

Например:

```text
frontend-design
web-design-guidelines
extract-design-system
visual-reconstruction
playwright-testing
shadcn-registry
accessibility-review
```

Вместо того чтобы каждый раз помещать огромный prompt в контекст:

```text
TASK
+
RULES
+
EXAMPLES
+
PROCEDURE
+
TOOLS
```

мы говорим:

```text
TASK
 ↓
matching Skills
 ↓
Agent
```

Это особенно важно для нашего AI-LAB, потому что мы хотим постоянно находить новые Skills на `skills.sh`, GitHub и других источниках.

Сам формат уже предполагает именно такую модель: Skill содержит специализированное procedural knowledge и может включать вспомогательные скрипты и references. citeturn0search0turn0search2

---

# Архитектор B — ПРОТИВ

Проблема в том, что слово **Skill** начинает означать всё подряд.

Мы можем получить:

```text
skills/
├── frontend-design
├── react
├── typography
├── accessibility
├── shadcn
├── dashboard
├── build-dashboard
├── use-lucide
├── install-shadcn
├── critique-ui
├── design-system
├── use-design-system
├── fix-button
├── better-buttons
└── ultimate-dashboard
```

И через несколько месяцев:

```text
1200 Skills
```

А AI не знает:

- какой выбрать;
- какие Skills конфликтуют;
- какой устарел;
- какой является дубликатом;
- какой содержит только знания;
- какой реально выполняет процедуру;
- какой требует определённого инструмента;
- какой безопасен;
- какой вообще работает.

То есть мы создадим **Skill Hell**.

---

# Главный архитектор

И это первая серьёзная проблема.

Нам нельзя определять Skill как:

> «Любой полезный файл `SKILL.md`.»

Это формат распространения.

**Skill как архитектурная сущность должен быть определён нами независимо от конкретного файла.**

---

# Разделяем четыре понятия

Это очень важное решение.

## 1. Capability

**Что система вообще умеет делать.**

Например:

```text
browser
code_execution
visual_analysis
registry_search
image_generation
git
testing
```

Capability существует независимо от Skill.

---

## 2. Skill

**Как выполнять определённый класс задач.**

Например:

```text
Skill:
  visual-reconstruction
```

Он может говорить:

```text
1. Collect reference states
2. Extract design properties
3. Build baseline
4. Render
5. Compare
6. Identify deviations
7. Repair
8. Validate
```

Skill — это **procedural knowledge**.

---

## 3. Knowledge

**Что известно системе.**

Например:

```text
shadcn Button API
CSS container queries
WCAG rule
Material Design spacing
Lucide icon naming
```

Это не Skill.

---

## 4. Rule / Policy

**Что системе разрешено или запрещено.**

Например:

```text
Never use emoji instead of UI icons.

Do not modify production dependencies
without approval.

Use Lucide when the project design system
specifies Lucide.
```

Это тоже не Skill.

---

# Архитектор A

Но `SKILL.md` всё равно может содержать все четыре вещи.

Например:

```text
SKILL.md

procedure
rules
references
examples
tool requirements
```

---

# Главный архитектор

Да.

**Формат файла может быть смешанным. Архитектурная модель — нет.**

Это критическое различие.

Мы можем импортировать внешний Skill практически как есть, но внутри AI-LAB разложить его содержимое на сущности.

---

# Например

Приходит внешний Skill:

```text
extract-design-system
```

AI-LAB его анализирует.

Вместо простого:

```text
skills/extract-design-system/SKILL.md
```

получаем:

```text
SKILL
│
├── identity
├── procedure
├── triggers
├── required_capabilities
├── tools
├── references
├── examples
├── constraints
├── evaluation
└── provenance
```

А извлечённые знания могут попасть отдельно:

```text
KNOWLEDGE
├── design-tokens
├── typography
├── spacing
└── responsive-patterns
```

---

# И здесь возникает следующий спор

## Архитектор B

Если мы будем разбирать каждый Skill, система станет слишком сложной.

Почему просто не хранить оригинальные Skills и давать их модели?

---

## Архитектор A

Потому что тогда AI-LAB будет зависеть от качества чужого Skill.

Допустим нашли:

```text
Skill A
```

Он утверждает:

> Используй библиотеку X.

Но у нас:

```text
Project
  ↓
shadcn
  ↓
Radix
```

А Skill предлагает:

```text
Material UI
```

Получается конфликт.

---

# Главный архитектор

Поэтому вводим принцип:

> **Imported Skill ≠ trusted Skill.**

Skill проходит lifecycle.

```text
DISCOVERED
    ↓
IMPORTED
    ↓
ANALYZED
    ↓
TESTED
    ↓
VALIDATED
    ↓
CURATED
    ↓
PRODUCTION
```

Это напрямую связывается с нашей предыдущей архитектурой Evidence и Knowledge Promotion.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

## А теперь атакуем саму идею «Skill»

### Вопрос:

Если Skill — это процедура, зачем нам вообще Skill?

Можно же просто сделать:

```text
Workflow
```

Например:

```text
visual-reconstruction
```

и внутри workflow прописать все действия.

---

## Архитектор B

Именно.

У нас уже есть:

```text
Workflow
Planner
Agent
Capability
```

Зачем ещё Skill?

---

# Архитектор A

Потому что Workflow отвечает:

> **Когда и в какой последовательности что делать.**

А Skill:

> **Как правильно выполнить конкретный тип работы.**

Например:

```text
WORKFLOW
visual-reconstruction
```

может быть:

```text
inspect
 ↓
analyze
 ↓
implement
 ↓
evaluate
 ↓
repair
```

А на этапе `analyze` подключается:

```text
SKILL
extract-design-system
```

На этапе `implement`:

```text
SKILL
frontend-design
```

На этапе `evaluate`:

```text
SKILL
web-design-guidelines
```

---

# Главный архитектор

Это хорошее разделение.

Получается:

```text
WORKFLOW
    │
    ├── WHAT HAPPENS NEXT
    │
    ▼
SKILL
    │
    ├── HOW TO DO THIS TYPE OF WORK
    │
    ▼
CAPABILITY
    │
    ├── WHAT CAN SYSTEM PHYSICALLY DO
    │
    ▼
TOOL
```

Например:

```text
Visual Reconstruction Workflow
        │
        ▼
Extract Design System Skill
        │
        ▼
Visual Analysis Capability
        │
        ▼
Browser + Screenshot
```

---

# Но теперь появляется ещё более серьёзная проблема

## Skill может содержать исполняемый код.

Стандарт допускает `scripts/` внутри Skill. citeturn0search0

Например:

```text
my-skill/
├── SKILL.md
└── scripts/
    └── analyse.py
```

Если AI-LAB автоматически импортирует тысячи Skills:

```text
skill
 ↓
script
 ↓
execute
```

это уже **attack surface**.

---

# Архитектор B

То есть Skill нельзя считать просто текстом.

Он потенциально является:

```text
CODE
+
INSTRUCTIONS
+
REFERENCES
+
ASSETS
```

Следовательно:

> **Skill — это потенциально исполняемый пакет.**

---

# Главный архитектор

И здесь Skill связывается с будущим разделом Security.

Но нам не нужно ждать раздела 29.

Уже сейчас вводим классификацию.

## Skill Trust Levels

```text
UNKNOWN
```

Источник найден, но не проверен.

```text
UNTRUSTED
```

Импортирован, но выполнение запрещено.

```text
REVIEWED
```

Прошел статический анализ.

```text
SANDBOXED
```

Может выполняться только изолированно.

```text
TRUSTED
```

Разрешено использовать в production workflows.

---

# Например

Наш AI-LAB находит Skill:

```text
some-author/awesome-ui-skill
```

Он не делает:

```bash
npx skills add ...
```

и сразу не начинает выполнять скрипты.

Вместо этого:

```text
DISCOVERY
 ↓
METADATA
 ↓
LICENSE
 ↓
CONTENT SCAN
 ↓
STATIC ANALYSIS
 ↓
CAPABILITY ANALYSIS
 ↓
TEST
 ↓
TRUST LEVEL
```

---

# И здесь мы находим ещё одну важную вещь

## Skill не должен получать права автоматически.

Skill может сказать:

```text
allowed-tools:
  browser
  bash
  git
```

Но это **не означает**, что AI-LAB обязан дать ему эти права.

Внешний Skill предлагает требования.

Наш Policy Layer решает:

```text
Skill requests:
  browser ✓
  git ✓
  bash ✗
```

И Skill работает в ограниченном режиме.

---

# Теперь вопрос о контексте

Если у нас:

```text
1000 Skills
```

нельзя загрузить:

```text
1000 × SKILL.md
```

в каждый prompt.

И здесь существующий Agent Skills подход даёт полезную идею — **progressive disclosure**:

```text
startup:
  name + description

match:
  full SKILL.md

execution:
  references/scripts/assets as needed
```

Это специально сделано для ограничения context overhead. citeturn0search0

---

# Но для AI-LAB мы можем сделать ещё лучше

Не просто:

```text
Skill matching
```

а:

```text
TASK
 ↓
TASK PROFILE
 ↓
SKILL INDEX
 ↓
candidate Skills
 ↓
compatibility check
 ↓
conflict resolution
 ↓
selected Skills
 ↓
context assembly
```

---

# Skill Index

```text
SKILL INDEX
│
├── identity
├── description
├── domain
├── triggers
├── required capabilities
├── required tools
├── incompatible skills
├── dependencies
├── version
├── source
├── license
├── trust
├── validation
└── quality history
```

---

# Тогда AI не ищет Skill по названию

Он ищет по **задаче**.

Пользователь говорит:

> Сделай интерфейс максимально близко к этому сайту.

Task Analyzer определяет:

```text
visual reconstruction
responsive analysis
interaction analysis
design system extraction
frontend implementation
visual QA
```

И Skill Engine ищет:

```text
visual-reconstruction
extract-design-system
responsive-design
frontend-design
visual-testing
```

---

# Но и здесь нельзя автоматически подключать всё

Допустим одновременно найдены:

```text
Skill A:
use Tailwind

Skill B:
use CSS Modules

Skill C:
use styled-components
```

Нельзя:

```text
load all
```

Нужна **Skill Resolution**.

---

# Skill Resolution

```text
Candidate Skills
       ↓
Compatibility
       ↓
Dependencies
       ↓
Conflicts
       ↓
Project constraints
       ↓
Policy
       ↓
Selected Skill Set
```

Например:

```text
Project:
React + Tailwind + shadcn
```

Тогда:

```text
Tailwind Skill ✓
shadcn Skill ✓
CSS Modules Skill ✗
styled-components Skill ✗
```

---

# Архитектор B

Но кто решает конфликт между двумя полезными Skills?

Например:

```text
Skill A:
Use 8px spacing system

Skill B:
Use 4px spacing system
```

---

# Главный архитектор

Не Skill Engine.

И не LLM «по вкусу».

Нужна иерархия источников авторитета.

Например:

```text
SYSTEM POLICY
      ↓
PROJECT RULES
      ↓
DESIGN SYSTEM
      ↓
TASK REQUIREMENTS
      ↓
CURATED SKILLS
      ↓
IMPORTED SKILLS
      ↓
MODEL DEFAULTS
```

То есть внешний Skill **никогда не должен молча переопределять проектные правила**.

Это очень важное решение.

---

# Теперь мы можем определить Skill формально

## Skill

> **Версионируемый пакет процедурного знания, предназначенный для выполнения определённого класса задач, содержащий условия активации, инструкцию выполнения, зависимости, ограничения, необходимые capabilities/tools, references и критерии проверки, а также provenance и trust metadata.**

И:

```text
Skill ≠ Agent
Skill ≠ Capability
Skill ≠ Tool
Skill ≠ Workflow
Skill ≠ Knowledge
Skill ≠ Policy
```

---

# Их связь

```text
                         TASK
                           │
                           ▼
                       WORKFLOW
                           │
                           ▼
                         SKILL
                           │
             ┌─────────────┼──────────────┐
             ▼             ▼              ▼
        KNOWLEDGE     CAPABILITIES     POLICIES
                           │
                           ▼
                         TOOLS
```

---

# Пример именно для нашего AI-LAB

Пользователь:

> «Восстанови интерфейс этого сайта и сделай его responsive.»

### Workflow

```text
visual-reconstruction
```

### Skills

```text
visual-reconstruction
extract-design-system
responsive-ui
frontend-design
visual-qa
```

### Knowledge

```text
typography principles
spacing systems
responsive patterns
component anatomy
Lucide icon conventions
shadcn patterns
```

### Capabilities

```text
browser
vision
code
screenshot
visual-comparison
```

### Tools

```text
Playwright
Git
filesystem
browser
image comparison
```

### Policy

```text
don't copy proprietary source
don't modify dependencies without approval
use project design system
preserve baseline
```

Теперь вся система стала значительно понятнее.

---

# Но есть ещё одна брешь

Мы говорили:

> «Найдём Skills на skills.sh и будем их использовать».

Теперь понятно, что это неправильная постановка.

Нужно:

> **AI-LAB строит собственный Skill Catalog, а skills.sh — лишь один из источников входящих Skills.**

То есть:

```text
                    SOURCES
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    skills.sh       GitHub       internal
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  INGESTION
                       ▼
                    ANALYSIS
                       ▼
                   NORMALIZE
                       ▼
                    VALIDATE
                       ▼
                 SKILL CATALOG
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
         CURATED              QUARANTINE
             │
             ▼
       PRODUCTION USE
```

---

# И ещё один принцип

## AI-LAB не обязан импортировать Skill целиком.

Допустим Skill содержит:

```text
SKILL.md
scripts/
references/
assets/
```

После анализа выяснилось:

```text
90% текста — бесполезная общая информация
5% — полезная процедура
5% — уникальные правила
```

Мы можем сохранить:

```text
original skill
```

для provenance.

Но в рабочую систему извлечь:

```text
procedure
rules
references
```

и использовать их отдельно.

Это уже превращает AI-LAB из **Skill Installer** в **Skill Intelligence System**.

---

# Решение главного архитектора

## 1. Skills остаются важнейшим механизмом расширения.

Но они не являются фундаментальной сущностью всей системы.

---

## 2. Вводим чёткую модель

```text
CAPABILITY
    ↓
что система может

SKILL
    ↓
как выполнить определённый класс задач

WORKFLOW
    ↓
когда и в какой последовательности

KNOWLEDGE
    ↓
что система знает

POLICY
    ↓
что разрешено

TOOL
    ↓
чем действие выполняется
```

---

## 3. Внешний Skill никогда не становится trusted автоматически.

```text
DISCOVERED
 ↓
IMPORTED
 ↓
ANALYZED
 ↓
VALIDATED
 ↓
CURATED
 ↓
TRUSTED
```

---

## 4. Skills имеют trust level.

```text
UNKNOWN
UNTRUSTED
REVIEWED
SANDBOXED
TRUSTED
```

---

## 5. Skills не получают права автоматически.

```text
Skill requested permissions
             ↓
        Policy Engine
             ↓
       actual permissions
```

---

## 6. Skills загружаются progressive disclosure.

Не:

```text
1000 Skills × полный текст
```

а:

```text
Skill Index
 ↓
candidate
 ↓
load selected skill
 ↓
load references if required
 ↓
execute
```

---

## 7. Нужен Skill Resolver.

Он решает:

```text
какие Skills нужны
какие совместимы
какие конфликтуют
какие устарели
какие требуют capability
какие разрешены
```

---

# Главная найденная брешь №7

Мы изначально мыслили:

> **«AI-LAB будет собирать Skills».**

Теперь это недостаточно.

Правильная концепция:

> **AI-LAB управляет жизненным циклом процедурного знания. Skills — один из стандартизированных контейнеров этого знания, поступающий из внешних и внутренних источников.**

То есть мы строим не:

```text
SKILLS FOLDER
```

а:

```text
                 SKILL INTELLIGENCE
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    Discovery      Analysis       Validation
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                  SKILL CATALOG
                       │
                 ┌─────┴─────┐
                 ▼           ▼
             CURATED     QUARANTINE
                 │
                 ▼
             RESOLUTION
                 │
                 ▼
              AGENT
```

### Состояние архитектуры после 7 разделов

```text
AI-LAB
│
├── CONTROL PLANE
│   └── Orchestrator
│
├── INTELLIGENCE PLANE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   │
│   └── SKILL SYSTEM
│       ├── Skill Discovery
│       ├── Skill Ingestion
│       ├── Skill Analyzer
│       ├── Skill Validator
│       ├── Skill Catalog
│       ├── Skill Resolver
│       └── Trust Levels
│
├── KNOWLEDGE
│   ├── Facts
│   ├── References
│   ├── Design Knowledge
│   └── Patterns
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
└── EVALUATION
    └── Evidence
```

**Следующий раздел 8 — Skill Lifecycle.** Там уже не будем спорить, «что такое Skill»: это установлено. Главный вопрос будет жёстче: **как AI-LAB самостоятельно находит тысячи новых Skills, понимает, какие из них дублируют друг друга, тестирует их, обновляет старые версии и решает, что действительно достойно попасть в Curated/Production.**

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 8 — **жизненный цикл Skills**. Теперь проверяем автономную часть идеи: сможет ли AI-LAB сам находить, сравнивать, тестировать и обновлять Skills без превращения каталога в неконтролируемую свалку.

---

**Assistant:**

# Раздел 8. SKILL LIFECYCLE — как система учится новым Skills

В разделе 7 мы установили:

> Skill — это не просто `SKILL.md`, а версионируемый пакет процедурного знания.

Теперь возникает гораздо более сложная задача.

Мы хотим, чтобы AI-LAB мог:

```text
найти новый Skill
→ понять его
→ сравнить с существующими
→ проверить
→ протестировать
→ решить, нужен ли он
→ добавить
→ следить за обновлениями
→ удалить/понизить при проблемах
```

И желательно делать это автономно.

Но именно здесь легко построить систему, которая **производит много мусора быстрее, чем человек успевает его разобрать**.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА полностью автономный Skill Discovery

У нас потенциально:

- skills.sh;
- GitHub;
- registry;
- репозитории;
- документация;
- блоги;
- internal Skills;
- Skills, созданные самим AI-LAB.

Количество источников будет расти.

Человек физически не сможет:

```text
искать
читать
сравнивать
тестировать
обновлять
```

тысячи Skills вручную.

Поэтому нужен автономный процесс:

```text id="5u1o5f"
DISCOVER
   ↓
ANALYZE
   ↓
CLASSIFY
   ↓
DEDUPLICATE
   ↓
TEST
   ↓
PROMOTE
```

Например, ночью AI-LAB запускает:

```text
ui learn
```

и исследует новые источники.

---

# Архитектор B — ПРОТИВ

Автоматически добавлять Skills опасно.

Допустим система обнаружила:

```text
Skill A
Skill B
Skill C
Skill D
...
```

LLM решила:

> «Все полезные».

Через месяц:

```text
8 000 Skills
```

Причём:

```text
1 200 duplicates
700 obsolete
400 contradictory
300 malicious / unsafe
2 000 low-quality
```

И теперь Planner должен искать нужный Skill среди огромного количества мусора.

Мы не создали интеллект.

Мы создали **архив Интернета с AI-поиском**.

---

# Главный архитектор

Первое решение:

> **Discovery должен быть автоматическим. Promotion — нетривиально автоматическим. Production promotion — контролируемым.**

Это три разных операции.

```text id="muj2a5"
DISCOVER
    ↓
KNOW ABOUT IT

ANALYZE
    ↓
UNDERSTAND IT

PROMOTE
    ↓
TRUST IT
```

Нельзя объединять их.

---

# Поэтому вводим Skill Lifecycle

```text id="y6v5b4"
DISCOVERED
    ↓
IMPORTED
    ↓
ANALYZED
    ↓
NORMALIZED
    ↓
DEDUPLICATED
    ↓
TESTED
    ↓
EVALUATED
    ↓
CURATED
    ↓
PRODUCTION
```

Но это ещё не всё.

Нужны обратные переходы:

```text id="8d8d1m"
PRODUCTION
    ↓
DEPRECATED
    ↓
QUARANTINED
```

или:

```text id="c6f3q1"
PRODUCTION
    ↓
NEW VERSION
    ↓
REVALIDATION
```

---

# Архитектор A

Хорошо.

Тогда Discovery Agent может постоянно мониторить источники.

Например:

```text id="2wq2b8"
skills.sh
GitHub
registries
RSS
release feeds
```

Находит:

```text
new skill
updated skill
deleted skill
new version
```

И создаёт:

```text id="u7cbk7"
DISCOVERY EVENT
```

---

# Архитектор B

Но здесь вопрос:

## Что именно считается новым Skill?

Допустим GitHub содержит:

```text
skill-a
```

А через неделю появляется:

```text
skill-b
```

Но 90% содержимого одинаково.

Если система считает их независимыми Skills:

```text id="o6n0u5"
Skill A
Skill B
```

каталог начинает разрастаться искусственно.

---

# Главный архитектор

Поэтому нужен **Semantic Deduplication**.

Не только:

```text
same filename
```

и не только:

```text
same hash
```

а несколько уровней.

---

# Уровень 1 — Exact Duplicate

```text
SHA256(A) == SHA256(B)
```

→ один объект.

---

# Уровень 2 — Version Duplicate

```text
Skill A v1.2
Skill A v1.3
```

Это не два Skills.

Это:

```text
Skill
 ├── v1.2
 └── v1.3
```

---

# Уровень 3 — Semantic Similarity

Например:

```text id="x5h3d7"
frontend-design
web-ui-design
modern-frontend-design
```

Может оказаться, что три разных Skills решают практически одну задачу.

AI-LAB должен определить:

```text
same purpose?
same procedure?
same domain?
same constraints?
```

И получить:

```text id="i1f7y0"
Skill Family
    │
    ├── Skill A
    ├── Skill B
    └── Skill C
```

---

# Но здесь есть ловушка

Семантически похожие Skills не обязательно являются дубликатами.

Например:

```text
Skill A:
desktop-first design

Skill B:
mobile-first design
```

Они похожи по теме.

Но процедуры разные.

Поэтому similarity ≠ deduplication.

---

# Вводим три категории

```text id="7szzg0"
DUPLICATE
```

То же самое.

```text id="0z0qmp"
RELATED
```

Похожие/связанные, но разные.

```text id="xw4x0e"
CONFLICTING
```

Решают одну задачу противоположными способами.

---

# Это уже можно представить графом

```text id="n2bb8c"
              Skill A
              /     \
       related      duplicate
          /           \
     Skill B         Skill C
          \
        conflicts
            \
           Skill D
```

И это очень хорошо связывается с будущим Knowledge Graph.

---

# Теперь следующий вопрос

## Как понять, хороший Skill или плохой?

Архитектор A:

> LLM прочитает и оценит.

Архитектор B:

> Нет. Это самооценка.

---

# Главный архитектор

Нужен **Skill Evaluation**.

И он должен проверять разные измерения.

Например:

```text id="r7v2qj"
Skill Quality
│
├── Correctness
├── Completeness
├── Clarity
├── Reproducibility
├── Tool Compatibility
├── Safety
├── Freshness
├── Maintainability
└── Practical Utility
```

Но главное:

> **Skill должен иметь тест.**

---

# Skill Test

Например Skill:

```text
extract-design-system
```

Тогда создаём benchmark task:

```text id="0y1k2m"
INPUT:
reference website

EXPECTED:
design tokens
typography
spacing
colors
radius
components
```

Skill запускается.

Получаем:

```text id="v2r5fj"
result
```

И сравниваем с expected/evidence.

---

# А если expected результата нет?

Это часто будет.

Тогда:

```text id="55yyqn"
NO_GROUND_TRUTH
```

И Skill не получает статус:

```text
VERIFIED
```

Он может остаться:

```text
EXPERIMENTAL
```

Это очень важное правило.

---

# Skill должен иметь Evaluation Contract

Например:

```json id="31p2gd"
{
  "skill": "extract-design-system",

  "inputs": [
    "website",
    "screenshots"
  ],

  "expected_outputs": [
    "tokens",
    "typography",
    "spacing"
  ],

  "quality_checks": [
    "schema_valid",
    "required_fields",
    "consistency"
  ]
}
```

---

# Архитектор B

Но некоторые Skills нельзя проверить одним benchmark.

Например:

```text
frontend-design
```

Как определить, что он хороший?

---

# Главный архитектор

Через **task families**.

Не:

```text
Skill → один тест
```

а:

```text id="w9m4m6"
Skill
 ↓
Benchmark Suite
 ├── Task A
 ├── Task B
 ├── Task C
 ├── Task D
 └── Task E
```

Например `frontend-design`:

```text
landing page
dashboard
settings page
mobile interface
data table
form
```

И уже смотрим устойчивость.

---

# Ещё важнее

Skill должен проверяться **на нескольких моделях**.

Почему?

Потому что Skill может быть великолепным для:

```text
Model A
```

и бесполезным для:

```text
Model B
```

---

# Поэтому появляется Skill × Model Matrix

```text id="m65m89"
                    Model A   Model B   Model C

Skill A               92        87        90
Skill B               75        94        89
Skill C               91        90        91
```

Теперь Model Router может учитывать:

```text
Task
+
Skill
+
Model
```

Это уже намного интереснее.

---

# Но есть ещё одна проблема

## Skills могут изменяться.

GitHub:

```text
v1.0
```

через месяц:

```text
v2.0
```

Нельзя просто заменить старую версию.

Потому что проекты могут зависеть от старого поведения.

---

# Поэтому:

```text id="gkq2jv"
Skill
│
├── v1.0
├── v1.1
├── v1.2
└── v2.0
```

И каждый production workflow должен знать:

```text
skill_version
```

---

# Это позволяет сделать rollback

Допустим:

```text id="3t4f4j"
Skill v2.0
```

оказался хуже.

Система обнаруживает:

```text
visual quality ↓
```

Тогда:

```text id="w5p5n7"
v2.0
 ↓
QUARANTINE

v1.2
 ↓
RESTORE
```

---

# Теперь появляется понятие Skill Regression

Очень важное для автономной системы.

После обновления:

```text id="yr0d34"
old:
  93% success

new:
  81% success
```

Это:

```text
REGRESSION
```

Skill автоматически не продвигается.

---

# Архитектор A

Получается, AI-LAB может сам себя улучшать.

```text id="frb4x7"
DISCOVER
 ↓
TEST
 ↓
COMPARE
 ↓
PROMOTE
```

---

# Архитектор B

Только если improvement доказан.

Иначе:

```text id="n0s2u7"
new ≠ better
```

Это должно стать ещё одним фундаментальным правилом AI-LAB.

---

# Главный архитектор

Да.

> **Обновление не является улучшением, пока оно не прошло сравнение с baseline.**

---

# Теперь самое интересное — автономная работа

Пользователь хочет:

> «Запусти AI-LAB на несколько часов и пусть он исследует новые Skills».

Мы теперь можем сделать это безопаснее.

---

# Research Queue

```text id="f3a0t7"
RESEARCH QUEUE

Job #001
source: skills.sh
topic: frontend

Job #002
source: GitHub
topic: visual QA

Job #003
source: registry
topic: charts
```

Каждая задача:

```text id="flkwy8"
QUEUED
 ↓
RESEARCHING
 ↓
ANALYZING
 ↓
TESTING
 ↓
EVALUATING
 ↓
PROMOTED / REJECTED
```

---

# Budget

Но автономный процесс нельзя запускать бесконечно.

Каждая research job получает:

```text id="k9vl8u"
max_time
max_tokens
max_model_cost
max_iterations
max_tool_calls
```

Например:

```text
Skill research
budget:
  30 min
  $2
  20 tool calls
  3 test iterations
```

---

# Stop Conditions

Система должна остановиться, если:

```text id="r6kz8j"
budget exhausted
↓
STOP
```

или:

```text id="o2tbp5"
no new information
↓
STOP
```

или:

```text id="pjc1li"
source unavailable
↓
RETRY
```

или:

```text id="02otd9"
conflicting evidence
↓
HUMAN REVIEW
```

---

# Теперь мы можем реализовать автономный Skill Researcher

Но важно:

> **Researcher — не постоянный агент.**

Это task:

```text id="6t8o1q"
Skill Research Task
```

который создаёт временные runtime:

```text id="0d0xgn"
Discovery Agent
Analysis Agent
Test Agent
Evaluator
```

И после завершения они исчезают.

Это полностью соответствует решению раздела 4.

---

# А что если Skill создаёт сам AI-LAB?

Вот это уже следующий уровень.

Например AI-LAB заметил:

```text id="x4d1l6"
20 проектов
```

и в каждом повторяется одна и та же процедура:

```text
extract Excel data
→ normalize
→ generate UI
→ validate
```

AI может предложить:

```text id="e5w2kl"
NEW SKILL:
excel-dashboard-generation
```

Но:

```text
GENERATED
 ↓
EXPERIMENTAL
 ↓
BENCHMARK
 ↓
VALIDATED
 ↓
CURATED
```

Нельзя сразу:

```text
GENERATED → PRODUCTION
```

---

# Это приводит к очень мощной концепции

## Skill Evolution

```text id="i9x3ap"
SOURCE SKILL
      ↓
AI ANALYSIS
      ↓
LOCAL ADAPTATION
      ↓
EXPERIMENT
      ↓
BENCHMARK
      ↓
BETTER VERSION
```

То есть AI-LAB не просто **потребляет Skills**.

Он способен создавать новые procedural abstractions из собственного опыта.

---

# Но здесь появляется опасность

AI может начать создавать:

```text id="n7x9gz"
skill-v1
skill-v2
skill-v3
skill-v4
...
```

для каждого микроскопического действия.

Поэтому нужен **Minimum Utility Threshold**.

Новый Skill создаётся только если:

```text id="a4k9vf"
повторяемость
+
значимая польза
+
стабильность
+
самостоятельный lifecycle
```

Например:

```text "fix margin-left by 4px"
```

→ не Skill.

А:

```text
"reconstruct responsive navigation from visual references"
```

→ потенциально Skill.

---

# Skill должен иметь собственный identity

Например:

```json id="cr6q6t"
{
  "id": "visual-reconstruction",
  "version": "2.1.0",

  "purpose": "...",

  "inputs": [],
  "outputs": [],

  "required_capabilities": [
    "browser",
    "vision",
    "code"
  ],

  "dependencies": [],

  "conflicts": [],

  "tests": [],

  "provenance": {},

  "trust": "curated",

  "status": "production"
}
```

---

# И теперь самое важное

## Skill Lifecycle — это не CRUD.

Не:

```text
add
update
delete
```

А:

```text id="p8w9l4"
DISCOVERY
    ↓
UNDERSTANDING
    ↓
VALIDATION
    ↓
ADOPTION
    ↓
OBSERVATION
    ↓
UPDATE
    ↓
REVALIDATION
    ↓
RETIREMENT
```

То есть Skill живёт в системе.

---

# Решение главного архитектора

## Lifecycle

```text id="q4f9fa"
                  ┌───────────────┐
                  │   DISCOVERY   │
                  └───────┬───────┘
                          ↓
                     IMPORTED
                          ↓
                     ANALYZED
                          ↓
                    NORMALIZED
                          ↓
                   DEDUPLICATED
                          ↓
                      TESTED
                          ↓
                    EVALUATED
                     /       \
                  FAIL       PASS
                   ↓           ↓
               REJECTED      CURATED
                                ↓
                           PRODUCTION
                                ↓
                           MONITORED
                           /       \
                      REGRESSION   UPDATE
                           ↓          ↓
                      QUARANTINE  REVALIDATE
```

---

# Автономная очередь

```text id="8w8fqn"
RESEARCH QUEUE
│
├── discovery jobs
├── analysis jobs
├── validation jobs
├── update jobs
├── regression jobs
└── cleanup jobs
```

---

# Skill Catalog получает несколько состояний

```text id="9hj7s5"
EXTERNAL
DISCOVERED
IMPORTED
EXPERIMENTAL
VALIDATED
CURATED
PRODUCTION
DEPRECATED
QUARANTINED
REJECTED
```

---

# И главное правило

> **AI-LAB может автоматически искать, анализировать и экспериментировать со Skills, но право считаться production knowledge появляется только после проверки против baseline и evidence.**

---

# Главная найденная брешь №8

Раньше мы представляли автономное обучение примерно так:

```text
найти Skills
↓
добавить Skills
↓
AI стал умнее
```

Это неверно.

Правильная модель:

```text id="2f8j1p"
DISCOVER
   ↓
UNDERSTAND
   ↓
COMPARE
   ↓
TEST
   ↓
EVALUATE
   ↓
PROMOTE
   ↓
MONITOR
   ↓
REGRESS / UPDATE
   ↓
REVALIDATE
```

И появляется ещё более фундаментальная идея:

> **AI-LAB должен накапливать не просто Skills, а проверенные procedural capabilities с историей их эффективности.**

### Состояние после 8 разделов

```text id="l3n1ax"
AI-LAB
│
├── CONTROL PLANE
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   │
│   └── SKILL SYSTEM
│       ├── Discovery
│       ├── Ingestion
│       ├── Analysis
│       ├── Normalization
│       ├── Deduplication
│       ├── Validation
│       ├── Skill Catalog
│       ├── Skill Resolver
│       ├── Trust
│       ├── Benchmark
│       └── Lifecycle
│
├── KNOWLEDGE
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
├── EVALUATION
│
└── AUTONOMOUS RESEARCH
    ├── Research Queue
    ├── Budgets
    ├── Stop Conditions
    ├── Experiments
    └── Promotion
```

**Следующий раздел 9 — Knowledge Base.** И здесь придётся разобрать ещё более фундаментальную проблему: если Skills, design systems, компоненты, документация, benchmark results, screenshots, observations и собственный опыт AI-LAB всё время накапливаются — **что именно является «знанием», как его хранить и как не превратить Knowledge Base в RAG-свалку из миллионов чанков.**

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 9 — **Knowledge Base**. Здесь нужно решить, что AI-LAB вообще считает знанием: документы, факты, процедуры, наблюдения, код, результаты тестов или связи между ними.

---

**Assistant:**

# Раздел 9. KNOWLEDGE BASE — где живёт знание AI-LAB?

После разделов 7–8 у нас уже есть важное наблюдение:

```text id="6k9g2p"
Skill ≠ Knowledge
```

Skill говорит **как действовать**.

Но AI-LAB будет накапливать гораздо больше:

- документацию;
- design systems;
- компоненты;
- API;
- примеры;
- screenshots;
- DOM observations;
- результаты экспериментов;
- benchmark;
- ошибки;
- исправления;
- лицензии;
- зависимости;
- связи между компонентами;
- успешные и неудачные reconstruction;
- собственные выводы AI-LAB.

Если всё это просто положить в:

```text id="4q9x3w"
knowledge/
```

мы через некоторое время получим огромную помойку.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА классическую Knowledge Base + RAG

Самый практичный вариант:

```text id="z1e8mf"
documents
 ↓
chunking
 ↓
embeddings
 ↓
vector database
 ↓
semantic search
 ↓
LLM
```

Например:

```text id="m3q8ab"
knowledge/
├── shadcn.md
├── radix.md
├── tailwind.md
├── frontend-design.md
├── accessibility.md
└── design-patterns.md
```

Затем:

```text id="eqkq7g"
query:
"Как правильно сделать responsive navigation?"
```

Vector search находит релевантные куски.

AI получает их и отвечает.

Просто.

---

# Архитектор B — ПРОТИВ

Для обычного Q&A — да.

Для нашей системы — недостаточно.

Потому что у нас знания не только текстовые.

Например:

```text id="c7ryp1"
Button
```

У него есть:

```text id="w9o5am"
source
version
license
variants
dependencies
design tokens
states
screenshots
examples
tests
related components
```

Векторный chunk этого не выражает.

---

# Более того

Представим:

```text id="f6yn8g"
Button
```

и:

```text id="t5j2m1"
IconButton
```

AI должен понимать:

```text id="qg3n91"
IconButton
    └── related to Button

Button
    ├── has variants
    ├── uses icon
    ├── supports loading
    └── appears in forms
```

Это уже **структурированное знание**.

Не просто текст.

---

# Главный архитектор

Здесь мы должны отказаться от идеи:

> «Knowledge Base = vector database».

Vector DB может быть **одним индексом**, но не самой базой знаний.

---

# Предлагаю разделить Knowledge на уровни

```text id="4cn3fj"
RAW
STRUCTURED
RELATIONAL
SEMANTIC
EVIDENCE
```

---

# 1. RAW KNOWLEDGE

Исходный материал:

```text id="q2z8o4"
PDF
HTML
README
SKILL.md
GitHub repository
screenshot
video
documentation
JSON
```

Это provenance layer.

Ничего не теряем без необходимости.

---

# 2. STRUCTURED KNOWLEDGE

Извлечённые сущности:

```text id="x8m1ra"
Component
Skill
Library
DesignToken
Pattern
API
Rule
Model
Project
Benchmark
```

Например:

```json id="i9b1j2"
{
  "type": "component",
  "name": "Button",
  "framework": "React",
  "source": "...",
  "version": "..."
}
```

---

# 3. RELATIONAL KNOWLEDGE

Связи:

```text id="4r9r9v"
Button
 ├── uses → Slot
 ├── uses → Icon
 ├── variant → destructive
 ├── source → shadcn
 ├── depends_on → Radix
 └── related_to → IconButton
```

---

# 4. SEMANTIC KNOWLEDGE

Тут уже embeddings / semantic search.

Например:

```text id="1z6l5w"
"компонент для отображения действия
пользователя"
```

может найти:

```text id="d7s4yc"
Button
ActionButton
IconButton
CTA
```

---

# 5. EVIDENCE

И самое важное:

```text id="u9q1j3"
Почему мы считаем это знанием?
```

Например:

```json id="l4u5sz"
{
  "claim": "Component supports keyboard navigation",

  "evidence": [
    "documentation",
    "source code",
    "Playwright test"
  ],

  "confidence": "verified"
}
```

---

# Архитектор B

Вот это уже гораздо ближе к тому, что нам нужно.

Потому что:

> Knowledge Object должен знать не только **что**, но и **откуда мы это знаем**.

---

# Главный архитектор

И это продолжает принцип №1:

> **Evidence over assertion.**

---

# Теперь спор о хранении

## Архитектор A

Тогда нам нужна PostgreSQL.

Там можно хранить:

```text id="13mlj5"
components
skills
sources
versions
relations
benchmarks
projects
experiments
```

А embeddings — через pgvector.

Получим:

```text id="4ny5dq"
PostgreSQL
+
pgvector
```

И всё в одной системе.

---

## Архитектор B

Это уже лучше, но не всё.

Большие документы, screenshots, repositories, видео и артефакты не стоит запихивать непосредственно в relational database.

Нужен Object Storage:

```text id="u8fr5h"
Knowledge DB
       │
       ├── metadata
       ├── relations
       └── evidence
              │
              ▼
        Object Storage
              │
              ├── PDFs
              ├── screenshots
              ├── videos
              ├── archives
              └── source snapshots
```

---

# Главный архитектор

Согласен.

Но здесь нужно избежать прежней ошибки:

> «Давайте сразу построим distributed data platform».

Для v1 достаточно:

```text id="1q5t4d"
PostgreSQL
+
local filesystem / object storage
+
vector index
```

Архитектурно интерфейс должен позволять позже заменить storage.

---

# А нужен ли Graph Database?

Вот здесь начинается следующий спор.

## Архитектор A — ЗА

У нас огромное количество связей:

```text id="m4q6wa"
Skill → Capability
Component → Dependency
Component → Registry
Component → Design System
Design System → Token
Project → Component
Model → Skill
Skill → Benchmark
Benchmark → Result
```

Это естественный graph.

Можно использовать:

```text id="p5v9ob"
Neo4j
```

или другую graph DB.

---

## Архитектор B — ПРОТИВ

Не обязательно.

PostgreSQL прекрасно хранит relations.

Если поставить:

```text id="5fl4u6"
Postgres
+
Neo4j
+
Vector DB
+
Object Storage
```

до того, как у нас появились реальные масштабы, мы получим четыре инфраструктурных слоя ради системы, которой ещё нет.

---

# Главный архитектор

Это важный момент.

**Graph — это модель данных, а не обязательно отдельная база.**

На первом этапе:

```text id="o4v6kc"
PostgreSQL
   │
   ├── entities
   ├── relations
   └── embeddings
```

Если позже graph workload станет самостоятельным bottleneck:

```text id="v2s8kr"
PostgreSQL
      ↓
Graph projection
      ↓
Graph DB
```

То есть:

> сначала graph model, потом graph infrastructure.

---

# Теперь самое опасное — Chunking

Классический RAG делает:

```text id="8d9bvl"
document
 ↓
chunks
 ↓
embeddings
```

Но представим документацию shadcn.

Разрезали её:

```text id="q1a8w2"
chunk 1:
Button...

chunk 2:
Variants...

chunk 3:
Accessibility...

chunk 4:
Installation...
```

При запросе:

> «Как добавить кнопку с destructive variant?»

может прийти только chunk 2.

Но системе также нужны:

```text id="i2k3gr"
component identity
source
version
dependencies
installation method
project compatibility
```

Поэтому Knowledge Retrieval должен быть **entity-aware**.

---

# Entity-Aware Retrieval

Вместо:

```text id="xy0q3m"
query
 ↓
similar chunks
```

делаем:

```text id="w8j3h0"
QUERY
 ↓
ENTITY RETRIEVAL
 ↓
RELATION RETRIEVAL
 ↓
SEMANTIC RETRIEVAL
 ↓
EVIDENCE RETRIEVAL
 ↓
CONTEXT ASSEMBLY
```

---

# Например пользователь спрашивает

> «Какой компонент использовать для выбора нескольких значений в нашем dashboard?»

Система может найти:

```text id="12g0fw"
MultiSelect
CheckboxGroup
Combobox
Command
Select
```

Но затем учитывает:

```text id="t3h4z8"
Project Design System
Framework
Existing dependencies
Accessibility
Mobile requirements
Known failures
```

И только после этого отдаёт контекст Planner.

---

# Это уже не обычный RAG.

Это:

> **Knowledge Retrieval Engine**

---

# Архитектор B

И это должно работать не только по similarity.

Нужен гибрид:

```text id="j8d2u4"
STRUCTURED FILTER
        +
SEMANTIC SEARCH
        +
GRAPH RELATIONS
        +
KEYWORD SEARCH
        +
EVIDENCE
```

---

# Главный архитектор

Да.

Например:

```text id="g3d4t8"
query:
"shadcn compatible date picker"
```

### Structured

```text
framework = react
registry = shadcn-compatible
type = component
```

### Semantic

```text
date selection
calendar
date input
```

### Relations

```text
uses → calendar
uses → popover
```

### Evidence

```text
tested = true
```

Получается гораздо более точный результат.

---

# Теперь ещё одна проблема

## Knowledge Base не должна хранить только положительный опыт.

Это критично.

Допустим AI-LAB попробовал библиотеку:

```text id="j5k8rc"
Library X
```

и обнаружил:

```text id="7w7y9v"
SSR problems
poor mobile behavior
broken keyboard navigation
```

Если просто удалить библиотеку:

```text id="3y6v3k"
delete
```

система потеряет знание.

В следующий раз AI снова попробует X.

---

# Поэтому нужны Negative Knowledge / Failure Records

```text id="y6m2f8"
Library X

Known failures:
  SSR incompatibility
  mobile bug
  keyboard issue

Evidence:
  project P-17
  test #381
```

---

# Это очень важно именно для автономной системы.

Она должна помнить:

```text id="j1y4pu"
what worked
```

и:

```text id="4x6gko"
what failed
```

---

# Тогда Knowledge Object может выглядеть так

```json id="0lqk0s"
{
  "id": "component:date-picker:123",

  "identity": {
    "name": "Date Picker",
    "type": "component"
  },

  "sources": [],

  "versions": [],

  "relations": [],

  "evidence": [],

  "tests": [],

  "successes": [],

  "failures": [],

  "constraints": [],

  "provenance": {},

  "status": "curated"
}
```

---

# И ещё одно важное разделение

## Knowledge ≠ Memory

Мы ранее говорили о system memory.

Но это не одно и то же.

### Knowledge

Обобщённое знание:

> shadcn Button имеет такие-то варианты.

### Task Memory

Что происходило в конкретной задаче:

> В проекте P-142 Model B уже пробовала этот компонент.

### Project Memory

Что относится к проекту:

> Проект использует Tailwind + shadcn и предпочитает radius 8px.

### System Memory

Что относится ко всему AI-LAB:

> Эта библиотека часто ломается при определённом сценарии.

---

# Поэтому:

```text id="e4a2br"
KNOWLEDGE
    │
    ├── GLOBAL
    ├── DOMAIN
    ├── PROJECT
    └── TASK
```

Но не надо смешивать всё в одну таблицу.

---

# Архитектор B

А как предотвратить загрязнение глобального Knowledge?

Допустим:

```text id="2q3g6n"
Project A
```

использовал странное правило:

```text id="p8c2ar"
radius = 17px
```

AI не должен решить:

> «17px — хороший design rule».

---

# Главный архитектор

Именно.

Каждый факт должен иметь **scope**.

Например:

```text id="1c0ncv"
scope:
  global
  domain
  project
  task
  experiment
```

И:

```text id="r4f3pu"
project rule ≠ global rule
```

---

# Это одна из самых важных архитектурных границ.

---

# Теперь вопрос о «знании, созданном AI»

Допустим AI написал:

> «Для dashboard лучше использовать density medium».

Это пока не знание.

Это:

```text id="i8e3wp"
HYPOTHESIS
```

Если затем:

```text id="8g3wq0"
20 experiments
+
visual evaluation
+
user preference
```

подтвердили гипотезу, она может стать:

```text id="7cyq46"
CURATED DESIGN PRINCIPLE
```

---

# Поэтому вводим Knowledge Lifecycle

```text id="g1e8ty"
OBSERVATION
    ↓
HYPOTHESIS
    ↓
SUPPORTED
    ↓
VERIFIED
    ↓
CURATED
    ↓
PRODUCTION
```

И обратные:

```text id="s4u4j0"
REGRESSION
    ↓
QUESTIONED
    ↓
DEPRECATED
```

---

# Это фактически превращает Knowledge Base в систему управления знаниями.

Не:

```text id="d6q0mw"
RAG storage
```

а:

```text id="x0qfsa"
KNOWLEDGE SYSTEM
```

---

# Теперь спор о том, кто может писать Knowledge

## Архитектор A

Все агенты.

Иначе будет слишком медленно.

---

## Архитектор B

Нет.

Если каждый Agent может писать:

```text id="h2w8ko"
GLOBAL KNOWLEDGE
```

то мы получим contamination.

---

# Главный архитектор

Правильный ответ:

**агенты могут создавать Knowledge Candidates.**

Но не обязательно production knowledge.

```text id="8v3j0k"
Agent
 ↓
Knowledge Candidate
 ↓
Evidence
 ↓
Evaluation
 ↓
Promotion
```

---

# Например

Agent сообщает:

> `Library X` лучше работает для charts.

Создаётся:

```text id="n0e4wv"
KNOWLEDGE CANDIDATE
```

с:

```text id="6n6tce"
source
task
model
environment
evidence
result
```

После нескольких подтверждений:

```text id="l2p6k9"
CURATED KNOWLEDGE
```

---

# Это очень хорошо сочетается с автономным режимом

Ночью AI-LAB может:

```text id="x9u4uw"
исследовать
↓
создавать candidates
↓
проводить experiments
↓
подтверждать
↓
обновлять Knowledge
```

Но не может без доказательств переписывать глобальную истину.

---

# Решение главного архитектора

## Knowledge Base больше не называем просто «базой».

В архитектуре это:

> **Knowledge System**

Она состоит из нескольких типов хранения.

```text id="9p5x0v"
                 KNOWLEDGE SYSTEM
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
     RAW             STRUCTURED         EVIDENCE
       │                 │                 │
       │                 ▼                 │
       │             RELATIONS             │
       │                 │                 │
       └────────────┬────┴────┬────────────┘
                    ▼         ▼
               SEMANTIC    HISTORY
                 INDEX      / EVENTS
```

---

# Storage Architecture v1

Не строим сразу пять специализированных БД.

```text id="9n1r0k"
PostgreSQL
│
├── entities
├── relations
├── versions
├── evidence
├── experiments
├── benchmarks
├── failures
├── projects
└── metadata

Vector Index
│
└── semantic retrieval

Object Storage / Filesystem
│
├── documents
├── screenshots
├── videos
├── source snapshots
└── artifacts
```

Graph DB пока **не требуется**.

Graph-модель существует на уровне данных.

---

# Retrieval Architecture

```text id="j9k1z6"
USER / AGENT QUERY
        │
        ▼
   QUERY ANALYZER
        │
        ├── structured
        ├── semantic
        ├── keyword
        └── relational
                │
                ▼
        RETRIEVAL ENGINE
                │
                ▼
        EVIDENCE FILTER
                │
                ▼
        CONTEXT BUILDER
                │
                ▼
             MODEL
```

---

# Knowledge имеет Scope

```text id="9m8y0v"
GLOBAL
DOMAIN
PROJECT
TASK
EXPERIMENT
```

И правило:

> **Частное знание не становится глобальным автоматически.**

---

# Knowledge имеет статус

```text id="0z6p8n"
OBSERVED
HYPOTHESIS
SUPPORTED
VERIFIED
CURATED
PRODUCTION
DEPRECATED
QUESTIONED
```

---

# Knowledge имеет provenance

Минимум:

```text id="g4k2d9"
source
source_version
created_at
author/agent
task
project
evidence
validation
scope
confidence
```

---

# И самое важное

AI-LAB должен хранить не только:

```text id="w8v8n7"
"что работает"
```

но и:

```text id="x1v6h5"
"что не работает"
"где не работает"
"при каких условиях работает"
"какие ограничения обнаружены"
```

Иначе автономное обучение будет постоянно повторять старые ошибки.

---

# Главная найденная брешь №9

Мы первоначально могли построить:

```text id="2w9v5f"
DOCUMENTS
 ↓
CHUNKS
 ↓
EMBEDDINGS
 ↓
RAG
```

Это недостаточно для AI-LAB.

Правильная модель:

> **Knowledge System — это система версионируемых сущностей, связей, наблюдений, гипотез, evidence, результатов и ограничений, где vector search является только одним из механизмов retrieval.**

И теперь у нас появляется очень важная цепочка:

```text id="j6x7s8"
SOURCE
 ↓
OBSERVATION
 ↓
KNOWLEDGE CANDIDATE
 ↓
EVIDENCE
 ↓
VALIDATION
 ↓
CURATED KNOWLEDGE
 ↓
PRODUCTION
```

### Состояние после 9 разделов

```text id="e7r2f5"
AI-LAB
│
├── CONTROL
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   │
│   └── Skill System
│       ├── Discovery
│       ├── Analysis
│       ├── Validation
│       ├── Catalog
│       └── Lifecycle
│
├── KNOWLEDGE SYSTEM
│   ├── Raw Sources
│   ├── Entities
│   ├── Relations
│   ├── Semantic Index
│   ├── Evidence
│   ├── Experiments
│   ├── Benchmarks
│   ├── Failures
│   ├── Versions
│   ├── Scope
│   └── Promotion
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
└── EVALUATION
    ├── Functional
    ├── Visual
    ├── Responsive
    ├── Accessibility
    └── Performance
```

**Следующий раздел 10 — Evidence / Provenance.** Здесь мы должны пойти ещё глубже: недостаточно сказать «у каждого знания есть источник». Нужно определить, **что считается доказательством, как система связывает утверждение с конкретным экспериментом/скриншотом/исходным кодом, как измеряется confidence и когда AI имеет право считать что-либо verified.**

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 10 — **Evidence / Provenance**. Это фундаментальный слой: если AI-LAB будет сам исследовать, создавать знания и улучшать себя, нам нужна проверяемая цепочка «утверждение → источник → действие → результат».

---

**Assistant:**

# Раздел 10. EVIDENCE / PROVENANCE — почему AI-LAB должен верить самому себе?

После раздела 9 у нас появилась Knowledge System. Но теперь возникает фундаментальная проблема:

> **Если AI-LAB сам исследует Интернет, сам создаёт гипотезы, сам пишет код и сам оценивает результат — кто проверяет, что его знания вообще имеют основание?**

Нельзя решить это простым полем:

```text
confidence: 0.93
```

Потому что число, выставленное самой модели, не является доказательством.

При этом у нас уже есть хорошая концептуальная основа в виде W3C PROV: provenance описывает сущности, действия и агентов, участвовавших в создании результата, а также связи использования, генерации и происхождения. Такой provenance используется, в частности, для оценки качества, надёжности и воспроизводимости. citeturn0search0turn0search1

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА Evidence System

Каждое существенное утверждение AI-LAB должно иметь evidence.

Например:

> «Этот компонент поддерживает keyboard navigation».

Система должна уметь ответить:

```text
SOURCE
↓
documentation
↓
source code
↓
test
↓
result
```

Или:

> «Эта реализация визуально ближе к reference».

Должно быть:

```text
reference screenshot
+
generated screenshot
+
comparison
+
metrics
```

То есть:

```text id="3c5z0j"
CLAIM
  ↓
EVIDENCE
  ↓
EVALUATION
  ↓
STATUS
```

---

# Архитектор B — ПРОТИВ

Это звучит правильно, но есть опасность.

Если мы будем требовать evidence для **каждой мелочи**, система станет практически непригодной.

Например:

```text
Button uses flexbox.
```

Нужно ли сохранять:

```text
screenshot
DOM
source file
browser trace
hash
model
timestamp
```

ради одного утверждения?

Нет.

Получим:

```text
evidence explosion
```

---

# Главный архитектор

Согласен.

Поэтому:

> **Evidence должно быть пропорционально значимости утверждения.**

Это важное правило.

---

# Risk-based Evidence

Например:

### R0 — тривиальный факт

```text
package.json exists
```

Достаточно:

```text
tool result
```

---

### R1 — техническое утверждение

```text
package version = 4.2.1
```

Нужен:

```text
package metadata
```

---

### R2 — функциональное утверждение

```text
component works
```

Нужен:

```text
test result
```

---

### R3 — production knowledge

```text
library X recommended for this workflow
```

Нужны:

```text
multiple observations
+
benchmark
+
provenance
```

---

### R4 — изменение архитектуры AI-LAB

```text
replace orchestration architecture
```

Нужно:

```text
proposal
+
evidence
+
benchmark
+
impact analysis
+
explicit approval
```

---

# Теперь важнейшее различие

## Source ≠ Evidence

Архитектор B:

> Если у нас есть ссылка на документацию, это evidence?

Не всегда.

Например:

```text
Source:
https://example.com/button
```

Это источник.

Но утверждение:

> «Button работает с keyboard navigation».

требует доказательства.

Документация может утверждать это.

Тогда:

```text
documentation claim
```

является **evidence of claim**, но с определённым уровнем доверия.

А если мы самостоятельно запустили:

```text
Playwright
↓
Tab
↓
focus
↓
Enter
↓
result
```

получаем **экспериментальное evidence**.

---

# Поэтому Evidence имеет тип

```text id="9x2v4k"
DOCUMENTATION
SOURCE_CODE
BROWSER_OBSERVATION
SCREENSHOT
VIDEO
TEST
BENCHMARK
EXPERIMENT
USER_INPUT
MODEL_ASSERTION
DERIVED
```

И это принципиально разные вещи.

---

# Например

Утверждение:

> Button поддерживает disabled state.

Можем иметь:

```text id="g8f4q2"
Evidence #1
type: documentation
source: official docs

Evidence #2
type: source_code
file: Button.tsx

Evidence #3
type: test
test: button-disabled.spec.ts
result: PASS
```

Теперь claim намного сильнее.

---

# Архитектор A

То есть evidence можно комбинировать.

```text id="2t1z7a"
CLAIM
 │
 ├── evidence #1
 ├── evidence #2
 └── evidence #3
```

---

# Главный архитектор

Да.

Но теперь появляется ещё одна проблема.

## Evidence может противоречить друг другу.

Например:

```text id="6w3m5s"
Documentation:
  supports mobile

Browser test:
  fails on mobile
```

Что делать?

---

# Архитектор B

Если система просто усреднит confidence:

```text
docs = 0.9
test = 0.8
```

получим:

```text
0.85
```

Это бессмысленно.

---

# Главный архитектор

Именно.

Evidence нельзя просто складывать арифметически.

Нужно хранить:

```text id="f1k8c4"
CLAIM
│
├── evidence
│   ├── source
│   ├── observation
│   └── test
│
└── conflicts
```

А затем определять статус:

```text
VERIFIED
PARTIALLY_VERIFIED
CONTRADICTED
UNVERIFIED
OUTDATED
UNKNOWN
```

---

# Это важнее confidence score

Например:

```text id="p7v4x2"
claim:
"works on mobile"

status:
CONTRADICTED

evidence:
docs → supports
browser test → fails
```

AI не должен сказать:

> «Вероятность 78%, поэтому можно использовать».

Он должен сказать:

> **Документация заявляет поддержку, но текущий browser test обнаружил failure. Claim не считается verified.**

---

# Это уже настоящий Evidence System.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь задаём более фундаментальный вопрос.

## Что вообще является объектом доказательства?

Не документ.

Не файл.

Не Skill.

**Claim.**

Например:

```text id="9q5k5k"
CLAIM-001

"Component X supports keyboard navigation."
```

И отдельно:

```text id="c7q2s1"
CLAIM-002

"Component X is compatible with React 19."
```

У каждого claim своя evidence chain.

---

# Поэтому Knowledge Object

из прошлого раздела теперь можно представить:

```text id="e0m5r2"
KNOWLEDGE OBJECT
│
├── identity
├── claims
│   ├── claim
│   ├── evidence
│   ├── status
│   └── conflicts
│
├── provenance
├── versions
├── relations
└── history
```

---

# Архитектор A

И это напоминает научный подход:

```text
hypothesis
↓
experiment
↓
observation
↓
evidence
↓
conclusion
```

---

# Главный архитектор

Да, но не нужно превращать каждый UI-компонент в научную диссертацию.

Нам нужна **минимальная достаточная доказательная цепочка**.

---

# Например, для компонента

```text id="4i7n3s"
Button
```

### Claim

```text
supports:
  disabled
```

### Evidence

```text
source_code
+
unit_test
```

Достаточно.

---

# Для утверждения:

> «Этот компонент лучше подходит для нашего AI-LAB dashboard».

Это уже субъективнее.

Нужен:

```text id="7z4m6a"
task benchmark
+
candidate A
+
candidate B
+
evaluation criteria
+
results
```

---

# Для утверждения:

> «Эта библиотека является production-compatible».

Нужны уже:

```text id="m3k6w9"
build
typecheck
tests
browser
dependency audit
license
project integration
```

---

# Поэтому Evidence Contract

Для разных типов claims существуют разные требования.

Например:

```json id="w9g5l1"
{
  "claim_type": "functional",

  "required_evidence": [
    "automated_test"
  ],

  "optional_evidence": [
    "source_code",
    "browser_observation"
  ]
}
```

Другой:

```json id="6h4m2c"
{
  "claim_type": "visual",

  "required_evidence": [
    "reference",
    "rendered_output",
    "comparison"
  ]
}
```

Другой:

```json id="8x4p1z"
{
  "claim_type": "license",

  "required_evidence": [
    "license_source"
  ]
}
```

---

# И теперь provenance

W3C PROV предлагает очень полезную модель:

```text id="n0y5zq"
ENTITY
ACTIVITY
AGENT
```

где activity использует одни entities и порождает другие, а agents связаны с выполнением activity. Это практически совпадает с нашей задачей. citeturn0search0turn0search2

Для AI-LAB это можно адаптировать:

```text id="k8r6y3"
ENTITY
  screenshot
  source
  code
  component
  benchmark
  result

ACTIVITY
  research
  generation
  test
  comparison
  repair

AGENT
  model
  human
  tool
  runtime
```

---

# Например

AI создаёт компонент:

```text id="2b3j6f"
Dashboard.tsx
```

Его provenance:

```text id="4q0x2s"
Dashboard.tsx
  ← generated by
Implementation Activity #782

Activity #782
  ← used
Reference screenshot
  ← used
Design Skill v2.1
  ← used
shadcn Card
  ← used
Model X v5
```

И отдельно:

```text id="d8x9l4"
Visual Evaluation #91
  → evaluated Dashboard.tsx

Result:
  PASS
```

---

# Это позволяет ответить на очень неприятный вопрос:

> **Почему этот код выглядит именно так?**

Система может построить provenance chain:

```text id="y5m3r0"
User requirement
       ↓
Task
       ↓
Design analysis
       ↓
Design tokens
       ↓
Selected components
       ↓
Implementation
       ↓
Visual QA
       ↓
Final artifact
```

---

# Архитектор B

Но provenance сам по себе тоже можно подделать.

Agent может сказать:

```text
test_passed = true
```

и записать это в Event Log.

---

# Главный архитектор

Вот здесь принципиальный момент:

> **Log entry ≠ independent evidence.**

Если агент сам написал:

```text
TEST PASSED
```

это assertion.

Если реальный Playwright process вернул:

```text
exit code = 0
```

и сохранил artifact:

```text
report.html
screenshot.png
trace.zip
```

это гораздо более сильное evidence.

---

# Поэтому Evidence имеет Trust Level

Например:

```text id="z7j1w8"
L0 — MODEL_ASSERTION
L1 — LOGGED_OBSERVATION
L2 — TOOL_OUTPUT
L3 — REPRODUCIBLE_TEST
L4 — INDEPENDENT_EVALUATION
```

---

# Очень важно

Это не «оценка правдивости модели».

Это **сила основания**.

Например:

```text id="6y0x3j"
Model says:
  "responsive works"

→ L0
```

Но:

```text id="w8q7n2"
Playwright:
  390px PASS
  768px PASS
  1440px PASS

screenshots saved
```

→ L3.

---

# А если независимый evaluator повторил тест?

```text id="0w3x8s"
Implementation Agent
      ↓
claims PASS

Evaluator Agent
      ↓
independent test
      ↓
PASS
```

Это уже L4.

---

# Но здесь нужно быть осторожным

**Другой LLM ≠ автоматически независимый evaluator.**

Если обе модели:

- используют один и тот же prompt;
- получают один и тот же bias;
- оценивают друг друга по одинаковой субъективной шкале;

это не настоящая независимость.

---

# Поэтому независимость лучше строить через разные механизмы.

Например:

```text id="9k6w1f"
Implementation
     ↓
Playwright
     ↓
DOM / screenshot
     ↓
deterministic metrics
```

а уже потом:

```text id="j2r8v5"
Visual Evaluator
```

То есть:

> **Сначала объективные измерения, затем AI-интерпретация.**

---

# Это особенно важно для нашего UI-LAB.

Допустим AI говорит:

> «Интерфейс выглядит хорошо».

Бесполезно.

Лучше:

```text id="n6m3d8"
Reference:
  1440×900

Output:
  1440×900

Visual diff:
  4.8%

Responsive:
  5/6 breakpoints pass

Keyboard:
  17/18 scenarios pass

Console:
  0 errors

Build:
  PASS
```

Теперь evaluator может интерпретировать данные.

---

# Поэтому Evidence Pipeline

```text id="w6j9p2"
CLAIM
  ↓
EVIDENCE REQUIREMENTS
  ↓
COLLECT
  ↓
VALIDATE
  ↓
NORMALIZE
  ↓
LINK TO CLAIM
  ↓
ASSESS STATUS
  ↓
STORE PROVENANCE
```

---

# Теперь вопрос о confidence

## Нужен ли он вообще?

Архитектор A:

> Да. Иногда evidence неполное.

Архитектор B:

> Но число вводит в заблуждение.

---

# Решение

Confidence оставляем, но:

> **Confidence ≠ verification status.**

Например:

```text id="q5p3w8"
status:
  VERIFIED

confidence:
  HIGH
```

или:

```text id="b7n2m4"
status:
  SUPPORTED

confidence:
  MEDIUM
```

или:

```text id="h4s6q9"
status:
  CONTRADICTED

confidence:
  HIGH
```

Последний вариант очень важен.

Высокая confidence может означать:

> «Мы очень уверены, что claim противоречив/не подтверждается».

---

# И confidence должен быть объяснимым

Не:

```text id="0m6s8w"
confidence = 0.87
```

а:

```text id="7t2j4r"
confidence:
  HIGH

basis:
  official source
  current version
  reproducible test
  independent validation
```

---

# Теперь ещё одна проблема — устаревание

Evidence имеет timestamp.

Например:

```text id="x5s8c4"
React 18
```

была проверена:

```text
2026-01-12
```

А сейчас:

```text
React 20
```

Старая evidence не обязательно ложная.

Она может быть:

```text id="7v2q0j"
OUTDATED
```

---

# Поэтому Evidence имеет validity

```text id="n4q2r1"
VALID
OUTDATED
SUPERSEDED
REVOKED
UNKNOWN
```

---

# Например

```text id="2g8n6c"
Claim:
"Library X supports React 18"

Evidence:
verified 2026-01-01

Status:
VALID
```

Но:

```text
Claim:
"Library X supports React 20"

Status:
UNKNOWN
```

Потому что старое evidence нельзя автоматически перенести на новую версию.

---

# Это связывается с версиями

```text id="6u9p3m"
Source version
Skill version
Library version
Model version
Project version
```

Все значимые evidence должны иметь контекст версии.

---

# И вот теперь возникает очень мощная конструкция

## Evidence Graph

```text id="e0z6x8"
                 CLAIM
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
       SOURCE   TEST    OBSERVATION
          │        │        │
          ▼        ▼        ▼
       VERSION  RESULT   SCREENSHOT
          │        │        │
          └────────┼────────┘
                   ▼
               EVALUATION
                   │
                   ▼
                 STATUS
```

А provenance добавляет:

```text id="3x7n2p"
WHO
WHEN
WITH WHAT
UNDER WHICH CONDITIONS
GENERATED WHAT
```

---

# Это позволит AI-LAB отвечать не только:

> «Что ты знаешь?»

но:

> «Почему ты это знаешь?»

и:

> «Насколько актуально это знание?»

и:

> «На чём основано это решение?»

и:

> «Можно ли воспроизвести результат?»

---

# Архитектор B задаёт последний вопрос

> А нужно ли сохранять абсолютно весь provenance?

Например каждый:

```text
grep
ls
file read
token calculation
```

---

# Главный архитектор

Нет.

Иначе event log превратится в гигантский шум.

Нам нужны два уровня.

## Operational Trace

Подробный runtime trace:

```text
tool calls
stdout
stderr
timings
```

может храниться ограниченно / с retention.

## Decision Provenance

Долгоживущая история значимых решений:

```text
claim
source
activity
agent
artifact
test
result
decision
```

Она должна сохраняться существенно дольше.

---

# Это важное разделение

```text id="j8v0f5"
RUNTIME TRACE
    ↓
операционная диагностика

PROVENANCE
    ↓
история происхождения знаний и артефактов
```

Не нужно путать их.

---

# Решение главного архитектора

## 1. Evidence — отдельная сущность.

Не просто поле:

```json id="r3t9k7"
"evidence": "..."
```

а полноценный объект:

```json id="u5c1n8"
{
  "id": "evidence-001",
  "type": "browser_test",
  "source": "...",
  "artifact": "...",
  "timestamp": "...",
  "environment": "...",
  "version": "...",
  "result": "pass",
  "integrity": "...",
  "trust_level": "L3"
}
```

---

## 2. Claim становится центральным объектом verification.

```text id="2x9p6b"
CLAIM
 ↓
EVIDENCE*
 ↓
EVALUATION
 ↓
STATUS
```

---

## 3. Source ≠ Evidence.

Source:

> откуда информация получена.

Evidence:

> какое основание подтверждает конкретный claim.

---

## 4. Confidence ≠ Verification.

```text
confidence
    ↓
насколько сильна текущая оценка

status
    ↓
что система формально может утверждать
```

---

## 5. Evidence имеет provenance.

W3C PROV здесь полезен именно как **концептуальная модель**: entity, activity, agent, generation, usage и derivation позволяют описывать происхождение результата и его связь с действиями и участниками. citeturn0search0turn0search2

Мы не обязаны реализовывать весь PROV-DM буквально.

Берём его как основу модели:

```text id="k6v2q4"
ENTITY
ACTIVITY
AGENT
DERIVATION
USAGE
GENERATION
```

---

## 6. Evidence имеет силу основания

```text id="e9f3u1"
L0  Model assertion
L1  Logged observation
L2  Tool output
L3  Reproducible test
L4  Independent validation
```

---

## 7. Evidence имеет срок актуальности

```text id="b4s7x2"
VALID
OUTDATED
SUPERSEDED
REVOKED
UNKNOWN
```

---

## 8. Для разных claims существуют разные Evidence Contracts.

```text id="t5y8p3"
FUNCTIONAL
→ tests

VISUAL
→ reference + render + comparison

LICENSE
→ authoritative license source

PERFORMANCE
→ benchmark

SECURITY
→ scan + test + review
```

---

# Главная найденная брешь №10

Раньше мы формулировали:

> «Каждое знание должно иметь источник и evidence».

Это всё ещё слишком грубо.

Правильная архитектура:

> **AI-LAB должен хранить не просто источники, а цепочку происхождения конкретных утверждений и результатов: Claim → Evidence → Evaluation → Status, связанную через Provenance с источниками, действиями, версиями, агентами и артефактами.**

И тогда возникает фундаментальная граница:

```text id="8h5v3k"
MODEL SAYS IT
        ≠
SYSTEM OBSERVED IT
        ≠
SYSTEM TESTED IT
        ≠
INDEPENDENTLY VERIFIED IT
```

Это, пожалуй, одна из самых важных границ во всей архитектуре.

---

# Состояние AI-LAB после 10 разделов

```text id="w4q7n9"
AI-LAB
│
├── CONTROL PLANE
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   │
│   └── Skill System
│       ├── Discovery
│       ├── Analysis
│       ├── Validation
│       ├── Catalog
│       └── Lifecycle
│
├── KNOWLEDGE SYSTEM
│   ├── Entities
│   ├── Claims
│   ├── Relations
│   ├── Semantic Index
│   ├── Sources
│   ├── Evidence
│   ├── Provenance
│   ├── Experiments
│   ├── Benchmarks
│   ├── Failures
│   └── Versions
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
├── EVALUATION
│   ├── Functional
│   ├── Visual
│   ├── Responsive
│   ├── Accessibility
│   └── Performance
│
└── LEARNING
    ├── Candidates
    ├── Promotion
    ├── Regression
    └── Rollback
```

**Следующий раздел 11 — Registry.** Здесь наконец подходим непосредственно к первоначальной идее: **что такое наш собственный Registry, чем он отличается от shadcn Registry, каталога компонентов и Knowledge Base, и должен ли он вообще хранить исходный код или только описания, provenance и ссылки на источники.**

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 11 — **Registry**. Здесь нужно развести три вещи, которые легко случайно смешать: каталог, хранилище компонентов и Knowledge System. От этого зависит вся будущая работа с shadcn/21st/Canvas и собственными компонентами.

---

**Assistant:**

# Раздел 11. REGISTRY — что именно является нашим Registry?

Здесь есть важный поворот.

Мы уже установили:

```text
Knowledge System
```

хранит **знания**.

Но Registry должен отвечать на другой вопрос:

> **Что AI-LAB реально может взять, разрешить, установить, использовать или экспортировать в проект?**

И здесь нельзя просто назвать нашу базу компонентов «Registry».

Современный shadcn Registry уже гораздо шире компонентов: registry item может содержать UI, hooks, pages, config, rules, docs, templates, workflows и другие файлы; GitHub-репозиторий теперь также может выступать source registry через `registry.json`. citeturn0search0turn0search7

Значит, нам нужно определить **наш уровень абстракции поверх существующих registries**.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — ЗА собственный Registry

Нам нужен собственный Registry.

Потому что AI должен иметь возможность сказать:

```text
ui search button
```

и получить:

```text
@ai-lab/button
@shadcn/button
@acme/button
@21st/button
```

А затем:

```text
ui inspect @ai-lab/button
```

и:

```text
ui add @ai-lab/dashboard
```

Registry становится единым интерфейсом для AI.

---

## Архитектор B — ПРОТИВ

Подожди.

У shadcn уже есть Registry API, namespaces, GitHub registries, поиск и установка. Registry item может иметь обычные npm dependencies и `registryDependencies`, а зависимости могут быть привязаны к конкретным registry item. citeturn0search3turn0search4

Зачем строить ещё один Registry?

Можно просто:

```text
shadcn CLI
      ↓
registries
      ↓
components
```

И использовать существующий механизм.

---

# Главный архитектор

Оба частично правы.

**Нам не нужен конкурент shadcn Registry.**

Но нам нужен слой, которого у обычного Registry нет.

---

# Сначала разделим четыре понятия

```text
CATALOG
REGISTRY
KNOWLEDGE
ARTIFACT STORE
```

---

## 1. Catalog

Отвечает:

> Что существует?

Например:

```text
Button
Card
Dashboard
Date Picker
Sidebar
```

Каталог может содержать даже то, что мы никогда не можем установить.

---

## 2. Registry

Отвечает:

> Что можно получить как воспроизводимый software artifact?

Например:

```text
@shadcn/button
@acme/dashboard
@ai-lab/dashboard-v3
```

---

## 3. Knowledge System

Отвечает:

> Что мы знаем об этом artifact?

Например:

```text
Button
├── accessibility: verified
├── mobile: verified
├── dependency: radix
├── visual style: neutral
├── source: shadcn
├── license: ...
├── known failures: ...
└── benchmark results: ...
```

---

## 4. Artifact Store

Отвечает:

> Где физически находятся файлы?

Например:

```text
Git
Object Storage
Local filesystem
GitHub
npm
Generated artifact
```

---

# Главный архитектор

И получается:

```text
                         AI-LAB
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
          CATALOG        KNOWLEDGE      REGISTRY
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                     ARTIFACT SOURCES
```

Это уже намного чище.

---

# Но что тогда такое наш Registry?

## Архитектор A

Я бы определил его как:

> **Unified Artifact Registry**

То есть единый слой, который представляет различные источники в едином формате.

---

# Архитектор B

Слово `Unified` опасно.

Если мы начнём копировать всё в собственный формат, то придётся поддерживать:

```text
shadcn
GitHub
npm
21st
Canvas
custom registries
websites
private repos
```

и постоянно синхронизировать их.

---

# Главный архитектор

Вот здесь обнаруживается важная брешь.

## Наш Registry не должен быть обязательно владельцем исходного кода.

Он может быть:

> **Control / Resolution Layer над множеством источников.**

---

# То есть:

```text
                         AI-LAB REGISTRY
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
          shadcn            GitHub             Canvas
             │                 │                 │
             ▼                 ▼                 ▼
          Source            Source            Source
```

А AI-LAB Registry хранит:

```text
identity
source
version
license
metadata
relations
quality
evidence
compatibility
```

и умеет разрешить:

```text
"дай мне этот artifact"
```

до конкретного источника и версии.

---

# Это принципиально отличается от копирования.

Например:

```text
@shadcn/button
```

может ссылаться на:

```text
source:
shadcn/ui

ref:
commit SHA

item:
button
```

А не содержать у себя вторую копию всего репозитория.

---

# Но нужны ли собственные компоненты?

Да.

И здесь появляется второй класс:

```text
EXTERNAL
INTERNAL
GENERATED
RECONSTRUCTED
DERIVED
```

Например:

```text
@shadcn/button
```

— external.

```text
@ai-lab/button
```

— internal.

```text
@ai-lab/generated/dashboard-42
```

— generated.

```text
@ai-lab/reconstructed/acme-dashboard
```

— reconstructed.

---

# Теперь важный вопрос

## Может ли AI-LAB изменять внешний компонент?

Допустим мы нашли:

```text
@shadcn/button
```

и AI изменил:

```text
radius
padding
icon placement
```

Что это теперь?

---

# Архитектор A

Новая версия:

```text
@ai-lab/button
```

---

# Архитектор B

Нет.

Это может быть просто:

```text
derived artifact
```

с provenance:

```text
derived_from:
@shadcn/button@...
```

---

# Главный архитектор

Именно.

Нельзя разрушать происхождение.

```text
@shadcn/button
       │
       │ derived
       ▼
@ai-lab/button
```

И дальше:

```text
@ai-lab/button
       │
       ▼
@project/button
```

---

# Это приводит нас к Artifact Lineage

```text
SOURCE
  ↓
IMPORTED
  ↓
NORMALIZED
  ↓
MODIFIED
  ↓
TESTED
  ↓
CURATED
  ↓
PROJECT ARTIFACT
```

---

# И Registry должен знать lineage.

Например:

```json
{
  "id": "@ai-lab/button",
  "kind": "component",
  "origin": {
    "type": "external",
    "source": "@shadcn/button",
    "version": "..."
  },
  "derivation": {
    "type": "modified",
    "changes": [
      "design tokens",
      "icon behavior"
    ]
  }
}
```

---

# Теперь посмотрим на shadcn

Это хороший пример того, почему нам **не нужно изобретать весь механизм распространения заново**.

У shadcn item уже может описывать:

```text
files
dependencies
devDependencies
registryDependencies
cssVars
```

и item может быть `registry:ui`, `registry:block`, `registry:hook`, `registry:file`, `registry:page` и другими типами. citeturn0search3turn0search8

GitHub registry дополнительно позволяет использовать `registry.json` непосредственно в репозитории и даже работать с private GitHub repositories. citeturn0search0turn0search9

---

# Следовательно

Наш Registry должен **понимать shadcn Registry**, а не заменять его.

---

# Архитектор B

То есть примерно:

```text
AI-LAB Registry
        │
        ├── shadcn adapter
        ├── GitHub adapter
        ├── npm adapter
        ├── Canvas adapter
        ├── custom registry adapter
        └── visual-source adapter
```

---

# Главный архитектор

Да.

И это уже серьёзная архитектурная граница.

---

# REGISTRY ADAPTER

Каждый источник приводится к внутреннему контракту.

Например:

```text
External Registry
       ↓
Adapter
       ↓
Normalized Registry Item
```

---

# Нормализованный Item

```json
{
  "id": "...",
  "name": "...",
  "type": "component",

  "source": {
    "provider": "github",
    "repository": "...",
    "ref": "...",
    "path": "..."
  },

  "distribution": {
    "files": [],
    "dependencies": [],
    "registryDependencies": []
  },

  "metadata": {
    "framework": "react",
    "category": "navigation"
  },

  "provenance": {},
  "license": {},
  "quality": {},
  "relations": {}
}
```

---

# Но здесь возникает ещё более глубокая проблема.

## Registry Item ≠ Component

В shadcn Registry уже видно, что registry может распространять не только UI-компоненты, но и configuration, docs, workflows, rules, testing setup и т.д. citeturn0search0

Следовательно:

```text
Registry Item
```

должен быть **универсальной единицей поставки**.

---

# А `Component` — это Knowledge Entity.

То есть:

```text
Registry Item
       │
       ├── files
       ├── dependencies
       ├── metadata
       └── artifact
```

а:

```text
Component Entity
       │
       ├── anatomy
       ├── variants
       ├── states
       ├── design
       ├── accessibility
       ├── usage
       └── relations
```

Они связаны:

```text
Registry Item
       ↓ provides
Component
```

---

# Это очень важное разделение.

---

# Теперь вопрос: а если компонент найден на 21st.dev?

Допустим у нас есть красивый компонент.

Но нет доступного source registry.

Что делает AI-LAB?

---

## Архитектор A

Скачать страницу.

---

## Архитектор B

Нет.

Это потенциально незаконно и технически некорректно.

Мы уже решили в разделе 1–8:

> источник и право на использование должны быть частью provenance.

---

# Главный архитектор

Поэтому источник может иметь:

```text
source_mode
```

---

# SOURCE MODES

```text
REGISTRY
GITHUB
NPM
DOCUMENTATION
WEBSITE
VISUAL_REFERENCE
GENERATED
INTERNAL
```

---

# Например

### shadcn

```text
source_mode:
REGISTRY
```

Можно разрешить item → dependencies → files.

---

### GitHub MIT

```text
source_mode:
GITHUB
license:
MIT
```

Можно импортировать в зависимости от политики.

---

### 21st preview

```text
source_mode:
VISUAL_REFERENCE
```

AI может исследовать визуальное поведение в разрешённых пределах, но результат:

```text
RECONSTRUCTED
```

а не:

```text
ORIGINAL_SOURCE
```

---

# Это снова соединяет Registry с Evidence.

---

# Теперь вопрос версий

Это критично.

Если:

```text
@shadcn/button
```

сегодня одно,

а через месяц другое,

AI-LAB не должен молча заменить используемый artifact.

---

# Поэтому Registry Item должен быть immutable reference.

Например:

```text
@shadcn/button
       │
       ├── v1
       ├── v2
       └── v3
```

И предпочтительно:

```text
version
+
commit SHA
+
content hash
```

Shadcn сам поддерживает refs вроде branch/tag/commit SHA, причём для воспроизводимости документация рекомендует pinning, а полный commit SHA является наиболее воспроизводимым вариантом. citeturn0search0

---

# Следовательно:

```text
latest
```

не должен быть production dependency.

Можно использовать:

```text
latest → research
```

но production:

```text
pinned version
```

---

# Архитектор B

Иначе AI-LAB может сегодня собрать:

```text
Dashboard v1
```

а завтра повторить тот же prompt и получить другой Button.

---

# Главный архитектор

Именно.

---

# Поэтому вводим Resolution

```text
REQUEST
 ↓
REGISTRY RESOLVER
 ↓
VERSION RESOLUTION
 ↓
DEPENDENCY RESOLUTION
 ↓
LICENSE/POLICY CHECK
 ↓
ARTIFACT
```

---

# И Registry Resolver должен учитывать не только dependencies.

Например:

```text
framework
runtime
browser
platform
license
project rules
design system
security policy
```

---

# Пример

AI спрашивает:

> Дай мне таблицу для dashboard.

Registry Resolver получает:

```text
task:
dashboard

constraints:
React
Tailwind
shadcn-compatible
accessible
responsive
license = permissive
```

Находит:

```text
DataTable A
DataTable B
DataTable C
```

И передаёт их в Evaluator.

---

# Registry сам не должен решать:

> «A лучший».

Он должен:

> **разрешить доступные кандидаты и их свойства.**

Выбор делает Composition / Planner / Evaluator.

---

# Это ещё одна граница.

```text
REGISTRY
    ↓
WHAT EXISTS

COMPOSER
    ↓
WHAT TO USE

EVALUATOR
    ↓
WHICH RESULT MEETS REQUIREMENTS
```

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь разрушим ещё одну потенциальную ошибку.

## Нужно ли AI-LAB иметь один огромный Registry?

---

## Архитектор A

Да.

Удобно:

```text
@ai-lab/*
```

Всё в одном месте.

---

## Архитектор B

Нет.

У нас появятся:

```text
internal
external
experimental
deprecated
project
generated
reconstructed
```

Смешивать их нельзя.

---

# Главный архитектор

Не один физический Registry.

А **единое пространство разрешения**.

---

# Registry Domains

```text
REGISTRY SPACE
│
├── external/
├── internal/
├── curated/
├── experimental/
├── generated/
├── reconstructed/
└── project/
```

Но пользователь может видеть это как:

```text
ui search ...
```

---

# А внутри:

```text
source
trust
status
license
scope
```

определяют, откуда разрешено брать artifact.

---

# Например:

```text
ui search dashboard
```

может вернуть:

| Item | Source | Status | Trust |
|---|---|---|---|
| Dashboard A | shadcn | curated | high |
| Dashboard B | GitHub | reviewed | medium |
| Dashboard C | visual reconstruction | experimental | low |
| Dashboard D | internal | production | high |

Это **не рейтинг**.

Это характеристики происхождения и состояния.

---

# Теперь вопрос: должен ли Registry хранить preview?

Да.

Потому что AI должен иметь возможность:

```text
search
↓
inspect
↓
preview
↓
compare
↓
install
```

А не:

```text
search
↓
install blindly
```

---

# Registry Item Preview

Может содержать:

```text
screenshot
live preview
source preview
metadata
dependencies
variants
states
responsive captures
```

---

# Но Preview не является Source.

Это опять важно:

```text
PREVIEW
≠
SOURCE
```

---

# Например визуально:

```text
Button
```

имеет:

```text
default
hover
focus
disabled
loading
mobile
dark
```

AI-LAB может знать эти состояния даже если source отсутствует.

---

# Это связывает Registry с будущими разделами 14–16:

```text
Registry
   ↓
Component Intelligence
   ↓
Design Intelligence
   ↓
Design Genome
```

---

# И вот здесь появляется очень интересная идея.

## Registry должен хранить не только artifact.

Он должен иметь:

```text
Artifact + Manifest
```

---

# Artifact

Реальный код:

```text
button.tsx
```

---

# Manifest

Описание:

```json
{
  "identity": {},
  "source": {},
  "license": {},
  "dependencies": {},
  "capabilities": {},
  "compatibility": {},
  "design": {},
  "quality": {},
  "evidence": {},
  "provenance": {}
}
```

---

# Тогда AI не должен каждый раз читать весь исходник.

Сначала:

```text
manifest
```

и только если компонент подходит:

```text
source
```

Это опять progressive disclosure.

---

# Очень полезно для стоимости токенов.

---

# Теперь ещё одна атака

## А нужен ли вообще собственный `@ai-lab/*` namespace?

Архитектор B:

Не обязательно.

Можно использовать внутренние IDs:

```text
registry_item_id:
ri_01J...
```

а human-readable names:

```text
shadcn/button
```

---

# Главный архитектор

Да.

Лучше разделить:

```text
INTERNAL ID
```

и:

```text
DISPLAY ADDRESS
```

Например:

```text
id:
ri_8f91...

address:
@shadcn/button
```

Почему?

Потому что источник может изменить имя.

---

# Более того, один компонент может иметь несколько источников.

Например:

```text
Canonical Entity:
button
```

и:

```text
Implementations:
@shadcn/button
@radix/button
@acme/button
@ai-lab/button
```

Это уже не четыре разных «знания».

Это:

```text
COMPONENT CONCEPT
        │
        ├── implementation A
        ├── implementation B
        ├── implementation C
        └── implementation D
```

---

# Это фундаментально для будущего Component Intelligence.

---

# И теперь главный вопрос раздела:

## Что именно должен делать наш Registry?

---

# Решение главного архитектора

Наш Registry — это не:

```text
component folder
```

не:

```text
Git repository
```

не:

```text
vector database
```

и не:

```text
Knowledge Base
```

---

# Определение

> **AI-LAB Registry — это слой идентификации, разрешения, версионирования и получения software artifacts из множества источников с учётом provenance, license, compatibility, dependencies, trust и policy.**

Ключевое слово:

**resolution**.

---

# Его задача

```text
WHAT EXISTS?
      ↓
WHERE IS IT?
      ↓
WHICH VERSION?
      ↓
CAN WE USE IT?
      ↓
WHAT DOES IT DEPEND ON?
      ↓
HOW DO WE GET IT?
```

---

# Архитектура

```text
                         AI-LAB REGISTRY
                                │
                ┌───────────────┼───────────────┐
                ▼               ▼               ▼
             CATALOG         RESOLVER        ADAPTERS
                │               │               │
                │               │        ┌──────┼──────┐
                │               │        ▼      ▼      ▼
                │               │      shadcn GitHub npm
                │               │
                │               ▼
                │          POLICY CHECK
                │               │
                │               ▼
                │          VERSION LOCK
                │               │
                └───────────────┼───────────────┘
                                ▼
                           ARTIFACT
                                │
                                ▼
                         PROJECT / AGENT
```

---

# Registry ↔ Knowledge

Связь:

```text
REGISTRY ITEM
     │
     ├── describes → KNOWLEDGE ENTITY
     │
     ├── has → PROVENANCE
     │
     ├── has → EVIDENCE
     │
     └── resolves → ARTIFACT
```

---

# Registry ↔ shadcn

Не конкурируем:

```text
AI-LAB
   ↓
shadcn adapter
   ↓
shadcn registry
```

При этом shadcn остаётся реальным distribution mechanism.

Его programmatic API уже предназначен для получения, разрешения и установки registry items, поэтому AI-LAB может использовать эти механизмы вместо их полного дублирования. citeturn0search4

---

# Registry ↔ GitHub

```text
AI-LAB
   ↓
GitHub adapter
   ↓
repo
   ↓
registry.json
   ↓
item
```

Причём современные GitHub registries shadcn позволяют использовать commit SHA/tag для воспроизводимых references и поддерживают private repositories при наличии соответствующих credentials. citeturn0search0turn0search9

---

# Registry ↔ Visual Reconstruction

```text
Website
   ↓
Browser observation
   ↓
Design analysis
   ↓
Reconstruction
   ↓
Generated artifact
   ↓
AI-LAB Registry
```

Но:

```text
origin = reconstructed
```

а не:

```text
origin = original
```

---

# И наконец — главный принцип

Registry **не решает**, какой компонент хороший.

Он сообщает:

```text
существует
↓
вот источник
↓
вот версия
↓
вот зависимости
↓
вот лицензия
↓
вот evidence
↓
вот artifact
```

А уже:

```text
Planner
Composer
Evaluator
QA
```

решают, подходит ли он конкретной задаче.

---

# Главная найденная брешь №11

Изначальная идея:

> «Создадим свой Registry и сложим туда все найденные компоненты».

Слишком примитивна.

Правильная архитектура:

> **AI-LAB Registry — это не склад компонентов, а слой разрешения software artifacts поверх множества внешних и внутренних источников. Он связывает идентичность, версии, зависимости, provenance, license, compatibility, evidence и физический artifact, но не подменяет Knowledge System и не принимает за Evaluator решение о качестве.**

И теперь получилась очень чистая тройка:

```text
┌─────────────────────────────────────────────┐
│                  KNOWLEDGE                  │
│                                             │
│ Что мы знаем об artifact и почему           │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                   REGISTRY                  │
│                                             │
│ Где artifact находится и как его получить   │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  ARTIFACT                   │
│                                             │
│ Реальный код / файлы / пакет / результат    │
└─────────────────────────────────────────────┘
```

А над ними:

```text
EVALUATION
```

определяет:

> **подходит ли этот artifact конкретной задаче.**

---

## Состояние после 11 разделов

```text
AI-LAB
│
├── CONTROL
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   └── Skill System
│
├── KNOWLEDGE SYSTEM
│   ├── Entities
│   ├── Claims
│   ├── Evidence
│   ├── Provenance
│   ├── Relations
│   ├── Semantic Index
│   ├── Experiments
│   ├── Benchmarks
│   └── Failures
│
├── REGISTRY SYSTEM
│   ├── Catalog
│   ├── Resolver
│   ├── Versioning
│   ├── Policy
│   ├── Provenance
│   ├── License
│   ├── Compatibility
│   ├── Adapters
│   │   ├── shadcn
│   │   ├── GitHub
│   │   ├── npm
│   │   ├── Canvas
│   │   └── custom
│   └── Artifact Sources
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
└── EVALUATION
    ├── Functional
    ├── Visual
    ├── Responsive
    ├── Accessibility
    └── Performance
```

**Следующий раздел 12 — SOURCES: shadcn / 21st / Canvas / GitHub / сайты.**

Там мы уже сможем разобрать **как именно AI-LAB должен добывать знания и компоненты из каждого типа источника**, почему `registry-first` должен быть приоритетом, когда использовать GitHub, когда Browser/Playwright, что делать с 21st.dev и что делать, если источник вообще не предоставляет машинно-читаемого Registry.

---

**User:**

Далее

---

**Assistant:**

Переходим к разделу 12 — **Sources**. Теперь Registry нужно проверить на реальных типах источников: машинный registry, GitHub, npm, каталог компонентов и обычный сайт — у каждого совершенно разные возможности и ограничения.

---

**Assistant:**

# Раздел 12. SOURCES — откуда AI-LAB получает компоненты и знания?

Теперь у нас есть Registry Resolver. Но он не может быть универсальным «сканером всего Интернета».

Источники принципиально различаются по тому, **что они позволяют получить**.

Например:

- shadcn Registry — структурированные registry items;
- GitHub — исходный код, историю и license;
- npm — пакеты и metadata;
- 21st.dev — каталог, live previews, prompts, components/templates/themes;
- Canvas UI — shadcn-compatible registry + несколько framework implementations;
- обычный сайт — в лучшем случае HTML/CSS/JS/browser behavior;
- screenshot — вообще только визуальное evidence.

Поэтому вопрос раздела:

> **Как AI-LAB должен работать с разными источниками, не превращая ingestion в хаотичный web scraper?**

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Нужно собирать всё»

У нас должна быть максимальная полнота.

Например:

```text
21st.dev
shadcn
GitHub
npm
Canvas
Shoogle
registry.directory
Dribbble
Awwwards
страницы компаний
документация
YouTube
screenshots
```

AI-LAB должен постоянно искать новое.

Нашёл UI → забрал → проанализировал → добавил.

Чем больше материала, тем умнее система.

---

# Архитектор B — ПРОТИВ

Это прямой путь к мусорному индексу.

У нас будет:

```text
same Button × 17
same Card × 9
same Dashboard × 34
outdated Tailwind
broken React
deprecated dependencies
unknown licenses
premium code
screenshots without source
AI-generated garbage
```

И через полгода AI будет выбирать из тысячи почти одинаковых вариантов.

---

# Главный архитектор

Архитектор B прав в одном принципиальном моменте:

> **Источник не равен знанию и не равен кандидату на production.**

Но Архитектор A прав в другом:

> Нельзя ограничиваться только несколькими заранее известными registry.

Поэтому нам нужна **Source Strategy**.

---

# Первый принцип

## Не «crawl everything».

А:

```text
DISCOVER
 ↓
CLASSIFY
 ↓
ASSESS
 ↓
INGEST
 ↓
NORMALIZE
 ↓
VALIDATE
 ↓
INDEX
```

То есть сначала определить:

> **Что это вообще за источник?**

---

# Source Profile

Каждый источник получает manifest:

```json id="0k7q4d"
{
  "source_id": "21st",
  "type": "catalog",

  "capabilities": [
    "discovery",
    "preview",
    "source",
    "prompt",
    "metadata"
  ],

  "access": "web",

  "machine_readable": true,

  "license_policy": "per_item",

  "trust": "review_required"
}
```

---

# И теперь конкретные источники.

---

# 1. SHADCN REGISTRY

Это самый структурированный источник нашего класса.

Официальный shadcn Registry использует `registry.json`, а item описывает файлы, зависимости, registry dependencies и metadata. Registry может быть HTTP-сервисом или GitHub repository. citeturn0search2turn0search3

---

## Архитектор A

Значит:

```text
shadcn
 ↓
download everything
```

---

## Архитектор B

Нет.

Нам даже не обязательно скачивать source.

Сначала:

```text
registry.json
 ↓
catalog
 ↓
metadata
 ↓
candidate
```

А source только когда он нужен.

---

# Главный архитектор

Верно.

Для shadcn:

```text
REGISTRY-FIRST
```

Pipeline:

```text
Registry
 ↓
Parse manifest
 ↓
Enumerate items
 ↓
Normalize metadata
 ↓
Resolve dependencies
 ↓
License
 ↓
Quality
 ↓
Optional source ingestion
```

---

# Почему это хорошо?

Потому что registry уже сообщает системе:

```text
name
type
files
dependencies
registryDependencies
```

Нам не нужно угадывать структуру проекта.

---

# Более того

GitHub repositories теперь могут непосредственно выступать shadcn registries через root `registry.json`; CLI умеет list/search/view/validate и устанавливать конкретные items. citeturn0search0

То есть:

```text
GitHub repo
+
registry.json
```

для AI-LAB фактически становится:

```text
STRUCTURED SOURCE
```

а не просто Git repository.

---

# 2. GITHUB

Здесь ситуация другая.

GitHub может быть:

```text
registry
```

а может быть:

```text
ordinary repository
```

---

# Архитектор A

Любой GitHub repository можно индексировать.

---

# Архитектор B

Только metadata сначала.

Иначе AI-LAB начнёт клонировать миллионы репозиториев.

---

# Главный архитектор

Да.

GitHub ingestion должен иметь уровни.

```text
LEVEL 0
repository metadata

LEVEL 1
README / package metadata

LEVEL 2
architecture analysis

LEVEL 3
source analysis

LEVEL 4
build/test

LEVEL 5
full integration experiment
```

---

# Это означает:

Если мы нашли:

```text
awesome-dashboard
```

не нужно сразу:

```text
git clone
npm install
npm test
```

Сначала:

```text
stars
license
language
last update
package
README
registry.json?
```

и только затем повышать уровень исследования.

---

# Очень важное правило

> **Research depth должен быть адаптивным.**

Если проект выглядит нерелевантным:

```text
STOP
```

Если перспективным:

```text
DEEP RESEARCH
```

---

# 3. NPM

Теперь npm.

## Архитектор A

Npm — идеальный источник компонентов.

---

## Архитектор B

Не обязательно.

Npm package может быть:

```text
runtime library
CLI
React components
types
build tool
deprecated package
malware
```

И npm package ≠ UI component.

---

# Поэтому:

```text
npm
 ↓
package intelligence
```

А не:

```text
npm
 ↓
component registry
```

---

# Что извлекаем?

```text
name
version
license
dependencies
peerDependencies
repository
homepage
exports
framework
bundle
types
release history
```

И только затем решаем:

```text
может ли package стать Capability Provider?
```

Например:

```text
recharts
```

может стать:

```text
Capability:
charts
```

а не обязательно:

```text
Component:
Recharts
```

---

# Это уже связывает Registry с нашей предыдущей концепцией:

```text
CAPABILITY
    │
    ├── Recharts
    ├── Nivo
    ├── ECharts
    └── Visx
```

---

# 4. 21ST.DEV

Вот здесь интереснее.

Текущая 21st позиционирует себя как community catalog компонентов, templates и themes; компоненты ориентированы на React/shadcn-style workflow, имеют live preview и AI-ready prompts, а сама платформа индексирует множество авторских библиотек. citeturn1search1turn1search3

---

# Архитектор A

21st надо скачать целиком.

Там огромное количество хороших компонентов.

---

# Архитектор B

Нет.

21st — это прежде всего:

```text
DISCOVERY + VISUAL INSPIRATION + COMPONENT SOURCES
```

А не обязательно один canonical machine registry для всего каталога.

---

# Главный архитектор

Именно.

Для 21st нужен специальный Adapter.

```text
21ST ADAPTER
│
├── metadata
├── author
├── category
├── preview
├── code
├── prompt
├── dependencies
├── license
├── source
└── related items
```

---

# И особенно важно:

21st имеет **разные уровни артефактов**.

```text
component
template
theme
icon
effect
```

Например template — это не просто 20 компонентов.

Сама 21st сейчас описывает template как полноценную starting point-структуру с routing/layout/auth/theme/responsive decisions и рекомендует отдельно проверять актуальность, соответствие demo коду, степень stub-логики и license. citeturn1search2

---

# Следовательно

В нашем Knowledge System:

```text
Component
```

и:

```text
Template
```

не должны быть одним типом.

---

# И ещё важнее

21st уже демонстрирует очень близкую к нашей концепции связку:

```text
visual preview
+
source
+
prompt
+
dependencies
+
registry installation
```

То есть AI-LAB может использовать 21st не просто как «сайт с красивыми кнопками», а как **один из источников Design/Component Intelligence**.

---

# 5. CANVAS UI

Canvas UI ещё интереснее.

Сейчас Canvas UI предоставляет компоненты через shadcn-compatible registry и MCP; один и тот же компонент распространяется в нескольких вариантах — React, Solid, Preact, Vue, Svelte и vanilla TypeScript, а также имеет WebGL/WebGPU варианты. citeturn1search0turn1search4

---

# Архитектор A

Это обычная библиотека.

---

# Архитектор B

Нет.

Она демонстрирует важную архитектурную идею:

```text
ONE CONCEPT
     │
     ├── React
     ├── Solid
     ├── Preact
     ├── Vue
     ├── Svelte
     └── Vanilla TS
```

---

# Главный архитектор

И это очень важно для нашего будущего.

Мы ранее говорили:

> Component concept ≠ implementation.

Canvas — хороший практический пример.

У нас может существовать:

```text
Concept:
ParticleReveal
```

и:

```text
Implementations:
React
Vue
Svelte
...
```

---

# Следовательно Registry должен различать:

```text
COMPONENT CONCEPT
```

и:

```text
IMPLEMENTATION
```

Это решение раздела 11 получает дополнительное подтверждение.

---

# 6. SHOOGlE / REGISTRY DIRECTORY

Здесь возникает другая категория.

Shoogle сейчас индексирует сотни shadcn registries; отдельно registry.directory позиционируется как discovery layer, который индексирует registry ecosystem и позволяет находить items, не зная заранее, в каком registry они находятся. citeturn0search4turn0search5

---

# Архитектор A

Значит, можно просто использовать Shoogle как наш Registry.

---

# Архитектор B

Нет.

Это:

```text
DISCOVERY INDEX
```

а не canonical artifact source.

---

# Главный архитектор

Совершенно верно.

Очень важное различие:

```text
DISCOVERY SOURCE
       ≠
ARTIFACT SOURCE
```

---

# Например:

Shoogle говорит:

```text
Нашёл:
@something/button
```

AI-LAB затем должен перейти:

```text
Shoogle
 ↓
Origin Registry
 ↓
Manifest
 ↓
Artifact
```

---

# То есть:

```text
Shoogle
registry.directory
21st search
GitHub search
```

могут быть **Discovery Providers**.

---

# А:

```text
shadcn registry
GitHub repo
npm
AI-LAB registry
```

могут быть **Artifact Providers**.

---

# Это очень сильное разделение.

---

# Теперь обычный сайт.

Допустим:

```text
https://company.com
```

На нём есть красивый dashboard.

Нет registry.

Нет GitHub.

Нет npm.

Нет source.

Что делает AI-LAB?

---

# Архитектор A

Парсит HTML.

---

# Архитектор B

HTML недостаточно.

---

# Главный архитектор

Да.

Мы уже знаем правильный ответ из будущих разделов 21–23:

```text
BROWSER
 ↓
DOM
 ↓
CSS
 ↓
Computed styles
 ↓
Accessibility tree
 ↓
Network
 ↓
Interaction states
 ↓
Screenshots
 ↓
Responsive observations
```

---

# Но здесь появляется важная граница.

## Website Source Mode

```text
SOURCE_AVAILABLE
```

или:

```text
VISUAL_REFERENCE_ONLY
```

---

# В первом случае:

```text
source
 ↓
analysis
```

Во втором:

```text
browser observation
 ↓
design analysis
 ↓
reconstruction
```

---

# AI-LAB никогда не должен автоматически считать:

```text
observed website
=
available source code
```

---

# Это продолжает раздел 10:

```text
Observation
≠
Source
≠
Evidence
≠
Original Artifact
```

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь главный вопрос.

## Нужно ли AI-LAB самому постоянно искать новые источники?

---

# Архитектор A

Да.

Каждый день:

```text
search web
search GitHub
search registries
search 21st
search skills
```

И система будет развиваться.

---

# Архитектор B

Это слишком дорого.

И главное — discovery без стратегии порождает noise.

---

# Главный архитектор

Поэтому нужен:

# SOURCE DISCOVERY ENGINE

Он работает не как бесконечный crawler.

А через:

```text
SOURCE POLICIES
+
WATCHLIST
+
SCHEDULE
+
SIGNALS
```

---

# Например Watchlist

```text
Sources:
  shadcn
  21st
  Canvas
  GitHub
  npm
  registry.directory
  skills.sh
```

Для каждого:

```text
check_frequency
discovery_method
depth
budget
license_policy
trust
```

---

# Пример

### shadcn

```text
frequency:
daily

method:
registry index

depth:
metadata + changes
```

---

### 21st

```text
frequency:
weekly

method:
new components/templates

depth:
metadata + preview + selected source
```

---

### GitHub

```text
frequency:
continuous / scheduled

method:
search + watched repositories

depth:
adaptive
```

---

# А если система обнаружила новый Registry?

Например:

```text
new-registry.dev
```

Она не должна сразу доверять ему.

Pipeline:

```text id="2w6p8m"
DISCOVERED
   ↓
SOURCE PROFILE
   ↓
ACCESS TEST
   ↓
SCHEMA DETECTION
   ↓
LICENSE
   ↓
TRUST ASSESSMENT
   ↓
INDEX
   ↓
OPTIONAL DEEP RESEARCH
```

---

# И ещё одна очень важная вещь.

## Источники тоже имеют Knowledge.

Например:

```text
Source: Canvas UI
```

AI-LAB может знать:

```text
registry protocol:
shadcn

frameworks:
React/Solid/...

license:
...

update frequency:
...

known limitations:
...
```

То есть:

```text
SOURCE
```

становится Knowledge Entity.

---

# Source Graph

```text
21st
  │
  ├── publishes → components
  ├── indexes → registries
  └── references → GitHub

shadcn
  │
  ├── defines → registry protocol
  └── indexes → registries

GitHub
  │
  └── hosts → repositories

Repository
  │
  └── contains → registry.json

Registry
  │
  └── exposes → registry items
```

---

# Это значит, что AI-LAB должен понимать **роль источника**.

---

# Source Roles

```text
AUTHORITATIVE
DISTRIBUTION
DISCOVERY
REFERENCE
VISUAL
DOCUMENTATION
EXPERIMENTAL
AGGREGATOR
```

---

# Например

| Источник | Роль |
|---|---|
| shadcn Registry | Distribution / Protocol |
| GitHub | Source / Distribution |
| npm | Distribution |
| 21st | Discovery / Reference / Distribution |
| Shoogle | Discovery / Aggregation |
| registry.directory | Discovery |
| Canvas UI | Distribution / Reference |
| обычный сайт | Visual / Reference |
| screenshot | Visual Evidence |

---

# И это решает огромную проблему.

Если AI-LAB получил компонент через:

```text
Shoogle
```

он понимает:

> Shoogle — discovery layer.

И ищет canonical source.

---

# Если получил через:

```text
GitHub
```

проверяет:

```text
registry.json?
package.json?
license?
commit?
```

---

# Если через:

```text
21st
```

проверяет:

```text
source
license
prompt
registry
author
```

---

# Если через:

```text
website
```

не предполагает наличие source.

---

# Теперь вопрос:

## Должен ли AI-LAB хранить локальную копию всех источников?

---

# Архитектор A

Да.

Тогда мы независимы.

---

# Архитектор B

Это дорого и создаёт проблему freshness.

---

# Главный архитектор

Ответ — **tiered caching**.

---

# Source Cache

```text
METADATA CACHE
```

храним долго.

```text
SOURCE SNAPSHOT
```

храним для важных artifacts.

```text
FULL MIRROR
```

только если:

- разрешено;
- необходимо;
- есть смысл;
- нужен offline/reproducibility;
- есть соответствующая license.

---

# Например

Обычный внешний компонент:

```text
metadata → cached
source → fetched on demand
```

Production dependency:

```text
manifest
+
commit
+
source snapshot
+
hash
```

Критичный internal artifact:

```text
full mirror
```

---

# Это связывает Registry с воспроизводимостью.

---

# Ещё одна важная вещь:

## Source ingestion должен быть event-driven.

Например GitHub registry изменился:

```text
commit abc
 ↓
new commit def
```

Не нужно заново анализировать всё.

Pipeline:

```text
diff
 ↓
affected items
 ↓
affected dependencies
 ↓
revalidation
```

---

# Аналогично 21st:

```text
new component
 ↓
ingest one item
```

а не:

```text
reindex 12,000 items
```

---

# Теперь вопрос о AI-ready sources.

21st уже предоставляет AI-ready prompts и shadcn CLI workflow; Canvas UI предоставляет MCP-интеграцию поверх shadcn-compatible registry. citeturn1search1turn1search0

---

# Архитектор A

Тогда AI-LAB может просто отдавать всё через MCP.

---

# Архитектор B

MCP — это transport/tool interface.

Не source architecture.

---

# Главный архитектор

Именно.

```text
SOURCE
 ↓
NORMALIZATION
 ↓
REGISTRY / KNOWLEDGE
 ↓
MCP
 ↓
AI
```

MCP — последний слой.

Не фундамент.

---

# Очень важное решение

AI-LAB должен уметь работать **без MCP**.

MCP — это:

```text
INTERFACE
```

а не:

```text
KNOWLEDGE STORAGE
```

---

# Теперь мы можем сформулировать общий Source Pipeline

```text id="j7c3v9"
                  SOURCE DISCOVERY
                        │
                        ▼
                  SOURCE PROFILER
                        │
                        ▼
                  SOURCE CLASSIFIER
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
      REGISTRY       GITHUB         WEBSITE
          │             │             │
          ▼             ▼             ▼
       PARSER        ANALYZER      BROWSER
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                   NORMALIZER
                        │
                        ▼
                 LICENSE / POLICY
                        │
                        ▼
                    EVIDENCE
                        │
                        ▼
                    CATALOG
                        │
                        ▼
                  KNOWLEDGE SYSTEM
                        │
                        ▼
                     REGISTRY
                        │
                        ▼
                  ARTIFACT RESOLVER
```

---

# Но я хочу ещё сильнее изменить предыдущую архитектуру.

До этого мы думали:

```text
SOURCE
 ↓
REGISTRY
```

Теперь это недостаточно.

---

# Новая модель

```text id="m0c7s9"
SOURCE
   │
   ▼
SOURCE OBSERVATION
   │
   ├── METADATA
   ├── ARTIFACT
   ├── DOCUMENTATION
   ├── VISUAL
   └── RELATIONS
          │
          ▼
      KNOWLEDGE
          │
          ▼
      REGISTRY
```

Почему?

Потому что **один источник может одновременно дать несколько разных видов знания**.

---

# Например 21st component

Источник даёт:

```text
code
preview
prompt
dependencies
author
license
tags
examples
```

Из них мы получаем:

```text
Artifact
+
Component Entity
+
Design Observation
+
Dependency Graph
+
Evidence
+
Knowledge
```

И уже затем Registry может предоставить artifact.

---

# То есть Registry — не первая стадия.

Это **один из конечных интерфейсов системы**.

---

# Это очень важная архитектурная поправка.

---

# Решение главного архитектора

## Источники делим на 4 класса

### A. Structured Sources

```text
shadcn registry
GitHub registry
npm
API
```

Максимально машинно-читаемые.

---

### B. Discovery Sources

```text
Shoogle
registry.directory
21st search
GitHub search
```

Их задача — находить.

---

### C. Visual / Behavioral Sources

```text
website
live demo
21st preview
screenshots
video
```

Их задача — наблюдать.

---

### D. Knowledge Sources

```text
documentation
README
design system docs
skills
guidelines
```

Их задача — объяснять.

---

# Один источник может принадлежать нескольким классам.

Например 21st:

```text
DISCOVERY
+
VISUAL
+
ARTIFACT
+
KNOWLEDGE
```

---

# Source Adapter

Каждый адаптер должен реализовать единый контракт примерно такого уровня:

```text id="b9k3p7"
discover()
inspect()
fetch_metadata()
fetch_artifact()
fetch_documentation()
fetch_preview()
resolve_dependencies()
get_license()
get_version()
get_provenance()
```

Но **не каждый источник обязан реализовывать всё**.

Например website:

```text
discover ✓
inspect ✓
fetch_metadata ✓
fetch_artifact ?
documentation ✓
preview ✓
dependencies ?
license ?
```

---

# Это очень важно.

Не заставляем каждый источник притворяться registry.

---

# Главная найденная брешь №12

Изначально мы представляли:

> «Есть источники → забираем оттуда компоненты → складываем в Registry».

Это неправильно.

Правильная модель:

> **Источник — это объект со своими возможностями, доверием и способом доступа. AI-LAB сначала классифицирует и наблюдает источник, затем извлекает доступные артефакты/знания/evidence, нормализует их и только после этого связывает с Knowledge System и Registry.**

И особенно:

```text
DISCOVERY
    ≠
SOURCE
    ≠
ARTIFACT
    ≠
KNOWLEDGE
    ≠
REGISTRY
```

---

# Финальная архитектура Sources

```text id="8g4n1x"
                    SOURCE LAYER
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   STRUCTURED        DISCOVERY        OBSERVATION
        │                │                │
   shadcn             21st             website
   GitHub             Shoogle          preview
   npm                registry.dir     screenshot
   APIs               search           video
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                  SOURCE ADAPTERS
                         │
                         ▼
                    NORMALIZER
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
         ARTIFACT    KNOWLEDGE    EVIDENCE
             │           │           │
             └───────────┼───────────┘
                         ▼
                  KNOWLEDGE SYSTEM
                         │
                         ▼
                      REGISTRY
                         │
                         ▼
                    RESOLVER
                         │
                         ▼
                      PROJECT
```

---

## Что теперь принципиально умеет AI-LAB

Он не говорит:

> «Я знаю 21st.dev».

Он знает:

```text
21st
├── как обнаруживать
├── как получать metadata
├── как получать preview
├── как получать artifact
├── как получать prompt
├── какие есть ограничения
├── какие есть license conditions
└── насколько доверять каждому типу данных
```

То же самое для каждого следующего источника.

И это означает, что завтра можно добавить:

```text
Figma
Dribbble
Awwwards
Framer
Webflow
GitHub
npm
новый Registry
внутренний корпоративный источник
```

не переписывая всю систему.

Добавляется:

```text
Source Adapter
+
Source Policy
+
Capability Mapping
```

---

# Следующий раздел 13 — LICENSE & LEGAL

И здесь нам придётся сделать неприятную, но необходимую вещь: **разделить «AI может увидеть», «AI может проанализировать», «AI может сохранить», «AI может использовать для reconstruction» и «AI может положить в наш Registry и распространять».**

Особенно важно будет разобрать:

```text
MIT
Apache-2.0
BSD
GPL
CC
commercial
premium
unknown
```

и отдельно — **что делать с 21st, GitHub, сайтами и визуальной реконструкцией, когда исходный код нельзя просто перенести в нашу библиотеку.**

---

**User:**

Далее

---

**Assistant:**

Здесь я бы сразу зафиксировал жёсткое правило: **«можно посмотреть» ≠ «можно сохранить» ≠ «можно использовать в коде» ≠ «можно распространять»**. Иначе наш Registry неизбежно начнёт смешивать техническую доступность с правом использования.

---

**Assistant:**

# Раздел 13. LICENSE & LEGAL — что AI-LAB имеет право делать с найденным материалом?

Это не юридическая формальность.

Для нашей архитектуры лицензия должна стать **машиночитаемым ограничением**, которое участвует в:

```text
Discovery
   ↓
Ingestion
   ↓
Knowledge
   ↓
Registry
   ↓
Composition
   ↓
Generation
   ↓
Distribution
```

Иначе AI-LAB может технически сделать то, что архитектурно ему вообще нельзя делать.

Сразу оговорка: ниже — архитектура управления лицензиями и рисками, а не индивидуальное юридическое заключение по конкретному проекту.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Если открыто в Интернете, можно использовать»

Логика простая:

```text
public website
        ↓
AI can see it
        ↓
AI can learn from it
        ↓
AI can recreate it
```

Если GitHub public — можем скачать.

Если компонент виден на 21st — можем использовать.

Если сайт можно открыть — можем воспроизвести.

---

# Архитектор B — ПРОТИВ

Это совершенно разные действия.

Например:

```text
SEE
COPY
MODIFY
STORE
DISTRIBUTE
COMMERCIALIZE
```

не являются одним и тем же.

То, что браузер технически может получить файл, не означает автоматически, что AI-LAB получил разрешение на его дальнейшее распространение.

---

# Главный архитектор

Архитектор B прав.

Это одна из самых опасных логических ошибок всей системы:

> **technical accessibility ≠ legal permission**

---

# Давайте формализуем.

AI-LAB должен различать минимум 6 операций:

```text id="w6f2k1"
OBSERVE
STORE
DERIVE
USE
DISTRIBUTE
PUBLISH
```

---

# 1. OBSERVE

AI посмотрел источник:

```text
website
screenshot
documentation
live demo
```

Это ещё не означает, что мы сохранили материал как reusable artifact.

---

# 2. STORE

Мы сохранили:

```text
source code
screenshot
HTML
documentation
metadata
```

Уже появляется отдельный вопрос:

> Имеем ли мы право хранить это таким образом?

---

# 3. DERIVE

Мы создаём производный результат:

```text
original component
       ↓
analysis
       ↓
reimplementation
```

И здесь нужно отдельно учитывать источник, license и характер производного результата.

---

# 4. USE

Мы используем компонент в собственном проекте.

---

# 5. DISTRIBUTE

Мы передаём компонент:

```text
npm
GitHub
AI-LAB Registry
client project
```

---

# 6. PUBLISH

Мы делаем его общедоступным.

Например:

```text
@ai-lab/button
```

становится публичным registry item.

---

# Главный архитектор

И теперь становится очевидно:

```text
SOURCE
```

должен иметь не одно поле:

```text
license: MIT
```

а **policy matrix**.

---

# License Profile

Например:

```json id="x8x8i4"
{
  "license": {
    "spdx": "MIT",
    "source": "LICENSE",
    "verified": true
  },

  "permissions": {
    "observe": true,
    "store": true,
    "modify": true,
    "use": true,
    "distribute": true
  },

  "conditions": [
    "preserve copyright",
    "preserve license"
  ]
}
```

MIT действительно является permissive-лицензией с разрешениями на использование, изменение и распространение при сохранении copyright/license notice. citeturn0search1

---

# Но нельзя сделать такую таблицу вручную для всех лицензий

Потому что лицензий и вариантов условий много.

Поэтому AI-LAB должен хранить:

```text
license identifier
license text
source
version
detected conditions
exceptions
confidence
```

и применять **policy engine**.

---

# Теперь рассмотрим конкретные классы.

---

# MIT / BSD / ISC

Это относительно удобная категория.

MIT, BSD и ISC относятся к permissive-лицензиям, хотя конкретные условия различаются. Например BSD-3-Clause дополнительно ограничивает использование имени правообладателя/контрибьюторов для endorsement. ISC близка по условиям к MIT/BSD-2-Clause. citeturn0search2turn0search9

---

# Но AI-LAB всё равно должен сохранять:

```text
LICENSE
COPYRIGHT
NOTICE
ATTRIBUTION
```

если это требуется конкретной лицензией.

---

# Поэтому Registry Item:

```text id="k0a1yw"
license:
MIT

requirements:
preserve_license = true
preserve_copyright = true
```

---

# Следующая категория:

# Apache-2.0

Здесь уже нужно учитывать не только copyright/license notice, но и другие условия, включая patent-related provisions.

Поэтому AI-LAB не должен сводить всё к:

```text
commercial = true
```

Нужен нормализованный license profile.

---

# А теперь GPL

Здесь начинается действительно важный архитектурный вопрос.

GPL — copyleft license.

GNU прямо описывает требования к распространению modified versions и соответствующим условиям лицензирования/source availability; точный эффект зависит от того, что именно объединяется и как распространяется. citeturn0search36turn0search37

---

# Архитектор A

Значит:

```text
GPL = запрещено
```

---

# Архитектор B

Слишком грубо.

GPL не означает:

> «нельзя использовать».

Это означает:

> **использование и особенно распространение должны соответствовать условиям GPL.**

---

# Главный архитектор

Именно.

Нам нельзя кодировать юридические правила как:

```text
GPL → false
```

Нужно:

```text
GPL
 ↓
license obligations
 ↓
project compatibility
 ↓
distribution mode
 ↓
policy decision
```

---

# Например

AI-LAB может обнаружить:

```text
GPL component
```

И сказать:

```text
USE:
allowed under certain conditions

INTERNAL RESEARCH:
possibly allowed

DISTRIBUTE:
requires compatibility analysis

PRODUCTION:
policy review
```

А не автоматически:

```text
REJECT
```

---

# Особенно важно различать

```text
research
```

и:

```text
production
```

Мы уже заложили это как фундаментальный принцип.

---

# Experimental Registry

Можно иметь:

```text id="x9c4p1"
EXPERIMENTAL
```

куда попадает кандидат с несовместимой/неясной лицензией.

Но:

```text id="j8u1g2"
PRODUCTION REGISTRY
```

его не разрешает.

---

# Это гораздо лучше, чем удалять информацию.

---

# UNKNOWN LICENSE

Теперь самый интересный случай.

GitHub repository:

```text id="5y3l0b"
LICENSE отсутствует
```

Что делать?

---

# Архитектор A

Если код публичный — использовать.

---

# Архитектор B

Нет.

---

# Главный архитектор

Для **software reuse** неизвестная лицензия должна означать:

```text
license = UNKNOWN
```

а не:

```text
license = OPEN
```

Публичный репозиторий сам по себе не даёт нам оснований считать исходный код свободно лицензированным.

Даже Choose a License рекомендует искать `LICENSE`/`COPYING` и, если лицензии нет, обращаться к maintainers. citeturn0search13

---

# Поэтому:

```text
UNKNOWN
```

не означает:

```text
DELETE
```

Означает:

```text
INDEX METADATA
+
RECORD SOURCE
+
DO NOT PROMOTE FOR REUSE
```

---

# Это очень важное решение.

---

# AI-LAB должен уметь сказать:

> «Я знаю об этом компоненте, но не знаю, что его можно легально включить в production artifact».

---

# Это и есть **explicit uncertainty**, которую мы заложили в разделе 3.

---

# Теперь 21st.dev

Допустим:

```text id="e8q0fd"
21st component
```

AI видит красивый интерфейс.

Что можно сделать?

---

# Архитектор A

Добавить его в Registry.

---

# Архитектор B

Сначала проверить конкретный source/license.

---

# Главный архитектор

Да.

И особенно важно:

```text
platform license
≠
component license
≠
underlying source license
```

Нельзя считать:

> «На платформе есть компонент → весь код можно перепаковать».

---

# Поэтому 21st Adapter должен возвращать:

```text id="4m2k8s"
author
source
license
license_source
artifact_origin
platform_terms
```

И только после этого:

```text id="m5e0x9"
reuse_policy
```

---

# Если license неизвестна

AI-LAB может:

```text id="z5m4h1"
store metadata
store source URL
store visual observations
```

но:

```text id="c8h6a3"
NOT:
publish original code
```

---

# И это приводит к очень важному разделению:

# KNOWLEDGE INGESTION ≠ CODE INGESTION

AI-LAB может знать:

> «На этом сайте есть sidebar с такими-то визуальными характеристиками».

Это Knowledge.

Но это не значит:

> «Сохрани исходный TSX sidebar».

---

# Поэтому Source Policy может сказать:

```text id="5j6r0d"
ALLOW:
metadata ✓
visual observation ✓
documentation summary ✓

DENY:
source storage ✗
artifact redistribution ✗
```

---

# А теперь визуальная реконструкция.

Это особенно важно для твоей первоначальной идеи:

> «Дать AI сайт / screenshots / video → AI воспроизводит интерфейс».

---

# Архитектор A

Если AI посмотрел сайт и написал похожий код, значит это новый компонент.

---

# Архитектор B

Не обязательно.

Сходство само по себе ничего не говорит о юридическом статусе.

---

# Главный архитектор

Именно.

Поэтому AI-LAB должен хранить:

```text id="w4n1v0"
origin:
RECONSTRUCTED
```

и provenance:

```text id="8s6k2m"
reference:
website X

observation:
screenshots
DOM
interaction

implementation:
AI-LAB generated
```

---

# Но нельзя автоматически заявлять:

```text id="7p0r6x"
"original component recreated"
```

Лучше:

> `Independent implementation based on observed behavior/design characteristics`

если именно это соответствует процессу и разрешённому использованию.

---

# И ещё одна тонкость.

## «Clean-room reconstruction»

Само слово clean-room нельзя превращать в магическую юридическую кнопку.

Если AI посмотрел исходный код, а затем написал новый код, это не автоматически становится юридически «clean-room».

---

# Поэтому архитектура должна фиксировать:

```text id="0j1b5v"
what was observed
what source was accessed
what source code was accessed
what instructions were given
what artifact was generated
```

---

# Это снова Provenance.

---

# Если мы хотим более строгий reconstruction workflow:

```text id="n2d7k8"
REFERENCE
 ↓
OBSERVATION AGENT
 ↓
DESIGN SPEC
 ↓
IMPLEMENTATION AGENT
```

Implementation Agent получает:

```text id="x5e3p0"
design observations
```

а не обязательно:

```text id="2j8n6h"
original source code
```

Это полезная техническая граница, но не юридическая гарантия.

---

# Теперь возникает проблема зависимостей.

Допустим:

```text id="q0j8e1"
Our Component
   ↓
Library A
   ↓
Library B
```

У нашего компонента MIT.

Но dependency:

```text id="7x6m1r"
GPL
```

Нельзя смотреть только на license нашего файла.

Нужен:

# Dependency License Graph

```text id="s9f3z0"
Artifact
 │
 ├── dependency A
 │      ├── license
 │      └── obligations
 │
 ├── dependency B
 │      └── license
 │
 └── dependency C
```

---

# Registry Resolver должен проверять этот graph.

---

# Например

```text id="m4h8p6"
ui add dashboard
```

Resolver:

```text
dashboard
 ↓
table
 ↓
chart
 ↓
chart library
```

И перед installation:

```text
license compatibility
dependency compatibility
policy
```

---

# Это уже не просто Dependency Resolver.

Это:

> **Policy-aware Dependency Resolver.**

---

# Теперь ещё одна опасность — transitive dependencies.

Если:

```text id="2z7r3n"
A → B → C → D
```

и D имеет особые условия, AI-LAB должен увидеть D.

Поэтому license scan должен быть **транзитивным**.

---

# Архитектор B

И это ещё один аргумент против:

```text
"license": "MIT"
```

в одном Registry Item.

Нужно:

```text id="j4x8m0"
effective_dependency_license_context
```

---

# Главный архитектор

Да.

Но мы не должны пытаться самостоятельно реализовать полноценный юридический solver на v1.

В v1:

```text id="p4m2h8"
dependency graph
+
license detection
+
policy rules
+
risk flags
```

Если обнаружена сложная комбинация:

```text id="0h9k1q"
LEGAL_REVIEW_REQUIRED
```

---

# И это лучше автоматического ошибочного решения.

---

# Теперь Creative Commons

Очень важная ловушка.

CC-лицензии могут встречаться на:

```text id="v6x1n2"
images
icons
documentation
design assets
```

Но Creative Commons прямо не рекомендует использовать свои основные CC-лицензии для software; для программного обеспечения рекомендуются специализированные software licenses. citeturn0search0turn0search10

Поэтому:

```text
CC BY
```

не должно автоматически интерпретироваться нашим license engine как:

```text
software reuse license
```

Нужно знать **тип ресурса**.

---

# Asset License

Отдельно:

```text id="2s4m6k"
CODE
FONT
IMAGE
ICON
VIDEO
DOCUMENTATION
DATA
MODEL
```

---

# Например

Component:

```text id="d0u8t5"
MIT
```

но icon:

```text id="7m4z2k"
CC BY-NC
```

Весь component нельзя считать просто:

```text
MIT
```

---

# License Graph

```text id="c8y1h3"
Component
 │
 ├── code → MIT
 ├── icon → CC BY
 ├── font → OFL
 └── image → proprietary
```

---

# Это крайне важно для UI system.

Потому что визуальные компоненты часто включают:

```text
icons
fonts
images
logos
illustrations
```

---

# Теперь собственный AI-LAB Registry.

## Какую лицензию выбрать для своих собственных компонентов?

Это уже отдельный вопрос.

И здесь не нужно автоматически принимать решение прямо сейчас.

Архитектура должна поддерживать:

```text id="5m0z8w"
internal
private
open_source
commercial
project_only
```

---

# Важно различать:

```text id="k6z9p3"
AI-LAB PRIVATE REGISTRY
```

и:

```text id="n4x0c2"
PUBLIC REGISTRY
```

То, что мы имеем право хранить внутри личной инфраструктуры, не означает, что имеем право публиковать наружу.

---

# Поэтому Registry Policy:

```text id="5q7a0n"
PRIVATE_USE
PROJECT_USE
INTERNAL_DISTRIBUTION
PUBLIC_DISTRIBUTION
```

---

# И теперь очень важная архитектурная идея:

# License Decision ≠ License Detection

AI может определить:

```text id="6x8z1k"
license = GPL-3.0
```

Но решение:

```text id="4y7n2m"
can_publish = false
```

может требовать policy + context.

---

# Поэтому:

```text id="j0m4z9"
LICENSE DETECTOR
        ↓
LICENSE PROFILE
        ↓
POLICY ENGINE
        ↓
DECISION
```

---

# Policy Engine получает:

```text id="0m7p4r"
license
artifact
dependencies
project
distribution target
modification
source availability
risk
```

---

# И возвращает:

```text id="e3x9n2"
ALLOW
ALLOW_WITH_CONDITIONS
BLOCK
REVIEW_REQUIRED
UNKNOWN
```

---

# Вот это уже архитектурно правильно.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь я хочу специально разрушить одну нашу предыдущую идею.

Мы говорили:

> «Unknown license → не использовать».

Это слишком грубо.

---

# Архитектор A

Но безопасно.

---

# Архитектор B

Нет.

Мы теряем огромное количество полезного материала.

Например:

```text
awesome UI article
```

может быть полезен как:

```text
REFERENCE
```

даже если код нельзя использовать.

---

# Главный архитектор

Согласен.

Поэтому вводим:

# Usage Modes

```text id="8r6w2p"
REFERENCE_ONLY
ANALYSIS_ONLY
INTERNAL_EXPERIMENT
CODE_REUSE
DERIVATION
DISTRIBUTION
```

---

# Например UNKNOWN

Можно:

```text
REFERENCE_ONLY ✓
ANALYSIS_ONLY ✓
CODE_REUSE ✗
DISTRIBUTION ✗
```

до выяснения прав.

---

# Это очень мощно.

---

# Тогда AI-LAB не теряет знания.

Он просто ограничивает **что можно делать с ними**.

---

# Пример

21st component с неясным source license:

```text id="v5q2c9"
Knowledge:
✓

Visual reference:
✓

Design analysis:
✓

Original code:
restricted

Registry distribution:
blocked

Independent experiment:
review
```

---

# И AI в будущем может сказать:

> «Этот источник нельзя использовать как code dependency, но его можно использовать как visual reference согласно текущей policy.»

Это гораздо полезнее простого:

> «Запрещено».

---

# Ещё одна важная вещь:

## License evidence itself must have provenance.

Не:

```text
license = MIT
```

а:

```text
license:
  value: MIT
  source:
    file: LICENSE
    commit: abc123
  detected_at: ...
  confidence: high
```

---

# Если репозиторий изменился:

```text id="l7x2m8"
new commit
```

license нужно повторно проверить.

---

# License Lifecycle

```text id="y8h3p1"
DISCOVERED
 ↓
DETECTED
 ↓
VERIFIED
 ↓
POLICY EVALUATED
 ↓
ALLOWED / RESTRICTED
```

При изменении:

```text id="4q0s8m"
RECHECK
```

---

# И ещё одна очень неприятная проблема:

## License file может быть противоречивым.

Например:

```text
package.json:
MIT

LICENSE:
Apache-2.0

source header:
GPL
```

Что делать?

---

# Нельзя выбирать первое найденное.

Создаём:

```text id="h7v3n1"
LICENSE CONFLICT
```

и:

```text id="d2r8x0"
REVIEW_REQUIRED
```

---

# Это опять Evidence System.

```text id="f0q2a5"
LICENSE CLAIM
     │
     ├── package.json
     ├── LICENSE
     └── source headers
              ↓
          evaluation
              ↓
          status
```

---

# То есть License System фактически является специализированным Knowledge/Evidence subsystem.

---

# Решение главного архитектора

## 1. Лицензия — не просто metadata.

Это **policy-relevant knowledge**.

---

## 2. Accessibility не означает permission.

```text
public
≠
open source
```

---

## 3. License detection и policy decision разделяем.

```text
Detector
 ↓
Profile
 ↓
Policy Engine
 ↓
Decision
```

---

## 4. Unknown не означает Delete.

```text
UNKNOWN
→ reference allowed according to policy
→ reuse restricted
→ distribution restricted
```

---

## 5. Для каждого artifact нужен Usage Mode.

```text
REFERENCE_ONLY
ANALYSIS_ONLY
EXPERIMENTAL
CODE_REUSE
DERIVATION
DISTRIBUTION
```

---

## 6. Лицензия распространяется на graph, а не только один файл.

```text
artifact
 ↓
dependencies
 ↓
transitive dependencies
 ↓
assets
```

---

## 7. License conflict → REVIEW_REQUIRED.

Не угадываем.

---

## 8. Reconstruction не стирает provenance.

Если AI создал новую реализацию после наблюдения:

```text
origin = reconstructed
```

и сохраняется:

```text
reference source
observation
process
generated artifact
```

---

# Главная найденная брешь №13

Мы раньше говорили:

> «У каждого Registry Item должна быть license».

Этого недостаточно.

Правильная модель:

> **AI-LAB должен управлять правами использования как policy-aware системой: отдельно определять license для каждого artifact/asset/dependency, хранить evidence происхождения лицензии, различать observation/reuse/derivation/distribution и принимать решение с учётом контекста проекта.**

То есть:

```text
                  SOURCE
                     │
                     ▼
                LICENSE
                     │
                     ▼
              LICENSE PROFILE
                     │
                     ▼
              DEPENDENCY GRAPH
                     │
                     ▼
               POLICY ENGINE
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
    ALLOW      CONDITIONAL      REVIEW
                     │
                     ▼
                  BLOCK
```

---

# И теперь наша архитектура становится ещё интереснее

```text id="0a3v6x"
                    SOURCE
                       │
              ┌────────┴────────┐
              ▼                 ▼
          KNOWLEDGE          ARTIFACT
              │                 │
              ▼                 ▼
           EVIDENCE          LICENSE
              │                 │
              └────────┬────────┘
                       ▼
                 POLICY ENGINE
                       │
                       ▼
                   REGISTRY
                       │
                       ▼
                   RESOLVER
                       │
                       ▼
                    PROJECT
```

---

# Состояние после 13 разделов

```text id="1u2h9c"
AI-LAB
│
├── CONTROL PLANE
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   └── Skill System
│
├── SOURCE SYSTEM
│   ├── Source Discovery
│   ├── Source Profiles
│   ├── Source Adapters
│   ├── Structured Sources
│   ├── Discovery Sources
│   ├── Visual Sources
│   └── Knowledge Sources
│
├── KNOWLEDGE SYSTEM
│   ├── Entities
│   ├── Claims
│   ├── Evidence
│   ├── Provenance
│   ├── Relations
│   ├── Semantic Index
│   ├── Experiments
│   ├── Benchmarks
│   └── Failures
│
├── REGISTRY SYSTEM
│   ├── Catalog
│   ├── Resolver
│   ├── Adapters
│   ├── Versioning
│   ├── Artifact Lineage
│   └── Artifact Sources
│
├── LICENSE / POLICY
│   ├── License Detector
│   ├── License Profiles
│   ├── Dependency License Graph
│   ├── Usage Modes
│   └── Policy Engine
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
└── EVALUATION
    ├── Functional
    ├── Visual
    ├── Responsive
    ├── Accessibility
    └── Performance
```

### Следующий раздел 14 — COMPONENT INTELLIGENCE

И здесь начинается уже **ядро твоей первоначальной идеи**.

До сих пор мы строили инфраструктуру вокруг компонентов. Теперь нужно ответить:

> **Как AI-LAB понимает, что перед ним именно Button, Card, Sidebar, DataTable, Hero, Dashboard или Template — и понимает не только название, но анатомию, варианты, состояния, зависимости, поведение, responsive-логику и роль компонента в интерфейсе?**

Именно здесь появится **Component Intelligence**, а затем в разделе 15 мы разберём **Design Intelligence** — как система понимает типографику, spacing, grid, цвета, motion и визуальную систему.

---

**User:**

Дальше

---

**Assistant:**

Переходим к разделу 14. Здесь важно не свести Component Intelligence к классификатору «это Button»: системе нужно восстановить **структуру, состояния, зависимости, поведение и контекст применения**.

---

**Assistant:**

# Раздел 14. COMPONENT INTELLIGENCE — как AI-LAB понимает компонент

До этого мы построили систему, которая умеет **находить и получать** компоненты.

Теперь возникает гораздо более сложная задача:

> Найти `Button` — легко. Понять, **что делает именно этот Button, из каких частей состоит, какие у него состояния, какие зависимости, какие ограничения и где его правильно применять**, — уже Component Intelligence.

Именно это определит, будет ли AI-LAB действительно собирать хорошие интерфейсы или просто таскать JSX из одной библиотеки в другую.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Компонент = код + metadata»

Нам достаточно:

```text
Component
├── name
├── source
├── code
├── dependencies
├── props
├── variants
└── preview
```

Например:

```json
{
  "name": "Button",
  "variants": [
    "default",
    "secondary",
    "outline",
    "ghost"
  ]
}
```

AI увидит `Button` и сможет его использовать.

---

# Архитектор B — ПРОТИВ

Этого недостаточно.

Возьмём `Button`.

У него могут быть:

```text
default
hover
focus
active
disabled
loading
icon-left
icon-right
destructive
```

Но это только визуальные состояния.

Есть ещё:

```text
keyboard behavior
focus management
accessible name
ARIA semantics
event behavior
form behavior
responsive behavior
composition
```

И ещё контекст:

```text
toolbar
form
table
dialog
navigation
card
mobile navigation
```

---

# Главный архитектор

Архитектор B прав.

Но он тоже пока мыслит компонентом слишком плоско.

Нам нужно разделить:

```text
COMPONENT
VARIANT
STATE
BEHAVIOR
ANATOMY
CONTRACT
CONTEXT
IMPLEMENTATION
```

---

# Что такое Component Intelligence?

Предлагаю предварительное определение:

> **Component Intelligence — структурированное представление компонента, позволяющее AI не только найти и установить его, но определить его назначение, анатомию, варианты, состояния, поведение, зависимости, ограничения, accessibility-контракт и подходящий контекст композиции.**

---

# И вот здесь возникает первая архитектурная брешь.

Мы раньше говорили:

```text
Component
```

Но на самом деле это несколько разных сущностей.

---

# 1. COMPONENT CONCEPT

Например:

```text
Button
```

Это **концепция**.

---

# 2. COMPONENT IMPLEMENTATION

Например:

```text
shadcn Button
```

Это конкретная реализация.

---

# 3. COMPONENT INSTANCE

Например:

```tsx
<Button variant="destructive">
    Delete
</Button>
```

Это конкретное использование.

---

# 4. COMPONENT STATE

Например:

```text
hover
disabled
loading
```

---

# 5. COMPONENT PATTERN

Например:

```text
Button + Icon + Tooltip
```

---

# Поэтому:

```text
Button
```

не должен быть просто записью:

```json
{
  "name": "Button"
}
```

---

# Более правильная модель

```text
Component Concept
       │
       ├── Implementations
       │       ├── shadcn
       │       ├── Radix-based
       │       ├── custom
       │       └── reconstructed
       │
       ├── Anatomy
       │
       ├── Variants
       │
       ├── States
       │
       ├── Behavior
       │
       ├── Accessibility
       │
       ├── Dependencies
       │
       └── Usage Patterns
```

---

# И это уже намного интереснее.

---

# Рассмотрим Card

AI-LAB должен знать не только:

```text
Card
```

а:

```text
Card
├── Header
│   ├── Title
│   └── Description
├── Content
├── Footer
└── optional media
```

То есть:

# Component Anatomy

---

# Anatomy

Например:

```json
{
  "component": "Card",
  "anatomy": {
    "root": "container",
    "parts": [
      "header",
      "title",
      "description",
      "content",
      "footer"
    ]
  }
}
```

---

# Но здесь Архитектор A атакует.

## Архитектор A

Зачем хранить это отдельно?

Мы можем просто дать AI исходный TSX.

Он сам прочитает:

```tsx
<Card>
  <CardHeader>
    ...
  </CardHeader>
</Card>
```

---

# Архитектор B

Это работает пока:

- модель понимает код;
- source доступен;
- код чистый;
- framework известен;
- component не minified;
- implementation актуальна.

Но если у нас:

```text
website
```

или:

```text
screenshot
```

source вообще может отсутствовать.

---

# Главный архитектор

Именно.

Component Intelligence должна быть **implementation-independent**.

Она должна уметь описать компонент даже если исходный код отсутствует.

---

# Например

Мы увидели на сайте:

```text
Dashboard Card
```

Через browser observation система может установить:

```text
root
header
icon
title
metric
trend
footer
```

И получить:

```text
ANATOMY
```

без исходного TSX.

---

# Это связывает Component Intelligence с Visual Reverse Engineering.

---

# Теперь Variants.

Variant — это не State.

Очень важно.

---

# Variant

```text
Button
├── default
├── secondary
├── destructive
├── outline
└── ghost
```

Это выбор дизайна/семантики компонента.

---

# State

```text
Button
├── default
├── hover
├── focus
├── active
├── disabled
└── loading
```

Это состояние компонента во время использования.

---

# Архитектор A

Можно всё назвать `variant`.

---

# Архитектор B

Нет.

Тогда AI не сможет правильно рассуждать.

Например:

```text
variant="destructive"
```

может сохраняться при:

```text
state="hover"
```

То есть:

```text
destructive × hover
```

---

# Главный архитектор

Именно.

Нам нужна модель:

```text
COMPONENT
   │
   ├── VARIANT SPACE
   │
   └── STATE SPACE
```

---

# Причём они могут образовывать комбинации.

Например:

```text
Button
```

имеет:

```text
variant:
  default
  destructive
  outline

size:
  sm
  md
  lg

state:
  default
  hover
  focus
  disabled
  loading
```

Теоретически:

```text
3 × 3 × 5 = 45
```

состояний/комбинаций.

Но AI не должен обязательно генерировать 45 screenshots.

---

# Вот здесь появляется:

# State Matrix

```text
Component
│
├── variants
├── sizes
├── states
└── interactions
```

И система определяет **минимальный набор необходимых проверок**.

---

# Это уже похоже на Storybook.

Storybook прямо использует stories как представления конкретных вариаций компонентов и как основу для документации/тестирования. citeturn0search15turn0search7

А interaction tests позволяют задавать исходное состояние, выполнять действия пользователя и проверять изменение UI/state. citeturn0search3

---

# Но AI-LAB не должен становиться «ещё одним Storybook».

Storybook:

```text
component development
+
documentation
+
testing
```

AI-LAB:

```text
discovery
+
understanding
+
comparison
+
composition
+
generation
+
validation
+
learning
```

Storybook может стать **одним из инструментов Component Intelligence**, а не самим Component Intelligence.

---

# Теперь Behavior.

Вот здесь большинство component libraries становятся слишком поверхностными.

Возьмём:

```text
Dialog
```

AI должен знать:

```text
opens
closes
traps focus
returns focus
supports Escape
has accessible name
has overlay
```

И это уже не просто CSS.

---

# WAI-ARIA как раз описывает роли, состояния, свойства и ожидаемое взаимодействие для таких интерактивных паттернов. citeturn0search0turn0search1

Причём W3C отдельно подчёркивает: ARIA сама по себе не добавляет нужную keyboard behavior — автор компонента должен реализовать её. citeturn0search6turn0search13

---

# Следовательно Component Contract должен включать:

```text
Semantics
Behavior
Keyboard
Focus
State
Accessibility
```

---

# Например Dialog Contract

```json
{
  "component": "Dialog",

  "behavior": {
    "open": "controlled/uncontrolled",
    "close": [
      "close-button",
      "escape",
      "overlay"
    ]
  },

  "focus": {
    "on_open": "move_into_dialog",
    "on_close": "restore_trigger"
  },

  "keyboard": {
    "escape": "close"
  },

  "accessibility": {
    "role": "dialog",
    "name_required": true
  }
}
```

---

# Теперь AI может не просто найти Dialog.

Он может проверить:

> «Эта реализация действительно соответствует Dialog pattern?»

Это принципиальная разница.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

Теперь главный вопрос.

## Откуда Component Intelligence получает эту информацию?

---

# Архитектор A

Из исходного кода.

---

# Архитектор B

Не всегда.

---

# Главный архитектор

Правильный ответ:

## Из нескольких evidence channels.

```text
SOURCE CODE
DOCUMENTATION
REGISTRY METADATA
BROWSER DOM
COMPUTED CSS
ACCESSIBILITY TREE
INTERACTION TRACE
SCREENSHOTS
TESTS
EXAMPLES
AI ANALYSIS
```

---

# И эти источники имеют разную надёжность.

Например:

```text
package.json
```

надёжно сообщает dependency.

Но не обязательно:

```text
visual intent
```

---

# Screenshot

Хорошо показывает:

```text
visual appearance
```

Но почти ничего не говорит о:

```text
keyboard behavior
```

---

# DOM

Показывает структуру.

Но не обязательно:

```text
design intent
```

---

# Interaction trace

Показывает:

```text
click → menu opens
```

Но не обязательно:

```text
all possible states
```

---

# Следовательно:

# Component Knowledge = Multi-Evidence Object

```text
Component
   │
   ├── Source Evidence
   ├── Visual Evidence
   ├── Behavioral Evidence
   ├── Accessibility Evidence
   ├── Documentation Evidence
   └── Test Evidence
```

---

# И AI не должен просто объединять всё подряд.

Если source говорит:

```text
disabled
```

а browser показывает:

```text
aria-disabled
```

это может быть нормально.

Но если:

```text
documentation: keyboard supported
```

а test:

```text
keyboard test failed
```

то возникает:

```text
CONFLICT
```

---

# Component Evidence Graph

```text
                 COMPONENT
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
    SOURCE        VISUAL       BEHAVIOR
       │             │             │
       ▼             ▼             ▼
    claims         claims        claims
       │             │             │
       └─────────────┼─────────────┘
                     ▼
                  TESTS
                     │
                     ▼
                 EVALUATION
```

---

# Теперь появляется очень важный вопрос:

## Может ли AI автоматически определить тип компонента?

Да, но не как единственный классификатор.

---

# Component Taxonomy

Например:

```text
Primitive
├── Button
├── Input
├── Checkbox
├── Switch
├── Badge
├── Avatar

Composite
├── SearchBar
├── DatePicker
├── CommandMenu
├── DataTable

Pattern
├── LoginForm
├── FilterBar
├── Sidebar
├── PricingTable

Block
├── Dashboard
├── Hero
├── FeatureSection
├── SettingsPage

Template
├── SaaS Dashboard
├── Admin Panel
├── E-commerce
```

---

# Но границы не абсолютны.

Например:

```text
Sidebar
```

может быть:

```text
component
pattern
layout primitive
```

в зависимости от системы.

---

# Поэтому AI-LAB не должен жёстко говорить:

```text
Sidebar = component
```

---

# Лучше:

```json
{
  "concept": "Sidebar",
  "roles": [
    "navigation",
    "layout",
    "composite"
  ]
}
```

---

# Это ещё одна важная поправка.

## Taxonomy должна быть многоосевой.

Не:

```text
component_type = sidebar
```

а:

```text
semantic_role
composition_role
interaction_role
layout_role
```

---

# Например DataTable:

```text
semantic:
data presentation

interaction:
selection
sorting
filtering
pagination

layout:
responsive container

composition:
header + toolbar + table + pagination
```

---

# И теперь AI может отвечать на запрос:

> «Мне нужна таблица для большого количества данных с фильтрами и массовым выбором».

Вместо поиска по слову:

```text
table
```

он ищет:

```text
data presentation
+
filtering
+
selection
+
pagination
+
responsive
```

---

# Это уже **semantic component search**.

---

# Теперь самое важное для твоего AI-LAB.

Ты хочешь:

> «Создай интерфейс».

AI должен решить:

```text
какой компонент
какая реализация
какой variant
какой composition
какое состояние
какие зависимости
```

---

# Поэтому нужен Component Resolver.

```text
USER INTENT
     ↓
SEMANTIC REQUIREMENTS
     ↓
COMPONENT SEARCH
     ↓
CANDIDATES
     ↓
COMPATIBILITY
     ↓
QUALITY
     ↓
LICENSE
     ↓
DESIGN SYSTEM
     ↓
PROJECT CONSTRAINTS
     ↓
SELECT IMPLEMENTATION
```

---

# Но выбор нельзя делать только по similarity.

Например три компонента:

```text
A similarity = 0.93
B similarity = 0.88
C similarity = 0.82
```

Не значит автоматически:

```text
A = best
```

---

# Потому что:

A может:

```text
visual ✓
accessibility ✗
responsive ✗
license ?
```

B:

```text
visual 0.88
accessibility ✓
responsive ✓
license ✓
```

C:

```text
visual 0.82
performance ✓
framework compatibility ✓
```

---

# Поэтому Component Evaluation — multidimensional.

```text
FIT
├── semantic
├── visual
├── behavioral
├── accessibility
├── responsive
├── technical
├── dependency
├── license
└── provenance
```

---

# Не создаём одну магическую оценку.

Это соответствует нашей договорённости из раздела 2:

> качество многомерно.

---

# Теперь ещё одна проблема.

## Компонент может быть хорошим сам по себе, но плохим в данном интерфейсе.

Например:

```text
beautiful glassmorphism Card
```

может быть отличным компонентом.

Но если Design System проекта:

```text
dense
flat
enterprise
minimal
```

то этот Card плохо подходит.

---

# Следовательно Component Intelligence должна знать:

```text
component
+
design compatibility
```

---

# Именно здесь Component Intelligence пересекается с будущим:

# DESIGN INTELLIGENCE

Но мы пока не смешиваем эти подсистемы.

---

# Component Intelligence говорит:

> «Что это за компонент и как он работает?»

Design Intelligence будет говорить:

> «Какой визуальный язык должен использоваться?»

---

# И потом Composition Engine соединит их.

```text
Component Intelligence
        +
Design Intelligence
        +
Project Requirements
        ↓
Composition
```

---

# Теперь ещё одна сильная идея.

## Component Family

Допустим у нас:

```text
Button
```

и 17 реализаций:

```text
shadcn Button
Radix Button
Material Button
Custom Button
21st Button
...
```

Мы не должны хранить их как 17 независимых концепций.

---

# Должно быть:

```text
COMPONENT FAMILY
       │
       ├── Concept
       │
       ├── Implementation A
       ├── Implementation B
       ├── Implementation C
       └── Reconstructed D
```

---

# Это позволяет AI рассуждать:

> «Мне нужен Button concept с keyboard/accessibility contract X и visual characteristics Y».

И уже потом выбрать implementation.

---

# Component Family Graph

```text
Button
│
├── shadcn/Button
│
├── Radix/Button
│
├── Custom/Button
│
└── reconstructed/Button
```

---

# Более того, implementations могут иметь inheritance/derivation:

```text
Base Button
   ↓
Icon Button
   ↓
Toolbar Button
```

Но это нужно отличать от простого визуального similarity.

---

# Поэтому relations:

```text
IMPLEMENTS
EXTENDS
COMPOSES
DERIVED_FROM
SIMILAR_TO
ALTERNATIVE_TO
REQUIRES
CONFLICTS_WITH
```

---

# Это уже начинает превращаться в тот Component Graph, который мы планировали в разделе 17.

Но сейчас мы закладываем его основу.

---

# Теперь вопрос: хранить ли Component Intelligence прямо в Registry?

---

# Архитектор A

Да.

---

# Архитектор B

Нет.

Registry должен оставаться distribution/catalog layer.

---

# Главный архитектор

B прав.

Мы уже пришли к этому в разделе 12.

```text
Knowledge System
       │
       ├── Component Concept
       ├── Component Knowledge
       ├── Evidence
       └── Relations
              │
              ▼
           Registry
              │
              ▼
          Distribution
```

---

# Registry говорит:

> Вот artifact.

Knowledge System говорит:

> Вот что мы знаем об artifact.

---

# Это принципиально.

---

# Минимальная модель Component Entity

```json
{
  "id": "component.button",
  "concept": "Button",

  "roles": [
    "action",
    "control"
  ],

  "anatomy": {
    "root": true,
    "parts": [
      "icon",
      "label"
    ]
  },

  "variants": [
    "default",
    "secondary",
    "destructive",
    "outline"
  ],

  "states": [
    "default",
    "hover",
    "focus",
    "active",
    "disabled",
    "loading"
  ],

  "behavior": {
    "click": true,
    "keyboard": true
  },

  "accessibility": {
    "role": "button",
    "keyboard_required": true
  },

  "implementations": [
    "..."
  ],

  "evidence": [
    "..."
  ]
}
```

---

# Но я бы ещё не принимал эту schema как окончательную.

Потому что мы пока не разобрали:

- Design Intelligence;
- Design Genome;
- Component Graph;
- Composition.

Schema неизбежно будет расширяться.

Поэтому сейчас нужен **canonical conceptual model**, а не огромный JSON-schema на 500 полей.

---

# Решение главного архитектора

## Component Intelligence состоит из 8 слоёв

```text
1. IDENTITY
2. SEMANTICS
3. ANATOMY
4. VARIANTS
5. STATES
6. BEHAVIOR
7. ACCESSIBILITY
8. IMPLEMENTATIONS
```

И дополнительно:

```text
EVIDENCE
RELATIONS
QUALITY
PROVENANCE
```

---

# 1. Identity

```text
Button
Card
Dialog
DataTable
```

---

# 2. Semantics

Что компонент означает.

```text
action
navigation
input
data presentation
feedback
container
```

---

# 3. Anatomy

Из каких частей состоит.

---

# 4. Variants

Какие design/semantic variations существуют.

---

# 5. States

Как компонент меняется во времени.

---

# 6. Behavior

Как пользователь взаимодействует с ним.

---

# 7. Accessibility

Roles, names, states, keyboard/focus behavior и другие accessibility requirements. W3C APG прямо рассматривает такие компоненты как patterns с roles, states, properties и keyboard behavior. citeturn0search1turn0search13

---

# 8. Implementations

Где и как реализован concept:

```text
React
Vue
Svelte
vanilla
etc.
```

---

# А сверху:

```text
EVIDENCE
PROVENANCE
RELATIONS
QUALITY
```

---

# Главная найденная брешь №14

Мы первоначально рассматривали компонент как:

```text
name
+
code
+
variants
+
dependencies
```

Это модель **package management**, а не Component Intelligence.

Правильная модель:

> **Component Intelligence описывает не файл с кодом, а концепцию компонента, его семантику, анатомию, варианты, состояния, поведение, accessibility-контракт, реализации и доказательства, на которых основано это описание.**

И теперь архитектура получает важное разделение:

```text
                 COMPONENT CONCEPT
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   KNOWLEDGE       IMPLEMENTATIONS    EVIDENCE
        │               │                │
        │               ▼                │
        │          REGISTRY              │
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                   COMPONENT
                    RESOLVER
                        │
                        ▼
                  COMPOSITION
```

---

# Состояние архитектуры после раздела 14

```text
AI-LAB
│
├── CONTROL PLANE
│   └── Orchestrator
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   └── Skill System
│
├── SOURCE SYSTEM
│   ├── Discovery
│   ├── Source Profiles
│   ├── Source Adapters
│   └── Source Policies
│
├── KNOWLEDGE SYSTEM
│   ├── Entities
│   ├── Claims
│   ├── Evidence
│   ├── Provenance
│   ├── Relations
│   ├── Experiments
│   └── Benchmarks
│
├── COMPONENT INTELLIGENCE
│   ├── Component Concepts
│   ├── Component Families
│   ├── Anatomy
│   ├── Semantics
│   ├── Variants
│   ├── States
│   ├── Behavior
│   ├── Accessibility
│   ├── Implementations
│   └── Component Resolver
│
├── REGISTRY
│   ├── Catalog
│   ├── Resolver
│   ├── Versioning
│   └── Distribution
│
├── LICENSE / POLICY
│   ├── License Detector
│   ├── Dependency Graph
│   └── Policy Engine
│
├── EXECUTION
│   ├── Agent Runtime
│   ├── Capabilities
│   └── Tools
│
└── EVALUATION
    ├── Functional
    ├── Visual
    ├── Responsive
    ├── Accessibility
    └── Performance
```

Следующий раздел — **15. DESIGN INTELLIGENCE**.

И там будет принципиальный спор: достаточно ли нам `tokens.json` с цветами, шрифтами и spacing, или AI-LAB должен научиться понимать **сам язык дизайна** — композицию, иерархию, плотность, типографическую систему, grid, visual rhythm, motion, iconography и правила, по которым из отдельных компонентов получается именно такой интерфейс.

---

**User:**

Далее

---

**Assistant:**

Теперь переходим от вопроса «что умеет компонент» к вопросу «почему интерфейс выглядит именно так». Это следующий слой: **Design Intelligence**, который затем станет входом для Design Genome.

---

**Assistant:**

# Раздел 15. DESIGN INTELLIGENCE — как AI-LAB понимает дизайн

До этого мы научили систему понимать:

> **Component Intelligence → что это за компонент и как он работает.**

Теперь нужно понять:

> **Design Intelligence → почему этот компонент выглядит именно так и как он должен выглядеть рядом с другими компонентами.**

Это принципиально разные задачи.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Нам достаточно Design Tokens»

Берём сайт и извлекаем:

```text id="m4z6xq"
colors
fonts
font sizes
spacing
radius
shadows
breakpoints
```

Получаем:

```json id="9m3k2a"
{
  "colors": {},
  "typography": {},
  "spacing": {},
  "radius": {},
  "shadows": {}
}
```

После этого AI может использовать эти значения.

Проблема решена.

---

# Архитектор B — ПРОТИВ

Нет.

Tokens описывают **значения**, но не полностью описывают **систему принятия дизайнерских решений**.

Например:

```text id="0u5y5p"
font-size: 16px
```

не говорит:

> Где использовать 16px?

А:

```text id="1s6k0b"
spacing: 24px
```

не говорит:

> Почему между этими блоками 24px, а между другими 32px?

---

# Главный архитектор

Именно.

Возьмём два интерфейса.

Оба имеют:

```text id="q1c7xz"
Inter
#FFFFFF
#000000
8px radius
4/8/16/24 spacing
```

Но выглядят совершенно по-разному.

Почему?

Потому что дизайн — это не только tokens.

---

# Design Intelligence должна понимать:

```text id="w0xj4m"
TOKENS
+
TYPOGRAPHIC HIERARCHY
+
SPATIAL SYSTEM
+
LAYOUT
+
COMPOSITION
+
DENSITY
+
VISUAL HIERARCHY
+
ICONOGRAPHY
+
MOTION
+
INTERACTION
+
RESPONSIVE RULES
```

---

# И ещё один уровень:

## DESIGN INTENT

Например:

```text id="m3t6zv"
"primary action should visually dominate secondary actions"
```

Это уже не token.

Это правило композиции.

---

# Пример

Есть:

```text id="3l2e8k"
Save
Cancel
Delete
```

Можно задать:

```text id="zq3n9p"
Save = blue
Cancel = gray
Delete = red
```

Но Design Intelligence должна понимать:

```text id="2e5w8n"
Save:
primary

Cancel:
secondary

Delete:
destructive
```

И что порядок, расстояние, размеры и контраст этих кнопок отражают эту иерархию.

---

# Поэтому вводим:

# Design Model

```text id="a6q0y5"
DESIGN SYSTEM
│
├── TOKENS
├── TYPOGRAPHY
├── COLOR
├── SPACING
├── GRID
├── LAYOUT
├── DENSITY
├── HIERARCHY
├── COMPONENT STYLE
├── ICONOGRAPHY
├── MOTION
├── RESPONSIVE
└── INTERACTION
```

---

# Но Архитектор A атакует.

## Архитектор A

Это превращается в огромную субъективную базу.

Как определить:

```text id="9lq3t5"
"visual hierarchy"
"premium"
"clean"
"balanced"
"modern"
```

?

AI может придумать всё что угодно.

---

# Архитектор B

Поэтому не надо хранить только слова.

Нужно хранить **наблюдаемые признаки + правила + evidence**.

---

# Главный архитектор

Да.

Мы уже решили это в разделе 10.

Никаких:

```text id="h4j7f0"
"design feels premium"
```

без evidence.

Вместо этого:

```text id="9w2k1a"
large whitespace
low border contrast
limited color palette
high typography contrast
subtle elevation
medium density
```

И источник:

```text id="r0x5s2"
screenshots
computed CSS
DOM
design documentation
```

---

# Значит Design Intelligence должна работать через:

```text id="k0z7b3"
OBSERVATION
↓
MEASUREMENT
↓
ABSTRACTION
↓
RULE
↓
VALIDATION
```

---

# Рассмотрим Typography.

Просто:

```text id="6h4y8k"
font-family: Inter
```

недостаточно.

Нужно:

```text id="0u8n3r"
Typography
├── font families
├── weights
├── sizes
├── line heights
├── letter spacing
├── hierarchy
├── usage
└── responsive scaling
```

---

# Например:

```text id="q3x7a1"
Display
Heading 1
Heading 2
Heading 3
Body
Small
Caption
Label
```

Но важнее:

```text id="1r4z8p"
H1 → page title
H2 → section
H3 → subsection
Body → content
Caption → metadata
```

---

# То есть:

## Typography = values + semantic roles.

---

# Это очень важно для генерации.

Если пользователь говорит:

> Сделай dashboard.

AI не должен случайно выбрать:

```text id="s3p1x9"
32px heading
```

Он должен обратиться к:

```text id="q8k2v4"
Project Design System
→ heading hierarchy
```

---

# Теперь Color.

Плохо:

```json id="6q6j4p"
{
  "blue": "#3B82F6"
}
```

Хорошо:

```json id="t2p4n8"
{
  "primary": "#3B82F6",
  "background": "...",
  "foreground": "...",
  "muted": "...",
  "border": "...",
  "destructive": "...",
  "success": "...",
  "warning": "..."
}
```

Но ещё лучше:

```text id="8y5q1s"
semantic role
↓
token
↓
actual value
```

---

# Потому что:

```text id="j9s3m2"
primary
```

не обязательно всегда должен быть синим.

---

# Design System:

```text id="x3g5m8"
primary → blue-600
```

Theme B:

```text id="c4p7v1"
primary → violet-600
```

Компонент не меняется.

Меняется token mapping.

---

# Это приводит к:

# Semantic Design Tokens

Вместо:

```text id="l0r6x2"
#3B82F6
```

мы работаем с:

```text id="g7w2q4"
color.action.primary
```

---

# И теперь Component Intelligence + Design Intelligence соединяются:

```text id="n1k4v7"
Button
   ↓
variant = primary
   ↓
color.action.primary
```

---

# А не:

```text id="e6x8r2"
Button
   ↓
background = #3B82F6
```

---

# Это огромное различие.

---

# Теперь spacing.

AI может извлечь:

```text id="g4m9s2"
4
8
12
16
24
32
48
64
```

Но Design Intelligence должна определить:

```text id="a2n6f8"
4  → micro
8  → compact
16 → default
24 → component gap
32 → section
64 → major section
```

Не обязательно именно такие значения — они должны быть **извлечены из конкретной системы**.

---

# Это:

# Spatial Semantics

---

# Например:

```text id="w9x4p0"
component_internal
component_gap
group_gap
section_gap
page_padding
```

---

# И теперь AI может построить интерфейс:

```text id="h8y5v2"
Card
  internal padding = component_internal

Card → Card
  gap = group_gap

Section → Section
  gap = section_gap
```

---

# В результате исчезает одна из самых частых проблем AI-generated UI:

```text id="4g2k9q"
каждый элемент имеет случайный margin
```

---

# Следующий слой:

# Layout Intelligence

Не просто:

```text id="2m6q8s"
display: grid
```

а:

```text id="7z1n5x"
container
├── max-width
├── page padding
├── columns
├── gutters
├── alignment
├── breakpoints
└── responsive transitions
```

---

# Например:

```text id="9v4b1k"
Desktop
3 columns

Tablet
2 columns

Mobile
1 column
```

Но это всё ещё недостаточно.

Нужно знать:

> **что происходит при переходе между состояниями.**

---

# Responsive Design Model

```text id="3n7h5c"
Desktop
    ↓
Tablet
    ↓
Mobile
```

И система должна хранить:

```text id="u4r2m7"
visibility changes
layout changes
size changes
order changes
interaction changes
navigation changes
```

---

# Например:

Desktop:

```text id="x5q9b2"
sidebar = fixed
```

Mobile:

```text id="n7p3k1"
sidebar = drawer
```

Это не просто CSS breakpoint.

Это **behavioral transformation**.

---

# Именно поэтому мы раньше решили, что responsive testing должен быть частью QA.

---

# Теперь Density.

Очень недооценённый параметр.

Два dashboard могут использовать одинаковые:

```text id="6t1x8w"
colors
font
spacing scale
```

но один:

```text id="a4c7v0"
dense enterprise
```

а другой:

```text id="q8y2m1"
spacious consumer
```

---

# Поэтому:

```text id="r6k3n9"
DENSITY
```

должна быть отдельным design attribute.

Например:

```text id="w1p5v8"
compact
comfortable
spacious
```

Но опять же — это не универсальная истина, а описание конкретной системы.

---

# Теперь Iconography.

AI очень часто ломает интерфейс именно здесь.

Ты уже сталкивался с проблемой:

> визуально похожий интерфейс, но неправильные иконки.

---

# Design Intelligence должна понимать:

```text id="b8h2q6"
icon family
stroke width
size
corner style
filled/outline
optical weight
alignment
```

---

# Например:

```text id="y4r9k2"
Lucide
24px
2px stroke
outline
```

И это становится частью Design System.

---

# Но ещё важнее:

## Icon semantics.

Не:

```text id="g7x3v5"
some icon
```

а:

```text id="d9k1m4"
search
settings
delete
download
expand
collapse
```

---

# Тогда Component Resolver может искать:

```text id="q0w8x3"
icon semantic = "settings"
family = "Lucide"
```

---

# А не генерировать случайную SVG.

---

# Теперь Motion.

Ещё одна область, где AI часто делает «что-то красивое», но не то.

Design Intelligence должна понимать:

```text id="p3v7m0"
duration
easing
distance
opacity
scale
trigger
```

Но главное:

```text id="r8x1k6"
WHEN
WHY
WHERE
```

---

# Например:

```text id="f2m5z9"
menu opens
→ 150ms
→ opacity + translate
```

а не:

```text id="x9k2p4"
everything animates
```

---

# И это снова:

## Design Rule

а не просто token.

---

# Теперь главный вопрос.

## Где заканчивается Design Intelligence и начинается субъективность?

---

# Архитектор A

Нигде.

Дизайн субъективен.

---

# Архитектор B

Нет.

Многое можно измерить.

---

# Главный архитектор

Оба частично правы.

Нужно разделить:

```text id="7m4q9p"
MEASURABLE
```

и:

```text id="j8x1v5"
INTERPRETIVE
```

---

# Measurable

```text id="2r6n0x"
font size
line height
spacing
color contrast
container width
border radius
icon size
animation duration
grid columns
```

---

# Interpretive

```text id="v1c5k8"
visual hierarchy
tone
style
brand expression
perceived density
visual balance
```

---

# Но даже interpretive attributes должны иметь:

```text id="d5p8q2"
evidence
definition
confidence
examples
counterexamples
```

---

# Например:

```text id="7x3m9v"
density = compact
```

может быть обосновано:

```text id="0h8n4k"
small vertical padding
high information-per-screen
dense table rows
limited whitespace
```

---

# Это уже значительно лучше, чем:

> «Выглядит как enterprise dashboard».

---

# Теперь Design System Extraction.

Предлагаю pipeline:

```text id="5q8r2m"
REFERENCE
   ↓
OBSERVATION
   ↓
TOKEN EXTRACTION
   ↓
PATTERN EXTRACTION
   ↓
SEMANTIC ABSTRACTION
   ↓
DESIGN RULES
   ↓
DESIGN MODEL
   ↓
VALIDATION
```

---

# Входы:

```text id="n4k7z1"
screenshots
website
DOM
CSS
design documentation
component source
interaction traces
```

---

# Выход:

```text id="m8p3x6"
Design Model
```

---

# Пример:

```json id="y5r2c8"
{
  "typography": {
    "family": "Inter",
    "scale": "...",
    "hierarchy": "..."
  },

  "spacing": {
    "scale": "...",
    "roles": "..."
  },

  "layout": {
    "container": "...",
    "grid": "..."
  },

  "density": "compact",

  "iconography": {
    "family": "Lucide",
    "stroke": 2
  }
}
```

Но опять же:

**не надо превращать Design Intelligence в огромный JSON с сотнями субъективных полей.**

---

# Лучше иметь слой:

```text id="1k4n7p"
OBSERVATIONS
```

↓

```text id="7v3q2m"
DESIGN FACTS
```

↓

```text id="5z8m1x"
DESIGN RULES
```

↓

```text id="q6w4r9"
DESIGN MODEL
```

---

# Это полностью соответствует нашей модели Knowledge System.

---

# И вот здесь появляется очень важное различие:

## Design System ≠ Design Intelligence

---

# Design System

Набор:

```text id="n5c8v2"
tokens
components
patterns
guidelines
```

---

# Design Intelligence

Способность:

```text id="w3m7k0"
observe
infer
compare
extract
apply
evaluate
```

---

# То есть AI-LAB должен уметь **создавать Design System из наблюдений**, а не только использовать готовую.

---

# Это уже гораздо ближе к твоей первоначальной идее.

Ты хотел:

> «Показываем AI интерфейс → он должен понять дизайн → потом воспроизвести → потом улучшить».

Вот теперь у нас появляется промежуточный слой:

```text id="9h5x2v"
REFERENCE
     ↓
DESIGN INTELLIGENCE
     ↓
DESIGN MODEL
     ↓
IMPLEMENTATION
```

а не:

```text id="3p7k1m"
REFERENCE
     ↓
LLM
     ↓
random JSX
```

---

# Теперь связь с Component Intelligence

Получаем:

```text id="2z8v4q"
REFERENCE
      │
      ├──────────────┐
      ▼              ▼
COMPONENT        DESIGN
INTELLIGENCE     INTELLIGENCE
      │              │
      └──────┬───────┘
             ▼
        COMPOSITION
             │
             ▼
        IMPLEMENTATION
             │
             ▼
             QA
```

---

# И вот тут возникает ещё более интересная идея.

## Design Intelligence должна уметь работать в двух направлениях.

### Анализ:

```text id="4m7x2q"
interface
↓
design model
```

### Генерация:

```text id="d9n5v1"
design model
↓
interface
```

---

# А затем:

### Comparison

```text id="7q3k8m"
reference design model
        vs
generated design model
```

---

# Это позволит оценивать не только screenshot similarity.

Например:

```text id="x8m2p6"
Typography similarity
Spacing similarity
Layout similarity
Color similarity
Density similarity
Iconography similarity
Motion similarity
```

---

# Это будет значительно сильнее простого:

> «скриншоты похожи на 87%».

---

# Потому что мы сможем понять:

```text id="v5r9k3"
визуально:
0.91

typography:
0.98

spacing:
0.84

layout:
0.93

iconography:
0.62
```

И система увидит:

> проблема не во всём интерфейсе, а именно в iconography.

---

# Это непосредственно пригодится в разделе 26 Evaluation.

---

# Решение главного архитектора

## Design Intelligence не является Token Extractor.

Она состоит из нескольких уровней:

```text id="k2n8w5"
OBSERVATION
      ↓
MEASUREMENT
      ↓
DESIGN FACTS
      ↓
DESIGN RULES
      ↓
DESIGN MODEL
      ↓
APPLICATION
      ↓
EVALUATION
```

---

# Design Model должна описывать минимум:

```text id="z4x7m1"
Typography
Color
Spacing
Layout
Grid
Density
Hierarchy
Iconography
Motion
Interaction
Responsive
Component styling
Composition
```

---

# При этом:

```text id="u8q3p6"
measurable facts
```

отделяются от:

```text id="r5m1x9"
interpretive judgments
```

а judgments получают evidence/confidence.

---

# Главная найденная брешь №15

Мы изначально могли сказать:

> «Извлечём Design Tokens — и AI поймёт дизайн».

Это неправильно.

Правильнее:

> **Design Tokens описывают значения дизайн-системы; Design Intelligence описывает измеряемые характеристики, семантические роли, композиционные правила, визуальную иерархию, responsive-трансформации и другие закономерности, связывающие эти значения в единый визуальный язык.**

---

# Текущее состояние архитектуры

```text id="v6n2k8"
AI-LAB
│
├── CONTROL PLANE
│
├── INTELLIGENCE
│   ├── Planner
│   ├── Model Router
│   ├── Model Registry
│   └── Skill System
│
├── SOURCE SYSTEM
│
├── KNOWLEDGE SYSTEM
│   ├── Claims
│   ├── Evidence
│   ├── Provenance
│   ├── Relations
│   └── Experiments
│
├── COMPONENT INTELLIGENCE
│   ├── Concepts
│   ├── Families
│   ├── Anatomy
│   ├── Semantics
│   ├── Variants
│   ├── States
│   ├── Behavior
│   ├── Accessibility
│   └── Implementations
│
├── DESIGN INTELLIGENCE
│   ├── Observations
│   ├── Design Facts
│   ├── Design Rules
│   ├── Design Model
│   ├── Typography
│   ├── Color
│   ├── Spacing
│   ├── Layout
│   ├── Grid
│   ├── Density
│   ├── Hierarchy
│   ├── Iconography
│   ├── Motion
│   ├── Interaction
│   └── Responsive
│
├── REGISTRY
│
├── LICENSE / POLICY
│
├── EXECUTION
│
└── EVALUATION
```

## Следующий раздел — 16. DESIGN GENOME

Здесь мы пойдём ещё глубже.

Если **Design Intelligence** отвечает:

> «Что мы наблюдаем и какие правила из этого извлекаем?»

то **Design Genome** должен ответить:

> **Как компактно представить целостный визуальный язык интерфейса так, чтобы AI мог переносить, сравнивать, смешивать и эволюционировать его, не копируя буквально исходный сайт?**

И здесь будет особенно важный спор: **Design Genome — это полезная абстракция или красивая метафора, которая только усложнит систему?**

---

**User:**

Далее

---

**Assistant:**

Переходим к 16. Здесь я специально проверю саму идею **Design Genome** на необходимость: если это просто красивое название для tokens, мы её выбросим; если она даёт системе новую способность — формализуем.

---

**Assistant:**

# Раздел 16. DESIGN GENOME — нужен ли нам «геном дизайна» вообще?

До этого мы построили:

**Component Intelligence** — понимает компоненты.

**Design Intelligence** — извлекает из интерфейса факты и правила.

Теперь появляется идея:

> **Design Genome** — компактное, структурированное представление визуального языка, которое можно сравнивать, переносить, комбинировать и использовать для генерации.

Но здесь есть риск превратить архитектуру в набор красивых терминов.

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Design Genome нам необходим»

Представим, что мы исследовали 50 интерфейсов.

Получили:

```text
Site A
Site B
Site C
...
Site Z
```

У каждого:

```text
colors
fonts
spacing
radius
shadows
components
layouts
motion
```

Если всё хранить отдельно, AI будет каждый раз заново анализировать эти системы.

Genome позволит представить:

```text
DESIGN GENOME
```

как своего рода **генетический профиль интерфейса**.

Например:

```text id="1j7s3m"
Typography:
  modern-sans
  high-contrast
  compact

Spacing:
  4px base
  medium density

Shape:
  low radius
  restrained

Elevation:
  subtle

Motion:
  minimal

Iconography:
  outline
  medium stroke

Composition:
  structured
  grid-oriented
```

---

# Архитектор B — ПРОТИВ

Это звучит красиво, но пока это просто:

```text
Design System
+
Metadata
```

Мы уже создали Design Model.

Зачем вводить ещё один слой?

---

# Главный архитектор

Вот это правильная атака.

Если Design Genome:

```text
Design Genome = Design Model
```

то отдельная сущность не нужна.

Нельзя создавать архитектурный объект только ради красивого названия.

---

# Но Архитектор A продолжает.

Genome нужен не для хранения.

Он нужен для **операций над дизайном**:

```text
COMPARE
TRANSFER
MIX
MUTATE
GENERATE
SEARCH
CLUSTER
EVOLVE
```

---

# Главный архитектор

Вот теперь появляется смысл.

---

# Пример

У нас есть:

### Design A

```text id="c1x8r4"
Typography → editorial
Density → spacious
Radius → low
Motion → subtle
```

### Design B

```text id="p7v2k9"
Typography → technical
Density → compact
Radius → medium
Motion → fast
```

Пользователь говорит:

> Сделай dashboard: типографика как A, плотность как B, но сохрани цветовую систему проекта.

---

# Если у нас просто Design Systems:

AI должен вручную разбирать A и B.

---

# Если есть Genome:

```text id="n8m4q2"
Genome A
      +
Genome B
      +
Project constraints
      ↓
New Genome
```

---

# Вот это уже новая capability.

---

# Поэтому главный архитектор фиксирует:

> **Design Genome не должен быть вторым Design System. Его смысл — операции над абстрагированным визуальным языком.**

---

# Что такое Genome тогда?

Предлагаю:

> **Design Genome — нормализованное представление устойчивых визуальных, композиционных и интерактивных характеристик дизайн-системы, пригодное для сравнения, поиска, трансформации и генерации.**

---

# Но слово «устойчивых» здесь важно.

Например:

```text id="5x3k7n"
button width = 117px
```

не обязательно часть genome.

Это конкретное решение.

А:

```text id="q2v8m1"
buttons use moderate radius
```

может быть частью genome.

---

# И здесь появляется уровень абстракции.

## Observation

```text id="r8w4k2"
border-radius: 8px
```

↓

## Fact

```text id="p3n7x1"
components consistently use 8px radius
```

↓

## Rule

```text id="z6m2q9"
component shape language = moderate radius
```

↓

## Genome

```text id="h1v5c8"
shape = moderate
```

---

# Вот почему Genome не должен хранить всё подряд.

---

# ЭТАП 2 — ГЛУБОКИЙ СПОР

## Архитектор B

Но «moderate», «compact», «technical», «editorial» — субъективные labels.

AI может начать придумывать собственную систему терминов.

Сегодня:

```text
compact
```

завтра:

```text
dense
```

послезавтра:

```text
high-information
```

И мы получим semantic garbage.

---

# Главный архитектор

Очень серьёзная проблема.

Genome не должен быть свободным текстом.

Нужна:

# Controlled Vocabulary + Measurements

---

# Например Density

Не просто:

```text
density = compact
```

а:

```json id="6n4q0w"
{
  "density": {
    "label": "compact",

    "evidence": {
      "control_height": 32,
      "table_row_height": 36,
      "section_gap": 24
    }
  }
}
```

---

# Label — удобный alias.

Measurements — основание.

---

# То же для radius.

Не:

```text id="9j1s5c"
radius = modern
```

а:

```text id="w7p3k8"
radius:
  base = 8px
  max = 12px
  distribution = clustered
```

И дополнительно:

```text id="f5x2m9"
shape_profile = moderate
```

---

# Тогда Genome становится:

```text id="z4c7n1"
SEMANTIC LABELS
+
NORMALIZED MEASUREMENTS
+
RELATIONSHIPS
+
RULES
```

---

# И это гораздо сильнее.

---

# Теперь вопрос:

## Genome должен быть уникальным для каждого сайта?

Нет.

---

# Если 100 сайтов используют:

```text id="v5n2k8"
Inter
8px radius
4/8/16/24 spacing
Lucide
subtle shadows
```

у них могут быть очень похожие genome regions.

Это позволяет:

# Design Clustering

```text id="p8x4m2"
1000 interfaces
      ↓
Design Intelligence
      ↓
Genome extraction
      ↓
Clustering
      ↓
Design Families
```

---

# Например:

```text id="y3m7q1"
Enterprise Dense
SaaS Modern
Editorial
Brutalist
Minimal
Luxury
Developer Tool
Consumer Mobile
```

Но эти названия должны быть **описательными кластерами**, а не субъективным рейтингом.

---

# И тут появляется важная возможность.

## Поиск не только компонентов.

Пользователь может сказать:

> Найди мне интерфейсы в таком визуальном стиле.

AI может искать:

```text id="w6q2n8"
Genome similarity
```

---

# Например:

```text id="k4v9m1"
Target Genome
      ↓
nearest design families
      ↓
candidate components
      ↓
candidate templates
```

---

# Это уже очень полезно.

---

# Но есть ещё более интересная возможность.

# Genome Recombination

Допустим:

```text id="a2r8x5"
Typography ← Design A
Spacing ← Design B
Color ← Project C
Motion ← Design D
Components ← Library E
```

Получаем:

```text id="m5n1z7"
Composite Design Genome
```

---

# Но здесь возникает опасность.

## Архитектор B:

Простое смешивание параметров может создать Frankenstein Design.

Например:

```text id="q7v3p9"
editorial typography
+
dense enterprise spacing
+
playful motion
+
brutalist shapes
```

может быть внутренне противоречивым.

---

# Главный архитектор

Поэтому Genome должен иметь не только attributes.

Нужны:

# Constraints

и:

# Compatibility Relations

---

# Например:

```text id="j9x4c6"
Typography:
editorial
```

может иметь:

```text id="s8p2m5"
compatible:
  spacious
  moderate

tension:
  ultra-dense
```

---

# Но не надо превращать это в абсолютный закон.

Это:

```text id="q3v7n1"
design relationship
confidence
evidence
```

а не:

```text
editorial + dense = INVALID
```

---

# То есть Genome должен поддерживать:

```text id="n6m2x8"
COMPATIBLE
TENSION
NEUTRAL
UNKNOWN
```

---

# Это опять наша модель explicit uncertainty.

---

# Теперь Mutation.

Если пользователь говорит:

> Сделай интерфейс похожим на A, но более спокойным.

Genome может представить изменение:

```text id="z8r4m2"
motion:
  subtle → minimal

contrast:
  high → medium

density:
  compact → comfortable
```

---

# Это уже:

# Design Mutation

```text id="f3k7p1"
GENOME
 ↓
TRANSFORMATION
 ↓
NEW GENOME
```

---

# Затем Composition Engine реализует его.

---

# Очень важный момент:

## Genome не генерирует код.

Он генерирует **design constraints / design intent**.

---

# То есть:

```text id="b8v2m5"
Genome
   ↓
Design Model
   ↓
Component selection
   ↓
Composition
   ↓
Implementation
```

---

# Это позволяет отделить:

```text id="x7q3n9"
WHAT IT SHOULD LOOK LIKE
```

от:

```text id="m2k8v4"
HOW IT IS IMPLEMENTED
```

---

# И это критически важно.

Один и тот же Genome может быть реализован:

```text id="p5r1x7"
React
Vue
Svelte
React Native
Tauri
```

с разными implementation constraints.

---

# Теперь главный вопрос:

## Genome — это файл?

---

# Архитектор A

Да.

Например:

```text id="9v4x2m"
design-genome.json
```

---

# Архитектор B

Нет.

Это entity в Knowledge System.

---

# Главный архитектор

B прав.

JSON может быть **представлением**, но не самой сущностью.

---

# Потому что Genome имеет:

```text id="e8q2m5"
version
provenance
evidence
relations
confidence
source
derived_from
```

---

# Поэтому:

```text id="v6n3k8"
Knowledge System
   │
   └── Design Genome Entity
           │
           ├── observations
           ├── measurements
           ├── rules
           ├── relations
           ├── evidence
           └── versions
```

---

# А экспорт:

```text id="w4p9x2"
design-genome.json
```

может быть artifact.

---

# Теперь версия.

Допустим сайт обновился.

Было:

```text id="m1q7z4"
Genome v1
```

Стало:

```text id="n8r3k5"
Genome v2
```

Нельзя просто заменить v1.

Потому что наши прошлые реконструкции могли зависеть от неё.

---

# Поэтому:

```text id="k5x2v9"
Genome
├── v1
├── v2
└── v3
```

---

# Это напрямую связано с нашей системой versioning/rollback.

---

# Теперь вопрос о «генетическом коде».

Название Design Genome может создать ложное впечатление, будто мы создаём универсальный математический формат дизайна.

Не нужно.

---

# Архитектор B

Предлагаю вообще отказаться от слова Genome.

Назвать:

```text
Design Profile
```

---

# Архитектор A

Но Design Profile слишком пассивно.

Genome подчёркивает возможность:

```text
mutation
recombination
evolution
```

---

# Главный архитектор

Компромисс:

## Внутреннее название:

`Design Genome`

## Формальный тип:

`Design Profile`

То есть:

```text id="p1x7k4"
Design Genome
=
operational Design Profile
```

Genome — концептуальная модель.

Profile — конкретный экземпляр.

---

# Это снимает часть семантической путаницы.

---

# Например:

```text id="q6m3v8"
Genome:
  Design Language Model

Profile:
  "Acme Dashboard v3"
```

---

# Теперь ещё один важный вопрос:

## Может ли Genome быть обучаемым?

Не обязательно обучать модель.

Мы можем делать:

```text id="s4x8n1"
Genome database
```

и накапливать:

```text
patterns
compatibilities
successful transformations
failed transformations
```

---

# Например:

```text id="e7p2m9"
Transformation:
A → B

result:
responsive quality improved

evidence:
benchmark
```

---

# Через время AI-LAB начинает знать:

> Какие трансформации дизайна обычно работают в каких контекстах.

Это уже **Design Evolution Memory**.

---

# И это очень близко к твоей первоначальной идее «система сама учится».

---

# Но здесь важно не говорить:

> «AI обучил модель».

Пока он просто накопил:

```text id="j3n8q5"
structured experience
```

в Knowledge System.

---

# И ещё одна важная операция:

# Genome Diff

Мы можем сравнить:

```text id="c9r4m7"
Reference Genome
vs
Generated Genome
```

и получить:

```text id="v2x8k1"
Typography:
close

Spacing:
too loose

Radius:
too large

Motion:
too aggressive

Iconography:
different
```

---

# Это будет одним из ключевых механизмов Visual QA.

---

# Таким образом, Design Genome связывает сразу несколько будущих разделов:

```text id="n5m8q2"
Design Intelligence
        ↓
Design Genome
        ↓
Composition
        ↓
Generation
        ↓
Evaluation
        ↓
Improvement
```

---

# И это уже не просто метафора.

У него есть реальные операции:

```text id="r7x3p9"
EXTRACT
COMPARE
SEARCH
CLUSTER
TRANSFER
COMBINE
MUTATE
DIFF
VERSION
VALIDATE
```

---

# Решение главного архитектора

## Design Genome оставляем.

Но не как отдельную базу данных и не как ещё один набор tokens.

Его роль:

> **операционный слой над Design Intelligence, который представляет визуально-композиционную систему в нормализованном виде и позволяет AI сравнивать, искать, переносить, комбинировать и изменять дизайн без привязки к конкретной реализации.**

---

# Структура Design Genome

```text id="u3q7m1"
DESIGN GENOME
│
├── TYPOGRAPHY
│   ├── families
│   ├── hierarchy
│   ├── scale
│   └── weight
│
├── COLOR
│   ├── semantic roles
│   ├── palette
│   └── contrast
│
├── SPACING
│   ├── scale
│   ├── density
│   └── spatial roles
│
├── SHAPE
│   ├── radius
│   ├── borders
│   └── geometry
│
├── ELEVATION
│   ├── shadows
│   └── layering
│
├── LAYOUT
│   ├── containers
│   ├── grid
│   ├── alignment
│   └── responsive
│
├── ICONOGRAPHY
│   ├── family
│   ├── stroke
│   └── semantics
│
├── MOTION
│   ├── duration
│   ├── easing
│   └── behavior
│
├── INTERACTION
│   ├── feedback
│   ├── states
│   └── transitions
│
├── COMPOSITION
│   ├── hierarchy
│   ├── rhythm
│   └── patterns
│
└── RELATIONS
    ├── compatible
    ├── tension
    ├── derived
    └── unknown
```

---

# Главная найденная брешь №16

Мы могли сделать ошибку:

> **Design Genome = большой JSON с цветами, шрифтами и spacing.**

Нет.

Правильнее:

> **Design Genome — это нормализованный операционный профиль дизайн-языка, построенный из Design Intelligence и пригодный для сравнения, поиска, трансформации, композиции и эволюции.**

---

# Теперь архитектура после 16 разделов

```text id="x9m4p7"
                         AI-LAB
                           │
             ┌─────────────┴─────────────┐
             │                           │
       CONTROL PLANE                INTELLIGENCE
             │                           │
        Orchestrator              Planner / Router
             │                           │
             └─────────────┬─────────────┘
                           │
                     KNOWLEDGE
                           │
             ┌─────────────┼─────────────┐
             │             │             │
        Components       Design       Evidence
             │             │
             │       Design Intelligence
             │             │
             │       Design Genome
             │             │
             └─────────────┼─────────────┘
                           │
                     REGISTRY
                           │
                     RESOLVER
                           │
                     COMPOSITION
                           │
                    IMPLEMENTATION
                           │
                        QA / EVAL
                           │
                       LEARNING
```

---

## Следующий раздел — 17. COMPONENT GRAPH

Теперь у нас есть две интеллектуальные модели:

```text
Component Intelligence
Design Intelligence / Genome
```

Но пока они практически **не знают, как компоненты связаны друг с другом**.

Например:

```text
Dashboard
 ├── Sidebar
 ├── Header
 ├── FilterBar
 ├── DataTable
 │    ├── Checkbox
 │    ├── Button
 │    └── Pagination
 └── Chart
```

Нужно решить, является ли это просто dependency tree, или нам нужен гораздо более мощный **Component Graph**, который понимает:

- `composes`
- `contains`
- `requires`
- `alternative-to`
- `variant-of`
- `derived-from`
- `compatible-with`
- `conflicts-with`
- semantic relationships
- layout relationships
- design relationships.

И именно этот граф впоследствии станет основой для **Composition Engine**.

---

**User:**

Далее

---

**Assistant:**

Переходим к 17. Здесь ключевой риск — построить обычное дерево зависимостей и назвать его Component Graph. Я буду проверять, какие отношения действительно нужны AI для поиска и сборки интерфейсов.

---

**Assistant:**

# Раздел 17. COMPONENT GRAPH — как AI понимает связи между компонентами

До этого мы описали отдельные сущности:

```text
Component Intelligence
        +
Design Intelligence
        +
Design Genome
```

Но интерфейс никогда не состоит из независимых компонентов.

`Button` сам по себе мало что говорит.

Гораздо важнее:

```text
Button
  находится в Toolbar
  Toolbar находится в CardHeader
  CardHeader относится к Card
  Card находится в Dashboard
```

И ещё важнее:

```text
Button
  compatible with Tooltip
  used in DialogFooter
  has destructive variant
  follows project Design Genome
```

Поэтому нам нужен граф.

Но вопрос:

> **какой именно граф?**

---

# ЭТАП 1 — ПЕРВИЧНЫЙ СПОР

## Архитектор A — «Нам достаточно Dependency Graph»

Компоненты уже имеют зависимости.

Например:

```text id="g7x2m4"
DataTable
 ├── Table
 ├── Checkbox
 ├── Button
 └── Pagination
```

Это можно представить как:

```text
DataTable
   ↓
dependencies
```

И AI сможет понять структуру.

---

## Архитектор B — ПРОТИВ

Это слишком примитивно.

Dependency:

> «для этого компонента нужен другой компонент».

Но нам нужно понимать:

> «как компоненты используются вместе».

Например:

```text id="j5r8q2"
Button → Tooltip
```

не означает, что Tooltip является dependency Button.

Скорее:

```text
Button
  can_be_wrapped_by
Tooltip
```

А:

```text id="m3v9k1"
Card
  contains
CardHeader
```

это уже композиционная связь.

А:

```text id="q8n4p6"
Button
  variant = destructive
```

вообще другая связь.

---

# Главный архитектор

Значит:

> **Dependency Graph ≠ Component Graph.**

Dependency — только один тип отношения.

---

# Тогда что должно быть в графе?

Предлагаю:

```text id="p6x3m8"
COMPONENT GRAPH
│
├── STRUCTURAL
├── COMPOSITIONAL
├── SEMANTIC
├── BEHAVIORAL
├── VISUAL
├── IMPLEMENTATION
└── KNOWLEDGE
```

---

# 1. STRUCTURAL RELATIONS

Например:

```text id="w9k4q2"
DataTable
  ├── contains → Table
  ├── contains → Pagination
  └── contains → FilterBar
```

Типы:

```text id="b2m7x5"
contains
parent_of
child_of
part_of
```

---

# 2. COMPOSITIONAL RELATIONS

Это уже интереснее.

Например:

```text id="r4n8c1"
CardHeader
  composes
    Avatar
    Title
    Actions
```

Или:

```text id="k7x3p9"
SearchInput
  commonly_used_with
FilterButton
```

---

# 3. SEMANTIC RELATIONS

Например:

```text id="s2v6m8"
Button
  semantic_role → action
```

```text id="j9q4n1"
Dialog
  semantic_role → interruption / confirmation
```

А:

```text id="DeleteDialog"
```

может быть:

```text id="d4w8k2"
pattern:
destructive-confirmation
```

---

# 4. BEHAVIORAL RELATIONS

Например:

```text id="z5m1q7"
Select
  opens
    Dropdown
```

или:

```text id="n8r3v6"
Popover
  triggered_by
    Button
```

---

# 5. VISUAL RELATIONS

Вот здесь появляется связь с Design Genome.

Например:

```text id="u6k2p9"
Card
  follows → surface/card
```

```text id="f3m8x1"
Button
  follows → action/primary
```

То есть Component Graph может ссылаться на:

```text id="q7v4n2"
Design Token
Design Rule
Design Pattern
Genome
```

---

# 6. IMPLEMENTATION RELATIONS

Например:

```text id="c8r5m2"
Button Concept
       │
       ├── implements → shadcn Button
       ├── implements → Radix Button
       ├── implements → Custom Button
       └── implements → Reconstructed Button
```

Это связывает:

**Component Concept**

с:

**Component Implementation**.

---

# 7. KNOWLEDGE RELATIONS

Например:

```text id="y4p7k1"
DataTable
  documented_by → documentation
  validated_by → test
  derived_from → source
  observed_in → website
```

Это уже связь с Knowledge System.

---

# Архитектор A

Но тогда это превращается в гигантский граф всего AI-LAB.

---

# Архитектор B

Именно.

Нужно ограничить его.

---

# Главный архитектор

Да.

Мы не должны создавать:

```text
ONE GRAPH TO RULE EVERYTHING
```

Это будет архитектурная ошибка.

---

# Нужно разделить:

## Component Graph

описывает отношения, непосредственно относящиеся к компонентам и их использованию.

А:

```text
Knowledge Graph
```

описывает более широкий мир:

```text
source
claim
evidence
skill
component
design
project
experiment
```

---

# Связь между ними:

```text id="m5q8x3"
Knowledge Graph
       │
       └──── references ──── Component Graph
```

---

# Это важное уточнение.

---

# Теперь вопрос:

## Component Graph должен хранить только существующие компоненты?

Нет.

Нам нужны **concept nodes**.

---

# Например:

```text id="p8w3n6"
Button
```

не обязательно конкретный код.

Это:

```text id="x4m7q2"
Component Concept
```

А реализации:

```text id="r9k2v5"
shadcn/Button
Radix/Button
Custom/Button
```

являются отдельными nodes.

---

# Получается:

```text id="c7n4m8"
             Button
            /      \
     implements   implements
       /             \
shadcn/Button      Custom/Button
```

---

# Это позволяет AI сказать:

> Мне нужен Button.

а не:

> Мне нужен `shadcn/ui Button`.

---

# Это принципиально.

---

# Потому что пользователь задаёт **намерение**, а не npm package.

---

# Теперь возникает следующий вопрос.

## Как AI ищет компонент?

Допустим пользователь говорит:

> Мне нужен блок фильтрации таблицы.

AI не должен искать:

```text id="u2k7m4"
"filter"
```

только по названию.

---

# Он должен построить:

```text id="q5x8n1"
Intent
│
├── semantic role: filtering
├── context: data table
├── interaction: dropdown/select/input
├── layout: horizontal toolbar
└── responsive: collapse on mobile
```

---

# Затем граф:

```text id="e8m3p7"
Intent
 ↓
Graph Search
 ↓
Candidate Patterns
 ↓
Candidate Components
```

---

# И вот здесь Graph становится реально полезен.

---

# Например:

```text id="v4n9k2"
FilterBar
 ├── SearchInput
 ├── Select
 ├── DateRangePicker
 └── Button
```

AI понимает:

> FilterBar — не просто компонент. Это composition pattern.

---

# Значит в графе должны существовать:

## Component

и:

## Component Pattern

---

# Это разные сущности.

---

# Component

```text id="k8x2p5"
Button
```

---

# Pattern

```text id="m4r7n1"
SearchToolbar
```

состав:

```text id="t6q3v8"
SearchInput
Filter
Sort
Actions
```

---

# И Pattern тоже можно реализовать по-разному.

---

# Это нам понадобится в следующем разделе — Composition Engine.

---

# Но пока граф должен знать:

```text id="r2w6k9"
Component
Pattern
Block
Template
Page
```

---

# Получается иерархия:

```text id="a7m3x8"
Component
   ↓
Pattern
   ↓
Block
   ↓
Template
   ↓
Page
```

---

# Но не делаем жёсткое дерево.

Потому что:

```text id="x9q4v2"
Button
```

может использоваться:

```text
Header
Dialog
Card
Toolbar
Table
```

То есть это граф.

---

# Теперь самое интересное:

# Constraints

Допустим:

```text id="b5n8m1"
DataTable
```

может требовать:

```text id="q7r3x9"
Pagination
```

но не обязательно.

Это:

```text id="u2k6p4"
REQUIRES
OPTIONAL
```

---

# А:

```text id="h8m4v1"
Dialog
```

может иметь:

```text id="d6x2p9"
DialogTrigger
DialogContent
DialogFooter
```

где некоторые элементы обязательны по конкретной реализации.

---

# Значит отношения могут иметь:

```text id="c3q7n5"
strength
required
optional
recommended
forbidden
```

---

# Это важнее, чем просто edge.

---

# Потому что AI должен понимать:

> «Можно ли?»

и:

> «Нужно ли?»

---

# Например:

```text id="s8p4m2"
Tooltip
```

может быть:

```text recommended_with → IconButton
```

но:

```text required_with → IconButton
```

нет.

---

# И ещё:

## Compatibility

```text id="n5x7k1"
Component A
compatible_with
Component B
```

---

# Но compatibility должна учитывать:

```text id="v8m2q4"
design system
framework
version
accessibility
dependencies
project
```

---

# Поэтому связь:

```text id="y3r6p8"
compatible_with
```

не является абсолютной.

---

# Она может выглядеть:

```json id="j4m8q2"
{
  "relation": "compatible_with",
  "context": {
    "framework": "react",
    "design_system": "project-x"
  },
  "confidence": 0.92
}
```

---

# Это снова связывает граф с нашим принципом:

> **Knowledge is contextual.**

---

# Теперь вопрос о графовой базе.

## Архитектор A:

Нужен Neo4j.

---

# Архитектор B:

Нет.

Можно использовать PostgreSQL.

---

# Главный архитектор

Именно здесь нельзя заранее выбирать технологию.

Сначала определяем операции.

---

# Нам нужны:

```text id="e7v3k9"
find related components
find compositions
find alternatives
find implementations
find compatible components
find path
find dependency chain
find patterns containing X
find components satisfying constraints
```

---

# Если на раннем этапе это можно эффективно делать через:

```text id="u4x8m1"
relational tables
+
indexes
+
recursive queries
```

нам не нужен отдельный graph database.

---

# Это особенно важно для твоего проекта.

Ты хочешь огромную систему.

Но:

> огромная архитектура ≠ огромное количество инфраструктурных сервисов.

---

# Поэтому v1:

```text id="r6m2p8"
PostgreSQL / SQLite
+
relation tables
+
search index
```

А если реальные workload'ы покажут необходимость специализированного graph engine — добавляем адаптер.

---

# Архитектор A

Но тогда AI не сможет делать сложные графовые запросы.

---

# Главный архитектор

Сможет.

Граф — это **модель данных**, а не обязательно отдельный продукт.

---

# Например:

```text id="z8q3m5"
component_relations
```

может содержать:

```text
source_id
target_id
relation_type
context
strength
confidence
provenance
version
```

---

# А потом Graph Service предоставляет API:

```text id="m1x7c4"
graph.find_related(...)
graph.find_compositions(...)
graph.find_alternatives(...)
graph.find_compatible(...)
graph.resolve_pattern(...)
```

---

# Тогда AI вообще не знает, где хранится граф.

---

# Это правильная абстракция.

---

# Теперь самая серьёзная проблема.

## Граф будет расти.

Допустим:

```text id="p8k2v6"
50 000 components
200 000 relationships
```

AI может получить слишком много результатов.

---

# Значит нужен:

# Graph Retrieval

Не:

```text
give AI whole graph
```

а:

```text id="w5n9m3"
intent
 ↓
constraints
 ↓
graph traversal
 ↓
candidate subgraph
 ↓
ranking
 ↓
context
```

---

# Это аналог нашего Hybrid Retrieval.

---

# Например пользователь:

> Сделай страницу аналитики с таблицей и фильтрами.

AI получает только:

```text id="g2x7r4"
AnalyticsPage
 ├── Header
 ├── FilterBar
 │    ├── Search
 │    ├── DatePicker
 │    └── Select
 ├── KPI Cards
 ├── Chart
 └── DataTable
```

А не весь Component Graph.

---

# Это называется:

## Contextual Subgraph

---

# И вот это очень важная архитектурная единица.

---

# Graph Search:

```text id="s6m4q9"
GLOBAL GRAPH
      ↓
QUERY
      ↓
CONTEXTUAL SUBGRAPH
      ↓
AI
```

---

# Теперь ещё одна проблема.

## Graph может содержать ложные связи.

Например AI однажды решил:

```text id="k2v8m5"
Button
compatible_with
Tooltip
```

и записал это.

Через год все агенты начинают это использовать как факт.

---

# Поэтому каждое существенное edge должно иметь:

```text id="x4r7p1"
provenance
evidence
confidence
status
version
```

---

# Например:

```json id="w9m3k7"
{
  "from": "IconButton",
  "relation": "wrapped_by",
  "to": "Tooltip",

  "evidence": [
    "official-docs",
    "example-42",
    "validated-test-19"
  ],

  "confidence": "high",
  "status": "verified"
}
```

---

# Это связывает Graph с Evidence System.

---

# Теперь конфликт.

Допустим:

```text id="j7x2m8"
Source A:
Button → Tooltip

Source B:
Button → Popover
```

Это не обязательно конфликт.

Они могут быть:

```text id="q3m8v5"
different contexts
```

---

# Поэтому graph relation должна иметь:

```text id="n6r4k1"
context
```

---

# Например:

```text
Tooltip:
non-interactive explanation

Popover:
interactive content
```

И AI сможет выбрать нужный relation по intent.

---

# Теперь Component Graph становится не просто:

```text
A → B
```

а:

```text id="t8q5m2"
A
 │
 ├── relation
 ├── context
 ├── constraints
 ├── evidence
 └── confidence
 │
 ▼
B
```

---

# Это уже серьёзная интеллектуальная модель.

---

# ЭТАП 2 — ФИНАЛЬНАЯ АТАКА

## Архитектор B

У нас возникает ещё одна проблема.

Component Graph может начать содержать:

```text id="f6x2m8"
components
patterns
templates
design rules
projects
skills
sources
evidence
```

и снова стать универсальным Knowledge Graph.

---

# Главный архитектор

Запрещаем это.

---

# Component Graph отвечает только за:

```text id="r7m3x9"
WHAT CAN COMPOSE WITH WHAT
```

и:

```text id="c4n8p2"
HOW COMPONENTS RELATE
```

Knowledge Graph отвечает:

```text id="j5q1v7"
WHY WE BELIEVE IT
WHERE IT CAME FROM
WHEN IT IS VALID
```

Design Graph/Profile отвечает:

```text id="w8m2k6"
WHAT VISUAL LANGUAGE IT FOLLOWS
```

---

# И получаем три связанные, но не слитые модели:

```text id="z2x7m5"
COMPONENT GRAPH
      │
      │
      ├──────────────┐
      ▼              ▼
KNOWLEDGE        DESIGN
GRAPH            MODEL
```

---

# Это гораздо чище.

---

# Решение главного архитектора

## Component Graph оставляем.

Но:

> **Component Graph — это не dependency tree и не универсальный Knowledge Graph. Это контекстно-зависимая модель отношений между Component Concepts, Implementations, Patterns, Blocks и их композиционными, семантическими, поведенческими и техническими связями.**

---

# Базовые relation types

```text id="q6v9m2"
STRUCTURAL
├── contains
├── part_of
└── child_of

COMPOSITION
├── composes
├── commonly_used_with
├── requires
└── optional_with

SEMANTIC
├── serves_role
├── alternative_to
└── variant_of

BEHAVIOR
├── triggers
├── controls
└── opens

IMPLEMENTATION
├── implements
├── extends
├── derived_from
└── compatible_with

CONSTRAINT
├── conflicts_with
├── forbidden_with
└── recommended_with
```

Не все отношения обязательны для v1.

---

# Самая важная функция графа

Не:

> «показать связи».

А:

> **найти подходящий подграф для выполнения конкретного UI-намерения.**

---

# Поэтому главный pipeline:

```text id="x3m8q7"
USER INTENT
     ↓
SEMANTIC REQUIREMENTS
     ↓
GRAPH QUERY
     ↓
CONTEXTUAL SUBGRAPH
     ↓
COMPONENT RESOLUTION
     ↓
DESIGN COMPATIBILITY
     ↓
COMPOSITION
```

---

# Главная найденная брешь №17

Мы могли сделать:

> **Component Graph = дерево зависимостей компонентов.**

Это недостаточно.

Правильная модель:

```text id="u7m2k5"
Component Concept
       │
       ├── implementations
       ├── patterns
       ├── composition
       ├── behavior
       ├── semantics
       ├── constraints
       └── design relations
```

При этом:

```text
Component Graph
≠
Knowledge Graph
≠
Design Genome
```

Они связаны, но имеют разные обязанности.

---

# Архитектура после 17

```text id="b8q4m1"
                         AI-LAB
                           │
                ┌──────────┴──────────┐
                │                     │
          CONTROL PLANE          INTELLIGENCE
                │                     │
          Orchestrator        Planner / Router
                │                     │
                └──────────┬──────────┘
                           │
                      KNOWLEDGE
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    Knowledge Graph   Component Graph   Design Model
          │                │                │
      Evidence        Components       Genome/Profile
      Provenance      Patterns         Rules
      Claims          Relations         Tokens
      Sources         Constraints       Layout
          │                │                │
          └────────────────┼────────────────┘
                           │
                       REGISTRY
                           │
                       RESOLVER
                           │
                  ┌────────┴────────┐
                  │                 │
             COMPONENTS         PATTERNS
                  │                 │
                  └────────┬────────┘
                           │
                     COMPOSITION
                           │
                     IMPLEMENTATION
                           │
                     VISUAL / QA
```

---

## Следующий раздел — 18. COMPOSITION ENGINE

И вот здесь мы подходим к одному из центральных вопросов всей системы:

> **Как AI из Component Graph + Design Genome реально собирает интерфейс?**

Не просто:

```text
Button + Card + Table
```

а принимает:

> «Создай dashboard для строительного проекта с фильтрами, ВОР, графиком выполнения, таблицей и мобильной версией»

и превращает это в **структурированный UI-план**, затем в компоненты, затем в код.

Главный спор будет вокруг принципиального выбора:

**даём LLM сразу писать JSX — или сначала создаём промежуточное представление интерфейса (UI IR / Composition Graph), которое можно анализировать, валидировать и только потом компилировать в React/HTML/другие targets?**

---

*This file was created with GPTAha Free. [Upgrade to remove this notice →](https://www.gptaha.com/pricing?utm_source=export_watermark)*
