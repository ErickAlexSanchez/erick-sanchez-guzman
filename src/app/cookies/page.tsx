import { LegalView } from "../../components/LegalView";
import { pageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return pageMetadata("cookies", "/cookies");
}

export default function CookiesPage() {
  return <LegalView kind="cookies" />;
}
