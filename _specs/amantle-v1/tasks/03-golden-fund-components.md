# 03: Наполнение «Золотого фонда» (UI Primitives, Blocks, Templates)

**Статус:** done

**Блокируется:** 02 (Сборщик реестра).

**Закрывает критерии:** К2.

## Что построить

Библиотека из 50+ эталонных компонентов «Золотого фонда» в `registry/` с премиальным дизайном, полными типами TypeScript, поддержкой тем и токенов:
1. **Примитивы `registry/ui/` (25+ шт.)**:
   - `button`, `input`, `textarea`, `select`, `dialog`, `sheet`, `dropdown-menu`, `popover`, `tooltip`, `tabs`, `accordion`, `avatar`, `badge`, `card`, `checkbox`, `radio-group`, `switch`, `slider`, `table`, `separator`, `skeleton`, `alert`, `sonner`, `progress`, `toggle`.
2. **Составные секции `registry/blocks/` (20+ шт.)**:
   - Hero: `hero-simple`, `hero-gradient-glow`, `hero-badge-cta`.
   - Pricing: `pricing-cards-tier`, `pricing-comparison-table`.
   - Bento & Features: `bento-grid-3x3`, `feature-cards-grid`, `feature-alternating-rows`.
   - Social Proof: `testimonials-slider`, `stats-counter-strip`, `faq-accordion`.
   - Nav & Footers: `navbar-sticky-blur`, `footer-mega-columns`.
   - Dashboard: `dashboard-stats-kpi`, `dashboard-recent-transactions`.
3. **Шаблоны `registry/templates/` (3 шт.)**:
   - `saas-landing-page`, `modern-dashboard-page`, `auth-split-screen-page`.
- Каждый компонент снабжен JSDoc Provenance-атрибуцией (автор, источник, лицензия MIT).
- Все компоненты успешно собираются сборщиком реестра `npm run build:registry` в `public/r/`.

## Критерии приёмки

- [x] В каталоге `registry/` созданы и типизированы не менее 50 компонентов (25+ примитивов, 20+ блоков, 3 шаблона).
- [x] Все компоненты построены на Tailwind CSS v4 токенах и бесшовно адаптируются под темную/светлую тему.
- [x] Команда `npm run build:registry` компилирует все 50+ компонентов без единой ошибки валидации.
- [x] Файл `public/r/index.json` содержит полный список всех 50+ элементов реестра с категориями и тегами.
- [x] TypeScript тайпчек (`tsc --noEmit`) проходит без ошибок по всему каталогу компонентов.
