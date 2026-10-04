# Таска 06: Мультивариативность дизайна (Neo-Brutalist & Cyber-Glass Variants)

## Статус: COMPLETED

## Закрывает критерии: К5

## Блокировки: 05-iterative-component-audit-and-bug-fixes.md

## Описание
1. Добавить альтернативные дизайн-вариации (стили) для ключевых компонентов системы:
   - **Стиль Neo-Brutalist:**
     - Жирные контрастные границы `border-2 border-foreground dark:border-white`.
     - Жесткая тень смещения `shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]`.
     - Трансляция при клике `:active:translate-x-[2px] :active:translate-y-[2px] :active:shadow-none`.
     - Прямоугольные формы (`rounded-none` или `rounded-sm`).
   - **Стиль Cyber-Glass:**
     - Полупрозрачная подложка `bg-background/40 backdrop-blur-xl`.
     - Градиентная тонкая рамка `border border-white/15 dark:border-white/10`.
     - Свечение при наведении `hover:shadow-[0_0_25px_rgba(var(--primary),0.35)]`.
2. Интегрировать переключатель вариантов ("Style: Default | Neo-Brutalist | Cyber-Glass") в панель предпросмотра `interactive-showcase.tsx` и `showcase-viewer.tsx`.
3. Реализовать готовые компоненты-варианты в реестре:
   - `button-neo-brutalist.tsx` & `button-cyber-glass.tsx`
   - `card-neo-brutalist.tsx` & `card-cyber-glass.tsx`
   - `input-neo-brutalist.tsx` & `input-cyber-glass.tsx`
   - `badge-neo-brutalist.tsx` & `badge-cyber-glass.tsx`
