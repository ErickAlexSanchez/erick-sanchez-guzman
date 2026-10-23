import { LegalView } from "../../components/LegalView";
import { pageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return pageMetadata("privacy", "/privacy");
}

export default function PrivacyPage() {
  return <LegalView kind="privacy" />;
}
