/**
 * @source https://amantle.dev/components/input-tag-chips
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill chip management with Enter hotkey
 */
"use client";

import * as React from "react";
import { X, Tag } from "lucide-react";

export function InputTagChips() {
  const [tags, setTags] = React.useState(["React", "Tailwind", "DesignSystem"]);
  const [input, setInput] = React.useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (t: string) => {
    setTags(tags.filter((item) => item !== t));
  };

  return (
    <div className="max-w-md w-full rounded-xl border border-border bg-card p-2 flex flex-wrap gap-1.5 items-center">
      <Tag className="w-4 h-4 text-muted-foreground ml-1" />
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
        >
          <span>{tag}</span>
          <button onClick={() => removeTag(tag)} className="hover:text-destructive">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Добавить тег..."
        className="flex-1 min-w-[100px] bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2 py-1"
      />
    </div>
  );
}
export default InputTagChips;
