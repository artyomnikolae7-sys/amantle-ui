/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/sheet.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Sheet({ open, defaultOpen = false, onOpenChange, children }: SheetProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const activeOpen = open !== undefined ? open : isOpen;

  const setOpen = React.useCallback(
    (val: boolean) => {
      if (open === undefined) setIsOpen(val);
      onOpenChange?.(val);
    },
    [open, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open: activeOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const ctx = React.useContext(SheetContext);
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          ctx?.setOpen(true);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
  const ctx = React.useContext(SheetContext);
  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => {
        ctx?.setOpen(false);
        onClick?.(e);
      }}
      {...props}
    />
  );
});
SheetClose.displayName = "SheetClose";

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-2xl transition ease-in-out duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border",
        bottom: "inset-x-0 bottom-0 border-t border-border",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l border-border sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const ctx = React.useContext(SheetContext);
    if (!ctx?.open) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in-0">
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
          <button
            type="button"
            onClick={() => ctx.setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    );
  }
);
SheetContent.displayName = "SheetContent";

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4",
        className
      )}
      {...props}
    />
  );
}
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
