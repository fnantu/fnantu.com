# Planlanan Proje Yapısı

Bu belge, master plandaki hedef mimariyi ve mevcut başlangıç uygulamasından sonraki geliştirme adımlarını tanımlar.

## Hedef klasör yapısı

```text
src/
├── app/                    # Next.js rotaları ve metadata
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   ├── cv/
│   ├── projects/
│   │   └── [slug]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/                 # Button, Badge, Container gibi temel bileşenler
│   ├── sections/           # Hero, Timeline, Skills gibi bölüm bileşenleri
│   └── layouts/            # Sayfa kabukları ve ortak yerleşimler
├── content/
│   ├── projects/           # Markdown/MDX proje dosyaları
│   └── blog/               # Markdown/MDX blog yazıları
├── config/                 # Site, navigasyon ve sosyal ağ ayarları
├── hooks/                  # İstemci tarafı yardımcı hook'lar
├── lib/                    # MDX ayrıştırma, yardımcı fonksiyonlar ve API istemcileri
├── styles/                 # Ek stil tanımları
└── types/                  # Paylaşılan TypeScript türleri

public/
├── documents/              # CV PDF ve indirilebilir dosyalar
├── images/                 # Genel görseller
├── logos/                  # Marka ve teknoloji logoları
└── screenshots/            # Proje ekran görüntüleri
```

## İçerik sistemi

Projeler ve blog yazıları üretim aşamasında Markdown veya MDX dosyalarından okunacaktır. Her dosyada frontmatter bulunmalıdır.

```yaml
---
title: "Proje başlığı"
slug: "proje-slug"
summary: "Kısa özet"
date: "2026-07-30"
tags: ["Python", "SQL"]
cover: "/images/projects/proje-kapak.webp"
github: "https://github.com/..."
demo: "https://..."
---
```

Bir proje detayında şu bölümler hedeflenir: kapak, kısa özet, problem, çözüm, teknolojiler, mimari, ekran görüntüleri, GitHub/demonstrasyon bağlantıları, öğrenilenler ve sonuç.

## Tasarım sistemi

- Arka plan: `#09090B`
- Yüzey/kart: `#18181B`
- Ana mor: `#6D28D9`
- İkincil mor: `#8B5CF6`
- Vurgu: `#A855F7`
- Başlık: `#FFFFFF`
- Metin: `#D4D4D8`
- Pasif metin: `#A1A1AA`
- Köşe yarıçapı: `18px`
- Yazı tipi: Inter veya Geist; kod parçaları için JetBrains Mono

Tasarım koyu modda, minimal ve kurumsal kalmalıdır. Glassmorphism, aşırı hareket ve parallax kullanılmamalıdır. Kart hover etkisi en fazla `scale(1.02)` olmalıdır.

## Geliştirme fazları

1. Temel kurulum ve kalite araçları: Prettier, ESLint, Husky.
2. Tasarım sistemi ve ortak UI bileşenleri.
3. Mobil menü, animasyonlar ve erişilebilirlik iyileştirmeleri.
4. Gerçek özgeçmiş, profil görseli ve iletişim bilgileri.
5. Markdown/MDX tabanlı proje sistemi ve proje ekran görüntüleri.
6. Markdown/MDX blog sistemi, etiket filtreleme ve arama.
7. GitHub API ile seçilmiş repo verilerinin entegrasyonu.
8. Schema.org yapılandırılmış veri, canonical URL'ler, analytics ve Lighthouse optimizasyonu.
9. Vercel dağıtımı ve canlı alan adı yapılandırması.

## Başarı ölçütleri

- Lighthouse Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- Telefon, tablet, dizüstü ve masaüstünde eksiksiz responsive görünüm
