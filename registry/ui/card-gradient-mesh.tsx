/**
 * @source https://amantle.dev/components/card-gradient-mesh
 * @author AMANTLE UI
 * @license MIT
 * @modified Fluid animated mesh backdrop
 */
"use client";

import * as React from "react";
import { Cpu } from "lucide-react";

export function CardGradientMesh() {
  return (
    <div className="relative rounded-3xl p-6 bg-card border border-border/80 overflow-hidden max-w-sm w-full shadow-lg">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-pink-500/30 to-violet-600/30 rounded-full blur-2xl animate-pulse motion-reduce:animate-none" />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Cpu className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-base text-foreground mb-1">Mesh Градиент</h4>
        <p className="text-xs text-muted-foreground">Глубокие визуальные акценты для SaaS дашбордов.</p>
      </div>
    </div>
  );
}
export default CardGradientMesh;
