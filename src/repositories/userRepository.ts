import { prisma } from "@/model/prisma";
import { errorCode } from "@/utils/utils";
import { DBError } from "@/utils/custom-error";
import { User } from "@prisma/client";
import { userService } from "@/services/userService";

export const userRepository = {
  getById: async (id: User["id"]) => {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new DBError(`User is not found`, errorCode.NOT_FOUND);
    }
    return user;
  },

  getAll: async () => {
    const users = await prisma.user.findMany();
    return users;
  },

  create: async (body: Omit<User, "id">) => {
    const hashPassword = await userService.hashPassword(body.password);
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: hashPassword,
        },
      });

      return user;
    } catch (err) {
      throw new DBError(
        `Something went wrong with DataBase, probably using existing 'email' property`,
        errorCode.INTERNAL_SERVER_ERROR
      );
    }
  },

  update: async (body: User) => {
    try {
      const hashPassword = await userService.hashPassword(body.password);
      const user = await prisma.user.update({
        where: {
          id: body.id,
        },
        data: {
          email: body.email,
          password: hashPassword,
          name: body.name,
          role: body.role,
        },
      });

      return user;
    } catch {
      throw new DBError("User not found", errorCode.NOT_FOUND);
    }
  },

  delete: async (id: User["id"]) => {
    try {
      const user = await prisma.user.delete({
        where: { id: id },
      });

      return user;
    } catch (error) {
      throw new DBError(`${id} is not found`, errorCode.NOT_FOUND);
    }
  },

  findByEmail: async (email: User["email"]) => {
    const existedUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!existedUser) {
      throw new DBError("User not found", errorCode.NOT_FOUND);
    }

    return existedUser;
  },
  findByName: async (name: User["name"]) => {
    const existedUser = await prisma.user.findMany({
      where: { name: name },
    });

    if (!existedUser) {
      throw new DBError("Users not found", errorCode.NOT_FOUND);
    }

    return existedUser;
  },
  register: async (body: Omit<User, "id" | "role">) => {
    const hashPassword = await userService.hashPassword(body.password);
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: hashPassword,
        },
      });

      return user;
    } catch (err) {
      throw new DBError(
        `Something went wrong with DataBase, probably using existing 'email' property`,
        errorCode.INTERNAL_SERVER_ERROR
      );
    }
  },
};

export default userRepository;
