import { Hono } from "hono";
import { userRoutes } from "./user/userRoutes";
import { cors } from "hono/cors";
import { swaggerUI } from "@hono/swagger-ui";

import { UniversalErrorHandler } from "@/utils/error-handler";
import { postRoutes } from "./user/postRoutes";
import { authRoutes } from "./authRoutes";

export const routes = new Hono();

routes.get("/ui", swaggerUI({ url: "/doc" }));
routes.use("*", cors());

routes.onError(UniversalErrorHandler);

routes.route("/", userRoutes);
routes.route("/", authRoutes);
routes.route("/", postRoutes);
