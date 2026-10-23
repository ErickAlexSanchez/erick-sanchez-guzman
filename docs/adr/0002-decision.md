# 0002. Four routes from static modules

## Status

Accepted

## Context

The public site has four pages: home, projects and case studies, stack and architecture, and contact and trajectory. They share a header, a footer, and one type and color system. The copy should change when the repository changes. It should not come from a database, a CMS, or a request to another service at runtime. The deploy is one project, with no secrets.

## Decision

Use the Next.js App Router. Each page is a server component under `src/app`. `src/components/PageShell.tsx` supplies the landmarks and the navigation, and receives the current route as a prop, so the pages do not need a client component to mark the active link.

Copy and the six case studies live in `src/content` as TypeScript modules. `src/content/projects.ts` is the only project list. Home and the projects page both read it. Package names inside a sentence are marked with backticks and rendered as `code`.

Rendering is the default Next.js server render. Vercel detects Next.js from `package.json` and runs `npm install` and `next build`. This repository does not add a `vercel.json`, because a single Next.js app does not need one.

`src/content/projects.ts` now lists two personal products and then the six portfolio versions. `/privacy` and `/cookies` are static notices in `src/content/legal.ts`. The projects page filters that same list in the browser. None of this loads copy from a database or another service.

## Consequences

- Editing a case study is a commit, and `tsc --noEmit` checks the module.
- The pages do not fetch content in the browser. Navigation uses ordinary links.
- There is no CMS to configure and no environment variable to deploy.
- A new page needs a route, its copy, and an entry in `src/content/routes.ts`.
