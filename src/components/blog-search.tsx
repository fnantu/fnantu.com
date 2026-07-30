"use client";

import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { Post } from "@/lib/content";

export function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title", "excerpt", "category", "body"],
        threshold: 0.3,
      }),
    [posts]
  );

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : null;

  return (
    <div className="relative mb-10">
      <div className="relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Yazılarda ara..."
          className="w-full rounded-full border border-white/[.08] bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500/40"
        />
      </div>

      {results && results.length > 0 && query.trim() && (
        <div className="mt-3 rounded-[18px] border border-white/[.06] bg-zinc-900 p-2">
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={() => setQuery("")}
              className="block rounded-xl px-4 py-3 transition hover:bg-white/[.04]"
            >
              <p className="font-mono text-[10px] tracking-wider text-violet-300">
                {post.category}
              </p>
              <p className="mt-1 font-semibold">{post.title}</p>
              <p className="mt-1 text-xs text-zinc-500 line-clamp-1">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}

      {query.trim() && results?.length === 0 && (
        <div className="mt-3 rounded-[18px] border border-white/[.06] bg-zinc-900 p-6 text-center text-sm text-zinc-500">
          Sonuç bulunamadı.
        </div>
      )}
    </div>
  );
}
