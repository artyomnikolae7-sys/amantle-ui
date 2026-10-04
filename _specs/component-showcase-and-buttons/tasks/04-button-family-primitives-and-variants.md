# 04: Семейство 1 кнопок — Примитивы и Дизайнерские Варианты

**Статус:** done

**Блокируется:** 03-interactive-playground-tab

**Закрывает критерии:** К6, К10

## Что построить

Пользователь получает полноценный компонент Button с богатым набором визуальных вариантов:
- Варианты: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`, `glass` (полупрозрачный блюр-эффект) и `gradient-glow` (неоновое мягкое свечение).
- Размеры: `sm`, `default`, `lg`, `icon`.
- Встроенная поддержка состояния `loading` с анимированным спиннером и блокировкой клика.
- Поддержка слотов под иконку слева и справа (`leftIcon`, `rightIcon`).
- Полная интеграция с CSS-токенами Tailwind v4 и регистрация схемы пропсов для Showcase Playground.

## Критерии приёмки

- [x] В `registry/ui/button.tsx` реализованы варианты `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`, `glass`, `gradient-glow`.
- [x] Кнопка поддерживает пропсы `loading`, `disabled`, `leftIcon`, `rightIcon`.
- [x] В `registry/ui/button.tsx` добавлены слоты иконок и анимации.
- [x] Команда `npm run build:registry` успешно генерирует `public/r/button.json`.

