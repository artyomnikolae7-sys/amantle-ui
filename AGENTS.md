# AMANTLE UI DESIGN SYSTEM

Экосистема уровня shadcn/ui: собственный registry компонентов, блоков, шаблонов и тем
с агрегацией из внешних open-source registry, визуальным composer и AI/MCP-интеграцией.

## Документы

- `_docs/project.md` — зачем продукт, для кого, ключевые принципы и рамки
- `_docs/stack.md` — что уже в стеке; читать перед вводом новой зависимости
- `_docs/design-system.md` — токены и компоненты; читать перед любой работой с интерфейсом

## Правила

- Язык проекта: TypeScript, React, Tailwind CSS
- Фреймворк: Next.js (App Router)
- Тесты гоняются командой `npm run test`
- Линтер: `npm run lint`
- Компоненты хранятся в `registry/` с описанием в `registry.json`
- Стиль: функциональные компоненты с хуками, без class components
- Именование: kebab-case для файлов, PascalCase для компонентов, camelCase для переменных
- CSS: Tailwind utility-first + CSS-переменные для дизайн-токенов
- Каждый компонент должен иметь `source provenance` (откуда пришёл, лицензия, модификации)
- Не добавлять новую зависимость, если аналог уже есть в стеке — сначала проверить `_docs/stack.md`
- Презентационный слой: `app/**/components/**`, `components/**`, `registry/**`

## Структура проекта

```
├── app/                  Next.js App Router — страницы и лейауты
│   ├── (marketing)/      публичный сайт-каталог
│   ├── (builder)/        визуальный composer
│   └── api/              API-роуты
├── components/           общие UI-компоненты приложения
├── registry/             исходники registry items
│   ├── ui/               примитивы (Button, Input, Card …)
│   ├── blocks/           составные блоки (Hero, Pricing, Dashboard …)
│   ├── templates/        полноценные шаблоны страниц
│   └── themes/           темы оформления
├── lib/                  утилиты, хелперы, SDK
├── _docs/                документация проекта
├── _specs/               спецификации фичей (создаётся конвейером)
└── public/               статика
    └── r/                билд registry (JSON)
```
