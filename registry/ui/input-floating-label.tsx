/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Material / Modern SaaS Floating Label Input
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputFloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputFloatingLabel({
  id,
  className,
  label,
  value,
  onChange,
  ...props
}: InputFloatingLabelProps) {
  const [internalValue, setInternalValue] = React.useState("");
  const inputId = id || React.useId();
  const isFilled = Boolean(value ?? internalValue);

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        value={value ?? internalValue}
        onChange={(e) => {
          setInternalValue(e.target.value);
          onChange?.(e);
        }}
        placeholder=" "
        className={cn(
          "peer h-12 w-full rounded-md border border-input bg-background px-3 pt-4 pb-1 text-sm text-foreground shadow-xs transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "absolute left-3 top-3.5 text-xs text-muted-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary",
          isFilled && "top-1.5 text-[10px] text-muted-foreground"
        )}
      >
        {label}
      </label>
    </div>
  );
}
