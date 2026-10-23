import { PageShell } from "../components/PageShell";

export default function NotFound() {
  return (
    <PageShell current="home">
      <h1 className="font-headline text-headline-lg-mobile font-bold text-on-surface">
        Esa ruta no está
      </h1>
      <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
        El sitio tiene inicio, proyectos, stack y contacto.
      </p>
    </PageShell>
  );
}
