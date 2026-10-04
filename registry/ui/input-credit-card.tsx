/**
 * @source https://amantle.dev/components/input-credit-card
 * @author AMANTLE UI
 * @license MIT
 * @modified Card number grouping with 4-digit spacers
 */
"use client";

import * as React from "react";
import { CreditCard } from "lucide-react";

export function InputCreditCard() {
  const [val, setVal] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
    setVal(formatted);
  };

  return (
    <div className="max-w-sm w-full">
      <div className="relative flex items-center">
        <CreditCard className="w-4 h-4 absolute left-3.5 text-muted-foreground" />
        <input
          type="text"
          value={val}
          onChange={handleChange}
          placeholder="0000 0000 0000 0000"
          className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}
export default InputCreditCard;
