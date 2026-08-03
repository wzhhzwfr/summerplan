"use client";

import type { ReactNode } from "react";

type ScrollButtonProps = {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export default function ScrollButton({
  targetId,
  className = "",
  ariaLabel,
  children,
}: ScrollButtonProps) {
  function scrollToSection() {
    const target = document.getElementById(targetId);
    if (!target) return;

    const header = document.querySelector<HTMLElement>(".site-header");
    const headerHeight = targetId === "top" ? 0 : (header?.offsetHeight ?? 0);
    const top =
      targetId === "top"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  }

  return (
    <button
      type="button"
      className={`scroll-control ${className}`.trim()}
      onClick={scrollToSection}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
