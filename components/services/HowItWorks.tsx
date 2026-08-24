export type Step = {
  title: string;
  description: string;
};

type HowItWorksProps = {
  steps: Step[];
  note?: string;
  tone?: "tech" | "warm";
};

// Numbered process steps, used on each services category page instead
// of a single dense paragraph.
export function HowItWorks({ steps, note, tone = "tech" }: HowItWorksProps) {
  const accent = tone === "tech" ? "text-tech-blue" : "text-brass-ink";
  const border = tone === "tech" ? "border-line" : "border-paper-line";

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {steps.map((step, index) => (
          <div key={step.title} className={`border-t pt-5 ${border}`}>
            <span className={`font-mono text-sm tabular-nums ${accent}`}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-body">{step.description}</p>
          </div>
        ))}
      </div>
      {note && (
        <p className={`mt-10 max-w-2xl border-l-2 pl-4 text-sm leading-6 text-subtle ${border}`}>{note}</p>
      )}
    </div>
  );
}
