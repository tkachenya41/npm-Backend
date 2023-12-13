import { PostBodySchema, PostUpdateSchema } from "@/validation/body-check";
import { zValidator } from "@hono/zod-validator";

export const validatePostBody = zValidator("json", PostBodySchema);

export const validateUpdatePostBody = zValidator("json", PostUpdateSchema);
