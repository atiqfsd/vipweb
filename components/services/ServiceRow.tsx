type ServiceRowProps = {
  index: number;
  name: string;
  description: string;
};

// Large editorial row for the Digital & IT catalogue — a deliberate
// alternative to a grid of small cards. Number + name are set large so
// the list scans quickly even with ten entries; the rule only draws in
// on hover so the row itself stays quiet until it's the focus.
export function ServiceRow({ index, name, description }: ServiceRowProps) {
  return (
    <div className="group relative grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-t border-line py-6 transition-colors first:border-t-0 sm:grid-cols-[4rem_1fr] sm:gap-x-8 sm:py-8">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-0 bg-tech-blue transition-[width] duration-300 group-hover:w-full"
      />
      <span className="font-mono text-lg text-muted tabular-nums sm:text-xl">{String(index).padStart(2, "0")}</span>
      <div>
        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-tech-blue sm:text-2xl">
          {name}
        </h3>
        <p className="mt-2 max-w-2xl text-base leading-7 text-body">{description}</p>
      </div>
    </div>
  );
}
