/**
 * Centralized config. Reads from Vite env vars so no secrets are hardcoded.
 * Set these in a local `.env` file (see `.env.example`) — never commit `.env`.
 */
export const APP_CONFIG = {
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://paulussimorangkir.com",
  /**
   * Google Apps Script Web App URL (deployed from /google-apps-script/Code.gs).
   * This is a public endpoint by design (Apps Script web apps have no secret
   * key), so it is safe to expose on the client — it is NOT a credential.
   */
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT ?? "",
} as const;
