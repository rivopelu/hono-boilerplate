import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { ENV } from "../constants/env";
import logger from "./logger";
import { SetupMiddleware } from "./middleware";

const app = new Hono();
export default class SetupServer {
  constructor() {
    this.setup();
    this.entryPoint();
  }

  private setup(): void {
    new SetupMiddleware(app);

    const server = serve(
      {
        fetch: app.fetch,
        port: ENV.PORT,
      },
      (info) => {
        logger.info(
          `Server is running on http://localhost:${info.port} with env ${ENV.NODE_ENV}`,
        );
      },
    );
  }

  private entryPoint() {
    app.get("/", (c) => {
      return c.text(ENV.VERSION + " - " + ENV.NODE_ENV);
    });
  }
}
