import { PageShell } from "@/components/page-shell";

export default function About() {
  return (
    <PageShell>
      <section className="section max-w-3xl pt-20 sm:pt-28">
        <p className="eyebrow">Hakkımda</p>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Furkan Nantu
        </h1>

        <div className="mt-12 space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            Bursa Teknik Üniversitesi Endüstri Mühendisliği 4. sınıf
            öğrencisiyim. Veri analizi, süreç iyileştirme ve yazılım
            geliştirme ile ilgileniyorum.
          </p>
          <p>
            Üniversitede edindiğim analitik düşünme altyapısını, kendi
            kendime öğrendiğim yazılım becerileriyle birleştiriyorum.
            Karmaşık problemleri anlaşılır hale getirmeyi seviyorum.
          </p>
        </div>

        <div className="mt-16 border-t border-white/[.06] pt-12">
          <p className="eyebrow">Kullandıklarım</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Python",
              "SQL",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Power BI",
              "Docker",
              "Git",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/[.08] px-3 py-1.5 font-mono text-xs text-zinc-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
