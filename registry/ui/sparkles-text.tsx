/**
 * @source https://magicui.design/docs/components/sparkles-text
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SparklesTextProps {
  className?: string;
  text?: string;
}

export function SparklesText({ className, text = "AMANTLE UI" }: SparklesTextProps) {
  return (
    <div className={cn("relative inline-block text-3xl sm:text-4xl font-extrabold tracking-tight", className)}>
      <Sparkles className="absolute -top-3 -left-4 h-5 w-5 text-amber-400 animate-pulse motion-reduce:animate-none" />
      <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
        {text}
      </span>
      <Sparkles className="absolute -bottom-2 -right-4 h-4 w-4 text-primary animate-bounce motion-reduce:animate-none" />
    </div>
  );
}
