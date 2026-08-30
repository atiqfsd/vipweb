// Centralised, confirmed business information and navigation structure.
// Sourced from CLAUDE.md / docs/02-business-information.md and
// docs/03-site-architecture.md. Do not add unverified fields here —
// missing details stay absent until the owner confirms them.

export const siteConfig = {
  name: "VIP e-Services",
  description:
    "Digital and IT solutions for businesses, and practical application assistance for customers, in East London.",
  address: {
    line1: "134B Barking Road",
    city: "London",
    postcode: "E6 3BD",
  },
  phone: "020 3685 7733",
  phoneHref: "tel:+442036857733",
  // WhatsApp kept on the previous mobile number; 020 3685 7733 is a
  // landline and cannot receive WhatsApp messages. Update if the owner
  // confirms a WhatsApp-enabled number.
  whatsappHref: "https://wa.me/447881948169",
  email: "info@vipeservices.co.uk",
  mapsHref: "https://maps.app.goo.gl/bSMWU1bvC9yhFH699",
  // Keyless Google Maps embed for the contact page, pointed at the Google
  // Business Profile listing itself via its CID (11457351587617275091 =
  // 0x9f00b090b6af7cd3, resolved from mapsHref) so the map shows the
  // "ViP e-Services" business pin and info card, not just an address search.
  // The `output=embed` endpoint needs no API key.
  mapEmbedSrc: "https://maps.google.com/maps?cid=11457351587617275091&output=embed",
  languages: ["English", "Urdu", "Hindi", "Punjabi"],
  // Web3Forms access key for the contact form (components/contact/ContactForm.tsx).
  // This is NOT a secret: it only identifies which pre-verified inbox a
  // submission is delivered to and cannot be used to read submissions or
  // change settings — Web3Forms designs it for client-side use, which is
  // what makes it work on this static (no-server) site.
  // To activate the form:
  //   1. Go to https://web3forms.com, enter info@vipeservices.co.uk, submit.
  //   2. Open the confirmation email from Web3Forms and click to verify.
  //   3. Copy the Access Key shown and paste it below, replacing the placeholder.
  //   4. Commit + push — the GitHub Action rebuilds and deploys.
  web3formsKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

// Matches docs/03-site-architecture.md primary navigation.
// Routes are added stage by stage; a link here may 404 until its
// page is built in a later stage.
export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
