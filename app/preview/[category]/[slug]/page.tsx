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
  const { slug } = await params;
  const Component = componentMap[slug];

  if (!Component) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col justify-center">
      <Component />
    </div>
  );
}
