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

const GITHUB_USERNAME = "fnantu";
const BASE = "https://api.github.com";

async function fetchGitHub(path: string) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "fnantu-portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(`${BASE}${path}`, { headers, next: { revalidate: 3600 } });
  if (!res.ok) return null;
  return res.json();
}

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  return fetchGitHub(`/users/${GITHUB_USERNAME}`);
}

export async function getGitHubRepos(count = 6): Promise<GitHubRepo[]> {
  const repos = await fetchGitHub(
    `/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=${count}&type=owner`
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
