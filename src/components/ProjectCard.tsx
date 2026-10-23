"use client";

import { tx } from "../content/locale";
import { fill } from "../content/messages";
import type { Project } from "../content/projects";
import { buttonPrimary, buttonQuiet } from "./classes";
import { useLocale } from "./LocaleProvider";
import { RichText } from "./RichText";

export function ProjectCard({ project }: { project: Project }) {
  const { copy, locale } = useLocale();

  return (
    <article
      className="elevate card-hover flex min-w-0 scroll-mt-28 flex-col rounded-2xl bg-surface-container-high p-space-lg md:p-space-xl"
      id={project.id}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-label-code text-label-code text-primary uppercase">{project.name}</p>
        <p className="shrink-0 font-label-code text-label-code text-on-surface-variant">
          {tx(locale, project.category)}
        </p>
      </div>
      <h2 className="mt-space-lg max-w-[62ch] text-balance font-headline text-xl font-semibold leading-snug tracking-[-0.02em] text-on-surface">
        <RichText text={tx(locale, project.decision)} />
      </h2>
      <p className="mt-space-md max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">
        <RichText text={tx(locale, project.summary)} />
      </p>
      <dl className="mt-space-lg grid gap-3 sm:grid-cols-3">
        {project.facts.map((fact) => (
          <div className="min-w-0 rounded-xl bg-surface-container px-3 py-3" key={fact.label.en}>
            <dt className="font-label-code text-[0.6875rem] text-on-surface-variant uppercase">
              {tx(locale, fact.label)}
            </dt>
            <dd className="mt-1 text-sm leading-snug font-semibold break-words text-on-surface">
              {tx(locale, fact.value)}
            </dd>
          </div>
        ))}
      </dl>
      <ul className="mt-space-lg flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            className="rounded-full bg-surface-container px-3 py-1 font-label-code text-xs text-primary"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-space-lg flex flex-wrap items-center gap-3">
        {project.live ? (
          <a className={buttonPrimary} href={project.live} rel="noopener noreferrer" target="_blank">
            {fill(copy.liveName, { name: project.name })}
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              open_in_new
            </span>
          </a>
        ) : null}
        {project.github ? (
          <a className={buttonQuiet} href={project.github} rel="noopener noreferrer" target="_blank">
            {fill(copy.githubName, { name: project.name })}
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              code
            </span>
          </a>
        ) : null}
        {!project.github && !project.live && project.folder ? (
          <p className="max-w-[48ch] text-pretty font-body-sm text-body-sm text-on-surface-variant">
            {fill(copy.noRepository, { folder: project.folder })}
          </p>
        ) : null}
      </div>
      <div className="mt-space-xl flex max-w-[68ch] flex-col gap-space-md">
        {project.paragraphs.map((paragraph, index) => (
          <p className="text-pretty font-body-md text-body-md text-on-surface-variant" key={index}>
            <RichText text={tx(locale, paragraph)} />
          </p>
        ))}
      </div>
    </article>
  );
}
