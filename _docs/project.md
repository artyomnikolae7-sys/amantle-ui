# AMANTLE UI — О проекте

## Миссия

Построить **платформу-экосистему** уровня shadcn/ui, которая работает как:

1. **Агрегатор** — индексирует сотни open-source shadcn-compatible registry
   (shadcn, Magic UI, Aceternity, Cult UI, 21st.dev и другие)
2. **Нормализатор** — приводит компоненты из разных источников к единому формату,
   проверяет лицензии, добавляет метаданные и source provenance
3. **Каталог/Браузер** — красивый сайт с поиском, фильтрами, preview и сравнением
   (референс: Shoogle.dev, но мощнее)
4. **Composer/Builder** — визуальный конструктор: собирай блоки из компонентов,
   страницы из блоков, шаблоны из страниц
5. **Собственный Registry** — генерирует `registry.json`, совместимый с `npx shadcn add`
6. **AI/MCP-слой** — агент может программно искать, комбинировать и устанавливать
   компоненты

## Для кого

- **Разработчики** — ищут компоненты, добавляют одной командой
- **Дизайнеры** — собирают интерфейсы в визуальном composer
- **AI-агенты** — через MCP получают доступ к registry для автоматической сборки
- **Команды** — приватный registry для внутренних компонентов

## Ключевые принципы

1. **Code ownership** — пользователь получает исходники, а не npm-зависимость
2. **Source provenance** — каждый компонент хранит происхождение, лицензию, список модификаций
3. **Composability** — 50 примитивов → сотни блоков → тысячи комбинаций
4. **Registry-first** — всё описывается через `registry.json`, установка через CLI
5. **AI-native** — MCP, Skills, агенты — первоклассные потребители системы

## Не в рамках (пока)

- Собственный Figma-плагин
- Поддержка не-React фреймворков (Vue, Svelte) — позже
- Платная подписка и биллинг — архитектура под это будет, реализация позже
- Мобильное приложение

## Уровни системы

```
FOUNDATION       → токены, цвета, типографика, spacing, radius, motion
PRIMITIVES       → Button, Input, Card, Badge, Dialog
COMPOUNDS        → SearchBar, FilterBar, DataTable, Form, Navigation
PATTERNS         → Authentication, Dashboard, CRUD, Analytics
BLOCKS           → Hero, Pricing, Features, Testimonials, FAQ
PAGES            → Landing, SaaS, Portfolio, Admin, Documentation
TEMPLATES        → полные стартеры (SaaS starter, Admin starter …)
DISTRIBUTION     → Website, CLI, Registry, MCP, GitHub, API
```
