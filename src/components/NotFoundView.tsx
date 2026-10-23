"use client";

import Link from "next/link";
import { buttonPrimary } from "./classes";
import { useLocale } from "./LocaleProvider";
import { PageShell } from "./PageShell";

export function NotFoundView() {
  const { copy } = useLocale();

  return (
    <PageShell current="home">
      <h1 className="title-gradient max-w-[16ch] text-balance font-headline text-[2rem] font-bold leading-[1.2] tracking-[-0.02em]">
        {copy.notFound.title}
      </h1>
      <p className="mt-space-md max-w-[62ch] text-pretty font-body-md text-body-md text-on-surface-variant">
        {copy.notFound.body}
      </p>
      <Link className={`${buttonPrimary} mt-space-lg`} href="/" scroll={false}>
        {copy.notFound.home}
      </Link>
    </PageShell>
  );
}
