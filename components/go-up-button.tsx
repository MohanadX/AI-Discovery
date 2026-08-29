"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function GoUpButton() {
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 520 : false,
  );
  useEffect(() => {
    function updateVisibility() {
      const nextIsVisible = window.scrollY > 520;
      setIsVisible((currentIsVisible) =>
        currentIsVisible === nextIsVisible ? currentIsVisible : nextIsVisible,
      );
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Go to top"
      title="Go to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1} // hide from focus if it is hidden
      onClick={() => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "instant" : "smooth",
        });
      }}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--color-accent)_55%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-surface-raised)_92%,transparent)] text-[var(--color-accent)] shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}>
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
