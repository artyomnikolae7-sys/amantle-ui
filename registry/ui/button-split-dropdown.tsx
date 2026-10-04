/**
 * @source https://amantle.dev/components/button-split-dropdown
 * @author AMANTLE UI
 * @license MIT
 * @modified Split main action and popover trigger
 */
"use client";

import * as React from "react";
import { ChevronDown, GitFork, Sparkles } from "lucide-react";

export function ButtonSplitDropdown({
  label = "Смерджить PR",
}: {
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-flex items-stretch rounded-xl shadow-sm">
      <button
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-l-xl transition-colors active:scale-[0.98]"
      >
        <GitFork className="w-4 h-4" />
        <span>{label}</span>
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-2.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-r-xl border-l border-emerald-500/40 transition-colors"
      >
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-card border border-border shadow-xl p-1.5 z-50 flex flex-col gap-1">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <GitFork className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Merge commit</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Squash and merge</span>
          </button>
        </div>
      )}
    </div>
  );
}
export default ButtonSplitDropdown;
