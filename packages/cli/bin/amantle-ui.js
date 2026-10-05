#!/usr/bin/env node

/**
 * AMANTLE UI CLI
 * Official command-line interface for AMANTLE UI Design System
 * Registry: https://amantle-ui-x.vercel.app/r/
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const VERSION = "0.7.0";
const REGISTRY_BASE = process.env.AMANTLE_REGISTRY || "https://amantle-ui-x.vercel.app/r";

// ANSI Colors
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

function log(msg = "") {
  console.log(msg);
}

function success(msg) {
  console.log(`${colors.green}✔${colors.reset} ${msg}`);
}

function info(msg) {
  console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`);
}

function warn(msg) {
  console.log(`${colors.yellow}⚠${colors.reset} ${msg}`);
}

function error(msg) {
  console.error(`${colors.red}✖${colors.reset} ${msg}`);
}

function banner() {
  log(`
${colors.magenta}${colors.bold}   ___   __  ______   _  ____________   __  ______
  / _ | /  |/  / _ | / |/ /_  __/ / /  / / / /  _/
 / __ |/ /|_/ / __ |/    / / / / /_/  / /_/ // /  
/_/ |_/_/  /_/_/ |_/_/|_/ /_/ /____/  \\____/___/   ${colors.reset}${colors.dim}v${VERSION}${colors.reset}
${colors.dim}Next-generation Design System (2,051 components from 10+ ecosystems)${colors.reset}
`);
}

function printHelp() {
  banner();
  log(`${colors.bold}USAGE:${colors.reset}`);
  log(`  $ ${colors.cyan}npx amantle-ui${colors.reset} <command> [options]`);
  log(`  $ ${colors.cyan}amantle${colors.reset} <command> [options]`);
  log();
  log(`${colors.bold}COMMANDS:${colors.reset}`);
  log(`  ${colors.green}init${colors.reset}                    Initialize AMANTLE UI in your project (creates amantle.json, utils)`);
  log(`  ${colors.green}add <components...>${colors.reset}     Add one or more components to your project`);
  log(`  ${colors.green}list [category]${colors.reset}         List available components (all, ui, blocks, templates)`);
  log(`  ${colors.green}search <query>${colors.reset}          Search components by keyword or tag`);
  log(`  ${colors.green}theme [preset]${colors.reset}          Generate CSS variables for theme palette & radius`);
  log(`  ${colors.green}version${colors.reset}                 Display CLI version`);
  log(`  ${colors.green}help${colors.reset}                    Show this help guide`);
  log();
  log(`${colors.bold}EXAMPLES:${colors.reset}`);
  log(`  $ npx amantle-ui init`);
  log(`  $ npx amantle-ui add button card input`);
  log(`  $ npx amantle-ui add pricing-cards-tier feature-bento-grid`);
  log(`  $ npx amantle-ui search marquee`);
  log(`  $ npx amantle-ui theme violet`);
  log();
}

// Detect package manager
function detectPackageManager(cwd = process.cwd()) {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "bun.lockb")) || fs.existsSync(path.join(cwd, "bun.lock"))) return "bun";
  return "npm";
}

// Read configuration
function getProjectConfig(cwd = process.cwd()) {
  const amantlePath = path.join(cwd, "amantle.json");
  const componentsPath = path.join(cwd, "components.json");

  if (fs.existsSync(amantlePath)) {
    try {
      return JSON.parse(fs.readFileSync(amantlePath, "utf-8"));
    } catch {}
  }

  if (fs.existsSync(componentsPath)) {
    try {
      return JSON.parse(fs.readFileSync(componentsPath, "utf-8"));
    } catch {}
  }

  return null;
}

// Command: init
async function handleInit(args) {
  banner();
  const cwd = process.cwd();
  info("Initializing AMANTLE UI in your project...");

  // 1. Create or check amantle.json
  const config = {
    $schema: "https://amantle-ui-x.vercel.app/schema.json",
    style: "default",
    tailwind: {
      config: "tailwind.config.js",
      css: "app/globals.css",
      baseColor: "zinc",
      cssVariables: true,
    },
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
      ui: "@/components/ui",
    },
  };

  const configPath = path.join(cwd, "amantle.json");
  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf-8");
    success("Created amantle.json");
  } else {
    info("amantle.json already exists");
  }

  // 2. Ensure directories exist
  const uiDir = path.join(cwd, "components", "ui");
  const libDir = path.join(cwd, "lib");
  fs.mkdirSync(uiDir, { recursive: true });
  fs.mkdirSync(libDir, { recursive: true });

  // 3. Create lib/utils.ts if missing
  const utilsPath = path.join(libDir, "utils.ts");
  if (!fs.existsSync(utilsPath)) {
    const utilsCode = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
    fs.writeFileSync(utilsPath, utilsCode, "utf-8");
    success("Created lib/utils.ts");
  } else {
    info("lib/utils.ts already exists");
  }

  // 4. Install essential packages
  const pm = detectPackageManager(cwd);
  const dependencies = ["clsx", "tailwind-merge", "lucide-react", "class-variance-authority"];
  const installCmd =
    pm === "pnpm"
      ? `pnpm add ${dependencies.join(" ")}`
      : pm === "yarn"
      ? `yarn add ${dependencies.join(" ")}`
      : pm === "bun"
      ? `bun add ${dependencies.join(" ")}`
      : `npm install ${dependencies.join(" ")}`;

  info(`Installing core dependencies via ${pm}...`);
  try {
    execSync(installCmd, { stdio: "inherit", cwd });
    success("Core dependencies installed successfully!");
  } catch (err) {
    warn("Failed to automatically run package manager install. Run manually:");
    log(`  $ ${installCmd}`);
  }

  log();
  success(`${colors.bold}AMANTLE UI initialized!${colors.reset} You can now add components:`);
  log(`  $ ${colors.cyan}npx amantle-ui add button${colors.reset}`);
  log();
}

// Command: add
async function handleAdd(args) {
  if (args.length === 0) {
    error("Please specify at least one component name to add.");
    log(`  $ npx amantle-ui add <component>`);
    process.exit(1);
  }

  banner();
  const cwd = process.cwd();
  const targetDir = path.join(cwd, "components", "ui");
  fs.mkdirSync(targetDir, { recursive: true });

  const pm = detectPackageManager(cwd);
  const requiredNpmPackages = new Set();

  for (const compName of args) {
    info(`Fetching ${colors.bold}${compName}${colors.reset}...`);
    const manifestUrl = `${REGISTRY_BASE}/${compName}.json`;

    try {
      const res = await fetch(manifestUrl);
      if (!res.ok) {
        throw new Error(`Component '${compName}' not found in registry (HTTP ${res.status}).`);
      }

      const data = await res.json();
      const files = data.files || [];

      if (files.length === 0) {
        throw new Error(`Manifest for '${compName}' contains no files.`);
      }

      // Write files
      for (const file of files) {
        const fileName = path.basename(file.path || `${compName}.tsx`);
        const filePath = path.join(targetDir, fileName);

        // Normalize imports in content
        let content = file.content;
        content = content.replace(/@\/registry\/ui\//g, "@/components/ui/");
        content = content.replace(/@\/registry\/blocks\//g, "@/components/blocks/");

        fs.writeFileSync(filePath, content, "utf-8");
        success(`Added ${colors.cyan}components/ui/${fileName}${colors.reset}`);
      }

      // Collect npm dependencies
      if (data.dependencies) {
        for (const dep of data.dependencies) {
          requiredNpmPackages.add(dep);
        }
      }
    } catch (err) {
      error(`Failed to add '${compName}': ${err.message}`);
    }
  }

  // Install any missing dependencies
  if (requiredNpmPackages.size > 0) {
    const depList = Array.from(requiredNpmPackages);
    log();
    info(`Checking dependencies: ${depList.join(", ")}`);

    const installCmd =
      pm === "pnpm"
        ? `pnpm add ${depList.join(" ")}`
        : pm === "yarn"
        ? `yarn add ${depList.join(" ")}`
        : pm === "bun"
        ? `bun add ${depList.join(" ")}`
        : `npm install ${depList.join(" ")}`;

    try {
      execSync(installCmd, { stdio: "inherit", cwd });
      success("Dependencies installed successfully!");
    } catch {
      warn("Could not automatically install dependencies. Run manually:");
      log(`  $ ${installCmd}`);
    }
  }

  log();
  success("Component installation complete!");
}

// Command: list
async function handleList(args) {
  banner();
  info("Fetching AMANTLE UI catalog index...");

  try {
    const res = await fetch(`${REGISTRY_BASE}/index.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = await res.json();

    const category = args[0] || "all";
    let filtered = items;
    if (category !== "all") {
      filtered = items.filter((i) => (i.category || i.type?.replace("registry:", "")) === category);
    }

    log(`\n${colors.bold}Available Components (${filtered.length} items):${colors.reset}\n`);

    const grouped = {};
    for (const item of filtered) {
      const cat = item.category || "ui";
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item.name);
    }

    for (const [cat, names] of Object.entries(grouped)) {
      log(`${colors.magenta}${colors.bold}► ${cat.toUpperCase()} (${names.length})${colors.reset}`);
      const columns = 3;
      for (let i = 0; i < names.length; i += columns) {
        const row = names.slice(i, i + columns).map((n) => n.padEnd(30)).join("");
        log(`  ${row}`);
      }
      log();
    }
  } catch (err) {
    error(`Failed to fetch catalog: ${err.message}`);
  }
}

// Command: search
async function handleSearch(args) {
  const query = args.join(" ").trim().toLowerCase();
  if (!query) {
    error("Please specify a search term.");
    process.exit(1);
  }

  banner();
  info(`Searching for "${query}" in 2,051 components...`);

  try {
    const res = await fetch(`${REGISTRY_BASE}/index.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = await res.json();

    const matches = items.filter(
      (i) =>
        i.name.toLowerCase().includes(query) ||
        (i.title && i.title.toLowerCase().includes(query)) ||
        (i.tags && i.tags.some((t) => t.toLowerCase().includes(query)))
    );

    if (matches.length === 0) {
      warn(`No components found matching "${query}".`);
      return;
    }

    log(`\n${colors.bold}Found ${matches.length} matching component(s):${colors.reset}\n`);
    for (const m of matches) {
      log(`  ${colors.green}✔${colors.reset} ${colors.bold}${m.name.padEnd(32)}${colors.reset} ${colors.dim}[${m.category || "ui"}]${colors.reset}`);
    }
    log(`\nAdd any component with:`);
    log(`  $ ${colors.cyan}npx amantle-ui add ${matches[0].name}${colors.reset}\n`);
  } catch (err) {
    error(`Search failed: ${err.message}`);
  }
}

// Command: theme
async function handleTheme(args) {
  const preset = (args[0] || "violet").toLowerCase();
  const radius = args[1] || "0.5rem";

  const PALETTES = {
    violet: { label: "Violet", primary: "oklch(0.65 0.22 290)", hex: "#8b5cf6" },
    zinc: { label: "Zinc", primary: "oklch(0.5 0.02 260)", hex: "#71717a" },
    blue: { label: "Blue", primary: "oklch(0.62 0.2 245)", hex: "#3b82f6" },
    emerald: { label: "Emerald", primary: "oklch(0.68 0.19 155)", hex: "#10b981" },
    rose: { label: "Rose", primary: "oklch(0.65 0.23 15)", hex: "#f43f5e" },
    amber: { label: "Amber", primary: "oklch(0.75 0.18 75)", hex: "#f59e0b" },
  };

  const selected = PALETTES[preset] || PALETTES.violet;

  log(`
${colors.bold}/* Add to your globals.css */${colors.reset}
:root {
  --radius: ${radius};
  --primary: ${selected.primary};
  --primary-foreground: oklch(0.98 0 0);
  --ring: ${selected.primary};
}

.dark {
  --radius: ${radius};
  --primary: ${selected.primary};
  --primary-foreground: oklch(0.15 0.02 260);
  --ring: ${selected.primary};
}
`);
}

// Main Router
async function main() {
  const rawArgs = process.argv.slice(2);
  if (rawArgs.length === 0 || rawArgs.includes("--help") || rawArgs.includes("-h")) {
    printHelp();
    return;
  }

  if (rawArgs.includes("--version") || rawArgs.includes("-v") || rawArgs[0] === "version") {
    log(`v${VERSION}`);
    return;
  }

  const command = rawArgs[0];
  const commandArgs = rawArgs.slice(1);

  switch (command) {
    case "init":
      await handleInit(commandArgs);
      break;
    case "add":
      await handleAdd(commandArgs);
      break;
    case "list":
      await handleList(commandArgs);
      break;
    case "search":
    case "find":
      await handleSearch(commandArgs);
      break;
    case "theme":
      await handleTheme(commandArgs);
      break;
    case "help":
      printHelp();
      break;
    default:
      error(`Unknown command: '${command}'`);
      log(`Run ${colors.cyan}npx amantle-ui help${colors.reset} to see available commands.`);
      process.exit(1);
  }
}

main().catch((err) => {
  error(err.message || String(err));
  process.exit(1);
});
