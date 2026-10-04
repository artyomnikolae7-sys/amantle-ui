# 01: Движок захвата и анализа движения интерфейсов (UI Capture Engine)

**Статус:** done

**Блокируется:** ничем (можно брать сразу).

**Закрывает критерии:** К1, К2

## Что построить

Исполняемый Node.js скрипт `scripts/ui-capture-engine.mjs`, объединяющий методы `remotion-dev/css-sweeper`, инспекции вычисленных стилей `window.getComputedStyle` и симуляции интеракций (hover, active, focus). Скрипт анализирует DOM-элемент или файл компонента, извлекает:
- кривые ускорения (`transition-timing-function`, cubic-bezier);
- тайминги анимаций (`duration`, `delay`);
- дельты состояний (`transform: scale`, `box-shadow`, `border-color`, `background-color`);
- наличие доступных фокусных колец и соответствие `motion-reduce`.

Скрипт формирует структурированный JSON-профиль движения (Motion Profile) для любого компонента из реестра.

## Критерии приёмки

- [x] Создан скрипт `scripts/ui-capture-engine.mjs`.
- [x] Реализована функция `extractMotionProfile(componentCode, componentName)`.
- [x] Реализован экспорт метрик: spring curve, active scale delta, focus ring, WCAG motion-reduce check.
- [x] Скрипт успешно запускается командой `node scripts/ui-capture-engine.mjs --target <component>`.
