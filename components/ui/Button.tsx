import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverted" | "warm";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-tech-blue text-white hover:bg-navy",
  secondary: "border border-line text-foreground hover:border-navy-deep hover:bg-surface",
  inverted: "border border-off-white/30 text-off-white hover:bg-off-white/10",
  warm: "bg-brass-ink text-off-white hover:bg-brass-ink/85",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

// Link-styled CTA. A native <button> variant can be added when the
// contact form (Stage 5) needs one.
//
// Internal routes use next/link for client-side navigation. Protocol
// links (mailto:, tel:, wa.me / external http) render as a plain <a> —
// next/link intercepts clicks and can mangle non-navigational hrefs
// such as `mailto:...?subject=...`, stopping the mail app from opening.
const isInternalRoute = (href: string) => href.startsWith("/") || href.startsWith("#");

export function Button({ href, variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (!isInternalRoute(href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
