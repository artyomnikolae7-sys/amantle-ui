import { z } from "zod";

export const registryItemTypeSchema = z.enum([
  "registry:ui",
  "registry:block",
  "registry:template",
  "registry:hook",
  "registry:lib",
  "registry:theme",
]);

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string(),
  type: registryItemTypeSchema,
  target: z.string().optional(),
});

export const registryProvenanceSchema = z.object({
  source: z.string(),
  author: z.string(),
  license: z.string(),
  modified: z.string().optional(),
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  title: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).default([]),
  devDependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([]),
  files: z.array(registryItemFileSchema),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  meta: registryProvenanceSchema.optional(),
});

export const registryIndexItemSchema = registryItemSchema.omit({ files: true });
export const registryIndexSchema = z.array(registryIndexItemSchema);

export type RegistryItemType = z.infer<typeof registryItemTypeSchema>;
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;
export type RegistryProvenance = z.infer<typeof registryProvenanceSchema>;
export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryIndexItem = z.infer<typeof registryIndexItemSchema>;
export type RegistryIndex = z.infer<typeof registryIndexSchema>;
