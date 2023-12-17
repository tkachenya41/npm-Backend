import { Hono } from "hono";
import { userRoutes } from "./user/userRoutes";
import { cors } from "hono/cors";

import {
  AuthErrorHandler,
  DBErrorHandler,
  ValidationErrorHandler,
} from "@/utils/error-handler";
import { postRoutes } from "./user/postRoutes";
import { authRoutes } from "./authRoutes";

export const routes = new Hono();

routes.use("*", cors());
routes.onError(DBErrorHandler);
routes.onError(ValidationErrorHandler);
routes.onError(AuthErrorHandler);

routes.route("/", userRoutes);
routes.route("/", authRoutes);
routes.route("/", postRoutes);
