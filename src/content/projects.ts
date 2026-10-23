import type { L10n } from "./locale";

export type ProjectFact = {
  label: L10n;
  value: L10n;
};

export type Project = {
  id: string;
  name: string;
  folder?: string;
  tags: readonly string[];
  github?: string;
  live?: string;
  category: L10n;
  decision: L10n;
  summary: L10n;
  facts: readonly ProjectFact[];
  paragraphs: readonly L10n[];
};

const same = (text: string): L10n => ({ en: text, es: text });

export const projects: readonly Project[] = [
  {
    id: "wake-me-gps",
    name: "WakeMeGPS",
    tags: ["React", "TypeScript", "Capacitor", "Leaflet"],
    github: "https://github.com/ErickAlexSanchez/wake-me-gps-web",
    live: "https://wake-me-gps-web-seven.vercel.app",
    category: { en: "Personal product", es: "Producto personal" },
    decision: {
      en: "One React interface is the website and the Android app. Android keeps a foreground location service running only while the alarm is armed, because a browser tab will not stay awake.",
      es: "Una interfaz en React es el sitio y la aplicación de Android. Android mantiene un servicio de ubicación en primer plano solo mientras la alarma está armada, porque una pestaña del navegador no se queda despierta.",
    },
    summary: {
      en: "You choose a place and a radius. The phone rings when you enter that circle, so someone on a bus or the metro can look away and still get off near a stop.",
      es: "Eliges un lugar y un radio. El teléfono suena cuando entras en ese círculo, para que alguien en el autobús o en el metro pueda mirar a otro lado y aun así bajarse cerca de la parada.",
    },
    facts: [
      {
        label: { en: "Ring", es: "Suena" },
        value: { en: "Two fixes in a row", es: "Dos lecturas seguidas" },
      },
      {
        label: { en: "Vague fix", es: "Lectura vaga" },
        value: { en: "Ignored", es: "Se ignora" },
      },
      {
        label: { en: "Already inside", es: "Ya dentro" },
        value: { en: "Quiet until you leave", es: "En silencio hasta salir" },
      },
    ],
    paragraphs: [
      {
        en: "WakeMeGPS is a personal product. You choose a place and a radius, and the phone rings when you enter that circle. It is for someone on a bus or the metro who wants to look away and still get off near a stop.",
        es: "WakeMeGPS es un producto personal. Eliges un lugar y un radio, y el teléfono suena cuando entras en ese círculo. Es para alguien que va en el autobús o en el metro, quiere mirar a otro lado y aun así bajarse cerca de la parada.",
      },
      {
        en: "The same React interface is the website and, packaged with Capacitor, the Android app. The mobile version is available on Android under that same name, WakeMeGPS. The public repository is the website. It does not contain the Android project.",
        es: "La misma interfaz en React es el sitio y, empaquetada con Capacitor, la aplicación de Android. La versión móvil está en Android con ese mismo nombre, WakeMeGPS. El repositorio público es el sitio. No contiene el proyecto de Android.",
      },
      {
        en: "The website says a browser tab will not stay awake. Android starts a foreground location service only while the alarm is armed. It rings after two fixes in a row inside the radius. A fix coarser than the larger of the radius and 80 meters is ignored. Arming it while you are already inside stays quiet until you leave and come back. There is no account and no backend. Places stay on the device. Search uses Photon, the map uses OpenStreetMap, and there is no Google map key.",
        es: "El sitio dice que una pestaña del navegador no se queda despierta. Android inicia un servicio de ubicación en primer plano solo mientras la alarma está armada. Suena después de dos lecturas seguidas dentro del radio. Una lectura más imprecisa que el mayor entre el radio y 80 metros se ignora. Si la armas cuando ya estás dentro, se queda en silencio hasta que sales y vuelves. No hay cuenta ni backend. Los lugares se quedan en el dispositivo. La búsqueda usa Photon, el mapa usa OpenStreetMap y no hay una clave de mapa de Google.",
      },
    ],
  },
  {
    id: "stoicequilibrium",
    name: "stoicequilibrium",
    tags: ["Web"],
    live: "https://stoicequilibrium.com/",
    category: { en: "Personal product", es: "Producto personal" },
    decision: {
      en: "Without a paid month, what you record stays on this device. With the membership, those records sync to the account across devices, and the ad can come off.",
      es: "Sin un mes de pago, lo que registras se queda en este dispositivo. Con la membresía, esos registros se sincronizan en la cuenta entre dispositivos, y el anuncio puede quitarse.",
    },
    summary: {
      en: "stoicequilibrium is a daily habit tracker. You check off the day, keep a streak, and look back at the week, the month, and the year.",
      es: "stoicequilibrium es un registro diario de hábitos. Marcas el día, mantienes una racha y miras atrás la semana, el mes y el año.",
    },
    facts: [
      {
        label: { en: "Free", es: "Gratis" },
        value: { en: "Stays on this device", es: "Se queda en el dispositivo" },
      },
      {
        label: { en: "Membership", es: "Membresía" },
        value: { en: "Syncs for the paid month", es: "Sincroniza el mes de pago" },
      },
      {
        label: { en: "Look back", es: "Mirar atrás" },
        value: { en: "Day, week, month, year", es: "Día, semana, mes, año" },
      },
    ],
    paragraphs: [
      {
        en: "stoicequilibrium is a personal product. It is a daily habit tracker. You check off the day, keep a streak, and look back at the week, the month, and the year.",
        es: "stoicequilibrium es un producto personal. Es un registro diario de hábitos. Marcas el día, mantienes una racha y miras atrás la semana, el mes y el año.",
      },
      {
        en: "The free version stays on the device and can show an ad. The paid membership syncs habits, notes, and reflections to the account across devices while that month is active. When the month ends, those records return to the device.",
        es: "La versión gratis se queda en el dispositivo y puede mostrar un anuncio. La membresía de pago sincroniza hábitos, notas y reflexiones en la cuenta entre dispositivos mientras ese mes sigue activo. Cuando el mes termina, esos registros vuelven al dispositivo.",
      },
    ],
  },
  {
    id: "lumen",
    name: "Lumen",
    folder: "01-lumen",
    tags: ["React", "TypeScript", "Next.js", "Storybook", "Tailwind"],
    github: "https://github.com/ErickAlexSanchez/lumen",
    category: { en: "Design system", es: "Sistema de diseño" },
    decision: {
      en: "Marketing pins `@lumen/ui` at 1.0.0, and account pins `@lumen/ui-next` at 1.1.0. Module Federation is only used for the banner.",
      es: "Marketing fija `@lumen/ui` en 1.0.0 y account fija `@lumen/ui-next` en 1.1.0. Module Federation se usa solo para el banner.",
    },
    summary: {
      en: "The two apps do not ship on the same day. Marketing stays on a version it already knows, and account moves on to the next one. The banner is the only piece loaded from the other app.",
      es: "Las dos aplicaciones no se publican el mismo día. Marketing se queda en una versión que ya conoce, y account pasa a la siguiente. El banner es la única pieza que se carga desde la otra aplicación.",
    },
    facts: [
      { label: same("Marketing"), value: same("@lumen/ui 1.0.0") },
      { label: same("Account"), value: same("@lumen/ui-next 1.1.0") },
      {
        label: same("Federation"),
        value: { en: "Banner only", es: "Solo el banner" },
      },
    ],
    paragraphs: [
      {
        en: "Lumen keeps two release trains. Marketing depends on `@lumen/ui` 1.0.0, from `packages/ui`. Account depends on `@lumen/ui-next` 1.1.0, from `packages/ui-next`. The 1.1.0 release revises Button and requires a description on Dialog.",
        es: "Lumen mantiene dos trenes de publicación. Marketing depende de `@lumen/ui` 1.0.0, en `packages/ui`. Account depende de `@lumen/ui-next` 1.1.0, en `packages/ui-next`. La versión 1.1.0 revisa Button y exige una descripción en Dialog.",
      },
      {
        en: "The marketing home page is static. Pricing is regenerated every 60 seconds. The account app is dynamic. Module Federation is only the banner remote, and marketing is what loads it. The design system arrives as a package dependency, not as another remote.",
        es: "La portada de marketing es estática. Pricing se regenera cada 60 segundos. La aplicación de account es dinámica. Module Federation es solo el remote del banner, y marketing es quien lo carga. El sistema de diseño llega como dependencia de paquete, no como otro remote.",
      },
      {
        en: "Color, space, and type are CSS variables, and Tailwind reads them. Domain code does not import React, Next.js, or `pg`. Storybook runs axe on the Button and Dialog stories before a version bump is allowed. The disabled Button story sits outside that check.",
        es: "El color, el espacio y la tipografía son variables CSS, y Tailwind las lee. El código de dominio no importa React, Next.js ni `pg`. Storybook corre axe en las historias de Button y Dialog antes de permitir un cambio de versión. La historia del Button deshabilitado queda fuera de esa revisión.",
      },
      {
        en: "There is no public app for Lumen. The repository is on GitHub.",
        es: "Lumen no tiene una aplicación pública. El repositorio está en GitHub.",
      },
    ],
  },
  {
    id: "draftline",
    name: "Draftline",
    folder: "02-draftline",
    tags: ["React", "TypeScript", "Next.js", "TanStack Query"],
    github: "https://github.com/ErickAlexSanchez/draftline",
    live: "https://web-xi-nine-93.vercel.app",
    category: { en: "Queue", es: "Cola" },
    decision: {
      en: "The model is called from a worker, after a credit check, not from the request that enqueues the job.",
      es: "El modelo se llama desde un worker, después de revisar los créditos, no desde la petición que encola el trabajo.",
    },
    summary: {
      en: "The request only records the job and returns its id. A worker then checks that the balance covers the cost, and the model runs only if that check passes.",
      es: "La petición solo registra el trabajo y devuelve su id. Un worker revisa después que el saldo cubra el costo, y el modelo corre solo si esa revisión pasa.",
    },
    facts: [
      {
        label: { en: "Request", es: "Petición" },
        value: { en: "Inserts a queued row", es: "Inserta una fila en cola" },
      },
      {
        label: same("Worker"),
        value: { en: "Calls the model", es: "Llama al modelo" },
      },
      {
        label: { en: "Credits", es: "Créditos" },
        value: {
          en: "Stops if the balance is short",
          es: "Se detiene si el saldo no alcanza",
        },
      },
    ],
    paragraphs: [
      {
        en: "Draftline is a writing space. `POST /jobs` inserts a row with status queued and returns the id. That handler is not given a model gateway, and it does not call the model.",
        es: "Draftline es un espacio de escritura. `POST /jobs` inserta una fila con estado queued y devuelve el id. Ese handler no recibe un gateway del modelo y no llama al modelo.",
      },
      {
        en: "A worker claims the row. Before it calls the model, it checks the tenant's credit balance. If the balance does not cover the cost, the job is marked failed with `insufficient_credits`. The model is not called, and no file is written. If the balance does cover the cost, the worker calls the model, writes the text, and debits the credits in the same transaction that marks the job succeeded.",
        es: "Un worker toma la fila. Antes de llamar al modelo, revisa el saldo de créditos del tenant. Si el saldo no cubre el costo, el trabajo queda failed con `insufficient_credits`. No llama al modelo y no escribe un archivo. Si el saldo sí cubre el costo, el worker llama al modelo, escribe el texto y descuenta los créditos en la misma transacción que marca el trabajo succeeded.",
      },
      {
        en: "TanStack Query keeps lists and drafts for 60 seconds. The job detail uses a stale time of zero and refetches until the job reaches a finished state. This version has one tenant, a fake model adapter, and local disk for the files.",
        es: "TanStack Query conserva listas y borradores durante 60 segundos. El detalle del trabajo usa stale time cero y vuelve a consultar hasta un estado final. Esta versión tiene un tenant, un adaptador de modelo falso y disco local para los archivos.",
      },
    ],
  },
  {
    id: "hearth",
    name: "Hearth",
    folder: "03-hearth",
    tags: ["React", "TypeScript", "Next.js", "TanStack Query", "Redux Toolkit"],
    github: "https://github.com/ErickAlexSanchez/hearth",
    live: "https://hearth-nine-pink.vercel.app",
    category: { en: "Membership", es: "Membresía" },
    decision: {
      en: "Membership is checked on the server. The coach only suggests habits, and it says the reply is not medical advice.",
      es: "La membresía se comprueba en el servidor. El coach solo sugiere hábitos y dice que la respuesta no es consejo médico.",
    },
    summary: {
      en: "One Next.js app holds the product. Postgres is the source of truth, with a schema for each module. The coach does not diagnose, and it does not recommend a dose.",
      es: "Una aplicación de Next.js contiene el producto. Postgres es la fuente de verdad, con un esquema por módulo. El coach no diagnostica y no recomienda una dosis.",
    },
    facts: [
      {
        label: { en: "Process", es: "Proceso" },
        value: { en: "One Next.js app", es: "Una app de Next.js" },
      },
      {
        label: same("Feed"),
        value: { en: "403, without the body", es: "403, sin el cuerpo" },
      },
      {
        label: same("Coach"),
        value: { en: "Habits, not medicine", es: "Hábitos, no medicina" },
      },
    ],
    paragraphs: [
      {
        en: "Hearth runs as one Next.js process, a membership monolith. Postgres is the source of truth, with a schema each for identity, membership, the feed, and the coach.",
        es: "Hearth corre en un proceso de Next.js: un monolito de membresía. Postgres es la fuente de verdad, con un esquema para identity, membership, el feed y el coach.",
      },
      {
        en: "Membership is checked on the server. A free account gets a 403 on a members-only post, and that response does not include the body. The feed list also leaves those posts out for a free account.",
        es: "La membresía se comprueba en el servidor. Una cuenta free recibe 403 en una publicación solo para miembros, y esa respuesta no incluye el cuerpo. La lista del feed también omite esas publicaciones para una cuenta free.",
      },
      {
        en: "The coach only suggests habits. It does not diagnose, and it does not recommend a dose. The screen says the reply is not medical advice. The coach does not depend on the membership level. Feed code does not mention the coach, and coach code does not read the feed.",
        es: "El coach solo sugiere hábitos. No diagnostica y no recomienda una dosis. La pantalla dice que la respuesta no es consejo médico. El coach no depende del nivel de membresía. El código del feed no menciona al coach, y el código del coach no lee el feed.",
      },
      {
        en: "TanStack Query stores the server state for the feed, a post, the session, and the coach thread. Redux stores only whether the composer is open and the local draft. The coach stream is sent with `Cache-Control: no-store`.",
        es: "TanStack Query guarda el estado de servidor del feed, de una publicación, de la sesión y del hilo del coach. Redux guarda solo si el compositor está abierto y el borrador local. El stream del coach se envía con `Cache-Control: no-store`.",
      },
    ],
  },
  {
    id: "vesper-counsel",
    name: "Vesper & Counsel",
    folder: "04-commerce",
    tags: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/ErickAlexSanchez/commerce",
    category: { en: "Orders", es: "Pedidos" },
    decision: {
      en: "An order is written only from a signed webhook. Checkout is a labeled demo. Stripe is never called.",
      es: "Un pedido se escribe solo desde un webhook firmado. El checkout es un demo etiquetado. Stripe no se llama nunca.",
    },
    summary: {
      en: "Vesper and Counsel share one commerce service. The catalog is static. An order is created only after the signature check accepts the webhook, and checkout never reaches a payment network.",
      es: "Vesper y Counsel comparten un servicio de comercio. El catálogo es estático. Un pedido se crea solo después de que la firma acepta el webhook, y el checkout no llega a una red de pagos.",
    },
    facts: [
      {
        label: { en: "Order", es: "Pedido" },
        value: { en: "Signed webhook only", es: "Solo el webhook firmado" },
      },
      {
        label: same("Checkout"),
        value: { en: "A labeled demo", es: "Un demo etiquetado" },
      },
      {
        label: same("Stripe"),
        value: { en: "Never called", es: "No se llama" },
      },
    ],
    paragraphs: [
      {
        en: "Vesper and Counsel share one commerce service. Vesper is a fictional jewelry studio. Counsel is a fictional studio for reading a letter, an agreement, or incorporation papers. Counsel is not a law firm, and nothing on that site is legal advice.",
        es: "Vesper y Counsel comparten un servicio de comercio. Vesper es un estudio de joyería ficticio. Counsel es un estudio ficticio para leer una carta, un acuerdo o papeles de constitución. Counsel no es un despacho, y nada en ese sitio es asesoría legal.",
      },
      {
        en: "The catalog pages are static. They are generated from a module that does not use a framework. Checkout is dynamic. An order is written only inside the webhook handler, after the signature check accepts the payload. The development adapter signs that payload with a local secret. It does not call a payment network.",
        es: "Las páginas del catálogo son estáticas. Se generan desde un módulo que no usa un framework. El checkout es dinámico. Un pedido se escribe solo dentro del handler del webhook, después de que la comprobación de firma acepta el payload. El adaptador de desarrollo firma ese payload con un secreto local. No llama a una red de pagos.",
      },
      {
        en: "Stripe settings can be saved. The connected column is constrained to false, and checkout does not read those settings. `STRIPE_MODE` only accepts `simulator`. Stripe is never called. There is no public app for this project.",
        es: "Se pueden guardar ajustes de Stripe. La columna connected está restringida a false, y el checkout no lee esos ajustes. `STRIPE_MODE` solo acepta `simulator`. Stripe no se llama nunca. Este proyecto no tiene una aplicación pública.",
      },
    ],
  },
  {
    id: "slot",
    name: "Slot",
    folder: "05-slot",
    tags: ["React", "TypeScript"],
    category: { en: "Scheduling", es: "Agenda" },
    decision: {
      en: "Scheduling and local video rooms live in this project. Zoom stays inactive unless the credentials exist.",
      es: "La agenda y las salas de video locales viven en este proyecto. Zoom permanece inactivo si no están las credenciales.",
    },
    summary: {
      en: "A host offers an open time, one guest books it, and the two of them get a video room. The server issues a video token only if the caller is that host or that guest.",
      es: "Un anfitrión ofrece un horario libre, un invitado lo reserva, y los dos entran a una sala de video. El servidor emite un token de video solo si quien llama es ese anfitrión o ese invitado.",
    },
    facts: [
      {
        label: { en: "Booking", es: "Reserva" },
        value: { en: "One host, one start", es: "Un anfitrión, un inicio" },
      },
      {
        label: same("Token"),
        value: { en: "Host or guest only", es: "Solo anfitrión o invitado" },
      },
      {
        label: same("Zoom"),
        value: {
          en: "Inactive without credentials",
          es: "Inactivo sin credenciales",
        },
      },
    ],
    paragraphs: [
      {
        en: "Slot reserves one open time on a host's calendar for a single guest, and it opens a video room for that host and that guest.",
        es: "Slot reserva un horario libre en el calendario de un anfitrión para un solo invitado, y abre una sala de video para ese anfitrión y ese invitado.",
      },
      {
        en: "The server issues a video token only after it loads the booking and confirms that the caller is the host or the guest. Tokens last `TOKEN_TTL_MINUTES`, an integer from 1 to 60, and the response uses `Cache-Control: no-store`. Each booking is one insert. Postgres rejects a second row with the same host and the same start.",
        es: "El servidor emite un token de video solo después de cargar la reserva y confirmar que quien llama es el anfitrión o el invitado. Los tokens duran `TOKEN_TTL_MINUTES`, un entero de 1 a 60, y la respuesta usa `Cache-Control: no-store`. Cada reserva es un insert. Postgres rechaza una segunda fila con el mismo anfitrión y el mismo inicio.",
      },
      {
        en: "The video adapter that runs opens a local room. Zoom is built only when the account id, the client id, and the client secret are all present. If the three are empty, Zoom stays inactive. A partial set refuses to start.",
        es: "El adaptador de video que corre abre una sala local. Zoom se construye solo cuando existen el account id, el client id y el client secret. Si los tres están vacíos, Zoom permanece inactivo. Un conjunto parcial se niega a arrancar.",
      },
    ],
  },
  {
    id: "pathmark",
    name: "Pathmark",
    folder: "06-pathmark",
    tags: ["React", "TypeScript", "TanStack Query"],
    category: { en: "Lessons", es: "Lecciones" },
    decision: {
      en: "The lessons list is public. Opening a lesson sends `Authorization: Bearer`.",
      es: "La lista de lecciones es pública. Abrir una lección envía `Authorization: Bearer`.",
    },
    summary: {
      en: "Points, the streak, and the badge are a projection of an append-only log. Anyone can read the lessons list. Progress asks for a bearer token.",
      es: "Los puntos, la racha y la insignia son una proyección de un log que solo agrega. Cualquiera puede leer la lista de lecciones. El progreso pide un token Bearer.",
    },
    facts: [
      {
        label: { en: "Lessons", es: "Lecciones" },
        value: { en: "Public, no token", es: "Públicas, sin token" },
      },
      {
        label: { en: "Opening one", es: "Al abrir" },
        value: same("Authorization Bearer"),
      },
      {
        label: { en: "Retry", es: "Reintento" },
        value: {
          en: "The same key does not insert",
          es: "La misma clave no inserta",
        },
      },
    ],
    paragraphs: [
      {
        en: "Pathmark keeps lessons in a ledger. Points, the streak, and the Wayfinder badge are a projection of an append-only log. Sending the same idempotency key again returns the stored result and does not insert a second row.",
        es: "Pathmark guarda las lecciones en un ledger. Los puntos, la racha y la insignia Wayfinder son una proyección de un log que solo agrega filas. Enviar otra vez la misma clave de idempotencia devuelve el resultado guardado y no inserta una segunda fila.",
      },
      {
        en: "The lessons page is public. `GET /content/lessons` and the lesson document can be cached, and they do not carry the response key. Opening a lesson also requests progress, and that request sends `Authorization: Bearer local-demo-token`. Saving an answer sends the same header. There is no sign-in form. The browser does not grade the answer.",
        es: "La página de lecciones es pública. `GET /content/lessons` y el documento de la lección se pueden cachear, y no llevan la clave de respuesta. Abrir una lección también pide el progreso, y esa petición envía `Authorization: Bearer local-demo-token`. Guardar una respuesta envía el mismo header. No hay formulario de acceso. El navegador no califica la respuesta.",
      },
    ],
  },
];

export const projectFilters: readonly { id: string; label: L10n }[] = [
  { id: "all", label: { en: "All", es: "Todos" } },
  { id: "wake-me-gps", label: { en: "Location", es: "Ubicación" } },
  { id: "stoicequilibrium", label: { en: "Habits", es: "Hábitos" } },
  { id: "lumen", label: { en: "Design system", es: "Sistema de diseño" } },
  { id: "draftline", label: { en: "Queue", es: "Cola" } },
  { id: "hearth", label: { en: "Membership", es: "Membresía" } },
  { id: "vesper-counsel", label: { en: "Webhook", es: "Webhook" } },
  { id: "slot", label: { en: "Scheduling", es: "Agenda" } },
  { id: "pathmark", label: { en: "Lessons", es: "Lecciones" } },
];
