import { z } from "zod";

export const singupInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
});
export const singinInput = z.object({
    email: z.string().email(),
    password: z.string().optional(),
});

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});

export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

// type inference in zod
export type SinginInput = z.infer<typeof singinInput>;
export type SingupInput = z.infer<typeof singupInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
