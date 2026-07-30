# Uygulama Kaydı

Bu belge, 30 Temmuz 2026 tarihinde portföy sitesi için eklenen başlangıç uygulamasını kaydeder. Mevcut herhangi bir dosya veya veri silinmemiştir.

## Eklenen altyapı

- Next.js 15, React, TypeScript ve Tailwind CSS yapılandırması eklendi.
- `package.json`, `tsconfig.json`, `next.config.ts` ve `postcss.config.mjs` oluşturuldu.
- Global koyu tema; mor vurgu renkleri, tipografi, kart ve bölüm stilleri eklendi.
- Sayfa üst bilgisi (navigasyon) ve alt bilgisi oluşturuldu.
- Ortak sayfa kabuğu ve tekrar kullanılabilir proje kartı bileşeni eklendi.

## Eklenen sayfalar

| Rota | İçerik |
| --- | --- |
| `/` | Hero, yaklaşım, seçili projeler, yetkinlikler, yazılar ve iletişim çağrısı |
| `/about` | Kişisel yaklaşım ve çalışma prensipleri |
| `/projects` | Proje listesi |
| `/projects/[slug]` | Statik üretilen proje detayları |
| `/blog` | Teknik yazı listesi |
| `/blog/[slug]` | Statik üretilen yazı detayları |
| `/cv` | HTML özgeçmiş görünümü ve PDF indirme bağlantısı |
| `/contact` | E-posta ve sosyal ağ bağlantıları |

## İçerik ve SEO

- Örnek proje ve blog içerikleri `src/content/projects/` ve `src/content/blog/` içindeki Markdown dosyalarında tanımlandı.
- Frontmatter alanlarını okuyan içerik katmanı `src/lib/content.ts` içinde eklendi; yeni bir içerik için ilgili klasöre `.md` dosyası eklemek yeterlidir.
- Sayfa başlıkları, açıklamalar, Open Graph ve Twitter kartı varsayılanları eklendi.
- `robots.txt` ve `sitemap.xml` Next.js metadata rotalarıyla üretiliyor.
- CV için `public/documents/` klasörü oluşturuldu. PDF dosyası henüz eklenmediği için indirme bağlantısı, PDF eklendikten sonra çalışacaktır.

## Doğrulama durumu

- Bağımlılık kurulumu başlatıldı.
- `npm run build` başarıyla tamamlandı.
- Tüm sayfalar, proje/yazı detay rotaları, `robots.txt` ve `sitemap.xml` statik olarak üretildi.
- NPM kurulumunda yalnızca Node 18 ile bazı dolaylı ESLint paketlerinin Node sürümü hakkındaki uyarıları görülüyor; derlemeyi engellemiyor.

## Sonraki geliştirme

- Mobil navigasyon erişilebilir açılır menü olarak eklendi.

## Kişiselleştirilmesi gerekenler

- `src/lib/content.ts` içindeki örnek proje ve yazı metinleri gerçek içerikle değiştirilmelidir.
- GitHub, LinkedIn ve e-posta bağlantıları gerçek adreslerle güncellenmelidir.
- `public/documents/furkan-nantu-cv.pdf` dosyası eklenmelidir.
- Alan adı henüz kesin değilse `https://furkannantu.com` geçen metadata ve sitemap adresleri güncellenmelidir.
