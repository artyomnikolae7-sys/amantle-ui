/**
 * @source https://reactbits.dev/micro/spring-check
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface SpringCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function SpringCheck({
  label = "Выполнить проверку и синхронизацию",
  checked,
  defaultChecked = false,
  onCheckedChange,
  className,
  ...props
}: SpringCheckProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const toggle = () => {
    const next = !isChecked;
    if (checked === undefined) {
      setInternalChecked(next);
    }
    onCheckedChange?.(next);
  };

  return (
    <div
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-3 select-none cursor-pointer group py-1.5 px-2 rounded-lg hover:bg-muted/40 transition-colors",
        className
      )}
      {...props}
    >
      {/* Spring Animated Box */}
      <div
        className={cn(
          "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300",
          isChecked
            ? "bg-primary border-primary scale-110 shadow-xs ring-2 ring-primary/20"
            : "border-border bg-background group-hover:border-primary/60 scale-100"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Emil bouncy spring
        }}
      >
        <Check
          className={cn(
            "w-3.5 h-3.5 text-primary-foreground stroke-[3] transition-all duration-200",
            isChecked ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-45"
          )}
        />
      </div>

      {/* Label with Animated Strikethrough & Opacity */}
      <span
        className={cn(
          "text-xs sm:text-sm font-medium transition-all duration-300",
          isChecked ? "line-through text-muted-foreground opacity-60" : "text-foreground"
        )}
      >
        {label}
      </span>
    </div>
  );
}
export default SpringCheck;
