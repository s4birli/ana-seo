import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../serif-hero.css";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { Providers } from "@/components/providers";
import {
  defaultLocale,
  htmlLang,
  isLang,
  locales,
  ogLocale,
  type Lang,
} from "@/lib/i18n";
import { seo, site, siteUrl } from "@/lib/site";

type LayoutParams = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0b" },
  ],
};

const keywords: Record<Lang, string[]> = {
  en: [
    "Ana Precup",
    "SEO consultant",
    "AI Search",
    "Ecommerce SEO",
    "SEO Romania",
    "Deby.ro",
    "freelance SEO",
  ],
  ro: [
    "Ana Precup",
    "consultant SEO",
    "AI Search",
    "SEO ecommerce",
    "SEO Romania",
    "Deby.ro",
    "freelancer SEO",
  ],
};

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : defaultLocale;
  const { title, description } = seo[lang];
  const path = `/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${site.name}`,
    },
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    publisher: site.name,
    keywords: keywords[lang],
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        ro: "/ro",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: path,
      locale: ogLocale[lang],
      alternateLocale: lang === "en" ? [ogLocale.ro] : [ogLocale.en],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode } & LayoutParams>) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw;

  return (
    <html lang={htmlLang[lang]} className={fontVariables} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
