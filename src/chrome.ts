export type Locale = "en" | "es";

export type Chrome = {
  skip: string;
  about: string;
  experience: string;
  work: string;
  contact: string;
  role: string;
  place: string;
  available: string;
  theme: string;
  dark: string;
  light: string;
  language: string;
  skills: string;
  why: string;
  omitted: string;
  open: string;
  repo: string;
  phone: string;
  newTab: string;
  demos: string;
};

export const chrome: Record<Locale, Chrome> = {
  en: {
    skip: "Skip to content",
    about: "About",
    experience: "Experience",
    work: "Work",
    contact: "Contact",
    role: "Senior Frontend Engineer",
    place: "Mexico City · 100% remote · Central Time, overlap with US Eastern",
    available: "Available now",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    language: "Language",
    skills: "Skills",
    why: "Why it matters",
    omitted: "Left out of this version",
    open: "Open the demo",
    repo: "Repository",
    phone: "Phone",
    newTab: "opens in a new tab",
    demos: "Start that repository on this machine, then open the demo.",
  },
  es: {
    skip: "Saltar al contenido",
    about: "Acerca de",
    experience: "Experiencia",
    work: "Trabajo",
    contact: "Contacto",
    role: "Ingeniero frontend senior",
    place: "Ciudad de México · 100% remoto · Hora del centro, con traslape al este de Estados Unidos",
    available: "Disponible ahora",
    theme: "Tema",
    dark: "Oscuro",
    light: "Claro",
    language: "Idioma",
    skills: "Habilidades",
    why: "Por qué importa",
    omitted: "Lo que esta versión omite",
    open: "Abrir el demo",
    repo: "Repositorio",
    phone: "Teléfono",
    newTab: "se abre en una pestaña nueva",
    demos: "Arranca ese repositorio en esta máquina y luego abre el demo.",
  },
};

export const sections = ["about", "experience", "work", "contact"] as const;
export type SectionId = (typeof sections)[number];
