/**
 * @source https://amantle.dev/components/radio-card-group
 * @author AMANTLE UI
 * @license MIT
 * @modified Rich card selection group with accent outline
 */
"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

export function RadioCardGroup() {
  const [selected, setSelected] = React.useState("pro");

  const plans = [
    { id: "free", name: "Стартовый", price: "0 ₽", desc: "Для личных пет-проектов" },
    { id: "pro", name: "Профессиональный", price: "1 290 ₽", desc: "Для продакшн команд" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md w-full">
      {plans.map((p) => {
        const isSel = selected === p.id;
        return (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`cursor-pointer rounded-2xl border p-4 transition-[color,background-color,border-color,box-shadow,transform] duration-200 ${
              isSel
                ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-foreground">{p.name}</span>
              <CheckCircle2
                className={`w-4 h-4 transition-opacity ${isSel ? "text-primary opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className="font-mono text-lg font-extrabold text-foreground">{p.price}</div>
            <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default RadioCardGroup;
