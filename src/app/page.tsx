import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmail } from "../components/CopyEmail";
import { PageShell } from "../components/PageShell";
import { RichText } from "../components/RichText";
import { person } from "../content/profile";
import { projects } from "../content/projects";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Ingeniero frontend senior en Ciudad de México. Seis casos, cada uno con la decisión de arquitectura que conserva.",
};

const metrics = [
  { label: "Trayectoria", value: person.trajectory.years, note: person.trajectory.organization },
  { label: "Alcance", value: "Seis", note: "esfuerzos como frontend lead" },
  { label: "Lugar", value: "100%", note: `${person.work}, ${person.place}` },
  { label: "Estado", value: "Ahora", note: person.terms },
];

const principles = [
  {
    icon: "token",
    title: "Sistemas de diseño",
    text: "Paquetes con versión fijada, Storybook y Tailwind. En Lumen, marketing y account no comparten la misma edición.",
  },
  {
    icon: "accessibility_new",
    title: "Accesibilidad",
    text: "Foco visible, objetivos de 44 px y contraste AA en este sitio. Lumen corre axe en Storybook antes de mover una versión.",
  },
  {
    icon: "science",
    title: "Pruebas y CI",
    text: "Las compuertas viven en cada caso: la firma del webhook, el saldo de créditos, el token de video y la clave de idempotencia.",
  },
];

export default function HomePage() {
  const featured = projects[0];
  if (!featured) {
    return null;
  }

  return (
    <PageShell current="home">
      <div className="relative flex flex-col gap-space-xl pb-space-2xl">
        <div className="pointer-events-none absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary-container/10 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-16 h-56 w-56 rounded-full bg-secondary-container/15 blur-3xl" />
        <section className="relative z-10 flex flex-col gap-space-md">
          <p className="inline-flex w-fit items-center gap-space-xs rounded-full bg-surface-container-high/80 px-space-md py-space-xs shadow-md">
            <span className="text-xs text-tertiary">✦</span>
            <span className="font-label-code text-label-code text-primary-container uppercase">
              {person.role}
            </span>
          </p>
          <h1 className="font-headline text-headline-lg-mobile font-extrabold tracking-tight text-on-surface">
            Sistemas de{" "}
            <span className="bg-gradient-to-r from-primary-container via-primary to-secondary bg-clip-text text-transparent">
              diseño
            </span>{" "}
            y frontends en React, TypeScript y Next.js.
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {person.name}. {person.place}, {person.work.toLowerCase()}, {person.terms}. {person.hours} {person.status}.
          </p>
          <div className="flex flex-col gap-space-sm pt-space-xs sm:flex-row sm:items-center">
            <Link
              className="inline-flex min-h-11 w-full items-center justify-center gap-space-xs rounded-xl bg-gradient-to-r from-primary-container via-primary to-[#9eb0ff] px-space-lg py-space-md font-headline text-sm font-semibold text-on-primary-fixed shadow-lg sm:w-auto"
              href="/projects"
            >
              Explorar proyectos
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <div className="flex items-center gap-space-sm">
              <a
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-space-xs rounded-xl bg-surface-container-high/90 px-space-md font-headline text-sm font-medium text-on-surface sm:flex-none"
                href={person.github}
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-lg text-primary-container">code</span>
                GitHub
              </a>
              <CopyEmail email={person.email} />
            </div>
          </div>
        </section>

        <section className="relative z-10 flex flex-col gap-space-sm">
          <div className="flex items-center justify-between px-space-xs">
            <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
              Hechos
            </h2>
            <span className="font-label-code text-label-code text-tertiary-fixed-dim">
              {person.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-space-sm">
            {metrics.map((metric) => (
              <article
                className="flex flex-col justify-between rounded-xl bg-surface-container-high/70 p-space-md shadow-md"
                key={metric.label}
              >
                <h3 className="font-label-code text-label-code text-on-surface-variant uppercase">
                  {metric.label}
                </h3>
                <p className="my-space-xs font-mono text-headline-lg-mobile font-bold tracking-tight text-on-surface">
                  {metric.value}
                </p>
                <p className="font-body-sm text-xs text-on-surface-variant">{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 flex flex-col gap-space-sm" id="proyectos">
          <div className="flex items-center justify-between px-space-xs">
            <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
              Caso de cabecera
            </h2>
            <span className="font-label-code text-label-code text-primary-container">
              {featured.name}
            </span>
          </div>
          <article className="overflow-hidden rounded-2xl bg-surface-container-high/85 shadow-xl">
            <div className="relative h-52 overflow-hidden bg-surface-container-lowest p-space-lg">
              <p className="font-mono text-sm text-primary">
                <RichText text={featured.decision} />
              </p>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-container-high to-transparent" />
            </div>
            <div className="flex flex-col gap-space-md p-space-lg">
              <h3 className="font-headline text-headline-sm font-bold text-on-surface">
                {featured.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <RichText text={featured.summary} />
              </p>
              <ul className="flex flex-wrap gap-space-xs">
                {featured.tags.map((tag) => (
                  <li
                    className="rounded-full bg-surface-container px-space-sm py-0.5 font-label-code text-xs text-primary"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                className="inline-flex min-h-11 items-center justify-between rounded-xl bg-surface-container-highest/60 px-space-md font-headline text-sm font-semibold text-on-surface"
                href={`/projects#${featured.id}`}
              >
                Ver el caso
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </article>
        </section>

        <section className="relative z-10 flex flex-col gap-space-md">
          <h2 className="px-space-xs font-label-code text-label-code text-on-surface-variant uppercase">
            Oficio
          </h2>
          <div className="flex flex-col gap-space-sm">
            {principles.map((item) => (
              <article
                className="flex items-start gap-space-md rounded-xl bg-surface-container-high/60 p-space-md"
                key={item.title}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-container/15 text-primary-container">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </span>
                <div>
                  <h3 className="font-headline text-sm font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 rounded-2xl bg-gradient-to-br from-surface-container-high/90 via-surface-container to-surface-container-high/70 p-space-lg shadow-lg">
          <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
            Condiciones
          </h2>
          <p className="mt-space-md font-body-md text-body-md text-on-surface">
            {person.status}. {person.terms}. {person.hours} {person.place}, {person.work.toLowerCase()}.
          </p>
          <p className="mt-space-md border-t border-surface-container-highest/40 pt-space-md font-body-sm text-body-sm text-on-surface-variant">
            {person.trajectory.organization}, {person.trajectory.years}. {person.trajectory.role}. Los clientes de ese trabajo no se nombran aquí.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
