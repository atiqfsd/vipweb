import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ShopfrontIllustration } from "@/components/shared/ShopfrontIllustration";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact VIP e-Services",
  description:
    "Call, WhatsApp, email or visit VIP e-Services at 134B Barking Road, London E6 3BD — for Digital & IT Solutions or application assistance.",
  alternates: { canonical: "/contact" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const actions = [
  {
    label: "Call",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    description: "Speak to someone directly during office hours.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25c0 8.284 6.716 15 15 15h.75a1.5 1.5 0 0 0 1.5-1.5v-2.148a1.5 1.5 0 0 0-1.2-1.47l-3.22-.644a1.5 1.5 0 0 0-1.5.554l-.7.933a11.26 11.26 0 0 1-5.855-5.855l.933-.7a1.5 1.5 0 0 0 .554-1.5l-.644-3.22a1.5 1.5 0 0 0-1.47-1.2H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
      />
    ),
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message us",
    href: siteConfig.whatsappHref,
    description: "Quick questions or sending documents on the go.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 10.5c0 3.728 3.022 6.75 6.75 6.75.966 0 1.883-.203 2.712-.568l2.538.848-.848-2.538A6.72 6.72 0 0 0 21 10.5C21 6.772 17.978 3.75 14.25 3.75S7.5 6.772 7.5 10.5Zm-3.75 9L6 15.75A8.966 8.966 0 0 1 4.5 10.5C4.5 5.253 8.753 1 14.25 1"
      />
    ),
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Send details of your enquiry and we'll reply.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75ZM3 7l9 6 9-6" />
    ),
    external: false,
  },
  {
    label: "Visit",
    value: "Get directions",
    href: siteConfig.mapsHref,
    description: `${siteConfig.address.line1}, ${siteConfig.address.city} ${siteConfig.address.postcode}`,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11.5a7 7 0 1 1 14 0C19 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Contact</p>
          </div>
          <h1 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            Get in touch
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            There&apos;s no online booking system — call, WhatsApp, email or walk in to our Barking Road office,
            whichever suits you best.
          </p>
        </Container>
      </div>

      {/* Contact actions */}
      <Section background="surface">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-navy-deep"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-tech-blue transition-colors group-hover:text-cyan"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {action.icon}
                </svg>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-subtle uppercase transition-colors group-hover:text-off-white/60">
                    {action.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-off-white">
                    {action.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-body transition-colors group-hover:text-off-white/70">
                    {action.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Send a message */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Or write to us" title="Send a message" size="lg" />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-line pt-6">
                <p className="text-sm font-semibold tracking-wide text-subtle uppercase">Prefer to talk?</p>
                <div className="mt-4 space-y-3 text-base">
                  <a href={siteConfig.phoneHref} className="block font-medium text-tech-blue hover:text-navy">
                    Call {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-medium text-tech-blue hover:text-navy"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
              <p className="mt-8 max-w-xs text-sm leading-6 text-subtle">
                We only use the details you send to reply to your enquiry. If your message concerns application
                assistance, please don&apos;t include sensitive documents by email — bring them when you visit or
                mention them and we&apos;ll advise the safest way to share them.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Office */}
      <div className="bg-navy-deep">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our office"
              title={`${siteConfig.address.line1}, ${siteConfig.address.city} ${siteConfig.address.postcode}`}
              description="Walk-ins are welcome. If you&apos;re coming in for application assistance, bring any paperwork or letters relevant to what you need help with."
              size="lg"
              invert
            />
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold tracking-wide text-off-white/50 uppercase">Languages</dt>
                <dd className="mt-2 text-off-white/80">{siteConfig.languages.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold tracking-wide text-off-white/50 uppercase">Appointments</dt>
                <dd className="mt-2 text-off-white/80">
                  No booking system — call ahead or walk in during office hours.
                </dd>
              </div>
            </dl>
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
    </>
  );
}
