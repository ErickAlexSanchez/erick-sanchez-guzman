export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  year: string;
  decision: string;
  summary: string;
  paragraphs: readonly string[];
  facts: readonly ProjectFact[];
  tags: readonly string[];
  github?: ProjectLink;
  live?: ProjectLink;
  folder: string;
};

export const projects: readonly Project[] = [
  {
    id: "lumen",
    name: "Lumen",
    eyebrow: "SISTEMA // DOS TRENES",
    year: "2020–2026",
    decision:
      "Marketing fija `@lumen/ui` 1.0.0. Account fija `@lumen/ui-next` 1.1.0. Module Federation solo para el banner.",
    summary:
      "Dos apps no salen el mismo día. Marketing se queda en una edición conocida y account avanza a la siguiente. El banner es el único remote.",
    paragraphs: [
      "Lumen mantiene dos trenes. Marketing depende de `@lumen/ui` 1.0.0 (`packages/ui`). Account depende de `@lumen/ui-next` 1.1.0 (`packages/ui-next`). La edición 1.1.0 revisa Button y exige una descripción en Dialog.",
      "La home de marketing es estática. Pricing se reimprime cada 60 segundos. La carpeta de account es dinámica. Module Federation es solo el remote del banner, cargado por marketing. El sistema de diseño llega como dependencia de paquete.",
      "Color, espacio y tipo son variables CSS. Tailwind las lee. El dominio no importa React, Next ni `pg`. Storybook corre axe en las historias de Button y Dialog antes de permitir un bump. La historia del Button deshabilitado queda fuera de esa compuerta.",
    ],
    facts: [
      { label: "Marketing", value: "@lumen/ui 1.0.0" },
      { label: "Account", value: "@lumen/ui-next 1.1.0" },
      { label: "Federation", value: "Solo el banner" },
    ],
    tags: ["React", "TypeScript", "Next.js", "Storybook", "Tailwind"],
    github: {
      href: "https://github.com/ErickAlexSanchez/lumen",
      label: "Repositorio de Lumen",
    },
    folder: "01-lumen",
  },
  {
    id: "draftline",
    name: "Draftline",
    eyebrow: "COLA // CRÉDITOS",
    year: "2020–2026",
    decision:
      "Las llamadas al modelo salen de la petición: una cola en un worker, con un control de créditos.",
    summary:
      "`POST /jobs` inserta la fila en queued y devuelve el id. El worker llama al modelo solo si el saldo cubre el costo.",
    paragraphs: [
      "Draftline es un espacio de escritura. `POST /jobs` inserta una fila con estado queued y devuelve el id. El handler no recibe un gateway de modelo y no llama al modelo.",
      "Un worker reclama la fila. Antes de llamar al modelo, un control de créditos revisa el saldo del tenant. Si el saldo no cubre el costo, el trabajo queda failed con `insufficient_credits`, no llama al modelo y no escribe un archivo. Si alcanza, el worker llama al modelo, escribe el texto y debita los créditos en la misma transacción que marca el trabajo succeeded.",
      "TanStack Query conserva listas y borradores 60 segundos. El detalle del trabajo usa stale time cero y reconsulta hasta un estado terminal. Esta versión tiene un tenant, un adaptador de modelo falso y disco local para los archivos.",
    ],
    facts: [
      { label: "Petición", value: "Inserta queued" },
      { label: "Worker", value: "Llama al modelo" },
      { label: "Créditos", value: "Corta si no alcanzan" },
    ],
    tags: ["React", "TypeScript", "Next.js", "TanStack Query"],
    github: {
      href: "https://github.com/ErickAlexSanchez/draftline",
      label: "Repositorio de Draftline",
    },
    live: {
      href: "https://web-xi-nine-93.vercel.app",
      label: "Draftline en vivo",
    },
    folder: "02-draftline",
  },
  {
    id: "hearth",
    name: "Hearth",
    eyebrow: "MEMBRESÍA // MONOLITO",
    year: "2020–2026",
    decision:
      "Monolito de membresía. El coach es solo de hábitos y no es consejo médico.",
    summary:
      "Un proceso de Next.js. Postgres es la fuente de verdad, con un esquema por módulo. El coach no diagnostica ni recomienda una dosis.",
    paragraphs: [
      "Hearth es un proceso de Next.js: un monolito de membresía. Postgres es la fuente de verdad, con un esquema por módulo para identity, membership, feed y coach.",
      "El derecho se comprueba en el servidor. Una cuenta free recibe 403 en una publicación solo para miembros, y esa respuesta no incluye el cuerpo. La lista del feed omite esas publicaciones para una cuenta free.",
      "El coach es solo de hábitos. No diagnostica y no recomienda una dosis. La pantalla dice que la respuesta no es consejo médico. El coach no depende del nivel de membresía. El código del feed no menciona al coach. El código del coach no consulta el feed.",
      "TanStack Query guarda el estado de servidor del feed, una publicación, la sesión y el hilo del coach. Redux guarda solo si el compositor está abierto y el borrador local. El stream del coach es `Cache-Control: no-store`.",
    ],
    facts: [
      { label: "Proceso", value: "Un monolito Next.js" },
      { label: "Feed", value: "403 sin el cuerpo" },
      { label: "Coach", value: "Hábitos, no medicina" },
    ],
    tags: ["React", "TypeScript", "Next.js", "TanStack Query", "Redux Toolkit"],
    github: {
      href: "https://github.com/ErickAlexSanchez/hearth",
      label: "Repositorio de Hearth",
    },
    live: {
      href: "https://hearth-nine-pink.vercel.app",
      label: "Hearth en vivo",
    },
    folder: "03-hearth",
  },
  {
    id: "vesper-counsel",
    name: "Vesper & Counsel",
    eyebrow: "PEDIDOS // WEBHOOK",
    year: "2020–2026",
    decision:
      "Un pedido se escribe solo desde un webhook firmado. El checkout es un demo. Stripe no se activa.",
    summary:
      "Vesper y Counsel comparten un servicio. El catálogo es estático. El pedido nace después de que la firma del webhook acepta el payload.",
    paragraphs: [
      "Vesper y Counsel comparten un servicio de comercio. Vesper es un estudio de joyería ficticio. Counsel es un estudio ficticio para leer una carta, un acuerdo o papeles de constitución. Counsel no es un despacho, y nada en ese sitio es asesoría legal.",
      "Las páginas de catálogo son estáticas, generadas desde un módulo sin framework. El checkout es dinámico. Un pedido se escribe solo dentro del handler del webhook, después de que la comprobación de firma acepta el payload. El adaptador de desarrollo firma ese payload con un secreto local. No llama a una red de pagos.",
      "Se pueden guardar ajustes de Stripe. La columna connected está restringida a false, y el checkout no lee esos ajustes. `STRIPE_MODE` solo acepta `simulator`. Stripe no se activa. No hay URL pública de este caso.",
    ],
    facts: [
      { label: "Pedido", value: "Solo el webhook firmado" },
      { label: "Checkout", value: "Demo, sin red de pagos" },
      { label: "Stripe", value: "No se activa" },
    ],
    tags: ["React", "TypeScript", "Next.js"],
    github: {
      href: "https://github.com/ErickAlexSanchez/commerce",
      label: "Repositorio de Vesper & Counsel",
    },
    folder: "04-commerce",
  },
  {
    id: "slot",
    name: "Slot",
    eyebrow: "AGENDA // VIDEO LOCAL",
    year: "2020–2026",
    decision:
      "Agenda y salas de video locales. Zoom permanece inactivo si no están las credenciales.",
    summary:
      "Un horario abierto, un invitado, una sala. El token de video se emite solo si quien llama es el anfitrión o el invitado.",
    paragraphs: [
      "Slot reserva un horario abierto en el calendario de un anfitrión para un solo invitado, y abre una sala de video para ese anfitrión y ese invitado.",
      "El token de video se emite solo después de que el servidor carga la reserva y confirma que quien llama es el anfitrión o el invitado. Los tokens duran `TOKEN_TTL_MINUTES`, un entero de 1 a 60, y la respuesta es `Cache-Control: no-store`. Cada reserva es un insert. Postgres rechaza una segunda fila con el mismo anfitrión y el mismo inicio.",
      "El adaptador de video en ejecución abre una sala local. Zoom se construye solo cuando existen el account id, el client id y el client secret. Si los tres están vacíos, Zoom permanece inactivo. Un conjunto parcial se niega a arrancar. Esta carpeta no tiene remoto público.",
    ],
    facts: [
      { label: "Reserva", value: "Un anfitrión, un inicio" },
      { label: "Token", value: "Solo anfitrión o invitado" },
      { label: "Zoom", value: "Inactivo sin credenciales" },
    ],
    tags: ["React", "TypeScript"],
    folder: "05-slot",
  },
  {
    id: "pathmark",
    name: "Pathmark",
    eyebrow: "LECCIONES // LEDGER",
    year: "2020–2026",
    decision:
      "Respuestas idempotentes sobre un ledger append-only. Las lecciones son públicas; abrir una lección envía Authorization Bearer.",
    summary:
      "Puntos, racha e insignia son una proyección del log. La página de lecciones es pública. El progreso pide un Bearer.",
    paragraphs: [
      "Pathmark es un ledger de lecciones. Los puntos, la racha y la insignia Wayfinder son una proyección de un log append-only. Una clave de idempotencia repetida devuelve el resultado guardado y no inserta de nuevo.",
      "La página de lecciones es pública. `GET /content/lessons` y el documento de la lección se pueden cachear y no llevan la clave de respuesta. Abrir una lección también pide el progreso, y esa petición envía `Authorization: Bearer local-demo-token`. Registrar una respuesta envía el mismo header. No hay formulario de acceso. El navegador no califica.",
      "Esta carpeta no tiene remoto público.",
    ],
    facts: [
      { label: "Lecciones", value: "Públicas, sin clave" },
      { label: "Abrir", value: "Authorization Bearer" },
      { label: "Reintento", value: "La misma clave no inserta" },
    ],
    tags: ["React", "TypeScript", "TanStack Query"],
    folder: "06-pathmark",
  },
];

export const projectFilters = [
  { id: "todos", label: "Todos" },
  { id: "lumen", label: "Sistema de diseño" },
  { id: "draftline", label: "Cola" },
  { id: "hearth", label: "Membresía" },
  { id: "vesper-counsel", label: "Webhook" },
  { id: "slot", label: "Agenda" },
  { id: "pathmark", label: "Lecciones" },
] as const;
