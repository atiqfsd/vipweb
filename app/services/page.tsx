import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ApplicationDisclaimer } from "@/components/services/ApplicationDisclaimer";
import { ServiceGroupPanel } from "@/components/services/ServiceGroupPanel";
import { ServiceRowList } from "@/components/services/ServiceRowList";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { benefitsHousingGroups, workApplicationGroups } from "@/lib/service-groups";
import { digitalServices } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital & IT and Application Assistance Services in East London",
  description:
    "VIP e-Services offers two things: Digital & IT Solutions we build and deliver ourselves, and Consultancy & Application Assistance to help you complete benefits, housing and work applications.",
  alternates: { canonical: "/services" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-12 pb-16 sm:pt-16 sm:pb-20">
        <Container>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Services</p>
          </div>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            Two sides to VIP e-Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            We run two distinct services from our East London office. Digital &amp; IT Solutions is technology
            work we build and deliver ourselves. Consultancy &amp; Application Assistance is practical help
            completing applications and paperwork — VIP e-Services is not a government service, and we help you
            complete your application rather than deciding its outcome.
          </p>
        </Container>
      </div>

      {/* Digital & IT Solutions */}
      <Section background="surface">
        <Container>
          <div id="digital-it" className="scroll-mt-24">
            <SectionHeading
              eyebrow="Genuine technology services"
              title="Digital & IT Solutions"
              description="Real technology work delivered directly by VIP e-Services for East London businesses — from websites and software to cybersecurity and on-site IT support."
              size="lg"
            />

            <div className="mt-12 max-w-3xl">
              <ServiceRowList services={digitalServices} />
            </div>

            <Link
              href="/services/digital-it"
              className="mt-6 inline-block text-sm font-medium text-tech-blue hover:text-navy"
            >
              More about Digital &amp; IT Solutions →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Consultancy & Application Assistance */}
      <Section>
        <Container>
          <div id="application-assistance" className="scroll-mt-24">
            <SectionHeading
              eyebrow="Practical help with paperwork"
              title="Consultancy & Application Assistance"
              description="We help people in East London complete applications for benefits, housing, work and identity documents. This is application assistance, not an official government service."
              size="lg"
              accent="warm"
            />

            <div className="mt-14 space-y-14 border-t border-paper-line pt-14">
              <ServiceGroupPanel title="Benefits & Housing" groups={benefitsHousingGroups} />
              <ServiceGroupPanel title="Work & Other Applications" groups={workApplicationGroups} />
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/services/benefits-housing" className="text-sm font-medium text-brass-ink hover:text-navy">
                More about Benefits &amp; Housing →
              </Link>
              <Link
                href="/services/work-applications"
                className="text-sm font-medium text-brass-ink hover:text-navy"
              >
                More about Work &amp; Other Applications →
              </Link>
            </div>

            <div className="mt-8 max-w-2xl">
              <ApplicationDisclaimer />
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA
        title="Not sure which service you need?"
        description="Call, WhatsApp or visit our East London office and we'll point you in the right direction."
      />
    </>
  );
}
