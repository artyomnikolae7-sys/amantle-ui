# Таск 01: Токены движения, пружинные кривые и тактильный отклик (:active feedback)

## Статус: Выполнен
## Блокировки: Нет

## Описание
Внедрить централизованные CSS-токены движения в `app/globals.css`, определяющие высококачественные пружинные кривые Безье (`--spring-smooth`, `--spring-snappy`, `--spring-bounce`) по стандартам Emil Kowalski.
Добавить утилитный класс `.tap-active` и обновить базовые стили кнопок в `registry/ui/button.tsx` с добавлением тактильного отклика `:active:scale-[0.97]`.
Обеспечить поддержку `motion-reduce:transition-none` для соблюдения доступности WCAG 2.2 AAA.

## Критерии приёмки
- В `app/globals.css` объявлены переменные `--spring-smooth`, `--spring-snappy`, `--spring-bounce`.
- Кнопки `Button` получают тактильную усадку `active:scale-[0.97]` с быстрым временем отклика (100–150ms).
- При `prefers-reduced-motion` анимации отключаются.
