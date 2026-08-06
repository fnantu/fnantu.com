import { PageShell } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projeler",
  description: "Üzerinde çalıştığım projeler.",
};

export default function Projects() {
  const projects = getProjects();

  return (
    <PageShell>
      <section className="section pt-20 sm:pt-28">
        <p className="eyebrow">Projeler</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-7xl">
          Üzerinde çalıştıklarım.
        </h1>

        {projects.length === 0 ? (
          <p className="mt-12 text-lg text-zinc-500">
            Projeler yakında burada olacak.
          </p>
        ) : (
          <>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Veri, operasyon ve yazılım odaklı projeler.
            </p>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </section>
    </PageShell>
  );
}
