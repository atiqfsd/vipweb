import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { primaryNavLinks, siteConfig } from "@/lib/site-config";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import logo from "@/public/logo.jpg";

// Real logo, as supplied by the owner — docs/01-brand.md: "Use the
// existing logo where available. Do not redraw the logo."
function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Image src={logo} alt="" priority className="h-10 w-auto sm:h-12" />
      <span className="hidden text-lg font-semibold tracking-tight text-foreground sm:block">
        VIP e-Services
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-sm">
      <Container className="flex h-[4.25rem] items-center justify-between sm:h-[5rem]">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.name} — home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-body transition-colors hover:text-tech-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-tech-blue"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25c0 8.284 6.716 15 15 15h.75a1.5 1.5 0 0 0 1.5-1.5v-2.148a1.5 1.5 0 0 0-1.2-1.47l-3.22-.644a1.5 1.5 0 0 0-1.5.554l-.7.933a11.26 11.26 0 0 1-5.855-5.855l.933-.7a1.5 1.5 0 0 0 .554-1.5l-.644-3.22a1.5 1.5 0 0 0-1.47-1.2H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
              />
            </svg>
            {siteConfig.phone}
          </a>
          <Button href="/contact">Contact us</Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
