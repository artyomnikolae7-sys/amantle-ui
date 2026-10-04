# Журнал Эволюции и Аудита Компонентов AMANTLE UI (205 Компонентов)

**Дата отчёта**: 2026-10-04  
**Версия реестра**: v0.2.0-motion  
**Всего компонентов**: 223  
**Статус готовности**: 100% (205 / 205 компонентов обработаны и зарегистрированы)  
**Средний балл качества движения**: 89/100  
**Синхронизация с `components-map.tsx`**: 100% (205 / 205)  
**Совместимость с CLI `npx shadcn add`**: 100% (205 / 205 в `public/r/index.json`)  

---

## 1. Сводка по категориям

| Категория | Количество | Средний балл движения | Соответствие Provenance | В componentMap |
|---|---|---|---|---|
| **UI Primitives & Motion Compounds** (`registry/ui/`) | 144 | 88/100 | 100% | 100% |
| **SaaS & Composite Blocks** (`registry/blocks/`) | 66 | 91/100 | 100% | 100% |
| **Full Page Templates** (`registry/templates/`) | 13 | 91/100 | 100% | 100% |
| **ИТОГО** | **223** | **89/100** | **100%** | **100%** |

---

## 2. Полный реестр всех 205 компонентов

| # | Компонент | Категория | Строк | Provenance JSDoc | Тактильный клик (scale 0.97) | `motion-reduce` (WCAG AAA) | componentMap | Балл | Статус |
|---|---|---|---|---|---|---|---|---|---|
| 001 | `button` | ui | 105 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 002 | `input` | ui | 32 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 003 | `textarea` | ui | 31 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 004 | `badge` | ui | 43 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 005 | `card` | ui | 83 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 006 | `separator` | ui | 38 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 007 | `skeleton` | ui | 24 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 008 | `avatar` | ui | 65 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 009 | `switch` | ui | 60 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 010 | `checkbox` | ui | 57 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 011 | `slider` | ui | 91 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 012 | `progress` | ui | 45 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 013 | `toggle` | ui | 83 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 014 | `alert` | ui | 66 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 015 | `table` | ui | 124 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 016 | `tabs` | ui | 124 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 017 | `accordion` | ui | 137 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 018 | `dialog` | ui | 200 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 019 | `sheet` | ui | 211 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 020 | `popover` | ui | 118 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 021 | `tooltip` | ui | 85 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 022 | `dropdown-menu` | ui | 192 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 023 | `select` | ui | 172 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 024 | `radio-group` | ui | 110 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 025 | `sonner` | ui | 39 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 026 | `button-magnetic` | ui | 124 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 027 | `button-ripple` | ui | 135 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 028 | `button-shimmer` | ui | 121 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 029 | `button-expandable` | ui | 113 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 030 | `button-tilt` | ui | 149 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 031 | `button-group` | ui | 235 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 032 | `badge-shimmer` | ui | 78 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 033 | `card-spotlight` | ui | 58 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 034 | `card-tilt` | ui | 66 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 035 | `card-glass` | ui | 29 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 036 | `input-floating-label` | ui | 57 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 037 | `input-otp` | ui | 53 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 038 | `input-search-animated` | ui | 66 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 039 | `kbd` | ui | 26 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 040 | `tabs-pill` | ui | 51 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 041 | `tabs-vertical` | ui | 50 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 042 | `badge-pulse` | ui | 49 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 043 | `avatar-group` | ui | 44 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 044 | `tooltip-animated` | ui | 43 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 045 | `stepper` | ui | 57 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 046 | `breadcrumbs` | ui | 40 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 047 | `scroll-area` | ui | 29 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 048 | `rating` | ui | 57 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 049 | `collapsible` | ui | 38 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 050 | `toggle-group` | ui | 60 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 051 | `command-menu` | ui | 100 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 052 | `drawer-bottom` | ui | 59 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 053 | `context-menu` | ui | 67 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 054 | `hover-card` | ui | 58 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 055 | `resizable-panel` | ui | 75 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 056 | `menubar` | ui | 70 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 057 | `navigation-menu` | ui | 56 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 058 | `aspect-ratio` | ui | 29 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 059 | `pagination` | ui | 72 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 060 | `calendar-picker` | ui | 66 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 061 | `color-picker` | ui | 61 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 062 | `file-upload-dropzone` | ui | 59 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 063 | `tree-view` | ui | 73 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 064 | `badge-shine` | ui | 32 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 065 | `badge-glow` | ui | 40 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 066 | `meteors` | ui | 51 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 067 | `sparkles-text` | ui | 30 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 068 | `word-rotate` | ui | 42 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 069 | `typing-text` | ui | 43 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 070 | `number-ticker` | ui | 45 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 071 | `border-beam` | ui | 48 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 072 | `shine-border` | ui | 55 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 073 | `particles-background` | ui | 75 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 074 | `dock-bar` | ui | 45 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 075 | `confetti` | ui | 58 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 076 | `chart-bar-interactive` | ui | 300 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 077 | `chart-area-gradient` | ui | 261 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 078 | `data-table-advanced` | ui | 332 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 079 | `interactive-grid-pattern` | ui | 86 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 080 | `terminal` | ui | 167 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 081 | `gauge-chart` | ui | 111 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 082 | `button-elastic-bounce` | ui | 28 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 083 | `button-glow-neon` | ui | 31 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 084 | `button-gradient-border` | ui | 31 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 085 | `button-neubrutalist` | ui | 28 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 086 | `button-retro-3d` | ui | 28 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 087 | `button-hold-confirm` | ui | 81 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 088 | `button-copy-morph` | ui | 54 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 089 | `button-slide-reveal` | ui | 38 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 090 | `button-liquid-fill` | ui | 31 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 091 | `button-split-dropdown` | ui | 56 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 092 | `input-pill-glow` | ui | 33 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 093 | `input-underlined-minimal` | ui | 32 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 094 | `input-password-strength` | ui | 69 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 095 | `input-credit-card` | ui | 37 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 096 | `input-verification-code` | ui | 39 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 097 | `input-command-filter` | ui | 54 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 098 | `input-voice-dictation` | ui | 74 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 099 | `input-tag-chips` | ui | 56 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 100 | `input-auto-grow-textarea` | ui | 38 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 101 | `input-file-uploader-compact` | ui | 61 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 102 | `switch-ios-spring` | ui | 45 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 103 | `switch-labeled-icon` | ui | 35 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 104 | `switch-segmented-slider` | ui | 39 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 105 | `slider-range-dual` | ui | 47 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 106 | `slider-volume-stepped` | ui | 34 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 107 | `slider-circular-dial` | ui | 49 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 108 | `checkbox-animated-check` | ui | 40 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 109 | `radio-card-group` | ui | 49 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 110 | `checkbox-tree-hierarchical` | ui | 58 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 111 | `badge-status-dot` | ui | 41 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 112 | `badge-live-stream` | ui | 24 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 113 | `badge-gradient-pill` | ui | 25 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 114 | `badge-counter-notification` | ui | 27 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 115 | `badge-dismissable` | ui | 31 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 116 | `badge-copy-token` | ui | 36 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 117 | `badge-verified-tier` | ui | 59 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 118 | `card-inner-glow` | ui | 31 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 119 | `card-gradient-mesh` | ui | 27 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 120 | `card-flip-3d` | ui | 45 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 121 | `card-metric-trend` | ui | 36 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 122 | `card-profile-header` | ui | 41 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 123 | `card-neubrutalist-shadow` | ui | 24 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 124 | `button-pulse-ring` | ui | 24 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 125 | `button-gradient-flow` | ui | 40 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 126 | `input-stepper-number` | ui | 40 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 127 | `split-text` | ui | 65 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 128 | `blur-text` | ui | 83 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 129 | `decrypted-text` | ui | 91 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 130 | `true-focus` | ui | 104 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 131 | `shiny-text` | ui | 48 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 132 | `count-up` | ui | 96 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 133 | `gradient-text` | ui | 50 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 134 | `rotating-text` | ui | 65 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 135 | `star-border` | ui | 97 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 136 | `click-spark` | ui | 128 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 137 | `pixel-card` | ui | 110 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 138 | `spring-check` | ui | 83 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 139 | `jelly-radio` | ui | 124 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 140 | `pill-nav` | ui | 106 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **65/100** | 🟡 Enhanced |
| 141 | `button-cyber-glass` | ui | 49 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 142 | `card-cyber-glass` | ui | 57 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 143 | `input-cyber-glass` | ui | 46 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 144 | `input-neubrutalist` | ui | 47 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **80/100** | ✅ Verified |
| 145 | `hero-simple` | blocks | 36 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 146 | `hero-gradient-glow` | blocks | 46 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 147 | `hero-badge-cta` | blocks | 40 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 148 | `pricing-cards-tier` | blocks | 114 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 149 | `pricing-comparison-table` | blocks | 85 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 150 | `bento-grid-3x3` | blocks | 99 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 151 | `feature-cards-grid` | blocks | 81 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 152 | `feature-alternating-rows` | blocks | 86 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 153 | `testimonials-slider` | blocks | 75 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 154 | `stats-counter-strip` | blocks | 39 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 155 | `faq-accordion` | blocks | 52 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 156 | `navbar-sticky-blur` | blocks | 45 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 157 | `footer-mega-columns` | blocks | 70 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 158 | `dashboard-stats-kpi` | blocks | 64 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 159 | `dashboard-recent-transactions` | blocks | 106 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 160 | `cta-banner-glow` | blocks | 45 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 161 | `newsletter-card-minimal` | blocks | 44 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 162 | `login-card-floating` | blocks | 51 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 163 | `empty-state-card` | blocks | 28 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 164 | `team-members-grid` | blocks | 48 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 165 | `contact-form-split` | blocks | 67 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 166 | `integration-logos-cloud` | blocks | 44 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 167 | `metrics-graph-card` | blocks | 51 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 168 | `user-profile-header` | blocks | 50 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 169 | `notification-feed-popover` | blocks | 80 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 170 | `search-command-palette` | blocks | 72 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 171 | `hero-video-dialog` | blocks | 39 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 172 | `hero-split-image` | blocks | 78 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 173 | `hero-floating-mockup` | blocks | 53 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 174 | `pricing-toggle-annual` | blocks | 124 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 175 | `pricing-slider` | blocks | 60 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 176 | `feature-timeline` | blocks | 70 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 177 | `feature-bento-spotlight` | blocks | 68 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 178 | `feature-comparison-matrix` | blocks | 51 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 179 | `testimonials-marquee` | blocks | 44 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 180 | `testimonials-grid-masonry` | blocks | 36 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 181 | `faq-searchable` | blocks | 67 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 182 | `cta-split-card` | blocks | 44 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 183 | `footer-minimal-centered` | blocks | 32 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 184 | `navbar-floating-glass` | blocks | 39 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 185 | `dashboard-activity-feed` | blocks | 40 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 186 | `dashboard-quick-actions` | blocks | 45 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 187 | `hero-lamp` | blocks | 58 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 188 | `hero-retro-grid` | blocks | 49 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 189 | `hero-canvas-reveal` | blocks | 50 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 190 | `ai-chat-prompt` | blocks | 78 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 191 | `ai-generation-card` | blocks | 60 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 192 | `ai-code-diff` | blocks | 56 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 193 | `bento-grid-interactive` | blocks | 65 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 194 | `sticky-scroll-reveal` | blocks | 55 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 195 | `pricing-tier-matrix` | blocks | 73 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 196 | `testimonials-infinite-slider` | blocks | 46 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 197 | `stats-glass-grid` | blocks | 45 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 198 | `cta-lamp-glow` | blocks | 44 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 199 | `navbar-floating-dock` | blocks | 50 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 200 | `footer-columns-newsletter` | blocks | 75 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 201 | `dashboard-server-monitoring` | blocks | 61 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 202 | `dashboard-kanban-board` | blocks | 53 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 203 | `dashboard-table-pagination` | blocks | 70 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 204 | `integration-ecosystem-grid` | blocks | 47 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 205 | `comparison-slider-image` | blocks | 58 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 206 | `cookie-consent-banner` | blocks | 58 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 207 | `animated-beam-network` | blocks | 283 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 208 | `form-system-accessible` | blocks | 270 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 209 | `stats-card-sparkline` | blocks | 173 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 210 | `changelog-feed` | blocks | 199 | ✅ Да | ✅ Да | ⚠️ Нет | ✅ Да | **90/100** | ✅ Verified |
| 211 | `saas-landing-page` | templates | 40 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 212 | `modern-dashboard-page` | templates | 78 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 213 | `auth-split-screen-page` | templates | 48 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 214 | `changelog-page` | templates | 102 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 215 | `pricing-page-full` | templates | 26 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 216 | `settings-account-page` | templates | 97 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 217 | `error-404-page` | templates | 49 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 218 | `blog-post-template` | templates | 81 | ✅ Да | ✅ Да | ✅ Да | ✅ Да | **100/100** | ✅ Verified |
| 219 | `ai-workspace-template` | templates | 112 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 220 | `developer-docs-template` | templates | 90 | ✅ Да | ➖ | ✅ Да | ✅ Да | **85/100** | ✅ Verified |
| 221 | `analytics-dashboard-template` | templates | 73 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 222 | `onboarding-wizard-template` | templates | 101 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |
| 223 | `coming-soon-waitlist-template` | templates | 77 | ✅ Да | ➖ | ⚠️ Нет | ✅ Да | **75/100** | 🟡 Enhanced |

---
*Журнал сформирован автоматически скриптом `scripts/generate-full-audit-log.mjs` на основе данных `public/r/index.json` и AST-анализа файлов.*
