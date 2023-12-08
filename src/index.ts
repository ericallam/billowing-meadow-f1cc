import { addMiddleware } from "@trigger.dev/hono";
import { Hono } from "hono";
import { triggerClient } from "./trigger-client";

const app = new Hono<{
  Bindings: {
    TRIGGER_API_KEY: string;
    TRIGGER_API_URL: string;
  };
}>();

addMiddleware(app, (env) => triggerClient(env.TRIGGER_API_KEY, env.TRIGGER_API_URL));

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app;
