import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ApplicationDisclaimer } from "@/components/services/ApplicationDisclaimer";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { SiteImage } from "@/components/shared/SiteImage";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About VIP e-Services",
  description:
    "VIP e-Services runs two services from one East London office: Digital & IT Solutions for businesses, and Consultancy & Application Assistance for local people.",
  alternates: { canonical: "/about" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const principles = [
  {
    title: "One office, two services",
    description:
      "Digital & IT work and application assistance are run as two distinct services from the same Barking Road office, rather than being blurred into one generic offering.",
  },
  {
    title: "We say what we actually do",
    description:
      "We don't use vague marketing language. If we build it ourselves, we say so. If we're helping you complete someone else's process, we say that too.",
  },
  {
    title: "Honest about application assistance",
    description:
      "We are not a government department, and we don't decide the outcome of any application. We help you understand the process and complete it correctly.",
  },
  {
    title: "Local by design",
    description:
      "We work from one East London office. You can call, message or walk in — you're not routed through a national call centre.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">About</p>
          </div>
          <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            A local business doing two different jobs well.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            VIP e-Services works from a single office at {siteConfig.address.line1}, {siteConfig.address.city}{" "}
            {siteConfig.address.postcode}. From there, we run a technology business that builds and supports
            digital systems for East London companies, and a separate service that helps individuals complete
            applications for benefits, housing, work and identity documents.
          </p>
        </Container>
      </div>

      {/* What we do */}
      <Section background="surface">
        <Container>
          <SectionHeading eyebrow="What we do" title="Two services, kept separate on purpose" size="lg" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="border border-line bg-background p-8">
              <p className="font-mono text-sm text-tech-blue">01</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Digital & IT Solutions</h3>
              <p className="mt-3 text-base leading-7 text-body">
                Genuine technology work we design, build and support ourselves — websites, applications, custom
                software, digital marketing and cybersecurity for local businesses.
              </p>
              <Link href="/services/digital-it" className="mt-4 inline-block text-sm font-medium text-tech-blue hover:text-navy">
                Explore Digital & IT →
              </Link>
            </div>
            <div className="border border-paper-line bg-paper p-8">
              <p className="font-mono text-sm text-brass-ink">02</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Consultancy & Application Assistance
              </h3>
              <p className="mt-3 text-base leading-7 text-slate">
                Practical, plain-English help completing benefits, housing, work and identity applications. We
                help you complete the paperwork — we don&apos;t make the decision on it.
              </p>
              <Link href="/services/benefits-housing" className="mt-4 inline-block text-sm font-medium text-brass-ink hover:text-navy">
                Explore application assistance →
              </Link>
            </div>
          </div>
          <div className="mt-8 max-w-2xl">
            <ApplicationDisclaimer />
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section>
        <Container>
          <SectionHeading eyebrow="How we work" title="What you can expect from us" size="lg" />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle.title} className="border-t border-line pt-5">
                <span className="font-mono text-sm text-tech-blue tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-base leading-7 text-body">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local presence */}
      <div className="bg-navy-deep">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Where to find us"
              title="134B Barking Road, East London"
              description="Our office is open to walk-ins. If you'd rather speak to someone first, call or WhatsApp us and we'll let you know the best way to help."
              size="lg"
              invert
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-off-white/30 px-5 py-2.5 text-sm font-medium text-off-white transition-colors hover:bg-off-white/10"
              >
                Get directions →
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 bg-cyan px-5 py-2.5 text-sm font-medium text-navy-deep transition-colors hover:bg-off-white"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SiteImage
              src="/images/about.webp"
              alt="The VIP e-Services shopfront at 134B Barking Road, East London, signed Digital & IT Solutions."
              aspect="aspect-[4/3]"
              className="border border-off-white/15"
            />
          </div>
        </Container>
      </div>

      {/* Languages */}
      <Section background="surface">
        <Container>
          <SectionHeading
            eyebrow="Languages"
            title="Support in your language"
            description="Our team can help you in:"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.languages.map((language) => (
              <li key={language} className="border-t-2 border-tech-blue pt-4 text-lg font-medium text-foreground">
                {language}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactCTA
        title="Want to know more?"
        description="Call, WhatsApp, email or visit our East London office — we're happy to explain how either service works."
      />
    </>
  );
}
