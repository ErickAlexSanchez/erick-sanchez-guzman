import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { RichText } from "../components/RichText";
import { person } from "../content/profile";
import { projects } from "../content/projects";

export const metadata: Metadata = {
  title: { absolute: person.name },
  description:
    "Senior frontend engineer in Mexico City, available for remote contract or employer-of-record work on Central Time.",
};

export default function HomePage() {
  return (
    <PageShell current="home">
      <h1>{person.name}</h1>
      <p className="role">{person.role}</p>
      <dl className="facts">
        <div>
          <dt>Place</dt>
          <dd>{person.place}</dd>
        </div>
        <div>
          <dt>Work</dt>
          <dd>{person.work}</dd>
        </div>
        <div>
          <dt>Terms</dt>
          <dd>{person.terms}</dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>{person.hours}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{person.status}</dd>
        </div>
      </dl>
      <p>
        From 2020 to 2026 I was frontend lead at {person.trajectory.organization}, on six
        efforts. These pages are portfolio versions. The original products cannot be shown.
      </p>
      <section className="block" aria-labelledby="work-heading">
        <h2 id="work-heading">Six decisions</h2>
        <ol className="work">
          {projects.map((project) => (
            <li key={project.id}>
              <a href={`/projects#${project.id}`}>
                <span className="work-name">{project.name}</span>
                <span className="work-decision">
                  <RichText text={project.decision} />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>
      <p>
        Spanish is my native language. English is C1.
      </p>
      <p>
        <a className="hit text-link" href="/stack">
          Stack and architecture
        </a>
      </p>
      <p>
        <a className="hit text-link" href="/contact">
          Contact and trajectory
        </a>
      </p>
    </PageShell>
  );
}
