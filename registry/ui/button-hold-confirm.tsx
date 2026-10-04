/**
 * @source https://amantle.dev/components/button-hold-confirm
 * @author AMANTLE UI
 * @license MIT
 * @modified Long-press progress fill confirmation logic
 */
"use client";

import * as React from "react";
import { Trash2, CheckCircle2 } from "lucide-react";

export function ButtonHoldConfirm({
  duration = 1500,
  onConfirm,
  label = "Удерживайте для удаления",
}: {
  duration?: number;
  onConfirm?: () => void;
  label?: string;
}) {
  const [progress, setProgress] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const timerRef = React.useRef<any>(null);
  const startTimeRef = React.useRef<number>(0);

  const startHold = () => {
    if (completed) return;
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timerRef.current);
        setCompleted(true);
        onConfirm?.();
        setTimeout(() => {
          setCompleted(false);
          setProgress(0);
        }, 2000);
      }
    }, 20);
  };

  const endHold = () => {
    if (completed) return;
    clearInterval(timerRef.current);
    setProgress(0);
  };

  return (
    <button
      onMouseDown={startHold}
      onMouseUp={endHold}
      onMouseLeave={endHold}
      onTouchStart={startHold}
      onTouchEnd={endHold}
      className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive font-medium text-sm select-none transition-[color,background-color,border-color,box-shadow,transform] active:scale-[0.98]"
    >
      <div
        className="absolute inset-0 bg-destructive/30 transition-[color,background-color,border-color,box-shadow,transform] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {completed ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-bounce motion-reduce:animate-none" />
            <span className="text-emerald-500 font-semibold">Успешно!</span>
          </>
        ) : (
          <>
            <Trash2 className="w-4 h-4" />
            <span>{label}</span>
          </>
        )}
      </span>
    </button>
  );
}
export default ButtonHoldConfirm;
