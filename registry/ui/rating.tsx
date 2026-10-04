/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Interactive star rating
 */

"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export function Rating({ max = 5, value = 4, onChange, className }: RatingProps) {
  const [internalValue, setInternalValue] = React.useState(value);
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const active = hoverValue ?? (value ?? internalValue);

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, idx) => {
        const starNum = idx + 1;
        const isFilled = starNum <= active;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setInternalValue(starNum);
              onChange?.(starNum);
            }}
            onMouseEnter={() => setHoverValue(starNum)}
            onMouseLeave={() => setHoverValue(null)}
            className="p-0.5 text-muted-foreground transition-transform hover:scale-110 focus:outline-none"
          >
            <Star
              className={cn(
                "h-5 w-5 transition-colors",
                isFilled ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
