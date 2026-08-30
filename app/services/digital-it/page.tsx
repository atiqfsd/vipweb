import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { CategoryHero } from "@/components/services/CategoryHero";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServiceRowList } from "@/components/services/ServiceRowList";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { SiteImage } from "@/components/shared/SiteImage";
import { siteConfig } from "@/lib/site-config";
import { digitalServices } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital & IT Solutions in East London",
  description:
    "Websites, web and mobile applications, custom software, digital marketing and cybersecurity — technology services delivered directly by VIP e-Services in East London.",
  alternates: { canonical: "/services/digital-it" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Digital & IT Solutions", path: "/services/digital-it" },
]);

const steps = [
  { title: "Understand", description: "We talk through what your business needs and how it currently works." },
  { title: "Plan", description: "We agree the right approach and scope before any build work starts." },
  { title: "Build", description: "We design, build and test the website, application or system." },
  { title: "Support", description: "We remain on hand for updates, fixes and ongoing support." },
];

export default function DigitalItPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <CategoryHero
          division="tech"
          breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Digital & IT Solutions" }]}
          eyebrow="Digital & IT Solutions"
          title="Technology services for East London businesses"
          description="This side of VIP e-Services is genuine technology work — we design, build and support it ourselves. If your business needs a website, an application, custom software or better cybersecurity, this is the team for it."
          primaryCta={{ label: "Call to discuss your project", href: siteConfig.phoneHref }}
          secondaryCta={{ label: "Looking for application help instead?", href: "/services/benefits-housing" }}
          image={{
            src: "/images/digital-it.webp",
            alt: "Two colleagues reviewing website work on a laptop at a desk in the VIP e-Services office.",
          }}
        />
      </div>

      <Section background="surface">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Our Digital & IT services"
            description="We do not invent packages or fixed pricing here — get in touch to discuss what your business actually needs."
            size="lg"
          />
          <div className="mt-12 max-w-3xl">
            <ServiceRowList services={digitalServices} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <SiteImage
              src="/images/web-development.webp"
              alt="A developer working on a website layout on a laptop, with wireframe sketches and a phone alongside."
              aspect="aspect-[4/3]"
              className="border border-line"
              sizes="(min-width: 640px) 45vw, 100vw"
            />
            <SiteImage
              src="/images/cybersecurity.webp"
              alt="Someone working through a printed security checklist against a laptop at a tidy desk."
              aspect="aspect-[4/3]"
              className="border border-line"
              sizes="(min-width: 640px) 45vw, 100vw"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="How it works" title="How VIP e-Services helps" size="lg" />
          <div className="mt-12">
            <HowItWorks steps={steps} tone="tech" />
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
            <Link href="/services/work-applications" className="text-sm font-medium text-brass-ink hover:text-navy">
              Work & Other Applications assistance →
            </Link>
            <Link href="/services" className="text-sm font-medium text-tech-blue hover:text-navy">
              All services →
            </Link>
          </div>
        </Container>
      </Section>

      <ContactCTA
        title="Ready to talk about your project?"
        description="Call, WhatsApp, email or visit our East London office — whichever is easiest for you."
      />
    </>
  );
}
