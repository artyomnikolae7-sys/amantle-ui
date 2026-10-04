/**
 * @source https://reactbits.dev/text-animations/decrypted-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DecryptedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  trigger?: "auto" | "hover";
}

export function DecryptedText({
  text = "CLASSIFIED_NEURAL_INTERFACE_READY",
  speed = 40,
  maxIterations = 12,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className,
  encryptedClassName,
  trigger = "auto",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = React.useState(text);
  const [isHovered, setIsHovered] = React.useState(false);

  const startAnimation = React.useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / (maxIterations / text.length);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, characters]);

  React.useEffect(() => {
    if (trigger === "auto") {
      const cleanup = startAnimation();
      return cleanup;
    }
  }, [trigger, startAnimation]);

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsHovered(true);
      startAnimation();
    }
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "font-mono font-semibold tracking-wider transition-colors inline-block select-none cursor-default",
        isHovered ? "text-primary" : "text-foreground",
        className
      )}
      {...props}
    >
      {displayText}
    </span>
  );
}
export default DecryptedText;
