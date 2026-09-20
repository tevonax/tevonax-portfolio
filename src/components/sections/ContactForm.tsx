"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { submitInquiry } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { mailtoHref, projectTypes, site, timelines } from "@/content/site";
import { INITIAL_INQUIRY_STATE, type InquiryValues } from "@/lib/inquiry";

const control =
  "w-full border border-line-strong bg-canvas px-4 text-base text-ink transition-colors placeholder:text-ink-subtle hover:border-ink focus-visible:border-ink aria-[invalid=true]:border-danger";

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, optional, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium">
        <span>{label}</span>
        {optional && <span className="font-normal text-ink-subtle">Optional</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, INITIAL_INQUIRY_STATE);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const { values, errors } = state;

  // Move focus to whatever needs attention after each submission (a11y).
  useEffect(() => {
    if (state.status === "invalid") {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border border-line bg-surface p-8 md:p-10">
        <p className="type-label text-accent">Message sent</p>
        <h3 className="type-h3 mt-4">Thank you. We have received your message.</h3>
        <p className="mt-3 max-w-md text-ink-muted">
          We will reply to{" "}
          <span className="font-medium text-ink">{values.email || "your email address"}</span> with
          clear next steps.
        </p>
      </div>
    );
  }

  const fieldProps = (key: keyof InquiryValues) => ({
    id: key,
    name: key,
    "aria-invalid": errors[key] ? (true as const) : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <form
      ref={formRef}
      action={formAction}
      aria-busy={pending}
      className="border border-line p-6 md:p-8"
    >
      {(state.status === "unavailable" || state.status === "failed") && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="mb-8 border border-danger p-5">
          <p className="font-medium text-danger">We could not send your message from this page.</p>
          <p className="mt-2 text-sm text-ink-muted">
            Nothing is lost: what you wrote is still below. You can email us directly at{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>
            , or open a ready-made draft in your email app.
          </p>
          <a
            href={mailtoHref(values)}
            className="mt-3 inline-block text-sm font-medium text-ink underline underline-offset-4"
          >
            Open email draft
          </a>
        </div>
      )}

      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            defaultValue={values.name}
            className={`${control} h-12`}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={values.email}
            className={`${control} h-12`}
          />
        </Field>

        <Field id="company" label="Company" optional error={errors.company}>
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            maxLength={120}
            defaultValue={values.company}
            className={`${control} h-12`}
          />
        </Field>

        <Field id="projectType" label="Project type" error={errors.projectType}>
          <select
            // React only applies a <select>'s defaultValue on mount, and the form is reset
            // after every submission. Re-keying remounts it so the visitor's choice survives.
            // `key` must come BEFORE the props spread: after a spread, JSX falls back to
            // createElement and React (dev) then warns about unkeyed <option> children.
            key={`projectType:${values.projectType}`}
            {...fieldProps("projectType")}
            required
            defaultValue={values.projectType}
            className={`${control} h-12`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id="timeline" label="Timeline" error={errors.timeline}>
          <select
            key={`timeline:${values.timeline}`}
            {...fieldProps("timeline")}
            required
            defaultValue={values.timeline}
            className={`${control} h-12`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </Field>

        <Field id="budget" label="Budget range" optional error={errors.budget}>
          <input
            {...fieldProps("budget")}
            type="text"
            maxLength={80}
            defaultValue={values.budget}
            placeholder="If you have one in mind"
            className={`${control} h-12`}
          />
        </Field>

        <Field id="message" label="Tell us about your project" error={errors.message} className="sm:col-span-2">
          <textarea
            {...fieldProps("message")}
            required
            minLength={20}
            maxLength={4000}
            rows={6}
            defaultValue={values.message}
            className={`${control} min-h-40 py-3`}
          />
        </Field>

        {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-ink-subtle">
          We use your details only to reply to you, as described in our{" "}
          <Link href="/privacy" className="text-ink underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" arrow disabled={pending} className="shrink-0">
          {pending ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
