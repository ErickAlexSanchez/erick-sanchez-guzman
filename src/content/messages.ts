import type { RouteId } from "./routes";
import type { Locale } from "./locale";

export type MetaKey = "home" | "projects" | "stack" | "contact" | "privacy" | "cookies" | "notFound";

export type Dictionary = {
  skip: string;
  role: string;
  primaryNav: string;
  language: string;
  english: string;
  spanish: string;
  theme: string;
  themeToLight: string;
  themeToDark: string;
  contactLink: string;
  status: string;
  languageNow: string;
  github: string;
  githubName: string;
  liveName: string;
  noRepository: string;
  readCase: string;
  legalNav: string;
  privacyLink: string;
  cookiesLink: string;
  nav: Record<RouteId, string>;
  meta: Record<MetaKey, { title: string; description: string }> & {
    site: { title: string; description: string };
  };
  home: {
    title: string;
    lead: string;
    skillsLabel: string;
    skills: readonly { label: string; href: string }[];
    seeProjects: string;
    featured: string;
    practice: string;
    practiceItems: readonly { icon: string; title: string; text: string }[];
    workTitle: string;
    workBody: string;
  };
  projects: {
    title: string;
    intro: string;
    filterLabel: string;
    emptyTitle: string;
    emptyBody: string;
    clearFilter: string;
    asideTitle: string;
    asideBody: string;
    contact: string;
  };
  stack: {
    title: string;
    intro: string;
    windowLabel: string;
    work: string;
    terms: string;
    also: string;
    groupsTitle: string;
    groups: readonly { id: string; title: string; items: readonly string[] }[];
    decisionsTitle: string;
    siteTitle: string;
    siteBody: string;
  };
  contact: {
    terms: string;
    emailCta: string;
    background: string;
    leadTitle: string;
    leadBody: string;
    freelanceTitle: string;
    freelanceBody: string;
    channels: string;
    channelGithub: string;
    channelLinkedIn: string;
    channelEmail: string;
  };
  credentials: readonly string[];
  languages: readonly { name: string; level: string }[];
  copyEmail: {
    copy: string;
    copied: string;
    failed: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
};

const homeSkills = [
  { label: "React", href: "/stack#interface" },
  { label: "TypeScript", href: "/stack#interface" },
  { label: "Next.js", href: "/stack#interface" },
  { label: "Design systems", href: "/stack#interface" },
  { label: "Storybook", href: "/stack#interface" },
  { label: "CSS3", href: "/stack#styling" },
  { label: "Tailwind CSS", href: "/stack#styling" },
  { label: "TanStack Query", href: "/stack#state" },
  { label: "Redux Toolkit", href: "/stack#state" },
  { label: "Node.js", href: "/stack#state" },
  { label: "Playwright", href: "/stack#quality" },
] as const;

const en = {
  skip: "Skip to content",
  role: "Senior Frontend Engineer",
  primaryNav: "Primary",
  language: "Language",
  english: "English",
  spanish: "Spanish",
  theme: "Theme",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  contactLink: "Go to contact",
  status: "Available now",
  languageNow: "English",
  github: "GitHub",
  githubName: "{name} on GitHub",
  liveName: "Open {name}",
  noRepository:
    "The folder {folder} has no public repository, so this page does not link one.",
  readCase: "Read this case",
  legalNav: "Policies",
  privacyLink: "Privacy notice",
  cookiesLink: "Cookie notice",
  nav: {
    home: "Home",
    projects: "Highlights",
    stack: "Stack",
    contact: "Contact",
  },
  meta: {
    site: {
      title: "Erick Alexander Sánchez Guzmán",
      description:
        "Erick Alexander Sánchez Guzmán, senior frontend engineer. Frontend lead at Elemental 4 Web, 2020–2026, and freelance interface work for other product teams. Available now.",
    },
    home: {
      title: "Erick Alexander Sánchez Guzmán",
      description:
        "Erick Alexander Sánchez Guzmán is a senior frontend engineer and frontend lead at Elemental 4 Web, 2020–2026. He also builds production interfaces for other product teams. Available now.",
    },
    projects: {
      title: "Highlighted projects",
      description:
        "Highlighted work by Erick Alexander Sánchez Guzmán. WakeMeGPS and stoicequilibrium are personal products. Six later pieces are portfolio versions, not a client's codebase.",
    },
    stack: {
      title: "Stack and architecture",
      description:
        "Interface, state, styling, quality, and delivery skills from the resume of Erick Alexander Sánchez Guzmán, senior frontend engineer.",
    },
    contact: {
      title: "Contact",
      description:
        "Email or LinkedIn for Erick Alexander Sánchez Guzmán, senior frontend engineer. Frontend lead at Elemental 4 Web, 2020–2026. Available now.",
    },
    privacy: {
      title: "Privacy notice",
      description:
        "Privacy notice for the portfolio of Erick Alexander Sánchez Guzmán. No contact form, no sale of data, and ARCO requests go to protechnologyea@gmail.com.",
    },
    cookies: {
      title: "Cookie notice",
      description:
        "This portfolio stores only the theme and language you choose. It does not use analytics or marketing cookies.",
    },
    notFound: {
      title: "Page not found",
      description: "This page is not on the site. The pages are home, highlights, stack, and contact.",
    },
  },
  home: {
    title: "I lead frontend for product teams.",
    lead: "I'm Erick Alexander Sánchez Guzmán, a senior frontend engineer. From 2020 to 2026 I have been frontend lead at Elemental 4 Web. I also freelance, building production interfaces for other product teams. I'm available now.",
    skillsLabel: "Principal skills",
    skills: homeSkills,
    seeProjects: "See the highlights",
    featured: "Featured project",
    practice: "Practice",
    practiceItems: [
      {
        icon: "token",
        title: "Design systems",
        text: "I build the components, tokens, and Storybook stories product teams ship with. Versions stay explicit, so one app can move forward while another stays on a known release.",
      },
      {
        icon: "devices",
        title: "Product interfaces",
        text: "Next.js and React for the screens people actually use, from the public site through the signed-in product. Freelance and Elemental 4 Web, 2020–2026, frontend lead.",
      },
      {
        icon: "verified",
        title: "Quality in the release",
        text: "Tests, accessibility checks, and CI run before a version moves. The proof sits in the pipeline, not in a slide.",
      },
    ],
    workTitle: "How I take work",
    workBody: "I work remotely, as a contractor or through an employer of record.",
  },
  projects: {
    title: "Highlighted projects",
    intro: "WakeMeGPS and stoicequilibrium are personal products. The six after them are portfolio versions for personal review, similar to professional projects I have worked on or that I consider important. They are not a client's codebase.",
    filterLabel: "Filter highlights",
    emptyTitle: "No project uses that filter",
    emptyBody: "Clear the filter to see every project.",
    clearFilter: "Show all projects",
    asideTitle: "Talk about a role",
    asideBody: "If a role is a fit, write to me.",
    contact: "Go to contact",
  },
  stack: {
    title: "Stack and architecture",
    intro: "These are the skills from my resume.",
    windowLabel: "facts",
    work: "Remote",
    terms: "Contractor or EOR",
    also: "Production interfaces for other product teams",
    groupsTitle: "Skills",
    groups: [
      {
        id: "interface",
        title: "Interface",
        items: [
          "React",
          "TypeScript (strict)",
          "JavaScript (ES6+)",
          "Next.js (App Router, SSR/SSG, ISR)",
          "HTML5",
          "React Router",
          "Vite",
          "Webpack",
          "Design systems",
          "Storybook",
          "component libraries",
          "Web Components",
          "Webpack Module Federation",
          "code splitting",
          "Figma handoff",
        ],
      },
      {
        id: "styling",
        title: "Styling",
        items: ["CSS3", "SCSS", "Tailwind CSS", "CSS variables"],
      },
      {
        id: "state",
        title: "State",
        items: [
          "Redux Toolkit",
          "Zustand",
          "TanStack Query",
          "React Hook Form",
          "Zod",
          "REST",
          "GraphQL",
          "OpenAPI",
          "Node.js",
          "Express",
          "BFF",
          "authentication and RBAC",
        ],
      },
      {
        id: "quality",
        title: "Quality",
        items: [
          "Jest",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Cypress",
          "MSW",
          "ESLint",
          "Prettier",
          "SonarQube",
          "Mend",
          "Core Web Vitals",
          "WCAG 2.1 / ARIA",
        ],
      },
      {
        id: "delivery",
        title: "Delivery",
        items: [
          "Azure DevOps (Repos, Pipelines, Boards, Artifacts)",
          "YAML CI/CD",
          "Docker",
          "Azure App Service",
          "Static Web Apps",
          "Azure Monitor",
          "GitHub Actions",
          "Git (Gitflow, trunk-based, protected branches, PR reviews)",
        ],
      },
    ],
    decisionsTitle: "Architecture decisions",
    siteTitle: "This site",
    siteBody:
      "This portfolio is one Next.js site with four pages. The words live in the repository. Nothing here is loaded from a client's system.",
  },
  contact: {
    terms: "I work remotely, as a contractor or through an employer of record.",
    emailCta: "Email me",
    background: "Background",
    leadTitle: "Frontend lead",
    leadBody: "Elemental 4 Web, 2020–2026. Clients from that work are not named here.",
    freelanceTitle: "Freelance",
    freelanceBody: "I also freelance, building production interfaces for other product teams.",
    channels: "Channels",
    channelGithub: "GitHub",
    channelLinkedIn: "LinkedIn",
    channelEmail: "Email",
  },
  credentials: [
    "Bachelor's degree in Systems Engineering",
    "Meta Front-End certificate",
    "IBM Full Stack certificate",
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1" },
  ],
  copyEmail: {
    copy: "Copy email address",
    copied: "Email address copied.",
    failed: "Couldn't copy the address. Copy {email} yourself.",
  },
  notFound: {
    title: "This page is not on the site",
    body: "The pages are home, projects, stack, and contact.",
    home: "Go to home",
  },
} satisfies Dictionary;

const es: Dictionary = {
  skip: "Saltar al contenido",
  role: "Ingeniero frontend senior",
  primaryNav: "Principal",
  language: "Idioma",
  english: "Inglés",
  spanish: "Español",
  theme: "Tema",
  themeToLight: "Cambiar a tema claro",
  themeToDark: "Cambiar a tema oscuro",
  contactLink: "Ir a contacto",
  status: "Disponible ahora",
  languageNow: "Español",
  github: "GitHub",
  githubName: "{name} en GitHub",
  liveName: "Abrir {name}",
  noRepository:
    "La carpeta {folder} no tiene un repositorio público, así que esta página no pone un enlace.",
  readCase: "Leer este caso",
  legalNav: "Avisos",
  privacyLink: "Aviso de privacidad",
  cookiesLink: "Aviso de cookies",
  nav: {
    home: "Inicio",
    projects: "Destacados",
    stack: "Stack",
    contact: "Contacto",
  },
  meta: {
    site: {
      title: "Erick Alexander Sánchez Guzmán",
      description:
        "Erick Alexander Sánchez Guzmán, ingeniero frontend senior. Líder de frontend en Elemental 4 Web, 2020–2026, y trabajo freelance de interfaces para otros equipos de producto. Disponible ahora.",
    },
    home: {
      title: "Erick Alexander Sánchez Guzmán",
      description:
        "Erick Alexander Sánchez Guzmán es ingeniero frontend senior y líder de frontend en Elemental 4 Web, 2020–2026. También hace interfaces de producción para otros equipos. Disponible ahora.",
    },
    projects: {
      title: "Proyectos destacados",
      description:
        "Trabajo destacado de Erick Alexander Sánchez Guzmán. WakeMeGPS y stoicequilibrium son productos personales. Seis piezas posteriores son versiones de portafolio, no el código de un cliente.",
    },
    stack: {
      title: "Stack y arquitectura",
      description:
        "Habilidades de interfaz, estado, estilos, calidad y entrega del currículum de Erick Alexander Sánchez Guzmán, ingeniero frontend senior.",
    },
    contact: {
      title: "Contacto",
      description:
        "Correo o LinkedIn de Erick Alexander Sánchez Guzmán, ingeniero frontend senior. Líder de frontend en Elemental 4 Web, 2020–2026. Disponible ahora.",
    },
    privacy: {
      title: "Aviso de privacidad",
      description:
        "Aviso de privacidad del portafolio de Erick Alexander Sánchez Guzmán. No hay formulario, no se venden datos, y los derechos ARCO se piden en protechnologyea@gmail.com.",
    },
    cookies: {
      title: "Aviso de cookies",
      description:
        "Este portafolio solo guarda el tema y el idioma que eliges. No usa cookies de analítica ni de publicidad.",
    },
    notFound: {
      title: "Página no encontrada",
      description: "Esta página no está en el sitio. Las páginas son inicio, destacados, stack y contacto.",
    },
  },
  home: {
    title: "Dirijo el frontend para equipos de producto.",
    lead: "Soy Erick Alexander Sánchez Guzmán, ingeniero frontend senior. De 2020 a 2026 he sido líder de frontend en Elemental 4 Web. También trabajo como freelancer, haciendo interfaces de producción para otros equipos de producto. Estoy disponible ahora.",
    skillsLabel: "Habilidades principales",
    skills: homeSkills,
    seeProjects: "Ver los destacados",
    featured: "Proyecto destacado",
    practice: "Práctica",
    practiceItems: [
      {
        icon: "token",
        title: "Sistemas de diseño",
        text: "Armo los componentes, los tokens y las historias de Storybook con los que publican los equipos de producto. Las versiones quedan explícitas, así una aplicación puede avanzar y otra se queda en una edición conocida.",
      },
      {
        icon: "devices",
        title: "Interfaces de producto",
        text: "Next.js y React para las pantallas que la gente usa de verdad, del sitio público al producto con sesión. Freelance y Elemental 4 Web, 2020–2026, líder de frontend.",
      },
      {
        icon: "verified",
        title: "Calidad en la publicación",
        text: "Las pruebas, las revisiones de accesibilidad y el CI corren antes de que una versión avance. La prueba está en el pipeline, no en una diapositiva.",
      },
    ],
    workTitle: "Cómo tomo el trabajo",
    workBody: "Trabajo en remoto, como contractor o a través de un employer of record.",
  },
  projects: {
    title: "Proyectos destacados",
    intro: "WakeMeGPS y stoicequilibrium son productos personales. Los seis que siguen son versiones de portafolio para revisión personal, parecidas a proyectos profesionales en los que trabajé o que considero importantes. No son el código de un cliente.",
    filterLabel: "Filtrar destacados",
    emptyTitle: "Ningún proyecto usa ese filtro",
    emptyBody: "Quita el filtro para ver todos los proyectos.",
    clearFilter: "Ver todos los proyectos",
    asideTitle: "Hablar de un puesto",
    asideBody: "Si un puesto encaja, escríbeme.",
    contact: "Ir a contacto",
  },
  stack: {
    title: "Stack y arquitectura",
    intro: "Estas son las habilidades de mi currículum.",
    windowLabel: "hechos",
    work: "Remoto",
    terms: "Contractor o EOR",
    also: "Interfaces de producción para otros equipos de producto",
    groupsTitle: "Habilidades",
    groups: [
      {
        id: "interface",
        title: "Interfaz",
        items: [
          "React",
          "TypeScript (strict)",
          "JavaScript (ES6+)",
          "Next.js (App Router, SSR/SSG, ISR)",
          "HTML5",
          "React Router",
          "Vite",
          "Webpack",
          "Design systems",
          "Storybook",
          "component libraries",
          "Web Components",
          "Webpack Module Federation",
          "code splitting",
          "Figma handoff",
        ],
      },
      {
        id: "styling",
        title: "Estilos",
        items: ["CSS3", "SCSS", "Tailwind CSS", "CSS variables"],
      },
      {
        id: "state",
        title: "Estado",
        items: [
          "Redux Toolkit",
          "Zustand",
          "TanStack Query",
          "React Hook Form",
          "Zod",
          "REST",
          "GraphQL",
          "OpenAPI",
          "Node.js",
          "Express",
          "BFF",
          "authentication and RBAC",
        ],
      },
      {
        id: "quality",
        title: "Calidad",
        items: [
          "Jest",
          "Vitest",
          "React Testing Library",
          "Playwright",
          "Cypress",
          "MSW",
          "ESLint",
          "Prettier",
          "SonarQube",
          "Mend",
          "Core Web Vitals",
          "WCAG 2.1 / ARIA",
        ],
      },
      {
        id: "delivery",
        title: "Entrega",
        items: [
          "Azure DevOps (Repos, Pipelines, Boards, Artifacts)",
          "YAML CI/CD",
          "Docker",
          "Azure App Service",
          "Static Web Apps",
          "Azure Monitor",
          "GitHub Actions",
          "Git (Gitflow, trunk-based, protected branches, PR reviews)",
        ],
      },
    ],
    decisionsTitle: "Decisiones de arquitectura",
    siteTitle: "Este sitio",
    siteBody:
      "Este portafolio es un sitio Next.js con cuatro páginas. El texto vive en el repositorio. Nada de aquí se carga desde el sistema de un cliente.",
  },
  contact: {
    terms: "Trabajo en remoto, como contractor o a través de un employer of record.",
    emailCta: "Escribir por correo",
    background: "Trayectoria",
    leadTitle: "Líder de frontend",
    leadBody: "Elemental 4 Web, 2020–2026. Los clientes de ese trabajo no se nombran aquí.",
    freelanceTitle: "Freelance",
    freelanceBody: "También trabajo como freelancer, haciendo interfaces de producción para otros equipos de producto.",
    channels: "Canales",
    channelGithub: "GitHub",
    channelLinkedIn: "LinkedIn",
    channelEmail: "Correo",
  },
  credentials: [
    "Licenciatura en Ingeniería en Sistemas",
    "Certificado Meta Front-End",
    "Certificado IBM Full Stack",
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1" },
  ],
  copyEmail: {
    copy: "Copiar el correo",
    copied: "Correo copiado.",
    failed: "No se pudo copiar. Copia {email} a mano.",
  },
  notFound: {
    title: "Esta página no está en el sitio",
    body: "Las páginas son inicio, destacados, stack y contacto.",
    home: "Ir al inicio",
  },
};

export const messages: Record<Locale, Dictionary> = { en, es };

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}
