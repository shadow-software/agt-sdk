<p align="center">
  <img src=".github/assets/banner.svg" alt="@shadow-software/agt-sdk — by Shadow Software" width="880">
</p>

<h1 align="center">AGT TypeScript SDK</h1>

<p align="center">
  <strong>Official TypeScript client for the
  <a href="https://americanguntrader.com/">American Gun Trader</a> Dealer API.</strong><br>
  Typed with <code>openapi-typescript</code> + <code>openapi-fetch</code>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@shadow-software/agt-sdk"><img alt="npm" src="https://img.shields.io/npm/v/@shadow-software/agt-sdk?style=flat-square&color=d9a441"></a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square">
  <a href="https://shadowsoftware.com/"><img alt="Shadow Software" src="https://img.shields.io/badge/by-Shadow%20Software-8a8a8a?style=flat-square"></a>
</p>

<p align="center">
  <b><a href="https://www.npmjs.com/package/@shadow-software/agt-sdk">npm →</a></b>
  &nbsp;·&nbsp;
  <a href="https://github.com/shadow-software/agt-php-sdk">PHP SDK</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/shadow-software/agt-for-woocommerce">WordPress plugin</a>
</p>

---

## Install

```bash
npm install @shadow-software/agt-sdk
```

If the scoped package is not yet on the public registry (npm org provisioning),
install from the GitHub release tag:

```bash
npm install github:shadow-software/agt-sdk#v0.2.0
```

## Usage

```ts
import { createAgtDealerClient } from "@shadow-software/agt-sdk";

const client = createAgtDealerClient({
  apiKey: process.env.AGT_API_KEY!,
  // baseUrl defaults to https://americanguntrader.com/api/v1/dealer
});
```

`src/generated/` is regenerated from the OpenAPI spec — do not edit by hand.
Releases are produced by
[`shadow-software/sdk-release`](https://github.com/shadow-software/sdk-release).

## License

[MIT](LICENSE) © [Shadow Software LLC](https://shadowsoftware.com/).

---

## Also by Shadow Software

| | |
|---|---|
| [`shadow-software/agt-php-sdk`](https://github.com/shadow-software/agt-php-sdk) | AGT Dealer API (PHP) |
| [`@shadow-software/dabdash-sdk`](https://github.com/shadow-software/dabdash-sdk) | DabDash Tenant API (TypeScript) |
| [AGT Sync for WooCommerce](https://github.com/shadow-software/agt-for-woocommerce) | WordPress / WooCommerce plugin |

<p align="center">
  <sub><a href="https://shadowsoftware.com/">shadowsoftware.com</a> · MIT · © 2026 Shadow Software LLC</sub>
</p>
