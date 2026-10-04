/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Tokenized OTP input cells
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputOtpProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function InputOtp({ length = 6, value = "", onChange, className }: InputOtpProps) {
  const [internalVal, setInternalVal] = React.useState(value);
  const currentVal = value ?? internalVal;

  const handleChange = (index: number, char: string) => {
    const chars = currentVal.padEnd(length, " ").split("");
    chars[index] = char.slice(-1);
    const updated = chars.join("").trimEnd();
    setInternalVal(updated);
    onChange?.(updated);

    if (char && index < length - 1) {
      const nextInput = document.getElementById(`otp-cell-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          id={`otp-cell-${i}`}
          type="text"
          maxLength={1}
          value={currentVal[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          className="h-12 w-10 text-center font-mono text-lg font-bold rounded-md border border-input bg-background text-foreground shadow-xs transition-[color,background-color,border-color,box-shadow,transform] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        />
      ))}
    </div>
  );
}
