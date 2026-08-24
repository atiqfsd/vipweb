import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

// Slim, deliberately quiet band — a teaser, not a full section — linking
// through to the Careers page rather than duplicating its content here.
export function CareersTeaser() {
  return (
    <div className="bg-surface py-14 sm:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-tech-blue uppercase">Careers</p>
            <p className="mt-2 max-w-xl text-lg leading-7 text-foreground sm:text-xl">
              Interested in working with VIP e-Services in East London?
            </p>
          </div>
          <Button href="/careers" variant="secondary">
            Work with us →
          </Button>
        </div>
      </Container>
    </div>
  );
}
