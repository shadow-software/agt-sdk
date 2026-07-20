import createClient from "openapi-fetch";
import type { paths } from "./generated/schema.js";

/**
 * Thin wrapper around openapi-fetch, typed from the AGT dealer OpenAPI spec
 * (see agt-sdk-release.yml in americanguntrader.com — src/generated/schema.ts
 * is regenerated on every release with a spec change, never hand-edited).
 */
export function createAgtDealerClient(options: { apiKey: string; baseUrl?: string }) {
  return createClient<paths>({
    baseUrl: options.baseUrl ?? "https://americanguntrader.com/api/v1/dealer",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
    },
  });
}

export type { paths as AgtDealerApiPaths };
