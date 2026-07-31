import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

const MONTHS: Record<string, number> = {
  oca: 1, şub: 2, sub: 2, mar: 3, nis: 4, may: 5, haz: 6,
  tem: 7, ağu: 8, agu: 8, eyl: 9, eki: 10, kas: 11, ara: 12,
};

function parseTurkishDate(dateStr: string): Date | null {
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const monthKey = parts[1].toLowerCase().slice(0, 3);
  const month = MONTHS[monthKey];
  const year = parseInt(parts[2], 10);
  if (!day || !month || !year) return null;
  return new Date(year, month - 1, day);
}

type RawItem = Record<string, string | undefined> & { body: string };

function readCollection(dir: string): RawItem[] {
  const directory = path.join(process.cwd(), "src", "content", dir);
  let files: string[];
  try {
    files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
  } catch {
    return [];
  }
  return files.map((file) => {
    const source = fs.readFileSync(path.join(directory, file), "utf8");
    const { data, content } = matter(source);
    return { ...(data as Record<string, string | undefined>), body: content.trim() };
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
    const dateA = parseTurkishDate(a.date);
    const dateB = parseTurkishDate(b.date);
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
