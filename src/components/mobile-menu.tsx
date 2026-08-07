"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "Hakkımda" },
  { href: "/projects", label: "Projeler" },
  { href: "/blog", label: "Yazılar" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "İletişim" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className="rounded-md p-1 text-zinc-100 transition hover:text-violet-300 focus-ring"
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      {isOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobil navigasyon"
          className="absolute inset-x-0 top-16 border-b border-white/[.06] bg-zinc-950 px-5 py-5 shadow-2xl"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-300 transition hover:bg-white/[.04] hover:text-violet-300 focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
