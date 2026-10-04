/**
 * @source https://ui.shadcn.com / AMANTLE UI
 * @author AMANTLE UI
 * @license MIT
 * @modified Unified button group suite: ButtonGroup, SplitButton, and SegmentedControl
 */

"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/ui/dropdown-menu";

/* -------------------------------------------------------------------------- */
/*                                 BUTTON GROUP                               */
/* -------------------------------------------------------------------------- */

const buttonGroupVariants = cva("inline-flex items-center", {
  variants: {
    orientation: {
      horizontal:
        "-space-x-px flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:border-l-0 focus-within:z-10",
      vertical:
        "-space-y-px flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:border-t-0 focus-within:z-10",
    },
    attached: {
      true: "shadow-xs",
      false: "gap-2 space-x-0 space-y-0 shadow-none [&>*]:rounded-md",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    attached: true,
  },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", attached = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(buttonGroupVariants({ orientation, attached, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

export const ButtonGroupItem = Button;

/* -------------------------------------------------------------------------- */
/*                                SPLIT BUTTON                                */
/* -------------------------------------------------------------------------- */

export interface SplitButtonAction {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  destructive?: boolean;
}

export interface SplitButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  menuItems: SplitButtonAction[];
  dropdownAlign?: "start" | "end" | "center";
}

export const SplitButton = React.forwardRef<HTMLButtonElement, SplitButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      disabled = false,
      onClick,
      menuItems,
      dropdownAlign = "end",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("inline-flex items-center -space-x-px rounded-md shadow-xs active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100", className)}>
        {/* Main Action Button */}
        <Button
          ref={ref}
          variant={variant}
          size={size}
          disabled={disabled}
          onClick={onClick}
          className="rounded-r-none focus-visible:z-10"
          {...props}
        >
          {children}
        </Button>

        {/* Dropdown Chevron Trigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={variant}
              size={size}
              disabled={disabled}
              className={cn(
                "rounded-l-none border-l border-black/15 dark:border-white/15 px-2 focus-visible:z-10",
                variant === "outline" && "border-l-0"
              )}
              aria-label="Больше действий"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={dropdownAlign} className="min-w-44">
            {menuItems.map((item, idx) => (
              <DropdownMenuItem
                key={idx}
                onClick={item.onClick}
                className={cn(
                  "gap-2 text-xs cursor-pointer",
                  item.destructive && "text-destructive focus:text-destructive"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
);
SplitButton.displayName = "SplitButton";

/* -------------------------------------------------------------------------- */
/*                             SEGMENTED CONTROL                              */
/* -------------------------------------------------------------------------- */

export interface SegmentedOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  size = "default",
  className,
}: SegmentedControlProps) {
  const [internalValue, setInternalValue] = React.useState(
    value || defaultValue || options[0]?.value || ""
  );

  const activeValue = value !== undefined ? value : internalValue;

  const handleSelect = (val: string) => {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
  };

  const sizeClasses = {
    sm: "h-7 text-xs px-2.5 py-1",
    default: "h-8 text-xs px-3 py-1.5",
    lg: "h-9 text-sm px-4 py-2",
  }[size];

  return (
    <div
      role="radiogroup"
      className={cn(
        "inline-flex items-center rounded-lg bg-muted/60 p-1 border border-border/60 select-none",
        className
      )}
    >
      {options.map((opt) => {
        const isSelected = activeValue === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={opt.disabled}
            onClick={() => handleSelect(opt.value)}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40",
              sizeClasses,
              isSelected
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
            )}
          >
            {opt.icon}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
