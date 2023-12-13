import { Hono } from "hono";
import { userController } from "@/controllers/userController";
import { validateUserBody, validateUserId } from "@/middlewares/userValidation";
import { postRoutes } from "./postRoutes";
import { checkAdmin } from "@/middlewares/authValidation";
import { jwt } from "hono/jwt";

const secretKey = process.env.SECRET_KEY!;

export const userRoutes = new Hono().basePath("/users");

userRoutes.use(
  "/*",
  jwt({
    secret: secretKey,
  }),
  checkAdmin
);

userRoutes.route("/", postRoutes);

userRoutes.get("/:id", validateUserId, userController.getById);
userRoutes.get("/", userController.getAll);
userRoutes.post("/", validateUserBody, userController.create);
userRoutes.put("/", validateUserBody, userController.update);
userRoutes.delete("/:id", validateUserId, userController.delete);
