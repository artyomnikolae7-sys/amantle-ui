/**
 * @source https://magicui.design/docs/components/typing-animation
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypingTextProps {
  className?: string;
  text?: string;
  speed?: number;
}

export function TypingText({ className, text = "Соберите дизайн-систему за считанные минуты.", speed = 50 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={cn("font-mono text-base sm:text-lg text-foreground inline-flex items-center", className)}>
      <span>{displayedText}</span>
      <span className="ml-1 inline-block w-2 h-5 bg-primary animate-[pulse_0.8s_infinite]" />
    </div>
  );
}
