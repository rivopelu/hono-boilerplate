import { Hono } from "hono";
import { pingRoutes } from "./ping.routes";

const app = new Hono();

app.route("/ping", pingRoutes);

export default app;
