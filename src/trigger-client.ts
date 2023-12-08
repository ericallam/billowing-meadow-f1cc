import { TriggerClient } from "@trigger.dev/sdk";
import { exampleJob } from "./jobs";

export function triggerClient(apiKey: string, apiUrl: string) {
  const client = new TriggerClient({
    id: "billowing-meadow-f1cc",
    apiKey,
    apiUrl,
  });

  exampleJob.attachToClient(client);

  return client;
}
