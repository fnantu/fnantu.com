import { PageShell } from "@/components/layout";
import { Avatar } from "@/components/ui";

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
        <div className="mt-8 flex justify-center">
          <div className="border-2 border-violet-500/50 rounded-full shadow-glow">
            <Avatar size="lg" priority className="border-0" />
          </div>
        </div>
        <h1 className="mt-6 text-center text-5xl font-extrabold tracking-tight sm:text-7xl">
          Furkan Nantu
        </h1>

        <div className="mt-12 space-y-5 text-lg leading-8 text-zinc-300">
          <p>
            Merhaba, ben Furkan NANTU. 👋
          </p>
          <p>
            Bursa Teknik Üniversitesi&apos;nde Endüstri Mühendisliği 4. sınıf
            öğrencisiyim. Mühendislik bakış açısını yazılım geliştirme ile
            birleştirerek gerçek problemlere çözüm üreten sistemler
            tasarlamayı seviyorum.
          </p>
          <p>
            Benim için yazılım, sadece kod yazmak değil; veriyi anlamlı
            hâle getirmek, süreçleri iyileştirmek ve insanların hayatını
            kolaylaştıran ürünler geliştirmek demek. Bu yüzden geliştirdiğim
            her projede önce problemi anlamaya, ardından mümkün olan en sade
            ve sürdürülebilir çözümü üretmeye odaklanıyorum.
          </p>
        </div>

        <div className="mt-14 space-y-10 border-t border-white/[.06] pt-14">
          <div>
            <p className="eyebrow">Neye İnanıyorum?</p>
            <div className="mt-4 space-y-4 text-base leading-7 text-zinc-400">
              <p>
                İyi bir mühendis, kullandığı teknolojilerle değil, çözdüğü
                problemlerle öne çıkar.
              </p>
              <p>
                Bu yüzden yeni bir teknoloji öğrenirken ilk sorum &quot;Bunu
                gerçek bir problemi çözmek için nasıl kullanabilirim?&quot; oluyor.
                Yapay zekâ, veri analizi veya otomasyon benim için amaç
                değil; daha iyi sistemler geliştirmek için kullandığım
                araçlar.
              </p>
              <p>
                Karmaşık sistemlerin arka planda çalıştığı, ancak ön tarafta
                herkesin rahatça kullanabildiği ürünler geliştirmek en büyük
                motivasyonum. Teknik bilgisi olmayan bir kullanıcının bile
                rahatlıkla kullanabileceği bir arayüz tasarlayabiliyorsam, o
                projeyi başarılı kabul ediyorum.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Şu Anda Neler Üzerinde Çalışıyorum?</p>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Şu sıralar ilgimi en çok çeken konular:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-7 text-zinc-300">
              <li>🤖 Çok ajanlı (Multi-Agent) yapay zekâ sistemleri</li>
              <li>🧠 RAG tabanlı bilgi erişim sistemleri</li>
              <li>📊 Veri analizi ve karar destek uygulamaları</li>
              <li>🗂️ Modern veritabanı teknolojileri (Qdrant, KùzuDB)</li>
              <li>⚙️ Süreç geliştirme ve dijital dönüşüm çözümleri</li>
              <li>💻 Çevrimdışı (Offline-First) çalışan uygulama mimarileri</li>
            </ul>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Her proje benim için yalnızca çalışan bir uygulama değil; yeni
              bir teknoloji öğrenme, farklı bir problem çözme ve mühendislik
              bakış açımı geliştirme fırsatı.
            </p>
          </div>

          <div>
            <p className="eyebrow">Kod Yazmadığım Zamanlarda</p>
            <div className="mt-4 space-y-4 text-base leading-7 text-zinc-400">
              <p>
                Bilgisayar başında olmadığım zamanlarda da problem çözmeyi
                seviyorum.
              </p>
              <p>
                Escape from Tarkov ve Deadlock gibi strateji odaklı oyunlar
                oynuyor, Warhammer 40K evreninin detaylı hikâyelerini
                keşfediyor ve ilgimi çeken teknolojileri araştırıyorum.
              </p>
              <p>
                Aynı zamanda öğrendiklerimi YouTube ve TikTok gibi
                platformlarda içerik hâline getirerek paylaşmayı planlıyorum.
                Bilgiyi paylaşmanın, öğrenme sürecinin en değerli
                parçalarından biri olduğuna inanıyorum.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Gelecek Hedefim</p>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Uzun vadede; yapay zekâ, veri analizi ve süreç geliştirmeyi
              bir araya getiren projelerde çalışan bir mühendis olmak
              istiyorum.
            </p>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              Amacım yalnızca yeni teknolojileri takip etmek değil; bu
              teknolojileri kullanarak insanların işlerini kolaylaştıran,
              verimliliği artıran ve gerçek problemlere çözüm üreten ürünler
              geliştirmek.
            </p>
          </div>
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
