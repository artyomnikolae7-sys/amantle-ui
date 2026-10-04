import * as React from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { SidebarCatalog, CatalogItemMeta } from "@/components/sidebar-catalog";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let items: CatalogItemMeta[] = [];
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), "public", "r", "index.json"),
      "utf-8"
    );
    items = JSON.parse(raw);
  } catch {
    items = [];
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col md:flex-row gap-8 items-start">
      <SidebarCatalog items={items} />
      <div className="flex-1 min-w-0 w-full">{children}</div>
    </div>
  );
}
