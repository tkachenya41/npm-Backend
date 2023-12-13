import { sign } from "hono/jwt";
import { User } from "@prisma/client";

export const authService = {
  login: async (user: User) => {
    const secret = process.env.SECRET_KEY!;
    const payload = {
      name: user.name,
      email: user.email,
    };
    return await sign(payload, secret);
  },
};
