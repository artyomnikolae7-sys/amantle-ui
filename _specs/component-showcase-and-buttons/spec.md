# Продвинутый Showcase, Playground и Библиотека Кнопок (Buttons Collection)

## Постановка проблемы

Текущий `ShowcaseViewer` в AMANTLE UI ограничен статическим рендером и переключением нескольких предопределенных ширин вьюпорта. Пользователь (разработчик или дизайнер):
1. Не может интерактивно экспериментировать с поведением и пропсами компонентов (варианты, размеры, состояния `loading`, `disabled`, иконки, скорость анимации) непосредственно в браузере.
2. Не имеет удобного инструмента для интеграции компонентов в AI-воркфлоу (Cursor, Claude Code, Antigravity) — отсутствует генерация подготовленных промптов с контекстом дизайн-токенов Tailwind v4, конфигурационных манифестов и markdown-документации.
3. В дизайн-системе отсутствует вариативная база кнопок: нет интерактивных микро-анимаций (магнитные кнопки, ripple-эффекты, shimmer, раскрывающиеся иконки) и составных групп кнопок (segmented controls, split dropdowns, toolbars).
4. Процесс добавления сторонних открытых компонентов (из репозиториев вроде ReUI, Bag-UI, Spell-UI, Kibo UI) требует рутинной ручной работы по нормализации стилей под токены AMANTLE UI и фиксации source provenance.

## Решение

1. **Модернизация ShowcaseViewer**:
   - Верхний тулбар: выпадающее меню **«Copy for AI»**, кнопка добавления в закладки `[🔖]`, отзывчивый переключатель девайсов (`Desktop 100%`, `Tablet 768px`, `Mobile 375px`) и кнопка перезагрузки/сброса холста `[🔄]`.
   - Подменю **«Copy for AI»** включает: `Copy prompt` (с контекстом Tailwind v4 CSS variables), `Copy configuration` (JSON манифест), `Copy as markdown`, `Copy install command` (`npx shadcn add ...`).
2. **Интерактивный Playground**:
   - Новая вкладка **«Playground»** рядом с «Preview» и «Code» с панелью управления свойствами компонентов.
   - Двусторонняя синхронизация: изменение пропсов в Playground мгновенно обновляет визуальный рендер компонента и генерируемый код во вкладке «Code».
3. **Коллекция кнопок (14 компонентов в 3 семействах)**:
   - *Семейство 1 (Примитивы и Варианты)*: Button (Default, Secondary, Outline, Ghost, Link, Destructive, Glassmorphism, Gradient Glow).
   - *Семейство 2 (Interactive & Hover Animations)*: Button Magnetic, Button Ripple, Button Shimmer/Border Beam, Button Expandable Icon, Button Tilt 3D.
   - *Семейство 3 (Button Groups & Splits)*: Button Group (Segmented Control, Split Dropdown Button, Linked Icon Group, Toolbar Group).
4. **Скрипт нормализации и импорта**:
   - Утилита `scripts/import-component.mjs` для затягивания исходников компонентов из внешних shadcn-совместимых репозиториев с автоматической адаптацией под токены AMANTLE UI и сохранением `meta.source`, `meta.license`, `meta.author`.

## Как выглядит готовое

Сквозной пользовательский сценарий:
1. Пользователь заходит на страницу компонента каталога: `/ui/button`, `/ui/button-interactive` или `/ui/button-group`.
2. На экране отображается карточка витрины с аккуратной шапкой:
   - Слева тумблер табов: `[👁 Preview]` | `[<> Code]` | `[🎛 Playground]`, и бейдж с именем компонента и кнопкой быстрого копирования названия/кода.
   - Справа компактные контролы: кнопка меню `[Copy for AI ⌵]`, кнопка закладок `[🔖]`, иконки устройств `[🖥 100%] [📱 768px] [📱 375px]` и кнопка сброса `[🔄]`.
3. При клике на `[Copy for AI ⌵]` открывается дропдаун:
   - `Copy prompt` — копирует в буфер системный промпт с внедренными CSS-токенами Tailwind v4 для вставки в AI-редакторы без риска поломки стилей.
   - `Copy configuration` — копирует JSON-спецификацию зависимостей и реестра.
   - `Copy as markdown` — копирует форматированный markdown со сниппетом.
   - `Copy install command` — копирует `npx shadcn add http://...`.
   Каждое действие сопровождается аккуратным Sonner-уведомлением.
4. Во вкладке `Playground` пользователь видит контролы: селекты вариантов (`variant`), размеров (`size`), чекбоксы (`loading`, `disabled`), инпут текста и выбор иконки. При изменении контролов компонент мгновенно реагирует на холсте, а во вкладке `Code` отображается актуальный JSX вызова.
5. При нажатии на кнопку `[🔄]` холст перезагружается и сбрасывает интерактивные пропсы к дефолтным.
6. В терминале разработчик может вызвать `node scripts/import-component.mjs <url/path>` для автоматической обработки и включения нового открытого компонента в реестр.

## Критерии приёмки

- **К1**: В `ShowcaseViewer` реализован тулбар управления холстом с селектором устройств (`Desktop 100%`, `Tablet 768px`, `Mobile 375px`), кнопкой сброса холста `[🔄]` и кнопкой закладок `[🔖]`.
- **К2**: Реализовано выпадающее меню `Copy for AI` с 4 пунктами (`Copy prompt`, `Copy configuration`, `Copy as markdown`, `Copy install command`), каждое действие корректно копирует данные в буфер обмена и вызывает toast-уведомление Sonner.
- **К3**: `Copy prompt` генерирует промпт с включением манифеста компонента и контекста Tailwind v4 CSS Variables (`--background`, `--foreground`, `--primary`, `--radius` и т.д.).
- **К4**: Реализован таб `Playground` с интерактивными элементами управления пропсами компонентов (селекты вариантов и размеров, свитчи `loading`/`disabled`, поля текстовых меток).
- **К5**: Вкладка `Code` динамически отображает JSX-код вызова компонента с учётом параметров, выбранных пользователем в Playground.
- **К6**: Реализовано Семейство 1 кнопок (Default, Secondary, Outline, Ghost, Link, Destructive, Glass, Gradient Glow) на дизайн-токенах проекта в `registry/ui/button.tsx`.
- **К7**: Реализовано Семейство 2 интерактивных кнопок с микро-анимациями (Magnetic Button, Ripple Button, Shimmer/Border Beam Button, Expandable Icon Button, Tilt 3D Button) в `registry/ui/`.
- **К8**: Реализовано Семейство 3 кнопочных групп (Segmented Control, Split Dropdown Button, Linked Icon Group, Toolbar Group) в `registry/ui/button-group.tsx`.
- **К9**: Создан CLI-инструмент `scripts/import-component.mjs` для импорта, токенизации и регистрации компонентов из открытых репозиториев с сохранением блока `meta` (author, license, source).
- **К10**: Все созданные компоненты зарегистрированы в `registry.json` и собираются через `npm run build:registry` в валидные JSON-манифесты `public/r/*.json`.

## Пользовательские истории

1. Как frontend-разработчик, я хочу протестировать кнопку на мобильном экране прямо в браузере, чтобы убедиться в её корректном переносе и touch-области без открытия devtools.
2. Как разработчик, использующий Cursor/Antigravity, я хочу скопировать готовый AI-промпт кнопки в один клик (`Copy prompt`), чтобы агент сразу встроил компонент с правильными Tailwind v4 токенами без галлюцинаций по стилям.
3. Как инженер, я хочу скопировать команду `npx shadcn add` для любого варианта кнопки, чтобы установить исходник прямо в свой репозиторий.
4. Как дизайнер, я хочу включить флаг `loading` и сменить вариант на `glass` в интерактивном Playground, чтобы увидеть поведение спиннера и прозрачности кнопки вживую.
5. Как разработчик, я хочу скопировать JSX-код именно с теми пропсами, которые я только что настроил в Playground, чтобы не перепечатывать их вручную.
6. Как создатель лендингов, я хочу использовать Magnetic Button, чтобы кнопка эффектно притягивалась к курсору пользователя и повышала CTR целевого действия.
7. Как разработчик SaaS-дашборда, я хочу использовать Split Button с выпадающим дропдауном, чтобы объединить основное действие («Сохранить») и дополнительные («Сохранить как черновик»).
8. Как UI-разработчик, я хочу использовать Segmented Control из семейств кнопочных групп для чистого переключения представлений данных.
9. Как контрибьютор дизайн-системы, я хочу запускать скрипт импорта компонентов, чтобы быстро конвертировать найденные кнопки из ReUI / Bag-UI в единый стандарт AMANTLE UI.
10. Как архитектор системы, я хочу видеть в каждом компоненте блок `source provenance`, чтобы соблюдать лицензионную чистоту открытого кода (MIT/Apache 2.0).
11. Как пользователь, я хочу сбросить состояние холста кнопкой `[🔄]`, чтобы вернуть настройки превью к исходным значениям без перезагрузки всей страницы.
12. Как разработчик, я хочу иметь доступ к Shimmer/Border Beam кнопке для премиального оформления акцентных Call-To-Action блоков.

## Решения по реализации

### 1. Архитектура ShowcaseViewer & Playground (`components/showcase-viewer.tsx`)
- Добавление стейта пропсов компонента `playgroundProps: Record<string, any>`.
- Спецификация контролов в метаданных реестра: добавление поля `controls` в манифест компонента (`registry.json`), определяющего доступные варианты, типы инпутов (`select`, `boolean`, `text`, `number`) и дефолтные значения.
- Генератор кода: функция `generateUsageCode(item, playgroundProps)`, собирающая читаемый JSX-сниппет.
- AI Prompt Builder: функция `buildAiPrompt(item, currentProps)` формирует контекст:
  ```markdown
  You are integrating the "${item.title}" component from AMANTLE UI Design System into a Next.js / React application.
  Technology Stack: Tailwind CSS v4, Lucide React, Radix UI.
  Design Tokens (CSS Variables): --primary, --primary-foreground, --background, --foreground, --radius.
  Component Source Code:
  \`\`\`tsx
  ${item.files[0]?.content}
  \`\`\`
  Usage example:
  \`\`\`tsx
  ${usageCode}
  \`\`\`
  Rules:
  - Do not overwrite existing global CSS variables.
  - Preserve source provenance and accessibility attributes.
  ```

### 2. Структура компонентов кнопок (`registry/ui/`)
- `registry/ui/button.tsx`: базовые варианты (`default`, `secondary`, `destructive`, `outline`, `ghost`, `link`, `glass`, `glow`), поддержка иконок слева/справа, индикатор `loading`.
- `registry/ui/button-magnetic.tsx`: кнопка с физикой притяжения к курсору на Framer Motion / spring-математике.
- `registry/ui/button-ripple.tsx`: кнопка с материальным ripple-эффектом по координатам клика.
- `registry/ui/button-shimmer.tsx`: акцентная кнопка с анимированной бегущей границей / световым бликом.
- `registry/ui/button-expandable.tsx`: кнопка с плавно раскрывающейся иконкой и текстом при наведении.
- `registry/ui/button-tilt.tsx`: 3D-тилт кнопка с расчетом угла наклона по положению мыши.
- `registry/ui/button-group.tsx`: составной компонент для групп кнопок (Linked Group, Segmented Control, Split Dropdown Button).

### 3. CLI модуль импорта (`scripts/import-component.mjs`)
- Скрипт принимает URL или локальный путь к файлу компонента.
- Автоматически парсит зависимости, очищает жестко закодированные Tailwind-классы (`bg-blue-600` → `bg-primary`, `rounded-md` → `rounded-[var(--radius-md)]`), подставляет стандартный JSDoc с provenance и обновляет `registry.json`.

### 4. Внешние зависимости и сервисы
- Новые внешние зависимости **не добавляются**. Все анимации и взаимодействия строятся на уже имеющихся в проекте `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`, `@radix-ui/react-slot`.

## Решения по тестированию

- **Шов 1 (Showcase & AI Генератор)**: Юнит-тестирование функций генерации AI-промпта, конфигурации и команды установки (`scripts/test-ai-prompt.test.ts` или расширение `test-mcp.mjs`).
- **Шов 2 (Сборка реестра)**: Тестирование валидности сборки всех кнопочных компонентов через `npm run build:registry` — проверка генерации корректных JSON-файлов в `public/r/*.json`.
- **Шов 3 (Нормализация импорта)**: Проверка корректной обработки компонента тестовым прогоном `node scripts/import-component.mjs`.

## Вне рамок

- Визуальный Drag-and-Drop конструктор страниц (выделен в отдельную подсистему `(builder)` / Composer).
- Поддержка сторонних не-React фреймворков (Vue, Svelte).

## Прочие заметки

Компоненты кнопок должны строго поддерживать режим высокой контрастности и `prefers-reduced-motion` через утилиты `motion-reduce:`.
