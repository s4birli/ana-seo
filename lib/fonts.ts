import { Archivo, Instrument_Serif, Space_Mono } from "next/font/google";

/**
 * Fonts self-hosted via next/font. `latin-ext` covers Romanian diacritics
 * (ă â î ș ț).
 *
 * `display: "swap"` (not "optional") so the real design fonts ALWAYS render —
 * the page must look identical on every load, in both languages. The above-the-
 * fold faces are preloaded to minimise any flash / layout shift. The hero
 * wordmark itself paints from a tiny inlined subset (app/serif-hero.css), so the
 * text LCP never waits on these network fonts.
 */
export const serifLatin = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  variable: "--font-serif-latin",
});

export const serifExt = Instrument_Serif({
  subsets: ["latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-serif-ext",
});

export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-archivo",
});

export const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  variable: "--font-space-mono",
});

export const fontVariables = `${serifLatin.variable} ${serifExt.variable} ${archivo.variable} ${spaceMono.variable}`;
