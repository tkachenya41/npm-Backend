import {
  IdContextType,
  PostBodyContext,
  UpdatePostContext,
} from "@/middlewares/types";
import { postRepository } from "@/repositories/postRepository";
import { Context } from "hono";

export const postController = {
  create: async (c: PostBodyContext) => {
    const { user, posts } = c.req.valid("json");
    const post = await postRepository.create(user, posts);
    return c.json(post);
  },

  getById: async (c: IdContextType) => {
    const { id } = c.req.valid("param");
    const posts = await postRepository.getById(id);
    return c.json(posts);
  },
  getAll: async (c: Context) => {
    const posts = await postRepository.getAll();
    return c.json(posts);
  },
  delete: async (c: IdContextType) => {
    const { id } = c.req.valid("param");
    const postById = await postRepository.delete(id);
    return c.json(postById);
  },
  update: async (c: UpdatePostContext) => {
    const postBody = c.req.valid("json");
    const updatedPost = await postRepository.update(postBody);
    return c.json(updatedPost);
  },
};
