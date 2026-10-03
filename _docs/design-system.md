# AMANTLE UI — Дизайн-система

## Философия

Дизайн-система построена на CSS-переменных (токенах) и Tailwind CSS v4.
Все визуальные решения описываются через токены — жёстко закодированные значения
в компонентах запрещены. Это позволяет менять тему одним набором переменных.

## Цветовая палитра

Базируется на HSL, аналогично shadcn/ui.

### Семантические токены

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* … остальные тёмные токены */
}
```

### Брендовые цвета AMANTLE

```css
:root {
  --amantle-primary: 250 95% 65%;      /* фиолетовый */
  --amantle-secondary: 200 90% 55%;    /* голубой */
  --amantle-accent: 330 85% 60%;       /* розовый */
  --amantle-success: 145 63% 49%;
  --amantle-warning: 38 92% 50%;
  --amantle-error: 0 84% 60%;
}
```

## Типографика

| Токен | Шрифт | Размер | Line-height | Weight |
|---|---|---|---|---|
| `--font-heading` | Inter | — | — | 600–800 |
| `--font-body` | Inter | — | — | 400 |
| `--font-mono` | JetBrains Mono | — | — | 400 |

### Масштаб размеров

```
text-xs:   0.75rem / 1rem
text-sm:   0.875rem / 1.25rem
text-base: 1rem / 1.5rem
text-lg:   1.125rem / 1.75rem
text-xl:   1.25rem / 1.75rem
text-2xl:  1.5rem / 2rem
text-3xl:  1.875rem / 2.25rem
text-4xl:  2.25rem / 2.5rem
```

## Spacing

Базовый шаг: `4px` (Tailwind default)

| Токен | Значение | Использование |
|---|---|---|
| `spacing-xs` | 4px | внутренние отступы badge |
| `spacing-sm` | 8px | gap между элементами inline |
| `spacing-md` | 16px | padding карточек |
| `spacing-lg` | 24px | отступы между секциями |
| `spacing-xl` | 32px | padding страниц |
| `spacing-2xl` | 48px | отступы между блоками |
| `spacing-3xl` | 64px | вертикальные отступы hero |

## Border Radius

```css
:root {
  --radius-sm: 0.25rem;     /* 4px  — badge, tag */
  --radius-md: 0.5rem;      /* 8px  — input, button */
  --radius-lg: 0.75rem;     /* 12px — card, dialog */
  --radius-xl: 1rem;        /* 16px — большие карточки */
  --radius-full: 9999px;    /* pill */
}
```

## Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

## Анимации (Motion)

| Токен | Duration | Easing | Использование |
|---|---|---|---|
| `--duration-fast` | 150ms | ease-out | hover, focus |
| `--duration-normal` | 250ms | ease-in-out | transitions |
| `--duration-slow` | 350ms | ease-in-out | dialog open/close |
| `--duration-slower` | 500ms | cubic-bezier(0.16,1,0.3,1) | page transitions |

## Готовые компоненты (Primitives)

Базовые компоненты, от которых зависят все блоки:

- **Button** — primary, secondary, outline, ghost, destructive, link
- **Input** — text, email, password, search, с иконкой
- **Select** — single, multi, searchable (на Radix)
- **Card** — с header, content, footer
- **Badge** — default, secondary, outline, destructive
- **Dialog** — modal, sheet, alert
- **Tabs** — горизонтальные, вертикальные
- **Table** — с сортировкой, фильтрацией, пагинацией
- **Avatar** — с fallback
- **Tooltip** — Radix-based
- **Dropdown Menu** — с подменю

## Правила использования

1. **Никогда не используй хардкод-значения** — только токены
2. **Порядок вариантов**: primary → secondary → outline → ghost → destructive
3. **Responsive**: mobile-first, точки: `sm` (640), `md` (768), `lg` (1024), `xl` (1280)
4. **Анимации**: обязательно `prefers-reduced-motion` через Tailwind `motion-reduce:`
5. **Тёмная тема**: все компоненты поддерживают `dark:` варианты через CSS-переменные
