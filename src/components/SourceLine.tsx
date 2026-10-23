import type { ProjectSource } from "../content/projects";

export function SourceLine({ source }: { source: ProjectSource }) {
  if (source.kind === "github") {
    return (
      <p>
        <a className="hit text-link" href={source.href} rel="noreferrer" target="_blank">
          {source.label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    );
  }

  return <p>No public remote. Local folder: {source.folder}.</p>;
}
