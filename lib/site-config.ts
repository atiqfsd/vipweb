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
  phone: "+44 7881 948169",
  phoneHref: "tel:+447881948169",
  // Assumption: WhatsApp reachable on the same mobile number. Update if
  // the owner confirms a separate WhatsApp Business number.
  whatsappHref: "https://wa.me/447881948169",
  email: "info@vipeservices.co.uk",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=134B+Barking+Road%2C+London+E6+3BD",
  languages: ["English", "Urdu", "Hindi", "Punjabi"],
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
