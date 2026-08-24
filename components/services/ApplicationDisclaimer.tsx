type ApplicationDisclaimerProps = {
  tone?: "neutral" | "warm";
};

// Standard, low-key clarification shown wherever application assistance
// is described. Deliberately styled as a normal note, not a warning box —
// see docs/07-content-guidelines.md. `tone="warm"` matches the paper
// background used on the application-assistance pages.
export function ApplicationDisclaimer({ tone = "neutral" }: ApplicationDisclaimerProps) {
  return (
    <p
      className={`border-l-2 pl-4 text-sm leading-6 ${
        tone === "warm" ? "border-brass/50 text-brass-ink/80" : "border-line text-subtle"
      }`}
    >
      VIP e-Services is not a government department and is not officially affiliated with any government
      service. We help you understand and complete your application — we don&apos;t make decisions, guarantee
      approval, or provide legal or immigration advice.
    </p>
  );
}
