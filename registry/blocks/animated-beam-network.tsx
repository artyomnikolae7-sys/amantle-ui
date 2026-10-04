/**
 * @source https://magicui.design/docs/components/animated-beam
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Interactive SVG animated beam network visualization between system infrastructure nodes
 */

"use client";

import * as React from "react";
import { Server, Database, Bot, Shield, Cloud, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NodeItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: "client" | "gateway" | "service";
  x: number;
  y: number;
}

export interface AnimatedBeamNetworkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function AnimatedBeamNetwork({
  title = "Архитектурный коннектор Animated Beam",
  description = "Сквозной пайплайн передачи данных между микросервисами и моделями AI",
  className,
  ...props
}: AnimatedBeamNetworkProps) {
  // SVG Canvas dimensions
  const width = 760;
  const height = 300;

  // Nodes definition
  const clientNode: NodeItem = {
    id: "client",
    name: "Web Client",
    icon: <Cloud className="h-5 w-5 text-sky-500" />,
    category: "client",
    x: 80,
    y: 150,
  };

  const gatewayNode: NodeItem = {
    id: "gateway",
    name: "Edge Gateway",
    icon: <Server className="h-6 w-6 text-primary" />,
    category: "gateway",
    x: 380,
    y: 150,
  };

  const serviceNodes: NodeItem[] = [
    {
      id: "ai",
      name: "AI Core (Claude/GPT)",
      icon: <Bot className="h-5 w-5 text-violet-500" />,
      category: "service",
      x: 680,
      y: 60,
    },
    {
      id: "db",
      name: "PostgreSQL Replica",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      category: "service",
      x: 680,
      y: 150,
    },
    {
      id: "auth",
      name: "Auth & Encryption",
      icon: <Shield className="h-5 w-5 text-amber-500" />,
      category: "service",
      x: 680,
      y: 240,
    },
  ];

  // Helper to build a smooth bezier curve path
  const createCurvedPath = (startX: number, startY: number, endX: number, endY: number) => {
    const deltaX = endX - startX;
    const cp1x = startX + deltaX * 0.5;
    const cp1y = startY;
    const cp2x = startX + deltaX * 0.5;
    const cp2y = endY;
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground tracking-tight">{title}</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real-time Stream 4.2k req/s</span>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="relative mt-6 h-80 w-full flex items-center justify-center bg-muted/20 rounded-lg overflow-hidden border border-border/60">
        {/* SVG Bezier Beams Layer */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Animated Linear Gradient for incoming beam */}
            <linearGradient id="beamGradientClient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              <animate
                attributeName="x1"
                from="-100%"
                to="100%"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                from="0%"
                to="200%"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* Animated Linear Gradient for service beams */}
            <linearGradient id="beamGradientService" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              <animate
                attributeName="x1"
                from="-100%"
                to="100%"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                from="0%"
                to="200%"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          {/* 1. Client to Gateway */}
          <g>
            {/* Base static path */}
            <path
              d={createCurvedPath(clientNode.x + 30, clientNode.y, gatewayNode.x - 35, gatewayNode.y)}
              fill="none"
              className="stroke-border"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated beam */}
            <path
              d={createCurvedPath(clientNode.x + 30, clientNode.y, gatewayNode.x - 35, gatewayNode.y)}
              fill="none"
              stroke="url(#beamGradientClient)"
              strokeWidth="3"
              strokeLinecap="round"
              className="motion-reduce:hidden"
            />
          </g>

          {/* 2. Gateway to Service Nodes */}
          {serviceNodes.map((service) => {
            const pathData = createCurvedPath(
              gatewayNode.x + 35,
              gatewayNode.y,
              service.x - 30,
              service.y
            );
            return (
              <g key={service.id}>
                {/* Base static path */}
                <path
                  d={pathData}
                  fill="none"
                  className="stroke-border"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Moving Beam */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#beamGradientService)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="motion-reduce:hidden"
                />
              </g>
            );
          })}
        </svg>

        {/* DOM Nodes Overlay */}
        <div className="relative w-full h-full max-w-[760px] mx-auto">
          {/* Client Node */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer"
            style={{ left: `${(clientNode.x / width) * 100}%`, top: `${(clientNode.y / height) * 100}%` }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-sky-500/40 bg-card shadow-lg shadow-sky-500/10 transition-transform group-hover:scale-105">
              {clientNode.icon}
            </div>
            <span className="text-[11px] font-semibold text-foreground whitespace-nowrap bg-card/80 px-2 py-0.5 rounded-md border border-border/60">
              {clientNode.name}
            </span>
          </div>

          {/* Gateway Node (Centerpiece) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer"
            style={{ left: `${(gatewayNode.x / width) * 100}%`, top: `${(gatewayNode.y / height) * 100}%` }}
          >
            <div className="relative flex h-18 w-18 items-center justify-center rounded-2xl border-2 border-primary bg-card shadow-2xl shadow-primary/25 transition-transform group-hover:scale-110">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-ping opacity-25 motion-reduce:hidden" />
              {gatewayNode.icon}
            </div>
            <span className="text-xs font-bold text-primary whitespace-nowrap bg-card/90 px-2.5 py-1 rounded-md border border-primary/30 shadow-xs">
              {gatewayNode.name}
            </span>
          </div>

          {/* Service Nodes */}
          {serviceNodes.map((service) => (
            <div
              key={service.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer"
              style={{ left: `${(service.x / width) * 100}%`, top: `${(service.y / height) * 100}%` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card shadow-md transition-transform group-hover:scale-105 group-hover:border-primary/50">
                {service.icon}
              </div>
              <span className="text-[11px] font-medium text-foreground whitespace-nowrap bg-card/80 px-2 py-0.5 rounded-md border border-border/60">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Сквозное шифрование TLS 1.3</span>
          <span>•</span>
          <span>Средняя задержка 12ms</span>
        </div>
        <div className="font-mono text-[11px] text-primary">
          SVG Bezier Curves + CSS Animations
        </div>
      </div>
    </div>
  );
}
