This is a portfolio version of a production system I built for a company whose confidentiality policy does not allow the real product to be shown. The original work cannot be published. This repository is a different version, created only for the portfolio: it follows the same architecture decisions, with a different scope, brand, and data. It is not the client's codebase.

# Portfolio

Public site for Erick Alexander Sánchez Guzmán, senior frontend engineer. It is the index for six portfolio versions. It does not import their code, and it is not itself a client product. The boundary above applies because the case studies are those versions.

A staff reader can review the rendering choice, the routes, and the content model in this file and in `docs/adr`.

## What it is

Four pages:

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | Projects and case studies |
| `/stack` | Stack and architecture |
| `/contact` | Contact and trajectory |

Home states place, remote terms, hours, and availability, then lists the six decisions. Projects repeats those decisions as the headings and records the rule each version keeps. Stack names the tools and where each boundary sits. Contact lists email, phone, LinkedIn, trajectory, education, and languages.

The apps behind the case studies are not deployed. The projects page links a GitHub repository only when that folder has a public remote. Otherwise it names the local folder and does not publish a dead URL.

## Rendering

Next.js App Router. Every page is a server component. `src/components/PageShell.tsx` renders the header, the primary navigation, `main`, and the footer. The current page is a prop, so marking the active link does not require a client component. Navigation uses ordinary links and works without client-side fetching.

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
