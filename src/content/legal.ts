import type { Locale } from "./locale";

export type LegalBlock = {
  heading: string;
  paragraphs: readonly string[];
};

export type LegalPage = {
  title: string;
  blocks: readonly LegalBlock[];
};

const email = "protechnologyea@gmail.com";

export const privacyCopy: Record<Locale, LegalPage> = {
  en: {
    title: "Privacy notice",
    blocks: [
      {
        heading: "Who is responsible",
        paragraphs: [
          `Erick Alexander Sánchez Guzmán is responsible for this website. The contact address is ${email}.`,
          "This page says what the site actually does with personal data.",
        ],
      },
      {
        heading: "What data exists",
        paragraphs: [
          "There is no account and no contact form. The site does not ask for a name, a message, or a file.",
          `An email address exists only if you write to ${email} from your own mail program. That message is correspondence. This website does not store a copy of it.`,
          "If you choose a theme or a language, this browser keeps that choice in local storage, and a matching preference cookie is set so the next page can render the same way. That stays on your device. It is not a profile.",
        ],
      },
      {
        heading: "Purposes",
        paragraphs: [
          "The site is here so you can read the portfolio. The saved theme and language are only so the page can open the way you left it. Email is only so Erick can read and answer what you send.",
        ],
      },
      {
        heading: "No sale and no database transfer",
        paragraphs: [
          "Personal data is not sold. This site does not send a database of visitors to another country, or to another company.",
          "Links to GitHub, the live project sites, and LinkedIn leave this site. Those sites have their own notices.",
        ],
      },
      {
        heading: "ARCO rights",
        paragraphs: [
          `You can ask to access, rectify, cancel, or oppose the use of personal data that Erick Alexander Sánchez Guzmán holds about you. Write to ${email} and say what you want done.`,
          "If the only data is an email you sent, the reply will deal with that correspondence.",
        ],
      },
      {
        heading: "If you are outside Mexico",
        paragraphs: [
          `You can ask for access, correction, or deletion at the same address, ${email}. You can also complain to the data protection authority in the country where you live.`,
        ],
      },
    ],
  },
  es: {
    title: "Aviso de privacidad",
    blocks: [
      {
        heading: "Quién es responsable",
        paragraphs: [
          `Erick Alexander Sánchez Guzmán es el responsable de este sitio. El correo de contacto es ${email}.`,
          "Esta página describe lo que el sitio hace con datos personales.",
        ],
      },
      {
        heading: "Qué datos existen",
        paragraphs: [
          "No hay cuenta ni formulario de contacto. El sitio no pide nombre, mensaje ni archivo.",
          `Un correo existe solo si escribes a ${email} desde tu propio programa de correo. Ese mensaje es correspondencia. Este sitio no guarda una copia.`,
          "Si eliges tema o idioma, este navegador guarda esa elección en almacenamiento local, y una cookie de preferencia permite que la siguiente página se vea igual. Eso se queda en tu dispositivo. No es un perfil.",
        ],
      },
      {
        heading: "Finalidades",
        paragraphs: [
          "El sitio existe para que leas el portafolio. El tema y el idioma guardados sirven solo para abrir la página como la dejaste. El correo sirve solo para que Erick lea y responda lo que envías.",
        ],
      },
      {
        heading: "No hay venta ni transferencia de una base",
        paragraphs: [
          "Los datos personales no se venden. Este sitio no envía una base de datos de visitantes a otro país ni a otra empresa.",
          "Los enlaces a GitHub, a los sitios de los proyectos y a LinkedIn salen de aquí. Esos sitios tienen su propio aviso.",
        ],
      },
      {
        heading: "Derechos ARCO",
        paragraphs: [
          `Puedes pedir acceso, rectificación, cancelación u oposición sobre los datos personales que Erick Alexander Sánchez Guzmán tenga sobre ti. Escribe a ${email} y di qué quieres que se haga.`,
          "Si el único dato es un correo que enviaste, la respuesta tratará esa correspondencia.",
        ],
      },
      {
        heading: "Si estás fuera de México",
        paragraphs: [
          `Puedes pedir acceso, corrección o supresión en el mismo correo, ${email}. También puedes reclamar ante la autoridad de protección de datos del país donde vives.`,
        ],
      },
    ],
  },
};

export const cookiesCopy: Record<Locale, LegalPage> = {
  en: {
    title: "Cookie notice",
    blocks: [
      {
        heading: "What is stored",
        paragraphs: [
          "This site does not use analytics, advertising, or marketing cookies. Nothing here follows you across other sites.",
          "Two preferences can be saved on this device: the theme, light or dark, and the language, English or Spanish. They live in local storage. A cookie with the same choices lets the server render the page you already picked.",
          "Those preferences are essential for the choice you made. There is no non-essential cookie, so the site does not show an accept or reject banner.",
        ],
      },
      {
        heading: "How to remove them",
        paragraphs: [
          "Clear this site's cookies and site data in your browser. The next visit uses English and your system color scheme until you choose again.",
        ],
      },
    ],
  },
  es: {
    title: "Aviso de cookies",
    blocks: [
      {
        heading: "Qué se guarda",
        paragraphs: [
          "Este sitio no usa cookies de analítica, publicidad ni marketing. Nada de aquí te sigue en otros sitios.",
          "En este dispositivo se pueden guardar dos preferencias: el tema, claro u oscuro, y el idioma, inglés o español. Viven en el almacenamiento local. Una cookie con las mismas elecciones permite que el servidor dibuje la página que ya elegiste.",
          "Esas preferencias son necesarias para la elección que hiciste. No hay una cookie no esencial, así que el sitio no muestra un aviso para aceptar o rechazar.",
        ],
      },
      {
        heading: "Cómo quitarlas",
        paragraphs: [
          "Borra las cookies y los datos de este sitio en tu navegador. La siguiente visita usa inglés y el esquema de color del sistema hasta que elijas otra vez.",
        ],
      },
    ],
  },
};
