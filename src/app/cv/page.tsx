import { Download } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "CV",
  description: "Furkan Nantu — özgeçmiş.",
};

export default function CV() {
  return (
    <PageShell>
      <section className="section max-w-3xl pt-20 sm:pt-28">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Özgeçmiş</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
              Furkan Nantu
            </h1>
            <p className="mt-3 text-lg text-zinc-400">
              Endüstri Mühendisi
            </p>
          </div>
          <a
            href="/documents/furkan-nantu-cv.pdf"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-glow-btn"
          >
            <Download size={16} /> PDF indir
          </a>
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <p className="eyebrow">Profil</p>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Endüstri Mühendisliği eğitimi almış, veri analizi, yazılım
              geliştirme ve süreç iyileştirme alanlarında çalışan biriyim.
              Analitik problem çözme ile pratik uygulama arasında köprü
              kuruyorum.
            </p>
          </section>

          <section>
            <p className="eyebrow">Yetkinlikler</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Veri analizi ve görselleştirme",
                "Python, SQL, TypeScript",
                "Süreç iyileştirme ve operasyon yönetimi",
                "Web geliştirme (React, Next.js)",
                "Yapay zeka ve makine öğrenmesi",
                "İş zekası (Power BI, ETL)",
              ].map((item) => (
                <li className="card p-4 text-sm text-zinc-300" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="eyebrow">Eğitim</p>
            <div className="mt-5 space-y-5 border-l border-violet-500/40 pl-6">
              <div>
                <p className="font-mono text-xs text-violet-300">
                  Endüstri Mühendisliği
                </p>
                <p className="mt-1 text-zinc-500 text-sm">
                  Analitik problem çözme, optimizasyon, veri analizi ve süreç
                  yönetimi altyapısı.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
