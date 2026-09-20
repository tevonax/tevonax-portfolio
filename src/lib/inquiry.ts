import { projectTypes, timelines } from "@/content/site";

export type InquiryValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export type InquiryState = {
  status: "idle" | "invalid" | "success" | "unavailable" | "failed";
  values: InquiryValues;
  errors: InquiryErrors;
};

export const EMPTY_INQUIRY: InquiryValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  timeline: "",
  budget: "",
  message: "",
};

export const INITIAL_INQUIRY_STATE: InquiryState = {
  status: "idle",
  values: EMPTY_INQUIRY,
  errors: {},
};

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  company: { max: 120 },
  budget: { max: 80 },
  message: { min: 20, max: 4000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(formData: FormData, key: keyof InquiryValues): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function readInquiry(formData: FormData): InquiryValues {
  return {
    name: text(formData, "name"),
    email: text(formData, "email"),
    company: text(formData, "company"),
    projectType: text(formData, "projectType"),
    timeline: text(formData, "timeline"),
    budget: text(formData, "budget"),
    message: text(formData, "message"),
  };
}

/** Server-side source of truth. Browser-side attributes are only a convenience. */
export function validateInquiry(v: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};

  if (v.name.length < LIMITS.name.min) errors.name = "Please enter your name.";
  else if (v.name.length > LIMITS.name.max) errors.name = "That name is too long.";

  if (!EMAIL_PATTERN.test(v.email) || v.email.length > LIMITS.email.max)
    errors.email = "Please enter a valid email address.";

  if (v.company.length > LIMITS.company.max) errors.company = "That is too long.";
  if (v.budget.length > LIMITS.budget.max) errors.budget = "That is too long.";

  if (!projectTypes.includes(v.projectType)) errors.projectType = "Please choose a project type.";
  if (!timelines.includes(v.timeline)) errors.timeline = "Please choose a timeline.";

  if (v.message.length < LIMITS.message.min)
    errors.message = `Please tell us a little more (at least ${LIMITS.message.min} characters).`;
  else if (v.message.length > LIMITS.message.max)
    errors.message = `Please keep this under ${LIMITS.message.max} characters.`;

  return errors;
}

/** Plain-text body for the notification email. */
export function formatInquiryEmail(v: InquiryValues): { subject: string; text: string } {
  const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
  return {
    subject: `New enquiry: ${oneLine(v.projectType)} (${oneLine(v.name)})`,
    text: [
      "New project enquiry from the Tevonax website",
      "",
      `Name: ${oneLine(v.name)}`,
      `Email: ${oneLine(v.email)}`,
      `Company: ${oneLine(v.company) || "-"}`,
      `Project type: ${v.projectType}`,
      `Timeline: ${v.timeline}`,
      `Budget: ${oneLine(v.budget) || "-"}`,
      "",
      "Message:",
      v.message,
    ].join("\n"),
  };
}
