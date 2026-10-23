export const routes = [
  { id: "home", href: "/", label: "Inicio", icon: "terminal", header: "Inicio" },
  {
    id: "projects",
    href: "/projects",
    label: "Proyectos",
    icon: "dataset",
    header: "Proyectos",
  },
  {
    id: "stack",
    href: "/stack",
    label: "Stack & Tech",
    icon: "layers",
    header: "Stack & Tech",
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contacto & CV",
    icon: "badge",
    header: "Contacto & CV",
  },
] as const;

export type RouteId = (typeof routes)[number]["id"];
