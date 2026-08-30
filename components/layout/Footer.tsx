import Image from "next/image";
import Link from "next/link";
import { primaryNavLinks, siteConfig } from "@/lib/site-config";
import { Container } from "./Container";
import logo from "@/public/logo.jpg";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-deep text-off-white">
      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            {/* The supplied logo is a solid green square with a white mark,
                so it reads fine straight on the navy footer — no card. */}
            <Image src={logo} alt="" className="h-12 w-auto shrink-0" />
            <div>
              <p className="text-2xl leading-none font-semibold tracking-tight">
                VIP <span className="font-normal text-cyan">e-Services</span>
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-base leading-7 text-off-white/70">
            Digital &amp; IT solutions for local businesses, and application assistance for local people — run from
            one office on Barking Road. Application assistance is not an official government service.
          </p>

          <address className="mt-8 space-y-3 text-sm not-italic text-off-white/80">
            <a href={siteConfig.mapsHref} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-cyan">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-11.5a7 7 0 1 1 14 0C19 14.5 12 21 12 21Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city} {siteConfig.address.postcode}
              </span>
            </a>
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-cyan">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25c0 8.284 6.716 15 15 15h.75a1.5 1.5 0 0 0 1.5-1.5v-2.148a1.5 1.5 0 0 0-1.2-1.47l-3.22-.644a1.5 1.5 0 0 0-1.5.554l-.7.933a11.26 11.26 0 0 1-5.855-5.855l.933-.7a1.5 1.5 0 0 0 .554-1.5l-.644-3.22a1.5 1.5 0 0 0-1.47-1.2H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                />
              </svg>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-cyan">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
              </svg>
              {siteConfig.email}
            </a>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:col-span-3 lg:col-start-7">
          <div>
            <p className="text-sm font-semibold tracking-wide text-off-white/50 uppercase">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-off-white/80 hover:text-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-off-white/50 uppercase">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services/digital-it" className="text-off-white/80 hover:text-cyan">
                  Digital &amp; IT
                </Link>
              </li>
              <li>
                <Link href="/services/benefits-housing" className="text-off-white/80 hover:text-cyan">
                  Benefits &amp; Housing
                </Link>
              </li>
              <li>
                <Link href="/services/work-applications" className="text-off-white/80 hover:text-cyan">
                  Work &amp; Applications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold tracking-wide text-off-white/50 uppercase">Languages</p>
          <ul className="mt-4 space-y-2.5 text-sm text-off-white/80">
            {siteConfig.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-off-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>134B Barking Road, London E6 3BD</p>
        </Container>
      </div>
    </footer>
  );
}
