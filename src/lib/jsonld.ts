import type { Locale } from "../content/locale";
import { messages } from "../content/messages";
import { person } from "../content/profile";

export function personJsonLd(locale: Locale, origin: string | null) {
  const copy = messages[locale];
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: copy.role,
    email: person.email,
    sameAs: [person.linkedIn, person.github],
    knowsLanguage: ["es", "en"],
    knowsAbout: messages.en.stack.groups.flatMap((group) => group.items),
    description: copy.meta.home.description,
    hasCredential: copy.credentials.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
    })),
  };
  if (origin) {
    data.url = `${origin}/`;
  }
  return data;
}
