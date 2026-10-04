import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const uiDir = path.join(rootDir, "registry", "ui");
const rDir = path.join(rootDir, "public", "r");

console.log("Preparing Batch 1: 50 UI Primitives...");
