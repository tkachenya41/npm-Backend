import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { userSwaggerRoute } from "./userSwagger";
import { postSwaggerRoute } from "./postSwagger";
import { authSwaggerRoute } from "./authSwagger";

const swaggerRoute = new OpenAPIHono();

swaggerRoute.route("/", userSwaggerRoute);
swaggerRoute.route("/", postSwaggerRoute);
swaggerRoute.route("/", authSwaggerRoute);

swaggerRoute.get(
  "/ui",
  swaggerUI({
    url: "/doc",
  })
);

swaggerRoute.doc("/doc", {
  info: {
    title: "NodeJS API",
    version: "v1",
    description:
      "This is a sample NodeJs Server based on the OpenAPI 3.0 specification",
  },
  openapi: "3.1.0",
  tags: [
    {
      name: "users",
      description: " Everything about  users",
    },
    {
      name: "post",
      description: " Everything about  posts",
    },
    {
      name: "auth",
      description: " Everything about authorization",
    },
  ],
});

export default swaggerRoute;
