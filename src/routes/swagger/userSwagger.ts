import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

export const userSwaggerRoute = new OpenAPIHono();

userSwaggerRoute.openapi(
  createRoute({
    method: "get",
    tags: ["users"],
    path: "/users",
    responses: {
      200: {
        description: "get all users",
        content: {
          "application/json": {
            schema: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                email: z.string(),
                password: z.string(),
                role: z.string(),
              })
            ),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json([
      {
        id: 0,
        email: "udfsifjsdkvdj@gmail.com",
        name: "Niewkita",
        password:
          "$argoSfKFSJaAqg8UwKjHITxWYks$+ZmJ4ipqipeU8uFd/6v01DIzo4LzaVJtScFzw+eeet4",
        role: "USER",
      },
      {
        id: 1,
        email: "khgj@gmail.com",
        name: "Roman",
        password:
          "$argon2id$v=9ZVqZstqdSvr4LzyY$qQSJSC/4ya+yjJxEGzJLk5E71wYUps++uzGZXsoc6FU",
        role: "USER",
      },
    ]);
  }
);

userSwaggerRoute.openapi(
  createRoute({
    method: "get",
    tags: ["users"],
    path: "/users/{id}",
    parameters: [
      {
        name: "id",
        in: "path",
        description: `delete user with the help of 'id'`,
      },
    ],
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.object({
              id: z.number(),
              name: z.string(),
              email: z.string(),
              password: z.string(),
              role: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      id: 1,
      email: "khgj@gmail.com",
      name: "Roman",
      password:
        "$argon2id$v=19ZVqZstqdSvr4LzyY$qQSJSC/4ya+yjJxEGzJLk5E71wYUps++uzGZXsoc6FU",
      role: "USER",
    });
  }
);
userSwaggerRoute;

userSwaggerRoute.openapi(
  createRoute({
    method: "post",
    tags: ["users"],
    path: "/users",
    requestBody: {
      description: "post a user",
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
            schema: z.object({
              id: z.number(),
              name: z.string(),
              email: z.string(),
              password: z.string(),
              role: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      id: 1,
      email: "khgj@gmail.com",
      name: "Roman",
      password:
        "$argon2id$v=19ZVqZstqdSvr4LzyY$qQSJSC/4ya+yjJxEGzJLk5E71wYUps++uzGZXsoc6FU",
      role: "USER",
    });
  }
);
userSwaggerRoute.openapi(
  createRoute({
    method: "put",
    tags: ["users"],
    path: "/users",
    requestBody: {
      description: "Update user with the help of 'id'",
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
            schema: z.object({
              id: z.number(),
              name: z.string(),
              email: z.string(),
              password: z.string(),
              role: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      id: 1,
      email: "khgj@gmail.com",
      name: "Roman",
      password:
        "$argon2id$v=19ZVqZstqdSvr4LzyY$qQSJSC/4ya+yjJxEGzJLk5E71wYUps++uzGZXsoc6FU",
      role: "USER",
    });
  }
);

userSwaggerRoute.openapi(
  createRoute({
    method: "delete",
    tags: ["users"],
    path: "/users/{id}]",
    parameters: [
      {
        name: "id",
        in: "path",
        description: `delete user with the help of 'id'`,
      },
    ],
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.object({
              id: z.number(),
              name: z.string(),
              email: z.string(),
              password: z.string(),
              role: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      id: 1,
      email: "khgj@gmail.com",
      name: "Roman",
      password:
        "$argon2id$v=19ZVqZstqdSvr4LzyY$qQSJSC/4ya+yjJxEGzJLk5E71wYUps++uzGZXsoc6FU",
      role: "USER",
    });
  }
);
