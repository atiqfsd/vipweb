import { Container } from "@/components/layout/Container";
import { SiteImage } from "@/components/shared/SiteImage";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

// Full editorial homepage hero: large two-line headline, supporting copy
// and two CTAs — one per division, in each division's own colour —
// alongside a layered media composition (tech panel + overlapping visit
// card) rather than a centred text block over an empty hero.
export function Hero() {
  return (
    <div className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-tech-blue" />
              <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">
                VIP e-Services
              </p>
            </div>
            <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance text-foreground">
              Technology for businesses.
              <br />
              Practical help for people.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-body">
              We&apos;re based on Barking Road in East London. One team builds websites, software and digital
              systems for local businesses; another helps individuals complete applications for benefits, housing
              and everyday paperwork.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={siteConfig.phoneHref} size="lg">
                Discuss a project
              </Button>
              <Button href="#application-assistance" variant="warm" size="lg">
                Get application help
              </Button>
            </div>
            <p className="mt-8 text-sm text-subtle">
              {siteConfig.address.line1}, {siteConfig.address.city} {siteConfig.address.postcode} · Support in{" "}
              {siteConfig.languages.join(", ")}
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <SiteImage
              src="/images/hero-barking-road.webp"
              alt="The VIP e-Services shopfront at 134B Barking Road, East London, signed Digital & IT Solutions."
              aspect="aspect-[4/5]"
              priority
              className="border border-line"
            />
            <div className="relative -mt-10 ml-6 max-w-xs border border-line bg-background p-6 shadow-[0_1px_2px_rgba(7,26,43,0.06)] sm:-mt-14 sm:ml-10 sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-subtle uppercase">Visit us</p>
              <p className="mt-3 text-lg font-medium text-foreground">{siteConfig.address.line1}</p>
              <p className="text-body">
                {siteConfig.address.city} {siteConfig.address.postcode}
              </p>
              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-tech-blue hover:text-navy"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
