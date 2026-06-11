import { Archivo, Instrument_Serif, Space_Mono } from "next/font/google";

/**
 * Font strategy tuned for a text LCP (the hero <h1>) on throttled mobile.
 *
 * The hero wordmark glyphs ("Ana Precup") ship as a ~3.5 KB inlined text subset
 * (app/serif-hero.css, family "Instrument Serif") so the LCP element paints from
 * the document with no network round-trip — LCP ≈ FCP. These next/font faces
 * provide the full glyph set for everything else and fall in *behind* the inline
 * subset in the CSS font stack (identical typeface, seamless):
 *
 * - `serifLatin` / `serifExt` — full Instrument Serif (latin / latin-ext for
 *   Romanian diacritics on /ro). `optional` + not preloaded: never block render.
 * - Archivo / Space Mono — `optional` + not preloaded: the metric-matched
 *   fallback is kept if they can't arrive instantly (no layout shift → CLS 0),
 *   while real visitors on normal connections still get the real fonts.
 */
export const serifLatin = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "optional",
  preload: false,
  variable: "--font-serif-latin",
});

export const serifExt = Instrument_Serif({
  subsets: ["latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "optional",
  preload: false,
  variable: "--font-serif-ext",
});

export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "optional",
  preload: false,
  variable: "--font-archivo",
});

export const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "optional",
  preload: false,
  variable: "--font-space-mono",
});

export const fontVariables = `${serifLatin.variable} ${serifExt.variable} ${archivo.variable} ${spaceMono.variable}`;
