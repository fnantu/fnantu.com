import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { validateBlogFrontmatter, validateProjectFrontmatter } from "./content-schema";

export type Project = {
  slug: string; number: string; title: string; summary: string; description: string;
  tags: string[]; year: string; outcome: string; body: string; github?: string; status?: string;
};

export type Post = {
  slug: string; category: string; title: string; excerpt: string; date: string; minutes: string; body: string;
};

function getReadingTime(body: string, wordsPerMinute = 200): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} dk`;
}

function parseISODate(dateStr: string): Date | null {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? null : date;
}

type RawItem = Record<string, string | undefined> & { body: string };

function readCollection(dir: string): RawItem[] {
  const directory = path.join(process.cwd(), "src", "content", dir);
  let files: string[];
  try {
    files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
  } catch (error) {
    console.warn(`Failed to read content directory ${dir}:`, error instanceof Error ? error.message : String(error));
    return [];
  }
  return files.map((file) => {
    try {
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(source);

      // gray-matter auto-converts YYYY-MM-DD to Date objects, convert back to string
      const normalizedData = { ...data } as Record<string, unknown>;
      if (normalizedData.date instanceof Date) {
        normalizedData.date = normalizedData.date.toISOString().split('T')[0];
      }

      // Validate frontmatter based on collection type
      if (dir === "blog") {
        const validation = validateBlogFrontmatter(normalizedData);
        if (!validation.valid) {
          console.warn(`Invalid blog frontmatter in ${file}:`, validation.errors.join("; "));
        }
      } else if (dir === "projects") {
        const validation = validateProjectFrontmatter(normalizedData);
        if (!validation.valid) {
          console.warn(`Invalid project frontmatter in ${file}:`, validation.errors.join("; "));
        }
      }

      return { ...(normalizedData as Record<string, string | undefined>), body: content.trim() };
    } catch (error) {
      console.error(`Failed to parse ${file}:`, error instanceof Error ? error.message : String(error));
      return { slug: "", body: "" };
    }
  });
}

export function getProjects(): Project[] {
  return readCollection("projects").map((item) => ({
    slug: item.slug || "",
    number: item.number || "",
    title: item.title || "",
    summary: item.summary || "",
    description: item.description || "",
    tags: (item.tags || "").split(",").map((tag: string) => tag.trim()).filter(Boolean),
    year: item.year || "",
    outcome: item.outcome || "",
    body: item.body || "",
    github: item.github || undefined,
    status: item.status || undefined,
  })).sort((a, b) => a.number.localeCompare(b.number));
}

export function getPosts(): Post[] {
  return readCollection("blog").map((item) => ({
    slug: item.slug || "",
    category: item.category || "",
    title: item.title || "",
    excerpt: item.excerpt || "",
    date: item.date || "",
    minutes: getReadingTime(item.body || ""),
    body: item.body || "",
  })).sort((a, b) => {
    const dateA = parseISODate(a.date);
    const dateB = parseISODate(b.date);
    if (dateA && dateB) return dateB.getTime() - dateA.getTime();
    if (dateA) return -1;
    if (dateB) return 1;
    return 0;
  });
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export { formatDateTR } from "./format";
