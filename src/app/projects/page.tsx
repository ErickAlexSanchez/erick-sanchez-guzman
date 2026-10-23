import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { ProjectCard } from "../../components/ProjectCard";
import { projectFilters, projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Proyectos y casos de estudio",
  description:
    "Seis versiones de portafolio. Cada título es la decisión de arquitectura que el caso conserva.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tema?: string }>;
}) {
  const { tema } = await searchParams;
  const active = projectFilters.some((filter) => filter.id === tema) ? tema : "todos";
  const visible =
    !active || active === "todos"
      ? projects
      : projects.filter((project) => project.id === active);

  return (
    <PageShell current="projects">
      <header className="flex flex-col gap-space-sm pb-space-lg">
        <p className="font-label-code text-label-code text-primary-container uppercase">
          Índice de casos
        </p>
        <h1 className="font-headline text-headline-lg-mobile font-bold text-on-surface">
          Proyectos y casos de estudio
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Cada caso es una versión de portafolio. Conserva la decisión de arquitectura, con otro alcance, otra marca y otros datos. No es el código del cliente.
        </p>
      </header>
      <nav aria-label="Filtrar casos" className="-mx-margin overflow-x-auto px-margin pb-space-lg">
        <ul className="flex w-max gap-space-xs">
          {projectFilters.map((filter) => {
            const selected = filter.id === active;
            const href = filter.id === "todos" ? "/projects" : `/projects?tema=${filter.id}`;
            return (
              <li key={filter.id}>
                <Link
                  aria-current={selected ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-space-md font-label-code text-label-code ${
                    selected
                      ? "bg-primary-container text-on-primary-fixed"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                  href={href}
                >
                  {filter.label}
                  {filter.id === "todos" ? ` (${projects.length})` : ""}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col gap-space-lg">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <aside className="mt-space-xl rounded-2xl bg-surface-container-high/80 p-space-lg">
        <p className="font-label-code text-label-code text-tertiary-fixed-dim uppercase">
          Disponible ahora
        </p>
        <h2 className="mt-space-sm font-headline text-headline-sm font-semibold text-on-surface">
          Seis esfuerzos, un liderazgo de frontend.
        </h2>
        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
          Elemental 4 Web, 2020–2026. Contrato directo o EOR. Hora del Centro, con cruce a la hora del Este de EE. UU.
        </p>
        <Link
          className="mt-space-md inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary-container to-secondary px-space-lg font-label-code text-label-code font-bold text-on-secondary-fixed uppercase"
          href="/contact"
        >
          Ir a contacto
        </Link>
      </aside>
    </PageShell>
  );
}
