"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/content";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
                  <Input
                    type="email"
                    required
                    placeholder={s.placeholder}
                    aria-label={s.placeholder}
                    className="h-auto min-w-0 flex-1 rounded-none border-0 bg-transparent p-0 text-[15px] text-paper shadow-none placeholder:text-[color-mix(in_oklch,var(--paper)_60%,transparent)] focus-visible:border-0 focus-visible:ring-0"
                  />
                  <Button
                    type="submit"
                    className="h-auto rounded-[3px] border-0 bg-paper px-[22px] py-[11px] text-[14.5px] font-bold text-ink shadow-none hover:translate-x-0.5 hover:bg-paper"
                  >
                    {s.button}
                  </Button>
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
