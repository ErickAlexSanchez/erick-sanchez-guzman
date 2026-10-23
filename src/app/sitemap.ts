import type { MetadataRoute } from "next";
import { getRequestOrigin } from "../lib/request";

const paths = ["/", "/projects", "/stack", "/contact", "/privacy", "/cookies"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await getRequestOrigin();
  if (!origin) {
    return [];
  }
  return paths.map((path, index) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
