"use client";

import * as React from "react";
import { componentMap } from "@/lib/components-map";

interface PreviewClientProps {
  slug: string;
}

export function PreviewClient({ slug }: PreviewClientProps) {
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="flex items-center justify-center p-8 text-muted-foreground text-sm">
        Компонент не найден
      </div>
    );
  }

  return <Component />;
}
