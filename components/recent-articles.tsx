import type { Dictionary } from "@/lib/content";
import { posts, tags } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { ArrowIcon } from "@/components/icons";

export function RecentArticles({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const s = dict.blog;

  return (
    <section className="section" id="blog">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="sec-head__title">{s.title}</h2>
          </div>
          <a className="sec-head__link" href="#blog">
            {s.all} <ArrowIcon />
          </a>
        </div>

        <div className="grid">
          {posts.map((p, i) => (
            <article className="card" key={i}>
              <div className="card__tagrow">
                <span className="tag">{tags[lang][p.cat]}</span>
                <span className="read">{p.read[lang]}</span>
              </div>
              <h3 className="card__title">{p.title[lang]}</h3>
              <p className="card__excerpt">{p.excerpt[lang]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
