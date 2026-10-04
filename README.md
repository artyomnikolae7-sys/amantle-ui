# AMANTLE UI DESIGN SYSTEM

[![Release](https://img.shields.io/badge/release-v0.2.1-blue.svg)](https://github.com/artyomnikolae7-sys/amantle-ui/releases)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Components](https://img.shields.io/badge/components-205_items-emerald.svg)](./public/r/index.json)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fartyomnikolae7-sys%2Famantle-ui)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/artyomnikolae7-sys/amantle-ui)

Экосистема уровня **shadcn/ui**: собственный registry из **205 компонентов**, блоков, шаблонов и тем с агрегацией из внешних open-source registry, визуальным Showcase-каталогом, интерактивным Playground и AI/MCP-интеграцией.

---

## ⚡ Как запустить сайт прямо сейчас

### Способ 1: В 1 клик на Vercel (Публичный хостинг за 60 секунд)
Нажмите кнопку ниже, чтобы развернуть живой сайт на бесплатном домене Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fartyomnikolae7-sys%2Famantle-ui)

### Способ 2: В браузере через GitHub Codespaces (Без установки на ПК)
Прямо на GitHub можно запустить сайт в облачной среде VS Code с автозапуском dev-сервера:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/artyomnikolae7-sys/amantle-ui)

*При открытии Codespaces автоматически выполнит `npm install`, запустит `npm run dev` и откроет всплывающее окно с живым сайтом на порту 3000.*

### Способ 3: Запуск локально на компьютере
```bash
# 1. Клонировать репозиторий
git clone https://github.com/artyomnikolae7-sys/amantle-ui.git
cd amantle-ui

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер
npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000) в браузере.

---

## 📦 Структура Реестра (205 компонентов)

| Раздел | Количество | Описание |
|---|---|---|
| **UI Primitives** (`registry/ui/`) | **126** | Кнопки, инпуты, бейджи, свитчи, слайдеры, карточки, диалоги, тултипы, селекты |
| **Blocks** (`registry/blocks/`) | **66** | Hero-секции, ценовые таблицы, bento-сетки, фичи, отзывы, дашборды, навигация |
| **Templates** (`registry/templates/`) | **13** | SaaS Landing, AI Workspace, Analytics Dashboard, Docs, Onboarding Wizard, Settings |
| **ИТОГО** | **205** | Все компоненты доступны через `npx shadcn add` манифесты |

---

## 🛠 Доступные команды

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск локального Next.js сервера разработки |
| `npm run build` | Компиляция оптимизированного продакшен-бандла |
| `npm run test` | Запуск тестов Model Context Protocol (MCP) и реестра |
| `npm run deploy` | Автоматическое версионирование, pre-flight тесты и релиз |
| `npm run build:registry` | Сборка статических JSON-манифестов реестра в `public/r/` |
| `npm run pipeline` | 3-минутный конвейер импорта и токенизации новых компонентов |

---

## 📚 Документация проекта

- [**Отчёт об аудите всех 205 компонентов (Таблица)**](_docs/COMPONENT_EVOLUTION_LOG.md)
- [**Детализированный лог выполнения конвейера**](_docs/COMPONENT_PIPELINE_EXECUTION.log)
- [**Спецификация автономного конвейера захвата и синтеза**](_specs/autonomous-ui-capture-pipeline/spec.md)
- [**Стек технологий**](_docs/stack.md)
- [**Дизайн-система и токены**](_docs/design-system.md)
- [**Инструкции для ИИ-агентов**](AGENTS.md)
