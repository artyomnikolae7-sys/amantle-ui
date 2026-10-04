"use client";

import React, { useState } from "react";

/**
 * @component AiPromptInput
 * @source https://21st.dev/community/ai-prompt-input
 * @author 21st.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface AiPromptInputProps {
  placeholder?: string;
  onSubmit?: (prompt: string) => void;
  className?: string;
}

export function AiPromptInput({
  placeholder = "Ask AMANTLE AI anything...",
  onSubmit,
  className = "",
}: AiPromptInputProps) {
  const [val, setVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!val.trim()) return;
    onSubmit?.(val);
    setVal("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex w-full max-w-lg items-center gap-2 rounded-2xl border border-border/60 bg-card p-2 shadow-lg transition-all focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 ${className}`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-xs font-bold">
        ✨
      </div>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        disabled={!val.trim()}
        className="shrink-0 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all duration-150 disabled:opacity-40 hover:bg-primary/90 active:scale-[0.96]"
      >
        Send →
      </button>
    </form>
  );
}

export default AiPromptInput;
