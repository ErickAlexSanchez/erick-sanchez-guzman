"use client";

import { person } from "../content/profile";
import { buttonPrimary } from "./classes";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";

export function ContactView() {
  const { copy } = useLocale();
  const channels = [
    { href: person.github, label: copy.contact.channelGithub, value: "ErickAlexSanchez", icon: "terminal" },
    { href: person.linkedIn, label: copy.contact.channelLinkedIn, value: person.name, icon: "badge" },
    { href: `mailto:${person.email}`, label: copy.contact.channelEmail, value: person.email, icon: "mail" },
  ];

  return (
    <PageShell current="contact">
      <div className="flex min-w-0 flex-col gap-space-xl pb-space-lg md:gap-space-2xl">
        <section className="elevate rounded-2xl bg-surface-container-high p-space-lg md:p-space-xl">
          <h1 className="title-gradient text-balance font-headline text-[2rem] font-bold leading-[1.2] tracking-[-0.02em]">
            {person.name}
          </h1>
          <p className="mt-2 font-headline text-base font-semibold text-primary">{copy.role}</p>
          <p className="mt-2 font-label-code text-label-code text-tertiary uppercase">{copy.status}</p>
          <p className="mt-space-md max-w-[62ch] text-pretty font-body-md text-body-md text-on-surface-variant">
            {copy.contact.terms}
          </p>
          <a className={`${buttonPrimary} mt-space-lg`} href={`mailto:${person.email}`}>
            {copy.contact.emailCta}
            <span aria-hidden="true" className="material-symbols-outlined text-lg">
              mail
            </span>
          </a>
        </section>

        <section>
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.contact.background}</h2>
          <ol className="mt-space-md flex flex-col gap-space-md">
            <li className="border-l border-outline-variant pl-4">
              <p className="font-label-code text-label-code text-primary">{person.years}</p>
              <h3 className="mt-1 font-headline text-base font-semibold text-on-surface">
                {copy.contact.leadTitle}
              </h3>
              {copy.contact.leadLines.map((line) => (
                <p
                  className="mt-2 max-w-[62ch] text-pretty font-body-md text-body-md text-on-surface-variant"
                  key={line}
                >
                  {line}
                </p>
              ))}
            </li>
            {copy.credentials.map((item) => (
              <li className="border-l border-outline-variant pl-4" key={item}>
                <h3 className="font-headline text-base font-semibold text-on-surface">{item}</h3>
              </li>
            ))}
          </ol>
          <ul className="mt-space-lg flex flex-wrap gap-2">
            {copy.languages.map((language) => (
              <li
                className="rounded-full bg-surface-container-high px-3 py-2 font-label-code text-xs text-secondary"
                key={language.name}
              >
                {language.name} · {language.level}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-lg font-semibold text-on-surface">{copy.contact.channels}</h2>
          <ul className="mt-space-md grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  className="card-hover flex min-h-11 items-center gap-3 rounded-xl bg-surface-container-high px-4 py-3"
                  href={channel.href}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-primary">
                    {channel.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-label-code text-[0.6875rem] text-on-surface-variant uppercase">
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
      </div>
    </PageShell>
  );
}
