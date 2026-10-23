import type { ReactNode } from "react";
import { routes, type RouteId } from "../content/routes";
import { person } from "../content/profile";

export function PageShell({
  current,
  children,
}: {
  current?: RouteId;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="frame header-bar">
          <a className="brand hit" href="/">
            {person.name}
          </a>
          <nav aria-label="Primary">
            <ul>
              {routes.map((route) => {
                const active = route.id === current;
                return (
                  <li key={route.id}>
                    <a
                      className="hit"
                      href={route.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {route.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <main id="content" tabIndex={-1} className="frame">
        {children}
      </main>
      <footer className="site-footer">
        <div className="frame footer-bar">
          <p>
            {person.status}. {person.place}. {person.hours}.
          </p>
          <a className="hit text-link" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>
      </footer>
    </>
  );
}
