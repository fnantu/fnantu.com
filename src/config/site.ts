export const siteConfig = {
  name: "Furkan Nantu",
  title: "Furkan Nantu",
  description: "Endüstri Mühendisi — veri, yazılım ve sistemler üzerine.",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "https://fnantu.com",
  language: "tr_TR",
  author: {
    name: "Furkan Nantu",
    email: "nantufurkan@gmail.com",
  },
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "fnantu",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "fnantu",
    cacheTTL: parseInt(process.env.GITHUB_CACHE_TTL || "3600", 10),
  },
} as const;
