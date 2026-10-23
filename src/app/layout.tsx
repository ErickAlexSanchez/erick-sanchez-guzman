import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Field } from "../components/Field";
import { LocaleProvider } from "../components/LocaleProvider";
import { messages } from "../content/messages";
import { person } from "../content/profile";
import { getLocale, getRequestOrigin, getStoredTheme } from "../lib/request";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const preferenceScript =
  '(function(){try{var l=localStorage.getItem("locale");if(l==="en"||l==="es")document.documentElement.lang=l;var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f131c" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const origin = await getRequestOrigin();
  const site = messages[locale].meta.site;
  return {
    ...(origin ? { metadataBase: new URL(origin) } : {}),
    title: {
      default: site.title,
      template: `%s · ${person.name}`,
    },
    description: site.description,
    openGraph: {
      title: site.title,
      description: site.description,
      type: "website",
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const theme = await getStoredTheme();
  const origin = await getRequestOrigin();

  return (
    <html
      className={`${inter.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      lang={locale}
      suppressHydrationWarning
      {...(theme ? { "data-theme": theme } : {})}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-transparent font-sans text-on-surface antialiased">
        <Field />
        <div className="relative z-10">
          <LocaleProvider initialLocale={locale} initialTheme={theme} origin={origin}>
            {children}
          </LocaleProvider>
        </div>
      </body>
    </html>
  );
}
