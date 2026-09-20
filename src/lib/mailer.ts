import "server-only";

export type MailResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "rejected" | "network" };

type Mail = { subject: string; text: string; replyTo: string };

/**
 * Sends the enquiry notification through Resend's REST API
 * (POST /emails, Bearer auth, `reply_to`). No SDK, no extra dependency.
 *
 * Required environment variables (server-side only):
 *   RESEND_API_KEY      API key from resend.com
 *   CONTACT_TO_EMAIL    where enquiries are delivered (comma-separated for several)
 * Optional:
 *   CONTACT_FROM_EMAIL  verified sender, e.g. "Tevonax <no-reply@your-domain.com>"
 *   RESEND_API_URL      override the API endpoint (used for testing)
 */
export async function sendEnquiryEmail({ subject, text, replyTo }: Mail): Promise<MailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return { ok: false, reason: "unconfigured" };

  const from = process.env.CONTACT_FROM_EMAIL ?? "Tevonax Website <onboarding@resend.dev>";
  const endpoint = process.env.RESEND_API_URL ?? "https://api.resend.com/emails";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to
          .split(",")
          .map((address) => address.trim())
          .filter(Boolean),
        subject,
        text,
        reply_to: replyTo,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      // Log the status only: never the payload, which contains personal data.
      console.error(`[contact] email provider responded with status ${response.status}`);
      return { ok: false, reason: "rejected" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[contact] email request failed:", error instanceof Error ? error.name : "unknown");
    return { ok: false, reason: "network" };
  }
}
