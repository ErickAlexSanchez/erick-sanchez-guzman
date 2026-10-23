export type DemoLink = {
  href: string;
  label: string;
  detail: string;
};

export type Study = {
  number: number;
  brand: string;
  repo: string;
  headline: string;
  href: string;
  decision: string;
  matters: string;
  omitted: string;
  open: DemoLink[];
};

export const boundary =
  "These case studies are portfolio versions. The employer's confidentiality policy does not allow the real products to be shown. They follow the same architecture decisions, with a different scope, brand, and data. They are not the original codebases.";

export const studies: Study[] = [
  {
    number: 1,
    brand: "Lumen",
    repo: "lumen",
    headline:
      "Pin marketing to @lumen/ui 1.0.0 and account to @lumen/ui-next 1.1.0.",
    href: "http://127.0.0.1:3101",
    decision:
      "Marketing compiles against @lumen/ui 1.0.0. The home page is static. Pricing uses incremental static regeneration and reprints every 60 seconds. Account compiles against @lumen/ui-next 1.1.0, where Button is revised and Dialog requires a description. Account is dynamic. Without the fictional session it redirects to sign-in. Color, space, and type are CSS variables that Tailwind reads. Module Federation is only the banner remote. The design system arrives as a package.",
    matters:
      "The public site and the signed-in app can ship on different release trains. A component change in 1.1.0 does not move the public pages. A session route stays dynamic, and a public route stays cacheable. Federation is reserved for a remote that another team would deploy on its own train.",
    omitted:
      "An npm registry, Chromatic, real authentication, further components, payment or video webhooks, and a worker. Sign-in has no password. The two component packages duplicate their controls so the pin stays visible.",
    open: [
      {
        href: "http://127.0.0.1:3101",
        label: "http://127.0.0.1:3101",
        detail: "Marketing. Home and pricing.",
      },
      {
        href: "http://127.0.0.1:3102",
        label: "http://127.0.0.1:3102",
        detail: "Account. No password. Continue as Avery Chen.",
      },
    ],
  },
  {
    number: 2,
    brand: "Draftline",
    repo: "draftline",
    headline: "Model calls leave the request path.",
    href: "http://127.0.0.1:3201",
    decision:
      "POST /jobs returns an id and does not call the model. A worker claims the row, checks that tenant's credit balance, and only then calls the model. A balance below the cost fails the job with no model call and no file. A successful generation debits credits in the same transaction that marks the job succeeded. TanStack Query caches lists and saved drafts. It does not cache generation. Job detail refetches until the job succeeds or fails.",
    matters:
      "The HTTP request ends before the model runs, so a slow generation does not hold the connection. Lists can be cached. The live job cannot. Web and worker scale separately, and the spend is per tenant.",
    omitted:
      "Several models, token streaming, real billing, and vector search. This version has one tenant, a fake model, and local disk behind the storage port.",
    open: [
      {
        href: "http://127.0.0.1:3201",
        label: "http://127.0.0.1:3201",
        detail:
          "editor@draftline.example / editor-local-pass can enqueue. viewer@draftline.example / viewer-local-pass can read, and receives 403 when enqueueing.",
      },
    ],
  },
  {
    number: 3,
    brand: "Hearth",
    repo: "hearth",
    headline: "Check entitlement on the server, and keep the coach out of the feed.",
    href: "http://127.0.0.1:3301",
    decision:
      "Hearth is a modular monolith. Postgres is the source of truth. A free account receives 403 for a members-only post, and that response does not include the body. The feed list omits those posts. Coach data is a separate schema: feed code does not mention coach, and coach code does not query the feed. Coach notes are private and have a shorter retention window than posts. TanStack Query paginates the feed. Redux holds only UI state, the composer and its draft. The coach streams from the server with Cache-Control: no-store. The coach is not medical advice.",
    matters:
      "Membership is decided where the post lives, not in the browser. The coach cannot be read as if it were a feed post. The feed can paginate without putting server state into Redux, and a private stream is not cached.",
    omitted:
      "A physical read replica, a social graph, a mobile app, and clinical history. The coach in this version is a fake adapter. It does not diagnose, prescribe, or recommend a dose.",
    open: [
      {
        href: "http://127.0.0.1:3301",
        label: "http://127.0.0.1:3301",
        detail:
          "jules@hearth.example / hearth-demo-member reads members-only posts. mira@hearth.example / hearth-demo-free does not.",
      },
    ],
  },
  {
    number: 4,
    brand: "Vesper & Counsel",
    repo: "vesper-counsel",
    headline: "Write the order only from a signed webhook.",
    href: "http://127.0.0.1:3402",
    decision:
      "One commerce service serves two storefronts. Catalog pages are static. Checkout is a dynamic island. An order is written only from a signed webhook, idempotently, so a repeated event does not create a second order. Inventory updates are conditional on a version column. The admin price field is dollars; the service stores cents. Stripe fields can be saved and stay inactive. Checkout remains a labeled demo simulator. Counsel keeps its own availability table, because a time is not a stock quantity.",
    matters:
      "Two storefronts do not become two order systems. A refreshed checkout cannot invent a paid order. Two shoppers who read the same snapshot cannot both buy that unit. Saving a Stripe key does not create a charge.",
    omitted:
      "Taxes, shipping, a CMS, a cart with more than one line, and a live card charge. Counsel is not a law firm, and nothing on that storefront is legal advice. Vesper is a fictional jewelry studio.",
    open: [
      {
        href: "http://127.0.0.1:3402",
        label: "http://127.0.0.1:3402",
        detail: "Vesper. Checkout has no login. The demo shopper is ada@example.com.",
      },
      {
        href: "http://127.0.0.1:3403",
        label: "http://127.0.0.1:3403",
        detail: "Counsel.",
      },
      {
        href: "http://127.0.0.1:3404",
        label: "http://127.0.0.1:3404",
        detail: "Admin. admin@example.com / vesper-counsel-demo. The price field is dollars.",
      },
    ],
  },
  {
    number: 5,
    brand: "Slot",
    repo: "slot",
    headline:
      "Mint the video token only after the server confirms the caller owns the booking.",
    href: "http://127.0.0.1:3501",
    decision:
      "The token is minted only after the server loads the booking and confirms the caller is the host or the guest. The signing secret stays on the server. The token response is not cached. Each booking is one insert. Postgres rejects a second row with the same host and slot. A same-guest retry returns the existing booking. A different guest receives 409. Times are stored as UTC plus the time zone name. The room in this version is fake.",
    matters:
      "A person who does not own the booking does not receive a video token. The race is closed by the unique host-and-slot constraint, not by a check in the browser. The secret never ships to the client.",
    omitted:
      "A Zoom Marketplace app, recordings, and Google Calendar sync. Zoom stays inactive unless three credentials are set. This portfolio does not ship them.",
    open: [
      {
        href: "http://127.0.0.1:3501",
        label: "http://127.0.0.1:3501",
        detail:
          "Password slot-demo for avery.chen@slot.test, jordan.hale@slot.test, and riley.quinn@slot.test.",
      },
    ],
  },
  {
    number: 6,
    brand: "Pathmark",
    repo: "pathmark",
    headline: "Grade in a server ledger. Keep attempts idempotent and append-only.",
    href: "http://127.0.0.1:3601",
    decision:
      "Pathmark is a Vite SPA, split by route. The browser does not grade and does not hold the answer key. Grading, progress, and rewards live in a server ledger. POST /attempts requires an idempotency key and returns the stored result before any second insert. The same key with a different answer is a 409. Postgres stores an append-only log: triggers reject update and delete. Lesson content is cached. Progress is private and not stored. Points, the streak, and the Wayfinder badge are a projection of that log.",
    matters:
      "A refresh cannot grade a second time, and it cannot rewrite the log. The answer key stays on the server. Content can sit on a CDN. Progress stays fresh and private.",
    omitted:
      "An author CMS, multiplayer, PDF certificates, and any account beyond the local bearer token. The attempt log cannot be edited or deleted.",
    open: [
      {
        href: "http://127.0.0.1:3601",
        label: "http://127.0.0.1:3601",
        detail:
          "Local Learner. Bearer token local-demo-token. There is no password form.",
      },
    ],
  },
];
