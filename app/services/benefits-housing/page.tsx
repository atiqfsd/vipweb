import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ApplicationDisclaimer } from "@/components/services/ApplicationDisclaimer";
import { CategoryHero } from "@/components/services/CategoryHero";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServiceGroupPanel } from "@/components/services/ServiceGroupPanel";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { benefitsHousingGroups } from "@/lib/service-groups";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Benefits & Housing Application Assistance in East London",
  description:
    "Practical help completing Universal Credit, PIP, housing and other benefits applications in East London. VIP e-Services is not a government service — we help you complete your application.",
  alternates: { canonical: "/services/benefits-housing" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Benefits & Housing", path: "/services/benefits-housing" },
]);

const steps = [
  { title: "Talk it through", description: "We talk through what you're applying for and how we can help." },
  {
    title: "Gather the right documents",
    description: "We explain what information and documents are usually needed.",
  },
  { title: "Complete the application", description: "We help you complete the forms accurately." },
];

export default function BenefitsHousingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <CategoryHero
          division="warm"
          breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Benefits & Housing" }]}
          eyebrow="Consultancy & Application Assistance"
          title="Help with benefits and housing applications"
          description="Benefits, housing and pension forms can be long and confusing. We help people in East London understand what's being asked, gather the right documents, and complete these applications correctly."
          primaryCta={{ label: "Call us", href: siteConfig.phoneHref }}
          secondaryCta={{ label: "Looking for work or ID applications?", href: "/services/work-applications" }}
        />
        <Container>
          <div className="mt-10 max-w-2xl">
            <ApplicationDisclaimer tone="warm" />
          </div>
        </Container>
      </div>

      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="What we help with" title="Benefits & Housing services" size="lg" accent="warm" />
          <div className="mt-12">
            <ServiceGroupPanel groups={benefitsHousingGroups} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="How it works" title="How VIP e-Services helps" size="lg" accent="warm" />
          <div className="mt-12">
            <HowItWorks
              tone="warm"
              steps={steps}
              note="We don't make the decision on your application and can't guarantee its outcome — that sits with the relevant government department or council."
            />
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Related" title="Other ways we can help" />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/services/work-applications" className="text-sm font-medium text-brass-ink hover:text-navy">
              Work & Other Applications assistance →
            </Link>
            <Link href="/services/digital-it" className="text-sm font-medium text-tech-blue hover:text-navy">
              Digital & IT Solutions →
            </Link>
            <Link href="/services" className="text-sm font-medium text-tech-blue hover:text-navy">
              All services →
            </Link>
          </div>
        </Container>
      </Section>

      <ContactCTA
        title="Ready to get help with your application?"
        description="Call, WhatsApp, email or visit our East London office — bring whatever paperwork you already have."
      />
    </>
  );
}
