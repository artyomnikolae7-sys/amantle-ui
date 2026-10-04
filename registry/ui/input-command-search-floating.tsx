"use client";
import React, { useState } from "react";
/**
 * @component InputCommandSearchFloating
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function InputCommandSearchFloating({
  className = "",
}: {
  className?: string;
}) {
  const [val, setVal] = useState("");

  return (
    <div className={`w-full max-w-sm space-y-1.5 ${className}`}>
      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
        <span>🔍</span>
        <span>Search Index Filter</span>
      </label>
      <div className={`flex items-center px-3 py-2 rounded-xl border bg-card transition-all ${"border-border relative pt-4"}`}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Type a query (⌘K)..."
          className="w-full bg-transparent text-xs font-medium focus:outline-hidden placeholder:text-muted-foreground/60"
        />
        <span className="text-[10px] font-bold text-muted-foreground ml-2 uppercase">floating</span>
      </div>
    </div>
  );
}
export default InputCommandSearchFloating;
