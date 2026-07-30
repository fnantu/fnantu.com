import { PageShell } from "@/components/page-shell";
import { BlogList } from "@/components/blog-list";
import { BlogSearch } from "@/components/blog-search";
import { NewsletterForm } from "@/components/newsletter-form";
import { getPosts } from "@/lib/content";

export const metadata = {
  title: "Notlar",
  description: "Teknik yazılar ve ilgi alanlarım üzerine notlar.",
};

export default function Blog() {
  const posts = getPosts();

  return (
    <PageShell>
      <section className="section pt-20 sm:pt-28">
        <p className="eyebrow">Notlar</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Yazdıklarım.
        </h1>

        <div className="mt-10">
          <BlogSearch posts={posts} />
          <BlogList posts={posts} />
        </div>

        <div className="mt-16 max-w-md">
          <NewsletterForm />
        </div>
      </section>
    </PageShell>
  );
}
