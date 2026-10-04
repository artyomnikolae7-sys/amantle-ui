/**
 * @source https://amantle.dev/registry/blocks/empty-state-card
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { FolderPlus } from "lucide-react";
import { Button } from "@/registry/ui/button";

export function EmptyStateCard() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 text-center animate-in motion-reduce:animate-none fade-in-50">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <FolderPlus className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">Проекты не найдены</h3>
      <p className="mb-4 mt-2 max-w-sm text-sm text-muted-foreground">
        Вы ещё не добавили ни одного компонента в вашу коллекцию. Начните с создания первого проекта прямо сейчас.
      </p>
      <Button size="sm">Создать проект</Button>
    </div>
  );
}

export default EmptyStateCard;
