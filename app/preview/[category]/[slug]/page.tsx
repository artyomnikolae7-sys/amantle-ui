import * as React from "react";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { PreviewClient } from "./preview-client";

interface PreviewPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { category, slug } = await params;
  const manifestPath = path.join(process.cwd(), "public", "r", `${slug}.json`);

  if (!fs.existsSync(manifestPath)) {
    notFound();
  }

  const isUi = category === "ui";

  return (
    <div
      className={`min-h-screen w-full bg-background text-foreground antialiased ${
        isUi ? "flex items-center justify-center p-6 md:p-12" : "p-4 md:p-8"
      }`}
    >
      <div className="w-full max-w-full">
        <PreviewClient slug={slug} />
      </div>
    </div>
  );
}
