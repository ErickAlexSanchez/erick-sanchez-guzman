import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { person } from "../../content/profile";

export const metadata: Metadata = {
  title: "Stack and architecture",
  description:
    "React, TypeScript, Next.js, design systems, and the boundaries used across the six portfolio versions.",
};

export default function StackPage() {
  return (
    <PageShell current="stack">
      <h1>Stack and architecture</h1>
      <p>
        The tools below are the ones I use. The notes under them are taken from the six
        portfolio versions, not from a generic stack diagram.
      </p>
      <section className="block" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <ul className="skills">
          {person.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section className="block" aria-labelledby="architecture-heading">
        <h2 id="architecture-heading">Where the boundaries sit</h2>
        <h3>Design systems</h3>
        <p>
          Lumen pins marketing to <code>@lumen/ui</code> 1.0.0 and account to{" "}
          <code>@lumen/ui-next</code> 1.1.0. Tokens are CSS variables that Tailwind reads.
          Storybook runs axe on Button and Dialog before a version bump is allowed. Module
          Federation is only the banner remote.
        </p>
        <h3>Request and worker</h3>
        <p>
          Draftline does not call the model from the HTTP handler. A worker claims the
          queued job and a credit guard runs before the model call. TanStack Query caches
          lists and saved drafts. It does not cache a job that is still generating.
        </p>
        <h3>One process, separate modules</h3>
        <p>
          Hearth is a membership monolith. Entitlement is decided on the server. The coach
          schema is isolated from the feed, and the coach reply is habits only, not medical
          advice. TanStack Query holds server state. Redux Toolkit holds the composer and
          its draft.
        </p>
        <h3>Writes that wait for a signature</h3>
        <p>
          Vesper and Counsel write an order only from a signed webhook. Checkout is a demo
          simulator, and Stripe is never activated. Slot mints a video token only for a
          participant on the booking, opens a local room, and leaves Zoom inactive unless
          the credentials exist.
        </p>
        <h3>A public catalog and a private ledger</h3>
        <p>
          Pathmark serves lessons without an answer key. Progress and attempts are private.
          Opening a lesson sends <code>Authorization: Bearer local-demo-token</code> on the
          progress request. Grading stays on the server. An idempotency key makes a retried
          answer return the stored result.
        </p>
        <h3>Testing and CI</h3>
        <p>
          Lumen blocks a version bump when the Button or Dialog axe gate has not passed.
          Draftline&apos;s CI typechecks, lints, and runs unit tests, integration tests, and
          Playwright. The other repositories keep the same kind of proof next to the
          decision: a guard that fails the build or the test when the rule is removed.
        </p>
      </section>
    </PageShell>
  );
}
