import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { MediaPanel } from "@/components/services/MediaPanel";
import { SiteImage } from "@/components/shared/SiteImage";
import { Button } from "@/components/ui/Button";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CategoryHeroProps = {
  breadcrumbItems: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  division?: "tech" | "warm";
  image?: { src: string; alt: string };
};

// Shared hero for the services category pages: breadcrumb, large
// editorial heading, two CTAs and a media panel. `division` switches the
// accent colour and CTA styling so Digital & IT and Application
// Assistance pages never look interchangeable.
export function CategoryHero({
  breadcrumbItems,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  division = "tech",
  image,
}: CategoryHeroProps) {
  const isTech = division === "tech";
  const accent = isTech ? "bg-tech-blue" : "bg-brass";
  const accentText = isTech ? "text-tech-blue" : "text-brass-ink";

  return (
    <Container>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className={`h-px w-8 ${accent}`} />
            <p className={`text-sm font-semibold tracking-wide uppercase ${accentText}`}>{eyebrow}</p>
          </div>
          <h1 className="mt-4 text-4xl tracking-tight text-balance sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-body">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant={isTech ? "primary" : "warm"} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          {image ? (
            <SiteImage
              src={image.src}
              alt={image.alt}
              aspect="aspect-[4/3]"
              priority
              className="border border-line"
            />
          ) : (
            <MediaPanel aspect="aspect-[4/3]" division={division} label={eyebrow} />
          )}
        </div>
      </div>
    </Container>
  );
}
