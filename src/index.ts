import { Hono } from "hono";
import { routes } from "./routes";
import { serve } from "@hono/node-server";

const app = new Hono();
app.route("/", routes);

serve({
  fetch: app.fetch,
  port: 8000,
});
