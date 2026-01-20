import { Hono } from "hono";
import { PingController } from "../controllers/ping.controller";

const router = new Hono();
const controller = new PingController();

router.get("/", controller.ping.bind(controller));

export const pingRoutes = router;
