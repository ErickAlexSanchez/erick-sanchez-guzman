"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-space-sm">
      <button
        aria-label={copied ? "Correo copiado" : "Copiar correo de contacto"}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-surface-container-high/90 text-on-surface shadow-sm hover:text-primary-container"
        onClick={async () => {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 3000);
        }}
        title="Copiar correo de contacto"
        type="button"
      >
        <span className="material-symbols-outlined text-lg">
          {copied ? "check" : "content_copy"}
        </span>
      </button>
      <span className="sr-only" role="status">
        {copied ? `Correo copiado: ${email}` : ""}
      </span>
    </div>
  );
}
