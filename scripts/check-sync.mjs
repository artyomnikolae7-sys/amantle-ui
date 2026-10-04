import fs from "node:fs";

const index = JSON.parse(fs.readFileSync("public/r/index.json", "utf8"));
const mapContent = fs.readFileSync("lib/components-map.tsx", "utf8");

const missing = [];
for (const item of index) {
  const regex = new RegExp(`(?:["']${item.name}["']|\\b${item.name})\\s*:`);
  if (!regex.test(mapContent)) {
    missing.push(item.name);
  }
}

console.log("Total items in index:", index.length);
console.log("Missing from componentMap:", missing.length, missing);
