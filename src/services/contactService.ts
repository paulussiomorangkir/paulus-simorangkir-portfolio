import { supabase } from "@/lib/supabase";
import type { ContactFormValues } from "@/types";

export async function sendContactMessage(values: ContactFormValues) {
  const { error } = await supabase.from("messages").insert([
    {
      name: values.name,
      email: values.email,
      message: values.message,
    },
  ]);

  if (error) {
    return {
      status: "error",
      message: error.message || "Gagal mengirim pesan",
    };
  }

  return {
    status: "success",
    message: "Terima kasih! Pesan kamu sudah terkirim.",
  };
}