import * as React from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { ShowcaseViewer } from "@/components/showcase-viewer";

interface ComponentPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { category, slug } = await params;
  const manifestPath = path.join(process.cwd(), "public", "r", `${slug}.json`);

  let item;
  try {
    const raw = await fs.readFile(manifestPath, "utf-8");
    item = JSON.parse(raw);
  } catch {
    notFound();
  }

  return <ShowcaseViewer item={item} />;
}
