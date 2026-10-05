import { execSync } from "node:child_process";
import assert from "node:assert";

console.log("🧪 Running AMANTLE CLI Integration Tests...\n");

try {
  // Test 1: Version flag
  const versionOut = execSync("node packages/cli/bin/amantle-ui.js --version", { encoding: "utf-8" });
  assert.ok(versionOut.includes("v0.7.0"), "Version flag must output v0.7.0");
  console.log("  ✅ PASS: amantle-ui --version outputs v0.7.0");

  // Test 2: Help flag
  const helpOut = execSync("node packages/cli/bin/amantle-ui.js --help", { encoding: "utf-8" });
  assert.ok(helpOut.includes("USAGE:"), "Help output must contain USAGE:");
  assert.ok(helpOut.includes("init"), "Help output must list init command");
  assert.ok(helpOut.includes("add <components...>"), "Help output must list add command");
  console.log("  ✅ PASS: amantle-ui --help lists usage and commands");

  // Test 3: Theme generator
  const themeOut = execSync("node packages/cli/bin/amantle-ui.js theme emerald 0.75rem", { encoding: "utf-8" });
  assert.ok(themeOut.includes("--radius: 0.75rem"), "Theme output must contain specified radius");
  assert.ok(themeOut.includes("--primary:"), "Theme output must contain --primary");
  console.log("  ✅ PASS: amantle-ui theme generates valid CSS variables");

  // Test 4: Search command
  const searchOut = execSync("node packages/cli/bin/amantle-ui.js search bento", { encoding: "utf-8" });
  assert.ok(searchOut.includes("Found") && searchOut.includes("matching"), "Search output must find matching components");
  console.log("  ✅ PASS: amantle-ui search finds bento components from registry");

  // Test 5: List templates
  const listOut = execSync("node packages/cli/bin/amantle-ui.js list templates", { encoding: "utf-8" });
  assert.ok(listOut.includes("TEMPLATES"), "List templates must output TEMPLATES category");
  console.log("  ✅ PASS: amantle-ui list templates displays template items");

  console.log("\n🎉 All 5/5 AMANTLE CLI integration tests passed successfully!\n");
} catch (err) {
  console.error("❌ Test failed:", err);
  process.exit(1);
}
