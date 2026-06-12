import type { Dictionary } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

export function Topics({ dict }: { dict: Dictionary }) {
  const s = dict.topics;

  return (
    <section className="section section--alt" id="topics">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="sec-head__title">{s.title}</h2>
          </div>
        </div>

        <div className="grid">
          {s.list.map((p, i) => (
            <a key={p.name} href="#blog" className="card">
              <div className="card__tagrow">
                <span className="tag">{`0${i + 1}`}</span>
              </div>
              <h3 className="card__title">{p.name}</h3>
              <p className="card__excerpt">{p.desc}</p>
              <span className="latest__more">
                {p.label} <ArrowIcon size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
