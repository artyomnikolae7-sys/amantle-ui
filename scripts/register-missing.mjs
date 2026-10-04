import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const MAP_PATH = path.join(ROOT_DIR, "lib", "components-map.tsx");
const UI_DIR = path.join(ROOT_DIR, "registry", "ui");

let mapContent = fs.readFileSync(MAP_PATH, "utf-8");

const missing = [
  'button-elastic-bounce',
  'button-glow-neon',
  'button-gradient-border',
  'button-neubrutalist',
  'button-retro-3d',
  'button-hold-confirm',
  'button-copy-morph',
  'button-slide-reveal',
  'button-liquid-fill',
  'button-split-dropdown',
  'input-pill-glow',
  'input-underlined-minimal',
  'input-password-strength',
  'input-credit-card',
  'input-verification-code',
  'input-command-filter',
  'input-voice-dictation',
  'input-tag-chips',
  'input-auto-grow-textarea',
  'input-file-uploader-compact',
  'switch-ios-spring',
  'switch-labeled-icon',
  'switch-segmented-slider',
  'slider-range-dual',
  'slider-volume-stepped',
  'slider-circular-dial',
  'checkbox-animated-check',
  'radio-card-group',
  'checkbox-tree-hierarchical',
  'badge-status-dot',
  'badge-live-stream',
  'badge-gradient-pill',
  'badge-counter-notification',
  'badge-dismissable',
  'badge-copy-token',
  'badge-verified-tier',
  'card-inner-glow',
  'card-gradient-mesh',
  'card-flip-3d',
  'card-metric-trend',
  'card-profile-header',
  'card-neubrutalist-shadow',
  'button-pulse-ring',
  'button-gradient-flow',
  'input-stepper-number'
];

const newImports = [];
const newEntries = [];

for (const name of missing) {
  const filePath = path.join(UI_DIR, `${name}.tsx`);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf-8");

  // Find exported component name
  const exportMatch = content.match(/export (?:function|const) ([A-Z][a-zA-Z0-9]+)/);
  if (!exportMatch) continue;
  const compName = exportMatch[1];

  if (!mapContent.includes(`@/registry/ui/${name}`)) {
    newImports.push(`import { ${compName} } from "@/registry/ui/${name}";`);
  }

  if (!mapContent.includes(`"${name}":`)) {
    newEntries.push(`  "${name}": (props: any) => (\n    <div className="flex items-center justify-center p-6">\n      <${compName} {...props} />\n    </div>\n  ),`);
  }
}

if (newImports.length > 0) {
  mapContent = `${newImports.join("\n")}\n${mapContent}`;
}

const anchor = "export const componentMap: Record<string, React.ComponentType<any>> = {";
if (newEntries.length > 0 && mapContent.includes(anchor)) {
  mapContent = mapContent.replace(anchor, `${anchor}\n${newEntries.join("\n")}`);
}

fs.writeFileSync(MAP_PATH, mapContent, "utf-8");
console.log(`✅ Registered ${newEntries.length} components in components-map.tsx`);
