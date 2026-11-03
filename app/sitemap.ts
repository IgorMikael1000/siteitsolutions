import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteOrigin = getSiteOrigin();

  if (!siteOrigin) {
    return [];
  }

  return [
    { url: new URL("/", siteOrigin).toString(), priority: 1 },
    {
      url: new URL("/vittabeauty/", siteOrigin).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/politica-privacidade/", siteOrigin).toString(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
