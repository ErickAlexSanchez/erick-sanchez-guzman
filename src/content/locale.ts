export type Locale = "en" | "es";

export type L10n = Record<Locale, string>;

export function tx(locale: Locale, value: L10n): string {
  return value[locale];
}
