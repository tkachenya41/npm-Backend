import { Hono } from "hono";
import { userRoutes } from "./user/userRoutes";

import { DBErrorHandler, ValidationErrorHandler } from "@/utils/error-handler";
import { postRoutes } from "./user/postRoutes";
import { authRoutes } from "./authRoutes";

export const routes = new Hono();

routes.onError(DBErrorHandler);
routes.onError(ValidationErrorHandler);
routes.route("/", userRoutes);
routes.route("/", authRoutes);
routes.route("/", postRoutes);
