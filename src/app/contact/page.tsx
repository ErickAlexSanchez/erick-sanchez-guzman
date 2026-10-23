import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { person } from "../../content/profile";
import { projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Contact and trajectory",
  description:
    "Email, phone, and LinkedIn for Erick Alexander Sánchez Guzmán, plus trajectory, education, and languages.",
};

export default function ContactPage() {
  return (
    <PageShell current="contact">
      <h1>Contact and trajectory</h1>
      <dl className="contact-list">
        <div>
          <dt>Email</dt>
          <dd>
            <a className="hit text-link" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a className="hit text-link" href={person.phoneHref}>
              {person.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <a className="hit text-link" href={person.linkedIn} rel="noreferrer" target="_blank">
              {person.linkedInLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{person.status}</dd>
        </div>
      </dl>
      <section className="block" aria-labelledby="trajectory-heading">
        <h2 id="trajectory-heading">Trajectory</h2>
        <p>
          {person.trajectory.organization}, {person.trajectory.years}. {person.trajectory.role}.
          The six case studies are portfolio versions of that work. They do not name the real
          products.
        </p>
        <ul className="plain-list">
          {projects.map((project) => (
            <li key={project.id}>
              <a className="hit text-link" href={`/projects#${project.id}`}>
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <p>
          {person.place}. {person.work}. {person.terms}. {person.hours}.
        </p>
      </section>
      <section className="block" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <ul className="plain-list">
          {person.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="block" aria-labelledby="languages-heading">
        <h2 id="languages-heading">Languages</h2>
        <ul className="plain-list">
          {person.languages.map((language) => (
            <li key={language.name}>
              {language.name}, {language.level}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
