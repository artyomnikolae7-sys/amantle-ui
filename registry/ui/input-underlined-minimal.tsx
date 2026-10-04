/**
 * @source https://amantle.dev/components/input-underlined-minimal
 * @author AMANTLE UI
 * @license MIT
 * @modified Center-expanding underline border focus
 */
"use client";

import * as React from "react";

export function InputUnderlinedMinimal({
  label = "Имя пользователя",
  placeholder = "alex_amantle",
  ...props
}: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative max-w-sm w-full py-2">
      <label className="text-xs font-medium text-muted-foreground block mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/60 border-b border-border focus:outline-none"
          {...props}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary group-focus-within:w-full transition-[color,background-color,border-color,box-shadow,transform] duration-300 pointer-events-none peer-focus:w-full" />
      </div>
    </div>
  );
}
export default InputUnderlinedMinimal;
