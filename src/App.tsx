import { useEffect, useState } from "react";
import { chrome, sections, type Locale, type SectionId } from "./chrome";
import { boundary, studies } from "./studies";

const THEME_KEY = "portfolio-theme";
const LOCALE_KEY = "portfolio-locale";

type Theme = "dark" | "light";

const email = "protechnologyea@gmail.com";
const phone = "+52 56 5731 5438";
const phoneHref = "tel:+525657315438";
const linkedIn =
  "https://www.linkedin.com/in/erick-alexander-s%C3%A1nchez-guzm%C3%A1n-5029591ba/";

function readTheme(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === "light" ? "light" : "dark";
}

function readLocale(): Locale {
  return document.documentElement.lang === "es" ? "es" : "en";
}

export function App() {
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [locale, setLocale] = useState<Locale>(readLocale);
  const [active, setActive] = useState<SectionId>("about");
  const t = chrome[locale];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      const bar = document.querySelector(".bar");
      const barBottom = bar?.getBoundingClientRect().bottom ?? 0;
      const line = Math.max(window.innerHeight * 0.28, barBottom + 8);
      let current: SectionId = "about";
      for (const id of sections) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <header className="identity">
        <div className="bar">
        <h1>
          <span className="name-line">Erick Alexander</span>
          <span className="name-line">Sánchez Guzmán</span>
        </h1>
        <p className="role">{t.role}</p>
        <p className="status">{t.available}</p>
        <a className="mail" href={`mailto:${email}`}>
          {email}
        </a>
        <nav aria-label={locale === "es" ? "Secciones" : "Sections"}>
          <ul>
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
                  <span className="notch" aria-hidden="true" />
                  {t[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hem">
          <fieldset>
            <legend>{t.theme}</legend>
            <button
              type="button"
              aria-pressed={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              {t.dark}
            </button>
            <button
              type="button"
              aria-pressed={theme === "light"}
              onClick={() => setTheme("light")}
            >
              {t.light}
            </button>
          </fieldset>
          <fieldset>
            <legend>{t.language}</legend>
            <button
              type="button"
              lang="en"
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              lang="es"
              aria-pressed={locale === "es"}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
          </fieldset>
        </div>
        </div>
        <p className="place">{t.place}</p>
        <p className="reach">
          <a href={phoneHref}>
            <span className="reach-label">{t.phone}</span> {phone}
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="visually-hidden"> ({t.newTab})</span>
          </a>
        </p>
      </header>
      <main id="content" tabIndex={-1}>
        <section id="about" className="section">
          <h2>{t.about}</h2>
          <p lang="en">
            Available now for 100% remote work with US and UK companies, from
            Mexico City, as a contractor or through an employer of record.
            Central Time, with overlap for US Eastern hours. Bachelor’s in
            Systems Engineering. Master’s in Software Architecture, in
            progress. Meta Front-End certificate. IBM Full Stack certificate.
            Spanish, native. English, fluent (C1).
          </p>
          <h3>{t.skills}</h3>
          <p lang="en">
            React, TypeScript, Next.js, design systems, Storybook, Tailwind,
            TanStack Query, Redux Toolkit, accessibility, testing, CI.
          </p>
        </section>

        <section id="experience" className="section">
          <h2>{t.experience}</h2>
          <p lang="en">
            Senior Frontend Engineer, Elemental 4 Web. Remote, with US and
            international product teams, 2020–2026. Frontend lead on six
            product efforts. React, TypeScript, and Next.js, including design
            systems, accessibility, tests, and CI. Mentors engineers through
            pairing and design reviews.
          </p>
        </section>

        <section id="work" className="section">
          <h2>{t.work}</h2>
          <p lang="en" className="boundary">
            {boundary}
          </p>
          <p>{t.demos}</p>
          {studies.map((study) => (
            <article key={study.repo} className="study">
              <h3 lang="en">
                <span className="num">{study.number}</span>
                <a href={study.href} target="_blank" rel="noopener noreferrer">
                  {study.headline}
                  <span className="visually-hidden"> ({t.newTab})</span>
                </a>
              </h3>
              <p className="locator">
                <span lang="en">{study.brand}</span>
                <span aria-hidden="true"> · </span>
                <span>
                  {t.repo} <span lang="en">{study.repo}</span>
                </span>
              </p>
              <p lang="en">{study.decision}</p>
              <h4>{t.why}</h4>
              <p lang="en">{study.matters}</p>
              <h4>{t.omitted}</h4>
              <p lang="en">{study.omitted}</p>
              <h4>{t.open}</h4>
              <ul>
                {study.open.map((demo) => (
                  <li key={demo.href} lang="en">
                    <a href={demo.href} target="_blank" rel="noopener noreferrer">
                      {demo.label}
                      <span className="visually-hidden"> ({t.newTab})</span>
                    </a>
                    <span> {demo.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="contact" className="section close">
          <h2>{t.contact}</h2>
          <p className="status-line">{t.available}</p>
          <a className="mail" href={`mailto:${email}`}>
            {email}
          </a>
          <p className="reach">
            <a href={phoneHref}>
              <span className="reach-label">{t.phone}</span> {phone}
            </a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="visually-hidden"> ({t.newTab})</span>
            </a>
          </p>
          <p>{t.place}</p>
        </section>
      </main>
    </>
  );
}
