# 07: CLI Модуль Импорта и Нормализации Компонентов

**Статус:** done

**Блокируется:** 04-button-family-primitives-and-variants

**Закрывает критерии:** К9, К10

## Что построить

Разработчик может выполнить команду:
```bash
node scripts/import-component.mjs --source <url-or-file> --name <component-name> --category <ui|blocks>
```
Скрипт:
1. Выкачивает или читает исходный код компонента.
2. Нормализует жестко закодированные цвета и Tailwind-классы под токены AMANTLE UI (CSS variables).
3. Извлекает внешние npm-зависимости и зависимости других компонентов реестра.
4. Добавляет блок `meta` (author, license, source URL, modified date).
5. Записывает файл в `registry/<category>/<name>.tsx` и регистрирует элемент в `registry.json`.
6. Запускает валидацию `npm run build:registry`.

## Критерии приёмки

- [x] Создан CLI-скрипт `scripts/import-component.mjs` и добавлена команда `npm run import:component` в `package.json`.
- [x] Скрипт корректно заменяет сторонние классы на токены AMANTLE UI (`bg-primary`, `text-muted-foreground` и т.д.).
- [x] Скрипт генерирует метаданные provenance в файле компонента и манифесте `registry.json`.
- [x] Прогон скрипта на тестовом компоненте завершается созданием валидного manifest JSON в `public/r/`.
