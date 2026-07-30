import type { Post } from "@/lib/content";

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Furkan Nantu",
          jobTitle: "Endüstri Mühendisi",
          url: "https://furkannantu.com",
          sameAs: [
            "https://github.com/fnantu",
            "https://www.linkedin.com/in/furkan-nantu-6b1827175/",
          ],
        }),
      }}
    />
  );
}

export function BlogPostJsonLd({
  post,
}: {
  post: Post;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: "Furkan Nantu",
          },
        }),
      }}
    />
  );
}

export function ProjectJsonLd({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: title,
          description,
          author: {
            "@type": "Person",
            name: "Furkan Nantu",
          },
        }),
      }}
    />
  );
}
