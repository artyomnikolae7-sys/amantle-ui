# Масштабирование AMANTLE UI до 150 Компонентов (150-Components Milestone)

## Постановка проблемы

В дизайн-системе AMANTLE UI успешно зарегистрировано и верифицировано 100 компонентов (50 UI, 42 Blocks, 8 Templates). Для вывода библиотеки на лидирующий уровень среди дизайн-систем (экосистема уровня shadcn/ui, Aceternity UI, Magic UI, Tremor) необходимо провести следующий масштабный прогон и добавить **ещё 50 компонентов**, доведя каталог до **ровно 150 компонентов**.

## Исследование сайтов и источников вдохновения

В ходе исследования топовых дизайн-систем и библиотек компонентов (shadcn/ui, Aceternity UI, Magic UI, Origin UI, Tremor) отобраны наиболее востребованные паттерны современного веб-дизайна 2024–2026 годов:
1. **shadcn/ui & Radix/Primitives**: Command Menu (Cmd+K), Drawer (iOS Sheet), Context Menu, Hover Card, Resizable Panels, Menubar, Navigation Menu, Aspect Ratio, Pagination, Calendar Picker, Color Picker, File Upload Dropzone, Tree View.
2. **Magic UI & Aceternity UI**: Border Beam, Shine Border, Meteors, Sparkles Text, Word Rotate, Typing Text, Number Ticker, Particles Background, Dock Bar, Confetti, Hero Lamp, Hero Retro Grid, Canvas Reveal, Sticky Scroll Reveal, Infinite Slider.
3. **AI & Modern SaaS Blocks**: AI Chat Prompt, AI Generation Card, AI Code Diff, Bento Grid Interactive, Pricing Tier Matrix, Stats Glass Grid, CTA Lamp Glow, Floating Dock Navbar, Server Monitoring, Kanban Board, Table Pagination, Image Comparison Slider, Cookie Banner.
4. **App & Page Templates**: AI Workspace, Developer Documentation, Analytics Dashboard, Onboarding Wizard, Coming Soon Waitlist.

---

## План масштабирования (+50 компонентов)

### Пакет 1: UI Primitives & Motion Compounds (+25 компонентов, итого 75 UI)
1. `command-menu` — командная палитра (Cmd+K) с фильтрацией, группами и шорткатами
2. `drawer-bottom` — нижняя выезжающая шторка (iOS-style bottom sheet)
3. `context-menu` — контекстное меню по правому клику мыши
4. `hover-card` — всплывающая карточка предпросмотра профиля/ссылки при наведении
5. `resizable-panel` — адаптивные разделяемые панели с интерактивным сплиттером
6. `menubar` — верхнее меню десктопного приложения (File, Edit, View, Help)
7. `navigation-menu` — адаптивное мега-меню со сложными дропдаунами
8. `aspect-ratio` — медиа-контейнер с фиксацией пропорций (16:9, 4:3, 1:1, 21:9)
9. `pagination` — панель нумерации страниц с кнопками и многоточием
10. `calendar-picker` — интерактивный календарный пикер с выбором дат
11. `color-picker` — визуальный селектор оттенка с палитрой и HEX кодом
12. `file-upload-dropzone` — drag-and-drop область загрузки файлов с индикатором
13. `tree-view` — иерархическое дерево файлов и папок с раскрытием
14. `badge-shine` — бейдж со скользящим световым бликом (Shine Border)
15. `badge-glow` — неоновый бейдж со свечением в акцентных тонах
16. `meteors` — карточка с падающими светящимися метеорами
17. `sparkles-text` — анимированный текст с вспыхивающими искрами
18. `word-rotate` — автоматическая ротация ключевых слов заголовка
19. `typing-text` — эффект печатающегося текста с мигающей кареткой
20. `number-ticker` — анимированный счетчик цифр с плавным переходом
21. `border-beam` — блок с лучом, скользящим по границе периметра
22. `shine-border` — компонент со светящейся градиентной окантовкой
23. `particles-background` — интерактивный холст микрочастиц с реакцией на мышь
24. `dock-bar` — плавающая macOS-док панель с эффектом лупы при наведении
25. `confetti` — триггер залпа конфетти при успехе или оформлении заказа

### Пакет 2: Blocks для SaaS, AI, DevTools & Marketing (+20 компонентов, итого 62 Blocks)
26. `hero-lamp` — hero-секция со световым неоновым конусом (Lamp Effect)
27. `hero-retro-grid` — hero с киберпанк 3D-сеткой в перспективе
28. `hero-canvas-reveal` — интерактивный визуальный блок с матричной анимацией
29. `ai-chat-prompt` — плавающий инпут чата с AI, быстрым выбором моделей и промптов
30. `ai-generation-card` — карточка статуса генерации с шиммером и выводом артефактов
31. `ai-code-diff` — блок сравнения версий кода со стилизованным синтаксисом
32. `bento-grid-interactive` — интерактивная бенто-сетка с живыми виджетами
33. `sticky-scroll-reveal` — пошаговый показ преимуществ с фиксацией визуала при скролле
34. `pricing-tier-matrix` — развернутая матрица тарифов с бейджем популярного плана
35. `testimonials-infinite-slider` — две встречные бесконечные ленты отзывов клиентов
36. `stats-glass-grid` — неоморфичная сетка показателей роста с микро-графиками
37. `cta-lamp-glow` — конверсионный блок регистрации со световым куполом
38. `navbar-floating-dock` — островной парящий навбар с иконками разделов
39. `footer-columns-newsletter` — 4-колоночный футер с формой подписки и индикатором аптайма
40. `dashboard-server-monitoring` — блок системного мониторинга серверов (CPU, RAM, Network)
41. `dashboard-kanban-board` — интерактивная канбан-доска статусов задач
42. `dashboard-table-pagination` — таблица данных с поиском, фильтром статуса и пагинацией
43. `integration-ecosystem-grid` — сетка поддерживаемых экосистем и интеграций
44. `comparison-slider-image` — интерактивный слайдер сравнения "До" и "После"
45. `cookie-consent-banner` — плавающее уведомление о файлах cookie с выбором категорий

### Пакет 3: Templates (Полноценные экраны и приложения) (+5 компонентов, итого 13 Templates)
46. `ai-workspace-template` — экран генеративного ИИ-рабочего места (сайдбар, чат, контекст)
47. `developer-docs-template` — документация с навигацией по главам, кодом и On this page
48. `analytics-dashboard-template` — дашборд маркетинга и метрик с карточками и воронкой
49. `onboarding-wizard-template` — многошаговый мастер первоначальной настройки системы
50. `coming-soon-waitlist-template` — посадочная страница запуска продукта со сбором email

---

## Архитектура и Стандарты Реализации

1. **Токены и Стили:**
   - Все новые компоненты строятся исключительно на семантических переменных темы: `bg-background`, `bg-card`, `bg-primary`, `border-border`, `text-muted-foreground`, `ring-primary`, `rounded-lg`.
   - Включают класс `motion-reduce:transition-none` для доступности.
2. **Метаданные (Source Provenance):**
   - Каждый файл снабжается JSDoc шапкой `@source`, `@author`, `@license`, `@modified`.
3. **Обвязки (Showcase, Playground & Previews):**
   - Каждый компонент регистрируется в `lib/components-map.tsx` с чистым рендером и тестовыми данными.
   - Каждый компонент получает валидную схему в `lib/playground-schemas.ts` для интерактивного управления пропсами.
4. **Сборка и Валидация:**
   - `buildRegistry()` генерирует 150 манифестов в `public/r/*.json` и обновляет `public/r/index.json`.
   - Сквозной скрипт `scripts/audit-routes.mjs` проверяет все 150 роутов `/preview/<category>/<name>` на статус 200 OK.
   - Тесты MCP Tools (`npm test`) подтверждают работоспособность экосистемы 10/10.
