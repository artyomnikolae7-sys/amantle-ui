# AMANTLE UI CLI (`amantle-ui`)

Official command-line interface for the **AMANTLE UI Design System** — an open-source registry aggregating **2,051 components, blocks, and templates** from 10+ top-tier ecosystems (Shadcn, Magic UI, Aceternity UI, 21st.dev/Kokonut, Origin UI, Tremor Raw, Cult UI, Hover.dev, HyperUI, React Bits).

[![npm version](https://img.shields.io/npm/v/amantle-ui.svg)](https://www.npmjs.com/package/amantle-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Quick Start

You don't need to install anything globally! Simply run with `npx`:

```bash
# 1. Initialize AMANTLE UI in your Next.js / React project:
npx amantle-ui init

# 2. Add any of the 2,051 components:
npx amantle-ui add button card input

# 3. Add composite blocks & marketing templates:
npx amantle-ui add pricing-cards-tier feature-bento-grid
```

---

## 📦 Global Installation (Optional)

```bash
npm install -g amantle-ui
# or
pnpm add -g amantle-ui
# or
bun add -g amantle-ui
```

Once installed globally, you can use the short command `amantle`:

```bash
amantle add button
amantle search bento
```

---

## 🚀 Available Commands

### `amantle-ui init`
Initializes AMANTLE UI configuration in your project:
- Creates `amantle.json` (or updates existing `components.json`).
- Generates `lib/utils.ts` with standard `cn()` class helper.
- Configures directory aliases (`@/components/ui`, `@/lib/utils`).
- Installs necessary base dependencies (`clsx`, `tailwind-merge`, `lucide-react`, `class-variance-authority`).

```bash
npx amantle-ui init
```

### `amantle-ui add <components...>`
Fetches component source files directly from the live AMANTLE JSON registry (`https://amantle-ui-x.vercel.app/r/[name].json`) and automatically resolves all dependencies.

```bash
# Add a single component:
npx amantle-ui add button

# Add multiple components at once:
npx amantle-ui add button card dialog tooltip badge

# Add Tremor telemetry cards:
npx amantle-ui add tremor-metric-card tremor-sparkline-area
```

### `amantle-ui list [category]`
Lists available components by category (`all`, `ui`, `blocks`, `templates`).

```bash
npx amantle-ui list
npx amantle-ui list blocks
```

### `amantle-ui search <query>`
Searches the entire 2,051-component catalog by keywords, tags, or component names.

```bash
npx amantle-ui search marquee
npx amantle-ui search chart
npx amantle-ui search rating
```

### `amantle-ui theme [preset] [radius]`
Outputs clean CSS variables for your `globals.css` with your chosen theme and border radius.

Presets: `violet`, `zinc`, `blue`, `emerald`, `rose`, `amber`.

```bash
npx amantle-ui theme emerald 0.75rem
```

---

## 🌐 Live Ecosystem & Interactive Studio

- **Official Website:** [https://amantle-ui-x.vercel.app/](https://amantle-ui-x.vercel.app/)
- **Interactive Studio Composer:** [https://amantle-ui-x.vercel.app/studio](https://amantle-ui-x.vercel.app/studio)
- **JSON Registry Endpoint:** [https://amantle-ui-x.vercel.app/r/index.json](https://amantle-ui-x.vercel.app/r/index.json)
- **GitHub Repository:** [https://github.com/artyomnikolae7-sys/amantle-ui](https://github.com/artyomnikolae7-sys/amantle-ui)

---

## 📄 License
MIT © AMANTLE UI Team. All harvested components preserve their original author attributions and open-source licenses.
