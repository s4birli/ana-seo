import { getDictionary } from "@/lib/content";
import { defaultLocale, isLang, type Lang } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { RecentArticles } from "@/components/recent-articles";
import { Topics } from "@/components/topics";
import { About } from "@/components/about";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData lang={lang} />
      <SiteHeader lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <RecentArticles lang={lang} dict={dict} />
        <Topics dict={dict} />
        <About dict={dict} />
        <Newsletter dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
