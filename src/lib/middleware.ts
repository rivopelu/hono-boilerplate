import type { Hono } from "hono";
import corsConfig from "../config/cors.config";
import { ENV } from "../constants/env";
import loggerMiddleware from "../middleware/logger.middleware";
import { ErrorHandler } from "./error-handler";
import setupApiRoutes from "../routes/_app.routes";
export class SetupMiddleware {
  private app: Hono;

  constructor(app: Hono) {
    this.app = app;
    this.setup();
  }

  private setup() {
    this.app.use("*", loggerMiddleware);
    this.app.use("*", corsConfig);
    this.app.route(ENV.APP_PREFIX, setupApiRoutes);
    this.app.onError(ErrorHandler);
  }
}
