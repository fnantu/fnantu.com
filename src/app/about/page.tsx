import { PageShell } from "@/components/page-shell";

const categories = [
  {
    label: "Programlama Dilleri",
    tools: ["C#", "JavaScript", "Python"],
  },
  {
    label: "Veritabanları",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "KùzuDB", "Qdrant"],
  },
  {
    label: "Yapay Zeka & Mimari",
    tools: [
      "Local LLM",
      "LangGraph",
      "Multi-agent",
      "ETL Pipeline",
      "Containerized",
    ],
  },
  {
    label: "Endüstriyel Otomasyon",
    tools: ["PLC Programlama"],
  },
  {
    label: "Oyun & Sunucu",
    tools: ["Sunucu Kurulumu", "Modlama", "Konfigürasyon"],
  },
  {
    label: "Ortam & Araçlar",
    tools: [
      "Cursor",
      "Gemini CLI",
      "Opencode",
      "Cloudcode",
      "Visual Studio Code",
      "Linux",
      "Windows",
    ],
  },
];

export default function About() {
  return (
    <PageShell>
      <section className="section max-w-3xl pt-20 sm:pt-28">
        <p className="eyebrow">Hakkımda</p>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Furkan Nantu
        </h1>

        <div className="mt-10 space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            Bursa Teknik Üniversitesi Endüstri Mühendisliği 4. sınıf
            öğrencisiyim. Veri analizi, yazılım geliştirme ve sistem
            tasarımıyla ilgileniyorum. Karmaşık problemleri anlaşılır
            çözümlere dönüştürmeyi seviyorum.
          </p>
        </div>

        <div className="mt-16 space-y-12 border-t border-white/[.06] pt-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="eyebrow">{cat.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/[.08] px-3 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
