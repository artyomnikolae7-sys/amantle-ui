/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Interactive pricing slider calculator
 */

"use client";

import * as React from "react";
import { Check, Users } from "lucide-react";
import { Button } from "@/registry/ui/button";

export default function PricingSlider() {
  const [users, setUsers] = React.useState(25);

  const pricePerUser = users > 50 ? 8 : users > 20 ? 10 : 12;
  const totalPrice = users * pricePerUser;

  return (
    <div className="p-8 max-w-xl mx-auto rounded-2xl border border-border bg-card shadow-lg space-y-6">
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">Калькулятор тарифа</h3>
          <p className="text-xs text-muted-foreground">Платите только за фактическое количество мест в команде</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
          <Users className="h-3.5 w-3.5" />
          <span>{users} мест</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-xs font-semibold text-muted-foreground">
          <span>5 мест</span>
          <span>100 мест</span>
        </div>
        <input
          type="range"
          min={5}
          max={100}
          step={5}
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full h-2 rounded-lg bg-muted accent-primary cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between bg-muted/40 p-4 rounded-xl border border-border/40">
        <div>
          <span className="text-xs text-muted-foreground block">Итоговая стоимость:</span>
          <span className="text-3xl font-extrabold text-foreground">${totalPrice}</span>
          <span className="text-xs text-muted-foreground"> / месяц (${pricePerUser} за пользователя)</span>
        </div>
        <Button>Оформить подписку</Button>
      </div>
    </div>
  );
}
