# 02: Сборщик реестра и схема данных (Registry Schema & Build Pipeline)

**Статус:** todo

**Блокируется:** 01 (Инициализация ядра проекта).

**Закрывает критерии:** К6, К7, К8.

## Что построить

Сквозной механизм валидации и компиляции компонентов в формат публичного реестра shadcn:
- Zod-схема реестра (`RegistryItemSchema`, `RegistrySchema`) в соответствии со спецификацией shadcn/ui registry v2.
- Скрипт сборщика `scripts/build-registry.ts` (`npm run build:registry`):
  - Сканирует каталоги `registry/ui/`, `registry/blocks/`, `registry/templates/`, `registry/hooks/`.
  - Парсит JSDoc Provenance-шапку каждого файла (`@source`, `@author`, `@license`, `@modified`). Выбрасывает ошибку сборки при отсутствии обязательных полей.
  - Извлекает внешние npm-зависимости и внутренние зависимости реестра (`registryDependencies`).
  - Генерирует статические JSON-манифесты в `public/r/[name].json` и общий индексный файл `public/r/index.json`.
- Next.js роут/статическая раздача: запрос `GET /r/[name].json` отдаёт готовый JSON с кодом и метаданными, готовый для команды `npx shadcn add`.

## Критерии приёмки

- [ ] Команда `npm run build:registry` успешно парсит тестовый компонент и генерирует `public/r/index.json` и `public/r/[name].json`.
- [ ] Все сгенерированные JSON-файлы валидируются схемой Zod без ошибок.
- [ ] Каждый компонент содержит JSDoc-заголовок с метаданными Provenance.
- [ ] При локально запущенном сервере запрос к `http://localhost:3000/r/[name].json` возвращает валидный shadcn registry v2 JSON.
- [ ] Команда `npx shadcn add http://localhost:3000/r/[name].json` (или локальный тест CLI) корректно распаковывает компонент.
