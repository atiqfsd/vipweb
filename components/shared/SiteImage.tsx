import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect-ratio class controlling the crop frame. */
  aspect?: string;
  className?: string;
  /** Set on the single largest image above the fold (the homepage hero). */
  priority?: boolean;
  sizes?: string;
};

// Real photography frame. Sizes the crop with an aspect box and lets
// next/image cover it, so the surrounding editorial layout stays fixed
// regardless of the source photo's dimensions. Static export runs with
// images.unoptimized, so this emits a plain <img> — the wrapper is what
// keeps every placement consistent. Replaces MediaPanel wherever a real
// photo now exists in /public/images.
export function SiteImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: SiteImageProps) {
  return (
    <div className={`relative overflow-hidden bg-navy-deep ${aspect} ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
