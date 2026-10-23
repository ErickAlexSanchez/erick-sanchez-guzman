"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tx } from "../content/locale";
import { projectFilters, projects } from "../content/projects";
import { buttonPrimary, chipHover } from "./classes";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";
import { ProjectCard } from "./ProjectCard";

function normalize(topic: string) {
  const requested = topic === "todos" ? "all" : topic;
  if (requested === "all" || projects.some((project) => project.id === requested)) {
    return requested;
  }
  return "missing";
}

export function ProjectsView({ topic }: { topic: string }) {
  const { copy, locale } = useLocale();
  const [active, setActive] = useState(() => normalize(topic));

  useEffect(() => {
    setActive(normalize(topic));
  }, [topic]);

  const visible =
    active === "all" ? projects : active === "missing" ? [] : projects.filter((project) => project.id === active);

  function select(id: string) {
    setActive(id);
    const href = id === "all" ? "/projects" : `/projects?topic=${id}`;
    window.history.replaceState(null, "", href);
  }

  return (
    <PageShell current="projects">
      <div className="flex min-w-0 flex-col gap-space-xl pb-space-lg">
        <header className="flex max-w-[68ch] flex-col gap-space-md">
          <h1 className="title-gradient text-balance font-headline text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] md:text-[2.5rem]">
            {copy.projects.title}
          </h1>
          <p className="text-pretty font-body-md text-body-md text-on-surface-variant">{copy.projects.intro}</p>
        </header>
        <nav aria-label={copy.projects.filterLabel} className="min-w-0">
          <ul className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => {
              const selected = filter.id === active;
              return (
                <li key={filter.id}>
                  <button
                    aria-pressed={selected}
                    className={chipHover}
                    onClick={() => select(filter.id)}
                    type="button"
                  >
                    {tx(locale, filter.label)}
                    {filter.id === "all" ? ` (${projects.length})` : ""}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        {active === "missing" ? (
          <div className="max-w-[62ch]">
            <h2 className="font-headline text-xl font-semibold text-on-surface">{copy.projects.emptyTitle}</h2>
            <p className="mt-space-sm text-pretty font-body-md text-body-md text-on-surface-variant">
              {copy.projects.emptyBody}
            </p>
            <button className={`${buttonPrimary} mt-space-lg`} onClick={() => select("all")} type="button">
              {copy.projects.clearFilter}
            </button>
          </div>
        ) : (
          <div className="flex min-w-0 flex-col gap-space-xl md:gap-space-2xl">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        <aside className="elevate rounded-2xl bg-surface-container-high p-space-lg md:p-space-xl">
          <h2 className="font-headline text-xl font-semibold text-on-surface">{copy.projects.asideTitle}</h2>
          <p className="mt-space-md max-w-[62ch] text-pretty font-body-md text-body-md text-on-surface-variant">
            {copy.projects.asideBody}
          </p>
          <Link className={`${buttonPrimary} mt-space-lg`} href="/contact">
            {copy.projects.contact}
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
