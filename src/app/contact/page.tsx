import type { Metadata } from "next";
import { MailForm } from "../../components/MailForm";
import { PageShell } from "../../components/PageShell";
import { person } from "../../content/profile";

export const metadata: Metadata = {
  title: "Contacto y trayectoria",
  description:
    "Correo, teléfono y LinkedIn de Erick Alexander Sánchez Guzmán. Elemental 4 Web, 2020–2026. Disponible ahora.",
};

const channels = [
  { href: person.github, label: "GitHub", value: "ErickAlexSanchez", icon: "terminal" },
  { href: person.linkedIn, label: "LinkedIn", value: person.name, icon: "badge" },
  { href: `mailto:${person.email}`, label: "Correo", value: person.email, icon: "mail" },
  { href: person.phoneHref, label: "Teléfono", value: person.phoneDisplay, icon: "call" },
];

export default function ContactPage() {
  return (
    <PageShell current="contact">
      <section className="relative overflow-hidden rounded-2xl bg-surface-container-high/80 p-space-lg">
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-container/10 blur-3xl" />
        <p className="font-label-code text-label-code text-tertiary-fixed-dim uppercase">
          {person.status}
        </p>
        <h1 className="mt-space-sm font-headline text-headline-lg-mobile font-bold text-on-surface">
          {person.name}
        </h1>
        <p className="mt-space-xs font-headline text-sm font-semibold text-primary">{person.role}</p>
        <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
          {person.place} · {person.work} · {person.terms}
        </p>
        <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{person.hours}</p>
        <div className="mt-space-md flex flex-col gap-space-sm sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-between gap-space-sm rounded-lg bg-gradient-to-r from-primary-container to-secondary px-space-lg font-headline text-sm font-semibold text-on-primary-fixed"
            href={`mailto:${person.email}`}
          >
            Escribir por correo
            <span className="material-symbols-outlined text-lg">mail</span>
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-between gap-space-sm rounded-lg bg-surface-container-highest px-space-lg font-headline text-sm font-semibold text-on-surface"
            href={person.phoneHref}
          >
            Llamar {person.phoneDisplay}
            <span className="material-symbols-outlined text-lg">call</span>
          </a>
        </div>
      </section>

      <section className="mt-space-xl">
        <div className="mb-space-md flex items-end justify-between">
          <h2 className="font-headline text-headline-sm font-semibold text-on-surface">
            Trayectoria
          </h2>
          <p className="font-label-code text-label-code text-on-surface-variant">
            {person.trajectory.years}
          </p>
        </div>
        <ol className="flex flex-col gap-space-sm">
          <li className="rounded-xl border-l-2 border-primary-container bg-surface-container-high/60 p-space-md">
            <p className="font-label-code text-label-code text-primary-container">
              {person.trajectory.years}
            </p>
            <h3 className="mt-space-xs font-headline text-sm font-semibold text-on-surface">
              {person.trajectory.role}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {person.trajectory.organization}. Los clientes de esos seis esfuerzos no se nombran.
            </p>
          </li>
          {person.education.map((item) => (
            <li
              className="rounded-xl border-l-2 border-outline-variant bg-surface-container/80 p-space-md"
              key={item}
            >
              <h3 className="font-headline text-sm font-semibold text-on-surface">{item}</h3>
            </li>
          ))}
        </ol>
        <ul className="mt-space-md flex flex-wrap gap-space-sm">
          {person.languages.map((language) => (
            <li
              className="rounded-full bg-surface-container-high px-space-md py-space-xs font-label-code text-label-code text-secondary"
              key={language.name}
            >
              {language.name} · {language.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-space-xl rounded-2xl bg-surface-container p-space-lg">
        <h2 className="font-headline text-headline-sm font-semibold text-on-surface">
          Escribir
        </h2>
        <p className="mt-space-xs mb-space-md font-body-sm text-body-sm text-on-surface-variant">
          El formulario abre tu correo hacia {person.email}. No hay un buzón en este sitio.
        </p>
        <MailForm email={person.email} />
      </section>

      <section className="mt-space-xl">
        <h2 className="font-label-code text-label-code text-on-surface-variant uppercase">
          Canales
        </h2>
        <ul className="mt-space-sm grid gap-space-sm sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                className="flex min-h-11 items-center gap-space-sm rounded-xl bg-surface-container-high/70 px-space-md py-space-sm"
                href={channel.href}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="material-symbols-outlined text-primary-container">{channel.icon}</span>
                <span className="min-w-0">
                  <span className="block font-label-code text-label-code text-on-surface-variant uppercase">
                    {channel.label}
                  </span>
                  <span className="block truncate font-body-sm text-body-sm text-on-surface">
                    {channel.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-space-xl font-label-code text-label-code text-on-surface-variant">
        {person.name} · {person.place}
      </p>
    </PageShell>
  );
}
