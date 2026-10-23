import type { Project } from "../content/projects";
import { RichText } from "./RichText";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="flex flex-col gap-space-md rounded-2xl bg-surface-container-high/85 p-space-lg shadow-xl"
      id={project.id}
    >
      <div className="flex items-center justify-between gap-space-sm">
        <p className="font-label-code text-label-code text-primary-container uppercase">
          {project.eyebrow}
        </p>
        <p className="font-label-code text-label-code text-on-surface-variant">
          {project.year}
        </p>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md">
        <div className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rounded-full bg-primary-container/10 blur-3xl" />
        <p className="relative font-mono text-body-sm text-on-surface">
          <RichText text={project.decision} />
        </p>
      </div>
      <div className="flex flex-col gap-space-xs">
        <h2 className="font-headline text-headline-sm font-bold text-on-surface">
          {project.name}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          <RichText text={project.summary} />
        </p>
      </div>
      <dl className="grid grid-cols-1 gap-space-sm sm:grid-cols-3">
        {project.facts.map((fact) => (
          <div
            className="rounded-xl bg-surface-container px-space-sm py-space-sm"
            key={fact.label}
          >
            <dt className="font-label-code text-[0.65rem] text-on-surface-variant uppercase">
              {fact.label}
            </dt>
            <dd className="mt-space-xs font-sans text-sm font-semibold text-on-surface">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
      <ul className="flex flex-wrap gap-space-xs">
        {project.tags.map((tag) => (
          <li
            className="rounded-full bg-surface-container px-space-sm py-1 font-label-code text-xs text-primary"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-space-sm">
        {project.live ? (
          <a
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-space-xs rounded-md bg-gradient-to-r from-primary-container to-secondary px-space-md font-label-code text-label-code font-bold tracking-wider text-on-secondary-fixed uppercase"
            href={project.live.href}
            rel="noopener noreferrer"
          >
            {project.live.label}
            <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
        ) : null}
        {project.github ? (
          <a
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-space-xs rounded-md bg-surface-container-highest/70 px-space-md font-label-code text-label-code font-bold tracking-wider text-on-surface uppercase"
            href={project.github.href}
            rel="noopener noreferrer"
          >
            {project.github.label}
            <span className="material-symbols-outlined text-base">code</span>
          </a>
        ) : (
          <p className="inline-flex min-h-11 items-center font-label-code text-label-code text-on-surface-variant">
            Carpeta local {project.folder}. Sin remoto público.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-space-sm">
        {project.paragraphs.map((paragraph) => (
          <p className="font-body-sm text-body-sm text-on-surface-variant" key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
    </article>
  );
}
