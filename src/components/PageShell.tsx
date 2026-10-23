import type { ReactNode } from "react";
import Link from "next/link";
import { person } from "../content/profile";
import { routes, type RouteId } from "../content/routes";
import { Mark } from "./Mark";

export function PageShell({
  current,
  children,
}: {
  current: RouteId;
  children: ReactNode;
}) {
  const page = routes.find((route) => route.id === current) ?? routes[0];

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="fixed inset-x-0 top-0 z-50 bg-surface-container-lowest/85 shadow-[0_1px_8px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        <div className="shell flex min-h-16 items-center justify-between gap-space-sm px-margin">
          <Link
            className="flex min-w-0 flex-1 items-center gap-space-sm rounded-lg"
            href="/"
          >
            <Mark />
            <span className="flex min-w-0 flex-col">
              <span className="flex items-center gap-space-xs">
                <span className="truncate font-headline text-sm font-semibold text-on-surface sm:text-base">
                  {person.name}
                </span>
                <span className="shrink-0 font-label-code text-label-code text-primary-container">
                  // dev
                </span>
              </span>
              <span className="truncate font-label-code text-label-code text-on-surface-variant uppercase">
                {page.header}
              </span>
            </span>
          </Link>
          <p className="hidden items-center gap-space-xs rounded-full bg-surface-container-high/80 px-space-sm py-space-xs sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary-container opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
            </span>
            <span className="font-label-code text-label-code whitespace-nowrap text-tertiary-fixed-dim">
              {person.status}
            </span>
          </p>
          <Link
            aria-label={`${person.name}, ir a contacto`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-surface-container-high/60"
            href="/contact"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest font-label-code text-[0.7rem] text-primary">
              EG
            </span>
          </Link>
        </div>
      </header>
      <main
        className="shell flex flex-col px-margin pt-20 pb-28"
        id="contenido"
      >
        {children}
      </main>
      <footer className="fixed inset-x-0 bottom-0 z-50 bg-surface-container-lowest/90 shadow-[0_-4px_24px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        <nav aria-label="Principal" className="mx-auto flex h-20 max-w-lg items-stretch justify-around px-space-xs">
          {routes.map((route) => {
            const active = route.id === current;
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-space-xs rounded-lg ${
                  active ? "text-primary-container" : "text-on-surface-variant"
                }`}
                href={route.href}
                key={route.id}
              >
                <span className="material-symbols-outlined text-xl">{route.icon}</span>
                <span className="w-full px-0.5 text-center font-label-code text-[0.625rem] leading-tight tracking-normal">
                  {route.label}
                </span>
                <span
                  className={`h-1 w-1 rounded-full bg-primary-container ${
                    active ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </footer>
    </>
  );
}
