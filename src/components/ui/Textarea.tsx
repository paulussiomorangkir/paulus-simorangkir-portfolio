import { forwardRef, useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-ink-600 dark:text-ink-200">
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "rounded-xl border bg-transparent px-4 py-3 text-sm font-body outline-none transition-colors resize-none",
            "border-ink-900/15 dark:border-white/15 focus:border-indigo-500",
            "placeholder:text-ink-400 dark:placeholder:text-ink-400",
            error && "border-clay-500 focus:border-clay-500",
            className
          )}
          {...rest}
        />
        {error && (
          <p id={errorId} role="alert" className="text-xs text-clay-600 dark:text-clay-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
