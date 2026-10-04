import fs from "node:fs/promises";
import path from "node:path";
import { notFound, redirect } from "next/navigation";
import { CatalogItemMeta } from "@/components/sidebar-catalog";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  let items: CatalogItemMeta[] = [];
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), "public", "r", "index.json"),
      "utf-8"
    );
    items = JSON.parse(raw);
  } catch {
    notFound();
  }

  const categoryItems = items.filter((i) => i.category === category);
  if (categoryItems.length === 0) {
    notFound();
  }

  // Prefer button for ui, or the first item
  const target =
    category === "ui"
      ? categoryItems.find((i) => i.name === "button") || categoryItems[0]
      : categoryItems[0];

  redirect(`/${category}/${target.name}`);
}
