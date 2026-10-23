"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "../content/locale";
import { messages, type Dictionary } from "../content/messages";
import { person } from "../content/profile";
import { personJsonLd } from "../lib/jsonld";

type ThemeName = "light" | "dark";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Dictionary;
  theme: ThemeName | null;
  setTheme: (theme: ThemeName) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function systemTheme(): ThemeName {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function metaKey(pathname: string) {
  if (pathname === "/") return "home" as const;
  if (pathname === "/projects") return "projects" as const;
  if (pathname === "/stack") return "stack" as const;
  if (pathname === "/contact") return "contact" as const;
  if (pathname === "/privacy") return "privacy" as const;
  if (pathname === "/cookies") return "cookies" as const;
  return "notFound" as const;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let node = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function paintThemeColor(theme: ThemeName) {
  const color = theme === "dark" ? "#0f131c" : "#f4f6fb";
  let node = document.head.querySelector('meta[name="theme-color"][data-user-theme]');
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute("name", "theme-color");
    node.setAttribute("data-user-theme", "true");
    document.head.appendChild(node);
  }
  node.setAttribute("content", color);
}

export function LocaleProvider({
  initialLocale,
  initialTheme,
  origin,
  children,
}: {
  initialLocale: Locale;
  initialTheme: ThemeName | null;
  origin: string | null;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [theme, setThemeState] = useState<ThemeName | null>(initialTheme);
  const pathname = usePathname();
  const copy = messages[locale];

  useLayoutEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale === "en" || storedLocale === "es") {
      writeCookie("locale", storedLocale);
      if (storedLocale !== locale) {
        setLocaleState(storedLocale);
      }
    } else {
      localStorage.setItem("locale", locale);
      writeCookie("locale", locale);
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.dataset.theme = storedTheme;
      writeCookie("theme", storedTheme);
      setThemeState(storedTheme);
      paintThemeColor(storedTheme);
    } else {
      setThemeState(systemTheme());
    }
    // Sync storage once, before paint. Later switches write storage themselves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!localStorage.getItem("theme")) {
        setThemeState(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.dataset.theme = storedTheme;
      document.documentElement.style.colorScheme = storedTheme;
      writeCookie("theme", storedTheme);
      setThemeState(storedTheme);
      paintThemeColor(storedTheme);
    } else {
      document.documentElement.style.removeProperty("color-scheme");
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = locale;
    const item = messages[locale].meta[metaKey(pathname)];
    const title = `${item.title} · ${person.name}`;
    document.title = title;
    upsertMeta("name", "description", item.description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", item.description);
  }, [locale, pathname]);

  const setLocale = (next: Locale) => {
    localStorage.setItem("locale", next);
    writeCookie("locale", next);
    document.documentElement.lang = next;
    setLocaleState(next);
  };

  const setTheme = (next: ThemeName) => {
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
    writeCookie("theme", next);
    paintThemeColor(next);
    setThemeState(next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy, theme, setTheme }}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale, origin)) }}
        type="application/ld+json"
      />
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}
