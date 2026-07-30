"use client";

import { useEffect, useState, useRef } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ body }: { body: string }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const headings: Heading[] = [];
  const lines = body.split("\n");
  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9ğüşıöç\s]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ id, text, level: match[1].length });
    }
  });

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="mt-12 rounded-[18px] border border-white/[.06] bg-zinc-900/50 p-5">
      <p className="font-mono text-[11px] tracking-wider text-violet-300">
        İÇİNDEKİLER
      </p>
      <ul className="mt-3 space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block text-sm transition hover:text-violet-300 ${
                h.level === 3 ? "pl-4" : ""
              } ${
                activeId === h.id
                  ? "font-semibold text-violet-300"
                  : "text-zinc-400"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
