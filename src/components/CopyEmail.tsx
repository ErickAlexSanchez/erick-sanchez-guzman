"use client";

import { useState } from "react";
import { fill } from "../content/messages";
import { person } from "../content/profile";
import { useLocale } from "./LocaleProvider";

export function CopyEmail() {
  const { copy } = useLocale();
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const message =
    state === "copied"
      ? copy.copyEmail.copied
      : state === "failed"
        ? fill(copy.copyEmail.failed, { email: person.email })
        : "";

  return (
    <div className="flex max-w-full flex-wrap items-center gap-2">
      <button
        aria-label={copy.copyEmail.copy}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:text-primary"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(person.email);
            setState("copied");
            window.setTimeout(() => setState("idle"), 4000);
          } catch {
            setState("failed");
          }
        }}
        type="button"
      >
        <span aria-hidden="true" className="material-symbols-outlined text-lg">
          {state === "copied" ? "check" : "content_copy"}
        </span>
      </button>
      <span className="max-w-[28ch] text-pretty text-sm text-on-surface-variant" role="status">
        {message}
      </span>
    </div>
  );
}
