/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Vertical timeline feature roadmap
 */

import * as React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

export default function FeatureTimeline() {
  const milestones = [
    {
      period: "Q1 2026",
      status: "completed",
      title: "Запуск экосистемы AMANTLE UI",
      desc: "50 базовых UI-примитивов, полная типизация, интеграция с Tailwind CSS v4.",
    },
    {
      period: "Q2 2026",
      status: "active",
      title: "Релиз 100 компонентов и Showcase Playground",
      desc: "Интерактивная витрина, тулбар устройств, A/B сравнение и собственный MCP сервер.",
    },
    {
      period: "Q3 2026",
      status: "upcoming",
      title: "Визуальный конструктор страниц (Composer)",
      desc: "Drag-and-drop сборка лендингов и дашбордов с экспортом готового Next.js кода.",
    },
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h3 className="text-xl font-bold text-foreground text-center">Дорожная карта продукта</h3>
      <div className="relative border-l-2 border-border/80 ml-4 space-y-8 pl-6">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            <div
              className={`absolute -left-[31px] top-0.5 h-6 w-6 rounded-full border-2 border-background flex items-center justify-center text-xs ${
                m.status === "completed"
                  ? "bg-primary text-primary-foreground"
                  : m.status === "active"
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-muted text-muted-foreground border-border"
              }`}
            >
              {m.status === "completed" ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : m.status === "active" ? (
                <Sparkles className="h-3.5 w-3.5" />
              ) : (
                <Clock className="h-3.5 w-3.5" />
              )}
            </div>
            <div className="space-y-1">
              <Badge variant="outline" className="text-[10px] font-mono">
                {m.period}
              </Badge>
              <h4 className="text-sm font-bold text-foreground">{m.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
