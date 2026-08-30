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
import { workApplicationGroups } from "@/lib/service-groups";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Work & Other Application Assistance in East London",
  description:
    "Help completing job, SIA, TfL private hire, passport, NICOP and e-visa applications in East London. VIP e-Services is not a government service — we help you complete your application.",
  alternates: { canonical: "/services/work-applications" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work & Other Applications", path: "/services/work-applications" },
]);

const steps = [
  { title: "Talk it through", description: "We talk through what you're applying for and how we can help." },
  {
    title: "Understand the requirements",
    description: "We explain what documents and information are usually required.",
  },
  {
    title: "Complete & submit",
    description: "We help you fill in the application correctly and support you through the process.",
  },
];

export default function WorkApplicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <CategoryHero
          division="warm"
          breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Work & Other Applications" }]}
          eyebrow="Consultancy & Application Assistance"
          title="Work & other application assistance"
          description="From job and delivery-platform applications to licences and identity documents, we help people in East London complete these applications correctly and submit them with confidence."
          primaryCta={{ label: "Call us", href: siteConfig.phoneHref }}
          secondaryCta={{ label: "Looking for benefits or housing help?", href: "/services/benefits-housing" }}
          image={{
            src: "/images/application-assistance.webp",
            alt: "An adviser helping someone complete an application on a tablet at a desk in the VIP e-Services office.",
          }}
        />
        <Container>
          <div className="mt-10 max-w-2xl">
            <ApplicationDisclaimer tone="warm" />
          </div>
        </Container>
      </div>

      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="What we help with" title="Work & Other Application services" size="lg" accent="warm" />
          <div className="mt-12">
            <ServiceGroupPanel groups={workApplicationGroups} />
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
              note="We don't make the decision on your application and can't guarantee its outcome — that sits with the relevant employer, platform or issuing authority."
            />
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Related" title="Other ways we can help" />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/services/benefits-housing" className="text-sm font-medium text-brass-ink hover:text-navy">
              Benefits & Housing application assistance →
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
