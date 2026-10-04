/**
 * @source https://amantle.dev/components/input-password-strength
 * @author AMANTLE UI
 * @license MIT
 * @modified Real-time password entropy bar and checklist
 */
"use client";

import * as React from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

export function InputPasswordStrength() {
  const [val, setVal] = React.useState("");
  const [show, setShow] = React.useState(false);

  const score = React.useMemo(() => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    return s;
  }, [val]);

  const strengthColor = ["bg-muted", "bg-rose-500", "bg-amber-500", "bg-blue-500", "bg-emerald-500"][score];
  const strengthText = ["Пусто", "Слабый", "Средний", "Хороший", "Отличный"][score];

  return (
    <div className="max-w-sm w-full space-y-2">
      <div className="relative flex items-center">
        <input
          type={show ? "text" : "password"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Надежный пароль..."
          className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 text-muted-foreground hover:text-foreground"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Надежность:
          </span>
          <span className="font-semibold text-foreground">{strengthText}</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-full flex-1 rounded-full transition-colors duration-300 ${
                score >= i ? strengthColor : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default InputPasswordStrength;
