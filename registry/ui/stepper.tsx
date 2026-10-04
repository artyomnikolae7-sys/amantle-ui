/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Multi-step wizard indicator
 */

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep = 1, className }: StepperProps) {
  return (
    <div className={cn("flex items-center w-full max-w-xl justify-between", className)}>
      {steps.map((label, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-[color,background-color,border-color,box-shadow,transform]",
                  isCompleted && "bg-primary text-primary-foreground",
                  isActive && "border-2 border-primary bg-background text-primary ring-4 ring-primary/20",
                  !isCompleted && !isActive && "border border-border bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : stepNum}
              </div>
              <span className={cn("text-xs font-medium", isActive ? "text-foreground font-semibold" : "text-muted-foreground")}>
                {label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2",
                  idx + 1 < currentStep ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
