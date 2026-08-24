import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <p className="font-mono text-sm text-tech-blue">404</p>
        <h1 className="mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-body">
          The page you&apos;re looking for may have moved. Try the homepage, or get in touch directly and we&apos;ll
          point you in the right direction.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/" size="lg">
            Back to homepage
          </Button>
          <Button href={siteConfig.phoneHref} variant="secondary" size="lg">
            Call us
          </Button>
        </div>
      </Container>
    </div>
  );
}
