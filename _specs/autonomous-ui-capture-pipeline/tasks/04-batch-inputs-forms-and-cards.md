# 04: Пакетное улучшение Батча 2: Инпуты, карточки и интерактивные поверхности

**Статус:** done

**Блокируется:** 02: Мультимодальный мост синтеза и адаптации под AMANTLE UI

**Закрывает критерии:** К5, К7

## Что построить

Пакетный запуск конвейера по компонентам ввода данных, карточек и поверхностей (~50 компонентов):
- Инпуты: `input.tsx`, `input-floating-label.tsx`, `input-search-animated.tsx`, `input-otp.tsx`, `input-password-strength.tsx`, `input-tag-chips.tsx`, `input-stepper-number.tsx`, `input-pill-glow.tsx` и др.
- Карточки: `card.tsx`, `card-spotlight.tsx`, `card-tilt.tsx`, `card-glass.tsx`, `card-inner-glow.tsx`, `card-flip-3d.tsx`, `card-gradient-mesh.tsx`, `card-metric-trend.tsx` и др.

Оптимизации:
- Инпуты: мгновенный набор текста без анимаций (Reject List Emil Kowalski), плавный focus-ring `ring-2 ring-ring ring-offset-2 duration-150`.
- Карточки: мягкий ховер-подъем `hover:-translate-y-0.5` с кривой Безье `--spring-smooth` (`cubic-bezier(0.23, 1, 0.32, 1)`) и подсветка бордера `hover:border-border/80`.

## Критерии приёмки

- [x] Инпуты не имеют задержек при вводе символов.
- [x] Интерактивные карточки имеют физический подъем и плавное изменение тени.
- [x] Все компоненты уважают `motion-reduce`.
