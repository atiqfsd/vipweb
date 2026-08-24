import type { ReactNode } from "react";

type SectionBackground = "default" | "surface" | "inverted";

type SectionProps = {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background",
  surface: "bg-surface",
  inverted: "bg-navy-deep text-off-white",
};

// Vertical rhythm primitive for page sections. "inverted" gives the
// occasional full-width dark band called for in docs/08-design-system.md.
export function Section({ children, background = "default", className = "" }: SectionProps) {
  return <section className={`py-16 sm:py-20 ${backgroundClasses[background]} ${className}`}>{children}</section>;
}
