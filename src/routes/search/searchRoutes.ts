import { userController } from "@/controllers/userController";
import { validateUserName } from "@/middlewares/userValidation";
import { Hono } from "hono";
import { jwt } from "hono/jwt";

const secretKey = process.env.SECRET_KEY!;

export const searchRoutes = new Hono();

searchRoutes.use(
  "/",
  jwt({
    secret: secretKey,
  })
);

searchRoutes.get("/", validateUserName, userController.getByName);
