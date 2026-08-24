// Vacancy data structure for the Careers page (docs/10-careers.md).
// No vacancies are currently confirmed by the owner, so this list stays
// empty — the CareersPage renders a designed empty state instead of
// invented roles. Add real vacancies here as plain objects once
// confirmed; the page and VacancyCard component render them without
// any redesign.
export type Vacancy = {
  title: string;
  location: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  howToApply: string;
};

export const vacancies: Vacancy[] = [];

export const workAreas = [
  {
    title: "Digital & IT",
    description: "Web and software development, digital marketing and cybersecurity work for local businesses.",
  },
  {
    title: "Application assistance",
    description: "Helping customers understand and complete benefits, housing, work and identity applications.",
  },
  {
    title: "Customer service",
    description: "Front-of-office support for people visiting or contacting our Barking Road office.",
  },
  {
    title: "Administration",
    description: "Day-to-day operations that keep both sides of the business running smoothly.",
  },
] as const;
