import Link from "next/link";
import { Sparkles, Terminal, Layers, BookOpen } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ThemeCustomizerTrigger } from "./theme-customizer-modal";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-14 items-center justify-between px-4 sm:px-6">
        {/* Logo and primary navigation */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-base tracking-tight text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-sm shadow-sm">
              A
            </span>
            <span className="font-extrabold tracking-wider">AMANTLE</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
              v2.0
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
            <Link href="/studio" className="text-foreground transition-colors flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Studio</span>
              <span className="text-[9px] bg-primary/15 text-primary border border-primary/20 px-1 py-0.2 rounded font-mono font-bold">2,051 items</span>
            </Link>
            <Link href="/ui" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Примитивы
            </Link>
            <Link href="/blocks" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Блоки
            </Link>
            <Link href="/templates" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Шаблоны
            </Link>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md border border-border font-mono">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>npx amantle-ui add button</span>
          </div>

          <ThemeCustomizerTrigger />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
