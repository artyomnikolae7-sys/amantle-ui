/**
 * @source https://amantle.dev/components/button-copy-morph
 * @author AMANTLE UI
 * @license MIT
 * @modified Icon morphing copy animation
 */
"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

export function ButtonCopyMorph({
  value = "npm i @amantle/ui",
  label = "Копировать",
}: {
  value?: string;
  label?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-sm font-mono transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:scale-95"
    >
      <div className="relative w-4 h-4">
        <Copy
          className={`w-4 h-4 absolute inset-0 text-muted-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-300 ${
            copied ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"
          }`}
        />
        <Check
          className={`w-4 h-4 absolute inset-0 text-emerald-500 transition-[color,background-color,border-color,box-shadow,transform] duration-300 ${
            copied ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
          }`}
        />
      </div>
      <span>{copied ? "Скопировано!" : label}</span>
    </button>
  );
}
export default ButtonCopyMorph;
