"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { primaryNavLinks, siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Portalled to <body>: the header uses backdrop-blur, which establishes
  // a containing block for fixed-position descendants in Chromium. Left
  // in place, this panel's `fixed inset-x-0 top-… bottom-0` resolves
  // against the header's own (much smaller) box instead of the viewport,
  // collapsing it to zero height. Escaping to <body> avoids that entirely.
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 inline-flex h-11 w-11 items-center justify-center text-foreground"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          )}
        </svg>
      </button>

      {open && createPortal(
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 flex flex-col overflow-y-auto bg-background"
        >
          <ul className="flex flex-1 flex-col divide-y divide-line border-b border-line px-4">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center py-5 text-2xl font-semibold tracking-tight text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 px-4 py-6">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 bg-tech-blue px-5 py-3.5 text-base font-medium text-white"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-line px-5 py-3.5 text-base font-medium text-foreground"
            >
              WhatsApp us
            </a>
          </div>
        </nav>,
        document.body,
      )}
    </div>
  );
}
