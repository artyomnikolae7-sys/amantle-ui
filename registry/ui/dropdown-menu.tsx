/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/dropdown-menu.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(null);

export interface DropdownMenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function DropdownMenu({ open, defaultOpen = false, onOpenChange, children }: DropdownMenuProps) {
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
    <DropdownMenuContext.Provider value={{ open: activeOpen, setOpen, toggle }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
  const ctx = React.useContext(DropdownMenuContext);
  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={ctx?.open}
      onClick={(e) => {
        ctx?.toggle();
        onClick?.(e);
      }}
      {...props}
    />
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, align = "end", ...props }, ref) => {
    const ctx = React.useContext(DropdownMenuContext);
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
          role="menu"
          className={cn(
            "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
            alignClass,
            className
          )}
          {...props}
        />
      </>
    );
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }
>(({ className, inset, onClick, ...props }, ref) => {
  const ctx = React.useContext(DropdownMenuContext);

  return (
    <div
      ref={ref}
      role="menuitem"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
        ctx?.setOpen(false);
      }}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
};
