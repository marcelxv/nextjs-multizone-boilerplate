import { z } from 'zod';

export const ProfileDetailsSchema = z.object({
    // Required fields
    profileId: z.string(),
    fullName: z.string(),
    userId: z.string(),

    // Optional fields
    email: z.string().email().optional(),
    emailVerified: z.boolean().optional(),
    emailVerifiedAt: z.string().optional(), // You could use z.date() instead
    isActive: z.boolean().optional(),
    phone: z.string().optional(), // You could add .regex() for phone validation
    avatar: z.string().optional(),
    bio: z.string().optional(),
    profileImage: z.string().nullable().optional(),
    place: z.string().optional(),
    website: z.union([z.string().url(), z.string(), z.null()]).optional(),
    createdAt: z.string().optional(), // You could use z.date() instead
    updatedAt: z.string().optional(), // You could use z.date() instead
});

// Type inference
export type IProfileDetails = z.infer<typeof ProfileDetailsSchema>;
