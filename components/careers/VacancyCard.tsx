import type { Vacancy } from "@/lib/careers";

// Renders a single confirmed vacancy. Not currently used on the live
// Careers page (lib/careers.ts has no entries yet), but ready so real
// roles can be added later without any redesign — see docs/10-careers.md.
export function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  return (
    <div className="border border-line bg-background p-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-subtle">
        <span>{vacancy.location}</span>
        <span aria-hidden="true">·</span>
        <span>{vacancy.employmentType}</span>
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{vacancy.title}</h3>
      <p className="mt-3 text-base leading-7 text-body">{vacancy.summary}</p>

      {vacancy.responsibilities.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Responsibilities</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-body">
            {vacancy.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {vacancy.requirements.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Requirements</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-body">
            {vacancy.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-subtle">{vacancy.howToApply}</p>
    </div>
  );
}
