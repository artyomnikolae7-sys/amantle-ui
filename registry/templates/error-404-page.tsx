/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Clean modern 404 error page template
 */

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function Error404Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <span className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-primary via-violet-500 to-rose-500 bg-clip-text text-transparent select-none">
            404
          </span>
          <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 rounded-full" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Страница не найдена</h1>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Запрашиваемый компонент или раздел был перемещён, удалён или никогда не существовал в реестре.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>На главную</span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link href="/ui/button">
              <Compass className="h-4 w-4" />
              <span>Каталог компонентов</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
