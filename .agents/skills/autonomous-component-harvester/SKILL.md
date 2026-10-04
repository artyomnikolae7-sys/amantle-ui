---
name: autonomous-component-harvester
description: Бесперебойный конвейер синтеза и портирования компонентов из внешних библиотек (React Bits, Magic UI, Aceternity UI, 21st.dev) в дизайн-систему AMANTLE UI с генерацией вариантов дизайна, тестированием и авторелизом.
argument-hint: [--site <site>] [--batch <count>] [--continuous] [--status]
disable-model-invocation: false
---

# Autonomous Component Harvester Skill

Этот навык обеспечивает автономное, бесперебойное извлечение, адаптацию и интеграцию компонентов из открытых UI-библиотек в экосистему AMANTLE UI.

## Принципы работы

1. **Бесперебойность (Fault Tolerance):**
   - Каждый компонент изолирован в транзакции: парсинг -> адаптация -> генерация вариантов -> регистрация -> проверка.
   - Сбой одного компонента логируется в `_harvest/errors.log`, конвейер не останавливается и переходит к следующему.
   - Состояние очереди сохраняется в `_harvest/state.json`.

2. **Стандарты AMANTLE UI:**
   - Стек: Next.js 15, React 19, Tailwind CSS v4, TypeScript.
   - Никаких тяжелых внешних анимационных фреймворков: чистый CSS, Tailwind utility classes, нативные Web Animations API и пружинные кривые Emil Kowalski:
     - `springSmooth`: `cubic-bezier(0.23, 1, 0.32, 1)`
     - `springSnappy`: `cubic-bezier(0.16, 1, 0.3, 1)`
     - `activeScale`: `0.97`
     - Учет `motion-reduce:transition-none` для доступности WCAG AAA.
   - Обязательный JSDoc Provenance Header:
     ```tsx
     /**
      * @component <ComponentName>
      * @source <site-source-url>
      * @author <original-author>
      * @license MIT
      * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
      */
     ```
   - Запрет: Не портировать canvas/WebGL 3D бэкграунды (фоны). Только интерактивные элементы, анимации текста, карточки, меню, кнопки, инпуты и составные блоки.

3. **Мультивариативность:**
   - Для каждого портируемого интерактивного примитива создаются или внедряются 2 альтернативных визуальных стиля:
     - **Neo-Brutalist:** контрастные черные границы `border-2 border-foreground`, жесткая тень `shadow-[3px_3px_0px_#000]`, дерзкие углы.
     - **Cyber-Glass:** акриловый блюр `backdrop-blur-md`, тонкий неоновый градиентный контур, полупрозрачный фон.

## Команды управления

```bash
# Проверить текущий статус очереди и портированных компонентов
node scripts/harvester-engine.mjs --status

# Запустить портирование следующей пачки из N компонентов для конкретного сайта
node scripts/harvester-engine.mjs --site reactbits --batch 5

# Запустить непрерывный цикл по всем доступным сайтам
node scripts/harvester-engine.mjs --continuous

# Запустить проверку синхронизации реестра и типов
node scripts/check-sync.mjs
npm run test
```
