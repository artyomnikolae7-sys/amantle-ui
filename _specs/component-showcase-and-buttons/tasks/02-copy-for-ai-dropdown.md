# 02: Выпадающее меню «Copy for AI» с Tailwind v4 Контекстом

**Статус:** done

**Блокируется:** 01-showcase-toolbar-and-viewports

**Закрывает критерии:** К2, К3

## Что построить

Пользователь может в один клик из выпадающего меню «Copy for AI» скопировать готовые форматы компонента для нейросетей, CLI и документации:
- `Copy prompt`: генерирует структурированный промпт для LLM/Cursor/Antigravity со строгой фиксацией Tailwind v4 CSS Variables (`--primary`, `--background`, `--radius`, `@theme`), предотвращая разрушение стилей при интеграции компонента.
- `Copy configuration`: выгружает в буфер JSON-манифест зависимостей и реестра.
- `Copy as markdown`: копирует оформленный блок Markdown с кодом и метаданными.
- `Copy install command`: копирует команду `npx shadcn add <url>`.
- Каждое действие сопровождается аккуратным всплывающим Sonner-уведомлением.

## Критерии приёмки

- [x] В тулбаре Showcase реализовано выпадающее меню «Copy for AI» с иконкой Sparkles и шевроном.
- [x] Меню содержит 4 пункта: `Copy prompt`, `Copy configuration`, `Copy as markdown`, `Copy install command`.
- [x] Опция `Copy prompt` формирует полный контекст с метаданными Tailwind v4, исходником компонента и инструкцией по интеграции.
- [x] Опция `Copy configuration` копирует валидный JSON с зависимостями (`dependencies`, `registryDependencies`).
- [x] Опция `Copy install command` копирует корректный CLI-вызов для добавления компонента.
- [x] Каждое копирование вызывает toast-уведомление через Sonner.

