import {
  UserBodyContext,
  IdContextType,
  UpdateUserContext,
  NameContextType,
} from "@/middlewares/types";
import userRepository from "@/repositories/userRepository";
import { Context } from "hono";

export const userController = {
  getById: async (c: IdContextType) => {
    const { id } = c.req.valid("param");
    const userById = await userRepository.getById(id);
    return c.json(userById);
  },

  getByName: async (c: NameContextType) => {
    const { name } = c.req.valid("query");
    const users = await userRepository.findByName(name);
    return c.json(users);
  },

  getAll: async (c: Context) => {
    const users = await userRepository.getAll();
    return c.json(users);
  },

  create: async (c: UserBodyContext) => {
    const body = c.req.valid("json");
    const createdUser = await userRepository.create(body);
    return c.json(createdUser);
  },

  update: async (c: UpdateUserContext) => {
    const body = c.req.valid("json");
    const updatedUser = await userRepository.update(body);
    return c.json(updatedUser);
  },

  delete: async (c: IdContextType) => {
    const { id } = c.req.valid("param");
    const userById = await userRepository.delete(id);
    return c.json(userById);
  },
};
