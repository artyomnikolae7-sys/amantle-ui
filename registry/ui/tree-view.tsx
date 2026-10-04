/**
 * @source https://shadcnui-expansions.typecraft.dev/docs/tree-view
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Folder, FolderOpen, File, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TreeViewProps {
  className?: string;
}

export function TreeView({ className }: TreeViewProps) {
  const [openFolders, setOpenFolders] = React.useState<Record<string, boolean>>({
    src: true,
    components: true,
  });

  const toggle = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={cn("w-64 rounded-xl border border-border bg-card p-3 font-mono text-xs shadow-md", className)}>
      <div className="space-y-1">
        <div>
          <button
            onClick={() => toggle("src")}
            className="flex items-center gap-1.5 w-full text-left py-1 px-1.5 rounded hover:bg-muted text-foreground cursor-pointer"
          >
            <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", openFolders.src && "rotate-90")} />
            {openFolders.src ? <FolderOpen className="h-4 w-4 text-primary" /> : <Folder className="h-4 w-4 text-primary" />}
            <span className="font-semibold">src</span>
          </button>

          {openFolders.src && (
            <div className="pl-4 space-y-1 mt-1 border-l border-border/50 ml-2">
              <button
                onClick={() => toggle("components")}
                className="flex items-center gap-1.5 w-full text-left py-1 px-1.5 rounded hover:bg-muted text-foreground cursor-pointer"
              >
                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", openFolders.components && "rotate-90")} />
                {openFolders.components ? <FolderOpen className="h-4 w-4 text-amber-500" /> : <Folder className="h-4 w-4 text-amber-500" />}
                <span>components</span>
              </button>

              {openFolders.components && (
                <div className="pl-4 space-y-1 mt-1 border-l border-border/50 ml-2">
                  <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                    <File className="h-3.5 w-3.5 text-blue-400" /> button.tsx
                  </div>
                  <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                    <File className="h-3.5 w-3.5 text-blue-400" /> card.tsx
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                <File className="h-3.5 w-3.5 text-emerald-400" /> main.tsx
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
