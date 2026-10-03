/**
 * @source https://amantle.dev/registry/blocks/pricing-comparison-table
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Check, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";
import { Button } from "@/registry/ui/button";

export function PricingComparisonTable() {
  const rows = [
    { feature: "Базовые компоненты UI", free: true, pro: true, ent: true },
    { feature: "Составные блоки (Blocks)", free: "20 блоков", pro: "Все 100+", ent: "Безлимитно" },
    { feature: "Полноценные шаблоны страниц", free: false, pro: "3 шаблона", ent: "Все шаблоны" },
    { feature: "Tailwind CSS v4 токены", free: true, pro: true, ent: true },
    { feature: "MCP-сервер для AI IDE", free: false, pro: true, ent: true },
    { feature: "Кастомные цветовые схемы", free: false, pro: "5 палитр", ent: "Неограниченно" },
    { feature: "Аудит лицензий Provenance", free: true, pro: true, ent: true },
    { feature: "Приоритетная поддержка", free: false, pro: false, ent: true },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Сравнение функционала тарифов</h2>
          <p className="mt-2 text-muted-foreground">Детальная матрица возможностей каждого уровня</p>
        </div>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead className="w-1/2">Возможность</TableHead>
                <TableHead className="text-center">Free</TableHead>
                <TableHead className="text-center font-bold text-primary">Pro</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="text-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? <Check className="inline h-4 w-4 text-primary" /> : <Minus className="inline h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-xs">{row.free}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center font-semibold">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? <Check className="inline h-4 w-4 text-primary" /> : <Minus className="inline h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-xs text-primary">{row.pro}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof row.ent === "boolean" ? (
                      row.ent ? <Check className="inline h-4 w-4 text-primary" /> : <Minus className="inline h-4 w-4 text-muted-foreground" />
                    ) : (
                      <span className="text-xs">{row.ent}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default PricingComparisonTable;
