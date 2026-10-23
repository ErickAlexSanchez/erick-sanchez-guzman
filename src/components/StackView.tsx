"use client";

import Link from "next/link";
import { tx } from "../content/locale";
import { person } from "../content/profile";
import { projects } from "../content/projects";
import { chipHover } from "./classes";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";
import { RichText } from "./RichText";

function practiceCode(role: string, work: string, terms: string, status: string) {
  return `export const practice = {
  engineer: "${person.name}",
  role: "${role}",
  work: "${work}",
  terms: "${terms}",
  status: "${status}"
}`;
}

export function StackView() {
  const { copy, locale } = useLocale();
  const code = practiceCode(copy.role, copy.stack.work, copy.stack.terms, copy.status);

  return (
    <PageShell current="stack">
      <div className="flex min-w-0 flex-col gap-space-xl pb-space-lg md:gap-space-2xl">
        <header className="flex max-w-[68ch] flex-col gap-space-md">
          <h1 className="title-gradient text-balance font-headline text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] md:text-[2.5rem]">
            {copy.stack.title}
          </h1>
          <p className="text-pretty font-body-md text-body-md text-on-surface-variant">{copy.stack.intro}</p>
        </header>

        <section className="elevate min-w-0 overflow-hidden rounded-2xl bg-surface-container-lowest">
          <div className="flex items-center justify-between gap-4 border-b border-outline-variant/50 px-space-lg py-3">
            <p className="font-label-code text-label-code text-on-surface-variant">practice.ts</p>
            <p className="font-label-code text-label-code text-tertiary">{copy.stack.windowLabel}</p>
          </div>
          <pre className="max-w-full overflow-x-auto p-space-lg font-mono text-body-sm leading-relaxed text-on-surface">
            <code>{code}</code>
          </pre>
        </section>

        <section>
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.stack.groupsTitle}</h2>
          <div className="mt-space-md grid gap-3 sm:grid-cols-2">
            {copy.stack.groups.map((group) => (
              <article
                className="min-w-0 scroll-mt-28 rounded-xl bg-surface-container-high p-4"
                id={group.id}
                key={group.id}
              >
                <h3 className="font-headline text-sm font-semibold text-on-surface">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li className={`${chipHover} text-secondary`} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.stack.decisionsTitle}</h2>
          <div className="mt-space-md flex flex-col gap-3">
            {projects.map((project) => (
              <article className="card-hover rounded-xl bg-surface-container-high p-space-lg" key={project.id}>
                <h3 className="font-headline text-base font-semibold text-on-surface">{project.name}</h3>
                <p className="mt-space-sm max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">
                  <RichText text={tx(locale, project.decision)} />
                </p>
                <Link
                  className="mt-space-sm inline-flex min-h-11 items-center gap-1 font-semibold text-primary"
                  href={`/projects#${project.id}`}
                >
                  {copy.readCase}
                  <span aria-hidden="true" className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[68ch] rounded-2xl border border-outline-variant/60 p-space-lg md:p-space-xl">
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.stack.siteTitle}</h2>
          <p className="mt-space-md text-pretty font-body-md text-body-md text-on-surface-variant">
            {copy.stack.siteBody}
          </p>
        </section>
      </div>
    </PageShell>
  );
}
