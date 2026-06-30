import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const { values, errors, status, feedback, handleChange, handleSubmit } = useContactForm();
  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Input
        label="Nama"
        name="name"
        autoComplete="name"
        value={values.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        disabled={isSubmitting}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        disabled={isSubmitting}
        required
      />
      <Textarea
        label="Pesan"
        name="message"
        value={values.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        disabled={isSubmitting}
        required
      />

      {/* Honeypot — hidden from sighted users, irresistible to most bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Perusahaan</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </Button>

      <AnimatePresence mode="wait">
        {feedback && (
          <motion.p
            key={status}
            role="status"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`flex items-center gap-2 text-sm ${
              status === "success" ? "text-signal-600 dark:text-signal-500" : "text-clay-600 dark:text-clay-400"
            }`}
          >
            {status === "success" ? (
              <FiCheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <FiAlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            {feedback}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
