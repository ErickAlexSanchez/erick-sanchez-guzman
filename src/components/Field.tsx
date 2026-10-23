"use client";

import { useEffect } from "react";

export function Field() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let px = window.innerWidth * 0.5;
    let py = window.innerHeight * 0.38;
    let pointerSeen = false;

    const paint = (now: number) => {
      frame = 0;
      if (reduce.matches) return;
      const span = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scroll = (window.scrollY / span) * 22;
      let x = 50;
      let y = 38;
      if (!fine.matches) {
        const t = now / 1000;
        x = 50 + Math.sin(t / 14) * 16;
        y = 34 + Math.cos(t / 18) * 10 + scroll;
      } else if (pointerSeen) {
        x = (px / window.innerWidth) * 100;
        y = (py / window.innerHeight) * 100 * 0.72 + scroll;
      } else {
        y = 38 + scroll;
      }
      root.style.setProperty("--field-x", `${x}%`);
      root.style.setProperty("--field-y", `${y}%`);
      if (!fine.matches && !document.hidden) frame = requestAnimationFrame(paint);
    };

    const schedule = () => {
      if (reduce.matches || frame) return;
      frame = requestAnimationFrame(paint);
    };

    const onPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !fine.matches) return;
      pointerSeen = true;
      px = event.clientX;
      py = event.clientY;
      schedule();
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      if (!reduce.matches && !fine.matches) schedule();
    };

    const listen = () => {
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("scroll", schedule, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    };

    const silence = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", schedule);
      document.removeEventListener("visibilitychange", onVisibility);
      root.style.removeProperty("--field-x");
      root.style.removeProperty("--field-y");
    };

    const start = () => {
      if (reduce.matches) return;
      listen();
      if (!fine.matches) schedule();
    };

    const onPreference = () => {
      silence();
      start();
    };

    start();
    reduce.addEventListener("change", onPreference);
    fine.addEventListener("change", onPreference);

    return () => {
      reduce.removeEventListener("change", onPreference);
      fine.removeEventListener("change", onPreference);
      silence();
    };
  }, []);

  return <div aria-hidden="true" className="field" />;
}
