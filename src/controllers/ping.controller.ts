import type { Context } from "hono";
import { responseHelper } from "../lib/response-helper";

export class PingController {
  async ping(c: Context) {
    return c.json(responseHelper.success("Pong"));
  }
}
