"use client";

import Link from "next/link";
import { Sparkles, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AMANTLE UI Design System
          </span>
          <span>•</span>
          <span>Next.js 15, React 19, Tailwind v4</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/studio" className="hover:text-foreground transition-colors font-medium">
            Studio
          </Link>
          <Link href="/ui" className="hover:text-foreground transition-colors">
            Примитивы
          </Link>
          <Link href="/blocks" className="hover:text-foreground transition-colors">
            Блоки
          </Link>
          <a
            href="https://github.com/artyomnikolae7-sys/amantle-ui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
