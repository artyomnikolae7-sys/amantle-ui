/**
 * @source https://amantle.dev/registry/blocks/team-members-grid
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";
import { Card, CardContent } from "@/registry/ui/card";

export function TeamMembersGrid() {
  const members = [
    { name: "Анна Мельникова", role: "Design Director", initials: "АМ" },
    { name: "Максим Орлов", role: "Principal Engineer", initials: "МО" },
    { name: "София Лебедева", role: "Product Designer", initials: "СЛ" },
    { name: "Артем Новиков", role: "Design Technologist", initials: "АН" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Команда создателей</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Инженеры и дизайнеры, развивающие открытую экосистему AMANTLE UI
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m) => (
            <Card key={m.name} className="p-6 text-center border-border">
              <CardContent className="p-0 flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                    {m.initials}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-sm text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembersGrid;
