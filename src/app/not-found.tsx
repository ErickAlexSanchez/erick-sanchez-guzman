import { NotFoundView } from "../components/NotFoundView";
import { pageMetadata } from "../lib/metadata";

export function generateMetadata() {
  return pageMetadata("notFound", "/404");
}

export default function NotFound() {
  return <NotFoundView />;
}
