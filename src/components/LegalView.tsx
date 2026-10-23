"use client";

import { cookiesCopy, privacyCopy } from "../content/legal";
import { person } from "../content/profile";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";

function Paragraph({ text }: { text: string }) {
  const address = person.email;
  const parts = text.split(address);
  if (parts.length === 1) {
    return <p className="max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">{text}</p>;
  }
  return (
    <p className="max-w-[68ch] text-pretty font-body-md text-body-md text-on-surface-variant">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? (
            <a className="font-semibold text-primary" href={`mailto:${address}`}>
              {address}
            </a>
          ) : null}
        </span>
      ))}
    </p>
  );
}

export function LegalView({ kind }: { kind: "privacy" | "cookies" }) {
  const { locale } = useLocale();
  const page = kind === "privacy" ? privacyCopy[locale] : cookiesCopy[locale];

  return (
    <PageShell current={null} label={page.title}>
      <article className="flex min-w-0 flex-col gap-space-xl pb-space-lg">
        <h1 className="title-gradient text-balance font-headline text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] md:text-[2.5rem]">
          {page.title}
        </h1>
        {page.blocks.map((block) => (
          <section className="flex flex-col gap-space-sm" key={block.heading}>
            <h2 className="font-headline text-lg font-semibold text-on-surface">{block.heading}</h2>
            {block.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph} text={paragraph} />
            ))}
          </section>
        ))}
      </article>
    </PageShell>
  );
}
