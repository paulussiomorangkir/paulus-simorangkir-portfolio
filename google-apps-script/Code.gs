/**
 * Code.gs
 * Backend untuk formulir kontak portofolio Paulus Simorangkir.
 *
 * CARA PASANG:
 * 1. Buat Google Sheet baru, beri nama sheet pertama "Submissions".
 *    Baris pertama (header) isi: Timestamp | Nama | Email | Pesan | IP/User Agent
 * 2. Buka Extensions > Apps Script, hapus isi default, tempel file ini.
 * 3. Klik Deploy > New deployment > Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Salin URL Web App, tempel ke VITE_CONTACT_ENDPOINT di file .env frontend.
 * 5. Setiap kali mengubah kode ini, buat deployment versi baru (Manage deployments).
 */

const SHEET_NAME = "Submissions";
const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 120;

function doPost(e) {
  try {
    const payload = parseRequestBody(e);
    const validationError = validatePayload(payload);

    if (validationError) {
      return buildJsonResponse({ status: "error", message: validationError });
    }

    // Honeypot: jika frontend mengirim field "company" terisi, abaikan diam-diam.
    if (payload.company && String(payload.company).trim().length > 0) {
      return buildJsonResponse({
        status: "success",
        message: "Terima kasih! Pesan kamu sudah terkirim.",
      });
    }

    appendSubmissionToSheet(payload);

    return buildJsonResponse({
      status: "success",
      message: "Terima kasih! Pesan kamu sudah terkirim.",
    });
  } catch (error) {
    return buildJsonResponse({
      status: "error",
      message: "Server mengalami kendala. Coba lagi sebentar.",
    });
  }
}

/** Tangani permintaan GET sekadar agar URL endpoint bisa dites lewat browser. */
function doGet() {
  return buildJsonResponse({
    status: "success",
    message: "Endpoint kontak aktif. Gunakan metode POST untuk mengirim data.",
  });
}

function parseRequestBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Request tidak memiliki body.");
  }
  return JSON.parse(e.postData.contents);
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return "Data yang dikirim tidak valid.";
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || name.length > MAX_NAME_LENGTH) {
    return "Nama wajib diisi dan tidak boleh terlalu panjang.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Format email tidak valid.";
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return "Pesan wajib diisi dan tidak boleh terlalu panjang.";
  }

  return null;
}

function appendSubmissionToSheet(payload) {
  const sheet = getOrCreateSheet();
  sheet.appendRow([
    new Date(),
    sanitize(payload.name),
    sanitize(payload.email),
    sanitize(payload.message),
  ]);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Nama", "Email", "Pesan"]);
  }

  return sheet;
}

/** Pencegahan dasar terhadap formula injection saat data dibuka di Sheets. */
function sanitize(value) {
  const stringValue = String(value || "");
  return /^[=+\-@]/.test(stringValue) ? `'${stringValue}` : stringValue;
}

function buildJsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
