import { z } from "zod";

export const translationSchema = z.object({
  viewId: z.number(),
  entityType: z.string(),
  entityId: z.string(),
  languageCode: z.string(),
  language: z.string(),
  translatedFieldName: z.string(),
  translatedText: z.string(),
});

export type ITranslation = z.infer<typeof translationSchema>;

export const skillSchema = z.object({
  viewId: z.number(),
  skillId: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable(),
  translations: z.array(translationSchema),
});

export type ISkill = z.infer<typeof skillSchema>;
