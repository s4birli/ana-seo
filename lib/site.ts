import type { Lang } from "@/lib/i18n";

/**
 * Single source of truth for site-wide constants.
 * Override the public URL at build time with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anaprecup.com"
).replace(/\/$/, "");

/**
 * Search-engine ownership verification. Set these env vars (e.g. in .env.local
 * or your host) to emit the verification <meta> tags for Search Console / Bing.
 */
export const verification = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
};

export const site = {
  name: "Ana Precup",
  brand: { first: "Ana", last: "Precup" },
  email: "ana@deby.ro",
  authorBrand: "Deby.ro",
  location: "Cluj, Romania",
  socials: {
    linkedin: "https://www.linkedin.com/in/ana-precup/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;

/** Localised <title>/<meta description> for the homepage. */
export const seo: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Ana Precup — SEO Consultant & Blogger",
    description:
      "Ana Precup is a Romanian SEO consultant since 2012 and founder of Deby.ro. Honest writing about SEO, AI Search, and the freelance life — tested on real projects.",
  },
  ro: {
    title: "Ana Precup — Consultant SEO & Blogger",
    description:
      "Ana Precup este consultant SEO din 2012 și fondatoarea Deby.ro. Scriu onest despre SEO, AI Search și viața de freelancer — testat pe proiecte reale.",
  },
};
