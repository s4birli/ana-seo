import type { Dictionary } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

export function Hero({ dict }: { dict: Dictionary }) {
  const s = dict.hero;
  const L = dict.latest;

  return (
    <section className="hero wrap" id="top">
      <div className="hero__grid">
        <div className="hero__head">
          <span className="eyebrow">{s.eyebrow}</span>
          <h1 className="hero__name">
            Ana
            <br />
            <span className="accent">Precup</span>
          </h1>
          <p className="hero__tag">{s.tagline}</p>
          <div className="hero__roles">
            {s.chips.map((c) => (
              <span key={c} className="chip">
                <b>·</b> {c}
              </span>
            ))}
            <span className="chip">
              {s.founder} <b>Deby.ro</b>
            </span>
          </div>
        </div>

        <a className="latest" href="#blog">
          <div className="latest__inner">
            <div className="latest__media">
              <div className="latest__cover" aria-hidden="true">
                <span className="cv-eyebrow">Latest in Search</span>
                <span className="cv-title">
                  AI <em>Search</em>
                </span>
                <span className="cv-foot">// 2026 Field Guide</span>
              </div>
            </div>
            <div className="latest__body">
              <p className="latest__flag">{s.latestFlag}</p>
              <div className="latest__meta">
                <span className="tag">{L.tag}</span>
                <span className="read">{L.read}</span>
              </div>
              <h2 className="latest__title">{L.title}</h2>
              <p className="latest__excerpt">{L.excerpt}</p>
              <span className="latest__more">
                {s.read} <ArrowIcon />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
