/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/switch.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, defaultChecked, onChange, onCheckedChange, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const activeChecked = checked !== undefined ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label className={cn("inline-flex items-center cursor-pointer select-none", disabled && "cursor-not-allowed opacity-50")}>
        <input
          type="checkbox"
          className="sr-only"
          checked={activeChecked}
          onChange={handleChange}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            activeChecked ? "bg-primary" : "bg-input",
            className
          )}
        >
          <span
            className={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
              activeChecked ? "translate-x-5" : "translate-x-0"
            )}
          />
        </div>
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
