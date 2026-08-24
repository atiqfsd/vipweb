type ShopfrontIllustrationProps = {
  className?: string;
};

// A restrained, blueprint-style line drawing of a small parade of East
// London shopfronts — used in place of a photograph we don't have.
// Deliberately schematic rather than illustrative/cartoonish, so it
// reads as considered graphic design rather than a stock clip-art scene,
// and never risks being mistaken for a photo of the real premises.
export function ShopfrontIllustration({ className = "" }: ShopfrontIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 480 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ground line */}
      <path d="M0 208h480" strokeOpacity={0.5} />

      {/* left unit */}
      <path d="M16 208V96h108v112" />
      <path d="M16 96h108" />
      <path d="M16 76l54-20 54 20" strokeOpacity={0.7} />
      <path d="M34 208v-64h30v64M96 208v-64h30v64" />
      <path d="M40 118h20v40H40zM90 118h20v40H90z" strokeOpacity={0.6} />

      {/* centre unit (VIP e-Services) */}
      <path d="M144 208V64h192v144" />
      <path d="M144 64h192" strokeWidth={1.75} />
      <path d="M144 84h192" strokeOpacity={0.5} />
      <path d="M164 84v104M180 84v104M216 84v104M252 84v104M288 84v104M304 84v104" strokeOpacity={0.35} />
      <path d="M216 208v-52h48v52" />
      <text
        x="240"
        y="76"
        textAnchor="middle"
        stroke="none"
        fill="currentColor"
        fontSize="11"
        fontFamily="var(--font-sans)"
        letterSpacing="1.5"
      >
        VIP e-SERVICES
      </text>

      {/* right unit */}
      <path d="M356 208V100h108v108" />
      <path d="M356 100h108" />
      <path d="M356 82l54-18 54 18" strokeOpacity={0.7} />
      <path d="M374 208v-60h34v60M418 208v-60h34v60" strokeOpacity={0.6} />

      {/* lamp post */}
      <path d="M6 208V150M6 150c0-8 6-12 12-12s12 4 12 12" strokeOpacity={0.5} />
    </svg>
  );
}
