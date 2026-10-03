#!/usr/bin/env node

/**
 * AMANTLE UI - Unit & Integration Tests for MCP Tools
 */

import assert from "node:assert/strict";
import {
  searchRegistry,
  getComponent,
  listCategories,
  getThemeTokens,
} from "../lib/mcp/tools.ts";

console.log("🧪 Running AMANTLE UI MCP Tools Tests...\n");

let passed = 0;
let total = 0;

function it(name, fn) {
  total++;
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(err);
  }
}

// 1. search_registry
it("search_registry: finds button component by query", () => {
  const results = searchRegistry({ query: "button" });
  assert.ok(results.length > 0, "Should find at least one button");
  const found = results.find((r) => r.name === "button");
  assert.ok(found, "Should contain 'button'");
  assert.equal(found.category, "ui");
});

it("search_registry: finds pricing blocks by query and filters by category", () => {
  const results = searchRegistry({ query: "pricing", category: "blocks" });
  assert.ok(results.length >= 2, "Should find at least 2 pricing blocks");
  for (const r of results) {
    assert.equal(r.category, "blocks");
  }
});

it("search_registry: finds hero blocks by query", () => {
  const results = searchRegistry({ query: "hero" });
  assert.ok(results.length >= 4, "Should find at least 4 hero components");
});

// 2. get_component
it("get_component: extracts full clean TSX code and dependencies for 'button'", () => {
  const comp = getComponent({ name: "button" });
  assert.ok(comp, "Component 'button' must exist");
  assert.equal(comp.name, "button");
  assert.ok(comp.code.length > 50, "Component code must not be empty");
  assert.ok(comp.code.includes("buttonVariants"), "Button code should define buttonVariants");
  assert.ok(comp.code.includes("@source"), "Button code should have Provenance @source");
  assert.ok(comp.dependencies.includes("@radix-ui/react-slot"), "Button should depend on @radix-ui/react-slot");
});

it("get_component: extracts composite block 'pricing-cards-tier'", () => {
  const comp = getComponent({ name: "pricing-cards-tier" });
  assert.ok(comp, "Component 'pricing-cards-tier' must exist");
  assert.equal(comp.category, "blocks");
  assert.ok(comp.code.includes("PricingCardsTier"), "Should contain component definition");
});

it("get_component: returns null for non-existent component", () => {
  const comp = getComponent({ name: "non-existent-xyz-999" });
  assert.equal(comp, null);
});

// 3. list_categories
it("list_categories: returns 3 standard categories and 50+ total items", () => {
  const data = listCategories();
  assert.ok(data.totalComponents >= 50, `Total items must be >= 50, got ${data.totalComponents}`);
  assert.equal(data.categories.length, 3, "Should have exactly 3 categories (ui, blocks, templates)");
  
  const uiCat = data.categories.find((c) => c.name === "ui");
  const blocksCat = data.categories.find((c) => c.name === "blocks");
  const templatesCat = data.categories.find((c) => c.name === "templates");

  assert.ok(uiCat && uiCat.count >= 20, "UI category should have >= 20 items");
  assert.ok(blocksCat && blocksCat.count >= 20, "Blocks category should have >= 20 items");
  assert.ok(templatesCat && templatesCat.count >= 3, "Templates category should have >= 3 items");
});

// 4. get_theme_tokens
it("get_theme_tokens: generates valid CSS variables for violet dark palette", () => {
  const res = getThemeTokens({ theme: "violet", mode: "dark" });
  assert.equal(res.theme, "violet");
  assert.equal(res.mode, "dark");
  assert.ok(res.css.includes(".dark"), "CSS should contain .dark block");
  assert.ok(res.css.includes("--primary: hsl(263.4 70% 50.4%)"), "Should have violet primary token");
  assert.ok(res.css.includes("--background: hsl(240 10% 3.9%)"), "Should have dark background token");
});

it("get_theme_tokens: handles compound theme string 'emerald-light'", () => {
  const res = getThemeTokens({ theme: "emerald-light" });
  assert.equal(res.theme, "emerald");
  assert.equal(res.mode, "light");
  assert.ok(res.css.includes(":root"), "CSS should contain :root block");
  assert.ok(res.css.includes("--primary: hsl(142.1 76.2% 36.3%)"), "Should have emerald primary token");
});

it("get_theme_tokens: returns both root and dark when mode is omitted", () => {
  const res = getThemeTokens({ theme: "rose" });
  assert.equal(res.theme, "rose");
  assert.equal(res.mode, "all");
  assert.ok(res.css.includes(":root"), "CSS should contain :root block");
  assert.ok(res.css.includes(".dark"), "CSS should contain .dark block");
});

console.log(`\n📊 Tests completed: ${passed}/${total} passed`);

if (passed !== total) {
  process.exit(1);
} else {
  console.log("🎉 All MCP Tool tests passed successfully!\n");
}
