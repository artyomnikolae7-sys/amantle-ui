/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Comparison table against competitors
 */

import * as React from "react";
import { Check, X } from "lucide-react";

export default function FeatureComparisonMatrix() {
  const rows = [
    { feature: "Tailwind CSS v4 Variables", us: true, them: false },
    { feature: "AI / MCP Сервер", us: true, them: false },
    { feature: "Интерактивный Playground", us: true, them: true },
    { feature: "Режим A/B сравнения токенов", us: true, them: false },
    { feature: "Source Provenance JSDoc", us: true, them: false },
    { feature: "Code Ownership (без npm-bloat)", us: true, them: true },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto rounded-2xl border border-border bg-card shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-foreground text-center">Сравнение с аналогами</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-border/80 text-muted-foreground">
              <th className="pb-3 font-semibold">Функциональность</th>
              <th className="pb-3 font-bold text-primary text-center">AMANTLE UI</th>
              <th className="pb-3 font-semibold text-center">Другие библиотеки</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="py-2.5 font-medium text-foreground">{r.feature}</td>
                <td className="py-2.5 text-center text-emerald-500 font-bold">
                  {r.us ? <Check className="h-4 w-4 mx-auto text-primary" /> : <X className="h-4 w-4 mx-auto text-rose-500" />}
                </td>
                <td className="py-2.5 text-center text-muted-foreground">
                  {r.them ? <Check className="h-4 w-4 mx-auto text-muted-foreground" /> : <X className="h-4 w-4 mx-auto text-muted-foreground/40" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
