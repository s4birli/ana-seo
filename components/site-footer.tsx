import type { Dictionary } from "@/lib/content";
import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const exploreHrefs = ["#top", "#blog", "#topics", "#about"];

function footerHref(col: number, link: number): string {
  if (col === 0) return exploreHrefs[link] ?? "#top";
  if (col === 2) return link === 0 ? `mailto:${site.email}` : "#newsletter";
  return "#blog";
}

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const s = dict.footer;

  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              Ana <i>Precup</i>
            </div>
            <p className="footer__tag">{s.tag}</p>
            <div className="social" style={{ marginTop: 22 }}>
              <a href={site.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href={site.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href={site.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="footer__cols">
            {s.cols.map((col, ci) => (
              <div className="footer__col" key={col.h}>
                <h3>{col.h}</h3>
                {col.links.map((lk, li) => (
                  <a key={lk} href={footerHref(ci, li)}>
                    {lk}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>{s.rights}</span>
          <span>{s.made}</span>
        </div>
      </div>
    </footer>
  );
}
