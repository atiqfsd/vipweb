export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

// Native <details>/<summary> accordion — fully keyboard- and
// screen-reader-accessible with zero client JavaScript, per
// docs/13-performance.md ("minimise JavaScript") and
// docs/12-accessibility.md.
export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  return (
    <div className={`divide-y divide-line border-t border-b border-line ${className}`}>
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <span className="text-base font-medium text-foreground sm:text-lg">{item.question}</span>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-xl leading-none text-tech-blue transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-base leading-7 text-body">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
