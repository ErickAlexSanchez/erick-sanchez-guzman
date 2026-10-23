export type ProjectSource =
  | { kind: "github"; href: string; label: string }
  | { kind: "local"; folder: string };

export type Project = {
  id: string;
  name: string;
  decision: string;
  paragraphs: readonly string[];
  source: ProjectSource;
};

export const projects: readonly Project[] = [
  {
    id: "lumen",
    name: "Lumen",
    decision:
      "Two release trains: marketing pins `@lumen/ui` 1.0.0, account pins `@lumen/ui-next` 1.1.0. Module Federation only for the banner remote. Domain has no framework imports.",
    paragraphs: [
      "Lumen keeps two release trains. Marketing depends on `@lumen/ui` 1.0.0 (`packages/ui`). Account depends on `@lumen/ui-next` 1.1.0 (`packages/ui-next`). Edition 1.1.0 revises Button and requires a description on Dialog.",
      "The marketing home is static. Pricing reprints every 60 seconds. The account folder is dynamic. Module Federation is only the banner remote, loaded by marketing. The design system arrives as a package dependency.",
      "Color, space, and type tokens are CSS variables. Tailwind reads them. Domain code does not import React, Next, or `pg`. Storybook runs axe on the Button and Dialog stories before a version bump is allowed. The disabled Button story is excluded from that gate.",
    ],
    source: {
      kind: "github",
      href: "https://github.com/ErickAlexSanchez/lumen",
      label: "Lumen repository",
    },
  },
  {
    id: "draftline",
    name: "Draftline",
    decision: "Queue model calls in a worker with a credit guard.",
    paragraphs: [
      "Draftline is a writing workspace. `POST /jobs` inserts a row with status queued and returns the job id. The handler does not receive a model gateway and does not call the model.",
      "A worker claims the row. Before it calls the model, a credit guard checks the tenant balance. A balance below the cost marks the job failed with `insufficient_credits`, does not call the model, and does not write a file. When the balance covers the cost, the worker calls the model, writes the text, and debits the credits in the same database transaction that marks the job succeeded.",
      "TanStack Query keeps lists and saved drafts for 60 seconds. Job detail uses a stale time of zero and refetches until the status is terminal. This version has one tenant, a fake model adapter, and local disk for the files.",
    ],
    source: { kind: "local", folder: "02-draftline" },
  },
  {
    id: "hearth",
    name: "Hearth",
    decision: "Membership monolith. Coach is habits-only, not medical advice.",
    paragraphs: [
      "Hearth is one Next.js process: a membership monolith. Postgres is the source of truth, with a schema per module for identity, membership, feed, and coach.",
      "Entitlement is checked on the server. A free account receives 403 for a members-only post, and that response does not include the body. The feed list omits those posts for a free account.",
      "The coach is habits only. It does not diagnose and it does not recommend a dose. The screen says the reply is not medical advice. The coach is not gated on the member tier. Feed code does not mention coach. Coach code does not query the feed.",
      "TanStack Query owns server state for the feed, a post, the session, and the coach thread. Redux stores only whether the composer is open and the local draft. The coach stream is `Cache-Control: no-store`.",
    ],
    source: { kind: "local", folder: "03-hearth" },
  },
  {
    id: "vesper-counsel",
    name: "Vesper & Counsel",
    decision:
      "Orders written only from a signed webhook. Checkout is a demo simulator. Stripe is never activated.",
    paragraphs: [
      "Vesper and Counsel share one commerce service. Vesper is a fictional jewelry studio. Counsel is a fictional studio for reading a letter, an agreement, or formation papers. Counsel is not a law firm, and nothing on that site is legal advice.",
      "Catalog pages are static, generated from a module with no framework. Checkout is dynamic. An order is written only inside the webhook handler, after the signature check accepts the payload. The development adapter signs that payload with a local secret. It does not call a payment network.",
      "Stripe settings can be stored. The connected column is constrained to false, and checkout does not read those settings. `STRIPE_MODE` accepts only `simulator`. Stripe is never activated.",
    ],
    source: { kind: "local", folder: "04-commerce" },
  },
  {
    id: "slot",
    name: "Slot",
    decision:
      "Scheduling and local video rooms. Zoom stays inactive unless credentials exist.",
    paragraphs: [
      "Slot books one open time on a host's calendar for a single guest, then opens a video room for that host and that guest.",
      "The video token is minted only after the server loads the booking and confirms the caller is the host or the guest. Tokens last `TOKEN_TTL_MINUTES`, an integer from 1 to 60, and the response is `Cache-Control: no-store`. Each booking is one insert. Postgres rejects a second row with the same host and slot start.",
      "The running video adapter opens a local room. Zoom is constructed only when the account id, the client id, and the client secret are all set. If all three are empty, Zoom stays inactive. A partial set refuses to start.",
    ],
    source: { kind: "local", folder: "05-slot" },
  },
  {
    id: "pathmark",
    name: "Pathmark",
    decision:
      "Ledger of lessons. Public lessons page; opening a lesson sends Authorization Bearer local-demo-token.",
    paragraphs: [
      "Pathmark is a ledger of lessons. Points, the streak, and the Wayfinder badge are a projection of an append-only log. A repeated idempotency key returns the stored result and does not insert again.",
      "The lessons page is public. `GET /content/lessons` and the lesson document are cacheable and do not carry an answer key. Opening a lesson also requests progress, and that request sends `Authorization: Bearer local-demo-token`. Recording an answer sends the same header. There is no sign-in form. The browser does not grade.",
    ],
    source: { kind: "local", folder: "06-pathmark" },
  },
];
