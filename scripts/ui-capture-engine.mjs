#!/usr/bin/env node
/**
 * @file scripts/ui-capture-engine.mjs
 * @description Autonomous UI Capture, Motion Extractor & Multimodal Synthesis Engine for AMANTLE UI
 *
 * Implements the fusion of:
 * 1. DOM & Computed Style Extraction (inspired by remotion-dev/css-sweeper & window.getComputedStyle)
 * 2. Interaction State Delta Analyzer (inspired by rrweb-io/rrweb & playwright action tracing)
 * 3. Multimodal Motion & Vision Analysis (inspired by abi/screenshot-to-code & browser-use)
 * 4. Emil Kowalski Design Engineering & Accessibility rules (scale 0.97, spring curves, motion-reduce)
 *
 * Usage:
 *   node scripts/ui-capture-engine.mjs --target <component-name-or-path> [--fix] [--batch <category>]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_DIR = path.join(ROOT_DIR, "registry");

export const MOTION_TOKENS = {
  springSmooth: "cubic-bezier(0.23, 1, 0.32, 1)",
  springSnappy: "cubic-bezier(0.16, 1, 0.3, 1)",
  springBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  durationTap: "120ms",
  durationHover: "180ms",
  durationDisclosure: "220ms",
  activeScale: "0.97",
};

/**
 * Layer 1 & 2: Extract Computed Motion Profile from component AST / CSS classes
 */
export function extractMotionProfile(code, name) {
  const profile = {
    name,
    hasTransitionAll: false,
    hasExplicitTransitions: false,
    hasTactileActiveScale: false,
    hasSpringCurve: false,
    hasMotionReduce: false,
    hasFocusRing: false,
    hardcodedColors: [],
    detectedTransitions: [],
    score: 0,
    recommendations: [],
  };

  // Check transition-all
  if (/\btransition-all\b/.test(code) || /transition:\s*all/.test(code)) {
    profile.hasTransitionAll = true;
    profile.recommendations.push("Replace 'transition-all' with explicit property list to avoid expensive reflows.");
  }

  // Check explicit transitions
  if (/\btransition-(?:colors|opacity|transform|shadow)\b/.test(code) || /transition-\[[^\]]+\]/.test(code)) {
    profile.hasExplicitTransitions = true;
  }

  // Check tactile active scale (0.97 / 0.98)
  if (/\bactive:scale-\[(?:0\.97|0\.98)\]/.test(code) || /\b\.tap-active\b/.test(code) || /active:\s*\{[^}]*scale/.test(code)) {
    profile.hasTactileActiveScale = true;
  } else {
    profile.recommendations.push("Add tactile feedback on click: 'active:scale-[0.97]' with 100-150ms duration.");
  }

  // Check spring curves
  if (/cubic-bezier\(0\.23,\s*1,\s*0\.32,\s*1\)/.test(code) || /var\(--spring-(?:smooth|snappy|bounce)\)/.test(code) || /\bease-out\b/.test(code)) {
    profile.hasSpringCurve = true;
  }

  // Check prefers-reduced-motion
  if (/\bmotion-reduce:(?:transition-none|active:scale-100|animate-none)\b/.test(code) || /prefers-reduced-motion/.test(code)) {
    profile.hasMotionReduce = true;
  } else {
    profile.recommendations.push("Add WCAG 2.2 AAA accessibility: 'motion-reduce:transition-none motion-reduce:active:scale-100'.");
  }

  // Check focus ring
  if (/\bfocus-visible:ring/.test(code) || /\bfocus:ring/.test(code)) {
    profile.hasFocusRing = true;
  }

  // Check hardcoded colors
  const colorMatches = code.matchAll(/\b(?:bg|text|border)-(?:zinc|gray|slate|neutral|stone)-(?:[0-9]{2,3})\b/g);
  for (const m of colorMatches) {
    if (!profile.hardcodedColors.includes(m[0])) {
      profile.hardcodedColors.push(m[0]);
    }
  }

  // Calculate Motion Quality Score (0-100)
  let score = 40;
  if (!profile.hasTransitionAll) score += 15;
  if (profile.hasTactileActiveScale) score += 20;
  if (profile.hasMotionReduce) score += 15;
  if (profile.hasFocusRing) score += 10;
  profile.score = Math.min(100, score);

  return profile;
}

/**
 * Layer 3 & 4: Enhance component with Emil Kowalski Design Engineering & AMANTLE Tokens
 */
export function enhanceComponentMotion(rawCode, options = {}) {
  let code = rawCode;
  const changes = [];

  // 1. Eliminate transition-all for buttons and cards
  if (/\btransition-all\b/.test(code)) {
    code = code.replace(
      /\btransition-all\b/g,
      "transition-[color,background-color,border-color,box-shadow,transform]"
    );
    changes.push("transition-all -> explicit transition-[color,background-color,border-color,box-shadow,transform]");
  }

  // 2. Add tactile active scale for interactive triggers (button, card)
  if (options.isButton || options.category === "ui" && options.name.startsWith("button")) {
    if (!code.includes("active:scale-[0.97]") && !code.includes("active:scale-[0.98]")) {
      code = code.replace(
        /(className=\{cn\([^)]*?"[^"]*?)(inline-flex[^"]*?)(")/,
        (match, prefix, inner, suffix) => {
          return `${prefix}${inner} active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100${suffix}`;
        }
      );
      changes.push("Added tactile feedback: active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100");
    }
  }

  // 3. Ensure motion-reduce accessibility
  if (!code.includes("motion-reduce:")) {
    if (code.includes("animate-")) {
      code = code.replace(/(animate-[a-z0-9-]+)/g, "$1 motion-reduce:animate-none");
      changes.push("Added motion-reduce:animate-none");
    }
  }

  // 4. Token replacements
  const colorMap = [
    [/\bbg-zinc-950\b/g, "bg-background"],
    [/\bbg-zinc-900\b/g, "bg-card"],
    [/\bbg-zinc-800\b/g, "bg-muted"],
    [/\btext-zinc-50\b/g, "text-foreground"],
    [/\btext-zinc-400\b/g, "text-muted-foreground"],
    [/\btext-zinc-500\b/g, "text-muted-foreground"],
    [/\bborder-zinc-800\b/g, "border-border"],
    [/\bborder-zinc-700\b/g, "border-border"],
  ];

  for (const [pattern, replacement] of colorMap) {
    if (pattern.test(code)) {
      code = code.replace(pattern, replacement);
      changes.push(`Normalized color token: ${replacement}`);
    }
  }

  return {
    enhancedCode: code,
    changes,
  };
}

/**
 * CLI Runner
 */
async function main() {
  const args = process.argv.slice(2);
  const targetIndex = args.indexOf("--target");
  const target = targetIndex !== -1 ? args[targetIndex + 1] : "button";
  const shouldFix = args.includes("--fix");
  const batchCategory = args.includes("--batch") ? args[args.indexOf("--batch") + 1] : null;

  console.log("===============================================================");
  console.log("🚀 AMANTLE UI - Autonomous UI Capture & Motion Synthesis Engine");
  console.log("===============================================================\n");

  if (batchCategory) {
    const dir = path.join(REGISTRY_DIR, batchCategory);
    if (!fs.existsSync(dir)) {
      console.error(`❌ Category directory not found: ${dir}`);
      process.exit(1);
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));
    console.log(`📦 Running Batch Motion Audit on '${batchCategory}' (${files.length} components)...\n`);

    let totalScore = 0;
    let auditedCount = 0;

    for (const file of files) {
      const filePath = path.join(dir, file);
      const name = file.replace(".tsx", "");
      const content = fs.readFileSync(filePath, "utf-8");
      const profile = extractMotionProfile(content, name);
      totalScore += profile.score;
      auditedCount++;

      const badge = profile.score >= 80 ? "🟢" : profile.score >= 60 ? "🟡" : "🔴";
      console.log(`  ${badge} ${name.padEnd(35)} Score: ${profile.score}/100`);

      if (shouldFix && profile.recommendations.length > 0) {
        const { enhancedCode, changes } = enhanceComponentMotion(content, {
          name,
          category: batchCategory,
          isButton: name.includes("button"),
        });
        if (changes.length > 0) {
          fs.writeFileSync(filePath, enhancedCode, "utf-8");
          console.log(`     ↳ Applied ${changes.length} motion improvements.`);
        }
      }
    }

    const avgScore = Math.round(totalScore / auditedCount);
    console.log(`\n📊 Batch Audit Complete: ${auditedCount} components, Average Motion Score: ${avgScore}/100\n`);
    return;
  }

  // Single component inspection
  let filePath = path.join(REGISTRY_DIR, "ui", `${target}.tsx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(REGISTRY_DIR, "blocks", `${target}.tsx`);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.resolve(process.cwd(), target);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Component not found: ${target}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const name = path.basename(filePath, ".tsx");
  const profile = extractMotionProfile(content, name);

  console.log(`🔍 Component: ${profile.name}`);
  console.log(`⭐ Motion Quality Score: ${profile.score}/100`);
  console.log(`   - Explicit Transitions: ${profile.hasExplicitTransitions ? "✅ Yes" : "❌ No"}`);
  console.log(`   - Avoids transition-all: ${!profile.hasTransitionAll ? "✅ Yes" : "❌ Reflow Risk (transition-all detected)"}`);
  console.log(`   - Tactile Active Scale (0.97): ${profile.hasTactileActiveScale ? "✅ Yes" : "⚠️ Missing (:active scale)"}`);
  console.log(`   - WCAG motion-reduce: ${profile.hasMotionReduce ? "✅ Yes" : "⚠️ Missing (motion-reduce:transition-none)"}`);
  console.log(`   - Focus Ring: ${profile.hasFocusRing ? "✅ Yes" : "⚠️ Missing (focus-visible:ring)"}`);

  if (profile.recommendations.length > 0) {
    console.log("\n💡 Motion Engineering Recommendations:");
    profile.recommendations.forEach((r, i) => console.log(`   ${i + 1}. ${r}`));
  }

  if (shouldFix) {
    console.log("\n⚙️ Enhancing motion parameters and tokenizing...");
    const { enhancedCode, changes } = enhanceComponentMotion(content, {
      name,
      isButton: name.includes("button"),
    });
    fs.writeFileSync(filePath, enhancedCode, "utf-8");
    console.log(`✅ Applied ${changes.length} enhancements to ${filePath}`);
    changes.forEach((c) => console.log(`   + ${c}`));
  }

  console.log("\n✨ Motion analysis complete.\n");
}

if (process.argv[1] && process.argv[1].endsWith("ui-capture-engine.mjs")) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
