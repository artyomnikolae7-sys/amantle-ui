"use client";
import React from "react";
/**
 * @component HyperBlockTeamMemberPill
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockTeamMemberPill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-border bg-card rounded-3xl"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">👤</span>
        <div>
          <div className="text-sm font-bold text-foreground">Team Contributor Portrait</div>
          <div className="text-xs text-muted-foreground">Curved Capsule Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockTeamMemberPill;
