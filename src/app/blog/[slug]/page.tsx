import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/layout";
import { getPost, getPosts } from "@/lib/content";
import { BlogPostJsonLd } from "@/components/json-ld";
import { TableOfContents } from "@/components/toc";

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9ğüşıöç\s]/g, "")
    .replace(/\s+/g, "-");
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    const h2 = block.match(/^## (.+)/);
    if (h2)
      return (
        <h2 key={i} id={slugify(h2[1])} className="pt-6 text-2xl font-bold text-white">
          {h2[1]}
        </h2>
      );
    const h3 = block.match(/^### (.+)/);
    if (h3)
      return (
        <h3 key={i} id={slugify(h3[1])} className="pt-4 text-xl font-semibold text-white">
          {h3[1]}
        </h3>
      );
    return <p key={i}>{block}</p>;
  });
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <BlogPostJsonLd post={post} />
      <article className="section max-w-3xl pt-20 sm:pt-28">
        <Link href="/blog" className="link-arrow text-zinc-400">
          <ArrowLeft size={15} /> Notlara dön
        </Link>

        <p className="eyebrow mt-14">
          {post.category} · {post.date} · {post.minutes}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>

        <TableOfContents body={post.body} />

        <div className="mt-10 space-y-5 text-[17px] leading-8 text-zinc-300">
          {renderBody(post.body)}
        </div>
      </article>
    </PageShell>
  );
}
