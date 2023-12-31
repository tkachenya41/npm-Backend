import { ValidationError } from "@/utils/custom-error";
import { errorCode } from "@/utils/utils";
import { UserBodySchema, UserUpdateSchema } from "@/validation/body-check";
import { zValidator } from "@hono/zod-validator";
import { validator } from "hono/validator";

export const validateUserId = validator("param", (value: { id: string }) => {
  if (isNaN(+value.id)) {
    throw new ValidationError("UserId should be a number.", errorCode.INVALID);
  }
  return { id: +value.id };
});

export const validateUserName = validator(
  "query",
  (value: { name: string }) => {
    if (value.name === "") {
      throw new ValidationError("You need to type name", errorCode.INVALID);
    }
    return { name: value.name };
  }
);

export const validateUserBody = zValidator("json", UserBodySchema);

export const validateUpdateUserBody = zValidator("json", UserUpdateSchema);
