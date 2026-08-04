<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Cloudflare_Pages-380D96?style=for-the-badge&logo=cloudflare" />
</p>

<h1 align="center">fnantu.com</h1>

<p align="center">
  Personal portfolio &amp; blog website — built with <b>Next.js</b>, <b>React</b> and <b>Tailwind CSS</b>.
  <br />
  <a href="https://fnantu.com"><strong>Visit live site →</strong></a>
</p>

---

## ✨ Features

- **Portfolio** — Featured projects with static detail pages (`/projects/[slug]`)
- **Blog** — Markdown-driven technical articles with full-text search (`fuse.js`)
- **CV** — HTML resume view with print/PDF support (`/cv`)
- **SEO Ready** — Open Graph, Twitter cards, `robots.txt` and `sitemap.xml`
- **Content Layer** — Simple Markdown-based content management (`src/lib/content.ts`)
- **Fully Static** — Deployed on Cloudflare Pages via `@cloudflare/next-on-pages`

## 🧱 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 · React 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 3.4 · PostCSS |
| **Content** | Markdown · gray-matter · fuse.js |
| **Icons / UI** | lucide-react · qrcode.react |
| **Deployment** | Cloudflare Pages · Wrangler |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build (includes RSS generation)
npm run build

# Lint
npm run lint
```

## 📁 Project Structure

```
├── public/               # Static assets (images, documents, rss.xml)
├── scripts/              # Build-time utilities (RSS generation)
└── src/
    ├── app/              # App Router pages & metadata routes
    ├── components/       # Reusable UI components
    ├── content/
    │   ├── blog/         # Blog posts (Markdown)
    │   └── projects/     # Project pages (Markdown)
    └── lib/              # Content & helper libraries
```

## 📝 Adding Content

Add a Markdown file to `src/content/blog/` or `src/content/projects/` with the required frontmatter — the content layer picks it up automatically.

## ⚖️ License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  Made with ♥ by <a href="https://github.com/fnantu">Furkan Nantu</a>
</p>
