"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Post } from "@/lib/content";

export function BlogList({ posts }: { posts: Post[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? posts.filter((p) => p.category === active)
    : posts;

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === null
              ? "bg-violet-600 text-white"
              : "border border-white/[.08] text-zinc-400 hover:text-white"
          }`}
        >
          Hepsi
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === cat
                ? "bg-violet-600 text-white"
                : "border border-white/[.08] text-zinc-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 divide-y divide-white/[.06] border-y border-white/[.06]">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-zinc-500">
            Bu kategoride henüz yazı yok.
          </p>
        ) : (
          filtered.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group grid gap-3 py-7 sm:grid-cols-[130px_1fr_auto] sm:items-center"
            >
              <p className="font-mono text-[11px] tracking-wider text-violet-300">
                {post.category}
              </p>
              <div>
                <h2 className="text-xl font-bold transition group-hover:text-violet-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-500">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>{post.date}</span>
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:text-violet-400"
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
