/**
 * @source https://amantle.dev/components/input-auto-grow-textarea
 * @author AMANTLE UI
 * @license MIT
 * @modified Dynamic scrollHeight expansion
 */
"use client";

import * as React from "react";

export function InputAutoGrowTextarea({
  placeholder = "Начните печатать длинный текст, поле расширится само...",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  return (
    <div className="max-w-md w-full">
      <textarea
        ref={ref}
        rows={2}
        onInput={handleInput}
        placeholder={placeholder}
        className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none overflow-hidden transition-[color,background-color,border-color,box-shadow,transform] duration-150"
        {...props}
      />
    </div>
  );
}
export default InputAutoGrowTextarea;
