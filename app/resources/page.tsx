import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { getGuidesByCategory } from "@/lib/resources";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Practical guidance from VIP e-Services on preparing for applications, staying safe online, and small business websites in East London.",
  alternates: { canonical: "/resources" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

function GuideList({ category, tone }: { category: "Application assistance" | "Digital & IT"; tone: "tech" | "warm" }) {
  const items = getGuidesByCategory(category);
  const accent = tone === "tech" ? "border-line" : "border-paper-line";
  const numberColor = tone === "tech" ? "text-tech-blue" : "text-brass-ink";

  return (
    <div className="space-y-14">
      {items.map((guide, index) => (
        <article key={guide.title} className={`border-t pt-8 ${accent}`}>
          <span className={`font-mono text-sm tabular-nums ${numberColor}`}>{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{guide.title}</h3>
          <p className="mt-2 text-base text-subtle">{guide.summary}</p>
          <div className="mt-4 max-w-2xl space-y-4 text-base leading-7 text-body">
            {guide.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Resources</p>
          </div>
          <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            Practical guides, not official advice
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            General guidance to help you prepare — not a substitute for official guidance from the relevant
            government department, council or organisation, which should always be your primary source.
          </p>
        </Container>
      </div>

      <Section background="surface">
        <Container>
          <div id="application-assistance" className="scroll-mt-24">
            <SectionHeading eyebrow="Application assistance" title="Preparing for an application" size="lg" accent="warm" />
            <div className="mt-12">
              <GuideList category="Application assistance" tone="warm" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="digital-it" className="scroll-mt-24">
            <SectionHeading eyebrow="Digital & IT" title="Practical technology guidance" size="lg" />
            <div className="mt-12">
              <GuideList category="Digital & IT" tone="tech" />
            </div>
          </div>

          <p className="mt-16 max-w-xl border-t border-line pt-8 text-sm leading-6 text-subtle">
            We add further guides as they&apos;re written. If there&apos;s something specific you&apos;d find useful, let us
            know when you get in touch.
          </p>
        </Container>
      </Section>

      <ContactCTA
        title="Need help with something specific?"
        description="Call, WhatsApp, email or visit our East London office and we'll talk it through."
      />
    </>
  );
}
