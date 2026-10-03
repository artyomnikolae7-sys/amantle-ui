/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/slider.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue"> {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  max?: number;
  min?: number;
  step?: number;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue = [0],
      onValueChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [val, setVal] = React.useState<number>(defaultValue[0] ?? 0);
    const activeValue = value !== undefined ? (value[0] ?? 0) : val;

    const percentage = Math.min(
      Math.max(((activeValue - min) / (max - min)) * 100, 0),
      100
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const num = parseFloat(e.target.value);
      if (value === undefined) {
        setVal(num);
      }
      onValueChange?.([num]);
    };

    return (
      <div
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute h-full bg-primary"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={activeValue}
          onChange={handleChange}
          disabled={disabled}
          ref={ref}
          className="absolute inset-0 h-full w-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        <div
          className="pointer-events-none absolute block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          style={{
            left: `calc(${percentage}% - 8px)`,
          }}
        />
      </div>
    );
  }
);
Slider.displayName = "Slider";

export { Slider };
