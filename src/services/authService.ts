import { sign } from "hono/jwt";
import { User } from "@prisma/client";
import userRepository from "@/repositories/userRepository";
import { userService } from "./userService";

export const authService = {
  login: async (email: User["email"], password: User["password"]) => {
    const user = await userRepository.findByEmail(email);

    await userService.verifyPassword(password, user.password);

    const secret = process.env.SECRET_KEY!;

    const payload = {
      name: user.name,
      email: user.email,
    };

    const token = await sign(payload, secret);

    return { token, user };
  },
};
