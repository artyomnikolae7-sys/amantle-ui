/**
 * @source https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/select.tsx
 * @author shadcn
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedLabel: string;
  setSelectedLabel: (label: string) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

function Select({ value, defaultValue = "", onValueChange, children }: SelectProps) {
  const [val, setVal] = React.useState(defaultValue);
  const [selectedLabel, setSelectedLabel] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const activeValue = value !== undefined ? value : val;

  const handleValueChange = (newVal: string) => {
    if (value === undefined) setVal(newVal);
    onValueChange?.(newVal);
  };

  return (
    <SelectContext.Provider
      value={{
        value: activeValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  );
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectContext);

  return (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-expanded={ctx?.open}
      onClick={() => ctx?.setOpen(!ctx.open)}
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = React.useContext(SelectContext);
  return (
    <span className="block truncate">
      {ctx?.selectedLabel || ctx?.value || placeholder || "Select an option"}
    </span>
  );
}

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectContext);
  if (!ctx?.open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => ctx.setOpen(false)}
      />
      <div
        ref={ref}
        role="listbox"
        className={cn(
          "absolute z-50 mt-1 max-h-96 min-w-[8rem] w-full overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in motion-reduce:animate-none fade-in-0 zoom-in-95",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
});
SelectContent.displayName = "SelectContent";

export interface SelectItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const ctx = React.useContext(SelectContext);
    const isSelected = ctx?.value === value;

    React.useEffect(() => {
      if (isSelected && typeof children === "string") {
        ctx?.setSelectedLabel(children);
      }
    }, [isSelected, children]);

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        onClick={() => {
          ctx?.onValueChange(value);
          if (typeof children === "string") {
            ctx?.setSelectedLabel(children);
          }
          ctx?.setOpen(false);
        }}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          isSelected && "font-medium text-foreground",
          className
        )}
        {...props}
      >
        {isSelected && (
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check className="h-4 w-4" />
          </span>
        )}
        <span className="truncate">{children}</span>
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
