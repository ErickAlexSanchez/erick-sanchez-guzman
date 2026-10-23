import { PageShell } from "../components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <h1>This page is not on the site</h1>
      <p>The public pages are home, projects, stack, and contact.</p>
      <p>
        <a className="hit text-link" href="/">
          Back to home
        </a>
      </p>
    </PageShell>
  );
}
