import type { Lang } from "@/lib/i18n";
import { seo, site, siteUrl } from "@/lib/site";

export function StructuredData({ lang }: { lang: Lang }) {
  const pageUrl = `${siteUrl}/${lang}`;
  const description = seo[lang].description;
  const jobTitle = lang === "ro" ? "Consultant SEO" : "SEO Consultant";

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        url: siteUrl,
        jobTitle,
        description,
        image: `${siteUrl}/ana.jpg`,
        email: `mailto:${site.email}`,
        knowsAbout: [
          "SEO",
          "AI Search",
          "Ecommerce SEO",
          "Technical SEO",
          "Content Strategy",
        ],
        worksFor: { "@type": "Organization", name: "Deby.ro", url: "https://deby.ro" },
        sameAs: [
          site.socials.linkedin,
          site.socials.instagram,
          site.socials.facebook,
          "https://deby.ro",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cluj",
          addressCountry: "RO",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: pageUrl,
        name: site.name,
        description,
        inLanguage: lang,
        publisher: { "@id": `${siteUrl}/#person` },
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  // Static, developer-controlled data only. Escape "<" so a value can never
  // break out of the <script> element (defense-in-depth, no user input here).
  const json = JSON.stringify(graph).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
