import type { ContactFormErrors, ContactFormValues } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Nama wajib diisi.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Nama terlalu pendek.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.message.trim()) {
    errors.message = "Pesan wajib diisi.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Pesan minimal 10 karakter.";
  }

  return errors;
}

/** True if the honeypot field was filled — a strong bot signal. */
export function isLikelySpam(values: ContactFormValues): boolean {
  return values.company.trim().length > 0;
}
