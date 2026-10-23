import { ProjectsView } from "../../components/ProjectsView";
import { pageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return pageMetadata("projects", "/projects");
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; tema?: string }>;
}) {
  const params = await searchParams;
  const topic = params.topic ?? params.tema ?? "all";
  return <ProjectsView topic={topic} />;
}
