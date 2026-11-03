import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteOrigin = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  if (!siteOrigin) {
    return { title, description };
  }

  return {
    title,
    description,
    metadataBase: new URL(siteOrigin),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "I&T Solutions",
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "I&T Solutions — Sua ideia, nossa tecnologia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

export function getSiteOrigin(): string | undefined {
  return siteOrigin;
}
