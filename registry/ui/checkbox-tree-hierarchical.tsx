/**
 * @source https://amantle.dev/components/checkbox-tree-hierarchical
 * @author AMANTLE UI
 * @license MIT
 * @modified Indeterminate parent state propagation
 */
"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";

export function CheckboxTreeHierarchical() {
  const [items, setItems] = React.useState({
    docs: true,
    components: true,
    templates: false,
  });

  const allChecked = items.docs && items.components && items.templates;
  const isIndeterminate = !allChecked && (items.docs || items.components || items.templates);

  const toggleAll = () => {
    const next = !allChecked;
    setItems({ docs: next, components: next, templates: next });
  };

  return (
    <div className="p-3 bg-card rounded-2xl border border-border max-w-xs w-full space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={allChecked}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate;
          }}
          onChange={toggleAll}
          className="rounded border-border accent-primary cursor-pointer"
        />
        <span className="text-xs font-bold text-foreground">Выбрать все модули</span>
      </div>
      <div className="pl-5 space-y-1.5 border-l border-border/60 ml-2">
        {Object.entries(items).map(([k, v]) => (
          <label key={k} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={v}
              onChange={() => setItems({ ...items, [k]: !v })}
              className="rounded border-border accent-primary"
            />
            <span className="text-xs text-muted-foreground capitalize">{k}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
export default CheckboxTreeHierarchical;
