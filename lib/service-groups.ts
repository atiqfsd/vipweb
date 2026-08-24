// Display-only groupings for the long application-assistance service
// lists (docs call for "sensible subgroups" instead of a 15+ item pill
// list). Names are derived from lib/services.ts by slug so the grouped
// view can never drift from the verified service data.

import { benefitsHousingServices, workApplicationServices } from "./services";

export type ServiceGroup = {
  label: string;
  services: string[];
};

function resolveGroup(
  source: typeof benefitsHousingServices | typeof workApplicationServices,
  label: string,
  slugs: string[],
): ServiceGroup {
  return {
    label,
    services: slugs.map((slug) => {
      const service = source.find((item) => item.slug === slug);
      if (!service) {
        throw new Error(`Unknown service slug "${slug}" in group "${label}"`);
      }
      return service.name;
    }),
  };
}

export const benefitsHousingGroups: ServiceGroup[] = [
  resolveGroup(benefitsHousingServices, "Benefits", [
    "universal-credit",
    "pip",
    "dla",
    "esa",
    "jsa",
    "carers-allowance",
    "working-tax-credit",
    "child-tax-credit",
    "child-benefit",
    "pension-credit",
    "state-pension",
  ]),
  resolveGroup(benefitsHousingServices, "Housing", [
    "housing-benefits",
    "housing-register",
    "council-housing",
  ]),
  resolveGroup(benefitsHousingServices, "Other support", [
    "community-services",
    "biometric-residence-card-replacement",
    "schengen-visas",
  ]),
];

export const workApplicationGroups: ServiceGroup[] = [
  resolveGroup(workApplicationServices, "Delivery & work platforms", [
    "job-applications",
    "uber-eats",
    "just-eat",
    "deliveroo",
  ]),
  resolveGroup(workApplicationServices, "Licences", [
    "sia-applications",
    "tfl-private-hire-driver-licence-applications",
  ]),
  resolveGroup(workApplicationServices, "Identity & travel documents", [
    "british-passport-assistance",
    "id-card-renewals",
    "pakistani-nicop-passport",
    "e-visa-services",
    "frc-nadra-family-registration-certificate",
  ]),
];
