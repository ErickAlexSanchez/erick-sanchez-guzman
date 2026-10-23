export const routes = [
  { id: "home", href: "/", icon: "terminal" },
  { id: "projects", href: "/projects", icon: "dataset" },
  { id: "stack", href: "/stack", icon: "layers" },
  { id: "contact", href: "/contact", icon: "badge" },
] as const;

export type RouteId = (typeof routes)[number]["id"];
