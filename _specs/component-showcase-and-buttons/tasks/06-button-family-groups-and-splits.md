# 06: Семейство 3 кнопок — Кнопочные Группы и Split Dropdowns

**Статус:** done

**Блокируется:** 04-button-family-primitives-and-variants

**Закрывает критерии:** К8, К10

## Что построить

Пользователь получает составной компонент `registry/ui/button-group.tsx` для объединения кнопок:
- Segmented Control (переключатель вкладок/режимов со скользящей плашкой или слитными кнопками).
- Split Dropdown Button: основная кнопка действия + кнопка с шевроном, открывающая выпадающий список вторичных действий.
- Linked Icon Group: слитная группа иконочных кнопок для панелей инструментов (Bold, Italic, Underline, Align).
- Toolbar Group: горизонтальная панель действий с разделителями.

## Критерии приёмки

- [x] В `registry/ui/button-group.tsx` реализованы подкомпоненты `ButtonGroup`, `ButtonGroupItem`, `SplitButton`.
- [x] Кнопки в группе корректно соединяют границы (`border-collapse`, стили первого и последнего элементов, отсутствие двойных границ).
- [x] Компонент зарегистрирован в `registry.json` и `components-map.ts`.
- [x] Манифест `public/r/button-group.json` успешно генерируется через `npm run build:registry`.
