import { QrCode } from "@/components/qr-code";

const contacts = [
  {
    icon: "📍",
    label: "Bursa",
    href: "https://www.google.com/maps/place/Bursa",
  },
  {
    icon: "✉️",
    label: "furkannantu@hotmail.com",
    href: "mailto:furkannantu@hotmail.com",
  },
  { icon: "🌐", label: "fnantu.com", href: "https://fnantu.com" },
  { icon: "💻", label: "github.com/fnantu", href: "https://github.com/fnantu" },
  {
    icon: "💼",
    label: "linkedin.com/in/furkan-nantu",
    href: "https://www.linkedin.com/in/furkan-nantu-6b1827175/",
  },
];

const skills = [
  "Süreç İyileştirme",
  "Sistem Analizi",
  "Veri Analitiği & ETL",
  "Yapay Zeka (LLM, RAG)",
  "Python & C#",
  "TypeScript & Next.js",
  "SQL & NoSQL",
  "Docker",
  "Power BI",
];

const languages = [
  { name: "Türkçe", level: "Ana Dil" },
  { name: "İngilizce", level: "Orta Seviye (Teknik Okuma/Yazma)" },
];

const interests = [
  "Kişisel Verimlilik Yazılımları",
  "Strateji & Taktik Oyunları",
  "Warhammer 40K Evreni",
  "İçerik Üretimi (YouTube)",
  "Bilim Kurgu Edebiyatı",
];

const cvProjects = [
  {
    title: "OEE Monitor",
    subtitle: "Endüstriyel telemetri izleme sistemi",
    year: "2026",
    tags: ["Python", "RabbitMQ", "TimescaleDB", "KùzuDB"],
    bullets: [
      "RabbitMQ + TimescaleDB ile gerçek zamanlı sensör veri işleme mikroservisi geliştirdim",
      "KùzuDB graf veritabanıyla makine bağımlılık topolojisi modelleyip kök-neden analizi imkanı sağladım",
      "Zaman serisi verilerinde anomali tespiti yapan AI katmanı entegre ettim",
    ],
  },
  {
    title: "CRM Platformu",
    subtitle: "Cross-platform müşteri ilişkileri yönetimi",
    year: "2026",
    tags: ["C#", ".NET 8", "WinForms", "Avalonia UI"],
    bullets: [
      ".NET 8 ile WinForms + Avalonia UI cross-platform mimarisi kurdum",
      "RFM analiz motoruyla müşterileri 10 sadakat segmentine otomatik ayıran sistem geliştirdim",
    ],
  },
  {
    title: "MindForge",
    subtitle: "AI destekli offline-first bilgi yönetimi",
    year: "2026",
    tags: ["C#", "Avalonia UI", "Python", "LangGraph"],
    bullets: [
      "LangGraph tabanlı 4 AI ajanı (STT, görev çıkarımı, planlama, semantik bağlantı) geliştirdim",
      "SQLite-PostgreSQL arası offline-first senkronizasyon ve çakışma çözümleme mekanizması kurdum",
    ],
  },
  {
    title: "GameSense",
    subtitle: "GraphRAG tabanlı oyun koçluğu sistemi",
    year: "2026, Ar-Ge",
    tags: ["Python", "LangGraph", "Qdrant", "KùzuDB"],
    bullets: [
      "Qdrant (vektör) + KùzuDB (graf) hibrit RAG mimarisi tasarladım",
      "Multi-agent LLM sistemi için LangGraph durum makinesi kurguladım",
    ],
  },
];

const summary =
  "Bursa Teknik Üniversitesi Endüstri Mühendisliği 4. sınıf öğrencisi olarak; operasyonel verimlilik, süreç iyileştirme ve sistem analizi konularına derin bir ilgi duyuyorum. Temel odak noktam, karmaşık yapılar içindeki darboğazları tespit etmek, kaynak planlamasını optimize etmek ve işletmelerin stratejik hedefleri doğrultusunda veri odaklı karar destek mekanizmaları kurgulamaktır. Klasik mühendislik disiplinlerini günümüzün dijital dönüşüm ve veri analitiği gereksinimleriyle harmanlayarak, sürdürülebilir ve ölçeklenebilir sistemler tasarlamayı amaçlıyorum.\n\nProblem çözme yaklaşımım, olaylara parçalar halinde değil, bütüncül bir iş zekası ve mühendislik perspektifinden bakmayı temel alıyor. Süreçleri analiz ederken maliyetleri minimize edecek, iş akışlarını hızlandıracak ve kaliteyi artıracak analitik yöntemleri merkeze alıyorum. Akademik eğitimimde olgunlaştırdığım bu sistem odaklı düşünme yeteneğini yalnızca teoride bırakmak yerine, gerçek dünya senaryolarında uygulamaya geçirmek en büyük motivasyonum. Bu doğrultuda, öğrenim hayatımla eş zamanlı olarak aktif sorumluluk alabileceğim ve şirketin operasyonlarına doğrudan katma değer üretebileceğim uzun soluklu bir profesyonel rolde çalışmayı hedefliyorum.";

export function CvTemplate() {
  return (
    <div className="cv-root">
      <div className="cv-a4">
        <header className="hdr">
          <div>
            <h1>Furkan NANTU</h1>
            <h2>Endüstri Mühendisliği Öğrencisi</h2>
          </div>
          <a className="qr" href="https://fnantu.com" target="_blank" rel="noopener noreferrer">
            <span className="qr-b">
              <QrCode url="https://fnantu.com" size={68} />
            </span>
            <span className="qr-l">fnantu.com ↓ Tara</span>
          </a>
        </header>

        <div className="body">
          <aside className="side">
            <div>
              <div className="st">İletişim</div>
              <div className="c-list">
                {contacts.map((contact) => (
                  <a
                    className="c-item"
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    key={contact.label}
                  >
                    <span>{contact.icon}</span>
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="st">Yetenekler</div>
              <div className="skills">
                {skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="st">Diller</div>
              {languages.map((language) => (
                <div className="l-item" key={language.name}>
                  <div className="l-name">{language.name}</div>
                  <div className="l-lvl">{language.level}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="st">İlgi Alanları</div>
              {interests.map((interest) => (
                <div className="i-item" key={interest}>
                  <span className="dot" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </aside>

          <main className="main">
            <section>
              <div className="s-head">
                <div className="s-t">Hakkımda</div>
                <div className="s-bar" />
              </div>
              <p className="summary">{summary}</p>
            </section>

            {cvProjects.length > 0 && (
              <section>
                <div className="s-head">
                  <div className="s-t">Projeler</div>
                  <div className="s-bar" />
                </div>
                {cvProjects.map((project) => (
                  <div className="card" key={project.title}>
                    <div className="c-head">
                      <span className="c-title">
                        {project.title} <span className="p-sub">— {project.subtitle}</span>
                      </span>
                      <div className="tags">
                        {project.year && (
                          <span className="tb">{project.year}</span>
                        )}
                        {project.tags.map((tag) => (
                          <span className="tb" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="p-bullets">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            <section>
              <div className="s-head">
                <div className="s-t">Eğitim</div>
                <div className="s-bar" />
              </div>
              <div className="tl">
                <span className="yb">Devam</span>
                <div>
                  <div className="edu">Bursa Teknik Üniversitesi</div>
                  <div className="edu-sub">Endüstri Mühendisliği (Lisans)</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
