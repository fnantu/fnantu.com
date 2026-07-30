import Link from "next/link";
import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { getPosts, getProjects } from "@/lib/content";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";
import { PersonJsonLd } from "@/components/json-ld";

export default async function Home() {
  const projects = getProjects();
  const posts = getPosts();
  const profile = await getGitHubProfile();
  const repos = await getGitHubRepos(4);

  return (
    <PageShell>
      <PersonJsonLd />
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="section relative min-h-[580px] pt-28 sm:pt-36">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-.04em] sm:text-7xl lg:text-8xl">
            Furkan Nantu
          </h1>
          <p className="mt-5 font-mono text-sm tracking-wider text-violet-300">
            Endüstri Mühendisi
          </p>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            Veri ve yazılımla uğraşan bir endüstri mühendisiyim. Çalıştığım
            şeyleri burada paylaşıyorum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold transition hover:bg-violet-500 hover:shadow-glow-btn"
            >
              Projeler
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/[.08] px-5 py-3 text-sm font-bold transition hover:bg-white/[.04]"
            >
              Hakkımda
            </Link>
          </div>
        </div>
      </section>

      {profile && (
        <section className="section pt-4">
          <div className="mb-8">
            <p className="eyebrow">GitHub</p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="card p-5">
              <p className="text-xs text-zinc-500">Repo</p>
              <p className="mt-1 font-mono text-2xl font-bold">
                {profile.public_repos}
              </p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-zinc-500">Takipçi</p>
              <p className="mt-1 font-mono text-2xl font-bold">
                {profile.followers}
              </p>
            </div>
            <div className="card p-5">
              <p className="text-xs text-zinc-500">Profil</p>
              <a
                href={profile.html_url}
                target="_blank"
                className="mt-1 flex items-center gap-2 font-mono text-sm font-bold text-violet-300 transition hover:text-violet-400"
              >
                @{profile.login}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {repos.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  className="card group block p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold group-hover:text-violet-300">
                      {repo.name}
                    </h3>
                    <div className="flex shrink-0 items-center gap-3 text-xs text-zinc-500">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                  {repo.description && (
                    <p className="mt-2 text-sm leading-6 text-zinc-400 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {repo.language && (
                      <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] text-violet-300">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[10px] text-zinc-500"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          )}

          <a
            href={`https://github.com/${profile.login}`}
            target="_blank"
            className="link-arrow mt-8"
          >
            GitHub profilini gör
            <ArrowUpRight size={15} />
          </a>
        </section>
      )}

      <section className="section pt-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Projeler</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Üzerinde çalıştıklarım.
            </h2>
          </div>
          {projects.length > 0 && (
            <Link href="/projects" className="link-arrow hidden sm:flex">
              Tümü
              <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
        {projects.length === 0 ? (
          <p className="text-zinc-500">
            Projeler yakında burada olacak.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <div className="mb-8">
          <p className="eyebrow">Notlar</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Yazdıklarım.
          </h2>
        </div>
        <div className="divide-y divide-white/[.06] border-y border-white/[.06]">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between gap-5 py-6"
              key={post.slug}
            >
              <div>
                <p className="font-mono text-[10px] tracking-widest text-violet-300">
                  {post.category} · {post.minutes}
                </p>
                <h3 className="mt-2 text-lg font-bold transition group-hover:text-violet-300">
                  {post.title}
                </h3>
              </div>
              <ArrowUpRight
                className="shrink-0 text-zinc-500 transition group-hover:text-violet-400"
                size={18}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="rounded-[24px] border border-white/[.06] px-7 py-12 sm:px-12 sm:py-14">
          <p className="eyebrow">İletişim</p>
          <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
            Bir sorunuz ya da fikriniz varsa yazmaktan çekinmeyin.
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold transition hover:bg-violet-500 hover:shadow-glow-btn"
          >
            İletişim
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
