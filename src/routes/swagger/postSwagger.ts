import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

export const postSwaggerRoute = new OpenAPIHono();

postSwaggerRoute.openapi(
  createRoute({
    method: "get",
    tags: ["post"],
    path: "/users/post",
    responses: {
      200: {
        description: "get all posts",
        content: {
          "application/json": {
            schema: z.array(
              z.object({
                title: z.string(),
                userId: z.number(),
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
        title: "wjiofev",
        userId: 6,
      },
      {
        title: "wjiofev",
        userId: 7,
      },
    ]);
  }
);

postSwaggerRoute.openapi(
  createRoute({
    method: "get",
    tags: ["post"],
    path: "/users/post/{id}",
    parameters: [
      {
        name: "id",
        in: "path",
        description: `delete post with the help of 'id'`,
      },
    ],
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.object({
              title: z.string(),
              userId: z.number(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      title: "wjiofev",
      userId: 6,
    });
  }
);

postSwaggerRoute.openapi(
  createRoute({
    method: "post",
    tags: ["post"],
    path: "/users/post",
    requestBody: {
      description: "post a user",
      content: {
        "application/json": {
          example: {
            user: {
              name: "Max",
              email: "tkeewnia@gmail.com",
              password: "12we5pomaN@#$",
              role: "USER",
            },
            posts: {
              title: "Hello God",
            },
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
              title: z.string(),
              userId: z.number(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      title: "wjiofev",
      userId: 6,
    });
  }
);
postSwaggerRoute.openapi(
  createRoute({
    method: "put",
    tags: ["post"],
    path: "/users/post",
    requestBody: {
      description: "Update post with the help of 'id'",
      content: {
        "application/json": {
          example: {
            userId: 60,
            title: "Hello God",
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
              title: z.string(),
              userId: z.number(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      title: "wjiofev",
      userId: 6,
    });
  }
);

postSwaggerRoute.openapi(
  createRoute({
    method: "delete",
    tags: ["post"],
    path: "/users/post/{id}]",
    parameters: [
      {
        name: "id",
        in: "path",
        description: `delete post with the help of 'id'`,
      },
    ],
    responses: {
      200: {
        description: "",
        content: {
          "application/json": {
            schema: z.object({
              title: z.string(),
              userId: z.number(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      title: "wjiofev",
      userId: 6,
    });
  }
);
