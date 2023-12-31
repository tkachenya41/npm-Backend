import { AuthError } from "@/utils/custom-error";
import { errorCode, roles } from "@/utils/utils";
import { Context, Next } from "hono";
import userRepository from "@/repositories/userRepository";
import { zValidator } from "@hono/zod-validator";
import { RegisterSchema, SignSchema } from "@/validation/body-check";

export const checkAdmin = async (c: Context, next: Next) => {
  const payload = c.get("jwtPayload");

  const user = await userRepository.findByEmail(payload.email);

  if (user.role !== roles.ADMIN) {
    throw new AuthError(
      "You are not allowed to this route",
      errorCode.FORBIDDEN
    );
  }
  return next();
};

export const validateRegistration = zValidator("json", RegisterSchema);
export const validateSign = zValidator("json", SignSchema);
