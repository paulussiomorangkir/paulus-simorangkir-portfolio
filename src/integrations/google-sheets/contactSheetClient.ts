import { APP_CONFIG } from "@/config/app.config";
import type { ApiResponse, ContactFormValues } from "@/types";

export class ContactServiceError extends Error {}

/**
 * Submits the contact form to the Google Apps Script Web App.
 *
 * Note on Content-Type: Apps Script Web Apps respond to CORS preflight
 * (OPTIONS) requests unreliably. Sending the body as `text/plain` avoids
 * the browser issuing a preflight request at all, while the Apps Script
 * side still parses `e.postData.contents` as JSON. This is the standard,
 * documented workaround for this integration pattern.
 */
export async function submitToGoogleSheets(values: ContactFormValues): Promise<ApiResponse> {
  if (!APP_CONFIG.contactEndpoint) {
    throw new ContactServiceError(
      "Endpoint kontak belum dikonfigurasi. Set VITE_CONTACT_ENDPOINT di file .env."
    );
  }

  const response = await fetch(APP_CONFIG.contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new ContactServiceError(`Permintaan gagal dengan status ${response.status}.`);
  }

  const data = (await response.json()) as ApiResponse;
  return data;
}
