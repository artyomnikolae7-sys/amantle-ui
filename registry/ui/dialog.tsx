/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/dialog.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, defaultOpen = false, onOpenChange, children }: DialogProps) {
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
    <DialogContext.Provider value={{ open: activeOpen, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const ctx = React.useContext(DialogContext);
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
DialogTrigger.displayName = "DialogTrigger";

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClick, ...props }, ref) => {
  const ctx = React.useContext(DialogContext);
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
DialogClose.displayName = "DialogClose";

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(DialogContext);
  if (!ctx?.open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in motion-reduce:animate-none fade-in-0 p-4 cursor-pointer"
      onClick={() => ctx.setOpen(false)}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-2xl duration-200 animate-in motion-reduce:animate-none zoom-in-95 cursor-default",
          className
        )}
        {...props}
      >
        {children}
        <button
          type="button"
          onClick={() => ctx.setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer p-1"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
});
DialogContent.displayName = "DialogContent";

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
}
DialogHeader.displayName = "DialogHeader";

function DialogFooter({
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
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
