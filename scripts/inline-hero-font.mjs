/**
 * Inlines a *tiny* text subset of Instrument Serif — only the glyphs in the
 * hero wordmark "Ana Precup" — as data-URI @font-faces (family "Instrument
 * Serif"). The hero <h1> is the LCP element; serving its font from the document
 * (no network request) makes LCP ≈ FCP under throttled mobile. All other serif
 * text falls through to the full next/font faces (identical typeface).
 *
 * Run: node scripts/inline-hero-font.mjs
 */
import { writeFile } from "node:fs/promises";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&text=AnaPrecup&display=swap";

const css = await (await fetch(cssUrl, { headers: { "User-Agent": UA } })).text();

const blockRe = /@font-face\s*\{([^}]*)\}/g;
const out = [];
let totalRaw = 0;
let m;
while ((m = blockRe.exec(css)) !== null) {
  const block = m[1];
  const style = /font-style:\s*([^;]+);/.exec(block)?.[1].trim() ?? "normal";
  const url = /src:\s*url\(([^)]+)\)/.exec(block)?.[1];
  if (!url) continue;
  const buf = Buffer.from(
    await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer(),
  );
  totalRaw += buf.length;
  console.log(`${style}: ${(buf.length / 1024).toFixed(2)} KB`);
  out.push(
    `@font-face{font-family:'Instrument Serif';font-style:${style};font-weight:400;font-display:swap;` +
      `src:url(data:font/woff2;base64,${buf.toString("base64")}) format('woff2');}`,
  );
}

await writeFile("app/serif-hero.css", out.join("\n") + "\n");
console.log(
  `\nWrote app/serif-hero.css — ${out.length} faces, ${(totalRaw / 1024).toFixed(2)} KB raw`,
);
