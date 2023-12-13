import userRepository from "@/repositories/userRepository";
import { SignContext, UserBodyContext } from "@/middlewares/types";
import { userService } from "@/services/userService";
import { authService } from "@/services/authService";

export const authController = {
  login: async (c: SignContext) => {
    const { email, password } = c.req.valid("json");

    const user = await userRepository.findByEmail(email);

    await userService.verifyPassword(password, user.password);

    const token = await authService.login(user);

    return c.text(token);
  },
  register: async (c: UserBodyContext) => {
    const body = c.req.valid("json");
    await userRepository.create(body);
    return c.json("You are succesfully registered");
  },
};
