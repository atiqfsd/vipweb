// Centralised service data for the Services section (Stage 3).
// Source of truth: docs/05-services.md and docs/04-page-specifications.md.
// Only confirmed names and descriptions are populated here — optional
// fields (longDescription, SEO overrides, relatedServices, image) exist
// so Stage 4 detail pages can be added without reshaping this file, but
// stay empty until the owner confirms real content.

export type ServiceCategory = "digital-it" | "benefits-housing" | "work-applications";

type BaseService = {
  name: string;
  slug: string;
  longDescription?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedServices?: string[];
  image?: string;
};

export type DigitalService = BaseService & {
  category: "digital-it";
  shortDescription: string;
};

export type ApplicationService = BaseService & {
  category: "benefits-housing" | "work-applications";
  shortDescription?: string;
};

export type Service = DigitalService | ApplicationService;

export type ServiceCategoryMeta = {
  slug: ServiceCategory;
  label: string;
  href: string;
  division: "digital-it" | "application-assistance";
};

// Matches docs/03-site-architecture.md URL structure.
export const serviceCategories: Record<ServiceCategory, ServiceCategoryMeta> = {
  "digital-it": {
    slug: "digital-it",
    label: "Digital & IT Solutions",
    href: "/services/digital-it",
    division: "digital-it",
  },
  "benefits-housing": {
    slug: "benefits-housing",
    label: "Benefits & Housing",
    href: "/services/benefits-housing",
    division: "application-assistance",
  },
  "work-applications": {
    slug: "work-applications",
    label: "Work & Other Applications",
    href: "/services/work-applications",
    division: "application-assistance",
  },
};

// Digital & IT Solutions — genuine services delivered directly by VIP e-Services.
export const digitalServices: DigitalService[] = [
  {
    name: "Web Development",
    slug: "web-development",
    category: "digital-it",
    shortDescription: "Professional websites for businesses and organisations.",
  },
  {
    name: "Web Applications",
    slug: "web-applications",
    category: "digital-it",
    shortDescription: "Custom browser-based applications designed around business requirements.",
  },
  {
    name: "Mobile Applications",
    slug: "mobile-applications",
    category: "digital-it",
    shortDescription: "Mobile application development.",
  },
  {
    name: "Custom Software",
    slug: "custom-software",
    category: "digital-it",
    shortDescription: "Purpose-built software for specific operational requirements.",
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    category: "digital-it",
    shortDescription: "Digital marketing services for businesses.",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    category: "digital-it",
    shortDescription: "Security-focused services for businesses.",
  },
  {
    name: "Penetration Testing",
    slug: "penetration-testing",
    category: "digital-it",
    shortDescription: "Security testing to identify weaknesses.",
  },
  {
    name: "Security Awareness Training",
    slug: "security-awareness-training",
    category: "digital-it",
    shortDescription: "Training to improve security awareness.",
  },
  {
    name: "LLM Integration",
    slug: "llm-integration",
    category: "digital-it",
    shortDescription: "Integrating AI language model tools into business systems and workflows.",
  },
  {
    name: "On-site IT Consultancy",
    slug: "on-site-it-consultancy",
    category: "digital-it",
    shortDescription: "Hands-on IT support and strategic guidance at the client's location.",
  },
];

// Benefits & Housing — application assistance only. Names match
// docs/05-services.md exactly; VIP e-Services helps customers complete
// these applications and does not provide the benefit or service itself.
export const benefitsHousingServices: ApplicationService[] = [
  { name: "Housing Benefits", slug: "housing-benefits", category: "benefits-housing" },
  { name: "Housing Register", slug: "housing-register", category: "benefits-housing" },
  { name: "Universal Credit", slug: "universal-credit", category: "benefits-housing" },
  { name: "PIP", slug: "pip", category: "benefits-housing" },
  { name: "DLA", slug: "dla", category: "benefits-housing" },
  { name: "ESA", slug: "esa", category: "benefits-housing" },
  { name: "JSA", slug: "jsa", category: "benefits-housing" },
  { name: "Carer's Allowance", slug: "carers-allowance", category: "benefits-housing" },
  { name: "Council Housing", slug: "council-housing", category: "benefits-housing" },
  { name: "Community Services", slug: "community-services", category: "benefits-housing" },
  { name: "Working Tax Credit", slug: "working-tax-credit", category: "benefits-housing" },
  { name: "Child Tax Credit", slug: "child-tax-credit", category: "benefits-housing" },
  { name: "Child Benefit", slug: "child-benefit", category: "benefits-housing" },
  { name: "Pension Credit", slug: "pension-credit", category: "benefits-housing" },
  { name: "State Pension", slug: "state-pension", category: "benefits-housing" },
  {
    name: "Biometric Residence Card Replacement",
    slug: "biometric-residence-card-replacement",
    category: "benefits-housing",
  },
  { name: "Schengen Visas", slug: "schengen-visas", category: "benefits-housing" },
];

// Work & Other Applications — application assistance only.
export const workApplicationServices: ApplicationService[] = [
  { name: "Job Applications", slug: "job-applications", category: "work-applications" },
  { name: "Uber Eats", slug: "uber-eats", category: "work-applications" },
  { name: "Just Eat", slug: "just-eat", category: "work-applications" },
  { name: "Deliveroo", slug: "deliveroo", category: "work-applications" },
  { name: "SIA Applications", slug: "sia-applications", category: "work-applications" },
  {
    name: "TfL Private Hire Driver Licence Applications",
    slug: "tfl-private-hire-driver-licence-applications",
    category: "work-applications",
  },
  { name: "British Passport Assistance", slug: "british-passport-assistance", category: "work-applications" },
  { name: "ID Card Renewals", slug: "id-card-renewals", category: "work-applications" },
  { name: "Pakistani NICOP / Passport", slug: "pakistani-nicop-passport", category: "work-applications" },
  { name: "E-visa Services", slug: "e-visa-services", category: "work-applications" },
  {
    name: "FRC / NADRA Family Registration Certificate",
    slug: "frc-nadra-family-registration-certificate",
    category: "work-applications",
  },
];

export const allServices: Service[] = [...digitalServices, ...benefitsHousingServices, ...workApplicationServices];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return allServices.filter((service) => service.category === category);
}
