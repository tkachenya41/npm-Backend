import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

export const authSwaggerRoute = new OpenAPIHono();

authSwaggerRoute.openapi(
  createRoute({
    method: "post",
    tags: ["auth"],
    path: "/sign",
    requestBody: {
      description: "get a token",
      content: {
        "application/json": {
          example: {
            email: "tkeewnia@gmail.com",
            password: "12we5pomaN@#$",
          },
        },
      },
    },
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.string(),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json("token");
  }
);

authSwaggerRoute.openapi(
  createRoute({
    method: "post",
    tags: ["auth"],
    path: "/register",
    requestBody: {
      description: "register",
      content: {
        "application/json": {
          example: {
            id: 1,
            email: "khgj@gmail.com",
            name: "Roman",
            password: "1234567",
            role: "USER",
          },
        },
      },
    },
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.string(),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json("You are successfully registered");
  }
);
