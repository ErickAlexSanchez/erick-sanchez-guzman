export const routes = [
  { id: "home", href: "/", label: "Home" },
  { id: "projects", href: "/projects", label: "Projects" },
  { id: "stack", href: "/stack", label: "Stack" },
  { id: "contact", href: "/contact", label: "Contact" },
] as const;

export type RouteId = (typeof routes)[number]["id"];
