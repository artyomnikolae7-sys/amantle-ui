# Таска 07: Сквозная верификация, сборка и релиз v0.3.0

## Статус: PENDING

## Закрывает критерии: К6

## Блокировки: 06-design-variants-neo-brutalist-and-cyber-glass.md

## Описание
1. Прогнать полную цепочку тестов и верификации:
   - `scripts/build-registry.mjs`
   - `scripts/check-sync.mjs`
   - `npx.cmd tsc --noEmit`
   - `npm.cmd run test`
   - `npm.cmd run build`
2. Обновить документацию `_docs/COMPONENT_EVOLUTION_LOG.md` и `README.md`.
3. Запустить релизный конвейер `npm run deploy -- --type minor` (версионирование 0.2.2 -> 0.3.0).
4. Проверить отправку тега и ветки в GitHub (`origin main --tags`).
