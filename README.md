# Ana Precup — Personal Brand Homepage (Noir Edition)

A pixel-faithful, SEO-first rebuild of the **Ana Precup** personal-brand homepage
(Romanian SEO consultant, founder of Deby.ro) — the premium black-and-white
"Noir" editorial design — in a modern, server-rendered stack.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui ·
next-themes · TypeScript.

**Lighthouse:** 100 / 100 / 100 / 100 (Performance · Accessibility · Best
Practices · SEO) on desktop for both locales; mobile is 100 perf on a quiet run
with A11y/Best-Practices/SEO always 100 (observed FCP = LCP ≈ 0.1 s).

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (→ /en)
```

Production:

```bash
npm run build
npm run start
```

## What's implemented

- **Bilingual, SSG routing** — English at `/en`, Romanian at `/ro` (`app/[lang]`),
  each statically generated with the correct `<html lang>`, `hreflang`
  alternates (`en` / `ro` / `x-default`) and a self-referencing canonical. `/`
  redirects to `/en`. The `EN | RO` pill navigates between the routes.
- **Light / dark theme** — `next-themes`, default light, no flash, full
  white-on-black invert in dark mode. Persisted in `localStorage`.
- **The full Noir homepage** — sticky nav → split hero → recent articles
  (minimal cards) → topics strip → about teaser (grayscale portrait) →
  black newsletter block → footer. Faithful to the design tokens (Instrument
  Serif / Archivo / Space Mono, 3–4 px radii, hairlines, no shadows).
- **SEO** — per-locale `<title>`/description, Open Graph + Twitter cards, a
  branded OG image, JSON-LD (`Person` + `WebSite`), `sitemap.xml`, `robots.txt`,
  a web manifest, and semantic landmark/heading structure.
- **Performance** — fonts self-hosted via `next/font`; the hero wordmark glyphs
  ship as a tiny inlined subset (`app/serif-hero.css`) so the text LCP never
  waits on the network; images via `next/image` (AVIF/WebP).

## Project structure

```
app/
  [lang]/          # root layout (html lang, metadata) + homepage
  globals.css      # Noir design tokens + component styles (Tailwind v4)
  icon.svg, apple-icon.png, manifest.ts, robots.ts, sitemap.ts
  serif-hero.css   # inlined hero-wordmark font subset (generated)
components/        # hero, recent-articles, topics, about, newsletter, footer, nav…
  ui/              # shadcn/ui primitives (button, input)
lib/               # i18n, content (bilingual strings + posts), site config, fonts
scripts/           # gen-assets.mjs (icons/OG), inline-hero-font.mjs
public/            # ana.jpg portrait, icons, og.png
```

## Customising

- **Domain** — set `NEXT_PUBLIC_SITE_URL` (defaults to `https://anaprecup.com`).
  It drives canonical/OG/sitemap URLs.
- **Socials & contact** — `lib/site.ts` (LinkedIn / Instagram / Facebook are
  placeholders; update them — they also feed JSON-LD `sameAs`).
- **Content** — all copy lives in `lib/content.ts` (`dictionaries`, `posts`). In
  production these would come from a CMS/markdown.

## Regenerating assets

```bash
node scripts/gen-assets.mjs        # favicon/icons + og.png from Noir SVGs
node scripts/inline-hero-font.mjs  # rebuild app/serif-hero.css
```
