import * as React from "react";
import { notFound } from "next/navigation";
import { componentMap } from "@/lib/components-map";

interface PreviewPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { category, slug } = await params;
  const Component = componentMap[slug];

  if (!Component) {
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
        <Component />
      </div>
    </div>
  );
}
