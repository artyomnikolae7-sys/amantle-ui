/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/accordion.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (!defaultValue) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });

    const toggleItem = (value: string) => {
      if (type === "single") {
        setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
      } else {
        setOpenItems((prev) =>
          prev.includes(value)
            ? prev.filter((i) => i !== value)
            : [...prev, value]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={cn("w-full divide-y divide-border", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} className={cn("border-b border-border py-1", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const acc = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);
  const isOpen = item ? acc?.openItems.includes(item.value) : false;

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      onClick={() => item && acc?.toggleItem(item.value)}
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] hover:underline text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const acc = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);
  const isOpen = item ? acc?.openItems.includes(item.value) : false;

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-[color,background-color,border-color,box-shadow,transform] pb-4 pt-0 text-muted-foreground animate-in motion-reduce:animate-none fade-in-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
