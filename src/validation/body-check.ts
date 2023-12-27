import { z } from "zod";

export const UserUpdateSchema = z.object({
  id: z.number(),
  name: z
    .string()
    .min(1)
    .max(50)
    .regex(/^[a-z]+(?:\s[a-z]+)*$/i),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(20)
    .regex(/.*[a-z].*/, "One lowercase character")
    .regex(/.*[A-Z].*/, "One uppercase character")
    .regex(/.*\d.*/, "One numeric digit")
    .regex(
      /(?:.*[@#$%^&*()_+=]){3}/,
      "At least three special characters or numbers"
    ),
  role: z.string(),
});

export const UserBodySchema = UserUpdateSchema.omit({ id: true });

export const SignSchema = UserBodySchema.pick({ email: true, password: true });

export const RegisterSchema = UserBodySchema.omit({ role: true });

export const PostBodySchema = z.object({
  user: UserBodySchema,
  posts: z.object({
    title: z.string(),
  }),
});

export const PostUpdateSchema = z.object({
  userId: z.number(),
  title: z.string(),
});
