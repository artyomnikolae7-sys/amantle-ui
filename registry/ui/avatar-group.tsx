/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Overlapping avatar stack
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarGroupProps {
  users: Array<{ name: string; avatar?: string }>;
  max?: number;
  className?: string;
}

export function AvatarGroup({ users, max = 4, className }: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className={cn("flex items-center -space-x-2.5", className)}>
      {visible.map((user, i) => (
        <div
          key={i}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-bold text-foreground overflow-hidden shadow-2xs"
          title={user.name}
        >
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
          ) : (
            user.name.slice(0, 2).toUpperCase()
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-primary text-xs font-bold shadow-2xs">
          +{remaining}
        </div>
      )}
    </div>
  );
}
