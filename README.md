This is a portfolio version of a production system I built for a company whose confidentiality policy does not allow the real product to be shown. The original work cannot be published. This repository is a different version, created only for the portfolio: it follows the same architecture decisions, with a different scope, brand, and data. It is not the client's codebase.

# Portfolio

Public site for Erick Alexander Sánchez Guzmán, senior frontend engineer. It is the index for six portfolio versions. It does not import their code, and it is not itself a client product. The boundary above applies because the case studies are those versions.

A staff reader can review the rendering choice, the routes, and the content model in this file and in `docs/adr`.

## What it is

Four pages, in Spanish:

| Path | Page |
| --- | --- |
| `/` | Inicio |
| `/projects` | Proyectos y casos de estudio |
| `/stack` | Stack y arquitectura |
| `/contact` | Contacto y trayectoria |

Home states place, remote terms, hours, and availability, then opens on the Lumen decision. Projects repeats the six decisions as the headings and records the rule each version keeps. Stack names the tools and points at those decisions. Contact lists email, phone, LinkedIn, trajectory, education, and languages.

The projects page links a GitHub repository only when that folder has a public remote. Slot and Pathmark have no remote, so the page names `05-slot` and `06-pathmark` and does not publish a URL. Draftline is also at https://web-xi-nine-93.vercel.app. Hearth is also at https://hearth-nine-pink.vercel.app. The other cases have no public app URL.

## Rendering

Next.js App Router. Every page is a server component. `src/components/PageShell.tsx` renders the header, `main`, and a footer whose navigation is the bottom bar. The current page is a prop, so marking the active link does not require a client component. Navigation uses ordinary links. Copying the email address and opening a mail draft are the only client islands. The type is Inter and JetBrains Mono on a `#0f131c` surface, with the same color tokens on every route.

There is no environment variable. There is no `.env` file.

## Content

Copy and the project list are TypeScript modules in `src/content`. `src/content/projects.ts` is the only list of case studies. Home and the projects page both read it. Changing a decision means editing that module and committing it. `npm run typecheck` checks the shape.

## Local

Node.js 22 or newer. From this folder, in PowerShell:

```powershell
node -v
npm install
npm run dev
```

Open http://127.0.0.1:3701. The dev server binds to that address only.

```powershell
npm run typecheck
npm run build
npm run start
```

`npm run build` runs `next build`. `npm run start` serves that build on http://127.0.0.1:3701.

## Live

The public URL is the one Vercel assigns on first deploy.

## Deploy

One Vercel project. The root of this repository is the project root. Vercel detects Next.js from `package.json`: install `npm install`, build `next build`, output the Next.js default. This app does not add a `vercel.json`, because a single Next.js project does not need one.

## Decisions

- [docs/adr/0001-portfolio-version.md](docs/adr/0001-portfolio-version.md) records the portfolio boundary.
- [docs/adr/0002-decision.md](docs/adr/0002-decision.md) records why the four pages are static modules in this repository.
