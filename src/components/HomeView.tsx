"use client";

import Link from "next/link";
import { tx } from "../content/locale";
import { person } from "../content/profile";
import { projects } from "../content/projects";
import { buttonPrimary, buttonQuiet, chipHover } from "./classes";
import { CopyEmail } from "./CopyEmail";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";
import { RichText } from "./RichText";

export function HomeView() {
  const { copy, locale } = useLocale();
  const featured = projects[0];

  return (
    <PageShell current="home">
      <div className="flex min-w-0 flex-col gap-space-xl pb-space-lg md:gap-space-2xl">
        <section className="flex flex-col gap-space-md">
          <p className="w-fit rounded-full bg-surface-container-high px-3 py-2 font-label-code text-label-code text-primary uppercase">
            {copy.role}
          </p>
          <h1 className="title-gradient text-balance font-headline text-[2rem] font-extrabold leading-[1.2] tracking-[-0.02em] md:text-[2.6rem]">
            {copy.home.title}
          </h1>
          <p className="max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">
            {copy.home.lead}
          </p>
          <ul aria-label={copy.home.skillsLabel} className="flex max-w-full flex-wrap gap-2">
            {copy.home.skills.map((skill) => (
              <li key={skill.label}>
                <Link className={chipHover} href={skill.href} scroll={false}>
                  {skill.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link className={buttonPrimary} href="/projects" scroll={false}>
              {copy.home.seeProjects}
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
            <a className={buttonQuiet} href={person.github} rel="noopener noreferrer" target="_blank">
              <span aria-hidden="true" className="material-symbols-outlined text-lg text-primary">
                code
              </span>
              {copy.github}
            </a>
            <CopyEmail />
          </div>
        </section>

        {featured ? (
          <section>
            <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.home.featured}</h2>
            <article className="elevate card-hover mt-space-md rounded-2xl bg-surface-container-high p-space-lg md:p-space-xl">
              <p className="font-label-code text-label-code text-primary uppercase">{featured.name}</p>
              <h3 className="mt-space-md max-w-[62ch] text-balance font-headline text-xl font-semibold leading-snug tracking-[-0.02em] text-on-surface">
                <RichText text={tx(locale, featured.decision)} />
              </h3>
              <p className="mt-space-md max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">
                <RichText text={tx(locale, featured.summary)} />
              </p>
              <ul className="mt-space-lg flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <li
                    className="rounded-full bg-surface-container px-3 py-1 font-label-code text-xs text-primary"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Link className={`${buttonQuiet} mt-space-lg`} href={`/projects#${featured.id}`}>
                {copy.readCase}
                <span aria-hidden="true" className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </article>
          </section>
        ) : null}

        <section>
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.home.practice}</h2>
          <ul className="mt-space-md flex flex-col gap-3">
            {copy.home.practiceItems.map((item) => (
              <li
                className="card-hover flex min-w-0 items-start gap-4 rounded-xl bg-surface-container-high p-4 md:p-5"
                key={item.title}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </span>
                <div className="min-w-0">
                  <h3 className="font-headline text-base font-semibold text-on-surface">{item.title}</h3>
                  <p className="mt-1 max-w-[62ch] text-pretty font-body-md text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="elevate card-hover rounded-2xl bg-surface-container-high p-space-lg md:p-space-xl">
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.home.workTitle}</h2>
          <p className="mt-space-md max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface">
            {copy.home.workBody}
          </p>
        </section>
      </div>
    </PageShell>
  );
}
