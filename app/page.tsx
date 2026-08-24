import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/home/SectionHeading";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Divisions } from "@/components/home/Divisions";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { ApplicationDisclaimer } from "@/components/services/ApplicationDisclaimer";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServiceGroupPanel } from "@/components/services/ServiceGroupPanel";
import { ServiceRowList } from "@/components/services/ServiceRowList";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FAQAccordion, type FAQItem } from "@/components/shared/FAQAccordion";
import { ShopfrontIllustration } from "@/components/shared/ShopfrontIllustration";
import { digitalServices } from "@/lib/services";
import { benefitsHousingGroups, workApplicationGroups } from "@/lib/service-groups";
import { siteConfig } from "@/lib/site-config";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital & IT Solutions and Application Assistance in East London",
  description:
    "VIP e-Services is based on Barking Road, East London. We build websites and software for local businesses, and help people complete benefits, housing and other applications.",
  alternates: { canonical: "/" },
};

const featuredDigitalSlugs = [
  "web-development",
  "web-applications",
  "custom-software",
  "digital-marketing",
  "cybersecurity",
  "on-site-it-consultancy",
];
const featuredDigitalServices = featuredDigitalSlugs
  .map((slug) => digitalServices.find((service) => service.slug === slug))
  .filter((service) => service !== undefined);

const reasons = [
  {
    title: "One local office, two services",
    description:
      "Digital and IT work and application assistance both run from the same East London office, so you're dealing with one local business you can visit.",
  },
  {
    title: "Speak to a real person",
    description: "Contact us directly by phone, WhatsApp, email or in person — whichever suits you best.",
  },
  {
    title: "Support in your language",
    description: "Our team can help in English, Urdu, Hindi and Punjabi.",
  },
  {
    title: "Practical help, honestly explained",
    description:
      "We're upfront that application assistance is not an official government service. We help you understand and complete the process — we don't decide the outcome.",
  },
] as const;

const faqItems: FAQItem[] = [
  {
    question: "Is application assistance an official government service?",
    answer:
      "No. VIP e-Services is not a government department and is not officially affiliated with any government service. We help you understand and complete your application — the decision always sits with the relevant department, council or organisation.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "We don't run an online booking system. Call, WhatsApp or walk in to our Barking Road office and we'll help where we can.",
  },
  {
    question: "What languages do you support?",
    answer: "Our team can help in English, Urdu, Hindi and Punjabi.",
  },
  {
    question: "Can I contact you by WhatsApp?",
    answer: "Yes — WhatsApp is one of the quickest ways to reach us, alongside calling or visiting the office.",
  },
  {
    question: "Do you only work with businesses, or individuals too?",
    answer:
      "Digital & IT work is for businesses and organisations. Application assistance is for individuals. Get in touch and we'll point you to the right team.",
  },
  {
    question: "Where are you located?",
    answer: `${siteConfig.address.line1}, ${siteConfig.address.city} ${siteConfig.address.postcode} — in East London. Walk-ins are welcome.`,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Hero />
      <TrustStrip />
      <Divisions />

      {/* Digital & IT catalogue — curated preview, full list lives on the category page */}
      <Section background="surface">
        <Container>
          <div id="digital-it" className="scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Digital & IT Solutions"
                title="Technology built around your business."
                description="We build and support technology for East London businesses — from a first website through to custom software and security work."
                size="lg"
              />
            </div>

            <div className="mt-12 max-w-3xl">
              <ServiceRowList services={featuredDigitalServices} />
            </div>

            <Link href="/services/digital-it" className="mt-8 inline-block text-sm font-medium text-tech-blue hover:text-navy">
              View all {digitalServices.length} Digital & IT services →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Application assistance */}
      <Section>
        <Container>
          <div id="application-assistance" className="scroll-mt-24">
            <SectionHeading
              eyebrow="Consultancy & Application Assistance"
              title="Help with the paperwork that matters."
              description="VIP e-Services helps people understand and complete applications. We do not make decisions on applications and are not a government department."
              size="lg"
              accent="warm"
            />

            <div className="mt-14 space-y-14 border-t border-paper-line pt-14">
              <ServiceGroupPanel title="Benefits & Housing" groups={benefitsHousingGroups} />
              <ServiceGroupPanel title="Work & Other Applications" groups={workApplicationGroups} />
            </div>

            <div className="mt-10 max-w-2xl">
              <ApplicationDisclaimer />
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works — shared process, one track per division */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="How it works" title="What happens when you get in touch" size="lg" />
          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Digital & IT</p>
              <div className="mt-6">
                <HowItWorks
                  tone="tech"
                  steps={[
                    { title: "Understand", description: "We talk through what your business needs." },
                    { title: "Plan", description: "We agree scope and approach before any build starts." },
                    { title: "Build & support", description: "We design, build, test and stay on hand afterwards." },
                  ]}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-brass-ink uppercase">Application assistance</p>
              <div className="mt-6">
                <HowItWorks
                  tone="warm"
                  steps={[
                    { title: "Talk it through", description: "We discuss what you're applying for." },
                    { title: "Gather documents", description: "We explain what's usually needed." },
                    { title: "Complete it together", description: "We help you fill in the application correctly." },
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Local / East London */}
      <div className="bg-navy-deep">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="East London"
              title="Based on Barking Road, East London"
              description="Our office is at 134B Barking Road, London E6 3BD, in the heart of East London. If you'd rather talk in person, you're welcome to visit — walk-ins are welcome at our office."
              size="lg"
              invert
            />
            <a
              href={siteConfig.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-off-white/30 px-5 py-2.5 text-sm font-medium text-off-white transition-colors hover:bg-off-white/10"
            >
              Get directions →
            </a>
          </div>
          <div className="lg:col-span-5">
            <ShopfrontIllustration className="h-auto w-full text-cyan/70" />
          </div>
        </Container>
      </div>

      {/* Why choose */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="Why choose us" title="Why work with VIP e-Services" size="lg" />

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="border-t border-line pt-5">
                <span className="font-mono text-sm text-tech-blue tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-base leading-7 text-body">{reason.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CareersTeaser />

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title="Common questions" />
            </div>
            <div className="lg:col-span-8">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA
        title="Ready to talk to us?"
        description="Call, WhatsApp, email or visit our East London office — whichever is easiest for you."
      />
    </>
  );
}
