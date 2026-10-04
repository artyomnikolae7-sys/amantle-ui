/**
 * @source https://amantle.dev/components/input-stepper-number
 * @author AMANTLE UI
 * @license MIT
 * @modified Plus-minus stepper with limits
 */
"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";

export function InputStepperNumber({
  min = 1,
  max = 20,
}: {
  min?: number;
  max?: number;
}) {
  const [val, setVal] = React.useState(3);

  return (
    <div className="inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-sm">
      <button
        onClick={() => setVal(Math.max(min, val - 1))}
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="w-10 text-center font-mono font-bold text-sm text-foreground">{val}</span>
      <button
        onClick={() => setVal(Math.min(max, val + 1))}
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
export default InputStepperNumber;
