import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { VacancyCard } from "@/components/careers/VacancyCard";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { vacancies, workAreas } from "@/lib/careers";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Work with VIP e-Services",
  description:
    "Careers at VIP e-Services in East London — across Digital & IT, application assistance, customer service and administration.",
  alternates: { canonical: "/careers" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
]);

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Careers</p>
          </div>
          <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            Work with VIP e-Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            We run two services from one East London office — technology work for businesses, and application
            assistance for local people. Both need people who can explain things clearly and deal with customers
            honestly.
          </p>
        </Container>
      </div>

      {/* Areas of work */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Areas of work" title="Where people work across the business" size="lg" />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {workAreas.map((area, index) => (
              <div key={area.title} className="border-t border-line pt-5">
                <span className="font-mono text-sm text-tech-blue tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="mt-2 text-base leading-7 text-body">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Current vacancies */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Current vacancies" title="Open roles" size="lg" />

          {vacancies.length > 0 ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {vacancies.map((vacancy) => (
                <VacancyCard key={vacancy.title} vacancy={vacancy} />
              ))}
            </div>
          ) : (
            <div className="mt-12 grid gap-10 border border-dashed border-line bg-surface p-10 sm:p-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="max-w-xl text-lg leading-8 text-body">
                  We&apos;re not currently advertising any specific vacancies. When roles open up, they&apos;ll be
                  listed here with full details of the role, location and how to apply.
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-body">
                  We do welcome speculative applications — if you&apos;d like to be considered for future
                  opportunities, send us your CV and a short note about what you&apos;re looking for.
                </p>
                <div className="mt-8">
                  <Button href={`mailto:${siteConfig.email}?subject=Speculative%20application`} variant="secondary">
                    Send a speculative application →
                  </Button>
                </div>
              </div>
              <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-20 w-20 text-muted/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                </svg>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <ContactCTA
        eyebrow="Get in touch"
        title="Questions about working with us?"
        description="Call, WhatsApp, email or visit our East London office."
      />
    </>
  );
}
