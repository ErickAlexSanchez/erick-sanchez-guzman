"use client";

import { useState } from "react";

const kinds = [
  "Contrato",
  "Employer of record",
  "Conversación sobre un esfuerzo",
  "Otra",
] as const;

export function MailForm({ email }: { email: string }) {
  const [notice, setNotice] = useState("");

  return (
    <form
      className="flex flex-col gap-space-md"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        const from = String(data.get("from") ?? "").trim();
        const kind = String(data.get("kind") ?? "").trim();
        const context = String(data.get("context") ?? "").trim();
        const body = `Nombre o empresa: ${name}\nCorreo: ${from}\nTipo: ${kind}\n\n${context}`;
        const href = `mailto:${email}?subject=${encodeURIComponent(kind)}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
        setNotice("Se preparó el mensaje en tu aplicación de correo.");
      }}
    >
      <label className="flex flex-col gap-space-xs font-label-code text-label-code text-on-surface-variant uppercase">
        Nombre o empresa
        <input
          autoComplete="name"
          className="min-h-11 rounded-lg bg-surface-container-high px-space-md font-sans text-body-md text-on-surface normal-case"
          name="name"
          required
          type="text"
        />
      </label>
      <label className="flex flex-col gap-space-xs font-label-code text-label-code text-on-surface-variant uppercase">
        Correo
        <input
          autoComplete="email"
          className="min-h-11 rounded-lg bg-surface-container-high px-space-md font-sans text-body-md text-on-surface normal-case"
          name="from"
          required
          type="email"
        />
      </label>
      <label className="flex flex-col gap-space-xs font-label-code text-label-code text-on-surface-variant uppercase">
        Tipo de consulta
        <select
          className="min-h-11 rounded-lg bg-surface-container-high px-space-md font-sans text-body-md text-on-surface normal-case"
          name="kind"
          required
        >
          {kinds.map((kind) => (
            <option key={kind} value={kind}>
              {kind}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-space-xs font-label-code text-label-code text-on-surface-variant uppercase">
        Contexto
        <textarea
          className="min-h-28 rounded-lg bg-surface-container-high px-space-md py-space-sm font-sans text-body-md text-on-surface normal-case"
          name="context"
          required
        />
      </label>
      <button
        className="inline-flex min-h-11 items-center justify-center gap-space-xs rounded-xl bg-gradient-to-r from-primary-container to-secondary px-space-lg font-headline text-sm font-semibold text-on-secondary-fixed"
        type="submit"
      >
        <span className="material-symbols-outlined text-lg">send</span>
        Enviar por correo
      </button>
      <p aria-live="polite" className="min-h-5 font-body-sm text-body-sm text-tertiary-fixed-dim">
        {notice}
      </p>
    </form>
  );
}
