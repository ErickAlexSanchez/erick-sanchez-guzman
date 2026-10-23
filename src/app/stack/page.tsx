import { StackView } from "../../components/StackView";
import { pageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return pageMetadata("stack", "/stack");
}

export default function StackPage() {
  return <StackView />;
}
