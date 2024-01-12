import userRepository from "@/repositories/userRepository";
import { RegisterContext, SignContext } from "@/middlewares/types";
import { authService } from "@/services/authService";

export const authController = {
  login: async (c: SignContext) => {
    const { email, password } = c.req.valid("json");

    const { token, user } = await authService.login(email, password);
    return c.json({ token, user });
  },
  register: async (c: RegisterContext) => {
    const body = c.req.valid("json");
    await userRepository.register(body);
    return c.json("You are successfully registered");
  },
};
