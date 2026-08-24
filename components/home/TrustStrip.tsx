import { Container } from "@/components/layout/Container";

const points = [
  {
    title: "Based on Barking Road",
    description: "One East London office — walk in, call or message us.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11.5a7 7 0 1 1 14 0C19 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
  {
    title: "Real people, not a call centre",
    description: "You speak to someone who can actually help.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.5v-1.125a3.375 3.375 0 0 0-3.375-3.375h-3.25A3.375 3.375 0 0 0 5 18.375V19.5m14 0v-1.125a3.375 3.375 0 0 0-2.457-3.246M13.5 6.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Zm5.5 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    ),
  },
  {
    title: "Four languages",
    description: "English, Urdu, Hindi and Punjabi.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9-3 4.03-3 9 1.343 9 3 9ZM3.6 9h16.8M3.6 15h16.8"
      />
    ),
  },
  {
    title: "Clear about the process",
    description: "We explain what we do — we're not a government service.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 2.25 2.25 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
];

// Compact single-strip band of factual, verifiable points — not a
// features grid dressed up with gradients or fake statistics.
export function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <Container>
        <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="flex items-start gap-4 py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 shrink-0 text-tech-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {point.icon}
              </svg>
              <div>
                <p className="text-sm font-semibold text-foreground">{point.title}</p>
                <p className="mt-1 text-sm leading-6 text-body">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
