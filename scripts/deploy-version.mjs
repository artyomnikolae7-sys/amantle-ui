#!/usr/bin/env node
/**
 * @file scripts/deploy-version.mjs
 * @description Automated semantic versioning, pre-flight verification, and deployment script
 *
 * Usage:
 *   node scripts/deploy-version.mjs [--type patch|minor|major] [--push]
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const PACKAGE_PATH = path.join(ROOT_DIR, "package.json");

function runCommand(cmd) {
  console.log(`  ▶ ${cmd}`);
  execSync(cmd, { cwd: ROOT_DIR, stdio: "inherit" });
}

async function main() {
  const args = process.argv.slice(2);
  const bumpType = args.includes("--type") ? args[args.indexOf("--type") + 1] : "patch";
  const shouldPush = args.includes("--push") || !args.includes("--no-push");

  console.log("===============================================================");
  console.log("🚀 AMANTLE UI - Automated Versioning & Deployment Engine");
  console.log("===============================================================\n");

  // 1. Read package.json and calculate new version
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_PATH, "utf-8"));
  const currentVersion = pkg.version;
  const parts = currentVersion.split(".").map(Number);

  if (bumpType === "major") {
    parts[0] += 1;
    parts[1] = 0;
    parts[2] = 0;
  } else if (bumpType === "minor") {
    parts[1] += 1;
    parts[2] = 0;
  } else {
    parts[2] += 1;
  }

  const newVersion = parts.join(".");
  console.log(`📦 Bumping version: ${currentVersion} ➔ ${newVersion} (${bumpType})\n`);

  pkg.version = newVersion;
  fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2) + "\n", "utf-8");

  // 2. Pre-flight verification
  console.log("🔍 Running Pre-Flight Verifications...");
  runCommand("node scripts/build-registry.mjs");
  runCommand("node scripts/check-sync.mjs");
  runCommand("node scripts/generate-full-audit-log.mjs");

  // 3. Tests & Diagnostics
  console.log("\n🧪 Running Regression Tests & Diagnostics...");
  try {
    runCommand("npx.cmd tsc --noEmit");
    runCommand("npm.cmd run test");
  } catch (err) {
    console.error("❌ Verification failed. Aborting deployment.");
    // revert package.json
    pkg.version = currentVersion;
    fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
    process.exit(1);
  }

  // 4. Git Stage, Commit & Tag
  console.log("\n🏷️ Creating Git Release Commit and Tag...");
  runCommand("git add .");
  runCommand(`git commit -m "feat(release): v${newVersion} - AMANTLE UI deployment release"`);
  runCommand(`git tag -a v${newVersion} -m "Release v${newVersion}"`);

  // 5. Remote Push (if remote configured)
  console.log("\n🌐 Checking Git Remote...");
  try {
    const remotes = execSync("git remote", { cwd: ROOT_DIR, encoding: "utf-8" }).trim();
    if (remotes.includes("origin") && shouldPush) {
      console.log("  🚀 Pushing to origin master and tags...");
      runCommand("git push origin master --tags");
      console.log("  ✅ Push completed successfully!");
    } else {
      console.log("  ℹ️ Remote 'origin' is not yet configured or --no-push was specified.");
      console.log("  💡 To push manually to your GitHub repo, run:");
      console.log(`     git remote add origin https://github.com/<user>/<repo>.git`);
      console.log(`     git push -u origin master --tags`);
    }
  } catch (err) {
    console.warn("  ⚠️ Git remote check / push warning:", err.message);
  }

  console.log(`\n🎉 Deployment release v${newVersion} successfully created!`);
}

main().catch((err) => {
  console.error("Fatal error during deployment:", err);
  process.exit(1);
});
