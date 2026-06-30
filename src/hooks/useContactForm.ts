import { useCallback, useState } from "react";
import { sendContactMessage } from "@/services/contactService";
import { isLikelySpam, validateContactForm } from "@/utils/validateContactForm";
import type { ContactFormErrors, ContactFormValues, SubmissionState } from "@/types";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = useCallback(
    (field: keyof ContactFormValues, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // spam check
      if (isLikelySpam(values)) {
        setStatus("success");
        setFeedback("Terima kasih! Pesan kamu sudah terkirim.");
        setValues(INITIAL_VALUES);
        return;
      }

      // validation
      const validationErrors = validateContactForm(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      setStatus("submitting");
      setFeedback(null);

      try {
        const response = await sendContactMessage(values);

        // FIX TYPE ERROR DI SINI (WAJIB)
        if (response.status === "success") {
          setStatus("success");
        } else {
          setStatus("error");
        }

        setFeedback(response.message);

        if (response.status === "success") {
          setValues(INITIAL_VALUES);
        }
      } catch (err) {
        setStatus("error");
        setFeedback(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan tak terduga."
        );
      }
    },
    [values]
  );

  return {
    values,
    errors,
    status,
    feedback,
    handleChange,
    handleSubmit,
  };
}