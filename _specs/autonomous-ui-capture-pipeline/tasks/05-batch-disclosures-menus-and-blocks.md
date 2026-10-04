# 05: Пакетное улучшение Батча 3: Меню, аккордеоны, диалоги и блоки

**Статус:** done

**Блокируется:** 02: Мультимодальный мост синтеза и адаптации под AMANTLE UI

**Закрывает критерии:** К6, К7

## Что построить

Пакетный запуск конвейера по компонентам раскрытия, диалогам, навигации и составным блокам (~50+ компонентов):
- Раскрытие и диалоги: `accordion.tsx`, `dialog.tsx`, `sheet.tsx`, `drawer-bottom.tsx`, `dropdown-menu.tsx`, `context-menu.tsx`, `command-menu.tsx`, `popover.tsx`, `tooltip.tsx`, `navigation-menu.tsx`.
- Составные блоки: `faq-accordion.tsx`, `bento-grid-interactive.tsx`, `pricing-cards-tier.tsx`, `animated-beam-network.tsx`, `chart-bar-interactive.tsx`, `chart-area-gradient.tsx`.

Оптимизации:
- Открытие выпадающих меню и модалок от точки вызова (trigger origin).
- Анимация аккордеона `data-[state=open]:animate-accordion-down` с кривой пружины.
- Command Palette мгновенно реагирует на стрелочную навигацию (0ms анимация выбора).

## Критерии приёмки

- [x] Аккордеоны и выпадающие списки раскрываются плавно за 180–220ms.
- [x] Диалоги и шторки открываются с легким блюром и пружинным масштабированием.
- [x] Все компоненты проверены на доступность ARIA и `motion-reduce`.
