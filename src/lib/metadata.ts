import type { Metadata } from "next";
import type { MetaKey } from "../content/messages";
import { messages } from "../content/messages";
import { person } from "../content/profile";
import { getLocale, getRequestOrigin } from "./request";

export async function pageMetadata(key: MetaKey, path: string): Promise<Metadata> {
  const locale = await getLocale();
  const origin = await getRequestOrigin();
  const item = messages[locale].meta[key];
  const title = `${item.title} · ${person.name}`;
  return {
    ...(origin ? { metadataBase: new URL(origin), alternates: { canonical: path } } : {}),
    title: { absolute: title },
    description: item.description,
    openGraph: {
      title,
      description: item.description,
      type: "website",
      ...(origin ? { url: path } : {}),
    },
  };
}
