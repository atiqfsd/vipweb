import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://vipeservices.co.uk";

const routes = [
  "",
  "/services",
  "/services/digital-it",
  "/services/benefits-housing",
  "/services/work-applications",
  "/about",
  "/careers",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
