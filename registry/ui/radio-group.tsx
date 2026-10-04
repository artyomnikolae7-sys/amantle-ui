/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/radio-group.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RadioGroupContextValue {
  name?: string;
  value: string;
  onValueChange: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, name, value, defaultValue = "", onValueChange, children, ...props }, ref) => {
    const [val, setVal] = React.useState(defaultValue);
    const activeValue = value !== undefined ? value : val;

    const handleValueChange = (newVal: string) => {
      if (value === undefined) setVal(newVal);
      onValueChange?.(newVal);
    };

    return (
      <RadioGroupContext.Provider
        value={{ name, value: activeValue, onValueChange: handleValueChange }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn("grid gap-2", className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, id, disabled, ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext);
    const isChecked = ctx?.value === value;

    return (
      <label
        htmlFor={id}
        className={cn(
          "relative flex items-center cursor-pointer",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <input
          type="radio"
          id={id}
          name={ctx?.name}
          value={value}
          checked={isChecked}
          onChange={() => ctx?.onValueChange(value)}
          disabled={disabled}
          ref={ref}
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            "aspect-square h-4 w-4 rounded-full border transition-all flex items-center justify-center",
            isChecked
              ? "border-primary text-primary ring-2 ring-primary/20"
              : "border-muted-foreground/40 hover:border-primary/60",
            className
          )}
        >
          <Circle
            className={cn(
              "h-2 w-2 fill-current text-current transition-transform duration-150",
              isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          />
        </div>
      </label>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
