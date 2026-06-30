/**
 * Shared domain types for the portfolio.
 * Single source of truth — never redeclare these shapes elsewhere.
 */

export type ThemeMode = "light" | "dark";

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: "github" | "instagram" | "whatsapp" | "email";
}

export interface SkillItem {
  readonly name: string;
  /** 1-5, used only for the visual proficiency indicator */
  readonly level: number;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly SkillItem[];
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly summary: string;
  readonly tags: readonly string[];
  /** short git-commit-like hash used for the changelog visual motif */
  readonly commitHash: string;
}

export interface EducationItem {
  readonly id: string;
  readonly institution: string;
  readonly credential: string;
  readonly period: string;
  readonly summary: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly role: string;
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly href?: string;
  readonly repoHref?: string;
  readonly status: "live" | "in-progress" | "concept";
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  /** honeypot field — must stay empty; bots tend to fill every input */
  company: string;
}

export type ContactFormErrors = Partial<Record<keyof Omit<ContactFormValues, "company">, string>>;

export type SubmissionState = "idle" | "submitting" | "success" | "error";

export interface ApiSuccessResponse {
  readonly status: "success";
  readonly message: string;
}

export interface ApiErrorResponse {
  readonly status: "error";
  readonly message: string;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;
