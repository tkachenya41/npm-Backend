import { Hono } from "hono";
import { routes } from "./routes";
import { serve } from "@hono/node-server";
import swaggerRoute from "./routes/swagger/swagger";

const app = new Hono();
app.route("/", routes);
app.route("/", swaggerRoute);

serve({
  fetch: app.fetch,
  port: 8000,
});
