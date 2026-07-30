import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";

export const dynamic = "force-static";

const base = "https://fnantu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const posts = getPosts();

  return [
    "",
    "/about",
    "/projects",
    "/blog",
    "/cv",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ].map((url) => ({ url: `${base}${url}`, lastModified: new Date() }));
}
