import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { PageShell } from "@/components/layout";
import { getProject, getProjects } from "@/lib/content";
import { ProjectJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.domain}/projects/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageShell>
      <ProjectJsonLd title={project.title} description={project.description} />
      <article className="section max-w-3xl pt-20 sm:pt-28">
        <Link href="/projects" className="link-arrow text-zinc-400">
          <ArrowLeft size={15} /> Projelere dön
        </Link>

        <p className="eyebrow mt-14">
          {project.number} / {project.year}
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-white/[.06] bg-white/5 sm:grid-cols-3">
          <div className="bg-zinc-900 p-5">
            <p className="text-xs text-zinc-500">Sonuç</p>
            <p className="mt-2 font-semibold">{project.outcome}</p>
          </div>
          <div className="bg-zinc-900 p-5 sm:col-span-2">
            <p className="text-xs text-zinc-500">Teknolojiler</p>
            <p className="mt-2 font-semibold">{project.tags.join(" · ")}</p>
          </div>
        </div>

        <div className="mt-14 space-y-7 text-[17px] leading-8 text-zinc-300">
          {project.body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projeyi GitHub'da incele (yeni sekmede açılır)"
              className="inline-flex items-center gap-2 rounded-full border border-white/[.08] px-5 py-3 text-sm font-bold transition hover:border-violet-500/40 hover:text-violet-300"
            >
              <Github size={16} /> GitHub&apos;da incele
            </a>
          )}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/[.08] px-5 py-3 text-sm font-bold transition hover:border-white/[.15]"
          >
            <ArrowLeft size={15} /> Tüm projeler
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
