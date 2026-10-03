/**
 * @source https://amantle.dev/registry/templates/auth-split-screen-page
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { LoginCardFloating } from "@/registry/blocks/login-card-floating";

export function AuthSplitScreenPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Column (Brand / Aesthetics) */}
      <div className="hidden lg:flex relative flex-col justify-between bg-primary p-12 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-black/40" />
        <div className="relative z-10 flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-background flex items-center justify-center text-primary font-mono text-sm font-black">
            A
          </div>
          <span>AMANTLE UI</span>
        </div>
        <div className="relative z-10 max-w-md space-y-4">
          <blockquote className="text-2xl font-medium tracking-tight">
            &ldquo;AMANTLE UI полностью трансформировал наш подход к продуктовому дизайну и разработке. Это лучший стек на Tailwind v4.&rdquo;
          </blockquote>
          <div className="text-sm opacity-80">
            <div className="font-semibold">Даниил Романов</div>
            <div>Основатель платформы CloudForge</div>
          </div>
        </div>
        <div className="relative z-10 text-xs opacity-60">
          &copy; {new Date().getFullYear()} AMANTLE UI. Все права защищены.
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-sm">
          <LoginCardFloating />
        </div>
      </div>
    </div>
  );
}

export default AuthSplitScreenPage;
