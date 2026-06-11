import Image from "next/image";
import type { Dictionary } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";
import anaPortrait from "@/public/ana.jpg";

export function About({ dict }: { dict: Dictionary }) {
  const s = dict.about;

  return (
    <section className="section" id="about">
      <div className="wrap about__grid">
        <div className="about__portrait">
          <Image
            src={anaPortrait}
            alt={s.portraitAlt}
            fill
            sizes="(max-width: 900px) 280px, 380px"
            placeholder="blur"
          />
        </div>
        <div>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="about__lead">
            {s.lead[0]}
            <em>{s.lead[1]}</em>
            {s.lead[2]}
          </h2>
          <p className="about__body">{s.body}</p>
          <div className="about__stats">
            {s.stats.map(([n, l]) => (
              <div key={l}>
                <div className="stat__num">{n}</div>
                <div className="stat__lbl">{l}</div>
              </div>
            ))}
          </div>
          <a className="btn btn--ghost" href="#top">
            {s.cta} <ArrowIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
