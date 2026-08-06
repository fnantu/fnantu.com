import { siteConfig } from "@/config/site";

export type GitHubProfile = {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
};

export type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
};

const BASE = "https://api.github.com";

async function fetchGitHub(path: string) {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "fnantu-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`${BASE}${path}`, {
      headers,
      next: { revalidate: siteConfig.github.cacheTTL }
    });
    if (!res.ok) {
      console.warn(`GitHub API error: ${res.status} ${res.statusText}`);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error instanceof Error ? error.message : String(error));
    return null;
  }
}

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  return fetchGitHub(`/users/${siteConfig.github.username}`);
}

export async function getGitHubRepos(count = 6): Promise<GitHubRepo[]> {
  const repos = await fetchGitHub(
    `/users/${siteConfig.github.username}/repos?sort=stars&per_page=${count}&type=owner`
  );
  if (!Array.isArray(repos)) return [];
  return repos.filter((r: GitHubRepo) => !r.fork).slice(0, count);
}

export async function getGitHubLanguages(): Promise<string[]> {
  const repos = await getGitHubRepos(30);
  const langs = new Set<string>();
  repos.forEach((r) => {
    if (r.language) langs.add(r.language);
  });
  return Array.from(langs).slice(0, 8);
}
