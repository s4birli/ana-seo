import type { Lang } from "@/lib/i18n";

/* ============================================================
   Ana Precup — bilingual content (EN default / RO)
   Ported verbatim from the design handoff (STR / POSTS / TAGS).
   In production these would come from a CMS or markdown.
   ============================================================ */

export type Dictionary = {
  nav: {
    home: string;
    blog: string;
    seo: string;
    about: string;
    contact: string;
    subscribe: string;
    menu: string;
    toggleTheme: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    chips: string[];
    founder: string;
    latestFlag: string;
    read: string;
  };
  latest: {
    tag: string;
    title: string;
    read: string;
    excerpt: string;
    ph: string;
  };
  blog: { eyebrow: string; title: string; all: string };
  topics: {
    eyebrow: string;
    title: string;
    list: { label: string; name: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    lead: [string, string, string];
    body: string;
    stats: [string, string][];
    cta: string;
    portraitAlt: string;
  };
  news: {
    eyebrow: string;
    title: string;
    sub: string;
    placeholder: string;
    button: string;
    note: string;
    ok: string;
  };
  footer: {
    tag: string;
    cols: { h: string; links: string[] }[];
    made: string;
    rights: string;
  };
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      seo: "SEO",
      about: "About",
      contact: "Contact",
      subscribe: "Subscribe",
      menu: "Menu",
      toggleTheme: "Toggle theme",
      language: "Language",
    },
    hero: {
      eyebrow: "SEO Consultant · since 2012",
      tagline:
        "I write about SEO, AI Search, and what freelance life is really like. Honest, from experience.",
      chips: ["AI Search", "Ecommerce SEO", "Digital Strategist"],
      founder: "Founder",
      latestFlag: "Latest post",
      read: "Read article",
    },
    latest: {
      tag: "SEO",
      title: "How to optimize for AI Search in 2026",
      read: "10 min read",
      excerpt:
        "AI-generated answers have changed the rules. Here's how I structure content to show up in results — and what I've tested on my own projects.",
      ph: "latest post · 16:10",
    },
    blog: { eyebrow: "From the blog", title: "Recent articles", all: "All articles" },
    topics: {
      eyebrow: "What I write about",
      title: "Three themes, one thread",
      list: [
        {
          label: "Personal",
          name: "Personal stories",
          desc: "Decisions, failures, and lessons from behind the screen.",
        },
        {
          label: "SEO",
          name: "SEO tips & strategy",
          desc: "Tactics tested on real projects, no useless jargon.",
        },
        {
          label: "Freelancing",
          name: "The freelance life",
          desc: "Rates, clients, routine — the practical side of freedom.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      lead: [
        "Hi, I'm Ana. I've been doing SEO for over ",
        "ten years",
        " and I write to remember what I've learned along the way.",
      ],
      body: "I started in 2012, grew ecommerce projects, built Deby.ro and, along the way, moved from agency life to freelancing. Here I share the strategies that work — but also the less polished stories, because both matter.",
      stats: [
        ["12+", "years in SEO"],
        ["90+", "projects"],
        ["1", "own brand"],
      ],
      cta: "More about me",
      portraitAlt: "Portrait of Ana Precup, SEO consultant and founder of Deby.ro",
    },
    news: {
      eyebrow: "Newsletter",
      title: "One email a month. Only what matters.",
      sub: "What I've learned about SEO, AI Search, and freelance life — no spam, no filler.",
      placeholder: "your email address",
      button: "Subscribe",
      note: "// unsubscribe anytime, in one click",
      ok: "Done! See you next month.",
    },
    footer: {
      tag: "SEO consultant & blogger. I write from Cluj about everything to do with search, content, and working for yourself.",
      cols: [
        { h: "Explore", links: ["Home", "Blog", "SEO", "About"] },
        { h: "Topics", links: ["Personal stories", "SEO tips", "Freelancing"] },
        { h: "Contact", links: ["ana@deby.ro", "Newsletter"] },
      ],
      made: "Made with espresso & curiosity ☕",
      rights: "© 2026 Ana Precup",
    },
  },
  ro: {
    nav: {
      home: "Acasă",
      blog: "Blog",
      seo: "SEO",
      about: "Despre",
      contact: "Contact",
      subscribe: "Abonează-te",
      menu: "Meniu",
      toggleTheme: "Schimbă tema",
      language: "Limbă",
    },
    hero: {
      eyebrow: "Consultant SEO · din 2012",
      tagline:
        "Scriu despre SEO, AI Search și ce înseamnă, cu adevărat, viața de freelancer. Onest, din experiență.",
      chips: ["AI Search", "Ecommerce SEO", "Digital Strategist"],
      founder: "Fondator",
      latestFlag: "Cel mai recent articol",
      read: "Citește articolul",
    },
    latest: {
      tag: "SEO",
      title: "Cum optimizezi pentru AI Search în 2026",
      read: "10 min",
      excerpt:
        "Răspunsurile generate de AI au schimbat regulile. Iată cum îmi structurez conținutul ca să apară în rezultate — și ce am testat pe propriile proiecte.",
      ph: "latest post · 16:10",
    },
    blog: { eyebrow: "De pe blog", title: "Articole recente", all: "Toate articolele" },
    topics: {
      eyebrow: "Despre ce scriu",
      title: "Trei teme, un singur fir",
      list: [
        {
          label: "Personal",
          name: "Povești personale",
          desc: "Decizii, eșecuri și lecții din spatele ecranului.",
        },
        {
          label: "SEO",
          name: "Sfaturi & strategii",
          desc: "Tactici testate pe proiecte reale, fără jargon inutil.",
        },
        {
          label: "Freelancing",
          name: "Viața de freelancer",
          desc: "Tarife, clienți, rutină — partea practică a libertății.",
        },
      ],
    },
    about: {
      eyebrow: "Despre",
      lead: [
        "Salut, sunt Ana. Fac SEO de peste ",
        "zece ani",
        " și scriu ca să-mi amintesc ce am învățat pe drum.",
      ],
      body: "Am început în 2012, am crescut proiecte de ecommerce, am construit Deby.ro și, pe parcurs, am trecut de la agenție la freelancing. Aici împart strategiile care funcționează, dar și poveștile mai puțin lustruite — pentru că ambele contează.",
      stats: [
        ["12+", "ani în SEO"],
        ["90+", "proiecte"],
        ["1", "brand propriu"],
      ],
      cta: "Mai multe despre mine",
      portraitAlt:
        "Portret al Anei Precup, consultant SEO și fondatoarea Deby.ro",
    },
    news: {
      eyebrow: "Newsletter",
      title: "Un email pe lună. Doar ce contează.",
      sub: "Ce am învățat despre SEO, AI Search și viața de freelancer — fără spam, fără umplutură.",
      placeholder: "adresa ta de email",
      button: "Abonează-te",
      note: "// te poți dezabona oricând, dintr-un click",
      ok: "Gata! Ne auzim luna viitoare.",
    },
    footer: {
      tag: "Consultant SEO & blogger. Scriu din Cluj despre tot ce înseamnă căutare, conținut și muncă pe cont propriu.",
      cols: [
        { h: "Explorează", links: ["Acasă", "Blog", "SEO", "Despre"] },
        { h: "Teme", links: ["Povești personale", "Sfaturi SEO", "Freelancing"] },
        { h: "Contact", links: ["ana@deby.ro", "Newsletter"] },
      ],
      made: "Făcut cu espresso & curiozitate ☕",
      rights: "© 2026 Ana Precup",
    },
  },
};

/* category tag labels per language */
export const tags: Record<Lang, Record<PostCategory, string>> = {
  en: { seo: "SEO", stories: "Stories", freelancing: "Freelancing" },
  ro: { seo: "SEO", stories: "Povești", freelancing: "Freelancing" },
};

export type PostCategory = "seo" | "stories" | "freelancing";

export type Post = {
  cat: PostCategory;
  ph: string;
  read: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
};

export const posts: Post[] = [
  {
    cat: "seo",
    ph: "ecommerce SEO",
    read: { en: "12 min", ro: "12 min" },
    title: {
      en: "A practical guide: SEO for online stores",
      ro: "Ghid practic: SEO pentru magazine online",
    },
    excerpt: {
      en: "Architecture, product pages, category content — step by step.",
      ro: "Arhitectură, fișe de produs, conținut de categorie — pas cu pas.",
    },
  },
  {
    cat: "stories",
    ph: "personal story",
    read: { en: "8 min", ro: "8 min" },
    title: {
      en: "The year I quit the agency",
      ro: "Anul în care am renunțat la agenție",
    },
    excerpt: {
      en: "Why I chose to go solo, and what I was afraid to admit.",
      ro: "De ce am ales să lucrez pe cont propriu și ce mi-a fost frică să recunosc.",
    },
  },
  {
    cat: "freelancing",
    ph: "freelance life",
    read: { en: "5 min", ro: "5 min" },
    title: {
      en: "What I charge per hour as an SEO freelancer",
      ro: "Cât cer pe oră ca freelancer SEO",
    },
    excerpt: {
      en: "How I calculated my rate and why I no longer work for “exposure”.",
      ro: "Cum mi-am calculat tariful și de ce nu mai lucrez pe „vizibilitate”.",
    },
  },
  {
    cat: "seo",
    ph: "technical SEO",
    read: { en: "7 min", ro: "7 min" },
    title: {
      en: "Core Web Vitals, explained simply",
      ro: "Core Web Vitals, explicat pe înțelesul tuturor",
    },
    excerpt: {
      en: "What they are, why they matter, and what you can fix without a developer.",
      ro: "Ce sunt, de ce contează și ce poți repara fără un developer.",
    },
  },
  {
    cat: "stories",
    ph: "personal story",
    read: { en: "6 min", ro: "6 min" },
    title: {
      en: "How I learned to say “no” to the wrong projects",
      ro: "Cum am învățat să spun „nu” proiectelor greșite",
    },
    excerpt: {
      en: "Three signals I used to ignore — and what they cost me.",
      ro: "Trei semnale pe care le ignoram — și ce m-au costat.",
    },
  },
  {
    cat: "freelancing",
    ph: "freelance life",
    read: { en: "4 min", ro: "4 min" },
    title: {
      en: "My Monday morning routine",
      ro: "Rutina mea de luni dimineața",
    },
    excerpt: {
      en: "The simple system I use to plan my freelance week.",
      ro: "Sistemul simplu cu care îmi planific săptămâna de freelancer.",
    },
  },
];

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
