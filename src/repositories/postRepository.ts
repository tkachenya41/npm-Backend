import { prisma } from "@/model/prisma";
import { DBError } from "@/utils/custom-error";
import { errorCode } from "@/utils/utils";
import { Category, Post, User } from "@prisma/client";

export const postRepository = {
  create: async (
    user: Omit<User, "id">,
    posts: Omit<Post, "userId">,
    category: Omit<Category, "id">
  ) => {
    const post = await prisma.post.create({
      data: {
        user: {
          create: {
            email: user.email,
            password: user.password,
            name: user.name,
          },
        },
        title: posts.title,
        categories: {
          create: {
            name: category.name,
          },
        },
      },
    });
    return post;
  },
  getById: async (id: Post["userId"]) => {
    const post = await prisma.post.findFirst({
      where: {
        userId: id,
      },
    });
    if (!post) {
      throw new DBError(`Post is not found`, errorCode.NOT_FOUND);
    }
    return post;
  },
  getAll: async () => {
    const posts = await prisma.post.findMany({
      include: { categories: true },
    });
    return posts;
  },
  delete: async (id: Post["userId"]) => {
    try {
      const post = await prisma.post.delete({
        where: {
          userId: id,
        },
      });
      return post;
    } catch (error) {
      throw new DBError(`${id} is not found`, errorCode.NOT_FOUND);
    }
  },
  update: async (post: Post) => {
    try {
      const existedPost = await prisma.post.update({
        where: {
          userId: post.userId,
        },
        data: post,
      });
      return existedPost;
    } catch {
      throw new DBError("Post not found", errorCode.NOT_FOUND);
    }
  },
};
