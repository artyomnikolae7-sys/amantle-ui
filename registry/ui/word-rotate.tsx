/**
 * @source https://magicui.design/docs/components/word-rotate
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WordRotateProps {
  className?: string;
  words?: string[];
  duration?: number;
}

export function WordRotate({
  className,
  words = ["Быстрый", "Интеллектуальный", "Масштабируемый", "Эстетичный"],
  duration = 2500,
}: WordRotateProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  return (
    <div className={cn("text-2xl sm:text-3xl font-bold text-foreground inline-flex items-center gap-2", className)}>
      <span>Дизайн:</span>
      <span className="text-primary transition-[color,background-color,border-color,box-shadow,transform] duration-300 transform inline-block">
        {words[index]}
      </span>
    </div>
  );
}
