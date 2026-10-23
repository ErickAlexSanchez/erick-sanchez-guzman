import { cookies, headers } from "next/headers";
import type { Locale } from "../content/locale";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get("locale")?.value === "es" ? "es" : "en";
}

export async function getStoredTheme(): Promise<"light" | "dark" | null> {
  const jar = await cookies();
  const value = jar.get("theme")?.value;
  return value === "light" || value === "dark" ? value : null;
}

export async function getRequestOrigin(): Promise<string | null> {
  const headerList = await headers();
  const rawHost = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const host = rawHost?.split(",")[0]?.trim() ?? "";
  if (!host || !/^[a-zA-Z0-9.:-]+$/.test(host)) {
    return null;
  }
  const rawProto = headerList.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    rawProto === "http" || rawProto === "https"
      ? rawProto
      : host.startsWith("127.") || host.startsWith("localhost") || host.startsWith("[::1]")
        ? "http"
        : "https";
  return `${proto}://${host}`;
}
