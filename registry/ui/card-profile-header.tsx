/**
 * @source https://amantle.dev/components/card-profile-header
 * @author AMANTLE UI
 * @license MIT
 * @modified Profile header banner with overlapping avatar
 */
"use client";

import * as React from "react";
import { UserCheck } from "lucide-react";

export function CardProfileHeader({
  name = "Александр Волков",
  role = "Lead Design Engineer",
}: {
  name?: string;
  role?: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-lg max-w-sm w-full">
      <div className="h-20 bg-gradient-to-r from-violet-600 to-indigo-600" />
      <div className="p-5 pt-0 relative">
        <div className="w-14 h-14 rounded-2xl bg-card border-4 border-card -mt-7 flex items-center justify-center text-foreground font-bold shadow-md bg-secondary">
          АВ
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Подписаться</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardProfileHeader;
