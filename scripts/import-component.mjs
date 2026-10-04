#!/usr/bin/env node
/**
 * @file scripts/import-component.mjs
 * @description CLI tool for downloading, tokenizing, and registering external components into AMANTLE UI
 *
 * Usage:
 *   node scripts/import-component.mjs --source <url-or-file> --name <component-name> --category <ui|blocks>
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_DIR = path.join(ROOT_DIR, "registry");

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    source: "",
    name: "",
    category: "ui",
    author: "Open Source",
    license: "MIT",
    modified: "Imported and tokenized for AMANTLE UI",
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--source" && args[i + 1]) {
      options.source = args[++i];
    } else if (arg === "--name" && args[i + 1]) {
      options.name = args[++i];
    } else if (arg === "--category" && args[i + 1]) {
      options.category = args[++i];
    } else if (arg === "--author" && args[i + 1]) {
      options.author = args[++i];
    } else if (arg === "--license" && args[i + 1]) {
      options.license = args[++i];
    } else if (arg === "--modified" && args[i + 1]) {
      options.modified = args[++i];
    }
  }

  return options;
}

function convertGitHubUrl(url) {
  if (url.includes("github.com") && url.includes("/blob/")) {
    return url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
  }
  return url;
}

async function fetchSourceContent(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const rawUrl = convertGitHubUrl(source);
    console.log(`🌐 Fetching remote component from: ${rawUrl}`);
    const res = await fetch(rawUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch source from ${rawUrl}: ${res.status} ${res.statusText}`);
    }
    return await res.text();
  }

  const localPath = path.isAbsolute(source) ? source : path.resolve(process.cwd(), source);
  if (!fs.existsSync(localPath)) {
    throw new Error(`Local file not found at: ${localPath}`);
  }
  console.log(`📄 Reading local component from: ${localPath}`);
  return fs.readFileSync(localPath, "utf-8");
}

function tokenizeComponent(code) {
  let tokenized = code;

  // 1. Normalize imports
  tokenized = tokenized.replace(
    /from\s+["'](?:\.\.\/)+lib\/utils["']/g,
    'from "@/lib/utils"'
  );
  tokenized = tokenized.replace(
    /from\s+["']@\/components\/ui\/([a-z-]+)["']/g,
    'from "@/registry/ui/$1"'
  );

  // 2. Tokenize hardcoded utility colors to AMANTLE UI semantic variables
  const colorReplacements = [
    // Backgrounds
    { from: /\bbg-zinc-950\b/g, to: "bg-background" },
    { from: /\bbg-zinc-900\b/g, to: "bg-card" },
    { from: /\bbg-zinc-800\b/g, to: "bg-muted" },
    { from: /\bbg-zinc-100\b/g, to: "bg-muted" },
    { from: /\bbg-gray-100\b/g, to: "bg-muted" },
    { from: /\bbg-blue-600\b/g, to: "bg-primary" },
    { from: /\bbg-neutral-900\b/g, to: "bg-card" },
    { from: /\bbg-slate-900\b/g, to: "bg-card" },

    // Texts
    { from: /\btext-zinc-400\b/g, to: "text-muted-foreground" },
    { from: /\btext-zinc-500\b/g, to: "text-muted-foreground" },
    { from: /\btext-gray-400\b/g, to: "text-muted-foreground" },
    { from: /\btext-gray-500\b/g, to: "text-muted-foreground" },
    { from: /\btext-blue-600\b/g, to: "text-primary" },

    // Borders
    { from: /\bborder-zinc-800\b/g, to: "border-border" },
    { from: /\bborder-zinc-700\b/g, to: "border-border" },
    { from: /\bborder-zinc-200\b/g, to: "border-border" },
    { from: /\bborder-gray-200\b/g, to: "border-border" },
  ];

  for (const { from, to } of colorReplacements) {
    tokenized = tokenized.replace(from, to);
  }

  return tokenized;
}

function ensureProvenanceHeader(code, options) {
  const existingJsdocMatch = code.match(/\/\*\*([\s\S]*?)\*\//);

  if (existingJsdocMatch) {
    const existing = existingJsdocMatch[1];
    let source = options.source;
    let author = options.author;
    let license = options.license;
    let modified = options.modified;

    const sMatch = existing.match(/@source\s+([^\r\n*]+)/);
    const aMatch = existing.match(/@author\s+([^\r\n*]+)/);
    const lMatch = existing.match(/@license\s+([^\r\n*]+)/);

    if (sMatch) source = sMatch[1].trim();
    if (aMatch) author = aMatch[1].trim();
    if (lMatch) license = lMatch[1].trim();

    const newHeader = `/**
 * @source ${source}
 * @author ${author}
 * @license ${license}
 * @modified ${modified}
 */`;

    return code.replace(existingJsdocMatch[0], newHeader);
  }

  const header = `/**
 * @source ${options.source || "AMANTLE UI Import"}
 * @author ${options.author || "Open Source"}
 * @license ${options.license || "MIT"}
 * @modified ${options.modified}
 */\n\n`;

  return header + code.trimStart();
}

export async function importComponent() {
  const options = parseArgs();

  if (!options.source) {
    console.error("❌ Error: --source is required (URL or file path).");
    console.log("Usage: node scripts/import-component.mjs --source <url-or-file> --name <name> --category <ui|blocks>");
    process.exit(1);
  }

  if (!options.name) {
    const baseName = path.basename(options.source, path.extname(options.source));
    options.name = baseName.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  console.log(`📦 Importing component [${options.name}] into category [${options.category}]...`);

  const rawContent = await fetchSourceContent(options.source);
  const tokenizedContent = tokenizeComponent(rawContent);
  const finalContent = ensureProvenanceHeader(tokenizedContent, options);

  const targetDir = path.join(REGISTRY_DIR, options.category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, `${options.name}.tsx`);
  fs.writeFileSync(targetFile, finalContent, "utf-8");

  console.log(`✅ Saved component source to: ${targetFile}`);
  console.log("🔄 Rebuilding AMANTLE UI Registry manifests...");

  const totalBuilt = buildRegistry();

  console.log(`🎉 Import complete! Component [${options.name}] is now in AMANTLE UI Registry (total items: ${totalBuilt}).`);
  return {
    name: options.name,
    targetFile,
    totalBuilt,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  importComponent().catch((err) => {
    console.error("❌ Component import failed:", err.message);
    process.exit(1);
  });
}
