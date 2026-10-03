# AMANTLE UI DESIGN SYSTEM

Экосистема уровня shadcn/ui: собственный registry компонентов, блоков, шаблонов и тем с агрегацией из внешних open-source registry, визуальным composer и AI/MCP-интеграцией.

Весь проект и его инструментарий полностью размещены в Google Drive (`g:\Мой диск\__AMANTLE UI DESIGN SYSYTEM__`).

---

## 📚 Документация

- [**Отчёт о настройке и инфраструктуре**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/_docs/SETUP_REPORT.md)
- [**Бизнес-контекст и миссия проекта**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/_docs/project.md)
- [**Стек технологий**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/_docs/stack.md)
- [**Дизайн-система и токены**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/_docs/design-system.md)
- [**Правила для ИИ-агентов**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/AGENTS.md)
- [**Руководство по скиллам**](file:///g:/Мой диск/__AMANTLE UI DESIGN SYSYTEM__/SKILLS-GUIDE.md)

---

## 🛠 Установленные скиллы (27 штук)

Все 27 скиллов синхронизированы в каталогах:
- `skills/` (открытый каталог для просмотра в Google Drive)
- `.agents/skills/` (Antigravity IDE)
- `.claude/skills/` (Claude Code)
- `.codex/skills/` (Codex)

### 1. Конвейер разработки
1. `grill-me` — допрос по продукту и выявление неочевидных требований
2. `to-spec` — фиксация договорённостей в спеку `_specs/<slug>/spec.md`
3. `to-tasks` — разбиение спеки на изолированные задачи в `_specs/<slug>/tasks/`
4. `implement` — поэтапная реализация задач с коммитами
5. `code-review` — проверка по трём осям (стандарты, спека, безопасность)
6. `security-review` — справочник и чеклисты безопасности OWASP
7. `handoff` — фиксация состояния сессии при исчерпании контекста

### 2. Дизайн и фронтенд
- `find-skills` — поиск и установка скиллов
- `find-animation-opportunities` — поиск мест для микроинтеракций
- `nextjs-app-router-patterns` — паттерны Next.js App Router
- `interaction-design` — микроинтеракции и UX-паттерны
- `emil-design-eng` — инженерия интерфейсов от Emil Kowalski
- `api-and-interface-design` — проектирование компонентных интерфейсов
- `ui-animation` — интерфейсные анимации и переходы

### 3. Инженерные суперсилы
- `brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`
- `systematic-debugging`, `test-driven-development`, `verification-before-completion`
- `requesting-code-review`, `receiving-code-review`, `using-git-worktrees`
- `using-superpowers`, `finishing-a-development-branch`, `dispatching-parallel-agents`

---

## 🚀 Следующий шаг

Загрузи файл чата с подробным описанием проекта в корень или запусти команду `/grill-me` для старта проектирования!
