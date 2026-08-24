type MediaPanelDivision = "tech" | "warm";

type MediaPanelProps = {
  aspect?: string;
  division?: MediaPanelDivision;
  label?: string;
  className?: string;
};

// Deliberate "real photography goes here" treatment. No stock photography
// exists yet, so each division gets its own honest, clearly-illustrative
// pattern rather than a generic grey placeholder or a fake AI photo:
// tech = navy + dot grid, warm = paper + brass grain. Swap the contents
// for a next/image once real photography is supplied — the surrounding
// layout is already sized around it.
export function MediaPanel({ aspect = "aspect-[4/3]", division = "tech", label, className = "" }: MediaPanelProps) {
  const isTech = division === "tech";

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${isTech ? "bg-navy-deep" : "bg-paper"} ${aspect} ${className}`}
    >
      <div className={`absolute inset-0 ${isTech ? "bg-dot-grid opacity-40" : "bg-paper-grain opacity-70"}`} />
      <span
        className={`absolute inset-0 flex items-center justify-center text-[clamp(3rem,12vw,8rem)] leading-none font-semibold tracking-tight select-none ${
          isTech ? "text-off-white/[0.06]" : "text-brass-ink/[0.08]"
        }`}
      >
        VIP
      </span>
      <span
        className={`absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 ${isTech ? "border-cyan/60" : "border-brass/70"}`}
      />
      <span
        className={`absolute right-4 bottom-4 h-6 w-6 border-r-2 border-b-2 ${isTech ? "border-cyan/60" : "border-brass/70"}`}
      />
      {label && (
        <span
          className={`absolute bottom-4 left-4 text-xs font-medium tracking-wide uppercase ${
            isTech ? "text-off-white/50" : "text-brass-ink/60"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
