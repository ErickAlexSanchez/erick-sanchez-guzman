This is a portfolio version of a production system I built for a company whose confidentiality policy does not allow the real product to be shown. The original work cannot be published. This repository is a different version, created only for the portfolio: it follows the same architecture decisions, with a different scope, brand, and data. It is not the client's codebase.

# Portfolio

Public site for Erick Alexander Sánchez Guzmán, senior frontend engineer. It lists two personal products, WakeMeGPS and stoicequilibrium, and six portfolio projects. It does not import their code, and it is not itself a client product. The boundary above applies to those six case studies. It does not apply to the two personal products.

WakeMeGPS and stoicequilibrium are personal products. The six projects after them are portfolio versions for personal review, similar to professional work, and not a client's codebase. From 2020 to 2026 he has been frontend lead at Elemental 4 Web. He also freelances, building production interfaces for other product teams.

A staff reader can review the rendering choice, the routes, and the content model in this file and in `docs/adr`.

## What it is

Four pages. English is the default. A visitor can switch to Spanish.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | Highlighted projects |
| `/stack` | Stack and architecture |
| `/contact` | Contact and background |

Home states the role, the years at Elemental 4 Web, the freelance work, and that he is available now, then opens on WakeMeGPS. Highlights lists WakeMeGPS, stoicequilibrium, and then the six portfolio versions. Stack lists every skill from the resume, grouped for scanning, and points at those decisions. Contact lists email, LinkedIn, GitHub, background, education, and languages. There is no contact form.

WakeMeGPS is at https://wake-me-gps-web-seven.vercel.app and https://github.com/ErickAlexSanchez/wake-me-gps-web. stoicequilibrium is at https://stoicequilibrium.com/. The projects page links a GitHub repository only when that folder has a public remote. `05-slot` and `06-pathmark` have no remote, so the page names the folder and does not publish a URL. Draftline is also at https://web-xi-nine-93.vercel.app. Hearth is also at https://hearth-nine-pink.vercel.app. Lumen and Vesper & Counsel have a repository and no public app URL.

## Rendering

Next.js App Router. `src/components/PageShell.tsx` renders the header, `main`, and a footer whose navigation is the bottom bar. The header holds the language switch and the theme switch. Navigation uses ordinary links.

The language choice is stored in `localStorage` under `locale` (`en` or `es`). A matching cookie lets the server render that language, and `document.documentElement.lang` follows it. The theme choice is stored in `localStorage` under `theme` (`light` or `dark`). Until a visitor chooses, the theme follows `prefers-color-scheme`. The dark theme uses the `#0f131c` surface. The light theme keeps the same layout and type on a light field. Inter and JetBrains Mono are loaded with `next/font`.

Copying the email address, opening a mail draft, and the two switches are client components. Copy and the project list are still TypeScript modules, so the dictionary stays small.

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
