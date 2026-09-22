import assert from "node:assert/strict";
import { test } from "node:test";
import { createAgtDealerClient } from "../dist/index.js";

test("createAgtDealerClient exposes openapi-fetch verbs", () => {
  const client = createAgtDealerClient({ apiKey: "smoke-test-key" });

  assert.equal(typeof client.GET, "function");
  assert.equal(typeof client.POST, "function");
});
