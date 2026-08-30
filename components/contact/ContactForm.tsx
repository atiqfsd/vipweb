"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const enquiryTypes = ["Digital & IT Solutions", "Application assistance", "Not sure — please advise"] as const;

const inputClasses =
  "w-full border border-line bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus-visible:border-tech-blue";

type Status = "idle" | "submitting" | "success" | "error";

// The form submits to Web3Forms (https://web3forms.com), a trusted
// email/form provider — see docs/11-technical-architecture.md. This site
// is a static export with no server of its own, so the browser posts
// straight to the provider, which emails the enquiry to siteConfig.email.
// The access key in site-config.ts is not a secret (it only names the
// destination inbox). If nothing is configured yet, the form falls back
// to opening the visitor's mail app via `mailto:` so it is never a
// dead button.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const keyConfigured =
  siteConfig.web3formsKey && siteConfig.web3formsKey !== "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function buildFields(form: FormData) {
    return {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      enquiryType: String(form.get("enquiryType") ?? ""),
      message: String(form.get("message") ?? "").trim(),
    };
  }

  function openMailtoFallback(f: ReturnType<typeof buildFields>) {
    const subject = `Enquiry from ${f.name || "website contact form"}`;
    const bodyLines: string[] = [];
    if (f.enquiryType) bodyLines.push(`Enquiry type: ${f.enquiryType}`);
    bodyLines.push(`Name: ${f.name}`, `Email: ${f.email}`);
    if (f.phone) bodyLines.push(`Phone: ${f.phone}`);
    bodyLines.push("", f.message);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);

    // Honeypot: real users leave this hidden field empty.
    if (String(form.get("botcheck") ?? "").length > 0) return;

    const fields = buildFields(form);

    if (!keyConfigured) {
      openMailtoFallback(fields);
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `Website enquiry from ${fields.name || "contact form"}`,
          from_name: "VIP e-Services website",
          name: fields.name,
          email: fields.email,
          phone: fields.phone || "Not provided",
          "Enquiry type": fields.enquiryType || "Not specified",
          message: fields.message,
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (res.ok && data.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-6">
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

        {/* Honeypot field — hidden from people, visible to bots. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 bg-tech-blue px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          <p className="mt-3 max-w-md text-sm leading-6 text-subtle">
            We only use the details you send to reply to your enquiry. Prefer to talk? Call or WhatsApp us instead.
          </p>
        </div>

        <div role="status" aria-live="polite">
          {status === "success" && (
            <p className="border-l-2 border-tech-blue pl-4 text-sm leading-6 text-body">
              {keyConfigured
                ? "Thanks — your message has been sent. We'll get back to you as soon as we can."
                : `Your email app should have opened with the message ready — just hit send from there. If nothing happened, email us directly at ${siteConfig.email}.`}
            </p>
          )}
          {status === "error" && (
            <p className="border-l-2 border-red-500 pl-4 text-sm leading-6 text-body">
              Something went wrong sending your message. Please try again, or email us directly at {siteConfig.email}.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
