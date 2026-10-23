"use client";

import { useLayoutEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { person } from "../content/profile";
import { routes, type RouteId } from "../content/routes";
import { useLocale } from "./LocaleProvider";
import { Mark } from "./Mark";

function pinScroll() {
  const hash = window.location.hash;
  if (hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      target.scrollIntoView({ block: "start", behavior: "instant" });
      return;
    }
  }
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.getElementById("content")?.focus({ preventScroll: true });
}

function ThemeSwitch() {
  const { copy, theme, setTheme } = useLocale();
  const label =
    theme === "dark" ? copy.themeToLight : theme === "light" ? copy.themeToDark : copy.theme;

  return (
    <button
      aria-label={label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-container-high text-on-surface"
      onClick={() => {
        const explicit = document.documentElement.dataset.theme;
        const current =
          explicit === "light" || explicit === "dark"
            ? explicit
            : window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";
        setTheme(current === "dark" ? "light" : "dark");
      }}
      type="button"
    >
      <span aria-hidden="true" className="material-symbols-outlined theme-when-dark text-xl">
        light_mode
      </span>
      <span aria-hidden="true" className="material-symbols-outlined theme-when-light text-xl">
        dark_mode
      </span>
    </button>
  );
}

function LocaleSwitch() {
  const { copy, locale, setLocale } = useLocale();
  const item =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 font-label-code text-xs";

  return (
    <div aria-label={copy.language} className="inline-flex shrink-0 items-center gap-0.5" role="group">
      <button
        aria-label={copy.english}
        aria-pressed={locale === "en"}
        className={`${item} ${locale === "en" ? "bg-primary-container text-on-primary-fixed" : "text-on-surface"}`}
        onClick={() => setLocale("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-label={copy.spanish}
        aria-pressed={locale === "es"}
        className={`${item} ${locale === "es" ? "bg-primary-container text-on-primary-fixed" : "text-on-surface"}`}
        onClick={() => setLocale("es")}
        type="button"
      >
        ES
      </button>
    </div>
  );
}

export function PageShell({
  current,
  label,
  children,
}: {
  current: RouteId | null;
  label?: string;
  children: ReactNode;
}) {
  const { copy } = useLocale();
  const pathname = usePathname();
  const query = useSearchParams().toString();

  useLayoutEffect(() => {
    pinScroll();
    const frame = requestAnimationFrame(pinScroll);
    const timer = window.setTimeout(pinScroll, 80);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname, query]);

  return (
    <>
      <a className="skip" href="#content">
        {copy.skip}
      </a>
      <header className="chrome-top fixed inset-x-0 top-0 z-50 h-16 bg-surface-container-lowest/92 backdrop-blur-2xl">
        <div className="shell flex h-full items-center gap-2 px-margin">
          <Link
            className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-lg"
            href="/"
            scroll={false}
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }
            }}
          >
            <Mark />
            <span className="min-w-0">
              <span className="flex items-center gap-1">
                <span className="truncate font-headline text-sm font-semibold text-on-surface">
                  {person.name}
                </span>
                <span className="hidden shrink-0 font-label-code text-label-code text-primary md:inline">
                  // dev
                </span>
              </span>
              <span className="block truncate font-label-code text-[0.6875rem] uppercase text-on-surface-variant">
                {label ?? (current ? copy.nav[current] : copy.nav.home)}
              </span>
            </span>
          </Link>
          <p className="hidden shrink-0 items-center gap-2 rounded-full bg-surface-container-high px-3 text-tertiary lg:flex">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary-container opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
            </span>
            <span className="font-label-code text-label-code whitespace-nowrap">{copy.status}</span>
          </p>
          <ThemeSwitch />
          <LocaleSwitch />
          <Link
            aria-label={copy.contactLink}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-container-high sm:inline-flex"
            href="/contact"
            scroll={false}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest font-label-code text-[0.7rem] text-primary">
              EG
            </span>
          </Link>
        </div>
      </header>
      <main
        className="shell flex min-w-0 flex-col px-margin pt-28 pb-[calc(7.5rem+env(safe-area-inset-bottom))] focus:outline-none"
        id="content"
        tabIndex={-1}
      >
        {children}
        <nav aria-label={copy.legalNav} className="mt-space-xl flex flex-wrap gap-x-5 gap-y-1">
          <Link className="inline-flex min-h-11 items-center font-semibold text-primary" href="/privacy">
            {copy.privacyLink}
          </Link>
          <Link className="inline-flex min-h-11 items-center font-semibold text-primary" href="/cookies">
            {copy.cookiesLink}
          </Link>
        </nav>
      </main>
      <footer className="chrome-bottom fixed inset-x-0 bottom-0 z-50 bg-surface-container-lowest/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl">
        <nav
          aria-label={copy.primaryNav}
          className="mx-auto flex min-h-20 max-w-lg items-stretch justify-around px-2"
        >
          {routes.map((route) => {
            const active = route.id === current;
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 rounded-lg px-1 ${
                  active ? "text-primary" : "text-on-surface-variant"
                }`}
                href={route.href}
                key={route.id}
                onClick={() => {
                  if (
                    window.location.pathname === route.href &&
                    window.location.search === "" &&
                    window.location.hash === ""
                  ) {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
                scroll={false}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  {route.icon}
                </span>
                <span className="w-full px-0.5 text-center font-label-code text-[0.625rem] leading-tight tracking-normal sm:text-[0.6875rem]">
                  {copy.nav[route.id]}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full bg-primary ${active ? "opacity-100" : "opacity-0"}`}
                />
              </Link>
            );
          })}
        </nav>
      </footer>
      <p aria-live="polite" className="sr-only">
        {copy.languageNow}
      </p>
    </>
  );
}
