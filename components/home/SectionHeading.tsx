type SectionHeadingSize = "md" | "lg";
type SectionHeadingAccent = "tech" | "warm";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  size?: SectionHeadingSize;
  accent?: SectionHeadingAccent;
  className?: string;
};

const titleSizeClasses: Record<SectionHeadingSize, string> = {
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

// Shared heading block: eyebrow (small rule + label) + H2 + intro copy.
// size="lg" is for the major editorial sections (divisions, catalogues);
// size="md" (default) suits secondary sections. `accent="warm"` switches
// the eyebrow colour to brass for Application Assistance sections.
export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  size = "md",
  accent = "tech",
  className = "",
}: SectionHeadingProps) {
  const eyebrowColor = invert ? "text-cyan" : accent === "warm" ? "text-brass-ink" : "text-tech-blue";
  const ruleColor = invert ? "bg-cyan" : accent === "warm" ? "bg-brass" : "bg-tech-blue";

  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className={`h-px w-8 ${ruleColor}`} />
          <p className={`text-sm font-semibold tracking-wide uppercase ${eyebrowColor}`}>{eyebrow}</p>
        </div>
      )}
      <h2
        className={`${eyebrow ? "mt-4" : ""} tracking-tight text-balance ${titleSizeClasses[size]} ${invert ? "text-off-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${invert ? "text-off-white/80" : "text-body"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
