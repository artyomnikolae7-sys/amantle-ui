# 01: Анализатор и Нормализатор Компонентов (Pipeline Core)

**Статус:** done

**Блокируется:** ничем (можно брать сразу)

**Закрывает критерии:** К1, К2, К3

## Что построить

Создать скрипт `scripts/pipeline.mjs` и модуль анализатора:
1. Автоматический разбор исходника (из URL, файла или сырого кода).
2. Извлечение списка пропсов (`interface ...Props` или `type ...Props`):
   - Варианты (`variant: 'default' | 'secondary' | ...`)
   - Размеры (`size: 'sm' | 'default' | 'lg' | ...`)
   - Булевы флаги (`loading`, `disabled`, `open`, `active` и др.)
   - Текстовые поля (`label`, `placeholder`, `title`)
3. Извлечение зависимостей (Lucide icons, Radix UI пакетов, class-variance-authority).
4. Глубокая нормализация цветов и отступов под семантические токены AMANTLE UI (Tailwind v4 CSS variables).
5. Формирование стандартизированного JSDoc с provenance (`@source`, `@author`, `@license`, `@modified`).

## Критерии приёмки

- [x] В `scripts/pipeline.mjs` реализован метод `analyzeComponent(sourceCode)`.
- [x] Метод корректно извлекает варианты, размеры, булевы свойства и зависимости.
- [x] Метод `adaptComponent(sourceCode, meta)` заменяет жесткие классы на семантические токены AMANTLE UI.
- [x] Результат адаптации сохраняется в `registry/<category>/<name>.tsx` с JSDoc provenance.
