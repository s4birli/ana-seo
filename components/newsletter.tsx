"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/content";
import { CheckIcon } from "@/components/icons";

export function Newsletter({ dict }: { dict: Dictionary }) {
  const s = dict.news;
  const [done, setDone] = useState(false);

  return (
    <section className="section" id="newsletter">
      <div className="wrap">
        <div className="news">
          <div>
            <p className="news__eyebrow">{s.eyebrow}</p>
            <h2 className="news__title">{s.title}</h2>
            <p className="news__sub">{s.sub}</p>
          </div>

          <div className="news__form">
            {done ? (
              <p className="news__ok">
                <CheckIcon /> {s.ok}
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <div className="news__field">
                  <input
                    type="email"
                    required
                    placeholder={s.placeholder}
                    aria-label={s.placeholder}
                  />
                  <button type="submit">{s.button}</button>
                </div>
                <p className="news__note">{s.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
