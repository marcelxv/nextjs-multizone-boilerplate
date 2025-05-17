import { z } from 'zod';

/**
 * Represents user profile details in the system
 */
export const S3ImageReadSchema = z.object({
    image: z.string(),
});

export type IS3ImageRead = z.infer<typeof S3ImageReadSchema>;
