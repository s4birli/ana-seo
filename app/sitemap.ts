import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const lastModified = "2026-06-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${siteUrl}/en`,
    ro: `${siteUrl}/ro`,
  };

  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "weekly",
    priority: lang === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
