import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { RichText } from "../../components/RichText";
import { SourceLine } from "../../components/SourceLine";
import { projects } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects and case studies",
  description:
    "Six portfolio case studies, each headlined by the architecture decision it keeps.",
};

export default function ProjectsPage() {
  return (
    <PageShell current="projects">
      <h1>Projects and case studies</h1>
      <p>
        These are portfolio versions of production systems. Each one keeps an architecture
        decision from the original work, with a different scope, brand, and data. They are
        not the client&apos;s codebase. The apps are not deployed, so this page does not
        invent a public demo address. A repository link appears only when a public remote
        exists.
      </p>
      {projects.map((project) => (
        <article className="study" id={project.id} key={project.id}>
          <h2>
            <RichText text={project.decision} />
          </h2>
          {project.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
          <SourceLine source={project.source} />
        </article>
      ))}
    </PageShell>
  );
}
