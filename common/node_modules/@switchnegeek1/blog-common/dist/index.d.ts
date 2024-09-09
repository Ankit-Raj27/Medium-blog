import { z } from "zod";
export declare const singupInput: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password?: string | undefined;
}, {
    name: string;
    email: string;
    password?: string | undefined;
}>;
export declare const singinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password?: string | undefined;
}, {
    email: string;
    password?: string | undefined;
}>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
export type SinginInput = z.infer<typeof singinInput>;
export type SingupInput = z.infer<typeof singupInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
