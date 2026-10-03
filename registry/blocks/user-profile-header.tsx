/**
 * @source https://amantle.dev/registry/blocks/user-profile-header
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Edit3, MapPin, Calendar } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";

export function UserProfileHeader() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-primary/30 via-primary/10 to-muted" />
      <div className="px-6 pb-6 pt-0 relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 sm:-mt-16 text-center sm:text-left">
          <Avatar className="h-24 w-24 border-4 border-card shadow-lg">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
              ВК
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h3 className="text-xl font-bold text-foreground">Виктор Капустин</h3>
              <Badge variant="secondary" className="text-xs">PRO</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Архитектор пользовательских интерфейсов</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1 justify-center sm:justify-start">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> Санкт-Петербург
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> В проекте с 2024
              </span>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline" className="gap-2 shrink-0">
          <Edit3 className="h-3.5 w-3.5" /> Редактировать профиль
        </Button>
      </div>
    </div>
  );
}

export default UserProfileHeader;
