# AMANTLE UI — Стек технологий

## Фреймворк и рантайм

| Технология | Версия | Зачем |
|---|---|---|
| Next.js | 15+ (App Router) | SSR/SSG сайт-каталог, API-роуты, ISR для preview |
| React | 19+ | UI-рендеринг |
| TypeScript | 5.x | строгая типизация |
| Node.js | 22+ LTS | серверная часть |

## Стилизация

| Технология | Зачем |
|---|---|
| Tailwind CSS v4 | utility-first стилизация |
| CSS Variables | дизайн-токены, темизация |
| `tailwind-merge` | безопасное объединение классов |
| `class-variance-authority` (CVA) | варианты компонентов |
| `clsx` / `cn()` | условные классы |

## UI-примитивы (базовые зависимости)

| Библиотека | Зачем |
|---|---|
| Radix UI | headless-примитивы (Dialog, Popover, Select …) |
| Lucide React | иконки |
| Framer Motion | анимации |
| Recharts | графики |

## Registry и CLI

| Технология | Зачем |
|---|---|
| `shadcn` CLI | `npx shadcn add/build/search` — ядро registry |
| `registry.json` | каталог всех registry items |
| Собственный Registry API | REST endpoint: `GET /r/{name}.json` |

## База данных и хранение

| Технология | Зачем |
|---|---|
| Определится позже | хранение индекса компонентов, метаданных, provenance |
| GitHub API | получение исходников из registry-репозиториев |

## Инструменты разработки

| Технология | Зачем |
|---|---|
| pnpm | менеджер пакетов |
| Turborepo | monorepo-оркестрация (если понадобится) |
| ESLint | линтер |
| Prettier | форматирование |
| Vitest | тесты |

## AI / MCP

| Технология | Зачем |
|---|---|
| MCP Server | доступ к registry для AI-агентов |
| shadcn MCP | встроенная MCP-поддержка из shadcn CLI |

## Что НЕ в стеке (и почему)

- **npm-пакет для компонентов** — код копируется, а не устанавливается как зависимость
- **Storybook** — preview будет встроен в сайт-каталог, отдельный Storybook не нужен
- **Styled Components / Emotion** — Tailwind покрывает всё
- **Redux / Zustand** — на текущем этапе state management через React hooks и context
