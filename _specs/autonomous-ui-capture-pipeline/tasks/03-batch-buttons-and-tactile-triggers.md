# 03: Пакетное улучшение Батча 1: Кнопки и тактильные триггеры

**Статус:** done

**Блокируется:** 02: Мультимодальный мост синтеза и адаптации под AMANTLE UI

**Закрывает критерии:** К4

## Что построить

Пакетный запуск конвейера по всем 25 кнопочным компонентам реестра:
`button.tsx`, `button-shimmer.tsx`, `button-magnetic.tsx`, `button-ripple.tsx`, `button-copy-morph.tsx`, `button-elastic-bounce.tsx`, `button-expandable.tsx`, `button-glow-neon.tsx`, `button-gradient-border.tsx`, `button-gradient-flow.tsx`, `button-group.tsx`, `button-hold-confirm.tsx`, `button-liquid-fill.tsx`, `button-neubrutalist.tsx`, `button-pulse-ring.tsx`, `button-retro-3d.tsx`, `button-slide-reveal.tsx`, `button-split-dropdown.tsx`, `button-tilt.tsx` и др.

Каждая кнопка получает:
- тактильное подтверждение клика `:active { transform: scale(0.97); }`;
- тайминг нажатия `100–150ms ease-out`;
- защиту от паразитных reflow (замена `transition-all` на явный перечень свойств);
- полную поддержку `prefers-reduced-motion`.

## Критерии приёмки

- [x] Все компоненты кнопок в `registry/ui/` проверены и обогащены тактильным откликом.
- [x] Отсутствуют размытые задержки клика (>200ms).
- [x] Поддержаны `active:scale-[0.97]` и `motion-reduce:active:scale-100`.
