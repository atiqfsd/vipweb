import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/home/SectionHeading";
import { digitalServices, benefitsHousingServices, workApplicationServices } from "@/lib/services";

const applicationCount = benefitsHousingServices.length + workApplicationServices.length;

// The most consequential section on the site: two visually distinct
// panels rather than matching cards, because these genuinely are two
// different kinds of business under one roof. Deliberately asymmetric
// (7/5 split, offset padding) so it doesn't read as a generic SaaS
// "features" grid, and each side carries its own texture (line-grid on
// navy for tech, grain on paper for the human/consultancy side).
export function Divisions() {
  return (
    <div className="bg-background py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Two sides of VIP e-Services"
          description="We design and build digital tools for East London businesses, and separately we help local people complete applications and paperwork — from benefits and housing to licences and identity documents. Both run from the same office on Barking Road."
          size="lg"
        />
      </Container>

      <div className="mt-14 grid lg:grid-cols-12">
        <Link
          href="/services/digital-it"
          className="group relative flex flex-col justify-between overflow-hidden bg-navy-deep px-6 py-14 text-off-white sm:px-10 lg:col-span-7 lg:px-14 lg:py-20"
        >
          <div className="bg-line-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative">
            <span className="font-mono text-sm text-cyan">01 — {digitalServices.length} services</span>
            <h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Digital &amp; IT Solutions
            </h3>
            <p className="mt-4 max-w-sm text-base leading-7 text-off-white/80">
              Websites, applications, custom software, digital marketing and cybersecurity — technology we design
              and build ourselves for East London businesses.
            </p>
          </div>
          <span className="relative mt-16 inline-flex items-center gap-2 text-sm font-medium text-cyan transition-transform group-hover:translate-x-1">
            Explore Digital &amp; IT →
          </span>
        </Link>

        <Link
          href="/services/benefits-housing"
          className="group relative flex flex-col justify-between overflow-hidden bg-paper px-6 py-14 text-foreground sm:px-10 lg:col-span-5 lg:px-14 lg:py-20"
        >
          <div className="bg-paper-grain pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <span className="font-mono text-sm text-brass-ink">02 — {applicationCount} application types</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Application Assistance</h3>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate">
              Practical help completing applications for benefits, housing, work and identity documents. Not an
              official government service — we help you complete the process.
            </p>
          </div>
          <span className="relative mt-16 inline-flex items-center gap-2 text-sm font-medium text-brass-ink transition-transform group-hover:translate-x-1">
            Explore application assistance →
          </span>
        </Link>
      </div>
    </div>
  );
}
