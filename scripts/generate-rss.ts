import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { getPosts } from "../src/lib/content";

const BASE = "https://fnantu.com";

const posts = getPosts();
const items = posts
  .map(
    (p) => {
      const date = new Date(p.date);
      const pubDate = isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString();
      return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE}/blog/${p.slug}</link>
      <description><![CDATA[${p.excerpt}]]></description>
      <category>${p.category}</category>
      <pubDate>${pubDate}</pubDate>
      <guid>${BASE}/blog/${p.slug}</guid>
    </item>`;
    }
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Furkan Nantu</title>
    <link>${BASE}</link>
    <description>Endüstri Mühendisi — veri, yazılım ve sistemler üzerine notlar.</description>
    <language>tr</language>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

writeFileSync(join(process.cwd(), "public", "rss.xml"), xml);
const outDir = join(process.cwd(), "out");
if (existsSync(outDir)) {
  writeFileSync(join(outDir, "rss.xml"), xml);
}
console.log("✓ rss.xml generated");
