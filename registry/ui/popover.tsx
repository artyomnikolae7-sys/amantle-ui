/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/popover.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export interface PopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Popover({ open, defaultOpen = false, onOpenChange, children }: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const activeOpen = open !== undefined ? open : isOpen;

  const setOpen = React.useCallback(
    (val: boolean) => {
      if (open === undefined) setIsOpen(val);
      onOpenChange?.(val);
    },
    [open, onOpenChange]
  );

  const toggle = React.useCallback(() => {
    setOpen(!activeOpen);
  }, [activeOpen, setOpen]);

  return (
    <PopoverContext.Provider value={{ open: activeOpen, setOpen, toggle }}>
      <div className="relative inline-block text-left">{children}</div>
    </PopoverContext.Provider>
  );
}

export interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const ctx = React.useContext(PopoverContext);
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        aria-expanded={ctx?.open}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          ctx?.toggle();
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";

export interface PopoverContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, align = "center", ...props }, ref) => {
    const ctx = React.useContext(PopoverContext);
    if (!ctx?.open) return null;

    const alignClass =
      align === "start"
        ? "left-0"
        : align === "end"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

    return (
      <>
        <div
          className="fixed inset-0 z-40"
          onClick={() => ctx.setOpen(false)}
        />
        <div
          ref={ref}
          className={cn(
            "absolute z-50 mt-2 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in motion-reduce:animate-none fade-in-0 zoom-in-95",
            alignClass,
            className
          )}
          {...props}
        />
      </>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
