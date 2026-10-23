import { HomeView } from "../components/HomeView";
import { pageMetadata } from "../lib/metadata";

export function generateMetadata() {
  return pageMetadata("home", "/");
}

export default function HomePage() {
  return <HomeView />;
}
