export const locales = ["en", "ro"] as const;
export type Lang = (typeof locales)[number];

export const defaultLocale: Lang = "en";

export function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

/** BCP-47 tags used for <html lang>, hreflang and OpenGraph locale. */
export const htmlLang: Record<Lang, string> = {
  en: "en",
  ro: "ro",
};

export const ogLocale: Record<Lang, string> = {
  en: "en_US",
  ro: "ro_RO",
};
