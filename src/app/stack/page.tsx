import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components/PageShell";
import { person } from "../../content/profile";
import { projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Stack y arquitectura",
  description:
    "React, TypeScript, Next.js, sistemas de diseño, Storybook, Tailwind, TanStack Query, Redux Toolkit, accesibilidad, pruebas y CI.",
};

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Sistemas de diseño",
    items: ["Sistemas de diseño", "Storybook", "Tailwind"],
  },
  {
    title: "Estado",
    items: ["TanStack Query", "Redux Toolkit"],
  },
  {
    title: "Calidad",
    items: ["Accesibilidad", "Pruebas", "CI"],
  },
];

export default function StackPage() {
  return (
    <PageShell current="stack">
      <header className="flex flex-col gap-space-sm pb-space-xl">
        <p className="font-label-code text-label-code text-primary-container uppercase">
          Oficio actual
        </p>
        <h1 className="font-headline text-headline-lg-mobile font-bold text-on-surface">
          Stack y arquitectura
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {person.role} en {person.place}. Las herramientas de abajo son las que uso. Los seis patrones son las decisiones que los casos conservan.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl bg-surface-container-lowest shadow-xl">
        <div className="flex items-center justify-between border-b border-outline-variant/40 px-space-md py-space-sm">
          <p className="font-label-code text-label-code text-on-surface-variant">practice.ts</p>
          <p className="font-label-code text-label-code text-tertiary-fixed-dim">hechos</p>
        </div>
        <pre className="overflow-x-auto p-space-lg font-mono text-body-sm leading-relaxed text-on-surface">
          <code>{`export const practice = {
  engineer: "${person.name}",
  role: "Senior Frontend Engineer",
  place: "${person.place}",
  work: "${person.work}",
  terms: "${person.terms}",
  hours: "${person.hours}",
  status: "${person.status}",
  skills: [
    "React", "TypeScript", "Next.js",
    "design systems", "Storybook", "Tailwind",
    "TanStack Query", "Redux Toolkit",
    "accessibility", "testing", "CI"
  ]
}`}</code>
        </pre>
      </section>

      <section className="mt-space-xl flex flex-col gap-space-md">
        <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
          Stack
        </h2>
        <div className="grid gap-space-sm sm:grid-cols-2">
          {groups.map((group) => (
            <article
              className="rounded-xl bg-surface-container-high/70 p-space-md"
              key={group.title}
            >
              <h3 className="font-headline text-sm font-semibold text-on-surface">{group.title}</h3>
              <ul className="mt-space-sm flex flex-wrap gap-space-xs">
                {group.items.map((item) => (
                  <li
                    className="rounded-full bg-surface-container px-space-sm py-1 font-label-code text-xs text-secondary"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-space-xl flex flex-col gap-space-md">
        <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
          Patrones de los casos
        </h2>
        <div className="flex flex-col gap-space-sm">
          {projects.map((project, index) => (
            <article
              className="rounded-xl bg-surface-container-high/60 p-space-md"
              key={project.id}
            >
              <p className="font-label-code text-label-code text-primary-container">
                Patrón {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-space-xs font-headline text-sm font-semibold text-on-surface">
                {project.name}
              </h3>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                {project.decision.replaceAll("`", "")}
              </p>
              <Link
                className="mt-space-sm inline-flex min-h-11 items-center font-label-code text-label-code text-primary"
                href={`/projects#${project.id}`}
              >
                Abrir el caso
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-space-xl rounded-2xl border border-outline-variant/50 p-space-lg">
        <h2 className="font-headline text-headline-sm font-semibold text-on-surface">
          Este sitio
        </h2>
        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
          Un proyecto Next.js en la raíz. Cuatro rutas estáticas. La copia vive en módulos de TypeScript. No hay `vercel.json`. La URL pública es la que Vercel asigna en el primer deploy.
        </p>
      </section>
    </PageShell>
  );
}
