"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const enquiryTypes = ["Digital & IT Solutions", "Application assistance", "Not sure — please advise"] as const;

const inputClasses =
  "w-full border border-line bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus-visible:border-tech-blue";

// There's no backend, database or email-sending account configured for
// this site (docs/11-technical-architecture.md: no DB unless a real
// requirement exists; never put API keys in frontend code). Rather than
// wire up a fake "Send" button that silently fails, this composes a
// pre-filled email via `mailto:` and hands it to the visitor's own mail
// app — genuinely functional today. If the owner sets up a trusted
// email-sending provider later, swap the onSubmit body for a real POST
// and this markup/validation can stay as-is.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const enquiryType = String(form.get("enquiryType") ?? "");
    const message = String(form.get("message") ?? "").trim();

    const subject = `Enquiry from ${name || "website contact form"}`;
    const bodyLines: string[] = [];
    if (enquiryType) bodyLines.push(`Enquiry type: ${enquiryType}`);
    bodyLines.push(`Name: ${name}`, `Email: ${email}`);
    if (phone) bodyLines.push(`Phone: ${phone}`);
    bodyLines.push("", message);

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={`mt-2 ${inputClasses}`} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={`mt-2 ${inputClasses}`} />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone <span className="font-normal text-subtle">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={`mt-2 ${inputClasses}`} />
          </div>
          <div>
            <label htmlFor="enquiryType" className="text-sm font-medium text-foreground">
              What&apos;s this about?
            </label>
            <select id="enquiryType" name="enquiryType" defaultValue="" className={`mt-2 ${inputClasses}`}>
              <option value="" disabled>
                Choose an option
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`mt-2 ${inputClasses}`}
            placeholder="Tell us what you need help with."
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-tech-blue px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy"
          >
            Send message
          </button>
          <p className="mt-3 max-w-md text-sm leading-6 text-subtle">
            This opens your email app with your message ready to send to {siteConfig.email} — nothing is stored on
            this website. Prefer not to? Call or WhatsApp us instead.
          </p>
        </div>

        <div role="status" aria-live="polite">
          {submitted && (
            <p className="border-l-2 border-tech-blue pl-4 text-sm leading-6 text-body">
              Your email app should have opened with the message ready — just hit send from there. If nothing
              happened, email us directly at {siteConfig.email}.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
