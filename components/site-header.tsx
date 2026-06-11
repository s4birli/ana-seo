"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const nav = dict.nav;

  const links = [
    { label: nav.home, href: "#top" },
    { label: nav.blog, href: "#blog" },
    { label: nav.seo, href: "#topics" },
    { label: nav.about, href: "#about" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="brand" href="#top">
          Ana <i>Precup</i>
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label="Primary">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? "active" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__tools">
            <div className="langsw" role="group" aria-label={nav.language}>
              <Link href="/en" hrefLang="en" data-on={lang === "en"} aria-current={lang === "en" ? "true" : undefined}>
                EN
              </Link>
              <Link href="/ro" hrefLang="ro" data-on={lang === "ro"} aria-current={lang === "ro" ? "true" : undefined}>
                RO
              </Link>
            </div>
            <ThemeToggle label={nav.toggleTheme} />
          </div>

          <a className="nav__cta" href="#newsletter">
            {nav.subscribe}
          </a>

          <button
            type="button"
            className="nav__menu"
            aria-label={nav.menu}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <nav id="mobile-drawer" className={open ? "drawer open" : "drawer"} aria-label="Mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#newsletter" onClick={() => setOpen(false)} style={{ color: "var(--ink)" }}>
          {nav.subscribe}
        </a>
      </nav>
    </header>
  );
}
