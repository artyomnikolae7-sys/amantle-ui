/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/checkbox.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
      <label className={cn("relative inline-flex items-center cursor-pointer", disabled && "cursor-not-allowed opacity-50")}>
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
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex items-center justify-center transition-colors",
            activeChecked ? "bg-primary text-primary-foreground" : "bg-background",
            className
          )}
        >
          {activeChecked && <Check className="h-3 w-3 stroke-[3]" />}
        </div>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
