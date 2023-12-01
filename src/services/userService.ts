import { ValidationError } from "@/utils/custom-error";
import { errorCode } from "@/utils/utils";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

export const userService = {
  hashPassword: async (password: User["password"]) => {
    return bcrypt.hashSync(password, 10);
  },
  verifyPassword: async (password: User["password"], hashPassword: string) => {
    const isMatch = await bcrypt.compare(password, hashPassword);

    if (!isMatch) {
      throw new ValidationError("Password does not match", errorCode.INVALID);
    }
  },
};
