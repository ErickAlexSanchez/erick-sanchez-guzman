import type { MetadataRoute } from "next";
import { getRequestOrigin } from "../lib/request";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const origin = await getRequestOrigin();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(origin ? { sitemap: new URL("/sitemap.xml", origin).toString() } : {}),
  };
}
