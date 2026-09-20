"use server";

import {
  EMPTY_INQUIRY,
  formatInquiryEmail,
  readInquiry,
  validateInquiry,
  type InquiryState,
} from "@/lib/inquiry";
import { sendEnquiryEmail } from "@/lib/mailer";

/**
 * Contact form handler (React `useActionState` + Server Action).
 * Works without JavaScript and validates everything on the server.
 */
export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot: real visitors never see or fill this field. Bots do. Pretend it worked.
  const trap = formData.get("website");
  if (typeof trap === "string" && trap.trim() !== "") {
    return { status: "success", values: EMPTY_INQUIRY, errors: {} };
  }

  const values = readInquiry(formData);
  const errors = validateInquiry(values);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", values, errors };
  }

  const { subject, text } = formatInquiryEmail(values);
  const result = await sendEnquiryEmail({ subject, text, replyTo: values.email });

  if (result.ok) return { status: "success", values, errors: {} };
  return {
    status: result.reason === "unconfigured" ? "unavailable" : "failed",
    values,
    errors: {},
  };
}
