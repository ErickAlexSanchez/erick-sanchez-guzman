import { ContactView } from "../../components/ContactView";
import { pageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return pageMetadata("contact", "/contact");
}

export default function ContactPage() {
  return <ContactView />;
}
