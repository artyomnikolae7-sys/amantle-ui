/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/toggle.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed,
      defaultPressed = false,
      onPressedChange,
      variant,
      size,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = React.useState(defaultPressed);
    const active = pressed !== undefined ? pressed : isPressed;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (pressed === undefined) {
        setIsPressed(!isPressed);
      }
      onPressedChange?.(!active);
      onClick?.(e);
    };

    return (
      <button
        type="button"
        aria-pressed={active}
        data-state={active ? "on" : "off"}
        className={cn(toggleVariants({ variant, size, className }))}
        onClick={handleClick}
        ref={ref}
        {...props}
      />
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
