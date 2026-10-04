"use client";

import React, { useState } from "react";

/**
 * @component OriginInputTag
 * @source https://originui.com/inputs
 * @author Origin UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface OriginInputTagProps {
  initialTags?: string[];
  maxTags?: number;
  className?: string;
}

export function OriginInputTag({
  initialTags = ["Next.js", "React 19", "Tailwind v4"],
  maxTags = 8,
  className = "",
}: OriginInputTagProps) {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [inputVal, setInputVal] = useState("");

  const addTag = () => {
    const val = inputVal.trim();
    if (val && !tags.includes(val) && tags.length < maxTags) {
      setTags([...tags, val]);
      setInputVal("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputVal && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className={`flex w-full max-w-sm flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium">Tags & Skills</span>
        <span className="text-[11px]">{tags.length}/{maxTags}</span>
      </div>
      <div className="flex min-h-[44px] flex-wrap items-center gap-1.5 rounded-xl border border-border/60 bg-card p-2 shadow-xs transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground transition-all hover:bg-muted/80"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-muted-foreground hover:text-foreground active:scale-90"
            >
              ×
            </button>
          </span>
        ))}
        {tags.length < maxTags && (
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? "Type and hit enter..." : "Add tag..."}
            className="flex-1 min-w-[80px] bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}

export default OriginInputTag;
