This is a portfolio version of a production system I built for a company whose confidentiality policy does not allow the real product to be shown. The original work cannot be published. This repository is a different version, created only for the portfolio: it follows the same architecture decisions, with a different scope, brand, and data. It is not the client's codebase.

# Portfolio

Personal site for Erick Alexander Sánchez Guzmán, senior frontend engineer in Mexico City. It indexes six portfolio repositories. Each one records an architecture decision and runs as a local demo. This site does not import their code.

| Order | Name | Repository | Demo |
| --- | --- | --- | --- |
| 1 | Lumen | lumen | http://127.0.0.1:3101 and http://127.0.0.1:3102 |
| 2 | Draftline | draftline | http://127.0.0.1:3201 |
| 3 | Hearth | hearth | http://127.0.0.1:3301 |
| 4 | Vesper & Counsel | vesper-counsel | http://127.0.0.1:3402, http://127.0.0.1:3403, admin http://127.0.0.1:3404 |
| 5 | Slot | slot | http://127.0.0.1:3501 |
| 6 | Pathmark | pathmark | http://127.0.0.1:3601 |

The public case studies are portfolio versions because the employer's confidentiality policy does not allow the real products to be shown.

## Run on Windows

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
```

`npm run build` typechecks, then writes `dist`. `npm run preview` serves that build on http://127.0.0.1:3701.
