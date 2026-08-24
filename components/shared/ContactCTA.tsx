import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type ContactCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

// Self-contained closing contact band — full-bleed dark navy so the last
// thing on every page is a strong visual break, not another white section.
export function ContactCTA({ eyebrow = "Get in touch", title, description }: ContactCTAProps) {
  return (
    <section className="bg-navy-deep py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} size="lg" invert />
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={siteConfig.phoneHref} size="lg">
            Call us
          </Button>
          <Button href={siteConfig.whatsappHref} variant="inverted" size="lg" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </Button>
          <Button href={`mailto:${siteConfig.email}`} variant="inverted" size="lg">
            Email us
          </Button>
          <Button href="/contact" variant="inverted" size="lg">
            Contact page
          </Button>
        </div>
      </Container>
    </section>
  );
}
