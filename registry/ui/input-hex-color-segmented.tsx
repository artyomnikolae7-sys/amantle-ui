"use client";
import React, { useState } from "react";
/**
 * @component InputHexColorSegmented
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function InputHexColorSegmented({
  value,
  onChange,
  className = "",
}: {
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}) {
  const [val, setVal] = useState(value || "");
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={`w-full max-w-sm space-y-1.5 ${className}`}>
      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
        <span>🎨</span>
        <span>HEX Color Code</span>
      </label>
      <div
        className={`relative flex items-center rounded-xl border bg-card/60 backdrop-blur-sm transition-all duration-200 ${
          focused
            ? "border-primary ring-2 ring-primary/20 shadow-sm"
            : "border-border/60 hover:border-border"
        }`}
      >
        <span className="px-3 py-2 text-xs font-mono font-medium text-muted-foreground select-none bg-muted/40 border-r border-border/50 rounded-l-xl">
          #
        </span>
        <input
          type="text"
          value={val}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          placeholder="6366F1"
          className="w-full bg-transparent px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-mono"
        />
        {val && (
          <button
            type="button"
            onClick={() => { setVal(""); onChange?.(""); }}
            className="mr-2 text-xs text-muted-foreground hover:text-foreground p-1 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground">Integrated suffix and prefix badge blocks</p>
    </div>
  );
}
export default InputHexColorSegmented;
